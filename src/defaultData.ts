import { RawDataRow, SystemParameters } from "./types";

export const DEFAULT_PARAMETERS: SystemParameters = {
  occupancyUpperLimit: 0.92, // B3
  occupancyLowerLimit: 0.75, // B4
  standardRaiseStep: 0.08, // B5 (8% raise)
  standardLowerStep: -0.10, // B6 (10% lower)
  minAdjustmentInterval: 14, // B7 (14 days cooling period)
  deadbandThreshold: 0.02, // B8 (2% occupancy change deadband)
  singleMaxAdjustmentCap: 0.10, // B9 (10% single adj cap)
  approvalTriggerPct: 0.12, // B10 (12% shift triggers manager approval)
  approvalTriggerVal: 20.00, // B11 ($20 shift triggers manager approval)
};

export const DEFAULT_RAW_DATA: RawDataRow[] = [
  {
    id: "row-1",
    facilityId: "FAC-01 (SOMA SF)",
    unitType: "10x10 Climate Controlled",
    physicalOccupancy: 0.95,
    occupancyLastWeek: 0.93,
    streetRate: 150.00,
    competitorRate: 175.00,
    daysSinceLastAdj: 21,
    moveIns30D: 5,
    moveOuts30D: 1,
    totalUnits: 20,
  },
  {
    id: "row-2",
    facilityId: "FAC-01 (SOMA SF)",
    unitType: "10x20 Drive-Up Access",
    physicalOccupancy: 0.96,
    occupancyLastWeek: 0.95,
    streetRate: 250.00,
    competitorRate: 260.00,
    daysSinceLastAdj: 18,
    moveIns30D: 2,
    moveOuts30D: 1,
    totalUnits: 10,
  },
  {
    id: "row-3",
    facilityId: "FAC-02 (Oakland North)",
    unitType: "5x10 Standard Indoor",
    physicalOccupancy: 0.70,
    occupancyLastWeek: 0.76,
    streetRate: 90.00,
    competitorRate: 85.00,
    daysSinceLastAdj: 5,
    moveIns30D: 1,
    moveOuts30D: 4,
    totalUnits: 30,
  },
  {
    id: "row-4",
    facilityId: "FAC-02 (Oakland North)",
    unitType: "10x15 Climate Controlled",
    physicalOccupancy: 0.65,
    occupancyLastWeek: 0.72,
    streetRate: 220.00,
    competitorRate: 200.00,
    daysSinceLastAdj: 30,
    moveIns30D: 0,
    moveOuts30D: 5,
    totalUnits: 15,
  },
  {
    id: "row-5",
    facilityId: "FAC-03 (San Jose)",
    unitType: "5x5 CC Storage Pod",
    physicalOccupancy: 0.88,
    occupancyLastWeek: 0.84,
    streetRate: 80.00,
    competitorRate: 95.00,
    daysSinceLastAdj: 25,
    moveIns30D: 6,
    moveOuts30D: 1,
    totalUnits: 25,
  },
  {
    id: "row-6",
    facilityId: "FAC-03 (San Jose)",
    unitType: "10x20 Commercial Space",
    physicalOccupancy: 0.93,
    occupancyLastWeek: 0.925,
    streetRate: 350.00,
    competitorRate: 380.00,
    daysSinceLastAdj: 45,
    moveIns30D: 1,
    moveOuts30D: 0,
    totalUnits: 8,
  },
  {
    id: "row-7",
    facilityId: "FAC-01 (SOMA SF)",
    unitType: "5x5 CC Locker",
    physicalOccupancy: 0.78,
    occupancyLastWeek: 0.79,
    streetRate: 65.00,
    competitorRate: 70.00,
    daysSinceLastAdj: 12,
    moveIns30D: 2,
    moveOuts30D: 2,
    totalUnits: 50,
  },
  {
    id: "row-8",
    facilityId: "FAC-02 (Oakland North)",
    unitType: "10x10 Standard Drive-Up",
    physicalOccupancy: 0.94,
    occupancyLastWeek: 0.935,
    streetRate: 180.00,
    competitorRate: 195.00,
    daysSinceLastAdj: 8,
    moveIns30D: 4,
    moveOuts30D: 2,
    totalUnits: 18,
  }
];
