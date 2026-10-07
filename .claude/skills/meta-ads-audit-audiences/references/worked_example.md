# Worked Example: audit-audiences

## Scenario

**Account:** CloudSync Pro (SaaS, project management tool)
**Maturity:** Established
**Monthly spend:** $100K
**Target CPA:** $85 (free trial signup)
**Active ad sets:** 8 across 3 campaigns
**Custom audiences:** 6

---

## Step 0: Dependencies Loaded

Account conventions confirm:
- Primary KPI: CPA (Lead / CompleteRegistration)
- Advantage+ enabled on 2 ad sets
- Exclusion audiences defined: Trial signups 180d, Paid subscribers
- LAL sources: Paid subscribers, Trial-to-paid converters, High-engagement visitors

---

## Step 1: Data Retrieved

### Ad Set Inventory

| Ad Set | Campaign | Targeting | Audience Size | Reach (14d) | Freq | CPA | Spend |
|--------|----------|-----------|---------------|-------------|------|-----|-------|
| BROAD_AUTO_LCAP95_CBO | CONV_PROS_US | Broad, 25-55, US | 85M | 2.1M | 1.4 | $72 | $12,800 |
| LAL1-PAID_AUTO_LCAP95_CBO | CONV_PROS_US | LAL 1% Paid Subs | 2.1M | 620K | 2.6 | $68 | $9,400 |
| LAL1-TRIAL_AUTO_LCAP95_CBO | CONV_PROS_US | LAL 1% Trial Conv | 2.1M | 580K | 2.8 | $78 | $7,200 |
| LAL3-PAID_AUTO_LCAP95_CBO | CONV_PROS_US | LAL 3% Paid Subs | 6.3M | 890K | 2.1 | $82 | $6,100 |
| INT-SAAS_AUTO_LCAP95_CBO | CONV_PROS_US | Interest: SaaS Tools | 8.4M | 710K | 1.8 | $91 | $4,800 |
| RT-WEB30_AUTO_AUTO_CBO | RT_US | Website Visitors 30d | 180K | 95K | 5.2 | $42 | $3,200 |
| RT-TRIAL7_AUTO_AUTO_CBO | RT_US | Trial Users 7d (no convert) | 12K | 8.5K | 8.1 | $38 | $1,800 |
| ASC_US | ASC_US | Advantage+ Shopping | N/A | 1.8M | 1.6 | $76 | $4,700 |

---

## Step 2: Overlap Analysis

### Overlap Detection

**LAL1-PAID x LAL1-TRIAL: ~70% overlap (Critical)**
Both LAL 1% audiences from the same account with heavily correlated seed audiences (paid subscribers and trial converters have significant overlap). These two ad sets compete directly in the auction.

**LAL1-PAID x LAL3-PAID: ~85% overlap (Critical)**
LAL 3% fully contains LAL 1%. Every LAL 1% user is also in LAL 3%. The LAL 1% ad set and LAL 3% ad set are bidding against each other for the LAL 1% audience.

**LAL3-PAID x INT-SAAS: ~25% overlap (Moderate)**
Some SaaS interest users are also in the LAL 3% audience. Acceptable overlap.

**BROAD x Everything: Inherent overlap**
Broad targeting overlaps with all specific audiences by definition. This is expected and managed by Advantage+ optimization.

### Overlap Matrix

| | BROAD | LAL1-PAID | LAL1-TRIAL | LAL3-PAID | INT-SAAS | RT-WEB30 | RT-TRIAL7 |
|---|-------|-----------|------------|-----------|----------|----------|-----------|
| BROAD | -- | 100% | 100% | 100% | 100% | 100% | 100% |
| LAL1-PAID | 2% | -- | 70% | 85% | 25% | 15% | 8% |
| LAL1-TRIAL | 2% | 70% | -- | 65% | 20% | 12% | 10% |
| LAL3-PAID | 7% | 85% | 65% | -- | 30% | 18% | 10% |
| INT-SAAS | 10% | 25% | 20% | 30% | -- | 8% | 5% |

