# Learning Phase - Triggers, Management, and Recovery

## What Is the Learning Phase

The learning phase is Meta's algorithmic exploration period. When a new campaign, ad set, or significant change is made, Meta's delivery system needs to explore different audience segments, placements, and timing to find optimal performance. During this period, performance is typically unstable and 20-50% worse than post-learning.

## Completion Criteria

**Standard:** ~50 optimization events within a 7-day window

- "Optimization event" = whatever you're optimizing for (purchase, lead, signup, etc.)
- The 7-day window is rolling -- Meta looks at the last 7 days continuously
- Once 50 events are reached, the ad set exits learning

**What counts as an optimization event:**
- If optimizing for Purchase: each purchase = 1 event
- If optimizing for Leads: each lead = 1 event
- If optimizing for Landing Page Views: each landing page view = 1 event
- If optimizing for Link Clicks: each link click = 1 event

## What Triggers Learning Phase

### Full Reset (Complete Re-Learning)

These changes reset the learning phase entirely, requiring a fresh 50 events:

| Change | Impact | Avoidable? |
|--------|--------|-----------|
| New campaign created | Full reset | No (expected) |
| New ad set created | Full reset | No (expected) |
| Conversion event changed | Full reset | Avoid unless necessary |
| Bid strategy changed (e.g., Lowest Cost to Cost Cap) | Full reset | Plan carefully |
| Audience changed significantly | Full reset | Avoid mid-flight |
| Campaign switched from ABO to CBO (or vice versa) | Full reset | Major structural change |
| Ad set paused for 7+ days then reactivated | Full reset | Avoid long pauses |

### Partial Reset (Disruption, Not Full Reset)

These changes disrupt learning but don't fully reset it:

| Change | Impact | Guideline |
|--------|--------|-----------|
| Budget increase >20% | Partial re-learning | Keep increases to 20% max |
| Budget decrease >20% | Partial re-learning | Reduce gradually if needed |
| Bid amount/cap changed | Partial re-learning | Adjust no more than 10-15% at a time |
| New ads added to ad set | Minor disruption | Generally OK, algorithm incorporates quickly |
| Ads paused (low spend share) | Minimal disruption | Fine to pause low-spend ads |
| Ads paused (high spend share) | Moderate disruption | See Breakdown Effect |
| Placement changes | Partial re-learning | Avoid unless necessary |
| Schedule changes | Minimal disruption | Generally OK |

### No Reset

These changes do NOT trigger re-learning:

| Change | Notes |
|--------|-------|
| Ad name change | Cosmetic only |
| Campaign name change | Cosmetic only |
| UTM parameter update | Doesn't affect delivery |
| Adding new ads (without pausing existing) | Algorithm tests new ads within existing delivery |
| Budget increase <20% | Within Meta's acceptable range |
| Manual bid adjustment <10% | Minor enough to absorb |

---

## Managing the Learning Phase

### During Learning (Days 1-7)

**Do:**
- Monitor daily at the ad set level
- Track conversion volume (are you on pace for 50 in 7 days?)
- Note CPA but don't react to it (learning CPA is not representative)
- Keep the campaign running even if CPA is high

**Don't:**
- Change budget
- Change bid strategy or bid amount
- Change audience targeting
- Pause the ad set (resets the clock)
- Add or remove ads (minor disruption but avoid if possible)
- Compare learning-phase CPA to post-learning benchmarks

### Expected Performance During Learning

| Metric | Expected During Learning | Post-Learning |
|--------|------------------------|---------------|
| CPA | 20-50% above target | At or near target |
| Daily CPA variance | High (50-100% day-to-day swings) | Low (10-20% variance) |
| Delivery consistency | Uneven (some days spend 150%, others 50%) | Even (80-100% daily) |
| CTR | May be lower (algorithm testing poor segments) | Higher (optimized segments) |
| CPM | May be higher (exploring expensive placements) | Optimized |

### When Learning Phase Isn't Completing

**Symptom:** "Learning Limited" status appears after 7 days

**Diagnosis and fixes:**

