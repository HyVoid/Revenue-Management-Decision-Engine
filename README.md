# Revenue Management Decision Engine

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange)

**A lightweight revenue management decision-support engine that transforms operational data into governed pricing recommendations—free to use, with both Browser and Excel versions, and no installation required.**

 ## 🚀 No signup. No installation. Free.

 **🌐 Open in Browser**  
 *(HTML live demo coming soon)*

 **📥 Download Excel Version**  
 *(GitHub Release / Gumroad link coming soon)*

---

# Screenshots

### Browser Version

<!-- screenshot: browser version -->

*Interactive management dashboard showing pricing recommendations, guard rail validation, approval queue, and portfolio performance from any browser.*

---

### Excel Version

<!-- screenshot: excel version -->

*Native Excel workbook with structured data input, automated rule engine, pricing guard rails, and executive dashboard for weekly decision reviews.*

---

# What It Helps You Track

- Pricing recommendations that balance occupancy, demand trends, competitor positioning, and operational stability.
- Facilities requiring immediate management approval instead of automatic price execution.
- Price changes prevented by governance guard rails before unnecessary revenue volatility occurs.
- Demand momentum using occupancy together with move-in and move-out velocity instead of relying on static utilization alone.
- Portfolio-wide pricing consistency across multiple facilities and unit types using standardized decision rules.
- Weekly pricing opportunities without manually reviewing every property or rebuilding spreadsheets.

---

# Quick Start Workflow

Getting from operational data to pricing recommendations takes only a few minutes.

### 1. Configure Business Parameters

Open the **Parameters** worksheet and define the operational rules that rarely change.

Typical settings include:

- Occupancy thresholds
- Standard price increase and decrease percentages
- Cooling period between price adjustments
- Deadband tolerance
- Maximum adjustment limits
- Approval thresholds

This configuration is completed once and reused for every future update.

---

### 2. Import Existing Operating Data

Export the latest operational data from your property management system, revenue platform, accounting software, or any spreadsheet.

Paste the data directly into the **Raw Data** worksheet.

No manual calculations.
No column-by-column editing.
No formula maintenance.

Simply replace last week's data with the latest export.

---

### 3. Review Pricing Recommendations

Switch to the Dashboard.

The workbook immediately recalculates:

- Recommended prices
- Raise / Lower / Hold decisions
- Guard rail interventions
- Approval requirements
- Override explanations
- Executive action queue

Every calculation updates automatically.

---

### 4. Refresh on a Regular Schedule

Repeat the same process weekly or whenever new operating data becomes available.

There is no need to rebuild reports, copy formulas, or reconfigure the workbook.

Replace the imported dataset and the complete pricing analysis refreshes automatically.

---

**Set a few key parameters. Drop in your existing data. Get the analysis. Refresh whenever new operating data becomes available.**
# Why I Built This

Many revenue management teams already have access to occupancy reports, competitor pricing, move-in activity, and historical rate changes. The real problem is rarely missing data—it is turning that data into pricing decisions that remain both profitable and operationally stable.

A common failure occurs when pricing reacts to every short-term fluctuation. A competitor lowers rates for a few days, occupancy changes by only one or two units, or a single busy weekend temporarily boosts demand. Without clear governance, these small changes trigger unnecessary price adjustments that confuse site managers, frustrate customers, and create inconsistent pricing across the portfolio.

I built this project to productize the reasoning behind disciplined revenue management rather than automate every possible price change.

Instead of treating every data movement as a signal to act, the workbook asks a more important question:

**"Has enough meaningful information changed to justify a pricing decision?"**

That distinction is where the Guard Rail framework becomes valuable.

For example:

**Before**

A facility increases occupancy from **88% to 89%** after one strong weekend. The local competitor also raises pricing by 3%. A traditional rule-based model immediately recommends another rate increase, even though the previous adjustment occurred only five days earlier.

Result:

- Multiple price changes within two weeks
- Inconsistent customer experience
- Unnecessary operational work
- Increased pricing volatility

**After**

The Decision Engine evaluates the same data through multiple governance checks.

Although demand remains healthy, the facility is still inside the minimum adjustment interval and occupancy movement remains within the configured deadband. The recommendation becomes:

**Hold Current Price**

The dashboard clearly explains why:

> Raise Cancelled — Cooling Period Protection

The decision becomes transparent, repeatable, and easy to audit.

This workbook is not intended to replace enterprise revenue management systems.

It packages a practical analytical framework into a lightweight decision-support tool that helps operators make more consistent pricing decisions using rules that remain understandable, configurable, and defensible.

---

# Common Revenue Management Problems This Solves

