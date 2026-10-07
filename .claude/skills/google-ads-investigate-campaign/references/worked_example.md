# Worked Example: CleanPro Carpet Cleaning Campaign

A fictional walkthrough of the investigate-campaign process for a home services company. This example demonstrates how the diagnostic methodology works in practice, including dead ends and the importance of checking branches in order.

## Background

**Company:** CleanPro Home Services (fictional)
**Account type:** Lead generation
**Campaign:** "Carpet Cleaning - Search" (tCPA bidding, $45 target)
**Problem reported:** "Our CPA jumped from $45 to $82 this week. What happened?"

## Step 0: Identify the Target

- Campaign: "Carpet Cleaning - Search" (Campaign ID: 12345678)
- Account maturity: Developing (25 conversions/month, basic tracking, single conversion action)
- KPI: CPA (target $45)
- User observation: CPA nearly doubled in one week

## Step 1: Data Acquisition

Data pulled for two periods:
- Problem period: Mar 17-23 (Week 12)
- Comparison period: Mar 10-16 (Week 11)

## Step 2: Establish the Problem

| Metric | Week 11 | Week 12 | Change |
|--------|---------|---------|--------|
| Impressions | 4,200 | 4,150 | -1.2% |
| Clicks | 320 | 305 | -4.7% |
| CTR | 7.6% | 7.3% | -0.3pp |
| Avg CPC | $4.22 | $4.35 | +3.1% |
| Cost | $1,350 | $1,327 | -1.7% |
| Conversions | 30 | 16 | -46.7% |
| Conv. Rate | 9.4% | 5.2% | -4.2pp |
| CPA | $45.00 | $82.94 | +84.3% |

**Variance check:** +84.3% CPA increase far exceeds the 20% significance threshold. This is a real problem, not noise. The campaign has ~30 conversions/month, which is on the border of reliable WoW data but sufficient given the magnitude of the change.

**Problem statement presented to user:**
> The "Carpet Cleaning - Search" campaign's CPA increased from $45.00 to $82.94 (+84.3%) comparing Week 12 to Week 11. Conversions dropped 46.7% while cost remained essentially flat (-1.7%). This is a conversion-side problem. The change far exceeds normal variance and warrants full investigation.

## Step 3: Funnel Decomposition

| Stage | Metric | Week 11 | Week 12 | Change | Signal? |
|-------|--------|---------|---------|--------|---------|
| Visibility | Impressions | 4,200 | 4,150 | -1.2% | No |
| Visibility | Search IS | 62% | 61% | -1pp | No |
| Engagement | Clicks | 320 | 305 | -4.7% | No |
| Engagement | CTR | 7.6% | 7.3% | -0.3pp | No |
| Conversion | Conversions | 30 | 16 | -46.7% | **YES** |
| Conversion | Conv. Rate | 9.4% | 5.2% | -4.2pp | **YES** |

**Finding:** The break is at the conversion stage. Impressions, clicks, and CTR are all within normal variance. The problem is that clicks are not converting.

## Step 4: Rate vs Volume Decomposition

CPA = Cost / Conversions

- Cost: $1,350 to $1,327 (-1.7%). Cost-side is stable.
- Conversions: 30 to 16 (-46.7%). Conversion-side collapsed.

**Finding:** This is entirely a conversion-side problem. The cost structure of the campaign is unchanged. Something happened to prevent clicks from turning into conversions.

## Step 5: Walk the Diagnostic Tree

### Branch 1: Measurement

**Check:** Is conversion tracking working?

**Data pulled:**
- Conversion action status: Active, last conversion recorded Mar 22
- Tag Assistant: Tag firing correctly on thank-you page
- Change history (conversion actions): Three entries found

**Change history entries for conversion actions:**

| Date | Change | User |
|------|--------|------|
| Mar 3 | Conversion counting changed from "One" to "Every" | admin@cleanpro.com |
| Mar 18 | Conversion counting changed from "Every" to "One" | admin@cleanpro.com |
| Mar 18 | Conversion action name changed from "Form Submit" to "Lead Form Submit" | admin@cleanpro.com |

**Analysis:** On Mar 3, the conversion action counting was changed from "One" (count one conversion per click) to "Every" (count every conversion per click). For a lead gen form, "One" is correct because repeat submissions from the same click are not separate leads. On Mar 18, this was reverted back to "One" and the action was also renamed.

The tag is firing. Conversions are being recorded. But the conversion action was modified twice in the relevant window. This is a significant finding.

**Status: Contributing factor identified.** The conversion action was modified. This does not directly explain why conversions dropped (the tag is still working), but it is important context for the bidding branch.

### Branch 2: Auction

**Data pulled:** Auction Insights comparison

| Competitor | IS (W11) | IS (W12) | Change |
|-----------|----------|----------|--------|
| CleanPro | 62% | 61% | -1pp |
| competitor-a.com | 45% | 47% | +2pp |
| competitor-b.com | 38% | 36% | -2pp |

**Finding:** No significant competitive shifts. No new entrants. IS and CPC changes are within normal variance.

**Status: Ruled out.**

### Branch 3: Targeting

**Data pulled:** Search terms report comparison

Top search terms are consistent between periods. No new irrelevant query clusters. Match type distribution unchanged.

**Status: Ruled out.**

### Branch 4: Creative

**Data pulled:** CTR trend, ad status

CTR dropped marginally (-0.3pp), within normal variance. No ad disapprovals. RSA asset ratings unchanged.

**Status: Ruled out.**

### Branch 5: Landing Page

**Data pulled:** Landing page conversion rate, page load speed, visual check

