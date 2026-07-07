import React from "react";
import { GuardRailsRecord } from "../types";
import { ShieldCheck, ShieldAlert, Check, X } from "lucide-react";

interface GuardRailsSheetProps {
  guardRecords: GuardRailsRecord[];
}

export default function GuardRailsSheet({ guardRecords }: GuardRailsSheetProps) {
  return (
    <div className="animate-fade-up space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-primary tracking-tight md:text-4xl">
          04_Guard Rails (Safety Gate)
        </h1>
        <p className="text-sm text-muted mt-1 font-sans">
          Safety stabilization layer. Pricing suggestions computed by the rule engine must pass cooling period checks and minimum deadband variations to avoid pricing oscillation.
        </p>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[rgba(5,28,44,0.04)] border-b-2 border-[rgba(5,28,44,0.12)]">
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase">
                  Facility-Unit Key
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-center w-[12%]">
                  Guard 1: Cooling
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-center w-[12%]">
                  Guard 2: Deadband
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-center">
                  Final Allowed Action
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right w-[15%]">
                  Capped Adj. ($)
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right w-[12%]">
                  Final Rate ($)
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase pl-6 w-[25%]">
                  Override & Audit Trail
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-primary font-sans text-[13px]">
              {guardRecords.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-muted text-sm">
                    No active records to audit. Populate raw database rows first.
                  </td>
                </tr>
              ) : (
                guardRecords.map((rec) => {
                  // Final Action Classes
                  let actionClass = "bg-bg text-primary";
                  if (rec.finalAllowedAction === "Raise") {
                    actionClass = "bg-[rgba(34,81,255,0.08)] text-accent font-semibold";
                  } else if (rec.finalAllowedAction === "Lower") {
                    actionClass = "bg-primary text-white font-semibold";
                  } else if (rec.finalAllowedAction.includes("Cooling") || rec.finalAllowedAction.includes("Deadband")) {
                    actionClass = "bg-[rgba(211,47,47,0.04)] text-negative border border-dashed border-negative/20 font-medium";
                  }

                  // Check if this row was actually modified / overridden
                  const isIntervened = rec.finalAllowedAction.includes("Cooling") || rec.finalAllowedAction.includes("Deadband") || rec.overrideReason.includes("capped");

                  return (
                    <tr key={rec.id} className={`hover:bg-bg transition-colors ${isIntervened ? "bg-[rgba(211,47,47,0.01)]" : ""}`}>
                      {/* Key */}
                      <td className="py-3.5 px-4 font-mono text-[12px] text-primary">
                        {rec.key}
                      </td>

                      {/* Guard 1: Cooling badge */}
                      <td className="py-3.5 px-4 text-center">
                        {rec.coolingPass ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary px-2.5 py-0.5 rounded-full bg-bg">
                            <Check className="w-3 h-3 text-accent" /> PASS
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-negative px-2.5 py-0.5 rounded-full bg-[rgba(211,47,47,0.08)]">
                            <X className="w-3 h-3 text-negative" /> BLOCKED
                          </span>
                        )}
                      </td>

                      {/* Guard 2: Deadband badge */}
                      <td className="py-3.5 px-4 text-center">
                        {rec.deadbandPass ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary px-2.5 py-0.5 rounded-full bg-bg">
                            <Check className="w-3 h-3 text-accent" /> PASS
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted px-2.5 py-0.5 rounded-full bg-bg">
                            <X className="w-3 h-3 text-muted" /> FILTERED
                          </span>
                        )}
                      </td>

                      {/* Final Allowed Action */}
                      <td className="py-3.5 px-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider ${actionClass}`}>
                          {rec.finalAllowedAction}
                        </span>
                      </td>

                      {/* Capped Adjustment */}
                      <td className="py-3.5 px-4 text-right font-mono font-semibold">
                        {rec.cappedAdjustmentAmount === 0 ? (
                          <span className="text-muted">—</span>
                        ) : (
                          <div className="space-y-0.5">
                            <span className={rec.cappedAdjustmentAmount > 0 ? "text-accent" : "text-primary"}>
                              {rec.cappedAdjustmentAmount > 0 ? "+" : ""}
                              ${rec.cappedAdjustmentAmount.toFixed(2)}
                            </span>
                            <span className="text-[10px] text-muted block font-normal">
                              ({(rec.cappedAdjustmentPct * 100).toFixed(0)}% step)
                            </span>
                          </div>
                        )}
                      </td>

                      {/* Final Recommended Street Rate */}
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-primary text-[14px]">
                        ${rec.finalRecomRate.toFixed(2)}
                      </td>

                      {/* Audit Trail & Override Reason */}
                      <td className="py-3.5 px-4 pl-6 text-xs text-muted font-sans leading-snug">
                        {rec.overrideReason === "Rule Executed - No Intervention" ? (
                          <span className="text-primary/70 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
                            Rule executed cleanly
                          </span>
                        ) : (
                          <span className="text-negative font-medium flex items-start gap-1.5">
                            <ShieldAlert className="w-3.5 h-3.5 text-negative shrink-0 mt-0.5" />
                            {rec.overrideReason}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Explanation of Guard Rails */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="p-5 bg-white rounded-xl shadow-sm space-y-2 card-hover transition-all-custom">
          <h4 className="font-heading text-base font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent"></span> Guard 1: Cooling Period Rule
          </h4>
          <p className="text-xs text-muted font-sans leading-relaxed">
            Ensures rates are locked for a minimum interval (defined in Parameters, typically 14 days) before another price shift can trigger. This prevents excessive and confusing public pricing oscillation for potential customer leases.
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-sm space-y-2 card-hover transition-all-custom">
          <h4 className="font-heading text-base font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span> Guard 2: Demand Deadband Filter
          </h4>
          <p className="text-xs text-muted font-sans leading-relaxed">
            Minor micro-fluctuations in physical occupancy (e.g. within 2% week-on-week shifts) are filtered. This locks down stable street rates unless structural market occupancy movements are detected.
          </p>
        </div>

      </div>
    </div>
  );
}
