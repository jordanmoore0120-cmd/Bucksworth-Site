---
name: google-ads-analyze-landing-pages
description: Analyze Google Ads landing-page alignment, Quality Score landing-page experience, and content gaps; use for QS/page relevance audits, not general CRO or creative review.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `analyze-landing-pages`-style names, e.g. `google-ads-mine-search-terms`.

# Analyze Landing Pages

Evaluate whether landing pages match Google Ads keywords, search terms, and ad copy, then diagnose Quality Score landing-page experience issues. This Phase 1 workflow focuses on measurable ad/page alignment without GA4 conversion-rate analysis.

## Dependencies

Load before starting:
- `account_conventions` — account config, KPI targets, data source, reporting path
- `account_maturity_methodology` — calibrates depth and recommendation complexity

Connections:
- Feeds `mine_search_terms` gray-area decisions.
- Supports `investigate_campaign` Branch 5 (landing page).
- Coordinates with `audit_creative` for ad-copy-to-page consistency.

## Step 0 — Load Configuration and Confirm Scope

1. Read account config and extract requested account(s).
2. Determine maturity level, campaign types, data source tier, date range, and output path.
3. Identify the campaigns/ad groups and unique final URLs in scope.
4. Confirm with the user before collecting page content.

Checkpoint C1 should show account, CID, maturity, campaign types, data source/tier, date range, and estimated pages. Explain that this skill scores alignment and QS landing-page experience, not conversion-rate CRO.

## Step 1 — Collect Data

From Google Ads:
- Unique final URLs across active campaigns/ad groups.
- Campaigns, ad groups, keywords, top search terms, and ad copy pointing to each URL.
- Keyword-level `landing_page_experience` values when available: `ABOVE_AVERAGE`, `AVERAGE`, `BELOW_AVERAGE`.
- Search term date range and sample-size caveats.

Fetch page content for up to 50 URLs per run. Read the `browser` skill before using browser automation.

```python
from sdk.utils.browser import get_browser, close_browser

browser = await get_browser("landing-page-audit")
await browser.goto(url, timeout=15000)
page = browser.page
content = {
    "title": await page.title(),
    "h1": await page.locator("h1").first.text_content() if await page.locator("h1").count() > 0 else None,
    "h2s": await page.locator("h2").all_text_contents(),
    "meta_description": await page.get_attribute("meta[name='description']", "content"),
    "body_text": await page.locator("main, article, .content, body").first.text_content(),
    "has_mobile_viewport": await page.locator("meta[name='viewport']").count() > 0,
}
await close_browser("landing-page-audit")
```

Also capture primary CTA, redirects/fetch failures, mobile viewport, and measurable load-time notes when available.

Checkpoint C2 should report unique pages, pages fetched, failed URLs, keywords with QS landing-page data, and search-term date range. Ask the user whether to provide manual content for failed pages.

## Step 2 — Score Alignment

For each landing page, score **HIGH / MEDIUM / LOW** with evidence:
1. **Content vs. keywords:** core keyword themes in title/H1/H2/body.
2. **Content vs. search terms:** top search intents answered on page; gaps called out.
3. **Content vs. ad copy:** page delivers on ad promises and CTA.
4. **Overall score:** LOW on any dimension flags the page.

Checkpoint C3 should present top pages by traffic with keyword alignment, search-term alignment, ad-copy alignment, overall score, QS landing-page experience, and 3-5 evidence-backed findings. In early runs, show the reasoning behind each score.

## Step 3 — Diagnose Quality Score Landing-Page Issues

For pages with `BELOW_AVERAGE` landing-page experience, cross-reference alignment:

| Alignment | QS landing page | Likely issue | Action |
|---|---|---|---|
| HIGH | BELOW_AVERAGE | Technical/mobile/speed/security | Run PageSpeed/mobile/HTTPS checks manually |
| LOW | BELOW_AVERAGE | Content mismatch | Rewrite page to match keyword/search intent |
| LOW | AVERAGE | Content opportunity | Improve relevance to lift QS |
| HIGH | ABOVE_AVERAGE | Healthy | Protect page and structure |

Look for site-wide patterns, page-specific issues, and campaign-type structural mismatches. Do not claim conversion-rate impact without GA4 or other verified conversion data.

## Step 4 — Content Gap Analysis

Identify:
- Search terms or themes with meaningful traffic but no page content match.
- Keyword groups needing a dedicated page.
- Campaigns/ad groups sending mismatched intent to a shared page.
- Page rewrites, new sections, or new pages required.

Checkpoint C4 should prioritize critical (QS below average + low alignment), high (traffic gaps), and medium recommendations. Tie each recommendation to the capability it unlocks.

## Step 5 — Deliverables

Produce:
1. **Landing Page Alignment Report** — per-page scores, QS aggregation, evidence, recommendations.
2. **QS Diagnostic Report** — below-average pages, alignment cross-reference, technical vs. content diagnosis.
3. **Content Gap List** — missing themes/search terms, affected volume if verified, recommended changes.

Checkpoint C5 asks whether to save outputs to the configured path and states the counts of pages scored, pages flagged, and gaps identified.

## Cadence

- Monthly in the Google Ads review orchestrator.
- Ad hoc when `investigate_campaign` reaches landing-page diagnostics.
- Ad hoc when gray-area search term classification needs page evidence.

## Future Phase

When GA4 data is configured, this skill can add landing-page conversion rate, funnel drop-off, engagement, device splits, speed/Core Web Vitals, and CRO prioritization. Gate those claims on `ga4.available: true` and verified data access.

## References

| File | Purpose |
|---|---|
| `references/alignment_scoring.md` | Detailed content-keyword scoring method |
