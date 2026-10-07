# Top 20 Most Common Meta Ads Issues

## How to Use This Document

These are the 20 issues that account for approximately 80% of all Meta Ads troubleshooting tickets. Listed in order of frequency. For each issue: what it looks like, why it happens, and how to fix it.

---

## 1. Creative Fatigue

**Symptoms:** CTR declining 10%+ over 7-14 days, CPA gradually increasing, frequency rising
**Root cause:** Target audience has seen the ad too many times. The ad is no longer novel.
**Fix:**
- Launch 3-5 new creative concepts (not minor variations)
- Test new hooks on the same body content
- Introduce a new format (video if running statics, UGC if running polished)
- Reduce spend on fatigued ads by 30-50%
**Prevention:** Maintain a pipeline of 2-3 weeks of ready creative. Rotate 20-30% of creative every 2 weeks.

## 2. Learning Limited

**Symptoms:** Ad set shows "Learning Limited" status for 7+ days, inconsistent delivery
**Root cause:** Ad set is not getting 50 optimization events per week
**Fix:**
- Consolidate ad sets (fewer ad sets = more events per ad set)
- Increase budget per ad set
- Optimize for an earlier funnel event (AddToCart instead of Purchase)
- Reduce the number of active ads to concentrate delivery
**Prevention:** Before launching, calculate: budget / target CPA >= 50/week per ad set

## 3. Budget Constrained (Spending to Cap)

**Symptoms:** Daily spend hits 95-100% of budget by early afternoon, performance looks great but volume is limited
**Root cause:** Budget is lower than what the algorithm could profitably spend
**Fix:**
- Increase budget by 20% every 48-72 hours (gradual scaling)
- Do not double the budget overnight (resets learning)
- Set up automated rules: if CPA < target AND spend > 90%, increase by 20%
**Prevention:** Monitor the "Budget limited" indicator in Delivery Insights

## 4. Pixel/CAPI Misconfiguration

**Symptoms:** Conversions drop suddenly, reported conversions don't match backend data, EMQ < 6
**Root cause:** Pixel not firing on key pages, CAPI connection lost, event deduplication broken
**Fix:**
- Test pixel with Meta Pixel Helper Chrome extension
- Check CAPI connection status in Events Manager
- Verify event_id matching for deduplication
- Check that access tokens haven't expired
**Prevention:** Weekly monitoring of Events Manager diagnostics, automated alerts for CAPI failures

## 5. Ad Disapproval

**Symptoms:** Ads rejected, delivery suddenly stops on specific ads, "With Issues" status
**Root cause:** Policy violations (personal attributes, unsubstantiated claims, restricted content)
**Fix:**
- Review the specific violation in Account Quality
- Edit the ad to comply (most common: rephrase "Are you..." to avoid personal attributes)
- Appeal via Account Quality if you believe it's a false positive
**Prevention:** Pre-launch compliance checklist, avoid personal attribute phrasing, qualify all claims

## 6. Audience Overlap

**Symptoms:** Multiple ad sets competing against each other, inconsistent CPA across ad sets, one ad set thriving while others languish
**Root cause:** Audiences across ad sets overlap >30%, causing self-competition in the auction
**Fix:**
- Consolidate overlapping ad sets into one
- Add exclusions (exclude Audience A from Ad Set B)
- Switch to Advantage+ Audience or broad targeting
**Prevention:** Check overlap before launching new ad sets (Audiences tool > Show Overlap)

## 7. Cost Cap Too Restrictive

**Symptoms:** Campaign spending <50% of budget, healthy creative and audience metrics
**Root cause:** Cost cap or bid cap set below what the auction requires
**Fix:**
- Increase cost cap by 10-20%, monitor for 48 hours
- Temporarily remove cap to see Meta's natural CPA
- If natural CPA is 2x+ your cap, the target may be unrealistic
**Prevention:** Set initial cost cap at 1.5x target CPA, tighten gradually as performance stabilizes

## 8. Landing Page Speed

**Symptoms:** High CTR but low conversion rate, bounce rate >70%, mobile users converting at much lower rate than desktop
**Root cause:** Landing page takes >3 seconds to load on mobile
**Fix:**
- Compress images (WebP format)
- Defer non-critical JavaScript
- Use a CDN
- Eliminate render-blocking resources
- Test with Google PageSpeed Insights (target >70 mobile score)
**Prevention:** Monthly page speed audits, mobile-first design

## 9. Message Mismatch (Ad vs Landing Page)

**Symptoms:** Healthy CTR and click volume but low on-page conversion rate
**Root cause:** The landing page doesn't immediately reinforce the promise made in the ad
**Fix:**
- Align landing page headline with ad's primary message
- Create dedicated landing pages per ad theme (not just the homepage)
- Ensure visual continuity (colors, imagery, tone)
**Prevention:** Before launching an ad, screenshot it alongside the landing page and ask: "Does this feel like one continuous experience?"

## 10. Too Many Ad Sets

**Symptoms:** Most ad sets stuck in Learning or Learning Limited, budget spread thin
**Root cause:** Budget fragmented across too many ad sets, none getting enough events
**Fix:**
- Consolidate to 3-5 ad sets per campaign (CBO)
- Merge similar audiences into single ad sets
- Eliminate ad sets targeting near-identical audiences
**Prevention:** Campaign structure planning before launch. Each ad set needs budget for 50+ weekly events.

