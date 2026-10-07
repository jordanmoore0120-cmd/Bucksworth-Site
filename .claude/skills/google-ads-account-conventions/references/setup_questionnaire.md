# Account Conventions Setup Questionnaire

Walk the user through these 10 phases sequentially. Confirm entries after each phase before proceeding. Skip phases that don't apply (e.g., skip product feed for accounts with no Merchant Center).

---

## Phase 1: Agency Identity

**Ask:**
1. "What is the agency or organization name?"
2. "Do you have an MCC (Manager) account? If so, what is the MCC ID?"

**Capture:** agency.name, agency.slug (auto-generate from name), agency.mcc_id

---

## Phase 2: Account Roster

**Ask:**
1. "List every Google Ads account to include. For each, I need:"
   - Account name (as it appears in Google Ads)
   - Customer ID (10-digit CID)
   - Currency
   - Timezone
   - Business model: lead generation, eCommerce, SaaS, local business, or dual (specify which two)
   - Status: active, paused, or onboarding

**Format guidance:** "You can list them one at a time, paste a table, or give me a CSV-style list."

**Capture:** accounts[] with all fields

**Auto-derive:** slug from account name (lowercase, hyphenated)

**Validate:**
- CID is 10 digits
- Currency is valid ISO 4217
- Business model is one of the accepted values

---

## Phase 3: Maturity Assessment

For each account, run the assessment from `references/maturity_assessment.md`.

**Ask (per account):**
1. "For [Account Name]: approximately how many conversions does this account generate per month?"
2. "How long has the account been actively managed? (months)"
3. "What bidding strategies are currently in use?"
4. "Is conversion tracking fully trusted, or are there known gaps?"

**Classify:** Apply the maturity model rules to assign nascent/developing/established/advanced.

**Confirm:** "Based on your answers, I'm classifying [Account Name] as [level]. This means [brief implication]. Does that sound right?"

---

## Phase 3b: Historical Baseline Pull

**Only for accounts using MCP or Python ADC data sources.**

**Purpose:** Pull 12 months of historical data to establish baselines, identify seasonality patterns, and validate the maturity assessment from Phase 3.

**Data pulled:**
- Account-level monthly summary (12 months): spend, conversions, CPA/ROAS, impression share
- Campaign-type-level monthly summary (12 months): same metrics broken down by Search, PMax, Shopping, Display, YouTube, Demand Gen, Local, LSA

**What the baseline produces:**
1. Seasonality pattern identification: months that deviate >25% from the annual average
2. Maturity validation: actual monthly conversion volume vs. user-stated volume in Phase 3
3. Baseline metrics: trailing 90-day averages for primary KPI

**Present to user:**
"Here's what I found in the historical data:
- Average monthly conversions: [X] (you stated [Y] in Phase 3)
- Seasonality: [high months] are typically [X%] above average, [low months] are [X%] below
- Baseline CPA/ROAS: [trailing 90-day average]
Does this match your understanding?"

**If maturity assessment conflicts with historical data:**
"Your stated conversion volume was [X], but historical data shows an average of [Y]. This would classify the account as [level] instead of [level]. Which is more accurate for the current state?"

**For CSV/manual data source users:**
"Historical baseline pulls require API access. To get the full benefit, export the following from Google Ads covering the last 12 months:
1. Account-level monthly performance report (spend, conversions, conversion value, impression share)
2. Campaign type performance report (same metrics, segmented by campaign type)
Without this data, the toolkit will skip baseline validation and rely on your stated values."

**Capture:** Baseline data stored in config or reference file for future comparison.

---

## Phase 4: Campaign Types and Capabilities

**Ask (per account):**
1. "What campaign types are active?" (Search, PMax, Standard Shopping, Display, Demand Gen, YouTube, Local, LSA)
2. "Is Merchant Center connected?" (Yes/No)
3. "Is Google Business Profile connected?" (Yes/No)
4. "Are offline conversions being imported?" (Yes/No, and source if yes)
5. "Are YouTube campaigns running or planned?" (Yes/No)
6. "Are Demand Gen campaigns running or planned?" (Yes/No)

