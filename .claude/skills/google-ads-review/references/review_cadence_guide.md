# Review Cadence Guide

Detailed breakdown of what analysis runs at each cadence level. The orchestrator (`google_ads_review`) uses this to determine scope for each run.

---

## How to Determine Current Cadence

- **Weekly:** Default for every run
- **Monthly:** First run where the reporting period includes the 1st of a new month
- **Quarterly:** First run where the reporting period includes the 1st of a new quarter (Jan 1, Apr 1, Jul 1, Oct 1)

Quarterly runs include everything from Monthly. Monthly runs include everything from Weekly. Each level is additive.

---

## Weekly Scope (Every Run)

### Performance Metrics
- Account-level spend, conversions, conversion value, CPA/ROAS vs prior period
- Campaign-level WoW comparison for all active campaigns
- Flag any campaign with >20% negative change in primary KPI
- Budget pacing check: projected spend vs monthly budget, days remaining

### Search Term Mining
- Pull search terms for the reporting period
- Classify using four-category system (urgent negative, expand exact, monitor, review manually)
- Run n-gram analysis for pattern detection
- Generate negative keyword CSV and expansion keyword CSV
- Run conflict audit against existing positive keywords

### Bidding Strategy Health
- Check all campaigns for learning period status
- Flag campaigns stuck in "Learning (limited)" for 14+ days
- Check if multiple campaigns entered learning simultaneously
- Verify targets are still calibrated (actual vs target CPA/ROAS)

### PMax Channel Distribution
- Pull 8-channel breakdown for all PMax campaigns
- Compare distribution to benchmarks for the account's business model
- Flag channels outside healthy ranges
- Check brand vs non-brand search term split

### Budget Pacing
- Current month spend vs monthly budget
- Projected end-of-month spend at current daily rate
- Flag accounts pacing more than 10% over or under budget
- Flag campaigns with Lost IS (Budget) > 20%

### Red Flag Detection
- Conversion tracking interruptions (sudden drop to 0)
- Spend anomalies (>50% WoW change without known cause)
- CPA/ROAS outside flag thresholds from account config
- Campaign status changes (paused, removed, disapproved)

---

## Monthly Scope (First Run of Each Month)

Everything in Weekly, plus:

### Creative Audit
- RSA asset performance across all Search campaigns
- Asset effectiveness ratings (Best, Good, Low) distribution
- Identify assets with "Low" rating for 30+ days (replacement candidates)
- PMax asset group completeness scores
- PMax asset quality ratings and trends
- Video creative performance (if YouTube campaigns active)
- Creative fatigue signals: declining CTR with stable impressions

### Full Settings Audit
- Account-level settings review (conversion tracking, audiences, auto-apply recommendations status)
- Campaign-level settings scan (networks, locations, languages, ad rotation, schedules)
- Conversion action audit: which actions are primary, counting method, attribution model
- Enhanced conversions status check
- Privacy compliance check (consent mode, data processing terms)
- Data connections status (GA4 link, Merchant Center link, CRM integrations)

### Feed Quality Review (Accounts with Merchant Center)
- Product disapproval rate and top disapproval reasons
- Title optimization coverage (% of products with optimized titles)
- Image quality flags
- Missing attributes that affect performance (GTIN, brand, color, size)
- Custom label utilization and accuracy
- Supplemental feed health (if applicable)

### Audience Health Check
- Remarketing list sizes and trends (growing, stable, shrinking)
- Customer match list freshness (when last updated)
- Performance by audience segment (remarketing vs prospecting vs similar)
- In-market and affinity audience performance
- Audience overlap between campaigns

### Competitive Positioning
- Auction insights trends for top campaigns (impression share, overlap rate, position above rate)
- New competitors appearing in auction insights
- Impression share trends (gaining or losing ground)
- Top-of-page rate trends for Search campaigns

### Budget Optimization
- Marginal efficiency analysis: is the last dollar in each campaign profitable?
- Identify constrained efficient campaigns (high IS lost to budget, strong KPI)
- Identify unconstrained inefficient campaigns (low IS lost to budget, weak KPI)
- Model reallocation scenarios (shift from inefficient to constrained efficient)
- Present reallocation recommendations with projected impact

### Product Tier Reclassification (Shopping/PMax with Feed)
- Re-run product tier classification (Heroes, Sidekicks, Zombies, Villains)
- Compare to prior month classification
- Identify tier migrations (products that improved or declined)
- Update custom label recommendations if tiers shifted significantly

---

## Quarterly Scope (First Run of Each Quarter)

Everything in Weekly and Monthly, plus:

### Account Maturity Reassessment
- Re-run the maturity assessment questionnaire from `account_maturity_methodology`
- Compare current maturity level to prior quarter
- If maturity level changed, recalibrate all skill thresholds
- Document the maturity change and its implications for strategy

### Strategy Alignment Review
- Are the account's stated goals still current? (Confirm with user)
- Do KPI targets reflect current performance and business objectives?
- Has the competitive landscape shifted enough to warrant strategy changes?
- Are campaign types still appropriate? (e.g., should the account add PMax, YouTube, Demand Gen?)
- Is the account structure still serving the strategy? (campaign consolidation or expansion needed?)

### Full Account Health Audit
- Run ALL action skills regardless of weekly routing (comprehensive sweep)
- Include skills that normally run only when flagged (e.g., `investigate_campaign` for any underperformer)
- Deep-dive into areas normally covered only at summary level

### Cross-Account Portfolio Analysis
- Compare performance trends across all accounts in the portfolio
- Identify accounts that improved vs declined over the quarter
- Look for portfolio-level patterns (seasonal trends, market shifts)
- Budget allocation across accounts: is spend proportional to opportunity?
- Identify accounts ready for scale-up and accounts needing restructuring

### KPI Target Review
- For each account, compare targets set last quarter to actual performance
- Recommend target adjustments based on observed performance
- Factor in seasonality for the upcoming quarter
- Present updated targets for user approval before updating config

---

## Cadence Summary Table

| Analysis Area | Weekly | Monthly | Quarterly |
|--------------|--------|---------|-----------|
| Performance WoW | Full | Full | Full |
| Search term mining | Full | Full | Full |
| Bidding health check | Alerts only | Full audit | Full audit |
| PMax channel check | Distribution | + Asset groups | + Product tiers |
| Budget pacing | Pacing check | + Reallocation modeling | + Cross-account allocation |
| Creative | Skip | Full audit | Full audit |
| Settings | Quick check | Full audit | Full audit |
| Feed quality | Skip | Full review | Full review |
| Audience health | Skip | Full check | Full check |
| Competitive positioning | Skip | Auction insights | + Strategic implications |
| Account maturity | Skip | Skip | Reassessment |
| Strategy alignment | Skip | Skip | Full review |
| Cross-account portfolio | Summary only | Summary + trends | Full portfolio analysis |
| KPI target review | Skip | Skip | Full review + recommendations |
