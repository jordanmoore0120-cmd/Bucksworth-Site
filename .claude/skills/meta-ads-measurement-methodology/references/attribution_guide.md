# Attribution Window Selection Guide

## Purpose

This reference provides detailed guidance on selecting the right attribution window for Meta Ads based on business type, purchase cycle, and measurement goals. Use this alongside the measurement-methodology SKILL.md for complete context.

---

## Attribution Window Fundamentals

### What Attribution Windows Measure

An attribution window defines the time period after a user interacts with your ad during which a conversion is credited to that ad. Meta offers these windows:

| Window | Definition |
|--------|-----------|
| **1-day click** | User clicked the ad and converted within 1 day (24 hours) |
| **7-day click** | User clicked the ad and converted within 7 days |
| **1-day view** | User saw the ad (no click) and converted within 1 day |
| **7-day click + 1-day view** | Combines 7-day click attribution with 1-day view-through attribution |

### 2026 Click Attribution Definition

As of 2025, "click" in Meta's attribution model means a link click only. Previously, engagements like video plays, reactions, and comments counted as "clicks" for attribution. This change made click attribution more conservative and more accurate.

---

## Selection Guide by Business Type

### E-commerce: Impulse / Low AOV (<$100)

**Recommended window:** 7-day click

**Why:**
- Most impulse purchases happen within 24-48 hours of clicking an ad
- 7-day window captures the "I'll come back for this" shoppers
- View-through not recommended (too many false positives for low-consideration purchases)

**Typical attribution distribution:**
- Same-day: 60-70% of conversions
- Day 2-3: 20-25% of conversions
- Day 4-7: 5-15% of conversions

**Example: Fast fashion brand ($30-80 AOV)**
| Window | Purchases | CPA | ROAS |
|--------|----------|-----|------|
| 1-day click | 420 | $18 | 3.2x |
| 7-day click | 540 | $14 | 4.1x |
| 7-day click + 1-day view | 680 | $11 | 5.2x |

In this example, 7-day click is the right balance. The 1-day view adds 140 conversions, but many of those are likely organic shoppers who happened to see an ad. Use 7-day click as the decision-making window and 1-day click as a conservative cross-check.

### E-commerce: High AOV ($100-500)

**Recommended window:** 7-day click (primary), 7-day click + 1-day view (secondary reference)

**Why:**
- Higher-consideration purchases take longer; users research, compare, return
- 7-day click captures the full consideration cycle for most products
- 1-day view is worth monitoring because brand awareness plays a role at this price point

**Typical attribution distribution:**
- Same-day: 35-50% of conversions
- Day 2-3: 25-30% of conversions
- Day 4-7: 20-30% of conversions

**When to include 1-day view:**
- You have significant brand awareness campaigns running alongside conversion campaigns
- Your funnel involves multiple touchpoints (email, retargeting, organic)
- You want to understand the full impact of Meta on the customer journey (not just last-click)

### E-commerce: High Consideration ($500+)

**Recommended window:** 7-day click + 1-day view

**Why:**
- Very long consideration cycles (weeks or months)
- Meta is often a top-of-funnel touchpoint that starts the journey
- 7-day click alone will significantly undercount Meta's contribution
- View-through captures users who saw an ad, researched independently, and converted

**Important caveat:** At this price point, Meta's in-platform attribution will always be incomplete. Use a third-party attribution tool (Northbeam, Hyros) as the primary source of truth, and Meta's attribution as a directional signal for campaign optimization.

### SaaS / Free Trial / Freemium

**Recommended window:** 7-day click

**Why:**
- Signups typically happen quickly after clicking (within 1-3 days)
- The real conversion (paid subscription) happens later and is tracked in your product/billing system
- View-through has low value because SaaS decisions are usually research-driven, not impression-driven

**What to optimize for:**
- Optimize Meta campaigns for the signup/trial event (quick feedback loop)
- Track trial-to-paid conversion in your product analytics, not in Meta
- Use 7-day click for the signup event; measure downstream monetization separately

**Example: Viktor (AI Slack Coworker)**
| Window | Workspace Signups | CPA | Notes |
|--------|------------------|-----|-------|
| 1-day click | 180 | $42 | Conservative, captures most signups |
| 7-day click | 230 | $33 | Captures users who signed up after exploring the site |
| 7-day click + 1-day view | 310 | $24 | Likely inflated; many "views" are not incremental |

For Viktor, 7-day click is the right window. View-through overstates Meta's contribution because many users discover Viktor through other channels (Slack App Directory, word of mouth) and happen to see a Meta ad.

### Lead Generation (B2C)

**Recommended window:** 7-day click

