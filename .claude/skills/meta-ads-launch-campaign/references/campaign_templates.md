# Campaign Templates

Template specs for each campaign type supported by the `launch_campaign` skill. Each template defines the structural rules, targeting defaults, bid strategy guidance, and creative requirements.

---

## Template 1: Creative Testing (ABO)

**Purpose:** Systematically test new creative concepts to identify winners before scaling.

**When to use:** You have new images, videos, or copy angles to validate. You want controlled data, not blended signals.

### Structure

```
Campaign (Creative Testing)
  ├── Ad Set A: Concept 1 (ABO, cost cap)
  │   ├── Ad 1: Variant A
  │   ├── Ad 2: Variant B
  │   └── Ad 3: Variant C
  ├── Ad Set B: Concept 2 (ABO, cost cap)
  │   ├── Ad 1: Variant A
  │   └── Ad 2: Variant B
  └── Ad Set C: Concept 3 (ABO, cost cap)
      ├── Ad 1: Variant A
      └── Ad 2: Variant B
```

### Campaign Settings

| Field | Value |
|-------|-------|
| Objective | OUTCOME_SALES (or OUTCOME_LEADS for lead gen tests) |
| Campaign Budget Optimization | OFF (ABO -- budget set at ad set level) |
| Special Ad Category | None (unless housing/credit/employment) |
| Status | PAUSED (launch when ready) |

### Ad Set Settings

| Field | Value |
|-------|-------|
| Budget Type | Daily |
| Budget per Ad Set | $50-$150/day (scale with CPA target: ~3-5x CPA/day minimum) |
| Bid Strategy | COST_CAP |
| Bid Cap | 1.0x-1.3x target CPA (conservative to control test costs) |
| Optimization Goal | OFFSITE_CONVERSIONS (or LEADS) |
| Attribution Window | 7-day click, 1-day view |
| Placements | Advantage+ Placements (broadest signal for testing) |
| Dynamic Creative | false (test specific assets, not combinations) |
| 1 ad set per concept | Yes -- never mix concepts in one ad set |

### Audience

| Targeting | Recommendation |
|-----------|---------------|
| Geo | Core market(s) from account-conventions |
| Age | Broad (18-65+) unless strong reason to restrict |
| Gender | All unless product is gender-specific |
| Interests | Avoid for testing -- broad audiences produce cleaner data |
| Custom Audiences | Exclude: existing customers, recent converters |
| Minimum Size | 1M+ for cold (lower = higher CPM, unreliable data) |

### Creative Requirements

| Parameter | Spec |
|-----------|------|
| Ads per concept | 3-5 (minimum 3 for statistical signal) |
| Total ads per test campaign | 15-20 maximum (beyond 20, budget dilutes too thin) |
| Formats | Mix static image + video. Video: 15-30s ideal for testing |
| Headlines | 1-3 variations per ad (if dynamic creative is off, test 1 headline per ad) |
| Primary Text | 1-3 sentences max. Hook in line 1. |
| CTA | LEARN_MORE or SIGN_UP (match to conversion event) |
| Asset specs | Image: 1080x1080 or 1200x628. Video: 9:16 (Reels), 1:1 (Feed), 16:9 (FB Feed) |

### Kill Criteria

| Signal | Action |
|--------|--------|
| CPA > 2x target after 50+ impressions per ad | Pause ad |
| CTR < 0.3% after 1,000+ impressions | Pause ad |
| Frequency > 3.0 before 50 conversions | Ad set may be too small -- expand audience |
| 7+ days, 0 conversions, $100+ spent | Pause ad set, review concept |

### Graduation to Winners

An ad graduates when it achieves:
- CPA <= target CPA over 50+ conversions
- Consistent delivery (not pacing issues)
- Positive social proof (likes/comments building)

Graduated ads move to a Winners campaign via the post ID method.

---

## Template 2: Winners (CBO)

**Purpose:** Scale proven creative concepts that have demonstrated efficiency in testing.

**When to use:** You have 3+ creatives that graduated from testing. You want to scale with Meta's delivery algorithm having maximum flexibility.

### Structure

```
Campaign (Winners -- CBO)
  └── Ad Set: [Single broad ad set, or segmented by funnel stage]
      ├── Ad 1: Proven creative (post ID from testing)
      ├── Ad 2: Proven creative (post ID from testing)
      ├── Ad 3: Proven creative (post ID from testing)
      └── Ad 4: Proven creative (post ID from testing)
```

