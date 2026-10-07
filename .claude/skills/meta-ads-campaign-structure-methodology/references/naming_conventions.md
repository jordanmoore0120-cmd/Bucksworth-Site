# Naming Conventions - Complete Guide

## Why Naming Conventions Matter

Consistent naming enables:
- Faster analysis in Ads Manager (filter and sort by tokens)
- Clearer team communication (everyone knows what a campaign targets)
- Automated reporting (naming patterns enable regex-based dashboards)
- UTM alignment (campaign names map directly to UTM parameters)
- Historical comparison (same naming over time enables trend analysis)

---

## Naming Hierarchy

```
Campaign --> Ad Set --> Ad
```

Each level has its own naming format. Information flows from general (campaign) to specific (ad).

---

## Campaign Naming

### Format
```
[OBJECTIVE]_[TYPE]_[AUDIENCE-SUMMARY]_[DATE]
```

### Tokens

| Token | Values | Description |
|-------|--------|-------------|
| OBJECTIVE | SALES, LEADS, TRAFFIC, AWARENESS, ENGAGEMENT, APP | Maps to Meta campaign objective |
| TYPE | TESTING, WINNERS, ASC, RETARGET, RETENTION, PROMO | Campaign purpose |
| AUDIENCE-SUMMARY | BROAD, US, INTL, UK, DACH | Geographic or audience summary |
| DATE | YYYY-MM | Launch month |

### Examples

| Campaign Name | Meaning |
|---------------|---------|
| `SALES_TESTING_ABO_2026-03` | Sales objective, testing campaign, ABO structure, launched March 2026 |
| `SALES_WINNERS_CBO_2026-03` | Sales objective, proven winners, CBO structure, launched March 2026 |
| `SALES_ASC_2026-03` | Sales objective, Advantage+ Shopping, launched March 2026 |
| `SALES_RETARGET_US_2026-03` | Sales objective, retargeting, US, launched March 2026 |
| `LEADS_TESTING_US_2026-04` | Leads objective, testing, US, launched April 2026 |
| `SALES_PROMO_BFCM_2026-11` | Sales objective, promotion, Black Friday/Cyber Monday |
| `SALES_WINNERS-INTL_CBO_2026-03` | International winners campaign |

---

## Ad Set Naming

### Format
```
[AUDIENCE-TYPE]_[TARGETING-DETAIL]_[PLACEMENT]
```

### Tokens

| Token | Values | Description |
|-------|--------|-------------|
| AUDIENCE-TYPE | BROAD, LAL-X%, INTEREST, RETARGET, ADVANTAGE-PLUS, CUSTOM | Targeting method |
| TARGETING-DETAIL | Specific targeting info | Audience specifics |
| PLACEMENT | ALLPLACEMENTS, FEED, STORIES, REELS, INSTREAM | Placement selection |

### Examples

| Ad Set Name | Meaning |
|-------------|---------|
| `BROAD_US-18-65_ALLPLACEMENTS` | Broad targeting, US, ages 18-65, all placements |
| `LAL-1PCT_PURCHASERS_ALLPLACEMENTS` | 1% lookalike from purchasers, all placements |
| `LAL-3PCT_SIGNUPS_ALLPLACEMENTS` | 3% lookalike from signups |
| `INTEREST_AI-TOOLS-SAAS_ALLPLACEMENTS` | Interest targeting: AI tools and SaaS |
| `INTEREST_COMPETITORS-SLACK-ASANA_ALLPLACEMENTS` | Interest targeting: competitor brands |
| `RETARGET_WEB-7D-HIGH-INTENT_ALLPLACEMENTS` | Retarget website visitors, last 7 days, high-intent pages |
| `RETARGET_WEB-30D-GENERAL_ALLPLACEMENTS` | Retarget all website visitors, last 30 days |
| `RETARGET_WEB-14D-CART_ALLPLACEMENTS` | Cart abandonment retargeting, 14 days |
| `ADVANTAGE-PLUS_SUGGESTIONS-AI_ALLPLACEMENTS` | Advantage+ Audience with AI interest suggestions |
| `CUSTOM_EMAIL-LIST-UPSELL_ALLPLACEMENTS` | Custom audience from email list for upsell |

---

## Ad Naming

### Format
```
[FORMAT]_[CONCEPT]_[HOOK]_[VERSION]
```

### Tokens