**Why:**
- Lead forms are typically completed quickly after clicking
- Follow-up and conversion happen via email/phone, outside Meta's tracking
- View-through leads are rarely high quality (not intent-driven)

**Lead quality consideration:**
- Track lead-to-opportunity and lead-to-sale rates by campaign, not just lead volume
- A campaign with a $50 CPA and 20% lead-to-sale is better than one with $30 CPA and 5% lead-to-sale
- Push CRM data back to Meta via offline conversions for better optimization

### Lead Generation (B2B / Long Sales Cycle)

**Recommended window:** 7-day click

**Why:**
- B2B decisions take weeks or months
- Meta is often a top-of-funnel channel (awareness, not direct conversion)
- 7-day click captures the initial lead/download/signup
- Downstream revenue should be tracked in CRM and attributed via offline conversion uploads

**Supplemental measurement:**
- Upload offline conversions (pipeline created, deal won) back to Meta monthly
- This helps Meta's algorithm learn which leads become revenue
- Use MER as the true measure of Meta's B2B contribution

### App Installs

**Recommended window:** 7-day click + 1-day view

**Why:**
- App discovery is often impression-driven (user sees ad, searches for app later)
- 1-day view captures users who install from the App Store after seeing a Meta ad
- Mobile app attribution tools (AppsFlyer, Adjust, Branch) provide a more reliable view

**Important:** Always cross-reference Meta's reported installs with your mobile measurement partner (MMP). Meta consistently over-reports installs by 15-30%.

---

## Attribution Comparison Analysis

### How to Run the Comparison

1. In Ads Manager, go to Columns > Customize Columns
2. Add columns for:
   - Results (1-day click)
   - Results (7-day click)
   - Results (7-day click, 1-day view)
3. Set date range to last 30 days (minimum for statistical significance)
4. Compare at the campaign level

### Interpreting the Ratio

Calculate: `7-day click conversions / 1-day click conversions`

| Ratio | Interpretation | Action |
|-------|---------------|--------|
| 1.0-1.2x | Nearly all conversions happen same-day. Tight, reliable attribution. | Use 7-day click but note that 1-day click would also work. |
| 1.2-1.5x | Moderate delayed conversions. Normal for most businesses. | 7-day click is the right window. Some users need a few days. |
| 1.5-2.0x | Significant delayed attribution. Users are taking time to decide. | 7-day click is important; 1-day click would undercount significantly. Consider if your product has a longer decision cycle. |
| 2.0-3.0x | Very long consideration or multiple touchpoints. | Investigate whether these are truly Meta-driven conversions. Cross-reference with third-party tool. |
| 3.0x+ | Suspiciously high. Meta is likely getting credit for conversions that would have happened anyway. | Implement third-party attribution. Consider incrementality testing. Don't make budget decisions on 7-day click alone. |

### View-Through Assessment

Calculate: `(7d click + 1d view conversions) / (7d click conversions)`

| Ratio | Interpretation | Action |
|-------|---------------|--------|
| 1.0-1.1x | View-through adds very little. Users convert after clicking. | Exclude view-through from reporting. |
| 1.1-1.3x | Moderate view-through impact. Ads have awareness value. | Monitor but don't optimize based on view-through. |
| 1.3-1.5x | Significant view-through. Consider if your product is awareness-heavy. | Include in reporting but flag as less certain. |
| 1.5x+ | View-through is inflating numbers substantially. | Exclude view-through from optimization decisions. Many of these are organic conversions. |

---

## Window Selection Checklist

Before setting your attribution window, answer these questions:

- [ ] What is your product's typical consideration period? (Same-day? Days? Weeks?)
- [ ] Is Meta a direct-response channel or an awareness channel for your business?
- [ ] Do you have a third-party attribution tool? (If yes, use it as the source of truth regardless of Meta's window)
- [ ] Have you compared 1-day click vs 7-day click data? (If the ratio is >2x, investigate)
- [ ] Are you running brand awareness campaigns alongside conversion campaigns? (If yes, 1-day view may have value)
- [ ] Is your team tempted to use the broadest window to make numbers look better? (If yes, default to 7-day click only)

---

## Common Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---------|---------------|-----------------|
| Using 7d click + 1d view as default | Inflates Meta's contribution, especially for low-consideration products | Default to 7d click; add view-through only for high-consideration or awareness-heavy businesses |
| Comparing different windows across campaigns | Apples-to-oranges comparison | Use the same window for all campaigns in the same account |
| Changing windows mid-campaign | Makes trend analysis impossible | Pick a window at account setup and keep it consistent |
| Ignoring the 2026 click definition change | Historical comparisons may be invalid | Note the change when comparing YoY data |
| Trusting Meta's window for budget decisions | Self-attribution bias | Use MER or third-party tool for budget allocation |