**Estimated CPM tax from LAL overlap:** ~$1,800/month (based on CPM differential in overlapping ad sets vs non-overlapping)

---

## Step 3: Saturation Analysis

| Ad Set | Freq (7d) | Freq Trend | Reach Penetration | CPM Trend | Status |
|--------|-----------|-----------|-------------------|-----------|--------|
| BROAD | 1.4 | Flat | 2.5% | Flat | Healthy |
| LAL1-PAID | 2.6 | +0.3 WoW | 30% | +8% | Warning |
| LAL1-TRIAL | 2.8 | +0.4 WoW | 28% | +12% | Warning |
| LAL3-PAID | 2.1 | Flat | 14% | Flat | Healthy |
| INT-SAAS | 1.8 | Flat | 8% | Flat | Healthy |
| RT-WEB30 | 5.2 | +0.5 WoW | 53% | +15% | Warning |
| RT-TRIAL7 | 8.1 | +1.2 WoW | 71% | +22% | Saturated |
| ASC | 1.6 | Flat | N/A | Flat | Healthy |

**Key finding:** RT-TRIAL7 is saturated -- frequency 8.1 and 71% penetration of a small (12K) audience. CPMs rising 22% WoW.

---

## Step 4: Advantage+ Analysis

ASC campaign spending $4,700/week at $76 CPA (within target):
- Estimated 60% to prospecting audiences, 40% to existing customer lookalikes
- CPA for expansion audience: ~$82 (within 20% of defined)
- Advantage+ is working efficiently

LAL1-PAID has Advantage+ Audience enabled:
- 75% of impressions to defined LAL 1%, 25% to expansion
- Expansion CPA: $88 (30% above defined CPA of $68)
- **Recommendation:** Tighten Advantage+ on this ad set -- expansion is not efficient

---

## Step 5: Exclusion Audit

| Campaign | Excludes Trial Signups? | Excludes Paid Subs? | Issues |
|----------|------------------------|--------------------|----|
| CONV_PROS_US | Yes (180d) | Yes | None |
| RT_US | Yes (paid only, 30d) | N/A (targeting them) | Missing: should exclude recent signups from RT-WEB30 to avoid overlap with RT-TRIAL7 |
| ASC_US | Cannot apply manual exclusions | N/A | Check existing customer budget cap setting |

**Missing exclusion:** RT-WEB30 should exclude users who started a trial (they're in RT-TRIAL7). Currently both ad sets may serve to trial users.

---

## Step 6: Expansion Opportunities

### Tier 1: High Confidence
1. **Consolidate LAL1-PAID + LAL1-TRIAL into one ad set** -- Remove overlap, improve learning signal. Combined budget of $16,600/14d should produce more efficient results.

### Tier 2: Medium Confidence
1. **LAL 1% from High-Engagement Visitors** -- Unused LAL source from account conventions. Website engagement correlates with trial intent.
2. **Geo expansion: UK/CA** -- English-speaking markets with SaaS adoption. Start at $50/day each.

### Tier 3: Exploratory
1. **Video Viewers 75% (LAL 1%)** -- If video ads are running, engaged viewers are a strong signal.

---

## Outputs Generated

1. **Audience Health Report** -- 3 Critical pairs, 1 saturated ad set, overall grade: C+
2. **Overlap Matrix** -- LAL1/LAL3 overlap is the primary issue
3. **Consolidation Recommendations:**
   - Merge LAL1-PAID + LAL1-TRIAL (save ~$1,800/mo CPM tax)
   - Remove LAL3-PAID (fully overlaps with LAL1-PAID, higher CPA)
   - Add exclusion to RT-WEB30
4. **Expansion Opportunities:** 2 high-confidence, 2 medium, 1 exploratory
