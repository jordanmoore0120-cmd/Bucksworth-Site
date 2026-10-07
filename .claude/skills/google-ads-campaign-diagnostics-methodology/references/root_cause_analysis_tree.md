# Root Cause Analysis Tree

Complete diagnostic tree for Google Ads campaign underperformance. Always start at Branch 1 and work down. Each branch includes: what to check, what data to pull, how to confirm the root cause, and resolution actions.

## The Tree

```
Performance drop detected
|
+-- 1. MEASUREMENT (check first: if data is wrong, everything after is wrong)
|   +-- Conversion tracking broken?
|   +-- Tag firing correctly?
|   +-- Attribution model changed?
|   +-- Consent Mode blocking data?
|   +-- Conversion action modified?
|   +-- GA4 integration disrupted?
|   +-- Conversion lag not accounted for?
|
+-- 2. AUCTION (competitive environment changed?)
|   +-- New competitors entered?
|   +-- Existing competitor increased bids?
|   +-- Quality Score dropped?
|   +-- Impression share declined?
|   +-- CPC inflation?
|   +-- Ad Rank threshold changes?
|
+-- 3. TARGETING (reaching the wrong people?)
|   +-- Search term drift (matching irrelevant queries)?
|   +-- Audience exhaustion?
|   +-- Geographic performance shift?
|   +-- Device performance shift?
|   +-- Time-of-dayday_of_week shift?
|   +-- Match type expansion pulling in irrelevant traffic?
|
+-- 4. CREATIVE (ads not resonating?)
|   +-- CTR declining? (creative fatigue)
|   +-- Ad disapprovals?
|   +-- RSA asset ratings declining?
|   +-- Message-keyword mismatch?
|   +-- Competitor creative outperforming?
|
+-- 5. LANDING PAGE (page not converting?)
|   +-- Page load speed degraded?
|   +-- Mobile experience issues?
|   +-- Form/checkout broken?
|   +-- Content changed?
|   +-- Trust signals removed?
|   +-- A/B test running that is losing?
|
+-- 6. BUDGET (money problems?)
|   +-- Budget capped (Lost IS Budget)?
|   +-- Budget recently reduced?
|   +-- Budget pacing off (front-loading or back-loading)?
|   +-- Shared budget being consumed by another campaign?
|
+-- 7. BIDDING (algorithm issues?)
|   +-- In learning period?
|   +-- Target too aggressive?
|   +-- Strategy misfit for volume?
|   +-- Recent strategy change?
|   +-- Conversion action change disrupted learning?
|
+-- 8. EXTERNAL (outside your control?)
    +-- Seasonality (expected dip)?
    +-- Market event (news, regulation)?
    +-- Competitor launched major promotion?
    +-- Platform update/bug?
    +-- Economic conditions (recession, inflation)?
```

## Branch 1: Measurement

**Why check first:** If your data is wrong, every subsequent analysis is built on a false foundation. A "CPA spike" might actually be "conversions stopped recording." Always rule this out before diagnosing anything else.

**Data to pull:**
- Conversion action status (Tools > Conversions): check recording status, last conversion date
- Google Tag Assistant or Tag Manager: verify tag is firing on conversion page
- Change history: filter for conversion action changes in the relevant timeframe
- GA4 real-time reports: confirm events are flowing
- Consent Mode diagnostics: check if consent rates changed

**Indicators:**
- Conversion count dropped to zero or near-zero suddenly (not gradually)
- Conversion action shows "No recent conversions" status
- Change history shows conversion action was edited (name, counting, window, or value changes)
- GA4 shows sessions but no goal completions
- Tag Assistant shows tag not firing or firing on wrong page

**Confirmation method:**
- Submit a test conversion and verify it records
- Compare Google Ads conversion data to GA4 data to CRM data. If all three diverge, tracking is the issue.
- Check if the drop aligns exactly with a change history entry for conversion actions

**Resolution actions:**
- Fix the tag, reinstall, or update the trigger
- Revert conversion action changes if they were unintended
- Update Consent Mode configuration if consent rates dropped
- If conversion lag is the cause: wait for full attribution window before re-evaluating
- Document what broke and set up alerts for future tracking failures

