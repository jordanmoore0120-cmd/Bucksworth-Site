# Daily brief from Viktor → Claude — Wed 2026-10-07

Viktor writes this every morning (≈5:30am AZ). **Read it before anything else.** It has Jordan's current
priorities and yesterday's real lead data. If it conflicts with an older file, this brief wins. CLAUDE.md rules
and site-tasks.md rules still apply.

## Jordan's word today (#bucksworth-digital, 10/6)
- "make the phone ring. that should be job of you and claude." / "Claude is to eventually replace all your work flows."
- "it should be making optimized changes to the site agentically… following aio, aeo, geo, Google and all ai search
  tools and engines best practices." All of it has to be verified live.
- "we advertise ac and plumbing organically… we should be creating content for it too just not all the time."
  That means organic AC/plumbing content at about 1 in 6 pieces, and never as a paid ad (STRATEGY.md, 541ef22).
- His standing rule: NEVER "no contract". That's site-task 17 (P0) below.

## What Claude did yesterday (10/6, first daily-routine run). All live, verified 200
- `2b0b6b8`: fix-list cleared. The Tucson fruit-fly post was re-angled to drain flies; slug unchanged.
- `bbaba5c`: site-tasks 11, 12, 1, 2, 3 and 6 done; 4, 5, 7 and 8 partial. Pest hub title/H1 changed, the
  answer-first opener added, and hub links added. **6 site-tasks done, which meets the ≥3 target.**
- `82b106b`: blog post "What Do Termites Look Like? A Mesa Homeowner's Identification Guide".
- Gaps: no Lighthouse before/after was run, so Viktor's gatekeeper re-measures. Tasks 4 and 7 named 4 blog slugs that
  don't exist. That was Viktor's data error; always check slugs against content/blog/index.json before linking.

## Today's order (minimum 3 site-tasks before the blog post)
1. `fix-list.md`: nothing open.
2. **site-task 17 (P0): remove "no long-term contracts".** Replace that clause with "backed by our 100% Money Back
   Guarantee *Terms and conditions apply." Grep the templates and content/blog/*.json for every hit, and report the
   count in the commit. Do NOT touch the "$79/month" on the weed hub. Prices are Jordan's call, and he hasn't
   decided yet. Just list where it appears in your Slack summary.
3. **Finish 7 (weed control Queen Creek).** It fell out of the top 20, and weed/lawn leads are strong (see the demand
   section). Add the nearby-city blocks and sub-service cross-links, and report whether it's in the sitemap and
   self-canonical.
4. **Finish 4 (scorpion control Mesa) and 5 (Gilbert pest/termite).** Leads are coming from Mesa ZIPs 85203,
   85204, 85212 and 85213 and Gilbert 85234/85298. Make "termite control gilbert" (#5) link up with "termite
   control in Gilbert". For the Gold Canyon scorpion blog, change its link to /apache-junction-az/pest-and-termite/
   scorpion-control: Gold Canyon (85118) is next to Apache Junction, not Mesa. You flagged this one.
5. **Then 9** (termite/roach anchors from every pest hub; termite is our top LSA lead type), then 8 and 13.
6. **One blog post:** take the top blog-queue.json item not already in publish-log.json. Pest, termite and weed only
   (an occasional AC/plumbing post is fine, about 1 in 6, but not today). Link it up to the matching striking-distance hub.
Mark each task `[x]` with its SHA. URLs, tracking tags, prices and guarantee text stay as they are. Run Lighthouse if you can.

## Yesterday's demand (Google Ads API, account 4486379637, pulled 10/7 05:30 AZ)
- **LSA 10/6: 5 leads, all charged.** Weed control ×2 (1 call, 1 message), lawn care ×1 (call), termite ×1
  (message), general pest ×1 (call). Weed/lawn is 3 of 5. On 10/5 there were 9 charged leads, 5 of them termite.
- **Search 10/6:** none. It only runs Wed–Fri 8–11am, and Termite Search plus the Rodents group were paused 10/6.
- **Where leads came from** (Ads geo report, searcher location, not job address). 10/6: 85120 Apache Junction,
  85118 Gold Canyon, 85142 Queen Creek, 85028 N Phoenix, 85288. Last 7 days: 85120 AJ ×4; 85212 SE Mesa ×2;
  85339 Laveen ×2; 85028 ×2; then one each in Mesa 85203/85204/85213, Gilbert 85234/85298, Chandler 85248,
  QC 85142, Florence 85132, Gold Canyon, Tempe, Scottsdale and Goodyear.
- **Takeaway:** the East Valley and Pinal (AJ, Mesa, QC, Gilbert) bring the calls. Weed, lawn and termite are the hot services.

## Rankings (rankings.json + striking-distance.json, data from 2026-10-04, 3 days old, not re-pulled)
- Not in the top 30: pest control mesa (880/mo), chandler (480), queen creek (320), maricopa (260), casa grande (260).
- Close: rodent control san tan valley #15, rodent mesa #22, rodent chandler #21, pest control STV #24 (city page).
- GSC striking distance: AJ pest hub at 20.3 (2,678 impr.), Mesa weed at 16.4, Gilbert scorpion at 18.3,
  Marana pest at 16.7, and Tucson pest at 24.7 (7,692 impr.). Point new links at these.

## Accountability
Your 9:00am AZ routine runs daily now. Viktor's gatekeeper checks your commits live at 10:30am. If a run produces
no commit or fewer than 3 site-tasks, Viktor tags Jordan the same morning. If you're blocked (permissions, auth,
build, or the usage limit), write the reason on the first line of `seo-data/claude-status.md` and commit it.
Don't stop silently.
