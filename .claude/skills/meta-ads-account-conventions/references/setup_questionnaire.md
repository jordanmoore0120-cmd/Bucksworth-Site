# Account Conventions Setup Questionnaire

Use this interactive guide to populate the account-conventions config for a new agency or client. Work through each phase sequentially. Skip phases that don't apply (e.g., Phase 7 if no catalog is connected).

## How to Use

Walk the client or account manager through each phase. After completing all phases, the answers map directly to fields in the SKILL.md config schema. Copy the completed YAML into the config and validate.

---

## Phase 1: Agency Identity

> These fields identify the agency managing the account(s).

1. **What is the agency or team name?**
   Maps to: `agency.name`

2. **What slug should we use for file naming?** (lowercase, no spaces, e.g., "ffg")
   Maps to: `agency.slug`

---

## Phase 2: Account Basics

> Repeat this phase for each Meta ad account under management.

3. **What is the human-readable account name?** (e.g., "Apex Athletics US")
   Maps to: `accounts[].name`

4. **What slug should we use?** (e.g., "apex-us")
   Maps to: `accounts[].slug`

5. **What is the Meta ad account ID?** (format: act_XXXXX, found in Business Manager > Ad Accounts)
   Maps to: `accounts[].ad_account_id`

6. **What is the Meta Pixel ID?** (found in Events Manager)
   Maps to: `accounts[].pixel_id`

7. **Is Conversions API (CAPI) implemented?** If yes, what is the dataset ID?
   Maps to: `accounts[].dataset_id`, `accounts[].capabilities.has_capi`

8. **What currency does this account use?** (ISO 4217, e.g., USD, GBP, EUR)
   Maps to: `accounts[].currency`

9. **What timezone is the ad account set to?** (IANA format, e.g., America/New_York)
   Maps to: `accounts[].timezone`

10. **What is the account status?** (active, paused, onboarding, offboarding)
    Maps to: `accounts[].status`

---

## Phase 3: Business Model and Maturity

> These answers calibrate every recommendation in the toolkit.

11. **What is the business model?**
    - Ecommerce (online store, physical products)
    - Lead generation (form fills, phone calls, appointments)
    - SaaS (software subscriptions)
    - App (mobile app installs and in-app events)
    - Local (brick-and-mortar, service area)
    - Dual (combination, specify which)

    Maps to: `accounts[].business_model`

12. **How many conversions (purchases/leads) does this account generate per month?**
    - Under 30 = Nascent
    - 30-100 = Developing
    - 100-300 = Established
    - 300+ = Advanced

    Maps to: `accounts[].monthly_conversion_volume`, `accounts[].maturity_level`

13. **What is the average monthly ad spend?**
    Maps to: `accounts[].monthly_spend`

---

## Phase 4: Capability Flags

> These determine which toolkit skills are relevant.

14. **Is a product catalog connected?** (for dynamic product ads)
    Maps to: `accounts[].capabilities.has_catalog`

15. **Are Advantage+ Shopping Campaigns (ASC) enabled?**
    Maps to: `accounts[].capabilities.has_advantage_plus`

16. **Is Value-Based Optimization (VBO) active?** (optimizing for purchase value, not just purchase count)
    Maps to: `accounts[].capabilities.has_value_optimization`

17. **Are Custom Conversions defined?** (beyond standard events like Purchase, Lead, AddToCart)
    Maps to: `accounts[].capabilities.has_custom_conversions`

18. **Which campaign types are currently active?** (select all that apply)
    - [ ] Prospecting (cold audiences, new customer acquisition)
    - [ ] Retargeting (warm audiences, website visitors, cart abandoners)
    - [ ] ASC (Advantage+ Shopping Campaigns)
    - [ ] Advantage+ App Campaigns
    - [ ] Demand Gen / Awareness
    - [ ] Catalog Sales (dynamic product ads)
    - [ ] Lead Gen (on-platform lead forms)

    Maps to: `accounts[].capabilities.campaign_types_active`

---

## Phase 5: KPI Configuration

> Defines targets and flag thresholds for automated analysis.

19. **What is the primary KPI?**
    - CPA (cost per acquisition/purchase)
    - ROAS (return on ad spend)
    - CPL (cost per lead)
    - CPV (cost per value event)
    - CPM (cost per thousand impressions, awareness)

    Maps to: `accounts[].kpi_config.primary_kpi`

20. **What are the target values for each relevant KPI?**

    | KPI | Target Value |
    |-----|-------------|
    | CPA | $_____ |
    | ROAS | _____x |
    | CPL | $_____ |
    | CTR | _____% |
    | Hook Rate (3s view rate) | _____% |
    | Hold Rate (ThruPlay rate) | _____% |
    | Frequency Cap | _____ |
    | CPC | $_____ |

    Maps to: `accounts[].kpi_config.targets`

21. **At what point should we flag a critical issue?**
    - CPA exceeds target by _____% (default: 50%)
    - ROAS falls below target by _____% (default: 40%)
    - Frequency above _____ (default: 4.0)
    - CTR below _____ (default: 0.5%)
    - Hours spending with zero conversions: _____ (default: 48)

    Maps to: `accounts[].kpi_config.flag_thresholds.critical`

22. **At what point should we flag a warning?**
    - CPA exceeds target by _____% (default: 20%)
    - ROAS falls below target by _____% (default: 20%)
    - Frequency above _____ (default: 2.5)
    - CTR below _____ (default: 1.0%)
    - Hours spending with zero conversions: _____ (default: 24)

    Maps to: `accounts[].kpi_config.flag_thresholds.warning`

---

## Phase 6: Creative Configuration