For accounts with multiple funnel stages, consider:
```
Campaign (Winners -- CBO)
  ├── Ad Set: Cold Prospecting
  │   └── [Proven cold-audience creatives]
  └── Ad Set: Warm Retargeting
      └── [Proven retargeting creatives]
```

### Campaign Settings

| Field | Value |
|-------|-------|
| Objective | OUTCOME_SALES |
| Campaign Budget Optimization | ON (CBO) |
| Daily Budget (Campaign) | 5x-20x daily CPA target (scale from testing campaign spend) |
| Status | PAUSED |

### Ad Set Settings

| Field | Value |
|-------|-------|
| Budget Type | None (CBO manages budget -- do NOT set ad set budgets) |
| Bid Strategy | LOWEST_COST_WITHOUT_CAP (let Meta optimize delivery) |
| Optimization Goal | OFFSITE_CONVERSIONS |
| Attribution Window | 7-day click, 1-day view |
| Placements | Advantage+ Placements |
| Dynamic Creative | false |
| Ad Set Spend Limits | Optional: set minimum spend floor if protecting specific audience segments |

### The Post ID Method (Critical for Social Proof)

When adding proven ads from a testing campaign, use existing ad IDs -- not new creatives. This preserves all social proof (likes, comments, shares) accumulated during testing.

Steps:
1. Note the ad ID(s) from testing campaign: `meta_ads_list_ads` on the testing campaign
2. When creating ads in Winners campaign, reference the existing creative ID
3. The ad will carry all social engagement from the testing period

If you create new creatives instead of using post IDs, you lose social proof and restart the engagement counter. Only create new creatives when there is a specific reason (e.g., different destination URL).

### Audience

| Targeting | Recommendation |
|-----------|---------------|
| Geo | Core market(s) |
| Age/Gender | Broad (let CBO algorithm optimize) |
| Interests | Broad or none -- trust the algorithm with proven creatives |
| Lookalike | Optional: 1-3% LAL of best customers |
| Exclusions | Must set: existing customers, recent converters, current trial users |

### Creative Management

| Rule | Description |
|------|-------------|
| Minimum 3 ads | Below 3 ads, delivery can concentrate too heavily on one |
| Maximum 10 ads | Beyond 10, marginal ads dilute budget from top performers |
| Refresh trigger | Add 2 new tests when top creative CTR drops 15%+ from peak |
| Kill trigger | Pause ads with CPA > 1.5x target for 7+ days |
| Social proof threshold | Never pause an ad with 500+ engagements without replacing it |

---

## Template 3: ASC / Advantage+ Shopping Campaign

**Purpose:** Meta-managed prospecting and retargeting blend optimized for purchase conversions. Uses catalog for DPA when available.

**When to use:** Established account (300+ monthly conversions), has pixel data, optionally has product catalog. ASC works best when Meta has substantial conversion signal to work from.

### Structure

ASC is a single-campaign type managed by Meta's algorithm. You set the budget, conversion event, and creative assets -- Meta handles audience, placement, and delivery optimization.

```
Campaign (ASC / Advantage+)
  └── Ad Group (auto-managed by Meta)
      ├── Manual creative assets (images, videos you provide)
      └── Catalog DPA assets (if catalog connected)
```

### Campaign Settings

| Field | Value |
|-------|-------|
| Objective | OUTCOME_SALES |
| Campaign Type | ADVANTAGE_SHOPPING_CAMPAIGN |
| Budget Type | Daily or Lifetime |
| Existing Customer Budget Cap | Recommended: 10-30% (limits retargeting spend) |
| Status | PAUSED |

### Creative Requirements

| Parameter | Spec |
|-----------|------|
| Minimum assets | 10 recommended (Meta selects best combinations) |
| Asset types | Mix: static images, short videos (6-15s), carousel cards |
| Headlines | 5+ variations recommended |
| Primary text | 3-5 variations recommended |
| Catalog | Connect if available -- enables DPA product ads alongside manual assets |

### Audiences

ASC manages its own audience. You can only set:
- Geographic targeting
- Existing customer budget cap (how much goes to retargeting vs prospecting)
- Exclusions (optional -- some advertisers exclude existing customers from ASC)

### Account Maturity Requirement

ASC performs best at Established or Advanced maturity (from `account_maturity_methodology`). For Nascent or Developing accounts, start with manual campaigns to build conversion signal first.

