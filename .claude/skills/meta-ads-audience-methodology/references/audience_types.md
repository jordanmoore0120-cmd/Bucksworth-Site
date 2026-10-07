# Audience Types - Complete Guide

## Broad Targeting (Open Targeting)

### Setup
1. Create a new ad set
2. Location: Target countries (e.g., United States)
3. Age: 18-65+ (or restrict only if genuinely irrelevant)
4. Gender: All (or restrict only if genuinely irrelevant)
5. Detailed Targeting: Leave empty
6. Custom Audiences: None (except exclusions)
7. Placements: Advantage+ Placements (let Meta optimize)

### Key Settings
- Advantage Detailed Targeting: N/A (nothing to expand)
- Language: Only set if your landing page is single-language and targeting multilingual countries
- Connection type: Leave open

### Performance Timeline
- Days 1-3: High CPM, low CTR, volatile CPA (algorithm exploring)
- Days 4-7: CPM stabilizing, CTR improving, CPA still variable
- Days 7-14: Should approach target CPA. If not, broad may not work for your account yet.
- Days 14+: Stable performance, algorithm has learned your audience

### Troubleshooting Broad
| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| CPA 2x+ target after 14 days | Insufficient pixel data | Switch to interests, come back to broad after 200+ conversions |
| Delivery to wrong demographics | Creative attracting wrong audience | Improve creative targeting (show your actual customer in ads) |
| Very high CPM | Broad audience = competitive auctions | Normal. If CPA is good, CPM doesn't matter. |

---

## Advantage+ Audience

### Setup
1. Create a new ad set
2. Select "Advantage+ Audience" (replacing "Advantage Detailed Targeting")
3. Add Audience Suggestions:
   - Interests relevant to your product
   - Custom audiences (LAL, email list) as suggestion signals
   - Demographics if relevant
4. These are SUGGESTIONS, not restrictions. Meta will expand beyond them.

### How Suggestions Are Used
- Meta starts delivery around your suggestions
- As data accumulates, Meta expands to similar users outside your suggestions
- Over time, delivery may be 60-70% outside your suggested audiences
- Suggestions accelerate learning vs pure broad (useful for accounts with <500 monthly conversions)

### Suggested Audiences for Viktor
- Interest suggestions: Slack, AI tools, Automation, SaaS, Startup
- Custom audience suggestion: LAL 1% from signup list
- Demographic suggestion: 25-55, any gender
- These guide Meta's initial exploration, not its final delivery

### Advantage+ vs Broad Comparison
| Metric | Advantage+ Audience | Broad |
|--------|-------------------|-------|
| Initial CPA | Lower (suggestions help) | Higher (no guidance) |
| Long-term CPA | Similar | Similar |
| Time to stable | 5-7 days | 7-14 days |
| Audience quality | Guided then expanded | Algorithm learns from scratch |
| Reach ceiling | Very high | Highest |

---

## Lookalike Audiences

### Creating a Lookalike
1. Go to Audiences > Create Audience > Lookalike Audience
2. Select Source: Custom Audience (your seed)
3. Select Location: Target country
4. Select Size: 1-10%

### Source Audience Quality Ranking
| Source | Quality | Notes |
|--------|---------|-------|
| Top 25% customers by LTV | Highest | Requires LTV data in your list |
| All purchasers (last 180 days) | Very high | Most common and effective |
| Trial-to-paid converters | High | Strong intent signal |
| High-intent page visitors (pricing, signup) | Medium-High | Good if conversion list is small |
| All leads/signups | Medium | Includes non-paying users |
| Email subscribers (engaged) | Medium | Open/click activity improves quality |
| Video viewers (75%+) | Medium | Behavioral engagement signal |
| All website visitors | Low-Medium | Diluted signal |
| Page/profile engagers | Low | Weak commercial intent |

### Lookalike Size Strategy
| LAL % | US Audience Size | When to Use |
|-------|-----------------|-------------|
| 1% | ~2.1M | Primary prospecting, highest precision |
| 2% | ~4.2M | Scale when 1% saturates (frequency >3) |
| 3% | ~6.3M | Further scale |
| 5% | ~10.5M | High-spend accounts, broad reach |
| 10% | ~21M | Nearly broad, minimal precision benefit |

### Stacking Lookalikes
You can stack multiple LALs in one ad set using OR logic:
- Example: LAL 1% Purchasers OR LAL 1% High-Value Leads
- This broadens reach while maintaining quality signals
- Monitor audience overlap between stacked LALs

### Refreshing Lookalikes
LALs are snapshots. They don't update when your source audience changes.
- Rebuild monthly (every 30 days) with updated source data
- Name with date: "LAL 1% Purchasers 2026-03"
- Transition campaigns to new LALs gradually (run old and new in parallel for 3-5 days)

