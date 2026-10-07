# Pacing Diagnostics - Delivery Issues and Resolution

## Understanding Pacing

Meta aims to spend your budget evenly throughout the day ("standard delivery"). In practice, delivery fluctuates based on auction competition, audience availability, and algorithm decisions.

**Healthy pacing:** 80-100% of daily budget spent, relatively evenly distributed across hours.

---

## Diagnostic Framework

### Symptom 1: Spending 100% of Budget Too Early

**What's happening:** Budget exhausted by noon or early afternoon.

**Causes and fixes:**

| Cause | Diagnosis | Fix |
|-------|-----------|-----|
| Budget too low for audience | Large audience + low budget = Meta exhausts cheap opportunities fast | Increase budget or narrow audience |
| Bid too generous | Cost Cap/Bid Cap set too high, winning every auction | Lower cap by 10-15% |
| Peak hours concentration | Audience most active in morning, Meta spends there | Normal behavior -- if CPA is good, this is fine |
| Campaign recently scaled | Algorithm still adjusting to new budget level | Wait 2-3 days for stabilization |

**Impact:** Missing eveninglate_night conversions. Total daily conversions may be lower than achievable.

### Symptom 2: Spending Only 40-60% of Budget

**What's happening:** Significant budget left unspent daily.

**Causes and fixes:**

| Cause | Diagnosis | Fix |
|-------|-----------|-----|
| Cost Cap too restrictive | Check: is CPA near your cap? | Raise Cost Cap by 15-20% |
| Bid Cap too low | Check: is delivery near $0 on some days? | Raise Bid Cap by 10-15% |
| Audience too small | Check: audience size <100K | Broaden targeting |
| Creative not resonating | Check: CTR below 0.5% | Refresh creative |
| Ad set in learning | Check: "Learning" status | Wait for learning to complete |
| Policy/quality issues | Check: ad relevance score, policy flags | Fix compliance issues |
| Competition spike | Check: CPM significantly higher than baseline | Temporary -- wait or raise bid |

### Symptom 3: Spending $0

**What's happening:** No delivery at all.

**Causes and fixes:**

| Cause | Diagnosis | Fix |
|-------|-----------|-----|
| Ad rejected | Check ad review status | Fix the policy violation and resubmit |
| Bid Cap at $0 or near $0 | Check bid settings | Set realistic bid |
| Audience size too small | Check estimated audience size | Broaden targeting |
| Schedule conflict | Check ad set schedule | Verify schedule covers current time |
| Payment issue | Check billing in Business Settings | Update payment method |
| Account restriction | Check account quality | Appeal if incorrectly flagged |
| Campaign paused | Check campaign/ad set/ad status | Verify all levels are active |

### Symptom 4: Extreme Day-to-Day Variance

**What's happening:** Spending $800 one day, $200 the next, $600 the day after.

**Causes and fixes:**

| Cause | Diagnosis | Fix |
|-------|-----------|-----|
| Bid Cap strategy | Bid Cap inherently creates delivery inconsistency | Switch to Cost Cap for more stable delivery |
| Small audience | Audience <500K with moderate budget | Broaden audience |
| Low budget | Budget barely above minimum viable | Increase to 5x+ CPA |
| Auction volatility | CPM swings >30% day-to-day | Normal in competitive auctions, monitor weekly not daily |
| Learning phase | Ad set showing "Learning" status | Wait for learning to complete |
| Weekday/weekend pattern | B2B audiences less active on weekends | Normal -- evaluate weekly averages |

### Symptom 5: Weekend Delivery Drop

**What's happening:** Spend drops significantly on Saturday/Sunday.

**Analysis:**
- B2B: Normal. Business decision-makers are less active.
- E-commerce: Unusual. Investigate.
- Both: Check if conversions also drop proportionally.

**Fixes:**
- If conversions drop proportionally (same CPA): Meta is correctly reducing spend on low-opportunity days. This is good.
- If CPA is higher on weekends: Consider reducing weekend budget by 30-40% and reallocating to weekdays.
- If CPA is lower on weekends (e-commerce): Increase weekend budget.

---

## Pacing Analysis Methodology

### Daily Pacing Report

Pull these metrics daily for each active campaign:

| Metric | Where to Find | What to Check |
|--------|--------------|---------------|
| Daily spend | Campaign level | % of budget spent |
| Daily conversions | Campaign level | Volume trend |
| Daily CPA | Campaign level | Variance from target |
| Hourly breakdown | Ad set level > Breakdown > Time of Day | Even distribution? |
| Delivery status | Ad set level | "Active," "Learning," "Learning Limited" |
| Frequency | Ad set level, last 7 days | Trending up? |