## 11. Audience Saturation

**Symptoms:** Frequency >3.0 (prospecting), CPA rising, CTR declining even with fresh creative
**Root cause:** You've reached most of your target audience. No more new people to show ads to.
**Fix:**
- Expand audience (broader interests, larger lookalikes, Advantage+ Audience)
- Test new geographic markets
- Expand to new audience segments (adjacent personas)
- Reduce budget to match the sustainable reach of the audience
**Prevention:** Monitor frequency trends weekly, plan audience expansion before saturation hits

## 12. Attribution Window Confusion

**Symptoms:** Performance metrics look different depending on which attribution setting you view
**Root cause:** Comparing 7-day click vs 1-day click vs 1-day view -- different windows show different numbers
**Fix:**
- Standardize on one attribution window for all decision-making
- Recommended: 7-day click, 1-day view (Meta's default)
- Never compare campaigns using different attribution windows
**Prevention:** Set all campaigns to the same attribution window, document which window your reports use

## 13. Advantage+ Expansion Overspending

**Symptoms:** Advantage+ Audience or Detailed Targeting Expansion spending most of the budget on expanded audiences with worse CPA
**Root cause:** Meta's expansion algorithm found broad audiences but they're not converting efficiently
**Fix:**
- Disable Advantage+ Detailed Targeting for that ad set
- Switch to Advantage+ Audience with better seed suggestions
- Test fully manual targeting as a comparison
**Prevention:** Monitor Delivery Insights for expansion vs core audience performance weekly

## 14. Frequency Too High (Retargeting)

**Symptoms:** Retargeting frequency >7, negative ad comments, CPA increasing in retargeting campaigns
**Root cause:** Retargeting pool is too small relative to budget, or retention window is too long
**Fix:**
- Reduce retargeting window (14-day instead of 30-day)
- Reduce retargeting budget
- Add fresh creative to reduce perceived frequency
- Exclude users who have seen the ad 5+ times
**Prevention:** Size your retargeting budget proportional to audience pool. Rule of thumb: don't spend more than $0.50/person/week in retargeting.

## 15. iOS Measurement Gaps

**Symptoms:** Reported conversions are 20-40% lower than actual backend conversions, especially on mobile
**Root cause:** iOS users opting out of ATT, limiting pixel-based tracking
**Fix:**
- Implement CAPI if not already done
- Verify EMQ score is >6.0
- Use modeled conversions in reporting (they fill the gap)
- Reconcile Meta reporting with backend data weekly
**Prevention:** CAPI implementation, consent mode setup, regular backend reconciliation

## 16. New Campaign Not Exiting Learning

**Symptoms:** Campaign has been in "Learning" for 10+ days, performance is volatile
**Root cause:** Not accumulating 50 optimization events quickly enough
**Fix:**
- Increase budget (each ad set needs 50 events/week at your target CPA)
- Reduce number of ad sets (consolidate)
- Optimize for an earlier event (Lead instead of Purchase)
- Avoid making edits (each significant edit resets the counter)
**Prevention:** Launch with sufficient budget from day one, structure for 50+ weekly events per ad set

## 17. CBO Budget Allocation Issues

**Symptoms:** CBO campaign allocates most budget to one ad set, leaving others starved
**Root cause:** Meta's algorithm optimizes for the lowest cost per result, which may concentrate on one ad set
**Fix:**
- Set minimum spend limits per ad set (but this constrains the algorithm)
- Ensure ad sets have meaningfully different audiences (not minor variations)
- Consider ABO if you need equal testing across ad sets
- If the "winning" ad set is truly better, the allocation may be correct
**Prevention:** Only use CBO when ad sets represent genuinely different strategies, not minor targeting tweaks

## 18. Seasonal CPM Spikes

**Symptoms:** CPMs rising across all campaigns simultaneously, no internal changes
**Root cause:** Increased auction competition during peak periods (Q4, Black Friday, elections)
**Fix:**
- Adjust CPA targets upward temporarily
- Focus on highest-converting audiences and creative
- Reduce budget on marginal campaigns
- Shift budget to high-intent retargeting
**Prevention:** Build a seasonality calendar, plan budget allocation around expected CPM patterns

## 19. Conversion Tracking Discrepancies

**Symptoms:** Meta reports different conversion numbers than Google Analytics, backend, or CRM
**Root cause:** Different attribution models, deduplication issues, click vs view counting differences
**Fix:**
- Understand the difference: Meta counts view-through conversions, GA4 typically doesn't
- Reconcile using a consistent lookback window
- Check for event deduplication issues (double-counting pixel + CAPI)
- Accept a 10-20% variance as normal between platforms
**Prevention:** Document expected discrepancy rates, use one source of truth for budget decisions

## 20. Account Restricted

**Symptoms:** All ads paused or limited, account-level notification in Account Quality
**Root cause:** Repeated policy violations, payment issues, suspicious activity, or circumventing review
**Fix:**
- Check Account Quality (business.facebook.com/accountquality) for specific issues
- Address each flagged violation
- Submit an appeal with evidence of compliance
- If payment-related: update payment method and clear any outstanding balance
- Contact Meta support for account-level restrictions
**Prevention:** Regular Account Quality checks, compliance training for team, never circumvent ad review