| Problem | Without This Tool | With This Tool |
|----------|------------------|----------------|
| Frequent price changes caused by small weekly fluctuations | Prices move too often, creating instability and inconsistent execution across facilities | Cooling periods and deadband guard rails prevent unnecessary adjustments while preserving strategic pricing discipline |
| Decisions rely only on occupancy | High occupancy may hide weakening demand or aggressive discounting | Occupancy is evaluated together with demand velocity, competitor pricing, and pricing governance |
| Every property manager interprets pricing differently | Similar facilities receive inconsistent recommendations depending on individual judgment | Standardized business rules create consistent recommendations across the entire portfolio |
| High-risk price changes receive little oversight | Large adjustments may be executed without appropriate management review | Automatic approval workflows identify recommendations requiring manager approval before execution |
| Difficult to explain why pricing changed | Teams spend time justifying recommendations instead of evaluating them | Every recommendation includes trigger reasons, override explanations, and complete decision traceability |
| Spreadsheet maintenance becomes a recurring project | Formulas are copied, repaired, and manually extended as data grows | Dynamic array calculations automatically expand with new operational data without formula maintenance |

---

# Who This Is For

This workbook is designed for professionals responsible for pricing decisions rather than spreadsheet development.

It is particularly suitable for:

- Revenue Managers overseeing multiple facilities or property portfolios
- Self-storage operators implementing structured pricing governance
- Regional Operations Managers reviewing weekly pricing recommendations
- Asset Managers balancing occupancy growth with revenue optimization
- Analysts replacing manual pricing reviews with repeatable decision frameworks

It is **not** designed to replace enterprise Revenue Management Systems, Property Management Systems, or machine learning pricing platforms. Instead, it provides a transparent and lightweight analytical layer that complements existing operational workflows.

No spreadsheet expertise is required.

**Open the Browser version or Excel workbook, import operational data, and begin reviewing pricing recommendations immediately.**

---

# About

I build lightweight decision-support tools for situations where there are simply too many moving parts to manage mentally.

Rather than creating dashboards full of charts, I focus on structuring the information required to answer one practical question:

**"What information needs to be in one place to make the next decision confidently?"**

The **Revenue Management Decision Engine** is one example of this philosophy. It combines operational data, analytical rules, governance guard rails, and transparent decision logic into a reusable framework that helps teams make consistent pricing decisions without adding unnecessary software complexity.
# Technical Details

<details>
<summary><strong>For technical reviewers, Excel practitioners, and collaborators</strong></summary>

---

# Workbook Architecture

The workbook follows a deliberately simple pipeline:

```
Operational Data
        │
        ▼
02_Raw_Data
        │
        ▼
03_Rule_Engine
        │
        ▼
04_Guard_Rails
        │
        ▼
01_Dashboard
```

Every worksheet has a single responsibility.

| Worksheet | Purpose | Input | Output |
|-----------|---------|-------|--------|
| **01_Dashboard** | Executive review and approval queue | Guard Rail results | Final pricing recommendations |
| **02_Raw_Data** | Weekly operational data import | CSV / PMS export | Standardized operating metrics |
| **03_Rule_Engine** | Base pricing logic | Raw operating data | Initial Raise / Lower / Hold recommendation |
| **04_Guard_Rails** | Pricing governance | Rule Engine output | Safe pricing recommendations |
| **05_Parameters** | Business configuration | Manual settings | Thresholds used throughout workbook |

### Data Flow

```
Paste Weekly Data
        │
        ▼
Normalize Records
        │
        ▼
Calculate Demand Metrics
        │
        ▼
Generate Base Recommendation
        │
        ▼
Apply Guard Rails
        │
        ▼
Determine Approval Level
        │
        ▼
Executive Dashboard
```

No worksheet requires manual formula extension.

Modern Excel Dynamic Arrays automatically expand as additional facilities and unit types are added.

---

# Three Traps That Catch Even Experienced Revenue Managers

---

## Trap 1 — Reacting To Every Occupancy Change

### Decision Made

Occupancy increased from **90% to 91%**.

Recommendation:

```
Raise Price
```

### Hidden Problem

Only one week's occupancy movement was considered.

Demand trend, adjustment history, and statistical noise were ignored.

### Consequence

Prices change almost every week.

Customers experience inconsistent pricing.

Site managers lose confidence in recommendations.

### Why The Logic Is Incorrect

Occupancy alone measures current utilization.

It does **not** indicate whether demand has changed enough to justify another pricing action.

Small fluctuations frequently occur naturally.

### Correct Approach

Evaluate:

- Occupancy
- Velocity
- Previous adjustment date
- Deadband threshold

Only recommend another adjustment when all conditions support it.

