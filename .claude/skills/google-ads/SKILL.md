---
name: google-ads
description: Bucksworth Google Ads + Local Services Ads (LSA) — account map, campaigns, guardrails, daily/weekly analysis workflow and dark-channel checks. Use for any Google Ads or LSA question, report or proposed change; methodology skills named google-ads-* hold the frameworks.
---

# Google Ads + LSA (Bucksworth)

Read `bucksworth-rules` first. All ads copy and spend rules there apply.

## Access (how Claude reaches Ads)
- Zapier MCP server "Claude MCP Server", app **Google Ads** (13 actions). Status 2026-10-06:
  the connection said "Connected" but calls returned `access_token missing`. Jordan has
  to reconnect it on his computer. Test it with a read before relying on it. If it fails,
  say "Google Ads data unavailable (Zapier auth)" and never guess numbers.
- Weekly snapshot in the repo: `seo-data/ads-insights.json` (30-day LP conversion,
  converting terms, leads by ZIP). It's written by Viktor's feed, so check its date.
- LSA dashboard-only items (profile, services, photos, reviews, lead disputes, lead
  status, exact per-lead charge) need a human signed in to the LSA UI. The API can't do them.

## Account map (verify live before acting)
- Active account **4486379637** (Phoenix LSA + Bucksworth Search). No MCC; don't pass a
  login customer ID. Legacy accounts 2768001348, 7024049980, 3851890447, 4660308337 and
  4072088295 are paused. 2487766841 is an unknown LSA account; ask Jordan before touching it.
- Campaigns (as of 2026-10-06): BW | Pest | Pinal + QC + SE Mesa · BW | Pest |
  Mesa-Gilbert-Chandler · BW | Weed | Pinal + QC + SE Mesa · BW | Weed |
  Mesa-Gilbert-Chandler · BW | Termite | East Valley · LSA campaign. Termite Search and
  the Pest Pinal "Rodents" ad group were PAUSED 10/6. Both Weed campaigns are paused.
- Conversion actions: website click-to-call 7790449618, lead form 7692423296, LSA leads.
- LSA budget in the UI is an average WEEKLY budget (monthly max ≈ weekly × 4.34).

## Guardrails (Jordan)
- **Spend changes, bids, budgets, keywords, negatives, ads, status:** propose with a
  number ("Rec 22: …"). Apply only after Jordan approves that exact number in Slack.
  The $10K/month cap INCLUDES LSA. Flag loudly if month-to-date pacing projects over it.
- No paid AC/HVAC/plumbing keywords, ever. Never count builder termite renewals as sales.
- Don't pitch scaling until tracking has been clean 2–3 weeks AND cost per booked new
  customer is known. Leads are not customers: match LSA leads to new FieldRoutes
  customers before claiming results.
- Never pause old RSAs while their replacements are still in review. Ad schedules and
  promotion assets are UI-only.
- Ad copy: headline 1 = the DataForSEO search term (location "Phoenix,Arizona,United
  States"), line 2 = creative twist. One deal per ad group, never in a headline. Call
  button only. "100% Money Back Guarantee *Terms and conditions apply." Never "no contract".

## Daily check (read-only)
1. Yesterday + month-to-date per campaign: spend, clicks, CPC, impressions, impression
   share, conversions by action, LSA leads (charged vs not).
2. Flag: disapproved ads, budget-limited campaigns, campaigns spending >130% of daily
   budget, zero-impression ad groups, conversions that stopped firing 3 days running.
3. Search terms, last 3 days: list junk (DIY, products/brands, how-to, jobs,
   AC/HVAC/plumbing, out-of-area cities) with spend as proposed negatives.
4. **Dark channel:** alert if LSA has 0 impressions today, or an enabled Search campaign
   has 0 impressions while its 7-day daily average is ≥20. At 2pm also alert if LSA is
   under 15% of its 7-day daily average. Likely causes: LSA pause toggle, weekly
   budget used up, hours, service area, billing, verification; Search: budget,
   disapprovals, billing. (LSA going dark at month-end has been the monthly cap before.)
5. Nothing needs attention → post nothing. Something does → one short Slack line
   tagging Jordan.

## Monday weekly review
Last 7 days vs prior 7: spend vs cap pacing, clicks, calls, form leads, cost per lead
by campaign and by city/pest ad group, top 10 search terms by spend, proposed negatives
and bid moves with reasons, low-CTR ads, and which ZIPs/cities produce leads
(geographic view = searcher location, not job address). Include LSA leads and cost per
lead. Then 3–5 numbered recommendations Jordan can approve by number.

## Methodology skills (frameworks, use with Bucksworth data)
`google-ads-review`, `google-ads-performance-analysis`, `google-ads-mine-search-terms` +
`google-ads-search-term-methodology`, `google-ads-optimize-budgets` +
`google-ads-budget-methodology`, `google-ads-audit-bidding` + `google-ads-bidding-methodology`,
`google-ads-audit-creative` + `google-ads-creative-methodology`, `google-ads-audit-local` +
`google-ads-local-methodology`, `google-ads-audit-settings` + `google-ads-settings-methodology`,
`google-ads-investigate-campaign` + `google-ads-campaign-diagnostics-methodology`,
`google-ads-analyze-landing-pages`, `google-ads-account-maturity-methodology`,
`google-ads-account-conventions`.
Those skills were written for an agent with a direct Google Ads API toolset (function
names like `google-ads-run-gaql-query`, `submit_draft`). Use the matching Zapier Google
Ads action or GAQL query instead. The frameworks and thresholds still apply.
