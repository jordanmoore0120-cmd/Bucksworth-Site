---
name: google-ads-account-conventions
description: Configure Google Ads toolkit account context; this is the only skill that stores agency/client/account-specific data and is required before analysis skills run.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `account-conventions`-style names, e.g. `google-ads-mine-search-terms`.

# Account Conventions

Configuration layer for the Google Ads Analysis Toolkit. This is the **only** place agency-specific, client-specific, or account-specific data should live. All other toolkit skills read this config and must not invent missing account facts.

## Storage

Use either:
- a YAML block in this `SKILL.md` below the frontmatter; or
- `account_conventions/config.yaml` in this skill directory.

If no config exists when another skill requests context, stop and route to this skill's setup wizard before running analysis.

## Minimal Config Schema

Preserve these fields when creating or updating configs; add optional details only when the user supplies them.

```yaml
agency:
  name: <string>
  slug: <lowercase-hyphenated>
  mcc_id: <optional string>

accounts:
  - name: <string>
    slug: <string>
    cid: <10-digit string, no dashes>
    currency: <ISO 4217>
    timezone: <IANA timezone>
    business_model: <lead_gen | ecommerce | saas | local | dual>
    maturity_level: <nascent | developing | established | advanced>
    monthly_conversion_volume: <number>
    status: <active | paused | onboarding>
    has_offline_conversions: <boolean>
    has_gbp: <boolean>
    has_merchant_center: <boolean>
    has_youtube_campaigns: <boolean>
    has_demand_gen_campaigns: <boolean>
    campaign_types_active: [search, pmax, shopping, display, demand_gen, youtube, local, lsa]
    primary_kpi: <cpa | roas | cpl | cpv | cpm>
    primary_kpi_target: <number>
    secondary_kpi: <string>
    secondary_kpi_target: <number>
    flag_thresholds:
      critical: <number>
      warning: <number>
    campaign_naming_convention: <string>
    special_handling_notes: <string>
    conversion_actions:
      - name: <Google Ads conversion action name>
        classification: <primary | secondary | micro>
        include_in_maturity: <boolean>
        include_in_reporting: <boolean>
        value: <dynamic | static | none>
        count: <one | every>
    business_lines:  # only for dual business_model
      - name: <string>
        identifier_type: <naming_convention | campaign_label>
        identifier_pattern: <string>
        primary_kpi: <cpa | roas | cpl | cpv | cpm>
        primary_kpi_target: <number>
        flag_thresholds: {critical: <number>, warning: <number>}
    has_utm_tracking: <boolean>
    utm_enforcement: <required | recommended>

brand_terms:
  global_protected:
    - <term that must never be negated>
  per_account:
    <account_slug>:
      brand_terms: [<term>]
      competitor_terms: [<term>]

negative_signals:
  universal:
    - term: <string>
      reason: <string>
      match_type: <broad | phrase | exact>
  per_account:
    <account_slug>:
      - term: <string>
        reason: <string>
        match_type: <broad | phrase | exact>

product_feed:
  <account_slug>:
    feed_source: <merchant_center | supplemental | both>
    title_optimization_status: <optimized | partial | raw>
    custom_labels_in_use: [<label>]

local_config:
  <account_slug>:
    locations:
      - name: <string>
        address: <string>
        gbp_id: <string>
        radius_miles: <number>
        service_area: <boolean>
        timezone: <IANA timezone>
        operating_hours: {weekday: <string>, saturday: <string>, sunday: <string>}
        campaign_separation: <boolean>
        tourism_relevant: <boolean>
        feeder_markets: [<string>]
    offline_conversion_source: <crm | call_tracking | store_visits | none>
    lsa_active: <boolean>

reporting:
  period: <thu_wed | mon_sun | custom>
  custom_period_start: <day_of_week>
  comparison_method: <prior_period | prior_year | both>
  prior_year_alignment: <iso_week | calendar_date>
  output_path: <string>
  output_naming: <string>
  include_cross_account_summary: <boolean>

data_source:
  method: <mcp | python_api | csv | manual>
  mcp_server_name: <string>
  developer_token: <string>
  login_customer_id: <string>
  api_version: <string>
  export_path: <string>

merchant_center:
  available: <boolean>
  method: <python_api | mcp | csv | none>
  merchant_id: <string>
  mcp_server_name: <string>

ga4:
  available: <boolean>
  method: <python_api | mcp | csv | none>
  property_id: <string>
  mcp_server_name: <string>

usage_tracking:
  <skill_slug>:
    run_count: <number>
    last_run: <date>
    verbose_mode: <boolean>
```

## Setup Wizard

When invoked directly:
1. Check for an existing config in the storage locations above.
2. If found, ask whether to update it or start fresh.
3. If creating a config, load `references/setup_questionnaire.md` and walk through all 10 phases.
4. Confirm entries with the user after each phase.
5. Write the completed config to the chosen location.
6. Run maturity assessment from `references/maturity_assessment.md` for each account.

Update paths:
- **Add account:** append to `accounts`, then run maturity assessment.
- **Update targets:** modify KPI targets and flag thresholds.
- **Update brand terms/negatives:** add, remove, or reclassify supplied terms; never remove protected brand terms without explicit confirmation.
- **Reassess maturity:** rerun the maturity assessment for specified accounts.

## How Other Skills Use This Config

Every Google Ads action skill starts with:
1. Read this config from the user-supplied or default location.
2. Extract the requested account(s).
3. Load capability flags, business model, maturity level, KPIs, brand terms, negatives, reporting preferences, and data-source details.
4. If required fields are missing, stop and ask to configure them here before analysis.

## Maturity Summary

Maturity is set during setup and reassessed quarterly. Load `account_maturity_methodology` for the full framework.

| Level | Monthly conversions | Primary implication |
|---|---:|---|
| Nascent | <15 | Simple structure, manual/basic bidding, tracking foundation |
| Developing | 15-50 | Begin automation carefully; expand proven structure |
| Established | 50-100 | Target-based bidding, creative testing, structured optimization |
| Advanced | 100+ | Value-based bidding, portfolios, marginal/incrementality analysis |

## References

| File | Purpose |
|---|---|
| `references/setup_questionnaire.md` | Ten-phase interview to populate config |
| `references/example_config.md` | Annotated fictional example |
| `references/maturity_assessment.md` | Account maturity classification questionnaire |
