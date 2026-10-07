---
name: google-ads-optimize-budgets
description: Model Google Ads budget reallocation, constrained efficient campaigns, pacing, marginal efficiency, and incremental budget cases; use investigate_campaign for performance diagnosis and performance_analysis for routine reviews.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `optimize-budgets`-style names, e.g. `google-ads-mine-search-terms`.

# Optimize Budgets

Models Google Ads budget reallocation and produces efficiency summaries, scenarios, projected impact, action lists, and pacing guidance.

## Dependencies

Load before analysis:
1. `budget_methodology` for marginal efficiency, reallocation, and pacing frameworks.
2. `account_conventions` for account roster, KPI targets, business model, maturity, preferences, and strategic constraints.
3. `account_maturity_methodology` to calibrate depth.
4. From references as needed: `reallocation_framework.md` always; `marginal_efficiency_curves.md` for curve modeling; `pacing_methodology.md` for pacing; this skill's `references/data_requirements.md` and `references/output_specs.md`.

## Workflow

### 0. Confirm scope

Report account, CID, maturity, total monthly spend, primary KPI/target, active campaigns in scope, and known budget constraints. Ask which campaigns to exclude or constraints to respect.

### 1. Acquire and validate data

Use `references/data_requirements.md`. Required:
- Campaign spend, daily budgets, budget type, performance, CPA/ROAS, impression share, Lost IS (Budget), Lost IS (Rank), and 28+ days of daily spend.
- Shared budget details if applicable.

Optional but valuable: 60-day trends, 8-week weekly spend and CPA/ROAS for PMax, campaign status/bidding strategy, ad schedules.

Validate conversion tracking, currency, KPI targets, Limited by Budget status, IS availability, historical depth, and zero-conversion campaigns. If account-wide conversion tracking appears broken, treat it as blocking. If KPI targets are missing, ask for target CPA/ROAS before classifying efficiency.

### 2. Rank efficiency

For lead gen, rank lowest CPA to highest; for eCommerce, rank highest ROAS to lowest. Flag zero-conversion/revenue campaigns separately.

Classify each campaign:

| Classification | Criteria |
|---|---|
| Efficient + Constrained | KPI meets/exceeds target and Lost IS (Budget) >10% |
| Efficient + Unconstrained | KPI meets/exceeds target and Lost IS (Budget) <10% |
| Inefficient + Spending | KPI below target and spending 80%+ of daily budget |
| Inefficient + Underspending | KPI below target and spending <80% of daily budget |
| Insufficient Data | Fewer than 10 conversions in the period |

Show classification evidence tied to targets and note uncertainty/borderline cases.

### 3. Analyze constraints

For each campaign assess impression share, lost IS budget/rank, budget cap status, pacing, and whether constraints are budget-driven, rank-driven, both, or none. Do not reallocate more budget to rank-constrained campaigns without addressing rank/ad quality issues.

### 4. Estimate marginal efficiency

Use `marginal_efficiency_curves.md`:
- Search/Shopping: estimate curve position from IS data.
- PMax: use 8+ weeks of spend-to-CPA/ROAS trends; if not available, say marginal efficiency cannot be estimated.
- Display/YouTube: use frequency-based diminishing returns rather than IS.

Identify high marginal-efficiency destinations and low marginal-efficiency sources.

### 5. Model reallocation scenarios

Build 2-3 scenarios:
- **Conservative:** move only from clearly inefficient sources to clearly constrained efficient destinations.
- **Moderate (default):** also reduce diminishing-returns/mediocre campaigns.
- **Aggressive:** larger shifts or pauses of underperformers.

For each scenario show current/proposed daily budgets, projected incremental conversions/revenue, account CPA/ROAS impact, risk factors, and tradeoffs. Projections are directional.

Enforce constraints:
- Do not reduce below minimum viable spend for the bidding strategy.
- Do not change budgets more than 20% for campaigns in learning.
- Do not allocate extra budget to rank-constrained campaigns.
- Respect strategic holdouts.
- PMax minimum is roughly $30-50/day.

### 6. Build incremental budget case when needed

If efficient campaigns are constrained and no good sources exist, model +$500, +$1,000, and +$2,000/month by constrained campaign with projected incremental conversions/revenue and incremental CPA/ROAS. Use qualifier language throughout.

### 7. Review pacing

Use `pacing_methodology.md` to identify on-track, over-pacing, and under-pacing campaigns; recommend corrections and note seasonality when available.

## Maturity calibration

| Maturity | Depth |
|---|---|
| Nascent | Basic pacing and waste only; one recommendation, no scenarios |
| Developing | Constraint analysis and basic reallocation; two scenarios |
| Established | Full three-scenario analysis, marginal efficiency, incremental budget |
| Advanced | Full analysis plus portfolio/seasonal planning |

## Output contract

Produce:
1. **Campaign Efficiency and Constraint Summary:** markdown table ranked by efficiency.
2. **Reallocation Table:** one markdown table per scenario.
3. **Projected Impact Report:** before/after total budget, conversions/revenue, CPA/ROAS for each scenario.
4. **Top Actions List:** 3-5 highest-impact budget actions with projected impact and risk.
5. **Pacing Summary:** if applicable, monthly pacing by campaign with corrective actions.

Use checkpoints after scope, data quality, efficiency classification, scenario review, and final delivery. In first five runs, briefly explain methodology and why sequencing matters because budget changes can trigger learning periods.

## Error handling

- If IS data is unavailable, disclose the gap and use spend-performance trends as a fallback.
- If fewer than 30 days of data exist, disclose limited history and qualify projections more heavily.
- If conversion tracking is broken account-wide, stop budget optimization and recommend fixing tracking first.
