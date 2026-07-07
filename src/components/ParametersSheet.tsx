import React from "react";
import { SystemParameters } from "../types";

interface ParametersSheetProps {
  parameters: SystemParameters;
  onUpdateParameters: (newParams: SystemParameters) => void;
  onReset: () => void;
}

export default function ParametersSheet({
  parameters,
  onUpdateParameters,
  onReset,
}: ParametersSheetProps) {
  const handleChange = (key: keyof SystemParameters, value: number) => {
    onUpdateParameters({
      ...parameters,
      [key]: value,
    });
  };

  return (
    <div className="animate-fade-up space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-primary tracking-tight md:text-4xl">
          05_Parameters Configuration
        </h1>
        <p className="text-sm text-muted mt-1 font-sans">
          Central parameter hub. Any modification triggers live recalculations cascading through the rule engine, safety guard rails, and management dashboard.
        </p>
      </div>

      {/* Grid of parameters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Core Occupancy Limits */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-0 card-hover transition-all-custom space-y-4">
          <div className="border-b border-border pb-3">
            <h3 className="font-heading text-lg font-semibold text-primary">Occupancy Thresholds</h3>
            <p className="text-xs text-muted font-sans mt-0.5">Defines demand limits for trigger decisions</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1">
                Upper Limit (Occupancy)
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  className="block w-full rounded-md border-0 py-2 px-3 text-sm text-primary font-medium bg-[#FFFDE7] focus:outline-none focus:ring-1 focus:ring-accent"
                  value={parameters.occupancyUpperLimit}
                  onChange={(e) => handleChange("occupancyUpperLimit", parseFloat(e.target.value) || 0)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-xs text-muted">{(parameters.occupancyUpperLimit * 100).toFixed(0)}%</span>
                </div>
              </div>
              <span className="text-xs text-muted block mt-1">If occupancy &gt;= this threshold, trigger "Raise" pricing.</span>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1">
                Lower Limit (Occupancy)
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  className="block w-full rounded-md border-0 py-2 px-3 text-sm text-primary font-medium bg-[#FFFDE7] focus:outline-none focus:ring-1 focus:ring-accent"
                  value={parameters.occupancyLowerLimit}
                  onChange={(e) => handleChange("occupancyLowerLimit", parseFloat(e.target.value) || 0)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-xs text-muted">{(parameters.occupancyLowerLimit * 100).toFixed(0)}%</span>
                </div>
              </div>
              <span className="text-xs text-muted block mt-1">If occupancy &lt; this threshold, trigger occupancy-recovery "Lower" pricing.</span>
            </div>
          </div>
        </div>

        {/* Adjustments & Pricing Steps */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-0 card-hover transition-all-custom space-y-4">
          <div className="border-b border-border pb-3">
            <h3 className="font-heading text-lg font-semibold text-primary">Adjustment Percentages</h3>
            <p className="text-xs text-muted font-sans mt-0.5">Step sizes used to compute target actions</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1">
                Standard Raise Step
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  className="block w-full rounded-md border-0 py-2 px-3 text-sm text-primary font-medium bg-[#FFFDE7] focus:outline-none focus:ring-1 focus:ring-accent"
                  value={parameters.standardRaiseStep}
                  onChange={(e) => handleChange("standardRaiseStep", parseFloat(e.target.value) || 0)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-xs text-muted">{(parameters.standardRaiseStep * 100).toFixed(1)}%</span>
                </div>
              </div>
              <span className="text-xs text-muted block mt-1">Default rate raise ratio for high-demand storage segments.</span>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1">
                Standard Lower Step
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="number"
                  step="0.01"
                  min="-1"
                  max="0"
                  className="block w-full rounded-md border-0 py-2 px-3 text-sm text-primary font-medium bg-[#FFFDE7] focus:outline-none focus:ring-1 focus:ring-accent"
                  value={parameters.standardLowerStep}
                  onChange={(e) => handleChange("standardLowerStep", parseFloat(e.target.value) || 0)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-xs text-muted">{(parameters.standardLowerStep * 100).toFixed(1)}%</span>
                </div>
              </div>
              <span className="text-xs text-muted block mt-1">Default discount or discount/promo ratio for low occupancy.</span>
            </div>
          </div>
        </div>

        {/* Safety Guard Rails */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-0 card-hover transition-all-custom space-y-4">
          <div className="border-b border-border pb-3">
            <h3 className="font-heading text-lg font-semibold text-primary">Safety Guard Rails</h3>
            <p className="text-xs text-muted font-sans mt-0.5">Stabilization settings to filter micro-fluctuations</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1">
                Min Adj. Interval (Cooling Period)
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="number"
                  step="1"
                  min="0"
                  className="block w-full rounded-md border-0 py-2 px-3 text-sm text-primary font-medium bg-[#FFFDE7] focus:outline-none focus:ring-1 focus:ring-accent"
                  value={parameters.minAdjustmentInterval}
                  onChange={(e) => handleChange("minAdjustmentInterval", parseInt(e.target.value, 10) || 0)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-xs text-muted">Days</span>
                </div>
              </div>
              <span className="text-xs text-muted block mt-1">Prevents consecutive pricing changes within specified days.</span>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1">
                Weekly Occupancy Deadband
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="number"
                  step="0.001"
                  min="0"
                  max="1"
                  className="block w-full rounded-md border-0 py-2 px-3 text-sm text-primary font-medium bg-[#FFFDE7] focus:outline-none focus:ring-1 focus:ring-accent"
                  value={parameters.deadbandThreshold}
                  onChange={(e) => handleChange("deadbandThreshold", parseFloat(e.target.value) || 0)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-xs text-muted">{(parameters.deadbandThreshold * 100).toFixed(1)}%</span>
                </div>
              </div>
              <span className="text-xs text-muted block mt-1">Ignores pricing adjustments if weekly occupancy change is below this line.</span>
            </div>
          </div>
        </div>

        {/* Protection Cap & Approval Limits */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-0 card-hover transition-all-custom space-y-4 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 border-b border-border pb-2">
            <h3 className="font-heading text-lg font-semibold text-primary">Single Protection Cap & Governance</h3>
            <p className="text-xs text-muted font-sans">Defines pricing safeguards and manager approval trigger rules</p>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1">
              Single Max Adjustment Cap
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                step="0.01"
                min="0"
                max="1"
                className="block w-full rounded-md border-0 py-2 px-3 text-sm text-primary font-medium bg-[#FFFDE7] focus:outline-none focus:ring-1 focus:ring-accent"
                value={parameters.singleMaxAdjustmentCap}
                onChange={(e) => handleChange("singleMaxAdjustmentCap", parseFloat(e.target.value) || 0)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-xs text-muted">{(parameters.singleMaxAdjustmentCap * 100).toFixed(0)}%</span>
              </div>
            </div>
            <span className="text-xs text-muted block mt-1">Caps maximum magnitude of any single price alteration (e.g., limits standard 12% shift to 10%).</span>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1">
              Approval Trigger (Percentage)
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                step="0.01"
                min="0"
                max="1"
                className="block w-full rounded-md border-0 py-2 px-3 text-sm text-primary font-medium bg-[#FFFDE7] focus:outline-none focus:ring-1 focus:ring-accent"
                value={parameters.approvalTriggerPct}
                onChange={(e) => handleChange("approvalTriggerPct", parseFloat(e.target.value) || 0)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-xs text-muted">{(parameters.approvalTriggerPct * 100).toFixed(0)}%</span>
              </div>
            </div>
            <span className="text-xs text-muted block mt-1">If calculated pricing shift is &gt;= this percentage, manager approval is strictly required.</span>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider text-primary uppercase mb-1">
              Approval Trigger (Absolute Amount)
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-xs text-muted">$</span>
              </div>
              <input
                type="number"
                step="1"
                min="0"
                className="block w-full rounded-md border-0 py-2 pl-7 pr-3 text-sm text-primary font-medium bg-[#FFFDE7] focus:outline-none focus:ring-1 focus:ring-accent"
                value={parameters.approvalTriggerVal}
                onChange={(e) => handleChange("approvalTriggerVal", parseFloat(e.target.value) || 0)}
              />
            </div>
            <span className="text-xs text-muted block mt-1">If single unit adjustment absolute dollar value exceeds this limit, auto-execution is blocked.</span>
          </div>
        </div>

      </div>

      {/* Insight Block */}
      <div className="p-4 bg-[rgba(5,28,44,0.04)] border-l-3 border-accent rounded-r-md font-sans text-sm text-primary">
        <span className="font-semibold block mb-1">Operational Governance Principle:</span>
        All parameters are dynamically synced across active browser sessions. If you are preparing pricing policies for multiple sites, changes here prevent excessive price fluctuations while maintaining automated profitability algorithms.
      </div>

      {/* Actions */}
      <div className="flex justify-end pt-2">
        <button
          onClick={onReset}
          className="px-4 py-2 border border-border rounded-md text-sm font-medium text-primary hover:bg-bg active:scale-97 transition-all-custom cursor-pointer"
        >
          Reset Default Parameters
        </button>
      </div>
    </div>
  );
}
