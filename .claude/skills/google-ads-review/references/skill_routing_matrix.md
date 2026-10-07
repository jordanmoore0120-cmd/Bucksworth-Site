# Skill Routing Matrix

Decision matrix for which action skills to invoke per account, based on account configuration, campaign types, maturity level, and review cadence.

---

## Routing by Account Attributes

| Account Attribute | Skill | Frequency |
|------------------|-------|-----------|
| All accounts | performance-analysis | Every run |
| All accounts | audit-bidding | Every run |
| `search` in campaign_types_active | mine-search-terms | Every run |
| `pmax` in campaign_types_active | analyze-pmax | Every run |
| `shopping` in campaign_types_active | analyze-shopping | Every run |
| has_youtube_campaigns: true | analyze-youtube | Every run |
| has_demand_gen_campaigns: true | analyze-demand-gen | Every run |
| business_model: local OR has_gbp: true | audit-local | Every run |
| All accounts | audit-creative | Monthly |
| All accounts | audit-settings | Monthly (quick check weekly) |
| All accounts | optimize-budgets | Monthly |
| All accounts | analyze-landing-pages | Monthly (first run of month) |
| Campaigns flagged by performance-analysis | investigate-campaign | As needed |

---

## Routing by Campaign Type Detection

When campaign_types_active is not explicitly set in config, detect from campaign data:

| Campaign Type Signal | Detection Method | Skills Triggered |
|---------------------|-----------------|-----------------|
| Search | campaign.advertising_channel_type = SEARCH | mine-search-terms, audit-bidding |
| PMax | campaign.advertising_channel_type = PERFORMANCE_MAX | analyze-pmax |
| Shopping | campaign.advertising_channel_type = SHOPPING | analyze-shopping |
| YouTube/Video | campaign.advertising_channel_type = VIDEO | analyze-youtube |
| Demand Gen | campaign.advertising_channel_type = DEMAND_GEN | analyze-demand-gen |
| Display | campaign.advertising_channel_type = DISPLAY | audit-creative (display section) |
| Local Services | campaign.advertising_channel_type = LOCAL_SERVICES | audit-local |

---

## Analysis Depth by Maturity Level

| Skill | Nascent | Developing | Established | Advanced |
|-------|---------|-----------|------------|---------|
| performance-analysis | Volume + tracking focus. Skip IS analysis. | Standard WoW. Basic IS. | Full dashboard + IS breakdown. | + Portfolio roll-ups, marginal efficiency. |
| mine-search-terms | Basic negatives, brand protection. 5-click threshold. | Full classification + n-grams. 10-click threshold. | + Statistical significance tests. 15-click threshold. | + Cross-campaign patterns. 20-click threshold. |
| analyze-pmax | Asset completeness check only. | + Channel breakdown, basic search terms. | + Full 8-channel analysis, product tiers. | + Marginal channel efficiency, placement pruning. |
| analyze-shopping | Feed quality check, basic product list. | + Tier classification, IS analysis. | + Structure evaluation, hybrid modeling. | + Marginal product efficiency, custom label strategy. |
| audit-bidding | Strategy appropriateness only. | + Target evaluation, automation readiness. | + Portfolio opportunities, experiment planning. | + VBB readiness, incrementality testing. |
| audit-creative | Basic RSA check (asset count). | + Ad strength, asset ratings. | + A/B test planning, fatigue detection. | + Multivariate testing, cross-campaign consistency. |
| investigate-campaign | Simplified tree (tracking, budget, keywords). | Standard diagnostic tree. | Full tree + attribution analysis. | + Competitive impact, incrementality signals. |
| optimize-budgets | Basic pacing check. | + Constrained campaign identification. | + Reallocation modeling. | + Marginal efficiency curves, portfolio budgeting. |
| audit-local | GBP linked check, basic targeting. | + Location targeting, offline tracking status. | + Full LSA review, geographic analysis. | + Multi-location optimization, service area strategy. |
| analyze-youtube | Skip unless explicitly requested. | Basic format performance. | + Funnel analysis, audience insights. | + Cross-channel lift, incrementality. |
| analyze-demand-gen | Skip unless explicitly requested. | Placement + audience overview. | + Creative analysis, lead quality. | + Cross-channel impact, incrementality testing. |
| analyze-landing-pages | Skip (insufficient data). | Basic alignment check, top 10 pages only. | Full alignment + QS diagnostic, up to 50 pages. | + Cross-campaign page overlap analysis, content gap prioritization. |
| audit-settings | Tracking check only. | + Campaign settings scan. | + Compliance audit, data connections. | + Full settings audit, automation rules review. |

---

## Business Model Routing

Additional routing rules based on account business_model:

| Business Model | Additional Routing |
|---------------|-------------------|
| lead_gen | Lead quality assessment in analyze-demand-gen. Offline conversion check in audit-settings. Count setting audit priority. |
| ecommerce | Product tier analysis in analyze-shopping. Feed quality in analyze-pmax. ROAS-based flag thresholds. |
| local | audit-local on every run. Geographic performance in performance-analysis. LSA review if lsa_active. |
| dual | Split analysis by campaign naming convention. Separate KPI thresholds per division. Report each division separately. |
| saas | Activation tracking focus. Lead-to-activation attribution. CPA by conversion quality tier. |

---

## Cadence Summary

### Weekly (Every Run)
- performance-analysis (all accounts)
- mine-search-terms (search accounts)
- analyze-pmax (PMax accounts)
- analyze-shopping (shopping accounts)
- audit-bidding (all accounts)
- audit-local (local accounts)
- analyze-youtube (YouTube accounts)
- analyze-demand-gen (Demand Gen accounts)
- Quick settings check (tracking status, auto-apply alerts)

### Monthly (First Run of Month)
All weekly skills, plus:
- audit-creative (full creative audit)
- audit-settings (full settings + compliance + connections)
- optimize-budgets (reallocation modeling)
- analyze-landing-pages (landing page alignment + QS diagnostic). Also triggered ad-hoc when investigate-campaign reaches Branch 5 or when gray area decision tree Step 3 needs data.
- Feed quality deep-dive (shopping/PMax accounts)
- Audience health check (list sizes, segment performance)

### Quarterly (First Run of Quarter)
All monthly skills, plus:
- Account maturity reassessment (run maturity-assessment questionnaire)
- Strategy alignment review (are current goals still valid?)
- investigate-campaign (proactive audit of top 3 campaigns by spend)
- Cross-account portfolio analysis
- KPI target review and adjustment recommendations

---

## Skill Dependency Order

When running multiple skills for an account, execute in this order to avoid duplicate data pulls and ensure findings cascade correctly:

```
1. performance-analysis     (establishes baseline, identifies flags)
2. audit-settings           (validates data foundation)
3. audit-bidding            (strategy assessment)
4. mine-search-terms        (search term health)
5. analyze-pmax             (PMax deep-dive)
6. analyze-shopping         (Shopping deep-dive)
7. analyze-youtube          (YouTube deep-dive)
8. analyze-demand-gen       (Demand Gen deep-dive)
9. audit-creative           (creative health)
10. audit-local             (local-specific)
11. analyze-landing-pages   (landing page alignment + QS diagnostic)
12. optimize-budgets        (budget modeling, uses all prior findings)
13. investigate-campaign    (root cause for flagged campaigns)
```

Skills 3-10 can run in parallel if data is pre-collected. Skills 11-13 depend on findings from earlier skills.
