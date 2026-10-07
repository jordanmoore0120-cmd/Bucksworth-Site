---
name: google-ads-audit-bidding
description: Audit Google Ads bidding strategies, target aggressiveness, learning-period health, portfolio opportunities, and migration plans across campaigns; use investigate_campaign for diagnosing a single underperforming campaign.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `audit-bidding`-style names, e.g. `google-ads-mine-search-terms`.

# Audit Bidding

Comprehensive Google Ads bidding strategy audit. It evaluates whether each campaign's strategy and targets fit its volume, objective, and maturity, then produces a safe migration plan. It does not diagnose every performance issue or make account changes.

## Dependencies

Load before analysis:
1. `account_conventions` — account config, maturity, business model, KPI targets, campaign types.
2. `bidding_methodology` — strategy selection, learning periods, portfolio rules, target evaluation.
3. `account_maturity_methodology` — maturity definitions and calibration.

If config is missing, stop and direct the user to run `account_conventions` first.

## Workflow

### 0. Confirm scope
Confirm account(s), campaigns to include/exclude, whether this is a full audit or focused question, and known concerns.

### 1. Acquire bidding data
Pull data per `references/data_requirements.md`:
- Campaign name/type/status.
- Current bidding strategy, target, strategy status.
- 30/60/90-day conversions, cost, CPA, ROAS, conversion rate, conversion value.
- Impression share and Lost IS budget/rank.
- Optional: 90-day bidding change history, portfolio membership, conversion action details.

**Checkpoint C1/C2:** report account, CID, maturity, campaigns by type, bidding strategy distribution, objective, data gaps, campaigns in learning, and zero-conversion campaigns. Confirm before analysis.

### 2. Strategy-fit assessment
For each campaign, compare current strategy to the recommendation from `bidding_methodology` using conversion volume, objective, maturity, and campaign type.

Classify each as:
- **Appropriate** — matches recommendation.
- **Misfit (Under)** — enough data to graduate to a more sophisticated strategy.
- **Misfit (Over)** — strategy is too advanced for available signal.
- **Appropriate (Edge)** — near a threshold; monitor.

### 3. Target evaluation
For tCPA/tROAS campaigns, compare target to actual 30/60/90-day performance:
- tCPA within 10% of 30-day actual: well-calibrated; 10–20% below: slightly aggressive; 20%+ below: too aggressive; 20–30% above: slightly loose; 30%+ above: too loose.
- tROAS is inverted: higher target is more aggressive; 20%+ above actual usually suppresses volume.

Also check whether the target is based on a realistic period, whether recent changes are still in learning, and whether seasonality matters.

### 4. Learning-period health
Identify campaigns currently in learning, bidding changes in the last 14 days, simultaneous learning exposure, chronic learning, and cascade violations:
- >30% of spend in learning.
- More than 2–3 campaigns changed simultaneously.
- Changes less than 14 days apart.

### 5. Portfolio opportunities
Look for groups with the same conversion action and objective, uneven conversion distribution, enough combined volume (15+ for tCPA, 30+ for tROAS), no brand/non-brand mixing, and no active learning periods.

### 6. VBB readiness
For Established/Advanced accounts only, check: 50+ conversions/month with value data, real business values, meaningful variance, reliable value pipeline, and current value-based optimization. Classify Ready, Partially Ready, or Not Ready.

### 7. Recommendations and migration plan
Prioritize recommendations:
- **Critical:** strategy actively harming performance; act immediately.
- **High:** clear opportunity; act within 2 weeks.
- **Medium:** optimization; within 30 days.
- **Low:** future consideration.

**Checkpoint C3/C4:** present campaign-level situation, learning health, portfolio/VBB findings, prioritized recommendations, sequencing, total migration timeline, and peak learning exposure. Sequence changes with at least 14 days between strategy changes and avoid >30% spend in learning.

### 8. Outputs
Produce three deliverables per `references/output_specs.md`:
1. **Strategy Assessment** — campaign table with current strategy, recommended strategy, target assessment, rationale, and priority.
2. **Migration Plan** — sequenced timeline, one strategy change per 14-day window, learning impact, total duration.
3. **Summary Dashboard** — strategy distribution, misfits, learning exposure, portfolio opportunities, top 3 actions.

**Checkpoint C5:** list produced files, key counts, projected post-migration strategy distribution, and ask whether to adjust recommendations.

## Common findings

- **Aggressive Target Trap:** target far tighter than actual performance suppresses volume; loosen, recover volume, then tighten gradually.
- **Low-Volume Smart Bidding:** tCPA/tROAS without enough conversions causes oscillation; remove target or simplify strategy.
- **Set It and Forget It:** stale Manual CPC needs bid maintenance or automated bidding if volume supports it.
- **Learning Period Cascade:** too many recent strategy changes destabilize the account; stagger changes.
- **Brand Strategy Mismatch:** brand campaigns may need visibility-oriented bidding rather than conversion maximization.

## Boundaries

Use `investigate_campaign` for root-cause diagnosis of one underperforming campaign and `performance_analysis` for routine reporting. All account changes require explicit human approval.
