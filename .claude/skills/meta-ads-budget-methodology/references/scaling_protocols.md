# Scaling Protocols - Step-by-Step Guides

## Vertical Scaling Protocol

### Pre-Scaling Checklist

Before increasing budget on any campaign, confirm:

- [ ] Campaign has been out of learning phase for 7+ days
- [ ] CPA has been at or below target for the last 7 days
- [ ] Daily spend is within 80-100% of current budget
- [ ] Frequency is below 3.0 (prospecting) or 7.0 (retargeting)
- [ ] No creative fatigue signals (CTR stable, CPM stable)
- [ ] At least 3-5 active ads in the ad set (redundancy for when one fatigues)
- [ ] Fresh creative is in the pipeline (scaling accelerates fatigue)

### Step-by-Step Vertical Scaling

**Step 1: Record baseline metrics**
```
Date: [today]
Current daily budget: $[X]
7-day average CPA: $[X]
7-day average CTR: [X]%
7-day frequency: [X]
```

**Step 2: Calculate the increase**
- Target increase: 15-20%
- New budget = Current budget x 1.15 to 1.20
- Example: $500 x 1.20 = $600

**Step 3: Apply the increase**
- Change budget in Ads Manager
- Do NOT change anything else (creative, audience, bid)
- Note the date and new budget

**Step 4: Monitor (3-4 days)**
- Day 1: Check delivery is happening. CPA may spike. Normal.
- Day 2: CPA should begin to stabilize. Delivery should be close to new budget.
- Day 3: CPA should be within 10-15% of baseline.
- Day 4: If CPA is back to baseline (or within 10%), proceed to next increase.

**Step 5: Decision point**
- CPA returned to baseline within 4 days -> proceed to Step 2 (next increase)
- CPA is 10-20% above baseline after 4 days -> hold for 3 more days
- CPA is 20%+ above baseline after 7 days -> roll back to previous budget

**Step 6: Repeat until target budget reached**

### Vertical Scaling Worked Examples

**Example 1: $200/day to $500/day (Viktor prospecting)**

| Day | Budget | Change | 7-Day CPA | Action |
|-----|--------|--------|-----------|--------|
| 0 | $200 | Baseline | $48 | Record baseline |
| 1 | $240 | +20% | $52 | Monitor |
| 4 | $240 | Hold | $49 | CPA recovered, proceed |
| 5 | $288 | +20% | $53 | Monitor |
| 8 | $288 | Hold | $50 | CPA recovered, proceed |
| 9 | $346 | +20% | $55 | Monitor |
| 12 | $346 | Hold | $51 | CPA recovered, proceed |
| 13 | $415 | +20% | $56 | Monitor |
| 16 | $415 | Hold | $50 | CPA recovered, proceed |
| 17 | $500 | +20% | $54 | Monitor |
| 20 | $500 | Hold | $50 | Target reached. Stabilize. |

Total time: 20 days. Final CPA: ~$50 (4% above original baseline). This is a successful scale.

**Example 2: Scale that fails and requires rollback**

| Day | Budget | Change | 7-Day CPA | Action |
|-----|--------|--------|-----------|--------|
| 0 | $1,000 | Baseline | $45 | Record baseline |
| 1 | $1,200 | +20% | $52 | Monitor |
| 4 | $1,200 | Hold | $47 | CPA recovered, proceed |
| 5 | $1,440 | +20% | $58 | Monitor |
| 8 | $1,440 | Hold | $55 | CPA not recovered, hold |
| 11 | $1,440 | Still holding | $57 | CPA still elevated. Diagnose. |
| 12 | $1,200 | Roll back | $54 | Back to last stable budget |
| 15 | $1,200 | Hold | $47 | CPA recovered at $1,200 |

Diagnosis: At $1,440/day, frequency exceeded 3.5. Audience saturation is the bottleneck. Switch to horizontal scaling (new audiences) before trying vertical again.

---

## Horizontal Scaling Protocol

### Method 1: New Audience in Existing Campaign

