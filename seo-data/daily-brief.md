# Daily Data Feed · Mon 2026-11-16 (Viktor → Claude)

Facts only. You set your own priorities from CLAUDE.md and STRATEGY.md.
Commits since previous feed (2026-11-15 12:35:11Z). Times UTC unless noted.

## Jordan's words (verbatim, #bucksworth-digital, last 24h)
- None. The 11/15 16:22Z post from his account is your "Sent using Claude" run summary, not Jordan's own words.
- Viktor-check feedback (per Jordan 10/13 "please send all feed back to claude"), site gatekeeper 11/15 17:40Z, verbatim:
  "San Tan Valley’s ant-bait post passed QA; two site fixes are queued."
  "Two exact fixes queued for Claude: the new URL-check workflow can report success even when its crawler fails because the logging pipeline masks the exit code; enable failure propagation and test it."
  "The [Phoenix weed hub](https://www.getyourbucksworth.com/phoenix-az/weed-and-lawn-care) and other city weed hubs still offer weed-fabric installation, an inherited promise outside treatment-only scope."
  "Aeration/dethatching/mowing corrections are live."

## Claude's commits yesterday (Sun 2026-11-15)
- origin/main: `1efed20` 16:20:21Z "site: weed hub copy no longer claims aeration/dethatching/mowing (service truth); AJ DIY weed-killer post: salt vs acetic-acid mechanism + foxtail barley life cycle (Viktor QA); T005 AI-visibility refresh (DataForSEO LLM mentions); T006 lost-link draft; blog: does borax and sugar kill ants (San Tan Valley, AZ 110)"
- origin/main: `6ab0add` 16:20:27Z "ci: install url-guard workflow (board T007)"
- origin/main: `ae1995d` 16:21:01Z "seo-data: record SHAs 1efed20/6ab0add for fix-list + board T005/T006/T007 + run-log"
- All branches: no other Claude commits in the window.
- Other commit: `304ead5` 17:39:04Z "seo-data: QA workflow exit handling and weed service claims" (Viktor gatekeeper).

## Leads yesterday (Sun 2026-11-15, Google Ads 4486379637)
- LSA: 0 leads; no services, types or charged leads returned (weekend pause).
- LSA campaign: 0 impressions, 0 clicks, $0 spend, 0 conversions.
- Search conversions by campaign: BW | Pest | Pinal + QC + SE Mesa: 0; BW | Termite | East Valley: 0; BW | Weed | Pinal + QC + SE Mesa: 0; BW | Pest | Mesa-Gilbert-Chandler: 0; BW | Weed | Mesa-Gilbert-Chandler: 0. All five returned 0 impressions, clicks and spend.
- Lead ZIPs (searcher location, not service address; partial attributed conversions, not a ZIP for every inquiry):
  - 11/15: none.
  - 7 days to 11/15: 85044, 85382 (2 each); 85016, 85022, 85032, 85132, 85209, 85339, 85388 (1 each).

## Data files + dates
- rankings.json: last commit 2026-11-08 17:48:25Z (`7ac2ff4`); 11/15 weekly refresh skipped, per gatekeeper.
- striking-distance.json: last commit 2026-11-08 17:48:25Z (`7ac2ff4`).
- ai-visibility.json: last commit 2026-11-15 16:20:21Z (`1efed20`, Claude's LLM-mentions refresh).
- Monday rebuild 11/16: url-baseline 6,597 → 6,610; known_broken_* preserved; cannibalization refreshed (2,733 qualifying queries, top 1,500 stored).
- authority.json: unchanged, generated 2026-11-09 12:35:11Z. Authority refresh skipped: no secure DataForSEO connection; embedded credential not used.

## URL guard (prod, run 2026-11-16)
- 6,610 URLs checked. 3 not 200, all already known broken; 0 NEW breaks.
- No URL GUARD lines added.

## Connector health
- Zapier: Viktor has no current check of its own.
- Your 11/15 run summary, verbatim: "DataForSEO ok (1 SERP + 3 LLM-mention calls)"; "GBP ok (Tucson: 398 reviews, 4.9, newest 11-14, replied)"; "Slack ok."; "I didn't test Google Ads, GA4, Facebook or Instagram this run."
- Your routine: ran 11/15, three commits on main. Summary reports 0 live site-qa problems, 1 code FAIL and 20 WARNs.
- Viktor's live Ads and GSC reads succeeded 11/16; these do not test Claude's Zapier connectors.
- Viktor's DataForSEO secure connection is absent (verified 11/16); weekly-refresh blocker and credential-rotation notice already posted in #bucksworth-digital 11/15.
