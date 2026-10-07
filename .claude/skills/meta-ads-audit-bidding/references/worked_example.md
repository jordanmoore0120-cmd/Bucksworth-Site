# Worked Example: audit-bidding

## Scenario

**Account:** FreshMeal Co (e-commerce, meal prep kits)
**Maturity:** Developing (upgrading from Nascent)
**Monthly spend:** $30K
**Target CPA:** $52 (Purchase)
**Active campaigns:** 4, all using Lowest Cost
**Monthly conversions:** ~580

---

## Step 0: Dependencies Loaded

From bidding-methodology:
- Developing account recommended default: Lowest Cost with Cost Cap on top spenders
- Cost Cap guideline: set at target CPA + 15-25%
- Learning phase exit: 50 conversions per ad set in 7 days

From account-maturity:
- Developing: moderate scaling, introduce cost controls gradually

---

## Step 1: Data Retrieved

### Campaign Configuration

| Campaign | Objective | Bid Strategy | Daily Budget | Ad Sets |
|----------|-----------|-------------|-------------|---------|
| CONV_PROS_US_2025-12 | Conversions | Lowest Cost | $400 CBO | 3 |
| CONV_PROS_CA_2026-01 | Conversions | Lowest Cost | $150 CBO | 2 |
| CONV_RT_US_2025-11 | Conversions | Lowest Cost | $200 CBO | 2 |
| CONV_TEST_US | Conversions | Lowest Cost | $250 ABO | 3 |

### Daily CPA Variance (CONV_PROS_US, last 14 days)

| Day | Spend | Conversions | CPA |
|-----|-------|------------|-----|
| Day 1 | $385 | 8 | $48.13 |
| Day 2 | $410 | 6 | $68.33 |
| Day 3 | $395 | 9 | $43.89 |
| Day 4 | $400 | 5 | $80.00 |
| Day 5 | $398 | 7 | $56.86 |
| Day 6 | $405 | 10 | $40.50 |
| Day 7 | $390 | 4 | $97.50 |
| Day 8 | $402 | 8 | $50.25 |
| Day 9 | $395 | 7 | $56.43 |
| Day 10 | $410 | 6 | $68.33 |
| Day 11 | $388 | 9 | $43.11 |
| Day 12 | $400 | 5 | $80.00 |
| Day 13 | $405 | 8 | $50.63 |
| Day 14 | $392 | 7 | $56.00 |

**Average CPA:** $59.93 (15% above $52 target)
**CPA Standard Deviation:** $16.49
**Coefficient of Variation:** 27.5% (below 30% but borderline)
**CPA Range:** $40.50 - $97.50 (wild swings)

---

## Step 2: Strategy-Fit Assessment

| Campaign | Current | Recommended | Fit | Rationale |
|----------|---------|-------------|-----|-----------|
| CONV_PROS_US | Lowest Cost | Cost Cap | Mismatch | Highest spend campaign, CPA variance 27.5%, avg CPA 15% above target. Cost Cap would control upside. |
| CONV_PROS_CA | Lowest Cost | Lowest Cost | Acceptable | Lower spend, still learning the market. Keep Lowest Cost until baseline established. |
| CONV_RT_US | Lowest Cost | Lowest Cost | Optimal | Retargeting CPA ($38 avg) well below target. Lowest Cost maximizes volume. |
| CONV_TEST_US | Lowest Cost | Lowest Cost | Optimal | Testing campaign, need unconstrained delivery to evaluate creative. |

---

## Step 3: Performance vs Strategy

### CONV_PROS_US (Lowest Cost)
- Average CPA: $59.93 vs $52 target = +15.3%
- Daily CPA variance: 27.5% CoV
- Budget utilization: 98% (spending full budget)
- Performance grade: **C** (above target, high variance)
- **Issue:** Without cost control, days like Day 7 ($97.50 CPA) waste budget on expensive conversions

### CONV_PROS_CA (Lowest Cost)
- Average CPA: $61.20 vs $52 target = +17.7%
- Budget utilization: 85%
- Performance grade: **C** (above target, but young campaign)

### CONV_RT_US (Lowest Cost)
- Average CPA: $38.00 vs $52 target = -26.9%
- Budget utilization: 92%
- Performance grade: **A** (well below target, strong delivery)

### CONV_TEST_US (Lowest Cost)
- Average CPA: $72.50 (expected for testing)
- Budget utilization: 78%
- Performance grade: **B** (testing, higher CPA expected)

---

## Step 4: Learning Phase Audit

| Ad Set | Campaign | Weekly Conv | Status | Viable? |
|--------|----------|------------|--------|---------|
| BROAD_AUTO_AUTO_CBO | CONV_PROS_US | 32 | Learning | Yes (close, 64% of threshold) |
| LAL1-LTV_AUTO_AUTO_CBO | CONV_PROS_US | 18 | Learning Limited | No -- needs budget increase or merge |
| INT-COOK_AUTO_AUTO_CBO | CONV_PROS_US | 12 | Learning Limited | No -- too fragmented |
| BROAD_AUTO_AUTO_CBO | CONV_PROS_CA | 8 | Learning | Unlikely at current budget |
| LAL1-LTV_AUTO_AUTO_CBO | CONV_PROS_CA | 5 | Learning Limited | No |
| RT-WEB30_AUTO_AUTO_CBO | CONV_RT_US | 22 | Learning Limited | Borderline |
| RT-ATC7_AUTO_AUTO_CBO | CONV_RT_US | 18 | Learning Limited | No |

**Key finding:** 5 of 7 ad sets are in Learning or Learning Limited. The account is severely fragmented -- budget is spread too thin across too many ad sets.

---

## Step 5: Cost Control Analysis

No cost controls currently in place (all Lowest Cost). This step identifies what controls should be set.

**Recommended Cost Cap for CONV_PROS_US:**
- Target CPA: $52
- Recommended cap: $52 * 1.20 = $62 (20% above target)
- This would have prevented 4 of 14 days where CPA exceeded $62
- Estimated savings: ~$380 redirected from inefficient auctions

---

## Step 6: Migration Plan

### Phase 1: Week of April 1

**Campaign:** CONV_PROS_US
**Change:** Lowest Cost -> Cost Cap
**New Cap:** $62 (target $52 + 19%)

Pre-change baseline:
- 7-day avg CPA: $59.93
- 7-day avg daily spend: $399
- 7-day conversion volume: 49

Success criteria: CPA <$62, spending >$280/day (70%)
Rollback: CPA >$90 for 3 days, or spend <$160/day

### Phase 2: Week of April 15 (after Phase 1 stabilizes)

**Campaign:** CONV_PROS_CA
**Change:** No strategy change yet. Instead, consolidate 2 ad sets into 1 to fix Learning Limited. Re-assess strategy after consolidation.

### Phase 3: Week of April 29

**Campaign:** CONV_PROS_CA
**Change:** If post-consolidation CPA is stable, add Cost Cap at $62

### No Change
- CONV_RT_US: CPA well below target, Lowest Cost is optimal
- CONV_TEST_US: Testing requires unconstrained delivery

---

## Projected Impact

| Metric | Current | After Phase 1 | After All Phases |
|--------|---------|---------------|-----------------|
| Blended CPA | $59.93 | ~$55 | ~$52 |
| Daily CPA variance | 27.5% | ~18% | ~15% |
| Days with CPA >$70 | 4/14 (29%) | ~1/14 (7%) | ~1/14 (7%) |
| Total monthly conversions | ~580 | ~580 (maintained) | ~600 (improved efficiency) |
