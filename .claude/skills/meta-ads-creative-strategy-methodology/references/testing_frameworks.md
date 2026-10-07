# Creative Testing Frameworks - Deep Dive

## Andrew Faris Method: Worked Examples

### Philosophy
No dedicated test campaigns. Every ad lives in the environment it will scale in. Cost controls enforce efficiency. The algorithm decides winners, not you.

### Setup (Step-by-Step)

**Step 1: Choose your scaling campaign**
- Use your existing Winners/Scaling campaign (CBO, Cost Cap)
- This campaign should already have proven ads running

**Step 2: Add 15-20 new ads to the ad set**
- Each ad is a distinct creative concept (not minor variations)
- Use a mix of formats: 5 UGC, 5 static, 5 video, 5 carousel
- All ads get the same primary text and headline (unless testing copy)

**Step 3: Set cost controls**
- Cost Cap: Target CPA + 20%
- This ensures new ads must perform at your target economics to survive

**Step 4: Wait 7 days**
- Do not touch anything for 7 full days
- Meta will allocate spend to the best-performing ads
- Most new ads will get minimal spend -- this is correct

**Step 5: Evaluate**
- After 7 days, check which new ads received meaningful spend (>$100)
- Ads that received spend AND have CPA at target = winners
- Ads that received spend AND have CPA 2x+ above target = losers (pause)
- Ads that received zero spend = inconclusive (may try again in next batch)

### Worked Example: Viktor (SaaS, $50 CPA Target)

**Campaign:** SALES_WINNERS_CBO_2026-03
**Existing ads:** 6 proven performers averaging $42 CPA
**New ads added:** 15 (batch of UGC testimonials, product demos, founder videos)

**Day 7 results:**

| Ad | Spend | Conversions | CPA | Action |
|----|-------|-------------|-----|--------|
| UGC_TESTIMONIAL_DEV-TEAM_V1 | $320 | 8 | $40 | Winner - keep |
| VIDEO_DEMO_SLACK-SETUP_V1 | $185 | 4 | $46 | Promising - monitor |
| FOUNDER_WHY-SLACK-AI_V1 | $142 | 3 | $47 | Promising - monitor |
| UGC_TESTIMONIAL_MARKETER_V1 | $95 | 1 | $95 | Underperforming - pause |
| STATIC_COMPARISON_CHART_V1 | $78 | 2 | $39 | Small sample but good - monitor |
| 10 other ads | $0-$30 each | 0-1 each | N/A | Inconclusive - leave running |

**Actions taken:**
- UGC_TESTIMONIAL_DEV-TEAM_V1: Keep, it's a new winner
- UGC_TESTIMONIAL_MARKETER_V1: Pause (CPA 2x target)
- 10 zero-spend ads: Leave for another 7 days, then pause if still no spend
- Next week: Add 15 more new ads

---

## 3:2:2 Method: Worked Examples

### Setup (Step-by-Step)

**Step 1: Define your test hypothesis**
- Example: "UGC testimonials from developers will outperform product demos for Viktor"

**Step 2: Create 3 distinct creative concepts**
- Creative A: UGC testimonial from a developer
- Creative B: Product demo (screen recording with voiceover)
- Creative C: Founder talking head explaining the value

**Step 3: Write 2 primary text variations**
- Text 1: Problem-focused ("Tired of Slack chaos? Viktor manages your tools...")
- Text 2: Benefit-focused ("Viktor automates your team's busywork in Slack...")

**Step 4: Write 2 headline variations**
- Headline 1: "Your AI Coworker in Slack"
- Headline 2: "Automate 10+ Hours/Week"

**Step 5: Create the matrix (12 ads total)**

| Ad # | Creative | Primary Text | Headline |
|------|----------|-------------|----------|
| 1 | A (UGC dev) | Text 1 (problem) | Headline 1 |
| 2 | A (UGC dev) | Text 1 (problem) | Headline 2 |
| 3 | A (UGC dev) | Text 2 (benefit) | Headline 1 |
| 4 | A (UGC dev) | Text 2 (benefit) | Headline 2 |
| 5 | B (demo) | Text 1 (problem) | Headline 1 |
| 6 | B (demo) | Text 1 (problem) | Headline 2 |
| 7 | B (demo) | Text 2 (benefit) | Headline 1 |
| 8 | B (demo) | Text 2 (benefit) | Headline 2 |
| 9 | C (founder) | Text 1 (problem) | Headline 1 |
| 10 | C (founder) | Text 1 (problem) | Headline 2 |
| 11 | C (founder) | Text 2 (benefit) | Headline 1 |
| 12 | C (founder) | Text 2 (benefit) | Headline 2 |

