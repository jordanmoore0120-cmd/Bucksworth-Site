---
name: meta-ads-measurement-methodology
description: Use for Meta Ads measurement, attribution, CAPI/pixel health, UTMs, MER, third-party attribution, and incrementality decisions.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `measurement-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Measurement Methodology

Use this framework to verify whether Meta Ads data is reliable enough for optimization and reporting decisions.

## Meta Ads tools

Write Python scripts that import generated functions from `sdk/tools/mcp_meta_ads.py`; inspect that file for the current function list and parameters before use.

```python
import asyncio
from sdk.tools.mcp_meta_ads import meta_ads_get_insights

async def main():
    result = await meta_ads_get_insights(
        account_id="act_XXXXXXXXX",
        date_preset="last_7d",
        fields=["spend", "impressions", "clicks", "actions", "cost_per_action_type"],
    )
    print(result)

asyncio.run(main())
```

Run with `uv run python script.py`. All write operations create drafts requiring human approval via `submit_draft(draft_id)`. Monetary values are in cents unless a tool explicitly says otherwise.

## Measurement stack

1. **Platform attribution:** Meta Ads Manager; necessary for optimization but biased toward Meta.
2. **Server-side tracking:** Pixel + CAPI with deduplication; required for durable signal quality.
3. **Third-party attribution:** Triple Whale, Northbeam, Hyros, or equivalent; useful for cross-platform budget decisions.
4. **Incrementality:** lift tests, holdouts, and MER; highest-confidence view of causal impact.

## Attribution windows

- Compare 1-day click vs 7-day click to understand lag.
- Use 7-day click as the default for most ecommerce, SaaS, and lead-gen decisions unless account conventions specify otherwise.
- Treat view-through as directional; do not optimize primarily on view-through conversions.
- If 7-day click is far above 1-day click, investigate delayed attribution and organic/other-channel influence before scaling.

## Pixel and CAPI health

A healthy setup has:
- pixel firing on all key pages/events;
- CAPI sending the same key events server-side;
- deduplication via matching `event_id`;
- EMQ above the account threshold;
- event names aligned to optimization/reporting goals;
- custom conversions for custom events that must appear in insights;
- attribution settings matching `account_conventions`.

Useful MCP checks may include pixel stats, server-event setup, test-event sending, custom conversion listing/creation, dataset connection checks, and event diagnostics; use the current SDK docstrings for exact names.

## UTM strategy

Use consistent dynamic parameters so GA4/CRM reports can reconcile with Meta:

```text
utm_source=meta
utm_medium=paid_social
utm_campaign={{campaign.name}}
utm_content={{ad.name}}
utm_term={{adset.name}}
```

Do not change UTM structure mid-analysis without noting the break in comparability.

## Decision hierarchy

| Decision | Preferred source |
|---|---|
| Daily on/off optimization | Meta Ads Manager with the account attribution window |
| Cross-platform budget allocation | MER or third-party attribution |
| Stakeholder CPA/ROAS reporting | Conservative third-party or clearly labeled platform view |
| True incremental impact | Lift/holdout test |
| Measurement debugging | Events Manager, pixel/CAPI diagnostics, and backend/CRM comparison |

## Incrementality and MER

Use MER (`total revenue / total marketing spend`) to sanity-check platform-reported ROAS. Run lift or holdout tests when spend is high enough that budget decisions materially depend on Meta's claimed incrementality.

## Common mistakes to avoid

- Missing CAPI or missing deduplication.
- Comparing Meta CPA directly to other platforms without normalizing attribution.
- Optimizing on view-through-heavy results.
- Treating delayed attribution as failure before checking 1-day vs 7-day click.
- Custom pixel events without custom conversions.
- Reporting platform ROAS without labeling it as platform-attributed.

## Reference files

- `references/attribution_guide.md`
- `references/capi_implementation.md`
- `references/third_party_comparison.md`