**Capture:** campaign_types_active, has_merchant_center, has_gbp, has_offline_conversions, has_youtube_campaigns, has_demand_gen_campaigns

---

## Phase 5: Brand Terms and Competitors

**Ask:**
1. "Are there any brand terms that should be protected across ALL accounts? (Terms that must never be added as negatives)"
2. For each account: "What are the brand terms for [Account Name]? Include misspellings and common variations."
3. For each account: "What competitor brand names should be tracked for [Account Name]?"

**Capture:** brand_terms.global_protected, brand_terms.per_account

---

## Phase 6: Negative Signal Patterns

**Explain:** "Negative signals are search term patterns that are almost always irrelevant. I'll start with a universal set and you can add account-specific patterns."

**Present universal defaults:**
```
jobs, careers, hiring, salary, glassdoor, indeed
free, cheap, DIY, how to, tutorial, course
reddit, quora, forum, review site
[competitor terms when running brand campaigns]
```

**Ask:**
1. "Should I keep all of these universal negatives, or remove any?"
2. For each account: "Any industry-specific terms that are always irrelevant for [Account Name]?" (Example: for a B2B software company, "open source" or "free trial" might be negative signals)

**Capture:** negative_signals.universal, negative_signals.per_account

---

## Phase 7: KPI Targets and Thresholds

**Ask (per account):**
1. "What is the primary KPI for [Account Name]?" (CPA, ROAS, CPL, CPV, CPM)
2. "What is the target value?" (e.g., $50 CPA, 4x ROAS)
3. "At what value would you flag a critical issue?" (e.g., CPA > $100, ROAS < 2x)
4. "At what value would you flag a warning?" (e.g., CPA > $75, ROAS < 3x)
5. "Is there a secondary KPI?" (optional)

**For dual business model accounts:** Ask for separate KPIs per business line.

**Capture:** primary_kpi, primary_kpi_target, flag_thresholds, secondary_kpi

### Conversion Action Mapping

**Ask (per account):**
"List every conversion action in this account. For each, tell me:"

| # | Conversion Action Name | Classification | Include in Maturity? | Include in Reporting? | Value Type | Count Method |
|---|----------------------|----------------|--------------------|--------------------|-----------|-------------|
| 1 | | Primary / Secondary / Micro | Yes / No | Yes / No | Dynamic / Static / None | One / Every |

**Explain the tiers:**
- **Primary:** Your north star metric. What you optimize toward and what bidding should target. For eCommerce: purchases. For lead gen: qualified leads or form submissions.
- **Secondary:** Real business outcomes that aren't the north star but indicate progress. Phone calls, add-to-carts, chat initiations.
- **Micro:** Engagement signals only. Page views, scroll depth, video plays, time on site. These should never count toward maturity or drive bidding.

**Validation:**
"Are the conversion actions marked as 'included in conversions' in Google Ads consistent with what you classified as Primary here? If micro-conversions are currently included in the Conversions column, that's a settings issue we'll flag."

---

## Phase 8: Reporting Preferences

**Ask:**
1. "What is your reporting period?" (Thursday-Wednesday, Monday-Sunday, or custom)
2. "What comparison do you want for your analysis?"
   - Prior period (compare against the equivalent prior period)
   - Prior year (compare against the same period last year)
   - Both

3. If prior year selected: "Should I align by ISO week number (same week number) or calendar dates (same dates last year)?"

**Supported comparison scenarios (for reference):**
| Scenario | How It Works |
|----------|-------------|
| Last 7 days vs. prior 7 days | Rolling window |
| Last week vs. prior week | Full week boundaries |
| This week to date vs. last week to date | Partial week, same days |
| Last month vs. prior month | Full calendar month |
| This month to date vs. same month last year to date | Partial month, same dates YoY |
| Last month vs. same month last year | Full month YoY |

4. "Where should output files be saved?" (default: current directory)
5. "What file naming convention?" (default: `{client} - Analysis Week {week}.md`)
6. "Should I generate a cross-account summary when analyzing multiple accounts?" (Yes/No)

