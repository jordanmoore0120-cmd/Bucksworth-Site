---
name: google-ads-investigate-campaign
description: Diagnose why a specific Google Ads campaign is underperforming by walking the measurement, auction, targeting, creative, landing page, budget, bidding, and external diagnostic tree; do not use for routine performance reviews or broad bidding audits.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `investigate-campaign`-style names, e.g. `google-ads-mine-search-terms`.

# Investigate Campaign

Systematic root-cause diagnosis for a **specific** underperforming Google Ads campaign. It identifies what broke, quantifies the evidence, and produces an action plan; it does not make account changes.

## Dependencies

Load before analysis:
1. `campaign_diagnostics_methodology` — diagnostic tree, decomposition, attribution, competitive frameworks.
2. `account_conventions` — account roster, KPI targets, naming conventions, maturity.
3. `account_maturity_methodology` — calibrates thresholds and depth.

Use methodology references as needed: `root_cause_analysis_tree.md`, `performance_decomposition.md`, `attribution_diagnostics.md`, `competitive_impact_analysis.md`, and output specs.

## Workflow

### 0. Confirm scope
- Identify the exact campaign(s), account/CID, reported symptom, KPI, and analysis period.
- If no campaign is specified, ask; do not turn this into a whole-account audit unless explicitly requested.

### 1. Acquire data
Pull problem period plus comparison period (default: same duration immediately prior; add YoY for seasonality and rolling 4-week windows for low-volume campaigns):
- Campaign metrics: impressions, clicks, CTR, CPC, cost, conversions, CVR, CPA, conversion value, ROAS, IS, Lost IS budget/rank.
- Search terms, auction insights, change history, conversion action/config data, conversion time vs interaction time.
- Segment by device, geo, day/hour when relevant.
- Landing page/GA4 data if available.

**Checkpoint C2 — Data availability:** summarize which branches have data, gaps, selected periods, and whether any missing source limits confidence.

### 2. Establish the problem
Quantify the metric change, timeframe, absolute and % delta, and whether it exceeds normal variance:
- <10% WoW: likely noise; ask whether to continue.
- 10–20%: possible signal; proceed with caveat.
- >20%: significant enough for full investigation.
- Low volume: use longer comparisons and flag statistical uncertainty (<50 clicks/week or <10 conversions/month).

Confirm a clear problem statement with the user before proceeding.

### 3. Decompose performance
Use the methodology to locate the break:
- Funnel: visibility, engagement, traffic quality, conversion, value.
- Rate vs volume: for CPA, determine whether cost increased, conversions fell, or both; for ROAS, separate value drop from cost increase.

### 4. Walk the diagnostic tree in order
For each branch, pull/check relevant evidence, rule in or out, and document negative findings:
1. Measurement — data accuracy, conversion actions, tracking/config changes.
2. Auction — competitor entries, CPC inflation, IS and outranking shifts.
3. Targeting — search term/geo/audience relevance drift.
4. Creative — ad asset health, CTR trends, resonance.
5. Landing page — alignment, speed, technical issues, GA4 signals.
6. Budget — pacing, Lost IS budget, constraints.
7. Bidding — strategy status, targets, learning, recent changes.
8. External — seasonality, market conditions, promotions, macro factors.

Do not claim multiple root causes unless evidence clearly supports it; most shifts have one primary cause plus possible contributors.

### 5. Attribution and competitive validation
Before finalizing, verify whether conversion lag, cross-device behavior, DDA/model changes, assisted conversions, or auction/competitor shifts explain the symptom.

### 6. Diagnose and recommend
**Checkpoint C3 — Diagnosis:** show the branch-by-branch elimination path and evidence chain:

```
Symptom -> Data -> Evidence -> Root Cause -> Confidence
```

Then produce prioritized actions. Each action must state what to do, why it addresses the root cause, expected impact, timeline, and priority. Split into immediate fixes, short-term improvements, and structural changes.

### 7. Outputs
Produce three deliverables:
1. **Diagnostic Report** — problem statement, funnel and rate/volume decomposition, diagnostic walkthrough, attribution assessment, competitive assessment, root cause, confidence/caveats.
2. **Action Plan** — root cause summary, prioritized action table, monitoring plan, escalation triggers.
3. **Shareable Summary** — one paragraph naming the campaign, symptom, root cause, and primary recommended action.

**Checkpoint C5 — Delivery:** list outputs, root cause, primary action, monitoring metric/timeframe, and ask whether to convert actions into tasks or adjust steps.

## Common patterns

- **CPA spike:** check conversion lag first, then funnel/rate-volume decomposition.
- **ROAS declining over weeks:** inspect trends, auction pressure, creative fatigue, and targeting drift.
- **Sudden stop in conversions:** likely measurement or landing page issue; check tracking and page health first.
- **New campaign not performing:** check learning status, volume, targeting, tracking, and realistic ramp expectations.
- **Performance is normal but perceived as bad:** compare historical ranges/YoY and reset expectations.

## Maturity calibration

| Maturity | Focus |
|---|---|
| Nascent | Measurement/tracking and setup issues first. |
| Developing | Full tree; common issues are targeting, bidding fit, creative. |
| Established | Competitive, attribution, and bidding optimization. |
| Advanced | Marginal factors, attribution shifts, saturation, competitive micro-shifts. |

## Boundaries

- Diagnose and recommend only; do not make Google Ads changes without approval.
- Focus on specified campaigns, not whole-account reviews.
- Use `performance_analysis` for routine reporting and `audit_bidding` for account-wide bidding strategy review.
