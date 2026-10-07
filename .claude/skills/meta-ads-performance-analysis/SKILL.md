---
name: meta-ads-performance-analysis
description: Produce Meta Ads account and campaign performance dashboards with comparisons, trends, flags, and recommended follow-up skills.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `performance-analysis`-style names, e.g. `google-ads-mine-search-terms`.

# Performance Analysis

## Purpose

Use this as the first skill in Meta Ads weekly, monthly, or ad-hoc reviews. It answers: spend, results, efficiency, trend direction, and which follow-up skill should run next. Output a markdown dashboard with traffic-light flags.

## Dependencies

Load at Step 0:

| Dependency | Purpose |
|---|---|
| `account_conventions` | KPI targets, thresholds, reporting periods, naming rules, currency/timezone |
| `account_maturity_methodology` | Calibrate benchmarks and expectations by spend/conversion maturity |

Confirm whether data comes from the Meta Ads SDK/MCP, CSV export, or manual source. If data is incomplete, state exactly which metrics, periods, or breakdowns are missing.

## Workflow

### 1. Define periods

- Current period from account preference, often last 7 or 14 days.
- Comparison period from account preference, often preceding period or same period last month.
- Trend period: last 4 weeks for directional analysis.

### 2. Acquire data

Pull account-level and campaign-level insights for current and comparison periods. Include active campaigns, campaigns with spend, and recently paused campaigns when relevant.

Required account and campaign metrics:

| Metric | Source/calculation |
|---|---|
| Spend | `spend` |
| Impressions, reach, frequency | Meta fields |
| Clicks and outbound/link clicks | Meta click fields |
| CTR link | outbound/link clicks ÷ impressions |
| CPC link | spend ÷ outbound/link clicks |
| CPM | spend ÷ impressions × 1000 |
| Conversions | primary action event from account config |
| Conversion value/revenue | primary action value from account config |
| CPA | spend ÷ conversions |
| ROAS | conversion value ÷ spend |
| Conversion rate | conversions ÷ link clicks |

Optional breakdowns: platform, placement, device, campaign type, audience, geo, ad set, and ad.

### 3. Account dashboard

Show current, prior, delta, and flag for spend, conversions, CPA, ROAS, revenue, CTR, CPC, CPM, reach, frequency, and conversion rate. Include target CPA/ROAS context and spend pacing:

- Daily spend rate.
- Projected monthly spend.
- Monthly budget if configured.
- Flag pacing when projected spend is off by >15% unless account conventions override.

### 4. Campaign dashboard

List campaigns with objective, status, spend, conversions, CPA, ROAS, WoW/MoM change, and flag. For yellow/red campaigns, add detail:

- Top ad sets/ads by spend.
- Delivery status and learning status if available.
- Recent changes if available.
- Frequency and CTR trend context.
- Specific recommended follow-up skill.

Use naming conventions to segment by objective, audience, geo, or funnel stage when available.

### 5. Four-week trend analysis

Trend spend, CPA, ROAS, CTR, CPM, frequency, and conversion rate. Common signals:

| Pattern | Signal | Follow-up |
|---|---|---|
| CPA rising weekly | Deteriorating efficiency | `investigate_campaign` |
| CTR declining 3+ weeks | Creative fatigue | `analyze_creative` |
| CPM rising while conversions flat | Auction pressure | `optimize_budgets` |
| Frequency climbing | Audience saturation | `audit_audiences` |
| ROAS down while spend up | Scaling too fast or audience exhaustion | `optimize_budgets` |
| CPA stable while spend rises | Healthy scaling | Usually none |

### 6. Flag generation

Use account conventions when available; otherwise default thresholds:

| Flag | Default condition | Severity | Recommended skill |
|---|---|---|---|
| CPA_WARN / CPA_CRIT | CPA > target by 20% / 50% | Yellow / Red | `investigate_campaign` |
| ROAS_WARN / ROAS_CRIT | ROAS below target by 20% / 40% | Yellow / Red | `investigate_campaign` |
| SPEND_PACE | Spend pacing off by >15% | Yellow | `optimize_budgets` |
| FREQ_WARN / FREQ_CRIT | Prospecting frequency >2.5 / 4.0 | Yellow / Red | `audit_audiences` |
| CTR_DECLINE | CTR declining 2-3 consecutive weeks | Yellow | `analyze_creative` |
| CTR_CRIT | CTR below 0.5% unless configured otherwise | Red | `analyze_creative` |
| NO_CONV | Spend for 24-48h+ without conversions | Red | `investigate_campaign` |
| LEARNING | Stuck in learning/learning limited | Yellow | `audit_structure` |
| CPA_SPIKE | CPA 30-50%+ above 4-week average | Yellow/Red | `investigate_campaign` |

## Checkpoint before file generation

Before producing a full report file, present a concise dashboard summary and ask for confirmation:

- Account and period.
- Overall status: Healthy / Warning / Critical.
- Spend, conversions, CPA, ROAS with deltas.
- Active flag count by severity.
- Campaigns flagged.
- Recommended follow-up skills.

## Output contract

Final markdown report structure:

1. Title, account, account ID, current/comparison periods, generation timestamp.
2. Account health summary table.
3. Spend pacing table.
4. Campaign performance table.
5. Flagged campaign detail sections.
6. Four-week trend table.
7. Active flags table with value, threshold, severity, and action.
8. Optional platform/placement/device breakdowns.
9. Recommendations: immediate actions, optimization opportunities, skills to run next.
10. Notes/caveats: attribution lag, recent account changes, seasonality, missing data, or modeled data.

## Reference files

- `references/data_requirements.md` — exact API fields and CSV mappings.
- `references/output_specs.md` — dashboard format specification.
- `references/worked_example.md` — example dashboard.
