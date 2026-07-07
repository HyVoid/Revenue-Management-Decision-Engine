import React, { useMemo } from "react";
import { RawDataRow, DashboardRecord, SystemParameters } from "../types";
import { Check, AlertCircle, FileSpreadsheet, Download, Upload, Trash2, ArrowUpRight, CheckSquare, Sliders } from "lucide-react";

interface DashboardSheetProps {
  rawData: RawDataRow[];
  dashboardRecords: DashboardRecord[];
  parameters: SystemParameters;
  onApprove: (id: string) => void;
  onApproveAll: () => void;
  onExportBackup: () => void;
  onImportBackup: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResetData: () => void;
  lastSaved: string;
}

export default function DashboardSheet({
  rawData,
  dashboardRecords,
  parameters,
  onApprove,
  onApproveAll,
  onExportBackup,
  onImportBackup,
  onResetData,
  lastSaved,
}: DashboardSheetProps) {
  // Compute High-Impact KPI Metrics
  const kpis = useMemo(() => {
    let totalUnits = 0;
    let occupiedUnits = 0;
    let sumStreetRate = 0;
    let activeChangesCount = 0;
    let pendingApprovalsCount = 0;

    rawData.forEach((row) => {
      totalUnits += row.totalUnits;
      occupiedUnits += Math.round(row.physicalOccupancy * row.totalUnits);
      sumStreetRate += row.streetRate;
    });

    dashboardRecords.forEach((rec) => {
      if (rec.actionPlan !== "Hold") {
        activeChangesCount++;
        if (rec.approvalLevel.includes("Approval Required") && !rec.approved) {
          pendingApprovalsCount++;
        }
      }
    });

    const averageOccupancy = totalUnits > 0 ? occupiedUnits / totalUnits : 0;
    const averageStreetRate = rawData.length > 0 ? sumStreetRate / rawData.length : 0;

    return {
      totalUnits,
      averageOccupancy,
      averageStreetRate,
      activeChangesCount,
      pendingApprovalsCount,
    };
  }, [rawData, dashboardRecords]);

  // Handle Hidden file input click for Import Backup
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="animate-fade-up space-y-8">
      {/* Top Welcome & Save Status Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border pb-5">
        <div>
          <h1 className="font-heading text-4xl font-bold text-primary tracking-tight">
            Revenue Management Decision Engine
          </h1>
          <p className="text-sm text-muted mt-1 font-sans">
            Executive control panel. Auto-generating optimized street pricing across localized self-storage facility units with safety price locks.
          </p>
        </div>
        
        {/* System Save / Backup Tools */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans">
          {lastSaved && (
            <div className="bg-white px-3 py-1.5 rounded-full shadow-sm text-muted flex items-center gap-1.5 border border-border">
              <span className="w-2 h-2 rounded-full bg-[var(--color-positive)] animate-pulse"></span>
              Last Saved: <span className="font-medium text-primary">{lastSaved}</span>
            </div>
          )}

          <button
            onClick={onExportBackup}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-primary rounded-md shadow-sm border border-border hover:bg-bg active:scale-97 transition-all-custom cursor-pointer"
            title="Download JSON state"
          >
            <Download className="w-3.5 h-3.5 text-accent" /> Export Backup
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-primary rounded-md shadow-sm border border-border hover:bg-bg active:scale-97 transition-all-custom cursor-pointer"
            title="Upload previously saved JSON state"
          >
            <Upload className="w-3.5 h-3.5 text-accent" /> Import Backup
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            className="hidden"
            onChange={onImportBackup}
          />

          <button
            onClick={onResetData}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(213,47,47,0.04)] text-negative rounded-md shadow-sm border border-dashed border-negative/20 hover:bg-[rgba(213,47,47,0.08)] active:scale-97 transition-all-custom cursor-pointer"
            title="Reset system database and parameters"
          >
            <Trash2 className="w-3.5 h-3.5 text-negative" /> Reset Data
          </button>
        </div>
      </div>

      {/* KPI Row (EB Garamond, negative letter spacing -0.02em to -0.03em) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {/* KPI 1 */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-0 card-hover transition-all-custom flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-muted tracking-wider uppercase">Total Managed Units</span>
          <div className="mt-2 flex items-baseline">
            <span className="font-heading text-3xl font-bold text-primary tracking-[-0.03em] leading-none">
              {kpis.totalUnits.toLocaleString()}
            </span>
            <span className="text-xs text-muted ml-1 font-sans">units</span>
          </div>
          <span className="text-[10px] text-muted font-sans mt-2">Aggregated active inventory</span>
        </div>

        {/* KPI 2 */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-0 card-hover transition-all-custom flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-muted tracking-wider uppercase">Portfolio Occupancy</span>
          <div className="mt-2 flex items-baseline">
            <span className="font-heading text-3xl font-bold text-primary tracking-[-0.03em] leading-none">
              {(kpis.averageOccupancy * 100).toFixed(1)}%
            </span>
          </div>
          <div className="w-full h-1 bg-[rgba(5,28,44,0.1)] rounded-full overflow-hidden mt-3">
            <div
              className="h-full bg-accent"
              style={{ width: `${kpis.averageOccupancy * 100}%` }}
            />
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-0 card-hover transition-all-custom flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-muted tracking-wider uppercase">Avg Current Rate</span>
          <div className="mt-2 flex items-baseline">
            <span className="font-heading text-3xl font-bold text-primary tracking-[-0.03em] leading-none">
              ${kpis.averageStreetRate.toFixed(2)}
            </span>
            <span className="text-xs text-muted ml-1 font-sans">/mo</span>
          </div>
          <span className="text-[10px] text-muted font-sans mt-2">Portfolio street price baseline</span>
        </div>

        {/* KPI 4 */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-0 card-hover transition-all-custom flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-muted tracking-wider uppercase">Rate Change Triggers</span>
          <div className="mt-2 flex items-baseline">
            <span className="font-heading text-3xl font-bold text-accent tracking-[-0.03em] leading-none">
              {kpis.activeChangesCount}
            </span>
            <span className="text-xs text-muted ml-1 font-sans">units</span>
          </div>
          <span className="text-[10px] text-muted font-sans mt-2">Active pricing interventions</span>
        </div>

        {/* KPI 5 */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-0 card-hover transition-all-custom flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-muted tracking-wider uppercase">Pending Reviews</span>
          <div className="mt-2 flex items-baseline">
            <span className={`font-heading text-3xl font-bold tracking-[-0.03em] leading-none ${kpis.pendingApprovalsCount > 0 ? "text-primary" : "text-muted"}`}>
              {kpis.pendingApprovalsCount}
            </span>
            {kpis.pendingApprovalsCount > 0 && (
              <span className="text-xs text-negative ml-1 font-sans font-semibold">ACTION REQ</span>
            )}
          </div>
          <span className="text-[10px] text-muted font-sans mt-2">Manager authorization queue</span>
        </div>

      </div>

      {/* Insight Section (accent 3px border, 4% transparency bg) */}
      {kpis.pendingApprovalsCount > 0 && (
        <div className="p-4 bg-[rgba(34,81,255,0.04)] border-l-3 border-accent rounded-r-md font-sans text-sm text-primary flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block mb-0.5">High-Value Pricing Changes Awaiting Manual Review</span>
            There are {kpis.pendingApprovalsCount} active price changes exceeding single adjustment parameters (e.g., changes greater than {parameters.approvalTriggerPct * 100}% or ${parameters.approvalTriggerVal}). Review and authorize the queue below to propagate updates.
          </div>
        </div>
      )}

      {/* Decisions Approval Board */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-primary tracking-tight">
              01_Weekly Recommendation & Approval Queue
            </h2>
            <p className="text-xs text-muted font-sans">
              Approve pending changes. Approved rates can be dispatched to PMS.
            </p>
          </div>

          {/* Bulk approve button */}
          {kpis.pendingApprovalsCount > 0 && (
            <button
              onClick={onApproveAll}
              className="flex items-center gap-1.5 px-4 py-2 bg-accent text-white rounded-md text-xs font-semibold hover:bg-opacity-90 active:scale-97 transition-all-custom cursor-pointer"
            >
              <CheckSquare className="w-4 h-4" /> Bulk Approve All Pending
            </button>
          )}
        </div>

        {/* Board grid / Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[rgba(5,28,44,0.04)] border-b-2 border-[rgba(5,28,44,0.12)]">
                  <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase">
                    Facility Name
                  </th>
                  <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase">
                    Unit Type
                  </th>
                  <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right w-[10%]">
                    Current Rate
                  </th>
                  <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right w-[12%]">
                    Recommended Rate
                  </th>
                  <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-center w-[12%]">
                    Action Plan
                  </th>
                  <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase w-[25%] pl-6">
                    Trigger Reason / Source
                  </th>
                  <th className="py-3.5 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-center w-[18%]">
                    Approval Level
                  </th>
                  <th className="py-3.5 px-4 text-center w-[10%]">
                    Authorize
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-primary font-sans text-[13px]">
                {dashboardRecords.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-muted text-sm">
                      No operational data mapped. Please go to Raw Data tab to populate records.
                    </td>
                  </tr>
                ) : (
                  dashboardRecords.map((rec) => {
                    // Action Pill colors
                    let actionPillClass = "bg-bg text-primary";
                    if (rec.actionPlan === "Raise") {
                      actionPillClass = "bg-[rgba(34,81,255,0.08)] text-accent font-semibold";
                    } else if (rec.actionPlan === "Lower") {
                      actionPillClass = "bg-primary text-white font-semibold";
                    } else if (rec.actionPlan === "Promo") {
                      // Promotional tags styled distinctly
                      actionPillClass = "bg-[rgba(0,200,83,0.08)] text-[var(--color-positive)] font-bold border border-[var(--color-positive)]/20";
                    }

                    // Approval badges styling
                    let approvalBadge = "bg-bg text-muted";
                    if (rec.approvalLevel.includes("Approval Required")) {
                      approvalBadge = rec.approved
                        ? "bg-[rgba(0,200,83,0.08)] text-[var(--color-positive)] font-semibold border border-[var(--color-positive)]/20"
                        : "bg-[rgba(211,47,47,0.04)] text-negative font-semibold border border-dashed border-negative/20";
                    } else if (rec.approvalLevel.includes("Auto-Execute")) {
                      approvalBadge = "bg-bg text-primary font-semibold";
                    }

                    return (
                      <tr key={rec.id} className="hover:bg-bg transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-primary">{rec.facilityId}</td>
                        <td className="py-3.5 px-4 text-muted">{rec.unitType}</td>
                        <td className="py-3.5 px-4 text-right font-mono">${rec.currentRate.toFixed(2)}</td>
                        <td className="py-3.5 px-4 text-right font-mono font-bold text-[14px]">
                          ${rec.recommendedRate.toFixed(2)}
                        </td>

                        {/* Action Plan */}
                        <td className="py-3.5 px-4 text-center">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider ${actionPillClass}`}>
                            {rec.actionPlan}
                          </span>
                        </td>

                        {/* Trigger Reason */}
                        <td className="py-3.5 px-4 pl-6 text-xs text-muted font-sans leading-relaxed">
                          {rec.triggerReason}
                        </td>

                        {/* Approval Level badge */}
                        <td className="py-3.5 px-4 text-center">
                          <span className={`inline-block px-2.5 py-1 rounded text-xs ${approvalBadge}`}>
                            {rec.approved ? "✅ Authorized by Manager" : rec.approvalLevel}
                          </span>
                        </td>

                        {/* Authorize Action Button */}
                        <td className="py-3.5 px-4 text-center">
                          {rec.approvalLevel.includes("Approval Required") ? (
                            rec.approved ? (
                              <span className="text-xs text-[var(--color-positive)] font-bold flex items-center justify-center gap-1">
                                <Check className="w-3.5 h-3.5" /> Ready
                              </span>
                            ) : (
                              <button
                                onClick={() => onApprove(rec.id)}
                                className="matrix-hover px-2.5 py-1 bg-accent text-white text-[11px] font-semibold rounded shadow-sm hover:brightness-110 cursor-pointer transition-all-custom"
                              >
                                Approve
                              </button>
                            )
                          ) : (
                            <span className="text-xs text-muted">—</span>
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
      </div>
    </div>
  );
}