**When to use:** Campaign structure is strong, you want to reach additional people without restructuring.

**Step-by-step:**
1. Identify a new audience that doesn't overlap >30% with existing ad sets
2. Create a new ad set in the existing campaign
3. Use your proven creative (Post ID) in the new ad set
4. Set ad set budget (ABO) or minimum spend (CBO) at your current proven CPA x 5
5. Let it run through learning phase (7 days, no changes)
6. Evaluate: Is CPA within 20% of your best ad set?
7. If yes: this is a new growth channel. Scale vertically.
8. If no after 14 days: this audience doesn't work. Pause and try another.

**New audience ideas:**
- Broader LAL (1% -> 3%, 3% -> 5%)
- New interest cluster
- New geographic market
- Advantage+ Audience (if not already running)
- Broad targeting (if not already running)

### Method 2: New Campaign for New Market

**When to use:** Expanding to a new country, language, or fundamentally different audience.

**Step-by-step:**
1. Duplicate your best-performing campaign structure
2. Adjust targeting for the new market (geo, language, local interests)
3. Adapt creative for the new market (language, cultural references)
4. Set budget at 50% of your proven campaign's budget
5. Use Lowest Cost bid strategy (you don't know what CPA to expect)
6. Run for 14 days
7. If CPA is within 30% of your core market: scale normally
8. If CPA is 50%+ higher: the market may not be viable at current creative/offer

**International scaling order (for English-language SaaS like Viktor):**
1. United States (largest, most data)
2. United Kingdom (similar market, same language)
3. Canada (same language, smaller)
4. Australia (same language, time zone challenges)
5. DACH (Germany, Austria, Switzerland -- may need translated creative)
6. Nordics (high English proficiency, tech-forward)
7. Rest of EU (requires localization)

### Method 3: ASC as Incremental Channel

**When to use:** You have manual campaigns performing well and want incremental reach.

**Step-by-step:**
1. Create an ASC (Advantage+ Shopping) campaign
2. Upload your top 5-10 performing ads (use Post IDs)
3. Set existing customer budget cap to 5-10%
4. Set budget at 20-30% of your total manual campaign budget
5. Run for 14 days alongside manual campaigns
6. Compare: Is ASC CPA within 20% of manual campaigns?
7. If yes: increase ASC budget, potentially shift from manual to ASC over time
8. If no: ASC may not work for your account. Reduce to 10% budget as ongoing test.

---

## Scaling Decision Framework

```
Ready to scale?
├── CPA at target? Frequency <3? Creative fresh?
│   ├── All yes --> Vertical scale (20% every 3-4 days)
│   └── CPA at target but frequency >3
│       ├── --> Horizontal scale (new audiences)
│       └── --> Refresh creative before scaling
├── Vertical scaling failed (CPA didn't recover)?
│   ├── Frequency >3.5 --> Audience saturated. Horizontal scale.
│   ├── Creative fatigue signals --> Refresh creative, then retry vertical.
│   └── Neither --> Market ceiling reached. Hold and optimize.
└── Already spending $X/day, want to reach $2X/day?
    ├── Do both: Vertical scale existing + horizontal new campaigns
    ├── Expect the first 20% of new spend to have 10-20% higher CPA
    └── Patience: $X to $2X takes 12-16 days minimum
```

---

## Scaling Risk Assessment

| Scale Amount | Risk Level | Expected CPA Impact | Recovery Time |
|-------------|-----------|-------------------|---------------|
| +10-15% | Low | 0-5% temporarily | 1-2 days |
| +20% | Low-Medium | 5-15% temporarily | 3-4 days |
| +25-30% | Medium | 10-25% temporarily | 5-7 days |
| +30-50% | High | 15-40% temporarily | 7-14 days, may not recover |
| +50-100% | Very High | 25-60% temporarily | May not recover, possible campaign damage |
| +100%+ | Extreme | Campaign performance may permanently degrade | Full rebuild likely needed |

The 20% rule exists because anything above 20% significantly increases the risk of permanent performance degradation.
