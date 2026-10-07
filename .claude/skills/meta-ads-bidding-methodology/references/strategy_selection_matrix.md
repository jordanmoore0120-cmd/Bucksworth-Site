# Bid Strategy Selection Matrix

## Complete Decision Matrix

### By Account Maturity + Campaign Purpose

| Account Maturity | Prospecting | Retargeting | Creative Testing | Promotions | Scaling |
|-----------------|-------------|-------------|-----------------|------------|---------|
| Nascent (<50 conv/mo) | Lowest Cost | Lowest Cost | Lowest Cost | N/A (don't run promos yet) | N/A |
| Developing (50-200) | Lowest Cost or Cost Cap | Lowest Cost | Lowest Cost | Bid Cap | Cost Cap |
| Established (200-500) | Cost Cap | Lowest Cost | Lowest Cost | Bid Cap | Cost Cap |
| Advanced (500+) | Cost Cap or Min ROAS | Lowest Cost | Lowest Cost | Bid Cap | Cost Cap or Min ROAS |

### By Business Model

| Business Model | Primary Strategy | Secondary Strategy | Notes |
|---------------|-----------------|-------------------|-------|
| E-commerce (low AOV) | Cost Cap | Lowest Cost (retargeting) | Standard setup |
| E-commerce (high AOV) | Cost Cap or Min ROAS | Bid Cap (promos) | Min ROAS if variable AOV |
| SaaS monthly | Cost Cap | Lowest Cost (testing) | Optimize for signup or trial |
| SaaS annual | Cost Cap | Min ROAS (if variable plans) | Can justify higher initial CPA |
| Lead gen (single value) | Cost Cap | Lowest Cost (testing) | All leads same value = Cost Cap |
| Lead gen (variable value) | Min ROAS | Cost Cap (backup) | Pass lead values to Meta |
| App installs | Lowest Cost or Cost Cap | N/A | App campaigns have unique dynamics |
| Marketplace | Cost Cap | Lowest Cost | Two-sided: buyer + seller campaigns |
| Info products | Min ROAS | Cost Cap | Variable product values common |

### By Campaign Objective

| Campaign Objective | Best Strategy | Avoid | Notes |
|-------------------|--------------|-------|-------|
| Sales (Purchase) | Cost Cap | N/A | Standard choice |
| Sales (Add to Cart) | Lowest Cost | Bid Cap | Higher-funnel, need volume |
| Leads (On-platform) | Cost Cap | Min ROAS (no value data) | Lead forms don't have value |
| Leads (Website) | Cost Cap | N/A | Can use Min ROAS if passing values |
| Traffic | Lowest Cost | Cost Cap (unnecessary) | Optimizing for cheap clicks |
| Awareness | Lowest Cost | All others | No conversion to constrain |
| App Install | Lowest Cost | Bid Cap | App campaigns need exploration |
| Engagement | Lowest Cost | All others | Engagement is cheap, no cost control needed |

---

## Edge Case Scenarios

### Scenario: New product launch, unknown CPA

**Problem:** You don't know what CPA to target.
**Solution:**
1. Start with Lowest Cost for 14 days
2. Collect at least 30-50 conversions
3. Calculate your average CPA
4. If CPA is acceptable: continue Lowest Cost
5. If CPA needs control: switch to Cost Cap at actual CPA + 20%

### Scenario: Scaling fast, CPA creeping up

**Problem:** Budget is increasing but CPA rises with it.
**Solution:**
1. If using Lowest Cost: switch to Cost Cap (lock in efficiency)
2. If using Cost Cap: do NOT lower the cap (you'll kill delivery)
3. Instead: improve creative (the real lever at scale)
4. Add fresh creative to the campaign before the next budget increase

### Scenario: Black Friday / major promotion

**Problem:** Need maximum delivery in a short window, but can't let CPA run wild.
**Solution:**
1. Switch to Bid Cap 2-3 days before the event
2. Set Bid Cap at your maximum acceptable CPA
3. Increase budget by 50-100% (pre-warmed over the prior 2 weeks)
4. Monitor hourly during the event
5. After event: return to Cost Cap campaigns

### Scenario: CPA is great but spending only 40% of budget

**Problem:** Cost Cap is too restrictive, leaving money on the table.
**Solution:**
1. Raise Cost Cap by 15-20%
2. Wait 3-5 days
3. If spend increases without CPA exceeding target: success
4. If CPA rises above target: lower cap back by 10%
5. Repeat until you find the sweet spot

### Scenario: Seasonal CPM spike (Q4, elections)

**Problem:** Same audience costs more in the auction.
**Solution:**
1. Raise Cost Cap by 10-20% to maintain delivery
2. Accept temporarily higher CPAs during the spike
3. Focus on creative efficiency (higher CTR = lower effective CPM)
4. Reduce non-essential spend (testing, experiments)
5. Return to normal caps when CPMs normalize

### Scenario: Testing a completely new audience

**Problem:** You don't know what CPA to expect from this audience.
**Solution:**
1. Use Lowest Cost (let Meta find the baseline)
2. Run for 7-14 days
3. Compare CPA to your established audiences
4. If within 20%: graduate to Cost Cap
5. If 50%+ higher: this audience may not be viable

### Scenario: ROAS target shifts (margin change, pricing change)

**Problem:** Your breakeven economics changed.
**Solution:**
1. Recalculate target CPA or ROAS based on new economics
2. Adjust Cost Cap or Min ROAS gradually (10% at a time)
3. If target became more restrictive: expect lower spend volume
4. If target became more generous: unlock new scale

---

## Strategy Transition Protocols

### Lowest Cost to Cost Cap

| Step | Action | Wait |
|------|--------|------|
| 1 | Record 14-day average CPA from Lowest Cost | -- |
| 2 | Create new campaign with Cost Cap at avg CPA + 20% | -- |
| 3 | Use same creative (Post ID), same audience | -- |
| 4 | Run both campaigns in parallel | 7 days |
| 5 | If new campaign performs: pause Lowest Cost | 3 days |
| 6 | If new campaign under-delivers: raise cap 10% | 5 days |

### Cost Cap to Minimum ROAS

| Step | Action | Wait |
|------|--------|------|
| 1 | Verify conversion value data is accurate in Events Manager | -- |
| 2 | Calculate breakeven ROAS (1 / margin %) | -- |
| 3 | Create new campaign with Min ROAS at breakeven + 10% | -- |
| 4 | Use same creative (Post ID), same audience | -- |
| 5 | Run both in parallel | 14 days |
| 6 | Compare total revenue (not just ROAS) between campaigns | -- |
| 7 | If Min ROAS drives more revenue at acceptable efficiency: shift budget | -- |

### Cost Cap to Bid Cap (for promotions)

| Step | Action | Wait |
|------|--------|------|
| 1 | Record current Cost Cap CPA | -- |
| 2 | Create new promotional campaign | -- |
| 3 | Set Bid Cap at Cost Cap CPA (not above) | -- |
| 4 | Monitor daily (Bid Cap needs close management) | -- |
| 5 | After promotion: return to Cost Cap campaigns | -- |
| 6 | Do NOT convert your evergreen campaigns to Bid Cap | -- |

---

## Bid Strategy Health Check

Run this assessment weekly:

| Check | Healthy | Warning | Action Needed |
|-------|---------|---------|--------------|
| Budget utilization | 80-100% | 60-80% | <60% (raise cap or broaden audience) |
| CPA vs target | Within 10% | 10-25% above | 25%+ above (diagnose: creative, audience, or bid?) |
| CPA stability | <15% daily variance | 15-30% variance | 30%+ variance (check learning status, bid type) |
| Learning phase | Exited | In learning (expected) | "Learning Limited" (consolidate, increase budget) |
| Delivery consistency | Even daily spend | Minor fluctuations | Extreme day-to-day swings (Bid Cap issue) |