---

## Interest Targeting

### Finding Interests
**Method 1: Audience Insights**
- Go to Ads Manager > Audience Insights
- Enter a known interest, see related interests
- Check audience size and demographics

**Method 2: Competitor Analysis**
- Search competitor brand names in detailed targeting
- If available, they're valid interest targets
- Also search competitor product names

**Method 3: Adjacent Categories**
- What publications does your audience read?
- What tools do they use?
- What job titles do they hold?
- What influencers do they follow?

### Interest Stacking Strategies

**Broad stacks (OR logic) -- RECOMMENDED:**
```
Ad Set: AI + Productivity Tools
- Artificial Intelligence
- Machine Learning
- Automation
- Productivity
- SaaS
```
Audience: 10-50M (good for scaling)

**Narrow stacks (AND logic):**
```
Ad Set: AI-Using Small Business Owners
- Must match: Small Business Owner (behavior)
- AND: Artificial Intelligence (interest)
```
Audience: 500K-5M (good for precision)

**Exclusion stacks (NOT logic):**
```
Ad Set: SaaS Users (not enterprise)
- Include: SaaS, Cloud Computing
- Exclude: Enterprise Software, SAP, Oracle
```

### Interest Targeting for Viktor

| Ad Set Name | Interests | Expected Size (US) |
|-------------|-----------|-------------------|
| Competitors | Slack, Asana, Monday.com, ClickUp, Notion, Trello | 15-30M |
| AI/Automation | Artificial Intelligence, Automation, Machine Learning, ChatGPT | 20-40M |
| Startup/SMB | Startup company, Entrepreneurship, Small business, Y Combinator | 10-25M |
| Tech Professionals | Software engineering, DevOps, Product management, SaaS | 8-15M |
| Marketing Roles | Digital marketing, Social media marketing, Marketing automation | 15-25M |

---

## Custom Audiences

### Website Custom Audiences (Pixel-Based)

| Audience | Lookback | Use Case |
|----------|----------|----------|
| All visitors | 180 days | Broad retargeting, LAL source |
| All visitors | 30 days | Primary retargeting |
| All visitors | 7 days | Hot retargeting |
| Pricing page visitors | 30 days | High-intent retargeting |
| Signup page visitors (no conversion) | 14 days | Signup abandonment |
| Blog/content visitors | 60 days | Content-to-conversion nurture |
| Purchasers | 180 days | Exclusion, upsell, LAL source |

### Customer List Audiences

**Upload requirements:**
- Email (most common identifier)
- Phone number (improves match rate by 10-20%)
- First name, last name (improves match rate by 5-10%)
- City, state, zip (minor improvement)
- Country (minor improvement)
- DOB, gender (minor improvement)

**Match rate expectations:**
| Data Points Included | Expected Match Rate |
|---------------------|-------------------|
| Email only | 30-50% |
| Email + phone | 50-65% |
| Email + phone + name | 55-70% |
| All fields | 60-75% |

**Refresh cadence:** Upload updated lists weekly or bi-weekly for dynamic exclusions.

### Engagement Audiences

| Source | Lookback Options | Best Use |
|--------|-----------------|----------|
| Video viewers (25%) | 30-365 days | Mid-funnel, showed initial interest |
| Video viewers (50%) | 30-365 days | Stronger interest signal |
| Video viewers (75%) | 30-365 days | High interest, good LAL source |
| Video viewers (95%) | 30-365 days | Highest engagement, small audience |
| Lead form openers (not submitted) | 30-90 days | Form abandonment retargeting |
| Lead form submitted | 30-90 days | Lead nurture, exclusion |
| Instagram engagers | 30-365 days | Social-first retargeting |
| Facebook page engagers | 30-365 days | Social-first retargeting |

---

## Audience Size Guidelines

| Campaign Type | Minimum Audience | Recommended | Maximum Effective |
|--------------|-----------------|-------------|------------------|
| Prospecting (interest) | 500K | 2M-20M | 50M+ (effectively broad) |
| Prospecting (LAL) | 1M | 2M-10M | 20M |
| Prospecting (broad) | N/A | Total country population | N/A |
| Retargeting | 1,000 | 10K-500K | 1M+ (use as LAL source instead) |
| Custom list | 1,000 | 5K-100K | 500K (use as LAL source for larger) |

**If your audience is too small (<1,000):**
- You can't run ads to it effectively
- Use it as a LAL source instead
- Or broaden the lookback window (7 days -> 30 days -> 180 days)

**If your audience is too large (>50M for interests):**
- You're effectively running broad targeting with extra steps
- Consider switching to actual broad targeting
- Or narrow with AND stacking