### Weekly Pacing Report

| Metric | Calculation | Healthy Range |
|--------|-------------|---------------|
| Budget utilization | Total spend / (Daily budget x 7) | 80-100% |
| CPA variance | (Max daily CPA - Min daily CPA) / Avg CPA | <40% |
| Delivery consistency | Std deviation of daily spend / Avg daily spend | <25% |
| Weekend drop-off | Weekend avg spend / Weekday avg spend | >60% (B2B), >80% (B2C) |
| Conversion volume trend | This week conversions / Last week | >90% (stable) |

---

## Budget Utilization Optimization

### Maximizing Spend Efficiency

**If consistently under-spending (60-80% utilization):**
1. Raise bid/cap incrementally (10% at a time)
2. Broaden audience
3. Add more placements (switch to Advantage+ Placements if not already)
4. Add more creative (more ads = more auction opportunities)
5. If none work: lower your budget to match actual delivery (reallocate to other campaigns)

**If consistently over-spending (only possible with lifetime budgets or CBO):**
1. This is usually fine -- Meta optimizes for best opportunities
2. If CPA is above target: add cost controls
3. If CPA is on target: let it run (the algorithm found opportunities)

### Campaign Budget Optimization (CBO) Pacing

In CBO campaigns, Meta distributes budget across ad sets unevenly. This is by design.

**Common CBO pacing patterns:**
- One ad set gets 70-80% of budget: This ad set is the best performer. Normal.
- Ad set gets $0: This ad set can't compete with others in the campaign. Pause it or improve it.
- Budget distribution shifts daily: Algorithm is testing. Give it 7 days.

**If CBO over-concentrates:**
- Set minimum spend per ad set (10-20% of campaign budget each)
- But be careful: forcing spend into underperforming ad sets wastes money
- Only set minimums when you have a strategic reason (e.g., testing a new audience that needs budget to learn)

---

## Seasonal Pacing Adjustments

### Annual CPM Calendar (US, approximate)

| Month | CPM Index | Notes |
|-------|-----------|-------|
| January | 70-80 | Cheapest CPMs. Advertisers pulling back post-holiday. |
| February | 80-90 | Gradual increase. Valentine's Day minor spike. |
| March | 85-95 | Normal. Q1 end budget pushes. |
| April | 85-95 | Normal. |
| May | 90-100 | Approaching summer, moderate competition. |
| June | 90-100 | Summer lull begins for some categories. |
| July | 85-95 | Summer. B2B dips, B2C travel/leisure rises. |
| August | 90-100 | Back-to-school for e-commerce. |
| September | 95-105 | Q4 ramp begins. |
| October | 100-115 | Halloween, early holiday shopping. |
| November | 115-140 | Peak. BFCM drives CPMs to annual highs. |
| December | 110-130 | High through mid-December, drops after Christmas. |

**Index = 100 represents annual average CPM.**

### Adjusting Budget for CPM Seasons

**Q1 (low CPMs):**
- Good time to test new creative and audiences (cheaper data)
- Maintain or slightly increase testing budget
- Scale core campaigns if CPA is favorable

**Q4 (high CPMs):**
- Expect 15-40% higher CPMs
- Raise bid caps/cost caps by 10-20% to maintain delivery
- Increase budget if ROAS/CPA still meets targets at higher CPMs
- Focus on highest-converting creative (less room for testing)

---

## Troubleshooting Checklist

When facing delivery issues, work through this checklist in order:

1. [ ] Is the ad approved? (Check ad review status)
2. [ ] Is the payment method working? (Check billing)
3. [ ] Is the audience >10K? (Check estimated reach)
4. [ ] Is the budget >1x CPA per day? (Check minimum viable budget)
5. [ ] Is the bid realistic? (Compare to other campaigns' actual CPA)
6. [ ] Is the ad set in learning? (Check delivery status)
7. [ ] Are there policy warnings? (Check ad quality)
8. [ ] Is creative performing? (Check CTR, hook rate)
9. [ ] Is the landing page loading? (Click through and verify)
10. [ ] Has anything changed recently? (Budget, bid, audience edits)

If all 10 items check out and delivery is still poor: the audience at this price point may be exhausted. Consider new creative, new audience, or acceptance that you've hit a ceiling.
