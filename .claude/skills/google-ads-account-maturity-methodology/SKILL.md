---
name: google-ads-account-maturity-methodology
description: Reference methodology for Google Ads account maturity stages and maturity-calibrated recommendations; do not use for account setup or direct analysis.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `account-maturity-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Account Maturity Methodology

Reference skill loaded by Google Ads action skills to calibrate analysis depth and recommendations. The maturity level is set in `account_conventions` during setup and reassessed quarterly.

## Core Principle

Never recommend capabilities the account cannot support. Nascent accounts need tracking and data collection before advanced automation; advanced accounts need marginal, portfolio, and incrementality thinking rather than generic hygiene advice.

| Finding | Nascent recommendation | Advanced recommendation |
|---|---|---|
| No target CPA | Usually correct; collect 30+ conversions/month first | Investigate why targets/VBB are absent |
| PMax running | Check data, assets, and justification | Analyze channel mix, asset groups, placements, incrementality |
| Low impression share | Expected under constrained budgets; prioritize quality | Break down Lost IS and model marginal budget efficiency |
| No negatives | Add universal/basic negatives and protect brand | Audit layered architecture and conflicts |
| Manual CPC | Acceptable for low data or brand defense | Usually a regression unless explicitly justified |

## Maturity Stages

### Nascent — fewer than 15 conversions/month

Profile: new, low-volume, or tracking-limited accounts.

Focus:
- Conversion tracking accuracy.
- Search term hygiene and brand protection.
- Basic structure: brand vs. non-brand separation.
- Landing page alignment.
- Data collection for future automation.

Avoid recommending tCPA/tROAS, VBB, portfolio bidding, complex segmentation, or PMax expansion without clear justification.

### Developing — 15-50 conversions/month

Profile: gaining traction; enough data to test automation cautiously.

Focus:
- Maximize Conversions or conservative target tests.
- Expand proven structures without diluting data.
- Audience and remarketing list development.
- Scaled search term mining and feed optimization.
- Initial PMax tests if assets/feed support them.

Avoid aggressive targets, excessive campaign splits, complex audiences, or advanced attribution claims.

### Established — 50-100 conversions/month

Profile: reliable data, proven structure, stable automated bidding.

Focus:
- Target optimization.
- Creative testing.
- PMax, Shopping, and asset-group refinement.
- Product tiering and feed strategy.
- Portfolio bidding evaluation.
- Audience expansion and competitive positioning.

Avoid drastic restructures or reverting automation without evidence.

### Advanced — 100+ conversions/month

Profile: high-volume, sophisticated tracking and structure.

Focus:
- Value-based bidding and margin/value signals.
- Marginal efficiency and diminishing returns.
- Incrementality and geo/holdout testing.
- Portfolio strategy optimization.
- Advanced PMax/channel analysis.
- Cross-channel attribution, competitive expansion, scripts, and automation.

Still verify tracking accuracy, negatives, brand/non-brand purity, and learning-period health.

## How Action Skills Apply Maturity

At Step 0, each action skill should:
1. Read `maturity_level` and monthly conversion volume from `account_conventions`.
2. Load this methodology.
3. Determine analysis depth, thresholds, sample-size requirements, and recommendation scope.
4. Label recommendations that require a higher maturity level as future considerations.

## Threshold Examples

| Metric | Nascent | Developing | Established | Advanced |
|---|---:|---:|---:|---:|
| Min clicks for search-term action | 5 | 10 | 15 | 20 |
| Min conversions for bidding assessment | N/A | 15 | 30 | 50 |
| N-gram volume threshold | 10 clicks | 20 clicks | 30 clicks | 50 clicks |
| Creative test sample size | Not recommended | 100 clicks | 200 clicks | 500 clicks |
| Budget change minimum | $5/day | $10/day | $25/day | $50/day |

Use these as calibration guides, not rigid rules; note when low volume weakens confidence.

## Skill Scope by Maturity

| Skill | Nascent | Developing | Established | Advanced |
|---|---|---|---|---|
| `mine_search_terms` | Basic negatives, brand protection | Full classification, n-grams | Statistical significance | Cross-campaign patterns |
| `analyze_pmax` | Asset completeness and justification | Channel breakdown | Full 8-channel analysis | Marginal channel efficiency |
| `audit_bidding` | Strategy appropriateness | Target evaluation | Portfolio opportunities | VBB readiness, experiments |
| `audit_creative` | Basic RSA check | Ad strength analysis | A/B test planning | Multivariate/testing system |
| `optimize_budgets` | Basic pacing | Constrained campaign ID | Reallocation modeling | Marginal efficiency curves |

## Progression and Reassessment

Typical progression: Nascent → Developing in 3-6 months, Developing → Established in 6-12 months, Established → Advanced in 6-12 months.

Acceleration factors: high traffic volume, clean tracking from day one, experienced management, adequate budget.

Regression triggers: tracking breakdown, major restructure, budget cuts, seasonality reducing volume, or platform/account changes that invalidate prior setup.

## References

| File | Purpose |
|---|---|
| `references/maturity_stages.md` | Detailed stage definitions and mistakes |
| `references/progression_triggers.md` | When to upgrade, downgrade, or reassess maturity |
