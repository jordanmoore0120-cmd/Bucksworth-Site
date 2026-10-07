# Location Targeting Framework

## "Presence" vs "Presence or Interest" (Critical Setting)

This is the single most impactful location setting for local businesses. Misconfiguration here can waste 15-30% of budget.

### Presence (Recommended Default)
- Shows ads only to people **physically located** in the target area
- Best for: businesses that serve only local customers (restaurants, dentists, plumbers, retail)
- Prevents budget waste on users who cannot realistically become customers

### Presence or Interest
- Shows ads to people in the area **OR** people who have shown interest in the area
- Example: someone in New York searching "dentist in Chicago" would see the ad
- Best for: tourism, hospitality, events, real estate, relocation services, destination medical
- Also appropriate for businesses that ship products to specific regions

### Default Behavior
- Google defaults to "Presence or interest" for new campaigns
- This default is wrong for most local businesses
- Always audit this setting on every campaign during a local account review
- Check at both campaign level and account-level default settings

### How to Verify
- Campaign Settings > Locations > Location Options
- Look for "Target" and "Exclude" settings
- "Target: People in, or who show interest in, your targeted locations" = Presence or interest
- "Target: People in or regularly in your targeted locations" = Presence

---

## Radius Targeting

### When to Use
- Single-location businesses
- Businesses with a defined service area around a physical location
- When you need precise geographic control

### Optimal Radius by Business Type

| Business Type | Urban Radius | Suburban Radius | Rural Radius |
|---|---|---|---|
| Restaurant / cafe | 3-8 miles | 8-15 miles | 15-25 miles |
| Professional services (dentist, lawyer, accountant) | 5-15 miles | 10-25 miles | 25-40 miles |
| Home services (plumber, electrician, HVAC) | 15-30 miles | 20-40 miles | 40-60 miles |
| Retail store | 3-10 miles | 5-15 miles | 15-30 miles |
| Medical specialist | 15-30 miles | 25-50 miles | 50+ miles |
| Emergency services (locksmith, towing) | 10-20 miles | 15-30 miles | 30-50 miles |

### Factors That Adjust Radius
- **Competition density**: tighter radius in dense markets (more competitors nearby), wider in sparse markets
- **Specialization**: specialists draw from wider areas than generalists
- **Price point**: higher-priced services justify longer travel
- **Urgency**: emergency services need wider radius (people need immediate help regardless of distance)
- **Drive time vs distance**: 15 miles in rural areas may be 15 minutes. 15 miles in urban areas may be 45 minutes. Consider drive time, not just distance.

---

## Nested Radius Strategy

Layer multiple radii around the same location with different bid adjustments:

### Standard Three-Ring Structure
| Ring | Distance | Bid Adjustment | Rationale |
|---|---|---|---|
| Inner (core) | 0-5 miles | +20% to +30% | Highest intent, most likely to visit |
| Middle (baseline) | 5-15 miles | +0% | Standard bid level |
| Outer (reach) | 15-25 miles | -15% to -25% | Lower visit probability, but still reachable |

### Implementation
- Create the outer radius first (largest), then add inner radii as separate targets
- Apply bid adjustments to each radius independently
- Monitor conversion rates by distance ring
- Tighten or widen rings based on actual performance data

### Refinement Process
1. Start with the standard three-ring structure above
2. Run for 2-4 weeks to collect performance data
3. Pull the geographic report segmented by distance
4. Adjust rings based on where conversions actually come from
5. Eliminate outer ring if conversion rate drops below profitability threshold

---

## DMA / Metro Area Targeting

### When to Use
- Multi-location businesses covering a metro area
- Businesses with broad regional coverage
- When radius targeting creates too many overlapping circles

### Advantages
- Simpler to manage than multiple overlapping radii
- Clean geographic boundaries
- Easy to report on (one region per target)

### Disadvantages
- Less precise than radius targeting (DMA boundaries don't follow customer behavior)
- May include areas too far from the business
- Combine with zip code exclusions to improve precision within a DMA

---

## Service Area Targeting (No Storefront)

### When to Use
- Businesses that travel to customers (plumbers, cleaners, movers, mobile services)
- No physical location that customers visit
- Service area defines where the business operates

### Implementation
- Target the service area, not the business address
- Use zip codes, cities, or radius for service area definition
- GBP "service area business" setting should match Google Ads targeting
- Do not show the business address in ads (use call or form conversions instead)

### Common Mistake
- Targeting only the business owner's home address instead of the full service area
- Setting a small radius around a home office when the business serves a 30-mile region

---

## Location Bid Adjustments

### Purpose
- Bid higher for locations that convert better
- Bid lower for locations that underperform
- Allocate budget toward highest-value geographic segments

### Data-Driven Adjustment Process
1. Run geographic performance report (by city, zip code, or distance)
2. Calculate CPA or ROAS by geographic segment
3. Segments performing above target: increase bid adjustment (+10% to +30%)
4. Segments performing below target: decrease bid adjustment (-10% to -30%)
5. Segments with spend but zero conversions over 30+ days: consider excluding

### Adjustment Ranges
- Maximum positive: +900% (rarely needed)
- Maximum negative: -90% (effectively suppresses but does not fully exclude)
- To fully stop serving in a location: add as a negative location target (exclusion)
- Small adjustments (+/- 5-10%) have minimal impact. Make meaningful changes (+/- 15%+) or don't adjust.

---

## Geographic Performance Analysis

### Reports to Pull
- **User location report**: where users are physically located when they see the ad
- **Geographic report by city**: performance broken down by city
- **Geographic report by zip/postal code**: most granular view
- **Distance report**: performance by distance from the business (requires location extensions)

### Analysis Framework
1. Sort by spend (highest first) to focus on material segments
2. Calculate CPA and/or ROAS for each geographic segment
3. Compare to account average
4. Flag segments with spend >$100 and zero conversions
5. Flag segments with CPA >2x account average
6. Identify high-performing segments that could absorb more budget
7. Check for conversions from outside the target area (indicates targeting leak)

### Common Findings
- 10-20% of budget spent on locations outside the intended service area
- One or two zip codes driving disproportionate conversion volume
- Urban core outperforming suburban ring (or vice versa)
- Competitor locations generating clicks but not conversions

---

## Tourism Exception: When "Presence or Interest" Is Correct

For local businesses in high-tourism locations that serve significant visitor traffic, "Presence or Interest" targeting is appropriate WITH controls.

### Identifying tourism-relevant businesses
The account-conventions config includes `tourism_relevant: true` and `feeder_markets` for applicable locations.

### Recommended approach: Split campaigns

| Campaign | Targeting | Audience | Messaging |
|----------|----------|----------|-----------|
| Local - Presence | Presence only, standard radius | All | Walk-in / immediate-need focused |
| Tourist - Planning | Presence or Interest, targeting feeder markets | In-market for travel to [destination] | Booking / planning-phase CTA |

### Controls for "Presence or Interest" campaigns
1. Set positive bid adjustments for confirmed feeder markets
2. Layer travel in-market audiences to filter casual interest from active planners
3. Separate budget from local campaigns (different economics)
4. Longer conversion windows (tourists plan days/weeks ahead)
5. Monitor geographic performance to validate feeder market assumptions

### What audit-local should check
- If `tourism_relevant: true` AND targeting is "Presence only": flag as potential missed opportunity
- If `tourism_relevant: false` AND targeting is "Presence or Interest": flag as likely waste
- If "Presence or Interest" is active: verify feeder market bid adjustments and travel audiences are in place
