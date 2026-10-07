# Exclusion Architecture - Multi-Layer Exclusion Strategy

## Why Exclusions Matter

Without exclusions, you pay to acquire people who are already your customers. You also pollute your campaign data -- conversion events from existing customers inflate your reported performance, leading to bad budget decisions.

## The Three-Layer Exclusion Model

### Layer 1: Pixel-Based Exclusions (Highest Match Rate)

Pixel exclusions match 100% of users who triggered events in their browser (subject to cookie limitations).

**Setup:**
1. Create Custom Audience > Website
2. Select the conversion event (e.g., Purchase, CompleteRegistration)
3. Set lookback window (typically 180 days)
4. Add as exclusion in your prospecting ad sets

**Recommended pixel exclusions:**

| Exclusion Audience | Lookback | Apply To |
|-------------------|----------|----------|
| Purchase event | 180 days | All prospecting campaigns |
| CompleteRegistration event | 90 days | All prospecting campaigns |
| InitiateCheckout event | 30 days | Top-of-funnel prospecting only |
| AddToCart event | 14 days | Top-of-funnel prospecting only |

**Limitations:**
- Only captures browser-based events (not app, not offline)
- Cookie blocking and ITP reduce match over time
- 180-day maximum lookback

### Layer 2: Customer List Exclusions (Broadest Coverage)

Upload your customer list to exclude known customers across all devices and browsers.

**Setup:**
1. Create Custom Audience > Customer List
2. Upload CSV with email, phone, name (more fields = better match)
3. Meta hashes and matches against user profiles
4. Add as exclusion in prospecting ad sets

**Recommended list exclusions:**

| List | Update Frequency | Apply To |
|------|-----------------|----------|
| All paying customers | Weekly | All prospecting campaigns |
| All registered users | Weekly | All prospecting campaigns |
| Active trial users | Daily (if possible) | Prospecting (unless upselling) |
| Churned customers (recent) | Monthly | Prospecting (optional -- you may want to win them back) |

**Match rate reality:**
- Email-only lists: 30-50% match
- This means 50-70% of your customers are NOT being excluded
- Accept this limitation. Layer 2 + Layer 1 combined covers more than either alone.

### Layer 3: Engagement-Based Exclusions (Supplementary)

Exclude people who have already engaged with your content in meaningful ways.

**Setup:**
- Create engagement Custom Audiences
- Add as exclusions where appropriate

**Recommended engagement exclusions:**

| Exclusion | Apply To | Rationale |
|-----------|----------|-----------|
| Lead form submitters (90 days) | Prospecting (lead gen) | Already in your pipeline |
| Instagram/FB page followers | Optional | May want to exclude from cold prospecting |
| Video viewers (95%, 365 days) | Optional | High awareness, may convert organically |

---

## Exclusion Architecture by Campaign Type

### Prospecting Campaign

```
Exclusions:
├── Layer 1: Pixel
│   ├── Purchase event (180 days)
│   ├── CompleteRegistration event (90 days)
│   └── Lead event (90 days) [if lead gen]
├── Layer 2: Customer List
│   ├── All paying customers
│   └── All registered/trial users
└── Layer 3: Engagement (optional)
    └── Lead form submitters (90 days) [if lead gen]
```

### Retargeting Campaign

```
Inclusions:
├── Website visitors (7-30 days)
├── Video viewers (50%+, 30 days)
├── Lead form openers (30 days)
└── Instagram/FB engagers (30 days)

Exclusions:
├── Layer 1: Pixel
│   ├── Purchase event (180 days)
│   └── CompleteRegistration event (30 days) [if SaaS signup = conversion]
└── Layer 2: Customer List
    └── All paying customers
```

### Retention/Upsell Campaign

```
Inclusions:
├── Customer list (paying customers only)
└── Purchase pixel event (180 days)

Exclusions:
├── Recent purchasers (7-14 days) [avoid buyer's remorse]
├── Churned customers [if targeting active users only]
└── Customers on highest tier [if upselling]
```

### Advantage+ Shopping Campaign (ASC)

ASC has a special exclusion mechanism:
- **Existing Customer Budget Cap:** Set to 0-10% to limit retargeting spend
- Upload your customer list in the ASC settings for Meta to identify existing customers
- This doesn't fully exclude them but limits their share of budget

---

## Common Exclusion Mistakes

### Mistake 1: No exclusions at all
**Impact:** 10-30% of prospecting budget wasted on existing customers
**Fix:** Implement Layer 1 + Layer 2 immediately

### Mistake 2: Only using customer list (no pixel)
**Impact:** 50-70% of customers slip through due to low match rates
**Fix:** Add pixel-based exclusions. Together they catch 70-90%.

### Mistake 3: Too-short lookback window
**Impact:** Customers who converted 60+ days ago re-enter prospecting
**Fix:** Use 180-day lookback for pixel exclusions, update customer lists weekly

### Mistake 4: Excluding from retargeting
**Impact:** Retargeting audience becomes too small, can't exit learning phase
**Fix:** Only exclude actual converters from retargeting, not "might be interested" audiences

### Mistake 5: Over-excluding from ASC
**Impact:** ASC needs some existing customer data to understand your ideal buyer
**Fix:** Use the budget cap (5-10%), don't hard-exclude

### Mistake 6: Never updating customer lists
**Impact:** New customers keep getting prospecting ads
**Fix:** Weekly or bi-weekly list uploads. Automate if possible (Zapier, direct integration).

---

## Exclusion Verification

### How to Verify Exclusions Are Working

1. **Check audience size:** After adding exclusions, the ad set's potential reach should decrease
2. **Audience Overlap tool:** Compare your exclusion audience against your targeting audience
3. **Breakdown by "DMA region" or demographics:** If you see unusual patterns, exclusions may not be matching
4. **Monitor new vs returning customer ratio:** If existing customers are still converting from prospecting, exclusions are leaking

### Expected Leakage

Even with perfect exclusion setup, expect 5-15% leakage (existing customers seeing prospecting ads) because:
- Customer list match rates are imperfect
- Users on new devices or browsers aren't matched by pixel
- Cookie expiration reduces pixel audience over time
- Cross-device usage creates gaps

**This is normal.** The goal is to minimize waste, not eliminate it entirely. A 5-15% leakage rate is acceptable. Above 20% warrants investigation.

---

## Exclusion Setup Checklist

- [ ] Pixel Purchase event exclusion created (180 days)
- [ ] Pixel Registration/Lead event exclusion created (90 days)
- [ ] Customer list uploaded with email + phone
- [ ] Customer list set to auto-refresh (weekly minimum)
- [ ] Exclusions applied to ALL prospecting campaigns
- [ ] Exclusions applied to ALL prospecting ad sets
- [ ] Retargeting campaign excludes converters only
- [ ] ASC has existing customer budget cap set (0-10%)
- [ ] Exclusion audiences verified (reach decreased after applying)
- [ ] Monthly audit scheduled to check for leakage
