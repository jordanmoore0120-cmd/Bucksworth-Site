# AEO Playbook — Answer Engine Optimization

## What Is AEO?
Getting Bucksworth cited by AI search engines — ChatGPT, Google AI Overviews, Perplexity, Gemini — not just ranked on traditional page one.

## Entity Strategy
Bucksworth must be unambiguously defined as an entity:
- **What:** Pest control, termite, and weed & lawn care company (do not present HVAC/plumbing as services in entity copy; Jordan, 2026-10-02)
- **Where:** 35 cities: Phoenix metro (26) and Tucson metro (9), Arizona; HQ Apache Junction
- **Who:** Founded 2013 by Jordan & Taylor Moore
- **Credentials:** AZ ROC #343924, AZ Department of Agriculture License #9613, Google Guaranteed (via Local Services Ads), BBB accredited
- **Differentiator:** Same-day service, family/locally owned since 2013, 100% Money Back Guarantee *Terms and conditions apply (link the terms on the same page)

This entity definition must be consistent across:
- Website (About page, footer, LocalBusiness schema)
- Google Business Profile (both Phoenix and Tucson)
- All business directories (Yelp, BBB, Angi, HomeAdvisor)
- Social media profiles
- Press releases and media mentions

## Content Structure for AI Extraction

### Answer Blocks
Format key content as standalone, extractable passages:
```
Q: How often should you spray for scorpions in Mesa, AZ?
A: Most Mesa homes need a scorpion barrier treatment every month from spring through fall, because bark scorpions move in when nights stay above 70°F. Bucksworth backs every visit with a 100% Money Back Guarantee.
```
- 1-3 sentences that fully answer the question without surrounding context
- Include the city name, service type, and specific local details. NEVER quote prices, deals, or contract terms in blog content.
- Place at the top of the section (answer-first, not conclusion-last)

### FAQ Sections
- Every service page and blog post has 4-6 FAQ items
- Questions must be real search queries (check Google Autocomplete)
- Answers must be specific to the city (not copy-paste across cities)
- Use `<h3>` for questions to enable FAQ schema extraction
- FAQ schema via JSON-LD only (not Microdata)

### Tables & Comparisons
AI engines heavily cite structured comparisons:
- Pricing comparison tables (monthly vs annual, by service type)
- Service comparison tables (DIY vs professional, product A vs product B)
- Seasonal schedules (when to apply pre-emergent, when to service AC)
- City-specific data tables (pest season timing by city, water hardness by area)

## Semantic HTML
- Headings in proper hierarchy (H1 → H2 → H3)
- Lists for multi-item answers
- Tables for comparative data
- `<blockquote>` for customer testimonials
- `<cite>` for sources and credentials
- `<time>` for dates and schedules

## Knowledge Graph Presence
Build entity confirmation assets:
- Tight definitions on About page
- "X vs Y" comparison pages (honest trade-offs)
- Service area pages with clear geographic boundaries
- Reviews with specific outcomes ("eliminated our scorpion problem in 2 visits")

## Citation Building for AI
AI engines pull from:
1. **Your website** (most important — make content extractable)
2. **Business directories** (Yelp, BBB, Angi — keep consistent)
3. **"Best X" lists** in your niche (pursue these actively)
4. **Review platforms** (Google, Yelp — quantity and recency matter)
5. **News mentions** (PR engine feeds this)
6. **Industry associations** (NPMA, ACCA memberships)

## Monitoring
- Monthly: Search "best pest control Phoenix" in ChatGPT, Perplexity, Google AI
- Track: Is Bucksworth mentioned? What context? Which competitors appear?
- React: If not cited, check entity consistency and content extractability
