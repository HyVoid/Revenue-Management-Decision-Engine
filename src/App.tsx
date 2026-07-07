import React, { useState, useEffect } from "react";
import { RawDataRow, SystemParameters } from "./types";
import { DEFAULT_PARAMETERS, DEFAULT_RAW_DATA } from "./defaultData";
import { computeCascade } from "./utils/engine";

// Component imports
import DashboardSheet from "./components/DashboardSheet";
import RawDataSheet from "./components/RawDataSheet";
import RuleEngineSheet from "./components/RuleEngineSheet";
import GuardRailsSheet from "./components/GuardRailsSheet";
import ParametersSheet from "./components/ParametersSheet";

// Icons
import { Layers, HelpCircle } from "lucide-react";

export default function App() {
  // Navigation Tabs matching operational worksheets
  const tabs = [
    { id: "01_Dashboard", label: "01_Dashboard" },
    { id: "02_Raw_Data", label: "02_Raw_Data" },
    { id: "03_Rule_Engine", label: "03_Rule_Engine" },
    { id: "04_Guard_Rails", label: "04_Guard_Rails" },
    { id: "05_Parameters", label: "05_Parameters" },
  ];

  // Primary active tab state
  const [activeTab, setActiveTab] = useState<string>("01_Dashboard");

  // Core synchronized states
  const [rawData, setRawData] = useState<RawDataRow[]>([]);
  const [parameters, setParameters] = useState<SystemParameters>(DEFAULT_PARAMETERS);
  const [approvedIds, setApprovedIds] = useState<Set<string>>(new Set());
  const [lastSaved, setLastSaved] = useState<string>("");

  // Helper to format timestamps
  const getFormattedTime = () => {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  };

  // Load initial states from LocalStorage on component mount
  useEffect(() => {
    const storedRaw = localStorage.getItem("revenue_engine_raw_data");
    const storedParams = localStorage.getItem("revenue_engine_parameters");
    const storedApproved = localStorage.getItem("revenue_engine_approved_ids");

    if (storedRaw) {
      try {
        setRawData(JSON.parse(storedRaw));
      } catch (e) {
        setRawData(DEFAULT_RAW_DATA);
      }
    } else {
      setRawData(DEFAULT_RAW_DATA);
    }

    if (storedParams) {
      try {
        setParameters(JSON.parse(storedParams));
      } catch (e) {
        setParameters(DEFAULT_PARAMETERS);
      }
    } else {
      setParameters(DEFAULT_PARAMETERS);
    }

    if (storedApproved) {
      try {
        setApprovedIds(new Set(JSON.parse(storedApproved)));
      } catch (e) {
        setApprovedIds(new Set());
      }
    }

    setLastSaved(getFormattedTime());
  }, []);

  // Sync to LocalStorage and update "Last saved" timestamp upon any state changes
  useEffect(() => {
    if (rawData.length === 0 && parameters.occupancyUpperLimit === DEFAULT_PARAMETERS.occupancyUpperLimit) {
      // Avoid overwriting storage during initial loading tick
      return;
    }
    localStorage.setItem("revenue_engine_raw_data", JSON.stringify(rawData));
    localStorage.setItem("revenue_engine_parameters", JSON.stringify(parameters));
    localStorage.setItem("revenue_engine_approved_ids", JSON.stringify(Array.from(approvedIds)));
    setLastSaved(getFormattedTime());
  }, [rawData, parameters, approvedIds]);

  // Execute Cascading Spreadsheet Recalculations live in React
  const { ruleEngineRecords, guardRailsRecords, dashboardRecords } = computeCascade(
    rawData,
    parameters,
    approvedIds
  );

  // Real-time cell modifier handler
  const handleUpdateRawRow = (id: string, updatedFields: Partial<RawDataRow>) => {
    setRawData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, ...updatedFields } : row))
    );
  };

  // Create a new facility unit record
  const handleAddRawRow = (newRow: RawDataRow) => {
    setRawData((prev) => [...prev, newRow]);
  };

  // Remove a facility unit record
  const handleDeleteRawRow = (id: string) => {
    setRawData((prev) => prev.filter((row) => row.id !== id));
    // Remove from approved list if deleted
    if (approvedIds.has(id)) {
      const copy = new Set(approvedIds);
      copy.delete(id);
      setApprovedIds(copy);
    }
  };

  // Bulk CSV Appender
  const handleBulkImport = (rows: RawDataRow[]) => {
    setRawData((prev) => [...prev, ...rows]);
  };

  // Direct approval trigger for dashboard items
  const handleApprove = (id: string) => {
    setApprovedIds((prev) => {
      const copy = new Set(prev);
      copy.add(id);
      return copy;
    });
  };

  // Bulk approve all pending records in the active queue
  const handleApproveAll = () => {
    const copy = new Set(approvedIds);
    dashboardRecords.forEach((rec) => {
      if (rec.needsReview) {
        copy.add(rec.id);
      }
    });
    setApprovedIds(copy);
  };

  // Export entire system backup as a downloadable JSON file
  const handleExportBackup = () => {
    const backupState = {
      rawData,
      parameters,
      approvedIds: Array.from(approvedIds),
      exportedAt: getFormattedTime(),
    };
    const blob = new Blob([JSON.stringify(backupState, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `revenue_management_engine_backup_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Import JSON backup state
  const handleImportBackup = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target?.result as string);
        if (parsed.rawData && parsed.parameters) {
          setRawData(parsed.rawData);
          setParameters(parsed.parameters);
          if (parsed.approvedIds) {
            setApprovedIds(new Set(parsed.approvedIds));
          } else {
            setApprovedIds(new Set());
          }
          setLastSaved(getFormattedTime());
          alert("Backup successfully restored!");
        } else {
          alert("Invalid backup file. Missing 'rawData' or 'parameters' definitions.");
        }
      } catch (err: any) {
        alert("Failed to parse backup: " + err.message);
      }
    };
    reader.readAsText(file);
    // Reset file input value so same file can be uploaded again if needed
    event.target.value = "";
  };

  // Revert all data and settings to standard defaults
  const handleResetData = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all raw facilities and parameters to system defaults? This cannot be undone."
      )
    ) {
      setRawData(DEFAULT_RAW_DATA);
      setParameters(DEFAULT_PARAMETERS);
      setApprovedIds(new Set());
      localStorage.clear();
      setLastSaved(getFormattedTime());
    }
  };

  // Reload defaults specifically for Sheet 02
  const handleLoadSample = () => {
    setRawData(DEFAULT_RAW_DATA);
  };

  return (
    <div className="min-h-screen bg-bg text-body-text flex flex-col font-sans">
      
      {/* 
        Sticky horizontal Navigation Bar (56px, white background, sticky,
        brand logotype on left, tabs on right)
      */}
      <header className="sticky top-0 z-50 h-[56px] bg-white border-b border-border shadow-sm">
        <div className="max-w-[1400px] h-full mx-auto px-10 flex items-center justify-between">
          
          {/* Brand Logotype */}
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-accent" />
            <span className="font-heading text-lg font-bold text-primary tracking-tight">
              RMDE <span className="font-sans text-xs font-semibold uppercase text-accent bg-[rgba(34,81,255,0.08)] px-2 py-0.5 rounded ml-1.5">v1.2</span>
            </span>
          </div>

          {/* Navigation Tabs switching worksheets */}
          <nav className="flex h-full items-center gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`h-[56px] px-3.5 flex items-center relative text-xs font-semibold tracking-wider uppercase transition-all-custom cursor-pointer hover:text-accent ${
                    isActive ? "text-accent" : "text-primary/70"
                  }`}
                >
                  {tab.label}
                  {/* Highlight active underline */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent rounded-t" />
                  )}
                </button>
              );
            })}
          </nav>

        </div>
      </header>

      {/* 
        Main Content Area: Max width 1400px centered, 40px left/right margins,
        separated by generous spatial air breathing room
      */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-10 py-10">
        
        {/* Render Worksheet Tab based on active state */}
        {activeTab === "01_Dashboard" && (
          <DashboardSheet
            rawData={rawData}
            dashboardRecords={dashboardRecords}
            parameters={parameters}
            onApprove={handleApprove}
            onApproveAll={handleApproveAll}
            onExportBackup={handleExportBackup}
            onImportBackup={handleImportBackup}
            onResetData={handleResetData}
            lastSaved={lastSaved}
          />
        )}

        {activeTab === "02_Raw_Data" && (
          <RawDataSheet
            rawData={rawData}
            onUpdateRow={handleUpdateRawRow}
            onAddRow={handleAddRawRow}
            onDeleteRow={handleDeleteRawRow}
            onBulkImport={handleBulkImport}
            onLoadSample={handleLoadSample}
          />
        )}

        {activeTab === "03_Rule_Engine" && (
          <RuleEngineSheet ruleRecords={ruleEngineRecords} />
        )}

        {activeTab === "04_Guard_Rails" && (
          <GuardRailsSheet guardRecords={guardRailsRecords} />
        )}

        {activeTab === "05_Parameters" && (
          <ParametersSheet
            parameters={parameters}
            onUpdateParameters={setParameters}
            onReset={handleResetData}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-6 text-center text-xs text-muted">
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          <span>Revenue Management Decision Engine © 2026. All operations running locally in frontend JS.</span>
          <div className="flex items-center gap-1 hover:text-accent transition-colors cursor-pointer">
            <HelpCircle className="w-3.5 h-3.5" /> Documentation Guide
          </div>
        </div>
      </footer>

    </div>
  );
}
