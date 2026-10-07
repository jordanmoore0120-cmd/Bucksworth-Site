---
name: google-ads-campaign-diagnostics-methodology
description: Reference methodology for systematic Google Ads campaign root-cause diagnosis across measurement, auction, targeting, creative, landing page, budget, bidding, and external factors.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `campaign-diagnostics-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Campaign Diagnostics Methodology

Reference skill loaded by `investigate_campaign`. Use it to diagnose why a specific Google Ads campaign is underperforming before recommending changes.

## Core principle

**Diagnose before optimizing.** Treating symptoms makes problems worse: lowering a tCPA target will not fix broken conversion tracking, and pausing keywords will not fix a landing page outage.

## Diagnostic tree

Walk branches in order because earlier failures invalidate later evidence:

1. **Measurement:** Is the data accurate?
2. **Auction:** Has the competitive environment changed?
3. **Targeting:** Are queries/audiences/locations right?
4. **Creative:** Are ads resonating?
5. **Landing page:** Is the post-click experience converting?
6. **Budget:** Is delivery constrained or mis-paced?
7. **Bidding:** Is the strategy learning, constrained, or mismatched?
8. **External:** Are seasonality, market, or business factors at play?

Load `references/root_cause_analysis_tree.md` for the full branch checklist.

## Performance decomposition

Before deciding the branch, decompose the KPI movement:

```
Impressions -> Clicks -> Visits -> Conversions -> Value
```

Find the broken stage, then separate **rate** from **volume**. A CPA increase can come from cost rising, conversions falling, or both. The fix differs depending on which side moved. Use `references/performance_decomposition.md` for variance thresholds and small-campaign guidance.

## Attribution diagnostics

Apparent changes may be reporting artifacts:

- **Conversion lag:** compare fully attributed periods; for lead gen, often 30+ days old; for eCommerce, often 7+ days old.
- **Cross-device attribution:** mobile clicks may convert elsewhere.
- **DDA shifts:** model changes can move credit between campaigns without operational change.
- **Upper-funnel misattribution:** YouTube, Display, or Demand Gen may assist without last-click conversions.

Load `references/attribution_diagnostics.md` when attribution may distort the period comparison.

## Competitive impact analysis

Use Auction Insights when CPC, impression share, or conversion volume changes suggest competition. Watch for new domains, competitor impression-share gains, CPC inflation with or without IS loss, and outranking shifts. Load `references/competitive_impact_analysis.md` for interpretation and response patterns.

## Workflow

1. Quantify the problem: metric, magnitude, campaign, and period.
2. Eliminate noise using WoW, MoM, YoY, and adequate sample size.
3. Decompose funnel stage and rate vs volume.
4. Walk the diagnostic tree from Measurement onward.
5. Check attribution and competition when relevant.
6. Present an evidence chain: symptom -> data -> root cause -> recommended fix.
7. Recommend actions that address the root cause, not just the visible symptom.

## Common misdiagnoses

| Symptom | Common wrong diagnosis | Frequent real cause |
|---|---|---|
| CPA spike | Bidding is broken | Conversion tracking changed or lagged |
| CTR drop | Creative fatigue | Search term drift attracting irrelevant queries |
| ROAS decline | Campaign is inefficient | New competitor increased CPCs |
| Conversion drop | Landing page problem | Consent mode blocking tags |
| Impression-share loss | Need more budget | Quality Score dropped and raised effective CPC |
| Learning volatility | Algorithm is bad | Conversion action or bid target reset learning |

## Reference loading index

| File | Load when |
|---|---|
| `references/root_cause_analysis_tree.md` | Always for campaign investigations. |
| `references/performance_decomposition.md` | Quantifying and decomposing the problem. |
| `references/attribution_diagnostics.md` | Lag/model/device effects may distort results. |
| `references/competitive_impact_analysis.md` | Competition may be affecting CPC, IS, or volume. |
