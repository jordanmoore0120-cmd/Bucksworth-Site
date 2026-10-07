# Delivery Troubleshooting Deep Dive

## Overview

This document covers the full spectrum of delivery issues in Meta Ads -- from campaigns that won't spend at all to campaigns that spend but deliver to the wrong inventory. Delivery is the most fundamental requirement: if your ads aren't showing, nothing else matters.

---

## 1. Campaign Not Spending at All

### Diagnosis Checklist

| Check | How | Expected State |
|-------|-----|---------------|
| Campaign status | Campaign level | "Active" |
| Ad set status | Ad set level | "Active" |
| Ad status | Ad level | "Active" (not "In Review", "Rejected", or "With Issues") |
| Schedule | Ad set level | Current date/time within scheduled window |
| Budget | Campaign/ad set level | Budget > $0 |
| Billing | Payment Settings | Valid payment method, no outstanding balance |
| Account spending limit | Billing > Spending Limit | Not reached |
| Ad review | Ad level | All ads approved (not "In Review") |
| Audience size | Ad set level | Estimated reach > 0 |

### Common Causes and Fixes

**All ads still "In Review":**
- New accounts or accounts with policy history may have longer review times (up to 72 hours)
- Do not create duplicate ads to try to speed up review -- this can trigger additional scrutiny
- If review takes >72 hours: contact Meta support

**Schedule mismatch:**
- Check ad set start and end dates
- Check if dayparting is enabled and the current time falls outside the active window
- Check timezone settings (ad set timezone may differ from your local time)

**Zero estimated reach:**
- Audience is too narrow (conflicting restrictions)
- Geographic targeting excludes all users
- Age + gender + interest combination yields zero-sized audience
- Location-specific exclusions removed the entire audience

**Payment issues:**
- Prepaid balance exhausted
- Credit card declined or expired
- Outstanding account balance blocking new spend
- Currency mismatch between payment method and account

---

## 2. Campaign Spending but Far Below Budget

### Under-Delivery Spectrum

| Spend Level | Likely Cause | Priority Fix |
|-------------|-------------|--------------|
| 0-10% of budget | Bid/cost cap too low, or audience too small | Raise cap or broaden audience |
| 10-30% of budget | Competition too high for your bid, or limited placements | Raise cap, add placements, check Advantage+ |
| 30-50% of budget | Learning phase exploration, or moderate competition | Wait for learning to complete, then reassess |
| 50-80% of budget | Normal variance, or mild constraints | May be acceptable, optimize creative |
| 80-95% of budget | Healthy delivery | No action needed |

### Cost Cap Under-Delivery (Most Common)

**How Cost Cap works internally:**
- Meta participates in auctions where expected cost-per-result is near or below your cap
- If the going rate in the auction exceeds your cap, Meta doesn't bid
- This means your ads only show in "discount" inventory moments

**Diagnosing if your cap is too low:**
1. Remove the cost cap temporarily
2. Run for 3-5 days to see Meta's natural CPA (what the auction actually costs)
3. If natural CPA is 1.5x+ your cost cap, the cap is too restrictive
4. Reset cost cap to ~10% above the natural CPA

**Bid Cap under-delivery (more extreme):**
- Bid Cap is a hard ceiling per auction (unlike Cost Cap which is an average target)
- If your bid is below the clearing price, you get zero impressions in that auction
- Bid Cap should only be used when you have strong data on viable CPA ranges
- Start high and lower gradually, never start low and try to raise

### Audience Size Under-Delivery

**Minimum viable audience sizes:**

| Campaign Type | Minimum Audience | Recommended |
|---------------|-----------------|-------------|
| Prospecting (broad) | 1M | 5M+ |
| Prospecting (interest) | 500K | 2M+ |
| Lookalike | 2.5M (1% in US) | 5M+ |
| Retargeting | 1K | 10K+ |
| B2B (exception) | 50K | 200K+ |

**If audience is too small:**
- Remove stacked interest restrictions (multiple "must also match" conditions)
- Expand geographic targeting
- Broaden lookalike percentage (1% to 3-5%)
- Use Advantage+ Audience (treats interests as suggestions, not restrictions)
- For B2B: consider going to Facebook/Instagram even if the audience feels small -- Meta can still optimize with 50K+ audiences if your creative is strong

---

## 3. Learning Phase Deep Dive

### What Is the Learning Phase?

When a new ad set launches (or after significant edits), Meta's delivery system needs time to learn who in your audience is most likely to take the desired action. During learning, delivery is less stable -- Meta is exploring different user segments, placements, and times.

### Learning Phase Exit Requirements

| Requirement | Details |
|-------------|---------|
| Optimization events | ~50 events in the first 7 days |
| Stability period | Performance variance decreases, delivery becomes consistent |
| No significant edits | Edits during learning reset the counter |

### What Counts as a "Significant Edit"

