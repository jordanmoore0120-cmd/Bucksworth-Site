---
name: google-ads-bidding-methodology
description: Reference methodology for evaluating Google Ads bidding strategy selection, maturity fit, portfolio bidding, visibility bidding, learning periods, and value-based bidding.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `bidding-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Bidding Methodology

Reference skill, not an action skill. Load it from `audit_bidding` when deciding whether a Google Ads bidding strategy fits account maturity, data quality, objectives, and risk tolerance.

## Core principle

**Bidding follows maturity.** Do not choose a strategy because it sounds advanced; choose the strategy the account's conversion volume, value signal, and business objective can support. A low-volume account on tROAS can perform worse than the same account on Manual CPC because the algorithm lacks signal.

## Current bidding landscape

| Strategy | Type | Optimizes for | Minimum data |
|---|---|---|---|
| Manual CPC | Manual | Clicks with bid control | None |
| Maximize Clicks | Automated | Click volume | None |
| Maximize Conversions | Smart Bidding | Conversion volume | None; 5+ recommended |
| Maximize Conversions + tCPA | Smart Bidding | Conversions at target cost | 15-30 conv/month |
| Maximize Conversion Value | Smart Bidding | Revenue/value | None |
| Maximize Conversion Value + tROAS | Smart Bidding | Revenue at target return | 30-50 conv/month |
| Target Impression Share | Automated | Visibility/position | None |

Current notes:
- **Enhanced CPC:** deprecated for Search and Shopping as of 2024; migrate remaining campaigns.
- **Standalone Target CPA / Target ROAS:** now surfaced as optional targets on Maximize Conversions / Maximize Conversion Value.
- **Broad Match + Smart Bidding:** viable only when Smart Bidding and conversion tracking constrain query expansion.
- **Campaign Experiments:** preferred way to test material strategy changes.

## Strategy selection by maturity

| Maturity | Typical strategy | Why |
|---|---|---|
| Nascent (<15 conv/month) | Manual CPC, Maximize Clicks, or Max Conversions without target | Collect signal before constraining the algorithm. |
| Developing (15-50 conv/month) | Max Conversions + conservative tCPA, or Max Conv Value without target | Enough data for basic automation; targets must not be aggressive. |
| Established (50-100 conv/month) | tCPA, tROAS, or portfolio strategies | Reliable data supports target-based optimization. |
| Advanced (100+ conv/month) | VBB, portfolio strategies, experiments | Enough signal for profit optimization and sophisticated testing. |

Full decision tree: `references/strategy_selection_framework.md`.

## Manual CPC

Manual CPC is legitimate when signal is thin or control matters more than automation: brand defense, new market tests, low-volume campaigns, or very high-value single conversions. It should have graduation criteria, not remain as an unattended default. Full framework: `references/manual_cpc_use_cases.md`.

## Portfolio bidding

Use portfolio bidding when multiple campaigns share the same conversion goal and some campaigns have enough volume to support thinner campaigns. Avoid it for mixed goals, mixed value economics, brand/non-brand combinations, or campaigns already in learning periods. Full framework: `references/portfolio_strategies.md`.

## Target Impression Share

Target Impression Share is a visibility strategy, not a conversion strategy. Use it for brand defense, competitive positioning, launch visibility, or event-driven presence. **Always set a max CPC cap** so Google cannot bid unlimited amounts for the position target. Full framework: `references/visibility_bidding.md`.

## Learning period management

Expect volatility for 7-14 days after material bidding changes. Batch related changes, avoid high-traffic periods, stagger changes so no more than 30% of account spend is in learning at once, and do not abandon a strategy in the first 7 days unless tracking is broken. Full framework: `references/learning_period_management.md`.

## Value-Based Bidding

VBB optimizes for revenue, profit, margin, or LTV rather than flat conversion count. It requires 50-100+ monthly conversions with reliable value data, meaningful value variance, and a trustworthy value pipeline through enhanced conversions, offline imports, or conversion value rules. Start with Maximize Conversion Value without a target, validate values, then add tROAS and profit/margin signals.

Do not use VBB when lead values are uniform, monthly volume is low, values are placeholders, or the value import pipeline is unreliable.

## Reference files

| File | Purpose |
|---|---|
| `references/strategy_selection_framework.md` | Full decision tree mapping objective, volume, and maturity to strategy. |
| `references/manual_cpc_use_cases.md` | Manual CPC use cases, hybrid approaches, and graduation criteria. |
| `references/portfolio_strategies.md` | Portfolio grouping rules and monitoring. |
| `references/visibility_bidding.md` | Target Impression Share configuration and use cases. |
| `references/learning_period_management.md` | Learning triggers, duration, and disruption prevention. |

## Dependencies

| Skill | Role |
|---|---|
| `account_conventions` | Account scope, maturity, business model, and KPI targets. |
| `account_maturity_methodology` | Maturity stages used to calibrate strategy choice. |