## Branch 2: Auction

**Why this order:** If measurement is confirmed working, the next most common cause of performance shifts is the competitive environment changing around you.

**Data to pull:**
- Auction Insights report: compare current period to prior period
- Average CPC trend (weekly): check for inflation
- Quality Score components: expected CTR, ad relevance, landing page experience
- Search Impression Share, Lost IS (rank), Lost IS (budget)

**Indicators:**
- New domains appearing in Auction Insights
- Existing competitor's impression share increasing 10%+
- CPC increasing while your bids and targeting did not change
- Quality Score components declining (especially expected CTR)
- Lost IS (rank) increasing without bid changes

**Confirmation method:**
- Auction Insights clearly shows a new or expanding competitor
- CPC trend correlates with IS changes (not with your own bid changes)
- Quality Score change log shows component declines

**Resolution actions:**
- Improve Quality Score (ad relevance, landing page, expected CTR)
- Differentiate creative to avoid head-to-head competition on the same message
- Adjust targeting to find less competitive segments
- If CPC is above efficiency threshold, accept lower position rather than overpaying
- Do not chase competitors blindly. Respond strategically.

## Branch 3: Targeting

**Data to pull:**
- Search terms report: compare current to prior period for query quality
- Geographic performance breakdown: look for shifting performance by region
- Device performance breakdown: check for mobile vs desktop shifts
- Audience segment performance: check for exhaustion signals
- Hour-of-day and day-of-week reports: look for timing shifts

**Indicators:**
- Search terms report shows increase in irrelevant queries
- One geographic region degraded significantly while others held
- Mobile performance dropped while desktop held (or vice versa)
- Audience lists showing declining CTR/conversion rate over time
- Performance concentrated in specific time windows that shifted

**Confirmation method:**
- Calculate the percentage of spend going to irrelevant search terms. If it increased, targeting drift is confirmed.
- Segment performance by geo/device/time and compare periods. If one segment drives the total decline, that segment is the cause.

**Resolution actions:**
- Add negative keywords to block irrelevant search terms
- Adjust match types if broad match is pulling in too much irrelevant traffic
- Apply geographic bid adjustments or exclusions
- Refresh audience lists or expand targeting to combat exhaustion
- Adjust ad scheduling if time-based patterns emerged

## Branch 4: Creative

**Data to pull:**
- CTR trend by ad group (weekly)
- Ad disapproval status
- RSA asset performance ratings (best, good, low)
- Ad strength scores
- Competitor ad preview (using Ad Preview tool)

**Indicators:**
- CTR declining gradually over 3-4 weeks (creative fatigue)
- One or more ads disapproved, reducing available inventory
- RSA assets previously rated "best" now rated "good" or "low"
- Ad strength dropped from "excellent" to "good" or below
- Competitor running new creative that directly counters your messaging

**Confirmation method:**
- CTR decline correlates with impression volume (more impressions, lower CTR = audience exhaustion, not creative fatigue). Fewer impressions, lower CTR = creative fatigue or targeting shift.
- Check if disapproved ads were high performers. Losing your best ad has outsized impact.

**Resolution actions:**
- Rotate in new headlines and descriptions
- Pin key messages if RSA is combining poorly
- Appeal disapprovals if they are incorrect
- Test new angles and offers rather than iterating on the same message
- Review competitor creative for messaging gaps you can exploit

## Branch 5: Landing Page

**Data to pull:**
- Landing page conversion rate trend (weekly)
- Page load speed (Google PageSpeed Insights or CrUX data)
- Bounce rate from GA4 (landing page report)
- Mobile vs desktop conversion rate split
- Check the actual page for visual/functional changes

**Indicators:**
- Conversion rate dropped while traffic quality (CTR, search terms) remained stable
- Page load speed increased (slower loads = lower conversion rates)
- Bounce rate spiked
- Mobile conversion rate dropped disproportionately
- Form, checkout, or CTA is broken or changed

**Confirmation method:**
- Visit the landing page yourself. Submit a test conversion. Check mobile experience.
- If conversion rate dropped but all upstream metrics are stable, the page is the most likely cause.
- Check with the web team if any changes were deployed in the relevant timeframe.