### Correct Outcome

```
Hold Current Price

Reason:
Cooling Period Protection
```

<details>
<summary>Formula Logic</summary>

```excel
IF(
DaysSinceAdjustment>=MinimumCoolingDays,
EvaluateRecommendation,
"Hold"
)
```

</details>

---

## Trap 2 — Chasing Competitor Pricing

### Decision Made

Competitor lowered pricing by 6%.

Recommendation:

```
Immediately Match Price
```

### Hidden Problem

Competitor pricing became the primary decision driver.

Local demand remained strong.

Occupancy exceeded target.

Revenue performance remained healthy.

### Consequence

Revenue declines unnecessarily.

Portfolio pricing becomes reactive rather than strategic.

### Why The Logic Is Incorrect

Competitor pricing provides useful context.

It should never override internal operating performance.

The business earns revenue from demand—not from copying competitors.

### Correct Approach

Evaluate competitor pricing together with:

- Occupancy
- Demand Velocity
- RevPAF
- Existing pricing position

### Correct Outcome

```
Hold Existing Price

Demand remains healthy.
No competitive intervention required.
```

<details>
<summary>Formula Logic</summary>

```excel
Competitor Gap
+
Occupancy
+
Velocity
=
Base Recommendation
```

Competitor pricing influences the recommendation.

It never becomes the recommendation.

</details>

---

## Trap 3 — Allowing Large Price Changes Automatically

### Decision Made

System recommends:

```
Increase Price 18%
```

Recommendation executed immediately.

### Hidden Problem

Large pricing adjustments create governance risk.

Even when mathematically justified, they may require human review.

### Consequence

Unexpected customer reactions.

Inconsistent regional pricing.

Loss of executive control.

### Why The Logic Is Incorrect

Optimization and governance are different objectives.

The highest theoretical revenue outcome is not always the safest operational decision.

### Correct Approach

Apply:

- Maximum adjustment cap
- Approval thresholds
- Manual review rules

### Correct Outcome

```
Suggested Increase:
10%

Status:
Manager Approval Required
```

<details>
<summary>Formula Logic</summary>

```excel
IF(
Adjustment >
ApprovalThreshold,
ManagerReview,
AutoExecute
)
```

</details>

---

# Example Scenario

A regional operator manages **42 self-storage facilities**.

Each Monday morning, site managers export operational data from the Property Management System.

The exported file includes:

- Physical Occupancy
- Current Street Rate
- Competitor Rate
- Move-ins (30 Days)
- Move-outs (30 Days)
- Days Since Last Adjustment

The CSV is pasted directly into **02_Raw_Data**.

Immediately the workbook calculates:

- Economic Occupancy
- Demand Velocity
- Competitor Gap
- Base Recommendation
- Guard Rail Status
- Final Recommended Price
- Approval Requirement

Example:

| Metric | Value |
|--------|------:|
| Physical Occupancy | 91.2% |
| Occupancy Last Week | 90.5% |
| Street Rate | $154 |
| Competitor Rate | $149 |
| Move-ins | 36 |
| Move-outs | 24 |
| Total Units | 210 |

Intermediate calculations:

```
Velocity

(36−24)/210

=5.7%
```

Base Rule Engine:

```
Raise Price
```

Guard Rail Evaluation:

```
Cooling Period
PASS

Deadband
PASS

Maximum Adjustment
PASS
```

Final Recommendation

```
Raise Price

154 → 166

(+8%)
```

Approval Engine

```
Auto Execute
```

Instead of reviewing hundreds of facilities manually, management receives a short list containing only locations that require intervention.

Routine pricing changes proceed automatically while unusual recommendations remain visible for executive review.

---

# Formula Reference

<details>
<summary>Rule Engine</summary>

| Formula | Purpose |
|---------|----------|
| LET | Variable declaration |
| MAP | Row-by-row calculations |
| LAMBDA | Functional pricing logic |
| IFS | Decision branching |
| XLOOKUP | Parameter retrieval |
| Dynamic Arrays | Automatic spill calculations |

</details>

---

<details>
<summary>Demand Metrics</summary>

| Metric | Formula |
|---------|---------|
| Velocity | (Move-ins − Move-outs) / Total Units |
| Competitor Gap | (Competitor Rate − Street Rate) / Street Rate |
| Economic Occupancy | (Potential Revenue − Vacancy Cost − Concessions) / Potential Revenue |
| RevPAF | Monthly Revenue / Available Square Feet |

</details>

---

<details>
<summary>Guard Rail Logic</summary>