**For data source:**
1. "How do you pull Google Ads data?"
   - MCP server (specify server name)
   - Python with Application Default Credentials (specify developer token, login customer ID, API version)
   - CSV exports (specify export path)
   - Manual paste into conversation

**Data source capability tiers (explain to user):**

| Tier | Source | What's Possible |
|------|--------|----------------|
| **Tier 1** | MCP server or Python + ADC | All 12+ action skills at full depth. Historical baseline pull. Automated runs. |
| **Tier 2** | CSV exports from Google Ads | Most action skills, limited by which reports were exported. No real-time re-queries. |
| **Tier 3** | Manual paste | Basic performance analysis and directional findings only. |

"Your data source determines which analyses the toolkit can run and how deep they go. Tier 1 gives full capability. If you're using CSV or manual paste, I'll tell you exactly what's limited and what exports you'd need for full analysis."

**Capture:** reporting section, data_source section

---

## Phase 8b: Campaign Naming Conventions and UTMs

**Ask:**
1. "Do your campaigns follow a consistent naming convention?"
   - If yes: "Describe the pattern or paste an example campaign name."
   - If no: "Would you like guidance on creating one?"

**If guidance requested, present:**
"A naming convention helps the toolkit identify campaign types, business lines, and funnel stages automatically. Minimum viable pattern:
`{business_line}.{campaign_type}.{theme}`

Full pattern (recommended for complex accounts):
`{region}.{country}.{business_line}.{campaign_type}.{bidding}.{audience}.{theme}.{funnel_stage}`"

**For dual business model accounts (REQUIRED):**
"Since this is a dual business model account, a naming convention is required. The toolkit needs to identify which campaigns belong to which business line. What string or pattern in campaign names identifies each business line?"

2. "Are UTM parameters set up in your tracking templates or final URLs?"
   - If no + business model is lead_gen, dual, or saas: "UTMs are critical for [business model] because [reason]. The toolkit will flag this as a priority setup item."
   - If no + business model is ecommerce with GA4 only: "Auto-tagging may be sufficient for your setup, but UTMs are recommended for cross-platform attribution."

**Capture:** campaign_naming_convention, has_utm_tracking, utm_enforcement

---

## Phase 9: Product Feed Config (if applicable)

**Only for accounts with has_merchant_center: true**

**Ask (per account):**
1. "What is the product feed source for [Account Name]?" (Merchant Center primary, supplemental feed, or both)
2. "Have product titles been optimized for search?" (Fully optimized, partially, or raw manufacturer titles)
3. "Are custom labels being used? If so, for what?" (e.g., margin tiers, seasonality, product categories)

**Capture:** product_feed section

---

## Phase 10: Local Business Config (if applicable)

**Only for accounts with business_model: local or has_gbp: true**

**Ask (per account):**
1. "List each business location:" (name, address, GBP ID if known)
2. "What targeting radius do you use per location?" (miles or km)
3. "Is this a service-area business (you go to customers) or a storefront (customers come to you)?"
4. "What is the source of offline conversion data?" (CRM import, call tracking, Google store visits, none)
5. "Are Local Services Ads active?" (Yes/No)
6. "Does this business serve significant tourist or visitor traffic? (e.g., businesses in tourist destinations, attractions, destination restaurants)"
7. If yes: "What are the top feeder markets where your tourists/visitors come from?" (cities, states, or countries)
8. "What is the timezone for each location?" (for ad scheduling alignment)
9. "What are the operating hours per location?" (weekday, Saturday, Sunday)
10. "Should this location have its own separate campaigns for scheduling and budget control, or can it share campaigns with other locations?"

**Capture:** local_config section

---

## Completion

After all phases:

1. Present the complete config as formatted YAML
2. Ask: "Review the configuration above. Any corrections before I save it?"
3. Save to the agreed path
4. Confirm: "Configuration saved. All toolkit skills will now read from this file. Run account_conventions anytime to update."
