# Output Specifications for Budget Optimization

Format specs for all outputs produced by the optimize_budgets skill.

## Output 1: Campaign Efficiency and Constraint Summary

Markdown table. One row per enabled campaign, sorted by efficiency (best to worst).

| Column | Description |
|---|---|
| Campaign | Campaign name |
| Type | Campaign type (Search, Shopping, PMax, Display, Video) |
| 30d Spend | Total spend over the analysis period |
| Daily Budget | Current daily budget |
| Conversions | Total conversions over the period |
| CPA or ROAS | Primary KPI (use whichever matches the account type) |
| IS | Current impression share (or "N/A" for PMax/Display) |
| Lost IS (Budget) | Impression share lost to budget (or "N/A") |
| Lost IS (Rank) | Impression share lost to rank (or "N/A") |
| Classification | One of: Efficient+Constrained, Efficient+Unconstrained, Inefficient+Spending, Inefficient+Underspending, Insufficient Data |

Include a summary row at the bottom with account totals.

## Output 2: Reallocation Table

One table per scenario (Conservative, Moderate, Aggressive). Only include campaigns with budget changes.

| Column | Description |
|---|---|
| Campaign | Campaign name |
| Current Daily Budget | Current daily budget amount |
| Proposed Daily Budget | Recommended daily budget amount |
| Change ($) | Dollar change (positive = increase, negative = decrease) |
| Change (%) | Percentage change |
| Current CPA/ROAS | Current primary KPI value |
| Projected CPA/ROAS | Estimated primary KPI at new budget level |
| Constraint | Budget-constrained, Rank-constrained, or Unconstrained |

Below the table, include:
- **Total monthly budget change**: sum of all daily changes multiplied by 30.4
- **Net reallocation**: should be $0 if purely redistributing, or positive if recommending incremental budget
- **Risk assessment**: 1-2 sentences on what could go wrong with this scenario

## Output 3: Projected Impact Report

Account-level before/after comparison. One section per scenario.

Format:
```
### [Scenario Name] Scenario

| Metric | Current (30d) | Projected (30d) | Change |
|---|---|---|---|
| Total Monthly Spend | $X | $Y | +/- $Z |
| Total Conversions | X | Y | +/- Z |
| Account CPA / ROAS | $X / Xx | $Y / Yx | +/- |
| Constrained Campaigns | X of Y | Z of Y | -N |
| Budget Utilization | X% | Y% | +/- Z% |

**Key tradeoffs:** [1-2 sentences describing what is gained and what is sacrificed]
```

All projected values must use qualifier language. Add a note below the table: "Projections are directional estimates based on current trends. Actual results will vary based on competitive dynamics, seasonality, and quality score changes."

## Output 4: Top Actions List

Numbered list of 3-5 highest-impact budget actions. Each action includes:

1. **[Action description]**: [1 sentence explaining what to do]
   - Projected impact: [estimated incremental conversions or efficiency improvement]
   - Risk: Low / Medium / High
   - Priority: Immediate / This week / This month

Example:
1. **Increase Non-Brand Search daily budget from $50 to $75**: campaign is at 35% IS with strong ROAS and 22% Lost IS (Budget)
   - Projected impact: +12-18 incremental conversions/month
   - Risk: Low (strong historical efficiency, clear budget constraint)
   - Priority: Immediate

## Output 5: Pacing Summary

Only include if pacing issues are detected. Markdown table:

| Campaign | Monthly Budget | Projected Spend | Pacing Status | Action |
|---|---|---|---|---|
| [name] | $X | $Y | Over-pacing / Under-pacing / On track | [corrective action or "None needed"] |

## Formatting Rules

- All currency values include the currency symbol and two decimal places ($1,234.56)
- Percentages include one decimal place (45.3%)
- ROAS uses one decimal place with "x" suffix (4.2x)
- CPA uses currency format ($45.67)
- Positive changes prefixed with "+" and negative changes prefixed with "-"
- Use green/red indicators if the output format supports it. In plain markdown, use "+" and "-" prefixes.
- Round projected values to reasonable precision. Do not project to the penny or to single-conversion accuracy. Use ranges when confidence is lower ("12-18 conversions" rather than "15 conversions").
