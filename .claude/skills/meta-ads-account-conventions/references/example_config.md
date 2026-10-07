# Example Configs

Two examples are provided:
1. **Single-brand setup** (Apex Athletics managing their own ads)
2. **Agency setup** (Full Funnel Growth managing Apex Athletics as a client)

Both produce the same analysis. The only difference is the organization identity section.

---

## Example 1: Single-Brand Media Buyer

Apex Athletics sells premium athletic apparel DTC. Their in-house media buyer manages two Meta ad accounts (US and UK).

```yaml
# ============================================================
# META ADS ANALYSIS TOOLKIT - ACCOUNT CONVENTIONS
# Brand: Apex Athletics (single-brand setup)
# Last updated: 2026-03-27
# ============================================================

organization:
  name: "Apex Athletics"
  slug: "apex-athletics"            # Used in report file names and UTM attribution
  type: "brand"                     # Single brand, not an agency
```

Everything else (accounts, KPIs, creative config, etc.) is identical to the agency example below. The only difference is `organization.type: "brand"` vs `"agency"`.

---

## Example 2: Agency Managing Client Accounts

Full Funnel Growth (agency) manages Apex Athletics as one of their clients.

```yaml
# ============================================================
# META ADS ANALYSIS TOOLKIT - ACCOUNT CONVENTIONS
# Agency: Full Funnel Growth | Client: Apex Athletics
# Last updated: 2026-03-27
# ============================================================

organization:
  name: "Full Funnel Growth"
  slug: "ffg"                       # Used in report file names and UTM attribution
  type: "agency"                    # Multi-client agency

accounts:

  # ──────────────────────────────────────────────────────
  # ACCOUNT 1: Apex Athletics - United States
  # Primary market, highest volume, most mature account
  # ──────────────────────────────────────────────────────
  - name: "Apex Athletics US"
    slug: "apex-us"
    ad_account_id: "act_1234567890"   # Found in Business Manager > Ad Accounts
    pixel_id: "9876543210"            # Shared pixel across US + UK (same site)
    dataset_id: "ds_1122334455"       # CAPI Gateway dataset, provisioned via Events Manager
    currency: "USD"
    timezone: "America/New_York"      # Must match the ad account timezone setting
    business_model: "ecommerce"       # Pure DTC, Shopify storefront
    maturity_level: "established"     # 150+ conversions/mo, $35K/mo spend
    monthly_conversion_volume: 180    # Average monthly purchases attributed to Meta
    monthly_spend: 35000              # Average monthly spend in USD
    status: "active"

    capabilities:
      has_capi: true                  # Server-side events via Shopify CAPI integration
      has_catalog: true               # Shopify product feed synced to Meta Commerce Manager
      has_advantage_plus: true        # ASC enabled, running since Jan 2026
      has_value_optimization: true    # Optimizing for purchase value (not just purchase count)
      has_custom_conversions: true    # "High-Value Purchase" custom conversion for orders >$150
      campaign_types_active:
        - prospecting                 # Cold audience acquisition via broad + LAL
        - retargeting                 # Website visitors, cart abandoners, IG engagers
        - asc                         # Advantage+ Shopping Campaign (primary scaling vehicle)
        - catalog_sales               # Dynamic product ads for retargeting

    kpi_config:
      primary_kpi: "roas"             # Ecommerce = ROAS-driven, target 4x blended
      targets:
        cpa: 45.00                    # $45 target CPA (AOV $120, 37.5% of AOV)
        roas: 4.0                     # 4x blended ROAS target
        cpl: 0.00                     # Not applicable for ecommerce
        cpv: 0.00                     # Not applicable
        cpm: 0.00                     # Not a primary metric, tracked but not targeted
        ctr: 0.015                    # 1.5% CTR target across all placements
        hook_rate: 0.35               # 35% 3-second video view rate
        hold_rate: 0.15               # 15% ThruPlay completion rate
        frequency_cap: 3.0            # Flag fatigue above 3x weekly frequency
        cpc: 1.20                     # $1.20 target CPC
      flag_thresholds:
        critical:
          cpa_over_target_pct: 40     # CPA > $63 = critical (45 * 1.4)
          roas_under_target_pct: 35   # ROAS < 2.6x = critical (4.0 * 0.65)
          frequency_above: 4.5        # 4.5x frequency = severe creative fatigue
          ctr_below: 0.006            # Sub-0.6% CTR = creative relevance crisis
          spend_no_conversions_hours: 36  # Tighter than default; high-volume account
        warning:
          cpa_over_target_pct: 20     # CPA > $54 = warning (45 * 1.2)
          roas_under_target_pct: 20   # ROAS < 3.2x = warning (4.0 * 0.8)
          frequency_above: 2.5        # 2.5x frequency = early fatigue signal
          ctr_below: 0.012            # Sub-1.2% CTR = creative refresh needed
          spend_no_conversions_hours: 18  # Tighter for high-spend account

    creative_config:
      testing_framework: "dct"        # Dynamic Creative Testing via Flexible Ads
                                      # Each "ad" contains multiple headlines, images, CTAs
                                      # Meta auto-optimizes combinations
      weekly_creative_volume_target: 8  # 8 new creatives/week to sustain ASC performance
      creative_types_active:
        - static                      # Lifestyle product shots, benefit callouts
        - video                       # 15-30s product demos, workout content
        - ugc                         # Athlete testimonials, unboxing videos
        - carousel                    # Product collection showcases
        - catalog                     # Dynamic product ads from Shopify feed

    audience_config:
      warm_audiences:
        - name: "Website Visitors 180d"
          audience_id: "aud_100001"
          type: "website"
          lookback_days: 180
        - name: "Add to Cart 30d"
          audience_id: "aud_100002"
          type: "website"
          lookback_days: 30
        - name: "Purchasers 365d"
          audience_id: "aud_100003"
          type: "website"
          lookback_days: 365
        - name: "IG Engagers 365d"
          audience_id: "aud_100004"
          type: "ig_engagers"
          lookback_days: 365
        - name: "Video Viewers 50% 180d"
          audience_id: "aud_100005"
          type: "video_viewers"
          lookback_days: 180
        - name: "Email Subscribers"
          audience_id: "aud_100006"
          type: "customer_list"
          lookback_days: 0            # Customer list, no lookback
      exclusion_audiences:
        - name: "Purchasers 30d"
          audience_id: "aud_200001"   # Exclude recent buyers from prospecting
        - name: "Refund Requestors"
          audience_id: "aud_200002"   # Suppress known bad-fit customers
      lookalike_sources:
        - name: "Top 25% LTV Customers"
          audience_id: "aud_300001"
          recommended_pct: "1-3"      # Best-performing seed, keep tight
        - name: "60-day Purchasers"
          audience_id: "aud_300002"
          recommended_pct: "1-5"      # Broader seed for scale
        - name: "High-Value Add to Cart"
          audience_id: "aud_300003"
          recommended_pct: "2-5"      # Mid-funnel signal for volume
      advantage_plus_enabled: true    # Advantage+ Audience is default for ASC campaigns

    naming_conventions:
      campaign: "{objective}_{audience}_{geo}_{launch_date}"
        # Examples:
        #   CONV_PROS_US_2026-03     (conversion, prospecting, US, March 2026)
        #   CONV_RT_US_2026-03       (conversion, retargeting, US)
        #   CONV_ASC_US_2026-02      (conversion, Advantage+ Shopping, US)
        #   CATALOG_RT_US_2026-03    (catalog sales, retargeting, US)
      ad_set: "{targeting}_{placement}_{bid_strategy}_{budget}"
        # Examples:
        #   BROAD_AUTO_LCAP45_CBO    (broad targeting, auto placement, $45 cost cap, CBO)
        #   LAL3-LTV_AUTO_AUTO_CBO   (3% LAL from LTV seed, auto placement, lowest cost)
        #   RT-ATC30_AUTO_AUTO_D25   (retarget cart 30d, auto, lowest cost, $25/day)
      ad: "{creative_type}_{concept}_{variant}_{format}"
        # Examples:
        #   VID_WORKOUT-DEMO_V2_9x16   (video, workout demo concept, variant 2, vertical)
        #   UGC_ATHLETE-UNBOX_V1_4x5   (UGC, athlete unboxing, variant 1, 4:5)
        #   STATIC_BENEFIT-GRID_V3_1x1  (static, benefit grid, variant 3, square)
        #   DPA_COLLECTION_V1_1x1       (dynamic product ad, default template)

    measurement:
      attribution_window: "7d_click_1d_view"  # Broadest window; ecom benefits from view-through
      third_party_tool: "triple_whale"         # Triple Whale for cross-channel attribution
      utm_structure:
        utm_source: "meta"
        utm_medium: "paid-social"
        utm_campaign: "{campaign_name}"        # Mirrors Meta campaign name exactly
        utm_content: "{ad_set_name}"
        utm_term: "{ad_name}"

    compliance:
      special_ad_categories: "none"   # Athletic apparel, no restricted categories
      gdpr_applicable: false          # US-only account
      ccpa_applicable: true           # Ships to California, must enable LDU

    reporting:
      period: "last_7_days"
      comparison: "preceding_period"
      output_path: "reportsapex_us/"
      output_naming: "{account_slug}_{skill_name}_{date}"
        # Example: apex-us_campaign-diagnostics_2026-03-27.md

  # ──────────────────────────────────────────────────────
  # ACCOUNT 2: Apex Athletics - United Kingdom
  # Secondary market, lower volume, developing maturity
  # Launched 3 months ago, still building conversion data
  # ──────────────────────────────────────────────────────
  - name: "Apex Athletics UK"
    slug: "apex-uk"
    ad_account_id: "act_9876543210"
    pixel_id: "9876543210"            # Same pixel as US (shared Shopify site)
    dataset_id: "ds_1122334455"       # Same CAPI dataset
    currency: "GBP"                   # British Pounds
    timezone: "Europe/London"
    business_model: "ecommerce"
    maturity_level: "developing"      # 45 conversions/mo, ramping up
    monthly_conversion_volume: 45
    monthly_spend: 8000               # ~$10K USD equivalent
    status: "active"

    capabilities:
      has_capi: true                  # Same server-side setup as US
      has_catalog: true               # Same Shopify feed, GBP pricing
      has_advantage_plus: false       # Not enough data for ASC yet; need 100+ conv/mo
      has_value_optimization: false   # Insufficient volume; optimizing for purchase count
      has_custom_conversions: false   # Using standard events only at this stage
      campaign_types_active:
        - prospecting                 # Primary focus: build conversion volume
        - retargeting                 # Small retargeting pool from site traffic

    kpi_config:
      primary_kpi: "cpa"              # CPA-focused while building volume for ROAS optimization
      targets:
        cpa: 28.00                    # GBP 28 target CPA (AOV GBP 85)
        roas: 3.0                     # Secondary ROAS target, less reliable at this volume
        cpl: 0.00
        cpv: 0.00
        cpm: 0.00
        ctr: 0.012                    # Slightly lower CTR target; new market, testing creative
        hook_rate: 0.30
        hold_rate: 0.12
        frequency_cap: 3.5            # More lenient; smaller audience = higher natural frequency
        cpc: 0.90                     # GBP 0.90
      flag_thresholds:
        critical:
          cpa_over_target_pct: 60     # More lenient for developing account (28 * 1.6 = 44.80)
          roas_under_target_pct: 50   # ROAS < 1.5x = critical
          frequency_above: 5.0        # Higher threshold; small audience saturates faster
          ctr_below: 0.005
          spend_no_conversions_hours: 72  # Longer leash; lower conversion volume
        warning:
          cpa_over_target_pct: 30
          roas_under_target_pct: 25
          frequency_above: 3.0
          ctr_below: 0.01
          spend_no_conversions_hours: 36

    creative_config:
      testing_framework: "manual_ab"  # Manual A/B at this stage; not enough volume for DCT
      weekly_creative_volume_target: 3  # 3 new creatives/week; smaller budget, fewer tests
      creative_types_active:
        - static                      # Adapted from US top performers
        - video                       # Localized versions of US winners

    audience_config:
      warm_audiences:
        - name: "UK Website Visitors 180d"
          audience_id: "aud_400001"
          type: "website"
          lookback_days: 180
        - name: "UK IG Engagers 365d"
          audience_id: "aud_400002"
          type: "ig_engagers"
          lookback_days: 365
      exclusion_audiences:
        - name: "UK Purchasers 30d"
          audience_id: "aud_500001"
      lookalike_sources:
        - name: "US Top Purchasers (seed for UK)"
          audience_id: "aud_300001"   # Using US customer data as seed
          recommended_pct: "2-5"      # Wider range for cross-market LAL
      advantage_plus_enabled: false   # Manual audience selection at this maturity

    naming_conventions:
      campaign: "{objective}_{audience}_{geo}_{launch_date}"
        # Example: CONV_PROS_UK_2026-01
      ad_set: "{targeting}_{placement}_{bid_strategy}_{budget}"
        # Example: LAL3-USCUST_AUTO_AUTO_D20
      ad: "{creative_type}_{concept}_{variant}_{format}"
        # Example: VID_WORKOUT-DEMO_V1-UK_9x16

    measurement:
      attribution_window: "7d_click"  # No view-through; want cleaner signal at low volume
      third_party_tool: "triple_whale"
      utm_structure:
        utm_source: "meta"
        utm_medium: "paid-social"
        utm_campaign: "{campaign_name}"
        utm_content: "{ad_set_name}"
        utm_term: "{ad_name}"

    compliance:
      special_ad_categories: "none"
      gdpr_applicable: true           # UK/EU audiences, consent mode required
      ccpa_applicable: false          # No US audience in this account

    reporting:
      period: "last_14_days"          # Longer window for lower-volume account
      comparison: "preceding_period"
      output_path: "reportsapex_uk/"
      output_naming: "{account_slug}_{skill_name}_{date}"

# --- Data Source ---
data_source:
  method: "mcp"                       # Automated data pull via Pipeboard MCP server
  mcp_server: "pipeboard"
  csv_import_path: ""                 # Not needed when using MCP
  manual_instructions: ""
```

