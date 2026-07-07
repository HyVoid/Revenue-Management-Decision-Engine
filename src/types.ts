export interface RawDataRow {
  id: string; // Unique row ID
  facilityId: string;
  unitType: string;
  physicalOccupancy: number; // 0.0 to 1.0 (e.g. 0.94)
  occupancyLastWeek: number; // 0.0 to 1.0
  streetRate: number; // Current execute rate
  competitorRate: number; // Competitor average
  daysSinceLastAdj: number; // Days since last rate adjustment
  moveIns30D: number;
  moveOuts30D: number;
  totalUnits: number;
}

export interface SystemParameters {
  occupancyUpperLimit: number; // B3 (e.g., 0.92)
  occupancyLowerLimit: number; // B4 (e.g., 0.75)
  standardRaiseStep: number; // B5 (e.g., 0.08)
  standardLowerStep: number; // B6 (e.g., -0.10)
  minAdjustmentInterval: number; // B7 (e.g., 14)
  deadbandThreshold: number; // B8 (e.g., 0.02)
  singleMaxAdjustmentCap: number; // B9 (e.g., 0.10)
  approvalTriggerPct: number; // B10 (e.g., 0.12)
  approvalTriggerVal: number; // B11 (e.g., 20.00)
}

export interface RuleEngineRecord {
  id: string;
  facilityId: string;
  unitType: string;
  key: string; // facilityId_unitType
  velocity30D: number; // (Move-ins - Move-outs) / Total Units
  competitorGapPct: number; // (Competitor - Street) / Competitor (or relative to street)
  baseDecision: "Raise" | "Lower" | "Hold";
  baseStepChange: number; // Street Rate * standardRaiseStep (or lower step)
}

export interface GuardRailsRecord {
  id: string;
  facilityId: string;
  unitType: string;
  key: string;
  coolingPass: boolean;
  deadbandPass: boolean;
  finalAllowedAction: "Raise" | "Lower" | "Hold" | "Hold (Cooling Protected)" | "Hold (Deadband Filtered)";
  cappedAdjustmentPct: number;
  cappedAdjustmentAmount: number;
  finalRecomRate: number;
  overrideReason: string;
}

export interface DashboardRecord {
  id: string;
  facilityId: string;
  unitType: string;
  key: string;
  currentRate: number;
  recommendedRate: number;
  actionPlan: "Raise" | "Lower" | "Hold" | "Promo"; // Action Plan mapping
  triggerReason: string;
  approvalLevel: "System Hold - No Action" | "⚠️ Manager Approval Required" | "✅ Auto-Execute Authorized";
  needsReview: boolean;
  approved: boolean; // Manual approval override state for the SaaS session
}
