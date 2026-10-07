---
name: google-ads-budget-methodology
description: Reference methodology for Google Ads budget allocation, reallocation modeling, marginal efficiency, pacing, and budget constraints; loaded by optimize_budgets.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `budget-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Budget Methodology

Reference skill for `optimize_budgets`; not an action skill. Use it to decide where budget should move, how to model reallocation, and when pacing or constraints make budget changes unsafe.

## Core Principle

Budget should flow to the most efficient marginal opportunity: the next dollar should go where it is expected to produce the best incremental return. Optimization is not simply spending less; it is spending in the right places.

## Marginal Efficiency Framework

Campaigns sit on efficiency curves: early spend captures the highest-intent users, while later spend reaches broader and usually less efficient demand. Estimate curve position with impression share, Lost IS breakdown, and spend-to-performance trends.

Key concepts:
- **Marginal CPA/ROAS:** expected cost or return of the next conversion, not historical average.
- **Efficiency curve position:** whether more budget is likely to unlock efficient volume.
- **Cross-campaign comparison:** the campaign with the best marginal efficiency earns the next dollar, regardless of current size.

Load `references/marginal_efficiency_curves.md` when estimating curve position or modeling budget changes.

## Reallocation Framework

1. Rank campaigns by primary KPI efficiency.
2. Identify which efficient campaigns are budget-limited versus rank-limited.
3. Choose source and destination campaigns.
4. Model expected impact at new budget levels.
5. Present conservative, moderate, and aggressive scenarios.

Critical distinction: a budget-constrained campaign can benefit from more budget; a rank-constrained campaign will not. Always check Lost IS (Budget) versus Lost IS (Rank) before reallocating. Load `references/reallocation_framework.md` for the full process.

## Pacing Methodology

**Daily pacing:** Google may spend up to 2x daily budget on high-opportunity days, but monthly spend should not exceed daily budget × 30.4. Watch for campaigns exhausting budget too early in the day or underspending naturally.

**Monthly pacing:** Track cumulative spend versus target. Under-pacing can mean bids too low, targeting too narrow, or insufficient volume. Over-pacing can justify more budget or tighter targeting.

**Seasonality:** Use historical patterns to plan budget multipliers before demand peaks. Load `references/pacing_methodology.md` when pacing is in scope.

## Cross-Campaign Budget Optimization

- **Shared budgets:** monitor per-campaign spend; high-volume campaigns can starve smaller priorities.
- **Fixed account budgets:** reallocation is zero-sum, so show explicit tradeoffs.
- **Incremental budget:** when all efficient campaigns are constrained, model incremental ROI instead of forcing reallocation.

## Maturity Calibration

- **Nascent (<50 conversions/month):** confirm budget is spending, stop obvious waste, and keep enough spend for automation; do not over-model.
- **Developing (50-200):** use Lost IS signals, basic reallocation, monthly pacing, and 4+ weeks of trends.
- **Established (200-500):** use full scenario modeling, marginal efficiency estimates, cross-campaign optimization, seasonal planning, and shared-budget audits.
- **Advanced (500+):** build curves from 8+ weeks of data, optimize at portfolio/campaign/ad-group levels, model incremental budget, and use pacing alerts.

## Integration with Other Toolkit Skills

- `account_maturity_methodology` sets analysis depth.
- `account_conventions` supplies KPI targets, business model, and reporting preferences.
- `bidding_methodology` explains how bid strategy affects spend behavior.
- `campaign_diagnostics_methodology` identifies whether budget is the root cause of underperformance.

## Constraints

- Never recommend more budget for a rank-constrained campaign.
- Never cut below minimum viable spend for the bidding strategy.
- Avoid budget changes over 20% while a campaign is in learning; large changes can reset learning.
- Use qualifier language for projections: "projected," "estimated," and "based on current trends."
- PMax generally needs about $30-$50/day to function across channels; below that, distribution is constrained.