## Key Differences Between Accounts

| Dimension | Apex US (Established) | Apex UK (Developing) |
|-----------|----------------------|---------------------|
| Monthly conversions | 180 | 45 |
| Monthly spend | $35,000 | GBP 8,000 |
| Primary KPI | ROAS (4x target) | CPA (GBP 28 target) |
| ASC enabled | Yes | No (insufficient volume) |
| VBO enabled | Yes | No (need 100+ conversions first) |
| Creative testing | DCT (Flexible Ads) | Manual A/B |
| Weekly creatives | 8 | 3 |
| Attribution window | 7d click + 1d view | 7d click only |
| Flag thresholds | Tighter (high confidence) | Looser (still learning) |
| Audience approach | Advantage+ default | Manual audience selection |
| GDPR | No (US only) | Yes (UK/EU) |
| CCPA | Yes (California) | No (UK only) |

## Why These Choices

**US account (established):** With 180 monthly conversions and $35K spend, this account has enough data to leverage Meta's machine learning fully. ASC, VBO, DCT, and Advantage+ Audience all benefit from high signal volume. Tighter flag thresholds catch issues faster because the data is statistically reliable.

**UK account (developing):** At 45 conversions/month, the algorithm needs more explicit guidance. Manual A/B testing prevents wasted spend on under-powered DCT experiments. CPA as primary KPI (instead of ROAS) provides a clearer optimization signal at lower volumes. Looser flag thresholds prevent false alarms from natural variance in small sample sizes.

This dual-account setup is common for brands expanding internationally. The US account playbook becomes the roadmap for the UK account as it matures.