These edits reset the learning phase:
- Changing the optimization event
- Changing bid strategy or bid/cost cap amount
- Changing targeting (audience, placements, age, gender)
- Changing budget by more than ~20%
- Pausing the ad set for 7+ days
- Adding new creative to the ad set

These edits do NOT reset learning:
- Changing the ad name
- Changing the campaign name
- Minor budget adjustments (<20%)
- Changing the bid/cost cap by a small amount
- Updating the ad creative (text only, no image/video change)

### Learning Limited: Causes and Solutions

| Cause | Solution |
|-------|----------|
| Budget too low for CPA target | Increase budget or reduce CPA target |
| Too many ad sets splitting budget | Consolidate ad sets |
| Audience too small | Broaden targeting |
| High CPA event with low budget | Optimize for earlier funnel event |
| Frequent edits resetting learning | Stop editing, wait 7 days |
| Creative oversaturation | Fresh creative can reinvigorate delivery |

### Should You Wait or Intervene?

| Situation | Wait or Act |
|-----------|------------|
| In "Learning" for <7 days with reasonable CPA | Wait |
| In "Learning" for 7-14 days, CPA within 50% of target | Wait (but prepare intervention) |
| In "Learning Limited" for 7+ days | Act (consolidate or adjust) |
| In "Learning" with CPA 2x+ target after 20+ events | Act (creative or audience issue) |
| Just launched, <48 hours | Always wait |

---

## 4. Delivery Insights

### How to Access

Ad set level > Click on the ad set name > Delivery Insights tab (or hover over Delivery column)

### Key Delivery Insights Metrics

| Metric | What It Tells You |
|--------|-------------------|
| **Audience saturation** | Whether your audience is being exhausted (high first-time impression ratio = healthy) |
| **Auction competition** | Whether your auction costs are rising due to competition |
| **Auction overlap** | Whether your ad sets are competing against each other |
| **Budget spending** | Whether you're budget-constrained or under-spending |
| **Audience reached** | What percentage of your target audience has been reached |

### Interpreting Delivery Insights

**"Audience saturation: High"**
- You've reached most of your target audience
- Frequency is likely high
- Action: expand audience or rotate creative

**"Auction competition: Increasing"**
- More advertisers competing for the same audience
- CPMs rising regardless of your actions
- Action: differentiate creative, consider shifting budget to less competitive audiences

**"Auction overlap: Active"**
- Your own ad sets are competing against each other
- Meta only enters one ad set per auction for the same advertiser
- Action: consolidate overlapping ad sets

**"Budget: Limited"**
- You could spend more and maintain CPA
- Algorithm is leaving profitable impressions on the table
- Action: increase budget by 20%

---

## 5. Ad Review and Approval Delays

### Standard Review Timeline

| Account Type | Typical Review Time |
|-------------|-------------------|
| Established account (good history) | <1 hour |
| Established account (some flags) | 2-12 hours |
| New account | 12-24 hours |
| Account with recent violations | 24-72 hours |
| First ad ever on the account | Up to 72 hours |

### Accelerating Review

- Ensure Business Verification is complete
- Maintain a clean policy history (violations slow future reviews)
- Avoid launching many ads simultaneously on a new account (triggers extra scrutiny)
- Do not duplicate rejected ads to try again (this flags your account)
- If review is stuck >72 hours: contact Meta support via Business Help Center

### Partial Delivery During Review

- Some placements may start delivering while others are still in review
- Instagram placements sometimes have separate review from Facebook
- Audience Network has its own review process
- Don't judge performance until all placements are approved and delivering

---

## 6. Platform-Level Delivery Issues

### Recognizing Platform-Wide Issues

| Signal | How to Confirm |
|--------|---------------|
| All campaigns suddenly underperforming | Check industry groups, Twitter, Meta Status page |
| Reporting delays | Events Manager shows data gaps |
| Ads Manager slow or erroring | Meta Status page (status.fb.com) |
| CPMs spiked across all campaigns simultaneously | External factor, not account-specific |

### What to Do During a Platform Issue

1. **Do not make changes.** Changes made during platform issues often make things worse when the platform recovers
2. **Document the timeline.** Note when the issue started, what metrics were affected
3. **Check Meta's status page** (status.fb.com or Meta for Business status)
4. **Wait for resolution.** Most platform issues resolve within 2-24 hours
5. **After resolution:** Compare 7-day performance before vs after, adjust reporting to exclude the disrupted period

### Known Recurring Platform Issues

- **Monthly billing cycle spikes:** Accounts near their billing threshold may experience brief delivery pauses
- **API version updates:** Major API releases (e.g., v25.0) can cause temporary reporting or delivery disruptions
- **Seasonal infrastructure load:** Black Friday week, major elections, and global events can cause platform slowdowns
- **Pixel processing delays:** During high-traffic periods, pixel event processing can be delayed 4-8 hours (affects real-time reporting but not delivery)