| Cause | Indicator | Fix |
|-------|-----------|-----|
| Budget too low | <50 events/week possible at current budget | Increase budget to 5-10x CPA per day |
| Audience too small | Audience size <100K | Broaden targeting |
| Conversion event too rare | <5 events/day expected | Optimize for higher-funnel event |
| Too many ad sets | Budget spread across 6+ ad sets | Consolidate to 2-3 ad sets |
| Bid too restrictive | Cost Cap or Bid Cap too low | Raise by 15-25% |
| Creative not resonating | Low CTR across all ads | Improve creative quality |

### "Learning Limited" is Not Always Bad

If your ad set is "Learning Limited" but delivering at your target CPA:
- It's fine. Leave it alone.
- "Learning Limited" means Meta can't fully optimize, not that it can't deliver
- Some niche B2B audiences will always be Learning Limited due to audience size
- Focus on CPA, not learning status

---

## Learning Phase Recovery

### After Failed Learning (CPA Never Reached Target)

If the ad set completed or timed out of learning and CPA is still 30%+ above target:

**Step 1: Diagnose**
- Is the audience right? Check demographics and placement breakdown.
- Is the creative performing? Check hook rate, CTR, hold rate.
- Is the bid realistic? Compare to other campaigns' actual CPA.
- Is the landing page converting? Check landing page conversion rate.

**Step 2: Fix (one change at a time)**
- If creative issue: add 3-5 new ads (doesn't reset learning)
- If audience issue: create a new ad set with a different audience (resets learning, but that's the fix)
- If bid issue: raise cap by 15-20% (partial reset, but necessary)
- If landing page issue: fix the LP (doesn't affect Meta's learning)

**Step 3: If nothing works after 2 fix attempts**
- Kill the ad set
- Rebuild with different creative + different audience
- The combination wasn't viable. Don't throw more budget at it.

### After Accidental Reset

If you accidentally triggered a re-learning (edited budget >20%, changed targeting):

1. Don't panic. Don't make more changes.
2. Let it re-learn for the full 7 days.
3. The ad set has historical data -- re-learning is usually faster than initial learning.
4. Expected re-learning CPA increase: 10-30% (less than initial learning).
5. If CPA returns to target within 7 days: resume normal management.
6. If CPA doesn't recover: the change you made may have fundamentally altered the campaign dynamics.

---

## Learning Phase Budget Calculator

To exit learning, you need ~50 events in 7 days = ~7 events/day.

| Target CPA | Events Needed/Day | Minimum Daily Budget | Recommended Budget |
|------------|------------------|---------------------|-------------------|
| $10 | 7 | $70 | $100-150 |
| $25 | 7 | $175 | $250-375 |
| $50 | 7 | $350 | $500-750 |
| $100 | 7 | $700 | $1,000-1,500 |
| $200 | 7 | $1,400 | $2,000-3,000 |
| $500 | 7 | $3,500 | $5,000-7,500 |

For high-CPA events ($200+), consider optimizing for a higher-funnel event to exit learning faster, then switch to the deeper event once you have sufficient data.

---

## Learning Phase Checklist

### Pre-Launch
- [ ] Budget set to minimum 5x CPA per ad set per day
- [ ] Audience size is large enough (>100K for most objectives)
- [ ] Conversion event fires correctly (verified in Events Manager)
- [ ] Creative is ready (don't plan to add/remove during learning)
- [ ] Bid strategy and amount are set (don't plan to change during learning)
- [ ] Team is informed: no changes for 7 days

### During Learning
- [ ] Day 1-2: Check delivery is happening (spend >$0)
- [ ] Day 3-4: Check conversion volume (on pace for 50?)
- [ ] Day 5-7: Monitor CPA trend (improving?)
- [ ] No edits made to budget, bid, audience, or creative
- [ ] Conversion events verified in Events Manager (still firing?)

### Post-Learning
- [ ] Learning phase status: "Active" (not "Learning Limited")
- [ ] CPA within target range (or within 20%)
- [ ] Delivery is consistent (daily spend within 20% of budget)
- [ ] Ready for gradual scaling (20% budget increase every 3-4 days)