**Resolution actions:**
- Fix broken forms, CTAs, or checkout flows immediately
- Revert page changes if they correlated with the performance drop
- Improve page load speed (especially mobile)
- Pause any A/B tests that are losing
- Ensure ad message matches landing page message (message match)

## Branch 6: Budget

**Data to pull:**
- Lost IS (budget): percentage of impressions lost due to budget
- Daily spend vs daily budget: check for consistent capping
- Budget change history
- Shared budget allocation across campaigns

**Indicators:**
- Lost IS (budget) above 20%: campaign is significantly constrained
- Daily spend consistently hitting budget cap
- Budget was recently reduced (check change history)
- A shared budget is being consumed disproportionately by one campaign

**Confirmation method:**
- If Lost IS (budget) is high and performance metrics per conversion are efficient, the campaign is simply underfunded.
- If a shared budget campaign increased spend, check if the other campaigns on that budget lost impressions.

**Resolution actions:**
- Increase budget if campaign is efficient and budget-constrained
- Move campaigns off shared budgets to dedicated budgets for better control
- Adjust pacing if budget is front-loading early in the day
- Reallocate budget from lower-efficiency campaigns to higher-efficiency ones

## Branch 7: Bidding

**Data to pull:**
- Bid strategy status: check for "Learning" state
- Bid strategy change history
- Conversion action change history (these can trigger re-learning)
- Target CPA/ROAS vs actual CPA/ROAS
- Conversion volume (is there enough data for smart bidding to work?)

**Indicators:**
- Strategy status shows "Learning" (typically 7-14 days after a significant change)
- Target CPA is significantly below actual CPA (target too aggressive)
- Campaign has fewer than 15-30 conversions per month (insufficient volume for smart bidding)
- Bid strategy was recently changed (triggering a new learning period)
- Conversion action was edited, which can reset learning without changing bid strategy

**Confirmation method:**
- Check change history for bid strategy or conversion action changes in the 2-3 weeks before the performance shift.
- If the campaign entered learning, performance degradation during that window is expected, not a sign of a deeper problem.

**Resolution actions:**
- If in learning: wait for it to complete (do not make additional changes)
- If target is too aggressive: raise tCPA by 15-20% or lower tROAS to give the algorithm room
- If volume is too low for smart bidding: consider switching to manual CPC or maximize conversions without a target
- If conversion action changes caused re-learning: minimize future edits to conversion actions
- Set a temporary, relaxed target during recovery, then tighten gradually

## Branch 8: External

**Data to pull:**
- Year-over-year comparison for seasonality
- Google Trends for relevant terms
- Industry news for regulatory or market changes
- Platform status pages for known bugs or outages
- Competitor websites for major promotions or pricing changes

**Indicators:**
- YoY data shows this period is historically weaker
- Google Trends shows declining search interest for category terms
- A regulatory change, news event, or economic shift impacted demand
- A competitor launched a major sale, price cut, or new product
- Google Ads platform had a known bug or update that affected delivery

**Confirmation method:**
- YoY comparison shows similar patterns in prior years (seasonal)
- The timing of the external event aligns exactly with the performance shift
- Multiple advertisers in the same vertical report similar issues (platform or market-wide)

**Resolution actions:**
- For seasonality: adjust expectations and budgets accordingly. Do not fight seasonal patterns with more spend.
- For competitive promotions: decide whether to counter-promote or wait it out. Short-lived competitor sales are usually not worth matching.
- For platform issues: document the impact period and exclude it from performance analysis. Contact Google support if needed.
- For market shifts: adapt strategy to the new reality rather than trying to force prior performance levels.

## General Principles

1. **Rule out earlier branches before blaming later ones.** Measurement issues masquerade as everything else.
2. **Look for timing correlations.** The root cause almost always has a timestamp that aligns with the performance shift.
3. **Check change history first.** Most performance shifts trace back to a specific change, whether internal or competitive.
4. **One root cause at a time.** While multiple issues can co-exist, diagnose and resolve the primary cause before addressing secondary ones.
5. **Document findings.** Create an evidence chain: symptom, data, root cause, resolution. This prevents re-investigation and builds institutional knowledge.
