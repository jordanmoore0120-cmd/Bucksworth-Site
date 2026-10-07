# Example Configuration: Apex Digital (Fictional Agency)

This annotated example shows a complete `account_conventions/config.yaml` for a fictional agency managing four accounts across different business models.

---

```yaml
# ============================================================
# Apex Digital -- Google Ads Toolkit Configuration
# Generated: 2026-03-15
# Last updated: 2026-03-15
# ============================================================

agency:
  name: Apex Digital
  slug: apex-digital
  mcc_id: "1234567890"  # Manager account ID

# ------------------------------------------------------------
# ACCOUNTS
# Each account defines its business model, maturity level,
# KPI targets, and capability flags. These fields control
# which toolkit skills are invoked during analysis.
# ------------------------------------------------------------

accounts:
  # --- Lead Generation Account ---
  - name: Meridian Law Group
    slug: meridian-law
    cid: "1112223334"
    currency: USD
    timezone: America/New_York
    business_model: lead_gen
    maturity_level: developing    # 25 conversions/month, 8 months active
    monthly_conversion_volume: 25
    status: active

    has_offline_conversions: true   # CRM imports qualified leads
    has_gbp: true                   # 3 office locations
    has_merchant_center: false
    has_youtube_campaigns: false
    has_demand_gen_campaigns: true   # Running Demand Gen for lead gen
    campaign_types_active:
      - search
      - pmax
      - demand_gen
      - local

    primary_kpi: cpa
    primary_kpi_target: 85         # $85 target CPA
    secondary_kpi: cpl             # Cost per qualified lead (from CRM)
    secondary_kpi_target: 150
    flag_thresholds:
      critical: 170                # CPA > $170 = red flag
      warning: 120                 # CPA > $120 = yellow flag

    campaign_naming_pattern: "apex.[region].[practice].[type]"
    special_handling_notes: "Offshore conversion import runs weekly on Mondays. Conversion data before Monday may be incomplete for the prior week."

    conversion_actions:
      - name: "Form Submission"
        classification: primary
        include_in_maturity: true
        include_in_reporting: true
        value: static
        count: one
      - name: "Phone Call (60s+)"
        classification: secondary
        include_in_maturity: true
        include_in_reporting: true
        value: static
        count: one
      - name: "Chat Initiated"
        classification: secondary
        include_in_maturity: false
        include_in_reporting: true
        value: none
        count: one
      - name: "Page View - Contact"
        classification: micro
        include_in_maturity: false
        include_in_reporting: false
        value: none
        count: one

    has_utm_tracking: true
    utm_enforcement: required
    campaign_naming_convention: "apex.[region].[practice].[type]"

  # --- eCommerce Account ---
  - name: Brightleaf Home
    slug: brightleaf-home
    cid: "5556667778"
    currency: USD
    timezone: America/Los_Angeles
    business_model: ecommerce
    maturity_level: established    # 75 conversions/month, 18 months active
    monthly_conversion_volume: 75
    status: active

    has_offline_conversions: false
    has_gbp: false
    has_merchant_center: true      # Full product feed connected
    has_youtube_campaigns: true    # Running YouTube awareness
    has_demand_gen_campaigns: true
    campaign_types_active:
      - search
      - pmax
      - shopping
      - youtube
      - demand_gen

    primary_kpi: roas
    primary_kpi_target: 4.0        # 4x ROAS target
    secondary_kpi: null
    secondary_kpi_target: null
    flag_thresholds:
      critical: 2.0                # ROAS < 2x = red flag
      warning: 3.0                 # ROAS < 3x = yellow flag

    campaign_naming_pattern: "bl.[category].[campaign_type].[funnel_stage]"
    special_handling_notes: "Q4 seasonality peaks Nov-Dec. Adjust ROAS targets to 3x during peak season (higher spend, lower efficiency acceptable)."

    conversion_actions:
      - name: "Purchase"
        classification: primary
        include_in_maturity: true
        include_in_reporting: true
        value: dynamic
        count: every
      - name: "Add to Cart"
        classification: secondary
        include_in_maturity: false
        include_in_reporting: true
        value: dynamic
        count: every
      - name: "Begin Checkout"
        classification: secondary
        include_in_maturity: false
        include_in_reporting: true
        value: dynamic
        count: every
      - name: "Page View - Product"
        classification: micro
        include_in_maturity: false
        include_in_reporting: false
        value: none
        count: every

    has_utm_tracking: true
    utm_enforcement: recommended
    campaign_naming_convention: "bl.[category].[campaign_type].[funnel_stage]"

  # --- Local Business Account ---
  - name: Summit Dental Group
    slug: summit-dental
    cid: "9998887776"
    currency: USD
    timezone: America/Chicago
    business_model: local
    maturity_level: nascent        # 8 conversions/month, 3 months active
    monthly_conversion_volume: 8
    status: active

    has_offline_conversions: false  # Call tracking only, no CRM import yet
    has_gbp: true                   # 2 locations
    has_merchant_center: false
    has_youtube_campaigns: false
    has_demand_gen_campaigns: false
    campaign_types_active:
      - search
      - local
      - lsa

    primary_kpi: cpa
    primary_kpi_target: 45         # $45 per appointment booking
    secondary_kpi: null
    secondary_kpi_target: null
    flag_thresholds:
      critical: 90
      warning: 65

    campaign_naming_pattern: null    # No formal convention yet
    special_handling_notes: "New client. Conversion tracking is phone calls only (Google forwarding number). Goal is to add online booking form tracking by month 2."

    conversion_actions:
      - name: "Phone Call (30s+)"
        classification: primary
        include_in_maturity: true
        include_in_reporting: true
        value: static
        count: one
      - name: "Directions Click"
        classification: micro
        include_in_maturity: false
        include_in_reporting: false
        value: none
        count: one

    has_utm_tracking: false
    utm_enforcement: recommended
    campaign_naming_convention: null

  # --- Dual Business Model Account ---
  - name: TechForge Solutions
    slug: techforge
    cid: "4443332221"
    currency: GBP
    timezone: Europe/London
    business_model: dual            # eCommerce (parts store) + lead gen (enterprise contracts)
    maturity_level: advanced        # 120 conversions/month, 3 years active
    monthly_conversion_volume: 120
    status: active

    has_offline_conversions: true   # Enterprise lead pipeline from Salesforce
    has_gbp: false
    has_merchant_center: true       # Parts catalog feed
    has_youtube_campaigns: true
    has_demand_gen_campaigns: true
    campaign_types_active:
      - search
      - pmax
      - shopping
      - youtube
      - demand_gen
      - display

    # Dual KPIs -- split by campaign naming convention
    primary_kpi: roas              # For .ec. campaigns (eCommerce)
    primary_kpi_target: 5.0
    secondary_kpi: cpa             # For .lg. campaigns (lead gen)
    secondary_kpi_target: 200
    flag_thresholds:
      critical: 2.5               # ROAS < 2.5x for eCom, CPA > 400 for lead gen
      warning: 3.5                # ROAS < 3.5x for eCom, CPA > 280 for lead gen

    campaign_naming_pattern: "tf.[division].{ec|lg}.[campaign_type].[product_line]"
    special_handling_notes: "Campaign names contain .ec. for eCommerce division and .lg. for lead gen division. Analyze and report each division separately. Never blend .ec. and .lg. metrics."

    conversion_actions:
      - name: "Purchase"
        classification: primary
        include_in_maturity: true
        include_in_reporting: true
        value: dynamic
        count: every
      - name: "Enterprise Lead Form"
        classification: primary
        include_in_maturity: true
        include_in_reporting: true
        value: static
        count: one
      - name: "Request a Quote"
        classification: secondary
        include_in_maturity: false
        include_in_reporting: true
        value: none
        count: one
      - name: "PDF Download"
        classification: micro
        include_in_maturity: false
        include_in_reporting: false
        value: none
        count: every

    business_lines:
      - name: "eCommerce (Parts Store)"
        identifier_type: naming_convention
        identifier_pattern: ".ec."
        primary_kpi: roas
        primary_kpi_target: 5.0
        flag_thresholds:
          critical: 2.5
          warning: 3.5
      - name: "Lead Gen (Enterprise Contracts)"
        identifier_type: naming_convention
        identifier_pattern: ".lg."
        primary_kpi: cpa
        primary_kpi_target: 200
        flag_thresholds:
          critical: 400
          warning: 280

    has_utm_tracking: true
    utm_enforcement: required
    campaign_naming_convention: "tf.[division].{ec|lg}.[campaign_type].[product_line]"

# ------------------------------------------------------------
# BRAND TERMS
# global_protected: never negate these across any account
# per_account: account-specific brand terms and competitors
# ------------------------------------------------------------

brand_terms:
  global_protected:
    - "apex digital"               # Agency name (if running own campaigns)

  per_account:
    meridian-law:
      brand_terms:
        - "meridian law"
        - "meridian law group"
        - "meridian legal"
      competitor_terms:
        - "smith & associates"
        - "citywide legal"

    brightleaf-home:
      brand_terms:
        - "brightleaf"
        - "brightleaf home"
        - "bright leaf"            # Common misspelling
      competitor_terms:
        - "greenhaus living"
        - "terra home goods"

    summit-dental:
      brand_terms:
        - "summit dental"
        - "summit dental group"
      competitor_terms:
        - "lakeside dental"
        - "premier dental care"

    techforge:
      brand_terms:
        - "techforge"
        - "tech forge"
        - "techforge solutions"
      competitor_terms:
        - "industrion"
        - "precisionparts uk"

# ------------------------------------------------------------
# NEGATIVE SIGNALS
# Universal: patterns that are almost always irrelevant
# Per-account: vertical-specific negative patterns
# ------------------------------------------------------------

negative_signals:
  universal:
    - term: "jobs"
      reason: "Employment seekers, not customers"
      match_type: broad
    - term: "careers"
      reason: "Employment seekers"
      match_type: broad
    - term: "salary"
      reason: "Employment research"
      match_type: broad
    - term: "free"
      reason: "Freebie seekers, low purchase intent"
      match_type: phrase
    - term: "DIY"
      reason: "Self-service intent, not service buyers"
      match_type: broad
    - term: "how to"
      reason: "Informational intent, not transactional"
      match_type: phrase
    - term: "reddit"
      reason: "Forum browsing, not purchase intent"
      match_type: broad
    - term: "quora"
      reason: "Q&A browsing"
      match_type: broad

  per_account:
    meridian-law:
      - term: "pro bono"
        reason: "Free legal services, not paying clients"
        match_type: phrase
      - term: "law school"
        reason: "Students, not clients"
        match_type: broad
      - term: "paralegal"
        reason: "Employment, not client services"
        match_type: broad

    brightleaf-home:
      - term: "wholesale"
        reason: "B2B pricing, DTC only"
        match_type: broad
      - term: "used"
        reason: "Secondhand market, sells new only"
        match_type: broad

    summit-dental:
      - term: "dental school"
        reason: "Education, not patients"
        match_type: broad
      - term: "dental assistant"
        reason: "Employment seekers"
        match_type: broad

    techforge:
      - term: "open source"
        reason: "Free software seekers"
        match_type: phrase
      - term: "download"
        reason: "Software download intent, not hardware purchase"
        match_type: broad

# ------------------------------------------------------------
# PRODUCT FEED
# Only for accounts with Merchant Center connected
# ------------------------------------------------------------

product_feed:
  brightleaf-home:
    feed_source: merchant_center
    title_optimization_status: partial   # Some titles optimized, many still manufacturer defaults
    custom_labels_in_use:
      - "margin_tier"                    # High/Medium/Low margin
      - "seasonal"                       # Spring/Summer/Fall/Winter/Evergreen

  techforge:
    feed_source: both                    # Merchant Center + supplemental feed for specs
    title_optimization_status: optimized
    custom_labels_in_use:
      - "division"                       # ec (eCommerce) vs lg (lead gen accessory)
      - "product_line"
      - "price_tier"

# ------------------------------------------------------------
# LOCAL CONFIG
# Only for accounts with local business model or GBP connected
# ------------------------------------------------------------

local_config:
  meridian-law:
    locations:
      - name: "Downtown Office"
        address: "100 Main St, Hartford, CT 06103"
        gbp_id: "ChIJ_example1"
        radius_miles: 25
        service_area: false
        timezone: America/New_York
        operating_hours:
          weekday: "8:00-18:00"
          saturday: "9:00-13:00"
          sunday: closed
        campaign_separation: false
        tourism_relevant: false
      - name: "Waterbury Office"
        address: "45 Bank St, Waterbury, CT 06702"
        gbp_id: "ChIJ_example2"
        radius_miles: 20
        service_area: false
        timezone: America/New_York
        operating_hours:
          weekday: "8:00-18:00"
          saturday: closed
          sunday: closed
        campaign_separation: false
        tourism_relevant: false
      - name: "New Haven Office"
        address: "200 Church St, New Haven, CT 06510"
        gbp_id: "ChIJ_example3"
        radius_miles: 20
        service_area: false
        timezone: America/New_York
        operating_hours:
          weekday: "8:00-18:00"
          saturday: "9:00-13:00"
          sunday: closed
        campaign_separation: false
        tourism_relevant: false
    offline_conversion_source: crm
    lsa_active: false

  summit-dental:
    locations:
      - name: "Summit Dental - Lincoln Park"
        address: "2400 N Clark St, Chicago, IL 60614"
        gbp_id: "ChIJ_example4"
        radius_miles: 8
        service_area: false
        timezone: America/Chicago
        operating_hours:
          weekday: "7:00-19:00"
          saturday: "8:00-14:00"
          sunday: closed
        campaign_separation: true    # Separate campaigns per location for budget control
        tourism_relevant: false
      - name: "Summit Dental - Evanston"
        address: "1500 Sherman Ave, Evanston, IL 60201"
        gbp_id: "ChIJ_example5"
        radius_miles: 6
        service_area: false
        timezone: America/Chicago
        operating_hours:
          weekday: "8:00-18:00"
          saturday: "9:00-13:00"
          sunday: closed
        campaign_separation: true
        tourism_relevant: false
    offline_conversion_source: call_tracking
    lsa_active: true

# ------------------------------------------------------------
# REPORTING
# Controls analysis periods, comparison logic, and output
# ------------------------------------------------------------

reporting:
  period: thu_wed
  comparison_method: both
  prior_year_alignment: iso_week
  output_path: ".analysis_output/"
  output_naming: "{client} - Analysis Week {week}.md"
  include_cross_account_summary: true

# ------------------------------------------------------------
# DATA SOURCE
# How Google Ads data is pulled
# ------------------------------------------------------------

data_source:
  method: mcp
  developer_token: "YOUR_DEVELOPER_TOKEN"
  login_customer_id: "1234567890"    # MCC ID
  api_version: "v20"

# ------------------------------------------------------------
# MERCHANT CENTER
# For Shopping and PMax product feed data
# ------------------------------------------------------------

merchant_center:
  available: true
  method: python_api
  merchant_id: "9876543210"
  mcp_server_name: null

# ------------------------------------------------------------
# GA4
# For cross-channel attribution and on-site behavior data
# ------------------------------------------------------------

ga4:
  available: true
  method: csv                        # Manual export from GA4 UI
  property_id: "123456789"
  mcp_server_name: null

# ------------------------------------------------------------
# USAGE TRACKING
# Auto-populated by toolkit skills after each run
# verbose_mode auto-sets to false after 5 runs per skill
# ------------------------------------------------------------

usage_tracking:
  performance-analysis:
    run_count: 12
    last_run: 2026-03-27
    verbose_mode: false
  mine-search-terms:
    run_count: 8
    last_run: 2026-03-27
    verbose_mode: false
  audit-bidding:
    run_count: 3
    last_run: 2026-03-20
    verbose_mode: true
  analyze-pmax:
    run_count: 1
    last_run: 2026-03-15
    verbose_mode: true
```

---

## Notes on This Example

- **Meridian Law** (lead gen + local): demonstrates GBP integration, offline conversions, and Demand Gen for lead generation
- **Brightleaf Home** (eCommerce): demonstrates product feed config, YouTube campaigns, and seasonal handling
- **Summit Dental** (local, nascent): demonstrates a new, low-volume account with LSAs and minimal tracking
- **TechForge Solutions** (dual, advanced): demonstrates split business model with campaign naming conventions driving separate analysis

No real agency, client, or account data appears in this example.
