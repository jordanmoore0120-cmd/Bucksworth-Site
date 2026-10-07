---
name: meta-ads-account-conventions
description: Configuration source for the Meta Ads toolkit; use to set up or update account identities, KPI targets, thresholds, naming, measurement, and data sources.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `account-conventions`-style names, e.g. `google-ads-mine-search-terms`.

# Account Conventions

Personalization engine and source of truth for the Meta Ads Analysis Toolkit. Every Meta Ads action and methodology skill reads this configuration at Step 0 before producing output. Use it when onboarding a brand/client, changing account details, revising KPIs, or validating naming/measurement assumptions.

## What This Config Controls

- Organization identity: brand vs agency, name, slug.
- Meta ad accounts: account IDs, pixels, datasets/CAPI, currency, timezone, business model, maturity, conversion volume, spend, status.
- Capabilities: CAPI, catalog, Advantage+, value optimization, custom conversions, active campaign types.
- KPI config: primary KPI, targets, warning/critical thresholds.
- Creative config: testing framework, weekly volume target, active formats.
- Audience config: warm audiences, exclusions, lookalike sources, Advantage+ audience setting.
- Naming conventions: campaign, ad set, ad token patterns for automated parsing.
- Measurement: attribution window, third-party tool, UTM structure.
- Compliance: special ad categories, GDPR/CCPA applicability.
- Reporting: default period, comparison period, output path, file naming.
- Data source: MCP, CSV, or manual import instructions.

Works for both single-brand media buyers and multi-client agencies. Skills iterate over all `status: active` accounts unless the user specifies a particular account by name or slug.

## Config Location

Store the config either as YAML in this skill after the frontmatter end marker or as `account_conventions/config.yaml` beside the toolkit. Content placed after the marker is intended to persist across SDK regeneration. If no config exists when another skill requests it, run the setup questionnaire in `references/setup_questionnaire.md`.

## Minimum Schema

```yaml
organization:
  name: ""
  slug: ""
  type: "brand"          # brand | agency
accounts:
  - name: ""
    slug: ""
    ad_account_id: "act_"
    pixel_id: ""
    dataset_id: ""
    currency: "USD"
    timezone: "America/New_York"
    business_model: "ecommerce"   # ecommerce | lead_gen | saas | app | local | dual
    maturity_level: "developing"  # nascent | developing | established | advanced
    monthly_conversion_volume: 0
    monthly_spend: 0
    status: "active"              # active | paused | onboarding | offboarding
    capabilities:
      has_capi: false
      has_catalog: false
      has_advantage_plus: false
      has_value_optimization: false
      has_custom_conversions: false
      campaign_types_active: [prospecting]
    kpi_config:
      primary_kpi: "cpa"          # cpa | roas | cpl | cpv | cpm
      targets:
        cpa: 0.0
        roas: 0.0
        cpl: 0.0
        cpv: 0.0
        cpm: 0.0
        ctr: 0.0
        hook_rate: 0.0
        hold_rate: 0.0
        frequency_cap: 0.0
        cpc: 0.0
      flag_thresholds:
        critical:
          cpa_over_target_pct: 50
          roas_under_target_pct: 40
          frequency_above: 4.0
          ctr_below: 0.005
          spend_no_conversions_hours: 48
        warning:
          cpa_over_target_pct: 20
          roas_under_target_pct: 20
          frequency_above: 2.5
          ctr_below: 0.01
          spend_no_conversions_hours: 24
    creative_config:
      testing_framework: "dct"    # dct | manual_ab | faris_method
      weekly_creative_volume_target: 5
      creative_types_active: [static, video]
    audience_config:
      warm_audiences: []
      exclusion_audiences: []
      lookalike_sources: []
      advantage_plus_enabled: false
    naming_conventions:
      campaign: "{objective}_{audience}_{geo}_{launch_date}"
      ad_set: "{targeting}_{placement}_{bid_strategy}_{budget}"
      ad: "{creative_type}_{concept}_{variant}_{format}"
    measurement:
      attribution_window: "7d_click"
      third_party_tool: "none"
      utm_structure:
        utm_source: "meta"
        utm_medium: "paid-social"
        utm_campaign: "{campaign_name}"
        utm_content: "{ad_set_name}"
        utm_term: "{ad_name}"
    compliance:
      special_ad_categories: "none"
      gdpr_applicable: false
      ccpa_applicable: false
    reporting:
      period: "last_7_days"
      comparison: "preceding_period"
      output_path: ""
      output_naming: "{account_slug}_{skill_name}_{date}"
data_source:
  method: "csv"       # mcp | csv | manual
  mcp_server: "none"
  csv_import_path: ""
  manual_instructions: ""
```

## Validation Rules

When loading config, validate these fields and continue with explicit warnings only where stated:

| Field | Validation | Behavior |
|---|---|---|
| `ad_account_id` | `act_` + digits | Skip account and flag error |
| `pixel_id` | numeric string | Warn; proceed without pixel analysis |
| `maturity_level` | nascent/developing/established/advanced | Default to developing; warn |
| `primary_kpi` | supported KPI | Default to cpa; warn |
| `business_model` | supported business model | Default to ecommerce; warn |
| `currency` | ISO 4217 | Default to USD; warn |
| `attribution_window` | supported window | Default to 7d_click; warn |
| `flag_thresholds` | all values > 0 | Use defaults; warn |
| `naming_conventions` | contains at least one token | Warn; disable name-based parsing |

## How Toolkit Skills Use It

At Step 0, skills identify in-scope accounts, load maturity for calibration, check capability flags to skip irrelevant sections, load KPI targets and flag thresholds, parse naming conventions, contextualize attribution/measurement, and enforce compliance constraints. If fields are missing or defaulted, the skill must call out the gap and recommend the relevant setup questionnaire section.

## Updating Rules

Update the config when onboarding/offboarding an account, changing pixels/CAPI/catalogs/Advantage+, revising KPI targets or thresholds, changing naming conventions, activating new creative/campaign types, changing attribution/measurement, or changing report destinations. After updating, rerun active analysis skills so they pick up the new config.
