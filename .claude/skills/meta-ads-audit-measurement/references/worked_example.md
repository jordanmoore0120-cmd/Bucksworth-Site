# Worked Example: audit-measurement

## Scenario

**Account:** LuxeHome Decor (e-commerce, home furnishings)
**Maturity:** Established
**Monthly spend:** $200K
**Target CPA:** $65 (Purchase)
**Target ROAS:** 5.2x
**Pixel ID:** 12345678901234
**CAPI:** Implemented via Shopify integration
**Third-party tool:** Triple Whale

---

## Step 0: Dependencies Loaded

From account-conventions:
- has_capi: true
- dataset_id: 98765432109876
- attribution_window: 7d_click_1d_view
- third_party_tool: triple_whale
- business_model: ecommerce
- compliance: CCPA applicable (ships to CA)

From measurement-methodology:
- Established accounts should have: full CAPI, EMQ >7.0, optimized attribution, third-party validation
- E-commerce funnel: PageView > ViewContent > AddToCart > InitiateCheckout > Purchase

---

## Step 1: Data Retrieved

### Pixel Status
- Pixel installed: Yes
- Last fired: 12 minutes ago
- Available: Yes
- First-party cookies: Enabled

### Event Inventory (Last 7 Days)

| Event | Type | Count (7d) | Source | EMQ | Trend |
|-------|------|-----------|--------|-----|-------|
| PageView | Standard | 892,400 | Browser only | N/A | Stable |
| ViewContent | Standard | 234,600 | Browser + Server | 5.8 | Stable |
| AddToCart | Standard | 45,200 | Browser + Server | 6.2 | Stable |
| InitiateCheckout | Standard | 28,400 | Browser + Server | 7.4 | Stable |
| AddPaymentInfo | Standard | 22,100 | Browser + Server | 7.8 | Stable |
| Purchase | Standard | 8,420 | Browser + Server | 8.1 | Stable |
| Search | Standard | 156,800 | Browser only | N/A | Stable |
| CompleteRegistration | Standard | 12,400 | Browser only | N/A | Stable |
| newsletter_signup | Custom | 3,200 | Browser only | N/A | Declining |

### CAPI Status
- Active: Yes
- Last server event: 8 minutes ago
- Events covered: ViewContent, AddToCart, InitiateCheckout, AddPaymentInfo, Purchase (5 of 9)
- Deduplication: event_id matching (active)
- Missing from CAPI: PageView, Search, CompleteRegistration, newsletter_signup

### Attribution Settings

| Campaign | Window | Consistent? |
|----------|--------|-------------|
| CONV_PROS_US | 7d click, 1d view | Yes |
| CONV_PROS_EU | 7d click | No -- missing 1d view |
| CONV_LAL_US | 7d click, 1d view | Yes |
| CONV_RT_US | 7d click, 1d view | Yes |
| ASC_US | 7d click, 1d view | Yes |

---

## Step 2: Pixel Health Check

| Check | Expected | Actual | Status |
|-------|----------|--------|--------|
| Installed | Yes | Yes | Pass |
| Firing | <24h | 12 min ago | Pass |
| Available | Yes | Yes | Pass |
| First-party cookies | Enabled | Enabled | Pass |

**Pixel health score: 10/10**

### Event Funnel

```
PageView (892,400) -> ViewContent (234,600, 74% drop) -> AddToCart (45,200, 81% drop) -> InitiateCheckout (28,400, 37% drop) -> Purchase (8,420, 70% drop)
```

- PageView to ViewContent: 26% view rate (normal for e-commerce)
- ViewContent to AddToCart: 19% add rate (healthy)
- AddToCart to InitiateCheckout: 63% (good -- most ATC users proceed)
- InitiateCheckout to Purchase: 30% (normal, some checkout abandonment)

**Funnel integrity: Pass** -- logical progression, no anomalies.

---

## Step 3: CAPI Analysis

### Coverage Assessment

| Event | Browser | Server | Both? | Critical? |
|-------|---------|--------|-------|-----------|
| PageView | Yes | No | No | Low (top of funnel) |
| ViewContent | Yes | Yes | Yes | Medium |
| AddToCart | Yes | Yes | Yes | High |
| InitiateCheckout | Yes | Yes | Yes | High |
| Purchase | Yes | Yes | Yes | Critical |
| Search | Yes | No | No | Low |
| CompleteRegistration | Yes | No | No | Low |

**Coverage: 5/9 events (56%).** Critical and high-priority events are all covered. Lower-funnel coverage is good. Upper-funnel events (PageView, Search) are browser-only, which is acceptable.

### EMQ Assessment

| Event | EMQ | Rating | Missing Parameters |
|-------|-----|--------|--------------------|
| Purchase | 8.1 | Excellent | None |
| AddPaymentInfo | 7.8 | Good | city, state |
| InitiateCheckout | 7.4 | Good | phone |
| AddToCart | 6.2 | Good | phone, city, state, zip |
| ViewContent | 5.8 | Fair | email, phone, city, state, fbc |

