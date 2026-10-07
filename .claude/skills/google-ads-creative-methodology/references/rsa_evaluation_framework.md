# RSA Evaluation Framework

Complete reference for evaluating Responsive Search Ads in Google Ads.

---

## Asset Quality Ratings

Google assigns performance ratings to individual RSA assets (headlines and descriptions):

| Rating | Meaning | Action |
|--------|---------|--------|
| **Best** | Top-performing asset in its position | Keep. This is your benchmark. |
| **Good** | Performing well relative to other assets | Keep. Monitor for consistency. |
| **Low** | Underperforming compared to other assets | Replace. Draft a new asset testing a different angle. |
| **Learning** | Insufficient data for a rating | Wait. Needs more impressions before evaluation. |
| **Pending** | Not yet evaluated by the system | Wait. Recently added or not yet served. |
| **Not applicable** | Cannot be rated in context | Review. May indicate a pinning or eligibility issue. |

**Important:** These ratings are relative within the ad, not absolute. A "Best" headline in a weak RSA is not necessarily strong creative. Ratings compare assets against each other within the same ad.

---

## Ad Strength Score

Google rates each RSA on a four-point scale:

| Score | What It Signals |
|-------|----------------|
| **Excellent** | High asset quantity, strong diversity, good keyword relevance |
| **Good** | Adequate assets with reasonable diversity |
| **Average** | Missing assets or limited diversity |
| **Poor** | Too few assets, repetitive messaging, or poor keyword alignment |

### What Ad Strength Measures
- Number of unique headlines and descriptions provided
- Diversity of messaging across assets (not just rewording)
- Relevance of asset text to the ad group's keywords
- Use of popular keyword themes in at least some headlines

### What Ad Strength Does NOT Measure
- Actual click-through rate
- Conversion rate or conversion quality
- Landing page experience
- Competitive positioning

### How to Use Ad Strength
Ad Strength is a completeness and diversity signal, not a performance predictor. Google's own data shows weak correlation between Ad Strength and actual CTR or conversion rate.

- **Minimum bar:** Never run ads rated Poor. The limited asset pool restricts optimization.
- **Not a target:** Excellent does not guarantee performance. An Excellent-rated ad with poor messaging will still underperform.
- **Diagnostic tool:** Use Ad Strength to identify missing asset categories or repetitive messaging, then evaluate actual performance through CTR and conversion data.

---

## Asset Count Best Practices

| Asset Type | Minimum | Recommended | Maximum |
|-----------|---------|-------------|---------|
| Headlines | 8 | 15 | 15 |
| Descriptions | 2 | 4 | 4 |

### Why More Assets Matter
Google assembles RSAs dynamically, combining different headlines and descriptions for each auction. More unique assets means:
- More combinations available for testing
- Better matching to diverse search queries
- Greater ability to personalize by device, time, and user context

Running only the minimum (3 headlines, 2 descriptions) gives Google almost no room to optimize. Running 15 headlines and 4 descriptions creates thousands of possible combinations.

---

## Pin Strategy Evaluation

Pinning forces a specific asset to always appear in a specific position.

### Pin Options
- **No pins (default):** Google freely combines and positions all assets. Maximum optimization flexibility. Recommended unless there is a specific reason to pin.
- **Pin to Position 1:** Forces an asset to always appear as Headline 1. Use for brand name requirements, legal compliance, or a message that must always lead.
- **Pin to Position 2:** Forces appearance in Headline 2. Less common. Use for structured messaging patterns.
- **Pin to Position 3:** Forces appearance in Headline 3. Rarely needed. Note that Headline 3 does not always display.
- **Multiple assets pinned to same position:** Google rotates among them in that position. Better than single-pin because it preserves some testing flexibility.

### Over-Pinning Risks
If all three headline positions are pinned to single assets, you are running a static ad with no optimization capability. This defeats the purpose of RSAs.

**Rule:** Pin only when you have a specific business reason (compliance, brand mandate, required messaging). Never pin as a default practice.

### Common Pin Patterns
- Brand name in H1, everything else unpinned: ensures brand visibility while allowing optimization
- Brand in H1, offer in H2, CTA in H3: structured but rigid. Only if messaging sequence is critical.
- Multiple assets per pin position: best compromise between control and flexibility

---

## Headline Diversity Analysis

Evaluate headline diversity across these categories. A strong RSA includes headlines from most or all of these types:

### 1. Unique Value Propositions
Each headline should communicate a distinct benefit or differentiator. Five headlines that all say "Save Money" in different words provide no diversity.

### 2. Keyword Inclusion
At least 2-3 headlines should include primary keywords from the ad group. This improves relevance signals and Quality Score.

### 3. CTA Variety
Different calls to action: "Shop Now," "Get a Free Quote," "Learn More," "Start Your Trial." Not every headline needs a CTA, but at least 2-3 should include one.

### 4. Benefit vs. Feature Balance
Mix of benefit-focused headlines ("Save 3 Hours a Week") and feature-focused headlines ("AI-Powered Scheduling"). Benefits typically outperform features but both should be represented.

### 5. Brand Name Inclusion
At least 1-2 headlines should include the brand name for recognition and trust. More important for established brands than unknown ones.

### 6. Offer/Promotion Headlines
If applicable: price points, discounts, free trials, guarantees. These tend to drive CTR when relevant.

### 7. Social Proof Headlines
Customer counts, ratings, awards, certifications. "Rated 4.9/5 by 10,000 Customers" provides credibility.

---

## Description Quality Evaluation

### Feature vs. Benefit Language
Descriptions have 90 characters. Use them for supporting detail that headlines cannot fit. Benefits (outcomes for the user) outperform features (product specifications) in most cases.

### CTA Presence
At least 1 description should include a clear call to action with specifics: "Order by Friday for Free Shipping" rather than just "Learn More."

### Supporting Detail
Use descriptions for: specifications, guarantees, differentiators, shipping info, trust signals. Information that helps the click decision but is too long for headlines.

### Character Usage
Don't waste the 90-character limit on 30-character descriptions. Short descriptions leave money on the table. Fill the space with meaningful, relevant information.

---

## Message Alignment Triangle

Three elements must align for strong RSA performance:

```
     Keyword Intent
         /    \
        /      \
Ad Copy -------- Landing Page
```

### Alignment Checks
1. **Keyword to Ad Copy:** Does the ad address the searcher's intent? A keyword about "pricing" should have pricing-related headlines.
2. **Ad Copy to Landing Page:** Does the landing page deliver on the ad's promise? If the ad says "Free Trial," the landing page must feature the free trial prominently.
3. **Keyword to Landing Page:** Does the landing page content match the keyword theme? This is the Quality Score relevance component.

### Misalignment Consequences
- Low Quality Score (drives up CPC)
- Low conversion rate (users bounce when expectations aren't met)
- Wasted spend (clicks that never convert)

---

## Multi-Ad-Group RSA Strategy

### Theme-Specific RSAs
Each ad group should have RSAs tailored to its keyword theme. Running the same generic RSA across all ad groups wastes the format's personalization capability.

### Ad Group Theme Reflection
Headlines should reference the ad group's specific product, service, or intent category. An ad group for "running shoes" and an ad group for "hiking boots" need different RSAs, not a generic "Shop Our Shoes" ad.

### Testing Multiple RSAs
When volume supports it (100+ clicks per week per ad group), test 2-3 RSA variants:
- Different value proposition emphasis
- Different headline strategies (benefit-led vs. feature-led)
- Different CTA approaches

For low-volume ad groups, one well-constructed RSA is sufficient. Don't split limited traffic across too many variants.
