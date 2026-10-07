---
name: meta-ads-audience-methodology
description: Use for Meta Ads audience strategy decisions across broad, Advantage+, lookalike, interest, custom, exclusion, overlap, and refresh workflows.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `audience-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Audience Methodology

Use this framework to choose, audit, and refresh Meta Ads targeting. Core principle: as conversion data grows, simplify targeting and let Meta optimize more of the audience selection.

## Maturity-based targeting

| Monthly conversions | Primary approach | Secondary approach | Avoid |
|---|---|---|---|
| 0-50 | 3-5 researched interest stacks | Customer-list lookalikes, warm custom audiences | Broad and Advantage+ without signals |
| 50-200 | Purchaser/lead lookalikes 1-3% | Test Advantage+ with suggestions; refine interests | Too many narrow ad sets |
| 200-500 | Broad or Advantage+ Audience | 3-5% lookalikes for scale | Over-segmentation |
| 500+ | Broad, Advantage+ Shopping where relevant | Specific restrictions only for business reasons | Manual restrictions without evidence |

## Audience types

- **Broad:** no targeting beyond required age, gender, and geo. Best with 200+ monthly conversions or as a control test.
- **Advantage+ Audience:** provide suggestions, but expect Meta to expand beyond them. Use when you want algorithmic targeting with directional signals.
- **Lookalike:** quality depends on the source list. Prefer high-LTV customers or recent purchasers/leads; refresh sources regularly.
- **Interest:** useful for nascent accounts, new markets, or specific hypotheses. Group interests thematically and avoid tiny AND-stacks unless the product truly needs them.
- **Custom/warm:** website visitors, lead form openers, social/video engagers, app users, and CRM lists. Match window to intent: 0-3 days hottest, 7-14 days primary retargeting, 30-180 days re-engagement.

## Exclusion architecture

- Prospecting excludes purchasers/customers and active leads/users; optionally exclude website visitors when a separate retargeting campaign is active.
- Retargeting includes warm pools and excludes recent purchasers/customers.
- Retention/upsell includes existing customers and excludes irrelevant or recently purchased cohorts.
- Low CRM match rates are normal; layer pixel event, thank-you-page, and customer-list exclusions when wasted spend matters.

## Overlap, saturation, and consolidation

- Audience overlap under 10% is usually fine; 20-30% merits review; 30-50% suggests consolidation; 50%+ should usually be merged.
- Saturation signals: prospecting frequency >3, retargeting frequency >7, CTR down 15%+ over 14 days, CPM up 20%+ above baseline, or conversions flat while spend rises.
- Response order: broaden the audience, refresh creative, change offer/landing page, expand geo, or reallocate budget if the audience has a natural ceiling.

## Automation and write safety

Meta audience lifecycle work may use MCP functions such as `create_custom_audience`, `add_users_to_audience`, `create_lookalike_audience`, `get_audience_overlap`, `get_reach_estimate`, and `update_custom_audience`. All write operations create drafts and require human approval before execution.

Quarterly refresh pattern: update CRM/exclusion lists, rebuild stale lookalike sources, verify website retargeting windows, and run overlap checks before new audience launches.

## Reference files

- `references/targeting_decision_tree.md`
- `references/audience_types.md`
- `references/exclusion_architecture.md`
