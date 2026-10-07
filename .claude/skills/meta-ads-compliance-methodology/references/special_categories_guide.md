# Special Ad Categories: Complete Guide

## Overview

Meta requires advertisers to declare Special Ad Categories for ads related to housing, credit, employment, and in some markets, social issues/elections/politics. Declaring a category triggers targeting restrictions designed to prevent discriminatory advertising practices.

---

## Category Definitions and Examples

### Housing

**Must declare when your ad:**
- Promotes the sale or rental of housing
- Advertises mortgage or home financing products
- Promotes homeowner's insurance
- Lists apartments, condos, or houses for rent or sale
- Advertises real estate services (broker, agent)
- Promotes housing-related offers (moving services when framed as "find your new home")

**Do NOT need to declare when:**
- Advertising a real estate SaaS tool (e.g., CRM for agents)
- Promoting home improvement products (paint, furniture)
- Advertising a property management software
- Running brand awareness for a construction company (not listing specific properties)

### Credit

**Must declare when your ad:**
- Offers credit cards or lines of credit
- Promotes personal, auto, or business loans
- Advertises debt consolidation services
- Promotes financing options ("Buy now, pay later")
- Offers insurance products (auto, health, life)
- Promotes investment opportunities with financial return claims

**Do NOT need to declare when:**
- Advertising accounting or financial software
- Promoting a banking app (general brand awareness, no specific product offer)
- Advertising financial education content
- Marketing a payment processing tool to businesses

### Employment

**Must declare when your ad:**
- Posts a specific job opening
- Promotes career opportunities at your company
- Advertises job boards or job search platforms
- Recruits for specific positions
- Promotes staffing or recruiting services

**Do NOT need to declare when:**
- Advertising an HR software tool
- Promoting a job board's brand (not specific listings)
- Running employer branding (company culture, not specific jobs)
- Advertising career coaching or resume services

### Social Issues, Elections, or Politics

**Must declare when your ad:**
- Promotes a political candidate or party
- Advocates for or against legislation
- Addresses social issues defined by Meta (varies by country)
- Is placed by a political action committee (PAC)

**Requirements beyond targeting restrictions:**
- "Paid for by" disclosure required
- Authorization and identity verification required
- Ad appears in Meta Ad Library for 7 years
- Available in: US, EU, UK, AU, IL, and expanding

---

## Targeting Restrictions When Category is Declared

### What You Cannot Do

| Feature | Restriction |
|---------|------------|
| Age targeting | Cannot restrict. Ads shown to all ages (18+). |
| Gender targeting | Cannot restrict. Ads shown to all genders. |
| ZIP code / postal code targeting | Cannot target specific ZIP codes. Minimum 15-mile radius from any point. |
| Detailed targeting (interests) | Many interest categories removed. Remaining interests have compliance filters. |
| Lookalike audiences | Standard Lookalikes not available. Replaced by "Special Ad Audiences." |
| Behavioral targeting | Most behavioral categories removed. |
| Life events targeting | Not available (e.g., "recently moved," "newly engaged"). |
| Multicultural affinity | Not available. |

### What You Can Still Do

| Feature | Notes |
|---------|-------|
| Geographic targeting | Yes, but 15-mile minimum radius (no ZIP-level) |
| Language targeting | Allowed |
| Custom Audiences | Yes, but source must be compliant (first-party data, consented) |
| Special Ad Audiences | Yes (lookalike replacement with compliance guardrails) |
| Placement selection | Allowed |
| Device targeting | Allowed |
| Connection targeting | Allowed |
| Advantage+ Audience | Available with automatic compliance restrictions |

---

## Special Ad Audiences (Lookalike Replacement)

### How They Work

- You provide a source audience (customer list, website visitors)
- Meta creates a "Special Ad Audience" that reaches people similar to your source
- Unlike standard Lookalikes, Special Ad Audiences:
  - Do not use age, gender, or ZIP in the similarity matching
  - Have broader reach (less precise, more compliant)
  - Typically perform 20-30% below standard Lookalikes on CPA

### Best Practices

1. Use your highest-quality source audience (actual customers, not just website visitors)
2. Source audience minimum: 100 people (1,000+ recommended)
3. Create multiple Special Ad Audiences from different sources and test
4. Combine with strong creative to compensate for broader targeting
5. Expect higher CPA and adjust targets accordingly

