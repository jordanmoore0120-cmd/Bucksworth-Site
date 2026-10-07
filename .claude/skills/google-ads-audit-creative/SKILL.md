---
name: google-ads-audit-creative
description: Audit Google Ads creative across Search RSAs, PMax asset groups, video/Demand Gen assets, fatigue, consistency, and testing plans; use analyze_pmax for PMax deep-dives and analyze_landing_pages for landing pages.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `audit-creative`-style names, e.g. `google-ads-mine-search-terms`.

# Audit Creative

Evaluates ad creative across active Google Ads campaign types and produces an asset scorecard, refresh list, test plan, and executive dashboard.

## Dependencies

Load before starting:
1. `creative_methodology` for RSA, PMax asset, video, fatigue, and testing frameworks.
2. `account_conventions` for account ID/name, business model, maturity, naming, brand terms, and constraints.
3. `account_maturity_methodology` to calibrate scope.

## Workflow

### 0. Confirm scope

Report account, CID, maturity, campaign types with creative to audit, active creative tests detected, and audit scope. Ask what campaigns or creative types to exclude/prioritize.

Maturity controls depth:

| Maturity | Scope |
|---|---|
| Nascent | RSA counts, ad strength, obvious gaps |
| Developing | + pin strategy, PMax completeness, headline diversity |
| Established | + fatigue, cross-campaign consistency, A/B test recommendations |
| Advanced | + multivariate roadmap and advanced fatigue modeling |

### 1. Acquire data

Use `references/data_requirements.md` for exact GAQL. Required data:
- RSA ad and asset performance for enabled RSAs with impressions in last 30 days.
- `ad_group_ad_asset_view` labels and pinned fields.
- PMax `asset_group_asset` details for enabled PMax asset groups.
- Video/Demand Gen metrics if active.
- Frequency for Display, Video, Demand Gen, and PMax in last 7 days.

Inventory the counts found, date range, and any gaps; do not hide unavailable data.

### 2. Evaluate RSAs

For each active RSA/ad group:
- Count headlines and descriptions; flag below 8 headlines or below 2 descriptions, and note distance from 15/4 recommended.
- Summarize asset ratings; flag >30% Low or >50% Learning.
- Record pinned assets; flag all three headline positions pinned unless there is a business reason.
- Score headline diversity across value prop, keyword inclusion, CTA variety, benefit/feature balance, brand, offer, and social proof: Strong = 5+ categories, Moderate = 3-4, Weak = 1-2.
- Review description quality, CTA, character use, ad strength, and obvious message/keyword/landing-page alignment issues.

### 3. Evaluate PMax assets

For each asset group:
- Calculate completeness score from `creative_methodology`: Headlines 20%, Long Headlines 10%, Descriptions 15%, Images 25%, Video 15%, Logos 10%, Business Name + CTA 5%, capped at 100.
- Assess text combination coherence, image variety, purpose-built video vs auto-generated video, logo clarity, theme coherence, listing-group alignment, business name, logos, and brand colors.
- Flag catch-all asset groups with no clear one-sentence focus.

### 4. Evaluate video creative

Skip if no YouTube/Demand Gen campaigns. Apply the ABCD framework:
- Attention: hook in first 5 seconds.
- Branding: visible in first 5 seconds and at end.
- Connection: emotional or relatable scenario.
- Direction: clear CTA.

Also check format/objective fit, duration (6s awareness, 15-30s consideration, 15-60s action), aspect ratio (16:9 in-stream, 9:16 Shorts), hook type, and view-rate bands: >25% strong, 15-25% average, <15% weak.

### 5. Detect fatigue

For Display, Video, and Demand Gen:
- Compare most recent 4-week rolling CTR with prior 4 weeks; flag 20%+ decline with stable impressions.
- Compare frequency to methodology thresholds: Display warning 5-7/week, critical 8+; YouTube awareness warning 4-5, critical 6+; YouTube action warning 3-4, critical 5+; Demand Gen warning 5-6, critical 7+.
- Flag assets unchanged for 60+ days for proactive refresh.

### 6. Check consistency

Compare active campaign messaging for value proposition, promotions/offers, voice, CTAs, and claim consistency. Flag contradictory claims immediately.

### 7. Build recommendations and tests

Prioritize findings:

| Priority | Criteria |
|---|---|
| P1 | Poor ad strength, critical fatigue, major asset gaps |
| P2 | Low-rated assets, moderate fatigue, incomplete PMax groups |
| P3 | Optimization tests, consistency improvements, proactive refresh |

For every test include what to test, hypothesis, method, duration, and success criteria. Test volume: nascent 0-1, developing 1-2/month, established 2-4/month, advanced 4+/month.

## Output contract

Produce:
1. **Asset Scorecard (Markdown):** per-campaign RSA/PMax/video scores and account creative health score.
2. **Refresh List (CSV):** Campaign, Ad Group/Asset Group, Asset Type, Current Asset, Issue, Priority.
3. **Test Plan (Markdown):** prioritized tests with hypothesis, method, duration, success criteria.
4. **Summary Dashboard (Markdown):** health score, 3-5 key findings, P1 actions, quick wins, and refresh calendar.

At delivery, list files produced, health score, and how to use each output. Use checkpoints after scope, data inventory, findings, recommendations, and final delivery; first five runs should include concise methodology explanations at each checkpoint.