| Token | Values | Description |
|-------|--------|-------------|
| FORMAT | UGC, STATIC, VIDEO, CAROUSEL, COLLECTION, CATALOG, FOUNDER, DEMO | Creative format |
| CONCEPT | Brief concept description | 2-4 word concept name |
| HOOK | Hook type or specific hook | Hook identifier |
| VERSION | V1, V2, V3... | Iteration number |

### Examples

| Ad Name | Meaning |
|---------|---------|
| `UGC_TESTIMONIAL_SLACK-CHAOS_V1` | UGC format, testimonial concept, "Slack chaos" hook, version 1 |
| `UGC_TESTIMONIAL_SAVED-10-HOURS_V2` | UGC testimonial, "saved 10 hours" hook, version 2 |
| `STATIC_COMPARISON_VS-MANUAL_V1` | Static image, comparison concept, vs doing it manually |
| `STATIC_SOCIAL-PROOF_10K-TEAMS_V1` | Static, social proof concept, "10K teams" angle |
| `VIDEO_DEMO_30SEC-WALKTHROUGH_V1` | Video format, product demo, 30-second walkthrough |
| `VIDEO_DEMO_SLACK-SETUP_V3` | Video demo, showing Slack setup, version 3 |
| `FOUNDER_WHY-I-BUILT_AI-COWORKER_V1` | Founder talking head, "why I built this" concept |
| `CAROUSEL_FEATURES_5-REASONS_V1` | Carousel, feature showcase, "5 reasons" angle |
| `CAROUSEL_WORKFLOW_BEFORE-AFTER_V2` | Carousel, workflow concept, before/after structure |
| `CATALOG_DPA_RETARGET_V1` | Catalog/DPA, retargeting variant |

---

## UTM Alignment

Your naming conventions should map directly to UTM parameters for analytics alignment.

### Mapping

| UTM Parameter | Source | Example Value |
|---------------|--------|---------------|
| utm_source | Platform | `meta` |
| utm_medium | Traffic type | `cpc` |
| utm_campaign | Campaign name | `sales_winners_cbo_2026-03` |
| utm_term | Ad set name | `broad_us-18-65_allplacements` |
| utm_content | Ad name | `ugc_testimonial_slack-chaos_v1` |

### Dynamic UTM Template
```
?utm_source=meta&utm_medium=cpc&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

### Case Handling
- All UTMs should be lowercase
- Campaign/ad set/ad names can use uppercase tokens for readability in Ads Manager
- Your analytics tool should normalize case (GA4 does this with filters)
- Or: use lowercase naming throughout for perfect alignment

---

## Naming Convention Rules

### General Rules

1. **Use underscores (_) between tokens** -- not spaces, not hyphens between tokens
2. **Use hyphens (-) within tokens** -- e.g., `AI-TOOLS` not `AI_TOOLS`
3. **UPPERCASE for tokens** -- makes them scannable in Ads Manager
4. **No special characters** -- avoid &, %, #, etc.
5. **Keep it concise** -- Meta truncates long names in some views
6. **Date format: YYYY-MM** -- enables chronological sorting

### Forbidden Patterns

| Pattern | Problem | Fix |
|---------|---------|-----|
| `Campaign 1`, `Campaign 2` | No information content | Use descriptive tokens |
| `test`, `new test`, `test v2` | Impossible to analyze at scale | Use structured naming |
| `John's campaign` | Person-dependent, not scalable | Use objective-based naming |
| Emojis in names | May break reporting tools | Use text only |
| Spaces in names | Inconsistent with UTMs | Use underscores |
| Mixed case (`Sales_testing`) | Harder to filter | Choose one case style and stick to it |

### Team Adoption

When rolling out naming conventions:
1. Document the convention (this file)
2. Share with all team members who create campaigns
3. Create a naming template or checklist
4. Audit monthly for compliance
5. Fix non-compliant names during audits (rename, don't recreate)

---

## Quick Reference Card

```
CAMPAIGN:  [OBJECTIVE]_[TYPE]_[AUDIENCE]_[YYYY-MM]
           SALES_WINNERS_CBO_2026-03

AD SET:    [AUDIENCE-TYPE]_[DETAIL]_[PLACEMENT]
           BROAD_US-18-65_ALLPLACEMENTS

AD:        [FORMAT]_[CONCEPT]_[HOOK]_[VERSION]
           UGC_TESTIMONIAL_SLACK-CHAOS_V1

UTM:       ?utm_source=meta&utm_medium=cpc
           &utm_campaign={{campaign.name}}
           &utm_content={{ad.name}}
           &utm_term={{adset.name}}
```
