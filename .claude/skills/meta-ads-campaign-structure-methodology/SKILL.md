---
name: meta-ads-campaign-structure-methodology
description: Campaign architecture framework for Meta Ads covering CBO vs ABO, the three-campaign model, Consolidated Account Structure, naming conventions, and audit-structure support.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `campaign-structure-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Campaign Structure Methodology

Use this framework to design or audit Meta Ads account architecture. Structure must concentrate conversion signal while preserving enough control for testing, scaling, and automation.

## Core model

Default to a three-function account unless the account's maturity or business model clearly requires otherwise:

1. **Creative Testing** — ABO sandbox, about 20-25% of budget, 1 ad set per test theme, 3x target CPA/day minimum per ad set, 48-72 hour test rounds.
2. **Winners / Scaling** — primary revenue campaign, usually CBO, about 60-70% of budget, broad or Advantage+ audience, only proven Post ID graduates.
3. **Advantage+ Shopping / Automation** — catalog/ASC or automated campaign when data is strong; keep it complementary to manual campaigns.

Keep retargeting separate only when budget and audience size support learning. Small retargeting segments should be consolidated.

## CBO vs ABO rules

| Situation | Use |
|---|---|
| Scaling proven winners, letting Meta allocate across ad sets | CBO |
| Controlled creative or audience test with equal spend | ABO |
| 3+ ad sets where outcome matters more than equal spend | CBO |
| Small retargeting budget | ABO or a single consolidated ad set |
| ASC | Meta-managed; no manual CBO/ABO choice |

Do not set ad set budgets inside CBO campaigns unless using intentional spend limits. Every ad set should have at least 3-5x target CPA/day available; otherwise consolidate.

## Consolidation rules

Consolidated Account Structure usually beats fragmented structures because it reduces self-competition and exits learning faster.

Consolidate when any of these are true:
- More than 5-6 active campaigns at modest spend, or multiple campaigns share objective + audience.
- More than 8-10 ad sets per campaign.
- Audience overlap exceeds 30%; over 50% is high priority.
- Many ad sets are Learning Limited or have budget below 3x CPA/day.
- Separate campaigns exist for audiences or creative concepts that could compete in one campaign.

Consolidation protocol:
1. Audit objectives, audiences, budgets, and winners.
2. Group equivalent campaigns/ad sets by objective and audience.
3. Build the consolidated structure, usually testing + winners + ASC/retargeting.
4. Move winners with Post ID to preserve social proof.
5. Run old and new in parallel for about 7 days, then pause old only if the new structure matches or beats it.

## Testing campaign rules

- Manual Sales/Leads objective; ABO.
- One ad set per concept/theme; keep audience consistent so creative is the variable.
- 6-8 active ad sets max; 5-20 ads total depending on volume.
- Graduate only when CPA is at/below target for 48-72 hours, at least 5 conversions, CTR is above account average, and video hook rate is healthy.
- Move winners by Post ID into Winners to preserve likes/comments/shares.

## Winners campaign rules

- CBO in most accounts; 60-70% of budget.
- Prefer one broad/Advantage+ ad set unless a large account has clearly distinct audiences.
- Maintain 5-10 active proven ads; refresh every 2-4 weeks.
- Scale campaign-level budget gradually (use budget methodology's 20% rule). Judge campaign-level CPA before reacting to single-ad variance.

## ASC rules

Use ASC when ecommerce/catalog data is strong or manual campaigns are mature. Avoid ASC for new accounts, narrow B2B targeting, or cases requiring strict audience control. For SaaS/B2B, keep existing-customer budget cap low (0-10%) and compare CPA to manual campaigns within a 20% tolerance.

## Breakdown effect safety rule

Do not abruptly pause any ad or ad set responsible for more than 30% of campaign spend. Add a replacement, wait 24-48 hours, then pause gradually. If campaign-level CPA or delivery worsens after pausing, reactivate and diagnose.

## Objective and event mapping

Choose the objective closest to revenue that can still produce about 50 events/week per ad set.

| Goal | Objective | Optimization event |
|---|---|---|
| Online purchases | Sales | Purchase |
| Website leads | Leads or Sales | Lead |
| SaaS signups | Sales | Complete Registration or Purchase |
| App installs | App Promotion | App Install/App Event |
| Video views | Engagement | ThruPlay |
| Awareness | Awareness | Reach or Ad Recall Lift |

If the deepest event lacks volume, move one step up the funnel.

## Naming conventions

Use account-specific conventions when available. Default patterns:
- Campaign: `[OBJECTIVE]_[TYPE]_[AUDIENCE]_[YYYY-MM]`
- Ad set: `[AUDIENCE]_[DETAIL]_[PLACEMENT]`
- Ad: `[FORMAT]_[CONCEPT]_[HOOK]_[VERSION]`

Tokens: SALES/LEADS/TRAFFIC/AWARENESS/ENGAGEMENT; TESTING/WINNERS/ASC/RETARGET; BROAD/LAL/INTEREST/RETARGET/ADVANTAGE-PLUS; UGC/STATIC/VIDEO/CAROUSEL/CATALOG; ALLPLACEMENTS/FEED/STORIES/REELS.

## Business-model templates

- **SaaS/B2B:** Testing 25%, Winners 65%, Retargeting 10%. Optimize signup or purchase; retarget web 30d with purchasers excluded.
- **Ecommerce:** Testing 20%, Winners 50%, ASC 20%, Retargeting 10%. Use catalog sets for best sellers and retargeting.
- **Lead generation:** Testing 25%, Winners 60%, Retargeting 15%. Broad and LAL audiences first; keep form quality in view.

## Health checklist

- Each campaign has a distinct purpose.
- No two campaigns target the same audience with the same objective.
- Every ad set has enough budget to learn.
- Audience overlap is below 30% unless intentional.
- Naming is consistent.
- Winners campaign uses Post ID graduates.
- Testing campaign refreshes creative every 1-2 weeks.
- Learning Limited campaigns have an exit plan.

## Reference files

- `references/structure_templates.md`
- `references/naming_conventions.md`
