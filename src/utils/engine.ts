import { RawDataRow, SystemParameters, RuleEngineRecord, GuardRailsRecord, DashboardRecord } from "../types";

/**
 * Rounds a number to 2 decimal places.
 */
export function roundTo2(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

/**
 * Calculates rule engine parameters for a single raw data row.
 */
export function calculateRuleEngineRecord(
  row: RawDataRow,
  params: SystemParameters
): RuleEngineRecord {
  const velocity30D = row.totalUnits > 0 ? (row.moveIns30D - row.moveOuts30D) / row.totalUnits : 0;
  const competitorGapPct = row.competitorRate > 0 ? (row.competitorRate - row.streetRate) / row.competitorRate : 0;

  // Pricing decision algorithm
  let baseDecision: "Raise" | "Lower" | "Hold" = "Hold";
  if (row.physicalOccupancy >= params.occupancyUpperLimit) {
    baseDecision = "Raise";
  } else if (row.physicalOccupancy < params.occupancyLowerLimit) {
    baseDecision = "Lower";
  } else if (row.physicalOccupancy >= 0.85 && velocity30D > 0.05) {
    baseDecision = "Raise";
  } else if (row.physicalOccupancy < 0.85 && row.physicalOccupancy >= params.occupancyLowerLimit && velocity30D < -0.05) {
    baseDecision = "Lower";
  }

  // Raw base change
  let baseStepChange = 0;
  if (baseDecision === "Raise") {
    baseStepChange = roundTo2(row.streetRate * params.standardRaiseStep);
  } else if (baseDecision === "Lower") {
    baseStepChange = roundTo2(row.streetRate * params.standardLowerStep);
  }

  return {
    id: row.id,
    facilityId: row.facilityId,
    unitType: row.unitType,
    key: `${row.facilityId}_${row.unitType}`,
    velocity30D: roundTo2(velocity30D),
    competitorGapPct: roundTo2(competitorGapPct),
    baseDecision,
    baseStepChange,
  };
}

/**
 * Calculates guard rails values for a single raw data row and its rule engine counterpart.
 */
export function calculateGuardRailsRecord(
  row: RawDataRow,
  ruleRec: RuleEngineRecord,
  params: SystemParameters
): GuardRailsRecord {
  const coolingPass = row.daysSinceLastAdj >= params.minAdjustmentInterval;
  const deadbandPass = Math.abs(row.physicalOccupancy - row.occupancyLastWeek) >= params.deadbandThreshold;

  let finalAllowedAction: "Raise" | "Lower" | "Hold" | "Hold (Cooling Protected)" | "Hold (Deadband Filtered)" = "Hold";

  if (ruleRec.baseDecision === "Hold") {
    finalAllowedAction = "Hold";
  } else if (!coolingPass) {
    finalAllowedAction = "Hold (Cooling Protected)";
  } else if (!deadbandPass) {
    finalAllowedAction = "Hold (Deadband Filtered)";
  } else {
    finalAllowedAction = ruleRec.baseDecision;
  }

  // Calculate clamped adjustment percentage
  let cappedAdjustmentPct = 0;
  if (finalAllowedAction === "Raise") {
    cappedAdjustmentPct = Math.min(params.standardRaiseStep, params.singleMaxAdjustmentCap);
  } else if (finalAllowedAction === "Lower") {
    cappedAdjustmentPct = Math.max(params.standardLowerStep, -params.singleMaxAdjustmentCap);
  }

  const cappedAdjustmentAmount = roundTo2(row.streetRate * cappedAdjustmentPct);
  const finalRecomRate = roundTo2(row.streetRate + cappedAdjustmentAmount);

  // Detail audit trails
  let overrideReason = "Rule Executed - No Intervention";
  if (ruleRec.baseDecision !== finalAllowedAction) {
    if (finalAllowedAction === "Hold (Cooling Protected)") {
      overrideReason = `${ruleRec.baseDecision} Blocked: Cooling period (${row.daysSinceLastAdj}/${params.minAdjustmentInterval} days) not met.`;
    } else if (finalAllowedAction === "Hold (Deadband Filtered)") {
      const diff = roundTo2(Math.abs(row.physicalOccupancy - row.occupancyLastWeek) * 100);
      const thr = roundTo2(params.deadbandThreshold * 100);
      overrideReason = `${ruleRec.baseDecision} Filtered: Occupancy change (${diff}%) below deadband threshold (${thr}%).`;
    }
  } else if (finalAllowedAction !== "Hold") {
    const isClamped = Math.abs(cappedAdjustmentPct) < Math.abs(ruleRec.baseDecision === "Raise" ? params.standardRaiseStep : params.standardLowerStep);
    if (isClamped) {
      overrideReason = `Adjusted by Guard Rail Guidelines (Price capped at ${params.singleMaxAdjustmentCap * 100}%).`;
    }
  }

  return {
    id: row.id,
    facilityId: row.facilityId,
    unitType: row.unitType,
    key: ruleRec.key,
    coolingPass,
    deadbandPass,
    finalAllowedAction,
    cappedAdjustmentPct: roundTo2(cappedAdjustmentPct),
    cappedAdjustmentAmount,
    finalRecomRate,
    overrideReason,
  };
}

/**
 * Calculates dashboard and manager approval fields.
 */
export function calculateDashboardRecord(
  row: RawDataRow,
  ruleRec: RuleEngineRecord,
  guardRec: GuardRailsRecord,
  params: SystemParameters,
  approvedIds: Set<string>
): DashboardRecord {
  const absChange = Math.abs(guardRec.finalRecomRate - row.streetRate);
  const pctChange = row.streetRate > 0 ? absChange / row.streetRate : 0;

  // Triggers manager review if price change violates parameters B10 or B11
  const needsReview = pctChange >= params.approvalTriggerPct || absChange >= params.approvalTriggerVal;

  let approvalLevel: "System Hold - No Action" | "⚠️ Manager Approval Required" | "✅ Auto-Execute Authorized" = "System Hold - No Action";
  if (guardRec.finalAllowedAction.startsWith("Hold")) {
    approvalLevel = "System Hold - No Action";
  } else if (needsReview) {
    approvalLevel = "⚠️ Manager Approval Required";
  } else {
    approvalLevel = "✅ Auto-Execute Authorized";
  }

  // Action mapping: Promo, Raise, Lower, Hold
  let actionPlan: "Raise" | "Lower" | "Hold" | "Promo" = "Hold";
  if (guardRec.finalAllowedAction === "Raise") {
    actionPlan = "Raise";
  } else if (guardRec.finalAllowedAction === "Lower") {
    // If occupancy is critically low (e.g. < 70%), classify as a Promotional action
    actionPlan = row.physicalOccupancy < 0.70 ? "Promo" : "Lower";
  }

  // Construct trigger descriptions
  let triggerReason = "Steady operational indicators. No pricing adjustment required.";
  if (guardRec.finalAllowedAction === "Raise") {
    triggerReason = `High Physical Occupancy (${roundTo2(row.physicalOccupancy * 100)}%) >= Upper Limit (${roundTo2(params.occupancyUpperLimit * 100)}%).`;
    if (row.physicalOccupancy < params.occupancyUpperLimit && ruleRec.velocity30D > 0.05) {
      triggerReason = `Strong demand momentum (30D net velocity +${roundTo2(ruleRec.velocity30D * 100)}%) with high occupancy (${roundTo2(row.physicalOccupancy * 100)}%).`;
    }
  } else if (guardRec.finalAllowedAction === "Lower") {
    triggerReason = `Low Physical Occupancy (${roundTo2(row.physicalOccupancy * 100)}%) < Lower Limit (${roundTo2(params.occupancyLowerLimit * 100)}%).`;
    if (row.physicalOccupancy >= params.occupancyLowerLimit && ruleRec.velocity30D < -0.05) {
      triggerReason = `Negative demand velocity (${roundTo2(ruleRec.velocity30D * 100)}%) triggering occupancy protection pricing.`;
    }
  } else if (guardRec.finalAllowedAction.includes("Cooling")) {
    triggerReason = `Pricing adjustment delayed. Unit rate changed recently (${row.daysSinceLastAdj} days ago).`;
  } else if (guardRec.finalAllowedAction.includes("Deadband")) {
    const diff = roundTo2(Math.abs(row.physicalOccupancy - row.occupancyLastWeek) * 100);
    triggerReason = `Minor weekly occupancy fluctuation (${diff}%) does not warrant pricing disruption.`;
  }

  return {
    id: row.id,
    facilityId: row.facilityId,
    unitType: row.unitType,
    key: ruleRec.key,
    currentRate: row.streetRate,
    recommendedRate: guardRec.finalRecomRate,
    actionPlan,
    triggerReason,
    approvalLevel,
    needsReview,
    approved: approvedIds.has(row.id),
  };
}

/**
 * Run entire cascade calculation on list of rows with parameter state.
 */
export interface ComputedCascadeResult {
  ruleEngineRecords: RuleEngineRecord[];
  guardRailsRecords: GuardRailsRecord[];
  dashboardRecords: DashboardRecord[];
}

export function computeCascade(
  rows: RawDataRow[],
  params: SystemParameters,
  approvedIds: Set<string>
): ComputedCascadeResult {
  const ruleEngineRecords: RuleEngineRecord[] = [];
  const guardRailsRecords: GuardRailsRecord[] = [];
  const dashboardRecords: DashboardRecord[] = [];

  for (const row of rows) {
    const rule = calculateRuleEngineRecord(row, params);
    const guard = calculateGuardRailsRecord(row, rule, params);
    const dash = calculateDashboardRecord(row, rule, guard, params, approvedIds);

    ruleEngineRecords.push(rule);
    guardRailsRecords.push(guard);
    dashboardRecords.push(dash);
  }

  return {
    ruleEngineRecords,
    guardRailsRecords,
    dashboardRecords,
  };
}