This is where you would expect the issue given that the funnel broke at the conversion stage. However:
- Page loads in 2.1 seconds (no change)
- Form submits successfully (tested manually)
- No visual changes to the page
- No A/B test running

**Status: Ruled out.** The landing page is working correctly.

### Branch 6: Budget

Lost IS (budget) is 8% in both periods. Budget is not the issue.

**Status: Ruled out.**

### Branch 7: Bidding

**This is where the pieces come together.**

**Data pulled:** Bid strategy status, bid strategy change history

- Bid strategy: Target CPA ($45)
- Bid strategy status: **Learning** (since Mar 18)
- No bid strategy type or target change was made

**But:** The conversion action was modified on Mar 18 (counting changed, action renamed). Google treats conversion action changes as a significant signal change for smart bidding. When the conversion action was modified, the tCPA strategy entered a new learning period, even though the bid strategy itself was not changed.

**Why conversions dropped:** During the learning period, the algorithm experiments with bids more aggressively, leading to:
- Less efficient bid allocation
- More variability in auction outcomes
- Higher effective CPAs while the system recalibrates

**Additional context:** The original counting change on Mar 3 (One to Every) would have temporarily inflated conversion counts, causing the algorithm to believe its CPA was lower than it actually was. When the change was reverted on Mar 18, the algorithm's model was based on inflated data, and it now needs to relearn with accurate conversion signals.

**Status: Confirmed root cause.**

### Branch 8: External

YoY data shows no seasonal dip for this period. No market events identified.

**Status: Ruled out.**

## Step 6: Attribution Check

- Conversion lag: Lead gen has 7-14 day lag. Week 12 data is only 4-7 days old. Some conversions may still attribute.
- Estimated impact of lag: possibly 3-5 additional conversions, which would bring CPA to ~$63. Still elevated, but less extreme than $82.94.
- Note: conversion lag partially explains the magnitude but does not explain the trend. The root cause remains the bidding disruption.

## Step 7: Competitive Analysis

Already addressed in Branch 2. No competitive factors identified.

## Step 8: Root Cause Identification

```
Symptom: CPA increased 84% ($45 to $82.94) in one week
    |
Data: Conversions dropped 46.7% while cost was flat. Break is at the conversion stage.
    |
Evidence: Conversion action was modified twice (Mar 3: counting changed, Mar 18: counting reverted + renamed).
         The Mar 18 change triggered a tCPA learning period.
         The Mar 3 change had given the algorithm inflated conversion data for 2 weeks.
         The revert compounded the disruption by resetting learning on a model built from bad data.
    |
Root Cause: Conversion action changes triggered a tCPA learning period. The algorithm is recalibrating
           with correct conversion signals after 2 weeks of inflated data.
    |
Confidence: High. Timing of conversion action changes aligns exactly with performance shift.
           All other diagnostic branches ruled out.
```

## Step 9: Resolution Recommendation

| Priority | Action | Rationale | Expected Impact | Timeline |
|----------|--------|-----------|-----------------|----------|
| Critical | Do not make additional changes to the campaign | Further changes extend the learning period | Prevents additional disruption | Immediate |
| High | Set temporary tCPA to $55 (20% above historical $45) | Gives algorithm room to recover without overly constrained target | Faster exit from learning, gradual CPA reduction | 7-10 days |
| High | Communicate to admin@cleanpro.com: do not modify conversion actions without notifying the ads team | Prevents recurrence | Eliminates this failure mode going forward | This week |
| Medium | After learning completes, gradually lower tCPA back to $45 in $5 increments weekly | Avoids re-triggering aggressive learning by jumping straight to the old target | Smooth return to target CPA | 2-4 weeks post-recovery |
| Low | Set up a change history alert for conversion action modifications | Early warning for future disruptions | Faster detection | When capacity allows |

**Monitoring plan:**
- Check CPA daily for 10 days
- By Day 7-10, CPA should begin trending toward $55 target
- By Day 20-25, CPA should be near the original $45 target

**Escalation trigger:** If CPA does not improve by Day 10, re-investigate Branch 1 (measurement). The conversion action changes may have caused a deeper tracking issue that was not visible in the initial check.

## Step 10: Summary

The "Carpet Cleaning - Search" campaign experienced an 84% CPA increase in Week 12, driven entirely by a 47% drop in conversions while cost remained flat. Root cause: the conversion action was changed from "One" to "Every" counting on March 3 (inflating conversion data for two weeks), then reverted and renamed on March 18, which triggered a tCPA learning period built on inaccurate historical data. Primary recommendation: temporarily raise the tCPA target to $55, make no further changes, and allow the learning period to complete over the next 7-10 days. Prevent recurrence by requiring ads team notification before any conversion action modifications.

## Key Lessons from This Example

1. **The root cause was not in the most obvious branch.** The funnel broke at conversions, which points to the landing page. But the landing page was fine. The real cause was in a different branch entirely (bidding), triggered by a change in yet another branch (measurement/conversion action).

2. **Change history is the most powerful diagnostic tool.** The conversion action changes in the change history were the smoking gun. Always check change history early.

3. **Compounding changes create complex problems.** The March 3 counting change was the original error. The March 18 revert fixed the error but created a new problem (learning period with bad historical data). Each change compounds.

4. **"Don't touch anything" is sometimes the best recommendation.** The instinct is to "fix" a struggling campaign by making changes. In a learning period, additional changes make things worse, not better.

5. **Conversion lag softens the blow.** The $82.94 CPA will improve to approximately $63 as remaining conversions attribute. Still bad, but not as catastrophic as the initial data suggested. Always account for lag before reacting.
