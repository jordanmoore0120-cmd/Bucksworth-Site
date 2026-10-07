---
name: google-ads-performance-analysis
description: Action skill for Google Ads account/campaign performance reporting with period-over-period dashboards; not for root-cause diagnosis or campaign-type deep dives.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `performance-analysis`-style names, e.g. `google-ads-mine-search-terms`.

# Performance Analysis

Action skill for “what happened” reporting: account and campaign metrics, period-over-period trends, flags, and client/practitioner deliverables. If the user asks why performance changed, hand off to `investigate_campaign`; if they ask for PMax/Shopping/YouTube/etc. specifics, use the relevant campaign-type skill.

## Step 0: Dependencies and Inputs

Load before analysis:
- `account_conventions`: account(s), date ranges, comparison period, KPI targets, business model, maturity level, thresholds, naming rules, reporting preferences.
- `account_maturity_methodology`: calibrate depth and reliability of conclusions.
- `references/data_requirements.md`: GAQL/data specs.
- `references/output_specs.md`: deliverable formats.

If account config is missing, stop and direct the user to run `account_conventions`. Confirm target account(s), analysis period, and comparison period; default to the config.

## Data Acquisition

Collect current and comparison-period metrics for account and campaign levels: spend, conversions, conversion value, impressions, clicks, CTR, avg CPC, CPA/ROAS, impression share, Lost IS (Budget), Lost IS (Rank), campaign budget, bidding strategy, and counted conversion actions. Pull 4-week weekly campaign trends for spend, conversions, CPA/ROAS, and IS. Add device or geographic segments when the business model makes them relevant.

Quality checks: active conversion tracking, matching currency, complete date range, data gaps, campaign launch/timing caveats, and unavailable metrics (for example PMax IS gaps). Present a data inventory before analysis: days of data, active campaigns with spend, comparison dates, gaps, and trend availability.

## Account Snapshot

Produce a table for total spend, conversions, CPA or ROAS, Search impression share, CTR, avg CPC, and conversion rate with current, prior, absolute change, percent change, and flag. Use account-config thresholds and business-model logic to classify green/yellow/red. Summarize trajectory as improving, declining, stable, or volatile and ask whether known context explains the movement.

## Campaign Breakdown

For each enabled campaign, sorted by spend descending, report campaign type, spend, conversions, CPA/ROAS, IS, spend change, conversion change, KPI change, and flag. Respect campaign naming conventions and account-specific filters from `account_conventions`.

Flag campaigns that cross KPI thresholds, drop to zero conversions, increase spend 20%+ without proportional conversion gain, lose 10%+ impression share, or are in learning/recent bid-change periods.

## 4-Week Trend Analysis

For campaigns with enough data, produce weekly trend tables for spend, conversions, CPA/ROAS, and IS. Classify direction as:
- Improving: 3+ consecutive weeks in favorable direction.
- Declining: 3+ consecutive weeks in unfavorable direction.
- Stable: within ±5% week over week for 3+ weeks.
- Volatile: alternating swings >10%.

For CPA, lower is better; for ROAS/conversions/IS, higher is better.

## Flag Logic by Business Model

- Lead gen: primary KPI is CPA. Red when CPA exceeds critical threshold; yellow when it exceeds warning threshold. Also flag falling conversion volume with stable/increasing spend.
- eCommerce: primary KPI is ROAS. Red/yellow when ROAS falls below critical/warning thresholds. Also flag falling revenue with stable/increasing spend.
- Local: apply CPA thresholds and minimum viable lead volume; volume matters alongside efficiency.
- Dual-model: analyze each division separately; never blend metrics across business lines.
- All models: flag spend +20% without improvement, IS -10%, CTR -15%, or CPC +15%.

## Output Contract

Produce two markdown deliverables using `references/output_specs.md` and the account reporting config:
1. Performance Dashboard: account snapshot, campaign breakdown, 3-5 key observations, and red/yellow flags summary.
2. Trend Analysis: 4-week campaign trends, direction indicators, classifications, and campaigns needing attention.

Final handoff must include files produced, account trajectory, single most important finding, all red/yellow flags, recommended next skill for each investigation (`investigate_campaign`, `optimize_budgets`, `audit_bidding`, `mine_search_terms`, or `analyze_pmax`), and whether the dashboard is client-ready vs practitioner-only.

## Maturity Calibration

- Nascent: focus on volume and tracking; do not judge CPA/ROAS with fewer than 15 conversions in period; skip IS/competitive signals.
- Developing: standard WoW/MoM comparisons; flag bidding-fit basics; include Search IS.
- Established: full dashboard, competitive signals, efficient-but-constrained budget opportunities, device/geo where relevant.
- Advanced: portfolio rollups, marginal efficiency, and budget-pacing cross-reference.

## Data Sources

Use the method in `account_conventions.data_source`: Python/GAQL, MCP, CSV, or manual template. Be explicit about unavailable fields and fallbacks.
