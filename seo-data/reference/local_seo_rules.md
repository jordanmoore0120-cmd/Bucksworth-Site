# Local SEO Rules — Bucksworth

## Google Business Profile (GBP)
- NAP must be identical across website, GBP, and all directories
- Website URL: `https://www.getyourbucksworth.com/` (clean, no UTMs)
- Primary category: Pest Control Service (Phoenix), Pest Control Service (Tucson)
- Secondary categories: HVAC Contractor, Plumber, Lawn Care Service
- Post 2x/week to GBP (repurpose blog content)
- Respond to ALL reviews within 24 hours
- Photos: add 2-3 new service photos per month
- Q&A: seed with common questions and answers

## Map Pack Strategy
- Grid tracking confirms: Bucksworth visible in AJ area only (Phoenix GBP)
- Tucson GBP: SUSPENDED — priority to reinstate
- Map pack visibility driven by: proximity, relevance, prominence
- We can influence relevance (category, keywords in description) and prominence (reviews, citations, content)
- Proximity is fixed by GBP address — need satellite GBP or SAB verification for other cities

## City Pages — Anti-Thin-Content Rules
Every city page must pass the "would this page exist if SEO didn't?" test:

### Required Unique Content Per City
1. **Local promise** — specific service claim, not generic ("Same-week pest inspection in Mesa with free follow-up")
2. **Service area reality check** — where we serve and where we don't within the city
3. **Local proof blocks:**
   - Recent project types common in the area
   - Local housing stock/building styles relevant to the service
   - Seasonal patterns specific to the area
   - Customer reviews tagged to the city (when available)
4. **City-specific FAQ** — questions that differ by city (water hardness in Mesa vs Scottsdale, scorpion habitat in AJ vs Tempe)
5. **Neighborhood-level content** — at least 3 neighborhoods with zip codes and landmarks

### Minimum Content Differentiation
- City landing pages: < 57% similarity (currently at 57% — needs improvement)
- City service pages: < 50% similarity (currently at 83% — CRITICAL, being fixed)
- City sub-service pages: < 50% similarity (currently at 63% — being fixed)
- Blog posts: < 30% similarity (currently at 10% — good)

## Citation Consistency
All directory listings must match exactly:
- **Name:** Bucksworth Home Services
- **Address:** [Apache Junction address for Phoenix] / [Tucson address]
- **Phone:** (480) 422-8388 (Phoenix) / (520) 284-9930 (Tucson)
- **Website:** https://www.getyourbucksworth.com/
- **Hours:** consistent across all platforms

## Review Strategy
- Target: 2-3 new Google reviews per week per location
- Respond to every review (positive and negative) within 24 hours
- Review responses should mention service type and city name naturally
- Never incentivize reviews (Google violation)
- Use review leaderboard to motivate technicians

## Hyper-Local Content Rules (Updated June 15, 2026 — per Jordan + Darren Shaw Guide)

### The #1 Rule: HYPER LOCAL
Every piece of content must feel like it was written by someone who lives in that city.

### Required Hyper-Local Signals (ALL content types)
1. **Rotating Local Angles** — each post uses a DIFFERENT local content angle from an 18-type rotation pool:
   - Schools (elementary, middle, high), parks/trails, restaurants/local businesses, new developments/land sales, community events/festivals, churches/community orgs, city council/government news, real estate/housing, local news stories, college connections (ASU/UofA), historical facts, HOA/master plan communities, weather events, Nextdoor/mom group topics, new business openings, school boundary changes, youth/rec sports, high school sports
   - Track per city — same angle never repeats within 18 posts
   - Each search is TARGETED to the angle: "Highland Lakes Elementary Gilbert" not generic "events in Gilbert"
2. **Neighborhoods** — name specific neighborhoods, not just the city
   - Example: "Scorpion activity in the Las Sendas area of East Mesa" not just "Mesa scorpions"
3. **Surrounding Areas** — every post/page mentions 3-5 nearby cities we serve
   - Example: "We also serve families in Chandler, Gilbert, and Ahwatukee with same-day service"
   - This is Darren Shaw's #1 strategy for ranking in surrounding cities
4. **Social Media Embed** — include at least 1 BSW social media link per blog post
   - Match to vertical: pest → scorpion blacklight videos, HVAC → install footage
   - Accounts: YouTube (@bucksworthhomeservices), Instagram (bucksworth.homeservices), Facebook (bucksworthservices)
5. **Content Must NOT Feel Templated** (Jordan's rule, June 15)
   - Technical stuff can be standard (schema, internal links, alt tags, URLs, word count)
   - Content a human reads must be unique every time — different opening hooks, H2 order, narrative structure
   - Similarity scoring: reject if >30% similar to recent posts for same city+vertical
6. **Anti-Cannibalization** — every post MUST target a unique angle
   - Check existing posts for same city + sub-service before writing
   - Keyword overlap scoring (not just title dedup), n-gram dedup across same cluster
   - GSC cross-check: don't create content if two BSW pages compete for the same query

### Darren Shaw / Whitespark Intelligence (Source of Truth for Local SEO)
- **Read everything they publish**: whitespark.ca/blog, YouTube, newsletters, ranking factors report
- Key principles from Darren Shaw (2025-2026):
  1. Relevance + Prominence can overcome Distance disadvantage
  2. Review recency > review volume (small business advantage)
  3. Review detail + photos matter more than star count alone
  4. Unstructured citations (news mentions, community pages, Reddit) increasingly important
  5. AI Overviews are diluting address-proximity bias — quality content wins
  6. GBP primary category is #1 local ranking factor
  7. Community involvement = natural citation + trust signal
  8. Content must be genuinely helpful and authoritative, not just keyword-stuffed

### Surrounding Cities Strategy (from Darren Shaw Guide)
- BSW GBP is in Apache Junction — most of our 33 service cities are "surrounding cities"
- We compensate with: content relevance, review prominence, citation volume
- Every city page needs "We Also Service These Surrounding Areas" section
- Cross-link city pages aggressively (Mesa ↔ Gilbert ↔ Chandler cluster)
- Blog content per city creates the local relevance signal Google needs

## Local Landing Pages for Ads
- Route: `/lp/{city-slug}/{service-slug}`
- Stripped navigation (no full menu — reduce exit points)
- Above-fold: headline + phone + form
- Keyword-matched headline ("Pest Control in Mesa, AZ — Same Day Service")
- Trust badges: Google Guaranteed, BBB, X years experience, X reviews
- 3-5 bullet value props
- Testimonial from that city (or nearest city)
- No links to other pages (keep user on conversion path)
- Schema: LocalBusiness + Service + AggregateRating
