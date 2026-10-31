[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)
# Revenue Management Decision Engine

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange)

**A lightweight revenue management decision-support engine that transforms operational data into governed pricing recommendations—free to use, with both Browser and Excel versions, and no installation required.**

**No signup. No installation. Free in your browser.**

Try the browser version for free. If you need the Excel version, you can buy it with a 30-day, no-questions-asked money-back guarantee.

 **🌐 Open in Browser**  👉 [*HTML live demo*](https://hyvoid.github.io/Revenue-Management-Decision-Engine/)

 **📥 Download Excel Version**  
 *(GitHub Release / [Website](https://www.theseusworkshop.com/) link coming soon)*

---

## What It Helps You Track

- Pricing recommendations that balance occupancy, demand trends, competitor positioning, and operational stability.
- Facilities requiring immediate management approval instead of automatic price execution.
- Price changes prevented by governance guard rails before unnecessary revenue volatility occurs.
- Demand momentum using occupancy together with move-in and move-out velocity instead of relying on static utilization alone.
- Portfolio-wide pricing consistency across multiple facilities and unit types using standardized decision rules.
- Weekly pricing opportunities without manually reviewing every property or rebuilding spreadsheets.

---

## Quick Start Workflow

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
## Why I Built This

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

## Common Revenue Management Problems This Solves

| Problem | Without This Tool | With This Tool |
|----------|------------------|----------------|
| Frequent price changes caused by small weekly fluctuations | Prices move too often, creating instability and inconsistent execution across facilities | Cooling periods and deadband guard rails prevent unnecessary adjustments while preserving strategic pricing discipline |
| Decisions rely only on occupancy | High occupancy may hide weakening demand or aggressive discounting | Occupancy is evaluated together with demand velocity, competitor pricing, and pricing governance |
| Every property manager interprets pricing differently | Similar facilities receive inconsistent recommendations depending on individual judgment | Standardized business rules create consistent recommendations across the entire portfolio |
| High-risk price changes receive little oversight | Large adjustments may be executed without appropriate management review | Automatic approval workflows identify recommendations requiring manager approval before execution |
| Difficult to explain why pricing changed | Teams spend time justifying recommendations instead of evaluating them | Every recommendation includes trigger reasons, override explanations, and complete decision traceability |
| Spreadsheet maintenance becomes a recurring project | Formulas are copied, repaired, and manually extended as data grows | Dynamic array calculations automatically expand with new operational data without formula maintenance |

---

## Who This Is For

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

## About

I build lightweight decision-support tools for situations where there are simply too many moving parts to manage mentally.

Rather than creating dashboards full of charts, I focus on structuring the information required to answer one practical question:

**"What information needs to be in one place to make the next decision confidently?"**

The **Revenue Management Decision Engine** is one example of this philosophy. It combines operational data, analytical rules, governance guard rails, and transparent decision logic into a reusable framework that helps teams make consistent pricing decisions without adding unnecessary software complexity.
## Technical Details

<details>
<summary><strong>For technical reviewers, Excel practitioners, and collaborators</strong></summary>

---

## Workbook Architecture

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

## Three Traps That Catch Even Experienced Revenue Managers

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

## Example Scenario

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

## Formula Reference

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

## Validation Rules

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

## Other Tools in This Series

This project is part of a growing collection of lightweight decision-support tools designed to help operators make better decisions without deploying enterprise software.

* **[rolling-cashflow-forecast](https://github.com/HyVoid/rolling-cashflow-forecast)** — Why is cash always tight? — Forecast future liquidity under changing operational and financial assumptions.
* **[Multi-Currency-Trade-Financial-Analyzer](https://github.com/HyVoid/Multi-Currency-Trade-Financial-Analyzer)** — Which trade flows are actually profitable after currency effects? — Measure multi-currency trade profitability across cross-border operations.
* **[RTL_Loan_Sizer_Pricer](https://github.com/HyVoid/RTL_Loan_Sizer_Pricer)** — What financing structure is supportable under different borrower and collateral scenarios? — Compare lending scenarios using risk-adjusted financing assumptions.
* **[Personal-Business-Dual-Track-Budget-Manager](https://github.com/HyVoid/Personal-Business-Dual-Track-Budget-Manager)** — Where is personal and business cash being mixed or misallocated? — Separate personal and business cash flows into independently tracked budget tracks.
* **[Multifamily-Value-Add-Acquisition-Model](https://github.com/HyVoid/Multifamily-Value-Add-Acquisition-Model)** — Does this real estate acquisition still create equity value after renovation and operating assumptions? — Evaluate multifamily acquisition returns under renovation financing and operating scenarios.
* **[Real-Estate-Valuation-all-in-one-calculator](https://github.com/HyVoid/Real-Estate-Valuation-all-in-one-calculator)** — What is a property worth under different valuation methods? — Calculate property value across multiple valuation methods with tax and capital expenditure modeling.
* **[multi-entity-expense-allocation](https://github.com/HyVoid/multi-entity-expense-allocation)** — Are shared costs being allocated fairly across entities or are some assets overburdened while others escape their true cost exposure? — Distribute supplier invoices across multiple legal entities and operating assets using configurable allocation methodologies.
* **[investment-pool-nav-excel-template](https://github.com/HyVoid/investment-pool-nav-excel-template)** — What is each participant actually owed based on their entry timing and current pool value? — Track investment pool ownership continuously using NAV-based unit accounting.
* **[shopify-cash-flow-forecast-excel-toolkit](https://github.com/HyVoid/shopify-cash-flow-forecast-excel-toolkit)** — Which operational commitments will create a cash problem in the next twelve weeks? — Connect Shopify sales bank transactions advertising spend and inventory purchasing into a unified cash flow decision framework.
* **[amazon-wbr-sqp-analytics-template](https://github.com/HyVoid/amazon-wbr-sqp-analytics-template)** — What actually changed in the business this period and which products or keywords drove the change? — Transform Amazon Seller Central SQP and Sellerboard exports into standardized executive business reviews.
* **[food-manufacturing-cost-calculator-excel](https://github.com/HyVoid/food-manufacturing-cost-calculator-excel)** — Which products are actually profitable after all manufacturing costs are allocated and which are destroying margin? — Allocate factory labor utilities overhead and material costs to every SKU for true unit manufacturing economics.
* **[ecommerce-profit-calculator-excel](https://github.com/HyVoid/ecommerce-profit-calculator-excel)** — Which orders are actually profitable after all hidden costs and where is money leaking across channels and currencies? — Reconstruct true order-level profitability by reconciling sales payouts shipping costs payment fees and marketplace commissions across multi-channel e-commerce operations.
* **[construction-job-costing-excel-template](https://github.com/HyVoid/construction-job-costing-excel-template)** — Which contractor projects and customers are actually profitable after all job costs? — Connect lead estimation, job execution, and actual cost tracking into a unified contractor profitability framework.
* **[Flora-Pastry-Coffee-Shop-Operating-Control-System](https://github.com/HyVoid/Flora-Pastry-Coffee-Shop-Operating-Control-System)** — Is the shop genuinely profitable after all ingredient, labor, and operating costs? — Connect recipe costing, sales, inventory consumption, and operating expenses into a unified profitability and cash flow framework.
* **[freight-forwarder-job-costing-excel](https://github.com/HyVoid/freight-forwarder-job-costing-excel)** — Which freight bookings are actually profitable after all costs, fees, and currency conversion? — Measure booking-level freight profitability by reconciling revenue, COGS, bank fees, and container costs across mixed-currency transactions.
* **[cross-entity-logistics-console](https://github.com/HyVoid/cross-entity-logistics-console)** — Which containers and customers are actually profitable across customs and fleet operations? — Consolidate customs clearance and fleet execution data into a single container-level profitability view.
* **[family-loan-tracker-excel](https://github.com/HyVoid/family-loan-tracker-excel)** — What is actually owed today after years of transfers and accrued interest? — Reconcile long-term fund transfers and interest accruals into a current outstanding balance.
* **[3-statement-financial-model-excel](https://github.com/HyVoid/3-statement-financial-model-excel)** — What will our financial statements look like under different operating and financing scenarios? — Forecast integrated financial statements by linking revenue, expenses, working capital, and debt into a unified model.
* **[assisted-living-cost-allocation-excel](https://github.com/HyVoid/assisted-living-cost-allocation-excel)** — How much of each building's reported margin is actually generated by that building versus by the way corporate costs were allocated? — Allocate shared expenses across operating units while preserving source transactions and reconciling unit-level results to company totals.
* **[real-estate-development-feasibility-excel](https://github.com/HyVoid/real-estate-development-feasibility-excel)** — At what maximum land acquisition price does this development project become a bankable investment? — Evaluate residential development opportunities by screening land comparables, estimating construction costs, and calculating profit-on-cost thresholds.
* **[uk-residential-costing-software](https://github.com/HyVoid/uk-residential-costing-software)** — Will this construction project actually hit its target margin once site logistics, waste factors, and trade rate changes are accounted for? — Separate physical building quantities from volatile trade rates and site preliminaries to cascade commercial markups across tender budgets and client quotations.
* **[b2b-pricing-landed-cost-excel-model](https://github.com/HyVoid/b2b-pricing-landed-cost-excel-model)** — Which wholesale prices and customer segments actually preserve margin once freight, duties, payment terms, and FX are fully costed? — Calculate SKU-level landed costs, cost-to-serve, and pocket-margin price waterfalls to simulate cross-border wholesale profitability.
* **[custom-label-pricing-calculator](https://github.com/HyVoid/custom-label-pricing-calculator)** — What should we charge for a custom label order at each quantity tier to stay competitive and profitable? — Calculate parametric label pricing by modeling substrate square-inch costs, setup charges, and quantity-tier discount breaks against competitor benchmarks.
* **[landed-cost-calculator-retail-deduction-excel](https://github.com/HyVoid/landed-cost-calculator-retail-deduction-excel)** — What is the true net margin on each SKU once actual landed costs and retailer deductions are accounted for? — Reconcile PO-estimated landed costs against actual freight, duty, FX, and drayage charges while auditing retailer remittance deductions to expose SKU-level net margin.
* **[saas-finance-mrr-burn-rate-excel](https://github.com/HyVoid/saas-finance-mrr-burn-rate-excel)** — Can we make this week's hiring, marketing, and vendor commitments without running out of cash before the books close? — Track weekly cash burn pacing, MRR/ARR waterfall variance, retention metrics, and payroll costs against budget before month-end close.
* **[startup-financial-model-excel](https://github.com/HyVoid/startup-financial-model-excel)** — Will our growth plan run out of cash before cohort monetization catches up? — Forecast multi-year cash burn, runway, unit economics, and fundraising dilution from bottom-up cohort and headcount assumptions.
* **[shopify-pnl-reconciliation-excel](https://github.com/HyVoid/shopify-pnl-reconciliation-excel)** — Is each Shopify storefront actually profitable once true SKU-level costs, shared expenses, and bank charges are reconciled? — Reconcile multi-store Shopify sales exports against SKU-level COGS, allocated multi-currency OPEX, and bank statements to produce a trustworthy monthly P&L.
* **[travel-agency-accounting-excel-template](https://github.com/HyVoid/travel-agency-accounting-excel-template)** — Which tour bookings actually generate net profit and positive cash flow after supplier costs and B2B collections? — Calculate per-booking tour job costs, gross margins, AR/AP settlement, and operating cash flow across multiple currencies.

More decision-support tools are being added over time.

**GitHub Repository**

> https://github.com/your-username

**Download Excel Templates**

> [https://www.theseusworkshop.com/](https://www.theseusworkshop.com/)

---

## Contributing

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

## Version

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

## License

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