**Step 6: Launch**
- Campaign: SALES_TESTING (ABO)
- One ad set with all 12 ads
- Budget: $150/day (3x $50 CPA target)
- Audience: Broad US (matching Winners campaign)
- Run for 72 hours

**Step 7: Analyze (after 72 hours)**

| Element | Metric | Result |
|---------|--------|--------|
| Creative A (UGC dev) | CPA | $38 (4 ads averaged) |
| Creative B (demo) | CPA | $55 (4 ads averaged) |
| Creative C (founder) | CPA | $47 (4 ads averaged) |
| Text 1 (problem) | CPA | $42 (6 ads averaged) |
| Text 2 (benefit) | CPA | $51 (6 ads averaged) |
| Headline 1 | CPA | $45 (6 ads averaged) |
| Headline 2 | CPA | $48 (6 ads averaged) |

**Winner:** Creative A + Text 1 + Headline 1 (UGC developer, problem-focused, "Your AI Coworker in Slack")

**Step 8: Graduate**
- Take the Post ID of the winning ad combination
- Add it to the Winners campaign
- Plan next test: iterate on the winning concept (new UGC creators, new problem angles)

---

## DCT (Dynamic Creative Testing): Worked Examples

### Setup (Step-by-Step)

**Step 1: Prepare elements**
- 5 images/videos (variations of a proven concept)
- 3 primary text options
- 3 headline options
- 2 CTA options

**Step 2: Create DCT ad**
- In Ads Manager, toggle "Dynamic Creative" on at the ad set level
- Upload all elements
- Meta will test up to 5 x 3 x 3 x 2 = 90 combinations

**Step 3: Budget and run**
- $100-150/day (2-3x CPA target)
- Run for 5-7 days (DCT needs more time than structured tests)

**Step 4: Read results**
- Go to Ad level > Breakdown > By Dynamic Creative Element
- Check performance per image, per text, per headline
- Note: You cannot see combination-level data (only per-element)

**Step 5: Build the winner manually**
- Take the best image + best text + best headline
- Create a standard (non-DCT) ad with this combination
- Graduate via Post ID to Winners campaign

### When DCT Results Are Misleading

DCT results can be misleading when elements are interdependent:
- Example: A headline that references the image ("See this chart? That's your ROI") makes no sense paired with a different image
- If your elements depend on each other, use 3:2:2 instead
- DCT works best when elements are modular and interchangeable

---

## Method Selection Decision Tree

```
Starting a new test?
├── Do you have 15+ new ads ready?
│   ├── Yes --> Do you have a mature scaling campaign with cost controls?
│   │   ├── Yes --> Andrew Faris Method
│   │   └── No --> 3:2:2 Method (build the scaling campaign first)
│   └── No --> 3:2:2 Method (structured, lower volume needed)
├── Are you testing copy/headline variations on a proven visual?
│   └── Yes --> DCT (elements are modular)
├── Do you need to know exactly WHY something won?
│   └── Yes --> 3:2:2 Method (isolates variables)
└── Default --> 3:2:2 Method (safest, most controlled)
```

---

## Testing Budget Calculator

| Target CPA | 3:2:2 Budget (per test) | Faris Budget (incremental) | DCT Budget (per test) |
|------------|------------------------|---------------------------|----------------------|
| $25 | $75/day x 3 days = $225 | $0 (uses existing budget) | $50-75/day x 7 days = $350-525 |
| $50 | $150/day x 3 days = $450 | $0 (uses existing budget) | $100-150/day x 7 days = $700-1,050 |
| $100 | $300/day x 3 days = $900 | $0 (uses existing budget) | $200-300/day x 7 days = $1,400-2,100 |
| $200 | $600/day x 3 days = $1,800 | $0 (uses existing budget) | $400-600/day x 7 days = $2,800-4,200 |