> Controls how creative analysis and briefing skills operate.

23. **What creative testing framework do you use?**
    - DCT (Dynamic Creative Testing via Flexible Ads)
    - Manual A/B (separate ads per variant)
    - Faris Method (structured creative testing with isolation)

    Maps to: `accounts[].creative_config.testing_framework`

24. **How many new creatives should be produced per week?**
    Maps to: `accounts[].creative_config.weekly_creative_volume_target`

25. **Which creative formats are currently in rotation?** (select all)
    - [ ] Static images
    - [ ] Video
    - [ ] UGC (user-generated content)
    - [ ] Carousel
    - [ ] Catalog / Dynamic Product Ads
    - [ ] Collection / Instant Experience

    Maps to: `accounts[].creative_config.creative_types_active`

---

## Phase 7: Audience Configuration

> Defines the audience strategy and available audience assets.

26. **List all warm/retargeting audiences currently in the account:**

    | Audience Name | Type | Lookback Days |
    |---------------|------|---------------|
    | e.g., Website Visitors 180d | website | 180 |
    | e.g., IG Engagers 365d | ig_engagers | 365 |
    | | | |

    Types: website, customer_list, video_viewers, ig_engagers, fb_page, app_activity

    Maps to: `accounts[].audience_config.warm_audiences`

27. **Which audiences are excluded from prospecting campaigns?**
    (Typically: purchasers, existing customers, leads already in pipeline)

    Maps to: `accounts[].audience_config.exclusion_audiences`

28. **What seed audiences are used for lookalikes?**

    | Seed Audience | Recommended LAL % |
    |---------------|-------------------|
    | e.g., Top 25% LTV Customers | 1-3% |
    | e.g., 60-day Purchasers | 1-5% |
    | | |

    Maps to: `accounts[].audience_config.lookalike_sources`

29. **Is Advantage+ Audience the default targeting method?** (yes/no)
    Maps to: `accounts[].audience_config.advantage_plus_enabled`

---

## Phase 8: Naming Conventions

> Standardized naming enables automated parsing and reporting.

30. **Campaign naming template:**
    Default: `{objective}_{audience}_{geo}_{launch_date}`
    Example: `CONV_PROS_US_2026-03`

    Supported tokens: `{objective}`, `{audience}`, `{geo}`, `{launch_date}`, `{product}`, `{funnel_stage}`

    Maps to: `accounts[].naming_conventions.campaign`

31. **Ad set naming template:**
    Default: `{targeting}_{placement}_{bid_strategy}_{budget}`
    Example: `LAL3-LTV_AUTO_LCAP50_D50`

    Supported tokens: `{targeting}`, `{placement}`, `{bid_strategy}`, `{budget}`, `{age_range}`, `{gender}`

    Maps to: `accounts[].naming_conventions.ad_set`

32. **Ad naming template:**
    Default: `{creative_type}_{concept}_{variant}_{format}`
    Example: `VID_TESTIMON_V3_9x16`

    Supported tokens: `{creative_type}`, `{concept}`, `{variant}`, `{format}`, `{cta}`, `{headline_id}`

    Maps to: `accounts[].naming_conventions.ad`

---

## Phase 9: Measurement and Compliance

> Attribution, third-party tools, and legal constraints.

33. **What attribution window is set in the ad account?**
    - 7-day click (default, recommended)
    - 1-day click (conservative)
    - 7-day click, 1-day view (broadest)

    Maps to: `accounts[].measurement.attribution_window`

34. **Is a third-party attribution tool in use?**
    - None
    - Triple Whale
    - Northbeam
    - Hyros

    Maps to: `accounts[].measurement.third_party_tool`

35. **What UTM structure is used?**
    Defaults: `utm_source=meta`, `utm_medium=paid-social`, `utm_campaign={campaign_name}`, `utm_content={ad_set_name}`, `utm_term={ad_name}`

    Maps to: `accounts[].measurement.utm_structure`

36. **Do any Special Ad Categories apply?**
    - None
    - Housing
    - Credit
    - Employment

    Maps to: `accounts[].compliance.special_ad_categories`

37. **Does this account serve ads to EU/EEA audiences?** (GDPR consent mode required)
    Maps to: `accounts[].compliance.gdpr_applicable`

38. **Does this account serve ads to California audiences?** (CCPA Limited Data Use signal required)
    Maps to: `accounts[].compliance.ccpa_applicable`

---

## Phase 10: Reporting and Data Source

> How data flows in and reports flow out.

39. **What default reporting period should skills use?**
    - Last 7 days (default)
    - Last 14 days
    - Last 30 days
    - Month to date
    - Last month

    Maps to: `accounts[].reporting.period`

40. **What comparison period?**
    - Preceding period (default)
    - Same period last month
    - Same period last year

    Maps to: `accounts[].reporting.comparison`

41. **Where should reports be saved?** (file path within workspace)
    Maps to: `accounts[].reporting.output_path`

42. **How does the toolkit get Meta Ads data?**
    - MCP server (automated pull via Pipeboard, GoMarble, or custom)
    - CSV export (manual download from Ads Manager)
    - Manual entry (paste data into prompts)

    Maps to: `data_source.method`, `data_source.mcp_server`

43. **If CSV, where are exports stored?**
    Maps to: `data_source.csv_import_path`

---

## After Completing the Questionnaire

1. Map each answer to the corresponding YAML field in the account-conventions SKILL.md config
2. Validate all fields pass the Config Validation Rules
3. Run a test analysis skill (e.g., `campaign_diagnostics_methodology`) to confirm the config loads correctly
4. Save and commit the updated config