---

## Setup Guide

### Step 1: Declare Category at Campaign Level

1. Create a new campaign
2. Under "Special Ad Categories," select the applicable category
3. This applies to all ad sets and ads within the campaign
4. You cannot change the category after campaign creation

### Step 2: Adjust Targeting

1. Targeting options will automatically be restricted based on the category
2. Removed options will be grayed out or hidden
3. Use the remaining options:
   - Geographic targeting (15-mile minimum radius)
   - Language targeting
   - Custom Audiences
   - Special Ad Audiences

### Step 3: Verify Compliance

Before launching:
- [ ] Correct Special Ad Category declared
- [ ] No ad copy that discriminates (no age/gender/race references)
- [ ] Landing page is compliant (accessible, non-discriminatory)
- [ ] For housing/credit: Equal Opportunity statements where required
- [ ] For political: "Paid for by" disclosure included
- [ ] For political: Authorization completed in Ad Authorization settings

---

## Country-Specific Requirements

### United States

| Category | Legal Basis | Key Requirements |
|----------|------------|------------------|
| Housing | Fair Housing Act | Cannot discriminate based on race, color, religion, sex, national origin, disability, familial status |
| Credit | Equal Credit Opportunity Act | Cannot discriminate based on race, color, religion, national origin, sex, marital status, age |
| Employment | Title VII, ADEA | Cannot discriminate based on race, color, religion, sex, national origin, age (40+), disability |
| Political | Meta's own policy | Authorization, "Paid for by" disclosure, 7-year Ad Library retention |

### European Union

| Category | Legal Basis | Key Requirements |
|----------|------------|------------------|
| Housing | Local member state laws | Varies by country, Meta applies uniform restrictions |
| Credit | Consumer Credit Directive | Uniform targeting restrictions across EU |
| Employment | EU employment directives | Non-discrimination requirements |
| Political | Digital Services Act + local law | Varies significantly by member state, expanding |

### United Kingdom

| Category | Legal Basis | Key Requirements |
|----------|------------|------------------|
| Housing | Equality Act 2010 | Protected characteristics cannot be targeted |
| Credit | Financial Conduct Authority rules | FCA-approved financial promotions only |
| Employment | Equality Act 2010 | Non-discrimination requirements |
| Political | Online Safety Act + Electoral Commission | Authorization, transparency |

---

## Common Mistakes

1. **Not declaring when required.** If Meta's automated review catches an undeclared housing/credit/employment ad, it gets rejected. Repeated violations can restrict your account.

2. **Declaring when not required.** Unnecessarily declaring a Special Ad Category limits your targeting without benefit. A SaaS tool for real estate agents is not a housing ad.

3. **Using discriminatory language in ad copy.** Even with proper declaration, ad copy cannot discriminate. "Young professionals wanted" in an employment ad is a violation.

4. **Assuming declaration alone is sufficient.** Declaration is a Meta platform requirement. You must also comply with applicable laws (Fair Housing Act, ECOA, etc.) which may have additional requirements beyond what Meta enforces.

5. **Forgetting to update audiences.** Special Ad Audiences expire and need refreshing. Customer lists used as sources must be refreshed monthly.

---

## Performance Optimization Within Special Categories

Since targeting is restricted, performance optimization shifts to other levers:

### Creative is King
- With limited targeting, your creative must self-select the right audience
- Test multiple creative concepts (your ad is your targeting)
- Use messaging that naturally appeals to your ideal customer

### Landing Page Optimization
- Higher-quality landing pages compensate for broader targeting
- Test dedicated landing pages with strong qualification signals
- Use forms to qualify leads (targeting can't do the filtering, so your funnel must)

### Geographic Strategy
- Use 15-mile radius circles strategically to cover your service area
- Multiple overlapping circles can approximate city or metro-level targeting
- Focus budget on your highest-converting geographies

### Bidding Strategy
- Cost Cap is particularly important in Special Ad Categories
- Broader targeting means more low-quality impressions; Cost Cap ensures you only pay for efficient ones
- Start with a generous cost cap (2x target CPA), tighten as data accumulates