Minimum signal before launching ASC:
- 100+ purchase events/month in pixel
- 300+ website visitors/day (for retargeting signal)
- 30+ days of purchase event history

---

## Template 4: Lead Generation

**Purpose:** Capture leads via Meta Lead Ads (native form) or website landing page.

**When to use:** Goal is email/contact capture, demo requests, free trial signups, or any conversion that happens before purchase.

### Lead Form vs. Website Decision

| Factor | Use Lead Form | Use Website LP |
|--------|--------------|----------------|
| Conversion friction | Lower (pre-filled form, no page load) | Higher (requires landing page visit) |
| Lead quality | Lower (easy to submit, lower intent) | Higher (deliberate action) |
| CRM sync | Meta Lead Ads API required | Standard pixel event |
| Best for | High-volume, lower-ticket offers | Considered purchases, B2B |

### Structure (Lead Form)

```
Campaign (Lead Gen -- Lead Ads)
  └── Ad Set: [Target audience]
      ├── Ad 1: Creative A + Lead Form
      └── Ad 2: Creative B + Lead Form
```

### Campaign Settings (Lead Form)

| Field | Value |
|-------|-------|
| Objective | OUTCOME_LEADS |
| Lead Method | INSTANT_FORMS |
| Status | PAUSED |

**Note:** Lead forms must be pre-created in Meta Business Suite. The MCP cannot create lead forms (`create_lead_form` is not available). Create the form in Ads Manager UI first, then reference it by form ID when creating the ad creative.

### Campaign Settings (Website Conversion)

| Field | Value |
|-------|-------|
| Objective | OUTCOME_LEADS |
| Conversion Location | WEBSITE |
| Pixel | {pixel_id from account-conventions} |
| Custom Event | Lead (or custom event for qualified lead) |
| Status | PAUSED |

### Ad Set Settings

| Field | Value |
|-------|-------|
| Budget Type | Daily |
| Budget | $50-$200/day (scale with CPL target) |
| Bid Strategy | COST_CAP (set at 1.2x target CPL) or LOWEST_COST_WITHOUT_CAP |
| Optimization Goal | LEAD (or OFFSITE_CONVERSIONS for website) |
| Placements | Advantage+ Placements |

### Creative Requirements

| Parameter | Spec |
|-----------|------|
| Format | Video performs best for lead gen (demonstrates value) |
| Headline | Benefit-led, specific promise ("Get your free X audit") |
| Primary Text | Problem → solution in 2-3 sentences |
| CTA | SIGN_UP, LEARN_MORE, GET_QUOTE, or GET_OFFER |

---

## Template 5: Awareness / Engagement

**Purpose:** Build top-of-funnel brand awareness, video views, or content engagement. Not for direct response.

**When to use:** Pre-launch warming, brand building, video view seeding before retargeting, or engagement campaigns for social proof.

### Structure

```
Campaign (Awareness)
  └── Ad Set: [Broad target audience]
      ├── Ad 1: Video asset 1
      ├── Ad 2: Video asset 2
      └── Ad 3: Static brand asset
```

### Campaign Settings

| Field | Value |
|-------|-------|
| Objective | OUTCOME_AWARENESS or OUTCOME_ENGAGEMENT |
| Status | PAUSED |

### Ad Set Settings

| Field | Value |
|-------|-------|
| Budget Type | Lifetime (recommended for awareness -- better frequency control) |
| Bid Strategy | LOWEST_COST_WITHOUT_CAP |
| Optimization Goal | REACH (awareness) or ThruPlay (video views) or POST_ENGAGEMENT (engagement) |
| Placements | Reels, Feed, Stories -- emphasize video placements |
| Frequency Cap | Set via lifetime budget: 1-2 impressions per person per week for awareness |

### Creative Requirements

| Parameter | Spec |
|-----------|------|
| Format | Video strongly preferred (9:16 Reels format) |
| Video length | 6-15s for ThruPlay, 15-60s for brand storytelling |
| Hook | First 3 seconds determine watch-through rate |
| CTA | Optional for pure awareness -- LEARN_MORE if including |
| Brand visibility | Logo/brand in first 3 seconds |

### Awareness Campaign Gotchas

- Do not optimize for conversions with awareness objective -- wrong signal
- Frequency control is harder with daily budget; use lifetime budget + scheduling
- These campaigns do not feed ROAS directly -- value is in downstream retargeting pools
- Tag awareness campaigns clearly in naming convention so they are excluded from ROAS reporting
