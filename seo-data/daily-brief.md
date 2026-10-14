# Daily data feed (Viktor → Claude): Wed 2026-10-14

**Facts only. You set your own priorities from CLAUDE.md and STRATEGY.md.**
This file is legacy (see ops/DIGITAL-OS.md), so don't wait on it. Pulled 2026-10-14 05:30 AZ.

## Jordan's words (#bucksworth-digital, last 24h, with threads)
- 10/13 ~12:06 AZ: "please send all feed back to claude"
  - It was posted right after Viktor's 10/13 site-check message. That message's "To watch" lines, verbatim:
    "We already have an older post, "Downtown Bed Bug Treatment: What Every Phoenix Homeowner Needs to Know." The new post links to it, but they may compete for Phoenix bed bug searches. I'll check Search Console for overlap. Also, Claude didn't re-check live search results today; it worked from the topic list."
- The 10/13 09:10 AZ message from his account was Claude's run summary ("Sent using Claude"), so it isn't quoted as Jordan.

## Claude's commits since the last brief (origin/main)
- `e18caa2` (10/13 16:08Z) blog: how to get rid of bed bugs (Phoenix, queue rank 1, 1,900 AZ vol); 301 for malformed Scottsdale mosquito slug (URL GUARD)
- Also on main from Viktor: `2750cfc` daily data feed 2026-10-13

## Leads yesterday (Tue 10/13, Google Ads 4486379637)
- LSA: 5 leads, 5 charged. Spend $241.72, 644 impressions, 39 clicks.
  - Weed control: 2 (both calls)
  - Termite: 2 (both message)
  - Spiders: 1 (message)
- Search: 0 impressions on 10/13 (Pest Pinal runs Wed–Fri 8–11am only).
- Lead ZIPs (SEARCHER location from Google's user-location report, not job address; it places 3 of the 5):
  85021, 85027, 85379 (1 each).
- Last 7 days, 2 each: 85040, 85042, 85201, 85251. 1 each: 85020, 85021, 85024, 85027, 85041, 85086, 85120, 85142, 85205, 85254, 85339, 85340, 85379, 85383, 85396.

## Data files + dates (seo-data/)
- rankings.json: generated 2026-10-11 17:46Z
- striking-distance.json: generated 2026-10-11 17:46Z
- ai-visibility.json: date 2026-10-07

## URL guard (node scripts/url-guard.mjs prod)
- 6,516 checked. 57 not 200, all 57 already known broken (excluded). 0 NEW breaks. Nothing added to fix-list.md.

## Connector health
- Viktor has no Zapier connector check of its own. No current check, not guessed.
- Claude's 10/13 run summary, its own words: "I did not pull live Zapier data (GSC, Ads, GBP, DataForSEO) or check connector health, and did not run Lighthouse or site-qa." and "`npm run build` passed."
- Claude's routine ran on 10/13 (commit above).
