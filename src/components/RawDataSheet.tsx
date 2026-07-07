import React, { useState, useRef } from "react";
import { RawDataRow } from "../types";
import { Plus, Trash2, Upload, AlertCircle, RefreshCw } from "lucide-react";

interface RawDataSheetProps {
  rawData: RawDataRow[];
  onUpdateRow: (id: string, updatedFields: Partial<RawDataRow>) => void;
  onAddRow: (row: RawDataRow) => void;
  onDeleteRow: (id: string) => void;
  onBulkImport: (rows: RawDataRow[]) => void;
  onLoadSample: () => void;
}

export default function RawDataSheet({
  rawData,
  onUpdateRow,
  onAddRow,
  onDeleteRow,
  onBulkImport,
  onLoadSample,
}: RawDataSheetProps) {
  // Local state for the "Add New Facility Unit" form
  const [newFacilityId, setNewFacilityId] = useState("FAC-01 (SOMA SF)");
  const [newUnitType, setNewUnitType] = useState("10x10 Climate Controlled");
  const [newPhysOcc, setNewPhysOcc] = useState("0.90");
  const [newLastWeekOcc, setNewLastWeekOcc] = useState("0.88");
  const [newStreetRate, setNewStreetRate] = useState("140");
  const [newCompRate, setNewCompRate] = useState("155");
  const [newDaysSince, setNewDaysSince] = useState("15");
  const [newMoveIns, setNewMoveIns] = useState("4");
  const [newMoveOuts, setNewMoveOuts] = useState("2");
  const [newTotalUnits, setNewTotalUnits] = useState("25");

  // Local state for Bulk CSV paste
  const [csvText, setCsvText] = useState("");
  const [csvError, setCsvError] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form submit handler
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const row: RawDataRow = {
      id: "row-" + Date.now(),
      facilityId: newFacilityId.trim() || "FAC-01",
      unitType: newUnitType.trim() || "Standard CC",
      physicalOccupancy: Math.min(1, Math.max(0, parseFloat(newPhysOcc) || 0)),
      occupancyLastWeek: Math.min(1, Math.max(0, parseFloat(newLastWeekOcc) || 0)),
      streetRate: Math.max(0, parseFloat(newStreetRate) || 0),
      competitorRate: Math.max(0, parseFloat(newCompRate) || 0),
      daysSinceLastAdj: Math.max(0, parseInt(newDaysSince, 10) || 0),
      moveIns30D: Math.max(0, parseInt(newMoveIns, 10) || 0),
      moveOuts30D: Math.max(0, parseInt(newMoveOuts, 10) || 0),
      totalUnits: Math.max(1, parseInt(newTotalUnits, 10) || 1),
    };
    onAddRow(row);
    // Reset form values with standard defaults
    setNewPhysOcc("0.85");
    setNewLastWeekOcc("0.85");
    setNewStreetRate("100");
    setNewCompRate("110");
    setNewDaysSince("14");
    setNewMoveIns("2");
    setNewMoveOuts("2");
    setNewTotalUnits("20");
  };

  // Parsing CSV strings to RawDataRow arrays
  const parseCSVData = (text: string): RawDataRow[] => {
    const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);
    if (lines.length === 0) return [];

    const imported: RawDataRow[] = [];
    // Identify headers or parse row direct
    const firstLine = lines[0].toLowerCase();
    const hasHeader = firstLine.includes("facility") || firstLine.includes("unit") || firstLine.includes("rate") || firstLine.includes("id");
    const startIndex = hasHeader ? 1 : 0;

    for (let i = startIndex; i < lines.length; i++) {
      const parts = lines[i].split(",").map((p) => p.replace(/^"|"$/g, "").trim());
      if (parts.length < 5) continue; // Skip incomplete lines

      // Map positions:
      // facilityId, unitType, physicalOccupancy, occupancyLastWeek, streetRate, competitorRate, daysSinceLastAdj, moveIns, moveOuts, totalUnits
      const facId = parts[0] || "FAC-Unknown";
      const unitT = parts[1] || "Standard Unit";
      const physOcc = parseFloat(parts[2]) || 0;
      const lastOcc = parseFloat(parts[3]) || 0;
      const streetR = parseFloat(parts[4]) || 0;
      const compR = parseFloat(parts[5]) || 0;
      const daysS = parseInt(parts[6], 10) || 0;
      const mIns = parseInt(parts[7], 10) || 0;
      const mOuts = parseInt(parts[8], 10) || 0;
      const totU = parseInt(parts[9], 10) || 10;

      imported.push({
        id: "imported-" + i + "-" + Date.now(),
        facilityId: facId,
        unitType: unitT,
        physicalOccupancy: Math.min(1, Math.max(0, physOcc > 1 ? physOcc / 100 : physOcc)),
        occupancyLastWeek: Math.min(1, Math.max(0, lastOcc > 1 ? lastOcc / 100 : lastOcc)),
        streetRate: Math.max(0, streetR),
        competitorRate: Math.max(0, compR),
        daysSinceLastAdj: Math.max(0, daysS),
        moveIns30D: Math.max(0, mIns),
        moveOuts30D: Math.max(0, mOuts),
        totalUnits: Math.max(1, totU),
      });
    }
    return imported;
  };

  const handleCsvImport = () => {
    if (!csvText.trim()) {
      setCsvError("Please paste or load valid CSV text first.");
      return;
    }
    try {
      const rows = parseCSVData(csvText);
      if (rows.length === 0) {
        setCsvError("No valid rows parsed. Format: FacilityID, UnitType, Occupancy%, LastWeekOcc%, StreetRate, CompetitorRate, DaysLastAdj, MoveIns, MoveOuts, TotalUnits");
        return;
      }
      onBulkImport(rows);
      setCsvText("");
      setCsvError("");
    } catch (err: any) {
      setCsvError("CSV Parse Error: " + err.message);
    }
  };

  // Drag & drop file reader
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (text) {
        setCsvText(text);
        setCsvError("");
      }
    };
    reader.readAsText(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  return (
    <div className="animate-fade-up space-y-8">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-primary tracking-tight md:text-4xl">
            02_Raw Data Source
          </h1>
          <p className="text-sm text-muted mt-1 font-sans">
            Direct operational data entry worksheet. Modify cell values directly in real-time. All editable input boxes are highlighted with a distinct pale yellow background.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onLoadSample}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-md text-xs font-semibold text-primary hover:bg-bg active:scale-97 transition-all-custom cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reload Default Data
          </button>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[rgba(5,28,44,0.04)] border-b-2 border-[rgba(5,28,44,0.12)]">
                <th className="py-3 px-4 text-xs font-semibold tracking-wider text-primary uppercase">
                  Facility ID
                </th>
                <th className="py-3 px-4 text-xs font-semibold tracking-wider text-primary uppercase">
                  Unit Type
                </th>
                <th className="py-3 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right">
                  Physical Occupancy
                </th>
                <th className="py-3 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right">
                  Last Week Occ.
                </th>
                <th className="py-3 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right">
                  Street Rate ($)
                </th>
                <th className="py-3 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right">
                  Comp. Rate ($)
                </th>
                <th className="py-3 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right">
                  Days Since Adj
                </th>
                <th className="py-3 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right">
                  Move-ins 30D
                </th>
                <th className="py-3 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right">
                  Move-outs 30D
                </th>
                <th className="py-3 px-4 text-xs font-semibold tracking-wider text-primary uppercase text-right">
                  Total Units
                </th>
                <th className="py-3 px-4 text-center">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-primary">
              {rawData.length === 0 ? (
                <tr>
                  <td colSpan={11} className="py-8 text-center text-muted text-sm font-sans">
                    No raw storage data present. Create facility units below or import from CSV.
                  </td>
                </tr>
              ) : (
                rawData.map((row) => (
                  <tr key={row.id} className="hover:bg-bg transition-colors">
                    {/* Facility ID */}
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        className="w-full bg-[#FFFDE7] text-xs font-medium text-primary px-2 py-1 rounded border-0 focus:outline-none focus:ring-1 focus:ring-accent"
                        value={row.facilityId}
                        onChange={(e) => onUpdateRow(row.id, { facilityId: e.target.value })}
                      />
                    </td>

                    {/* Unit Type */}
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        className="w-full bg-[#FFFDE7] text-xs font-medium text-primary px-2 py-1 rounded border-0 focus:outline-none focus:ring-1 focus:ring-accent"
                        value={row.unitType}
                        value-id={row.id}
                        onChange={(e) => onUpdateRow(row.id, { unitType: e.target.value })}
                      />
                    </td>

                    {/* Physical Occupancy */}
                    <td className="py-2.5 px-3 text-right">
                      <div className="space-y-1">
                        <div className="flex items-center justify-end gap-1">
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            max="1"
                            className="w-16 bg-[#FFFDE7] text-xs font-medium text-primary text-right px-1.5 py-1 rounded border-0 focus:outline-none focus:ring-1 focus:ring-accent"
                            value={row.physicalOccupancy}
                            onChange={(e) => onUpdateRow(row.id, { physicalOccupancy: parseFloat(e.target.value) || 0 })}
                          />
                          <span className="text-[11px] text-muted w-8 text-left pl-1">
                            {(row.physicalOccupancy * 100).toFixed(0)}%
                          </span>
                        </div>
                        {/* Inline Data Bar (Accent Fill, 10% Opaque Track) */}
                        <div className="w-full h-1 bg-[rgba(5,28,44,0.1)] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent transition-all duration-300"
                            style={{ width: `${Math.min(100, row.physicalOccupancy * 100)}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Occupancy Last Week */}
                    <td className="py-2.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          max="1"
                          className="w-16 bg-[#FFFDE7] text-xs font-medium text-primary text-right px-1.5 py-1 rounded border-0 focus:outline-none focus:ring-1 focus:ring-accent"
                          value={row.occupancyLastWeek}
                          onChange={(e) => onUpdateRow(row.id, { occupancyLastWeek: parseFloat(e.target.value) || 0 })}
                        />
                        <span className="text-[11px] text-muted w-8 text-left pl-1">
                          {(row.occupancyLastWeek * 100).toFixed(0)}%
                        </span>
                      </div>
                    </td>

                    {/* Street Rate */}
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        min="0"
                        className="w-16 bg-[#FFFDE7] text-xs font-semibold text-primary text-right px-1.5 py-1 rounded border-0 focus:outline-none focus:ring-1 focus:ring-accent"
                        value={row.streetRate}
                        onChange={(e) => onUpdateRow(row.id, { streetRate: parseFloat(e.target.value) || 0 })}
                      />
                    </td>

                    {/* Competitor Rate */}
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        min="0"
                        className="w-16 bg-[#FFFDE7] text-xs font-semibold text-primary text-right px-1.5 py-1 rounded border-0 focus:outline-none focus:ring-1 focus:ring-accent"
                        value={row.competitorRate}
                        onChange={(e) => onUpdateRow(row.id, { competitorRate: parseFloat(e.target.value) || 0 })}
                      />
                    </td>

                    {/* Days Since Last Adj */}
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        min="0"
                        className="w-14 bg-[#FFFDE7] text-xs font-medium text-primary text-right px-1.5 py-1 rounded border-0 focus:outline-none focus:ring-1 focus:ring-accent"
                        value={row.daysSinceLastAdj}
                        onChange={(e) => onUpdateRow(row.id, { daysSinceLastAdj: parseInt(e.target.value, 10) || 0 })}
                      />
                    </td>

                    {/* Move-ins 30D */}
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        min="0"
                        className="w-12 bg-[#FFFDE7] text-xs font-medium text-primary text-right px-1.5 py-1 rounded border-0 focus:outline-none focus:ring-1 focus:ring-accent"
                        value={row.moveIns30D}
                        onChange={(e) => onUpdateRow(row.id, { moveIns30D: parseInt(e.target.value, 10) || 0 })}
                      />
                    </td>

                    {/* Move-outs 30D */}
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        min="0"
                        className="w-12 bg-[#FFFDE7] text-xs font-medium text-primary text-right px-1.5 py-1 rounded border-0 focus:outline-none focus:ring-1 focus:ring-accent"
                        value={row.moveOuts30D}
                        onChange={(e) => onUpdateRow(row.id, { moveOuts30D: parseInt(e.target.value, 10) || 0 })}
                      />
                    </td>

                    {/* Total Units */}
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        min="1"
                        className="w-12 bg-[#FFFDE7] text-xs font-medium text-primary text-right px-1.5 py-1 rounded border-0 focus:outline-none focus:ring-1 focus:ring-accent"
                        value={row.totalUnits}
                        onChange={(e) => onUpdateRow(row.id, { totalUnits: parseInt(e.target.value, 10) || 1 })}
                      />
                    </td>

                    {/* Delete button */}
                    <td className="py-2.5 px-4 text-center">
                      <button
                        onClick={() => onDeleteRow(row.id)}
                        className="text-muted hover:text-negative active:scale-90 transition-all-custom cursor-pointer"
                        title="Delete record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manual Creation & CSV upload Split row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Creation Box */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-0 card-hover transition-all-custom space-y-4">
          <div className="border-b border-border pb-3">
            <h3 className="font-heading text-lg font-semibold text-primary">Add Single Facility Unit</h3>
            <p className="text-xs text-muted font-sans">Introduce new physical inventory to the decision loop</p>
          </div>

          <form onSubmit={handleAddSubmit} className="grid grid-cols-2 gap-4 text-xs font-sans">
            <div className="col-span-2">
              <label className="block font-semibold uppercase text-primary tracking-wider mb-1">Facility Name / Code</label>
              <input
                type="text"
                required
                className="w-full bg-[#FFFDE7] rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-accent text-primary font-medium"
                value={newFacilityId}
                onChange={(e) => setNewFacilityId(e.target.value)}
              />
            </div>

            <div className="col-span-2">
              <label className="block font-semibold uppercase text-primary tracking-wider mb-1">Unit Type Descriptor</label>
              <input
                type="text"
                required
                className="w-full bg-[#FFFDE7] rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-accent text-primary font-medium"
                value={newUnitType}
                onChange={(e) => setNewUnitType(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold uppercase text-primary tracking-wider mb-1">Physical Occ. (Ratio)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="1"
                className="w-full bg-[#FFFDE7] rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-accent text-primary font-medium"
                value={newPhysOcc}
                onChange={(e) => setNewPhysOcc(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold uppercase text-primary tracking-wider mb-1">Last Week Occ. (Ratio)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="1"
                className="w-full bg-[#FFFDE7] rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-accent text-primary font-medium"
                value={newLastWeekOcc}
                onChange={(e) => setNewLastWeekOcc(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold uppercase text-primary tracking-wider mb-1">Current Street Rate ($)</label>
              <input
                type="number"
                min="0"
                className="w-full bg-[#FFFDE7] rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-accent text-primary font-medium"
                value={newStreetRate}
                onChange={(e) => setNewStreetRate(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold uppercase text-primary tracking-wider mb-1">Competitor Avg Rate ($)</label>
              <input
                type="number"
                min="0"
                className="w-full bg-[#FFFDE7] rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-accent text-primary font-medium"
                value={newCompRate}
                onChange={(e) => setNewCompRate(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold uppercase text-primary tracking-wider mb-1">Days Since Last Adj</label>
              <input
                type="number"
                min="0"
                className="w-full bg-[#FFFDE7] rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-accent text-primary font-medium"
                value={newDaysSince}
                onChange={(e) => setNewDaysSince(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold uppercase text-primary tracking-wider mb-1">Total Unit Inventory</label>
              <input
                type="number"
                min="1"
                className="w-full bg-[#FFFDE7] rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-accent text-primary font-medium"
                value={newTotalUnits}
                onChange={(e) => setNewTotalUnits(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold uppercase text-primary tracking-wider mb-1">Move-ins 30D</label>
              <input
                type="number"
                min="0"
                className="w-full bg-[#FFFDE7] rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-accent text-primary font-medium"
                value={newMoveIns}
                onChange={(e) => setNewMoveIns(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold uppercase text-primary tracking-wider mb-1">Move-outs 30D</label>
              <input
                type="number"
                min="0"
                className="w-full bg-[#FFFDE7] rounded py-2 px-3 focus:outline-none focus:ring-1 focus:ring-accent text-primary font-medium"
                value={newMoveOuts}
                onChange={(e) => setNewMoveOuts(e.target.value)}
              />
            </div>

            <div className="col-span-2 pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded text-sm font-semibold hover:bg-opacity-90 transition-all-custom cursor-pointer active:scale-98"
              >
                <Plus className="w-4 h-4" /> Append Facility Unit
              </button>
            </div>
          </form>
        </div>

        {/* CSV Bulk Importer */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-0 card-hover transition-all-custom space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="border-b border-border pb-3">
              <h3 className="font-heading text-lg font-semibold text-primary">Bulk CSV Import Engine</h3>
              <p className="text-xs text-muted font-sans">Paste columns or drop a .csv file directly below</p>
            </div>

            {/* CSV Format Spec */}
            <div className="bg-[rgba(5,28,44,0.02)] border border-border p-3 rounded-md text-[11px] text-muted font-sans leading-relaxed">
              <span className="font-semibold block text-primary mb-1">Expected CSV Column Ordering (with/without header):</span>
              <code>FacilityID, UnitType, PhysicalOccupancy, LastWeekOccupancy, StreetRate, CompetitorRate, DaysSinceAdj, MoveIns30D, MoveOuts30D, TotalUnits</code>
              <span className="block mt-1 font-semibold">Example:</span>
              <code>FAC-04, 5x15 Drive-up, 0.94, 0.92, 110, 125, 20, 3, 1, 15</code>
            </div>

            {/* Drop Zone */}
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-all-custom cursor-pointer ${
                dragActive ? "border-accent bg-[rgba(34,81,255,0.04)]" : "border-border hover:border-accent"
              }`}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-xs text-primary font-semibold">
                Drag & drop facility CSV file here or <span className="text-accent underline">browse</span>
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv, text/csv"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Textarea Paste Input */}
            <div className="space-y-1">
              <label className="block text-[11px] font-semibold text-primary uppercase">Or paste raw CSV text</label>
              <textarea
                rows={3}
                className="w-full bg-[#FFFDE7] rounded text-xs p-2 focus:outline-none focus:ring-1 focus:ring-accent text-primary font-mono"
                placeholder="FAC-04, 5x15 CC, 0.88, 0.86, 120, 130, 14, 2, 0, 10"
                value={csvText}
                onChange={(e) => setCsvText(e.target.value)}
              />
            </div>

            {csvError && (
              <div className="flex items-center gap-2 p-2.5 text-xs text-negative bg-[rgba(213,47,47,0.04)] rounded">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{csvError}</span>
              </div>
            )}
          </div>

          <div className="pt-4">
            <button
              onClick={handleCsvImport}
              className="w-full bg-accent text-white py-2.5 rounded text-sm font-semibold hover:bg-opacity-90 transition-all-custom cursor-pointer active:scale-98"
            >
              Parse & Import CSV Records
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
