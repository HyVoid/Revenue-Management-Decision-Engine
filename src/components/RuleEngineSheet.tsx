import React from "react";
import { RuleEngineRecord } from "../types";

interface RuleEngineSheetProps {
  ruleRecords: RuleEngineRecord[];
}

export default function RuleEngineSheet({ ruleRecords }: RuleEngineSheetProps) {
  return (
    <div className="animate-fade-up space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-primary tracking-tight md:text-4xl">
          03_Rule Engine (Base Intent)
        </h1>
        <p className="text-sm text-muted mt-1 font-sans">
          Basic pricing rules calculated purely on raw storage occupancy, target limits, and net booking velocity. This represents the unconstrained pricing intent before applying safety guard rails.
        </p>
      </div>

      {/* Table container */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[rgba(5,28,44,0.04)] border-b-2 border-[rgba(5,28,44,0.12)]">
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase">
                  Facility-Unit Key
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right w-1/5">
                  Velocity (30D)
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right w-1/5">
                  Competitor Gap %
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-center w-1/6">
                  Base Decision
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right w-1/6">
                  Base Step Change
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-primary font-sans text-[13px]">
              {ruleRecords.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-muted text-sm">
                    No records compiled. Please populate raw database sheet.
                  </td>
                </tr>
              ) : (
                ruleRecords.map((rec) => {
                  // Determine decision colors - strictly non-directional, muted styling for Hold, simple clean pills.
                  let decisionClass = "bg-bg text-primary";
                  if (rec.baseDecision === "Raise") {
                    decisionClass = "bg-[rgba(34,81,255,0.08)] text-accent font-semibold";
                  } else if (rec.baseDecision === "Lower") {
                    decisionClass = "bg-primary text-white font-semibold";
                  }

                  // Mathematical scaling for velocity inline bar
                  // Velocity values range typically from -0.3 to +0.3
                  const velPercent = Math.min(100, Math.max(0, (rec.velocity30D + 0.3) * 166.7));

                  // Competitor gap inline bar
                  // Gap values typically range from -0.3 to +0.3
                  const gapPercent = Math.min(100, Math.max(0, (rec.competitorGapPct + 0.3) * 166.7));

                  return (
                    <tr key={rec.id} className="hover:bg-bg transition-colors">
                      {/* Key */}
                      <td className="py-3 px-4 font-mono text-[12px] text-primary">
                        {rec.key}
                      </td>

                      {/* Velocity 30D with Inline Data Bar */}
                      <td className="py-3 px-4 text-right">
                        <div className="inline-block w-full max-w-[150px] space-y-1">
                          <span className={`font-semibold ${rec.velocity30D > 0 ? "text-primary" : rec.velocity30D < 0 ? "text-muted" : "text-muted"}`}>
                            {rec.velocity30D > 0 ? "+" : ""}
                            {(rec.velocity30D * 100).toFixed(0)}%
                          </span>
                          <div className="w-full h-1 bg-[rgba(5,28,44,0.1)] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary transition-all duration-300"
                              style={{ width: `${velPercent}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Competitor Gap with Inline Data Bar */}
                      <td className="py-3 px-4 text-right">
                        <div className="inline-block w-full max-w-[150px] space-y-1">
                          <span className="font-semibold text-primary">
                            {rec.competitorGapPct > 0 ? "+" : ""}
                            {(rec.competitorGapPct * 100).toFixed(0)}%
                          </span>
                          <div className="w-full h-1 bg-[rgba(5,28,44,0.1)] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent transition-all duration-300"
                              style={{ width: `${gapPercent}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Base Decision */}
                      <td className="py-3 px-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold ${decisionClass}`}>
                          {rec.baseDecision}
                        </span>
                      </td>

                      {/* Base Step Change */}
                      <td className="py-3 px-4 text-right font-mono font-semibold">
                        {rec.baseStepChange === 0 ? (
                          <span className="text-muted">—</span>
                        ) : (
                          <span className={rec.baseStepChange > 0 ? "text-accent" : "text-primary"}>
                            {rec.baseStepChange > 0 ? "+" : ""}
                            ${rec.baseStepChange.toFixed(2)}
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

      {/* Operational guidelines block */}
      <div className="p-5 bg-[rgba(5,28,44,0.04)] border-l-3 border-accent rounded-r-md font-sans text-xs text-primary space-y-2 leading-relaxed">
        <span className="font-semibold block text-sm">Formula Rules Decoupled from Excel:</span>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Velocity (30D) Calculation:</strong> <code>(Move-ins 30D - Move-outs 30D) / Total Units</code>. It gauges local facility net capture momentum.</li>
          <li><strong>Competitor Gap %:</strong> <code>(Competitor Rate - Street Rate) / Competitor Rate</code>. Measures premium or discount pricing room compared to localized competitors.</li>
          <li><strong>Base Decision Mapping:</strong> Auto-triggers <code>Raise</code> if occupancy exceeds upper threshold, or if occupancy &gt;= 85% with positive velocity. Auto-triggers <code>Lower</code> if below lower threshold or experiencing heavy negative velocity below 85% occupancy.</li>
        </ul>
      </div>
    </div>
  );
}
