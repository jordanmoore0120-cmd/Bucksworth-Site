---
name: meta-ads-launch-campaign
description: Takes a campaign brief and launches a complete Meta Ads campaign (campaign → ad set → creative → ad), enforcing naming conventions, running a pre-launch checklist, and producing a human-approved Launch Draft before any creation happens.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `launch-campaign`-style names, e.g. `google-ads-mine-search-terms`.

# Launch Campaign

Use this action skill to create a complete Meta campaign from a brief: campaign -> ad set -> creative -> ad. **Never auto-launch. Every write operation must be presented as a draft and requires explicit human approval. Create objects in PAUSED status unless the user explicitly approves another status.**

## Tool use

Meta Ads SDK functions live in `sdk/tools/mcp_meta_ads.py`; inspect that file before execution because signatures can change. Run scripts with `uv run python script.py`.

Common functions:
- `meta_ads_get_insights`, `meta_ads_list_campaigns`, list/read helpers — read-only.
- `meta_ads_create_campaign`, `meta_ads_create_ad_set`, `meta_ads_create_ad_creative`, `meta_ads_create_ad` — write operations, drafts requiring approval.
- Upload helpers for images/videos when available.

All monetary values are in **cents**. Account IDs include the `act_` prefix.

## Required brief

Collect before drafting:
- Account/ad account ID.
- Campaign type: Creative Testing, Winners, ASC/Advantage+, Lead Gen, Awareness/Engagement.
- Objective and optimization event.
- Budget: daily/lifetime, amount, dates.
- Bid strategy and any bid/cost cap.
- Audience: cold/warm/retargeting, geo, age, exclusions, custom/LAL/interest details.
- Placements and whether Advantage+ placements are allowed.
- Creatives: asset refs, format, headline, primary text, description, CTA, URL.
- Tracking: UTMs/tracking template, pixel/custom conversion.
- Special Ad Category if applicable.

Ask for missing launch-critical inputs before producing a Launch Draft.

## Dependencies

Read account configuration/conventions for the target account, including naming convention, pixel/custom conversions, KPI targets, maturity, default placements, exclusions, and compliance. Use account maturity and campaign structure methodology to choose the simplest viable template.

## Pre-launch validation

Validate and show pass/warn/fail:
- Pixel/custom conversion is active or recent events exist.
- UTMs/tracking are present.
- Budget supports learning (testing ad sets should be at least 3x target CPA/day; warn under $20/day).
- Bid cap is not below about 1.5x historical average CPA unless explicitly acknowledged.
- Cold audience estimated reach is not too narrow; warn under 1M. Retargeting audiences under 10K risk learning limits.
- Creative count fits the type: testing usually 5-20 ads; winners use proven Post IDs; ASC benefits from 10+ assets/catalog.
- Dynamic creative is intentionally set at ad set creation; it cannot be changed later.
- Dayparting uses lifetime budget; daily budgets are incompatible.
- CBO campaigns do not also set ad set daily budgets unless spend limits are intentional.
- Special Ad Category restrictions are respected.

A FAIL blocks execution until fixed or explicitly overridden by the user.

## Campaign type defaults

| Type | Budget model | Default bid | Creative rule | Notes |
|---|---|---|---|---|
| Creative Testing | ABO | Cost Cap or Lowest Cost | 1 concept/ad set, 5-20 ads | Controlled test; equal spend matters. |
| Winners | CBO | Lowest Cost or Cost Cap | 3-10 proven ads | Reuse Post IDs to preserve social proof. |
| ASC/Advantage+ | Meta-managed | Highest Value/Lowest Cost | 10+ assets/catalog preferred | Catalog recommended; avoid narrow manual control. |
| Lead Gen | ABO or CBO | Cost Cap/Lowest Cost | 3-5 variations | Lead form must be approved. |
| Awareness/Engagement | Lifetime often | Lowest Cost/CPM | 3-5 video/static assets | Reels/video placements often favored. |

## Launch Draft output contract

Before any write call, present a structured Launch Draft containing:
1. Account, campaign type, objective, optimization event, budget, dates, and checklist status.
2. Campaign parameters: name, objective, status, buying type, special ad category, CBO, budget.
3. Ad set parameters: name, optimization goal, billing event, bid strategy/bid amount, budget, dates, targeting, exclusions, placements, dynamic creative, dayparting.
4. Creative parameters for each creative: name, format, asset, text, CTA, destination URL, URL tags.
5. Ad parameters: name, status, linked creative/ad set.
6. Exact API call sequence and the fact that writes create drafts.
7. Approval prompt: ask the user to approve or request changes. Do not continue without explicit approval.

## Execution sequence after approval

Write a small Python script and execute in order:
1. `meta_ads_create_campaign(...)` -> capture `campaign_id`.
2. `meta_ads_create_ad_set(... campaign_id=...)` -> capture `ad_set_id`.
3. Upload image/video if needed -> capture hash/video ID.
4. `meta_ads_create_ad_creative(...)` -> capture `creative_id`.
5. `meta_ads_create_ad(... ad_set_id=..., creative={...})` -> capture `ad_id`.
6. Optional schedule/dayparting helper if available.

Stop on the first failure. Report the full API response and any object IDs already created. Do not clean up or delete partially created objects unless the user asks.

## Verification and final report

After creation, read back campaign, ad set, creative/ad where SDK helpers permit. Confirm IDs, linkage, objective, targeting, budget, creative, and status.

Final report must include:
- Object table: type, name, ID, status.
- Ads Manager links where possible.
- Pre-launch checklist status and naming convention applied.
- Preview/ad review next step.
- Reminder recommendation to check delivery after 72 hours.

## Technical constraints

- Always use cents for money.
- Include `act_` in account IDs.
- Dynamic creative can only be set at ad set creation.
- Dayparting requires lifetime budget.
- For CBO, do not set ad set daily budget unless explicitly intended.
- Winners campaigns should reuse Post IDs/ad IDs to preserve social proof.
- Default object status is PAUSED.

## Reference files

- `references/campaign_templates.md`
- `references/launch_checklist.md`