**Account average EMQ: 7.1 (Good)**
**Target for Established: >7.0** -- just meeting threshold

**Issue identified:** ViewContent EMQ is 5.8 (Fair). This is the weakest link. Most ViewContent events happen before user identification (not logged in), which limits available customer info parameters.

### Deduplication Check

- Method: event_id matching (correct method)
- Status: Active
- Verification: Meta-reported Purchase count (8,420) vs Shopify backend (8,180)
- Variance: +2.9% (within acceptable 10% range)
- **Deduplication is working correctly.**

---

## Step 4: Attribution Settings

| Campaign | Window | Recommended | Match? |
|----------|--------|-------------|--------|
| CONV_PROS_US | 7d click, 1d view | 7d click, 1d view | Yes |
| CONV_PROS_EU | 7d click | 7d click, 1d view | No |
| CONV_LAL_US | 7d click, 1d view | 7d click, 1d view | Yes |
| CONV_RT_US | 7d click, 1d view | 7d click, 1d view | Yes |
| ASC_US | 7d click, 1d view | 7d click, 1d view | Yes |

**Issue:** CONV_PROS_EU is using 7d click only (missing 1d view). This means view-through conversions from EU campaigns are not being counted, making EU appear to underperform relative to US campaigns. This could be leading to under-investment in EU.

### View-Through Analysis

- Total conversions (7d): 8,420
- Click-through: 6,820 (81%)
- View-through: 1,600 (19%)
- Assessment: 19% view-through is within normal range for e-commerce. Not over-reliant on view-through.

---

## Step 5: Event Configuration

**Primary event: Purchase**
- Volume: 8,420/week (1,203/day) -- sufficient
- Conversion value: Yes, dynamic (from Shopify order value)
- Optimization goal: Yes, all conversion campaigns optimize for Purchase
- AEM Priority: #1

**Conversion value check:**
- Average order value in Meta: $87
- Average order value in Shopify: $84
- Variance: +3.6% (Meta slightly higher -- likely includes tax/shipping in some events)
- **Minor issue:** Conversion values should exclude tax/shipping for consistency. Currently close enough to not be a major problem.

**AEM Priority list:**
1. Purchase (correct)
2. InitiateCheckout (correct)
3. AddToCart (correct)
4. CompleteRegistration (should be lower)
5. ViewContent (correct)
6. Search (correct)
7. AddPaymentInfo (should be higher than CompleteRegistration)
8. PageView (correct)

**Issue:** AddPaymentInfo should be Priority 4, CompleteRegistration should be Priority 7. Current ordering slightly suboptimal but not critical.

---

## Step 6: UTM and Third-Party Audit

### UTM Compliance

Checked 48 active ads:
- 42 have correct UTMs (88% compliant)
- 4 have partial UTMs (missing utm_content)
- 2 have no UTMs at all

Expected format: `utm_source=meta&utm_medium=paid-social&utm_campaign={campaign}&utm_content={adset}&utm_term={ad}`

**Issues:**
- 2 ads in ASC_US have no URL parameters at all
- 4 ads in CONV_TEST are missing utm_content (ad set attribution broken in GA4)

### Triple Whale Integration

- Pixel installed: Yes
- Postback active: Yes
- Attribution model: Total Impact

### Data Reconciliation

| Source | Purchases (7d) | Variance vs Shopify |
|--------|----------------|-------------------|
| Shopify (backend truth) | 8,180 | -- |
| Meta Ads Manager | 8,420 | +2.9% |
| Google Analytics 4 | 7,640 | -6.6% |
| Triple Whale | 8,050 | -1.6% |

- Meta vs Shopify: +2.9% -- healthy (within 10%)
- GA4 vs Shopify: -6.6% -- typical GA4 under-attribution due to consent and cookie issues
- Triple Whale vs Shopify: -1.6% -- excellent alignment

---

## Outputs Generated

### Measurement Health Scorecard

| Component | Score | Status |
|-----------|-------|--------|
| Pixel Health | 10/10 | Pass |
| CAPI Implementation | 7/10 | Good (ViewContent EMQ needs work) |
| Event Match Quality | 7/10 | Good (above 7.0 threshold, ViewContent drags) |
| Attribution Setup | 8/10 | Warning (EU campaign mismatch) |
| Event Configuration | 8/10 | Good (minor AEM priority order issue) |
| UTM / Third-Party | 7/10 | Warning (6 ads with UTM issues) |
| **Overall** | **7.8/10** | **B** |

### Remediation Priorities

**High:**
1. Fix CONV_PROS_EU attribution window -- add 1d view to match other campaigns
2. Add UTMs to 6 ads missing them
3. Improve ViewContent EMQ from 5.8 to 7.0+ by passing fbc cookie server-side

**Medium:**
4. Reorder AEM priorities (swap AddPaymentInfo and CompleteRegistration)
5. Standardize conversion value to exclude tax/shipping

**Low:**
6. Add PageView to CAPI (incremental signal improvement)
7. Consider adding CompleteRegistration to CAPI
