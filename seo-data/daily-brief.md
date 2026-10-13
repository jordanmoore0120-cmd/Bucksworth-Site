# Daily data feed (Viktor → Claude): Tue 2026-10-13

**Facts only. You set your own priorities from CLAUDE.md and STRATEGY.md.**
This file is legacy (see ops/DIGITAL-OS.md), so don't wait on it. Pulled 2026-10-13 05:30 AZ.

## Jordan's words (#bucksworth-digital, last 24h, with threads)
- None. The 10/12 09:11 AZ message from his account was Claude's run summary ("Sent using Claude"), so it isn't quoted as Jordan.

## Claude's commits since the last brief (origin/main)
- `1f91c68` (10/12 16:07Z) blog: how to kill German cockroaches (Mesa, queue rank 3, 880 AZ vol); fix-list: trim Mesa weed-killer post links/H2s
- `087d770` (10/12 16:11Z) seo-data: fix-list mark Mesa weed-killer trim done (1f91c68)
- Also on main from Viktor: `a65a090` seo-data: weekly ads-insights refresh (2026-10-12); `37ffccc` daily data feed 2026-10-12 + Monday guard data

## Leads yesterday (Mon 10/12, Google Ads 4486379637)
- LSA: 9 leads, 9 charged. Spend $672.18, 638 impressions, 65 clicks.
  - Termite: 4 (all message)
  - Hornets/wasps: 2 (1 call, 1 message; the message lead is CONSUMER_DECLINED)
  - Pest control (other): 1 (message)
  - Weed control: 1 (message)
  - Lawn care, no service set: 1 (call)
- Search: 0 impressions on 10/12 (Pest Pinal runs Wed–Fri 8–11am only).
- Lead ZIPs (SEARCHER location from Google's user-location report, not job address; it places 6 of the 9):
  85020, 85040, 85041, 85142, 85201, 85254 (1 each).
- Last 7 days, 2 each: 85040, 85042, 85120, 85142, 85201, 85251. 1 each: 85020, 85024, 85028, 85041, 85086, 85118, 85205, 85254, 85288, 85339, 85340, 85383, 85396.

## Data files + dates (seo-data/)
- rankings.json: generated 2026-10-11 17:46Z
- striking-distance.json: generated 2026-10-11 17:46Z
- ai-visibility.json: date 2026-10-07

## URL guard (node scripts/url-guard.mjs prod)
- 6,516 checked. 57 known broken (excluded), 1 NEW break, added to fix-list.md:
  `/blog/why-scottsdale-mosquito-problems-are-why-scottsdale-mosquito-problems-are-worse-than-you-think-tips-for-troon-north-r` -> 404.
  It entered url-baseline.json on 10/12 from Search Console page data (malformed, doubled slug), not from the sitemap.
- Correction: Monday's guard-data rebuild (Viktor's script) dropped the `known_broken_2026_10_07` list from url-baseline.json,
  so a first run today counted all 58 as NEW. The list is restored in this commit and the script is fixed.

## Connector health
- Viktor has no Zapier connector check of its own. No current check, not guessed.
- Claude's 10/12 run summary, its own words: "I did not pull live Zapier data (GSC, Ads, GBP, DataForSEO) or check connector health" and "I did not run the `site-qa` script (Playwright is unavailable), `npm run build` or Lighthouse."
- Claude's routine ran on 10/12 (commits above).
