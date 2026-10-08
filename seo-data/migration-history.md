# Website build + migration history (facts for working backwards)

Compiled 2026-10-07 from this repo's git history, the Wayback Machine, Google Search Console and
DataForSEO. Jordan, 2026-10-07: the migration cost us our URLs and authority, and Claude has to
work backwards to fix everything once and for all. Every claim below cites its source, so verify
it yourself before acting.

## 1. Timeline (git log)

| Date | Commit | What happened |
|---|---|---|
| 2013 to 2026-05 | n/a | WordPress site on getyourbucksworth.com (apex, no www). Old URL shapes included `/<post-slug>/` at root, `/city/<city>-az/`, `/<pest>-pest-control/`, `/commercial/<svc>/`, `/phoenix/<svc>/<sub>/` and `/pest-control-<city>-az/`. |
| 2026-05-20 | bb50b38 to 44f90eb, 9e38ff0, e8b5a64 | Next.js rebuild deployed to Vercel in one day. New URL scheme is `/<city>-az/<vertical>/<sub-service>`. WP blog posts were pulled from the WP REST API (c616157) and later served under `/blog/<slug>`. |
| 2026-05-23 | f5070b5 | "Phase 2" added 42 301s for old WP URLs. This was the first redirect pass, 3 days after cutover. |
| 2026-05-27 | b8663fa, 5ca06ab | Old redirects remapped, and the homepage canonical moved to **www**. |
| 2026-05-31 to 08-04 | ~40 commits (see `git log --grep=redirect`) | Redirects were added reactively, one batch at a time, as GSC reported 404s (e.g. 78d6f4a, bcecc08 "1,676 imp recovered", c72f9ea, 1791256 catch-all for 174 best-* slugs). |
| 2026-06-18 | ce3953c | Apex to **www** redirect added (308, in next.config.mjs). The whole domain's canonical host switched. |
| 2026-07-08 / 07-15 | dc85ca6, 5b2ee27 | More WP URLs without the -az suffix, plus /pest-control-phoenix/ and /hvac/. |
| 2026-08-03 | PR #3 6c5b44c, PR #4 bbe14be, d05f733 | "wordpress-redirect-recovery" and "missing-redirects-backlink-equity". /glendale-az had been 308ing to Phoenix because a legacy redirect shadowed it. |
| 2026-08-04 | a0bfcca | **1,354 duplicate blog posts pruned**, each 301'd to its real page. |
| 2026-09-19 | 004a590 | Legacy /privacy-policy redirect removed so the new page resolves. |
| 2026-10-07 | 8634575 | URL guard and baseline added (`scripts/url-guard.mjs`, `url-baseline.json`). |

The redirect map lives in `next.config.mjs` (~398 rules). The rules were never generated from a
full list of the old site's URLs. They were patched over months from whatever GSC happened to
report, and the gap below is the result.

## 2. What is still broken today (verified 2026-10-07)

- **`wp-legacy-urls.json`**: 1,460 HTML URLs that the Wayback Machine archived from the old site
  with HTTP 200. Today **332 of them 404** on www. Examples: `/city/*-az/` (every old city page),
  `/commercial/*`, `/<pest>-pest-control/` pest library pages, and old root blog posts. Some go
  through a redirect that ends on a 404, e.g. `/ac-maintenance-in-tucson-az-...` → `/blog/...` → 404.
- **`url-baseline.json` → `known_broken_2026_10_07`**: 57 URLs that GSC still shows with
  impressions and that 404 now. The top two are `/phoenix/insulation/aeroseal-duct-sealing` (2,113
  impressions) and `/rat-pest-control` (1,721).
- Every one of these needs a single-hop 301 to the closest live page with matching intent. Never
  send them to the homepage, and never use a redirect chain.

## 3. Backlinks / authority (DataForSEO, see `backlinks-recovery.json`)

- Monthly history: referring domains were 78 to 86 from 2025-05 to 2026-06, then 75 in 2026-07,
  87 in 2026-08 and **283 in 2026-09**. DataForSEO domain rank: 178 → 112 (2025-06) → 89 to 120 →
  **157 now**.
- Live today: 799 links from 751 domains. 705 of those links were first seen after 2026-08-15,
  mostly from .site/.space/.website/.store/.online/.shop TLDs, and the homepage backlink spam score
  is 49. **The September jump is not earned authority.** Judge it before counting it.
- Almost every external link points to the homepage (apex → www 301, which still passes equity).
  Only about 10 deep pages have any tracked link. DataForSEO's lost list holds 18 links. One of them is
  **azmomsquad.com/arizona-business-directory/** (linked since 2022-12, lost 2026-06-30). The
  azmomsquad East Valley Family Festival sponsor link is still live.
- Jordan reports 300+ lost backlinks (azmomsquad and others) and a DA of about 30. "DA" is a Moz
  metric, and DataForSEO's index does not show 300 links to old deep URLs. If Jordan supplies a
  Moz/Ahrefs/Semrush lost-links export, put it in `seo-data/reference/` and treat it as the
  primary list.

## 4. Work-backwards sequence (Claude owns this; the order within each step is your call)

1. Run `node scripts/url-guard.mjs prepush` before every push. Never create new breaks.
2. Clear `known_broken_2026_10_07` (indexed and losing impressions now).
3. Clear `wp-legacy-urls.json` → `broken` (332): one-hop 301s to the best intent match. After
   pushing, re-check each URL live and add the fixed paths to `url-baseline.json` so the guard
   protects them.
4. Collapse redirect chains: any legacy URL whose `ends_at` passes through 2+ hops.
5. Reclaim links. For every lost link in `backlinks-recovery.json` (and Jordan's export, if
   provided), ask the site owner from info@ to restore or update the link (azmomsquad first).
   Follow the `pr-backlinks` skill and log the outcome in `backlinks-log.json`.
6. Earn new authority with the `pr-backlinks` skill. Re-measure monthly with DataForSEO
   `backlinks/history/live`.
