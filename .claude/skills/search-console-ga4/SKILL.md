---
name: search-console-ga4
description: Google Search Console + GA4 for getyourbucksworth.com — property IDs, how to read clicks/impressions/position correctly, indexing checks, and what the APIs cannot do. Use for any organic-performance, indexing or traffic/conversion question.
---

# Search Console + GA4

## Access (as of 2026-10-07)
- **Search Console:** Claude has NO direct connector yet. Use the repo data Viktor's
  pipeline writes weekly: `seo-data/gsc-ranking-map.json`, `seo-data/striking-distance.json`
  and `seo-data/performance.json`. Check each file's date and say how old the data is.
  If you need a live query, ask in Slack. A direct connector is on the build list.
- **GA4:** Zapier app "Google Analytics 4" (6 actions). It returned `access_token missing`
  on 2026-10-06, so Jordan has to reconnect it. Test it before relying on it.
- Property: `sc-domain:getyourbucksworth.com` (domain property). Live host is
  `https://www.getyourbucksworth.com` (the apex 301s to www). GA4 tag `G-ZDL1V7HMVV`.

## Reading GSC data correctly
- `ctr` is a 0–1 fraction. `position` is 1-based and LOWER is better. Both are
  impression-weighted, so never average them across rows.
- The last 2–3 days aren't final. "Previous period" = the same number of days
  immediately before.
- Striking distance = position ~8–30 with real impressions. These pages gain the most
  from internal links and answer-first improvements.
- Baseline (2026-09-22): impressions grew 107K (Mar) → 414K (Aug) while clicks stayed
  flat at ~600/month, mostly branded. Money pages sit at positions 20–60. The bottleneck
  is authority/prominence, not indexing.

## What the APIs can't do
- There is NO API to "request indexing" for normal pages. Resubmitting the sitemap is
  the supported nudge. The Indexing API is only for JobPosting/livestream pages.
- Search Console has no backlinks API.
- URL Inspection takes full absolute www URLs, about 5–10 s each.
- An empty result means the pull failed or was filtered wrong. It does NOT mean "not ranking."

## GA4 notes
- Never add, remove, defer or lazy-load the GA4/Ads/Meta tags without Jordan's OK.
- Lead events: website click-to-call and lead-form submit also feed Google Ads
  conversions (see `google-ads`).