| Rule | Purpose |
|------|----------|
| Cooling Period | Prevent frequent price changes |
| Deadband | Ignore insignificant occupancy movement |
| Adjustment Cap | Limit pricing volatility |
| Approval Threshold | Escalate high-risk changes |
| Audit Trail | Explain every overridden recommendation |

</details>

---

<details>
<summary>Modern Excel Functions Used</summary>

- LET
- MAP
- LAMBDA
- IFS
- FILTER
- SORT
- UNIQUE
- TAKE
- DROP
- XLOOKUP
- Dynamic Spill Arrays (#)

No VBA is required.

The workbook is designed for Microsoft 365 using the modern Dynamic Array calculation engine.

</details>

---

# Validation Rules

| Field | Rule | Error Behavior |
|------|------|----------------|
| Facility ID | Cannot be blank | Record excluded from analysis |
| Unit Type | Required | Record excluded |
| Physical Occupancy | 0–100% | Validation warning |
| Street Rate | Greater than zero | Recommendation suppressed |
| Competitor Rate | Greater than zero | Competitor comparison skipped |
| Total Units | Greater than zero | Velocity returns zero |
| Days Since Last Adjustment | Must be non-negative | Cooling rule fails validation |
| Move-ins | Non-negative integer | Velocity not calculated |
| Move-outs | Non-negative integer | Velocity not calculated |
| Parameters | Required before calculation | Dashboard displays configuration warning |

---

## Design Principles

This workbook was designed around five operational principles:

1. **Governance before optimization.** Stable pricing decisions outperform frequent reactive adjustments.

2. **One source of truth.** Business thresholds are maintained only once within the Parameters sheet.

3. **Zero-maintenance calculations.** Dynamic Arrays eliminate copied formulas and reduce workbook maintenance.

4. **Transparent recommendations.** Every pricing decision includes an explanation that can be audited and challenged.

5. **Human oversight where it matters.** Routine recommendations can be automated, while higher-risk pricing decisions remain subject to managerial approval.

</details>
---

# Other Tools in This Series

This project is part of a growing collection of lightweight decision-support tools designed to help operators make better decisions without deploying enterprise software.

| Tool | Purpose |
|------|---------|
| **Revenue Management Decision Engine** | Standardize pricing recommendations with configurable business rules, guard rails, and approval workflows. |
| **Amazon Reporting Automation Toolkit** | Consolidate Amazon Seller Central, Sellerboard, and SQP exports into automated operational and financial reports. |
| **Budget & Variance Tracker** | Monitor planned budgets, committed spend, and remaining balances with automated variance analysis. |
| **Procurement Decision Tracker** | Prioritize purchasing decisions using configurable scoring, supplier comparisons, and approval workflows. |
| **Operational KPI Dashboard** | Combine multiple operational data sources into a single management dashboard for recurring business reviews. |

More decision-support tools are being added over time.

**GitHub Repository**

> https://github.com/your-username

**Download Excel Templates**

> https://your-gumroad-link.com

---

# Contributing

Suggestions, bug reports, and improvements are welcome.

Contributions that improve analytical accuracy, usability, documentation, or operational workflows are especially appreciated.

Typical contribution areas include:

- Revenue management methodologies
- Excel optimization
- Formula improvements
- Documentation
- Example datasets
- Browser version enhancements

If you discover an issue or have an idea for improving the decision framework, please open an Issue or submit a Pull Request.

---

# Version

Current Version

**v1.0.0**

Initial public release featuring:

- Revenue Management Rule Engine
- Pricing Guard Rails
- Executive Dashboard
- Dynamic Array calculation engine
- Approval workflow
- Audit trail
- Parameter-driven governance

---

# License

This project is licensed under the **Apache License 2.0**.

You are free to:

- Use the workbook commercially.
- Modify and extend the analytical framework.
- Distribute copies.
- Incorporate the logic into your own workflows.

Subject to the terms and conditions of the Apache License 2.0.

See the **LICENSE** file for the complete license text.

---

## Disclaimer

This workbook is a **decision-support tool**, not an autonomous pricing system.

All recommendations should be reviewed within the context of local market conditions, business strategy, legal requirements, and organizational pricing policies.

The author makes no guarantee that following the recommendations will maximize revenue or profitability in every operating environment. Final pricing decisions remain the responsibility of the organization using the tool.

---

## Acknowledgements

This project is inspired by practical revenue management challenges faced by operators who need transparent, repeatable, and governable pricing decisions without the complexity of enterprise revenue management platforms.

The design philosophy emphasizes:

- Lightweight implementation
- Transparent analytical logic
- Reproducible decision frameworks
- Operational governance
- Long-term maintainability

If this project helps improve your pricing workflow, consider starring the repository to support future development.
