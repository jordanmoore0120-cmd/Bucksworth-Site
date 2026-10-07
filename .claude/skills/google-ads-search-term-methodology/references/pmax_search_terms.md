# PMax Search Term Analysis

## PMax vs. Search: Key Differences for Search Term Evaluation

Performance Max campaigns operate fundamentally differently from Search campaigns when it comes to search term analysis. The core differences:

- **No keyword-level attribution.** PMax does not use keywords, so search terms cannot be traced to a triggering keyword.
- **Multi-channel blending.** PMax runs across Search, Shopping, Display, YouTube, Gmail, and Discover. Search terms visible in reports represent only the Search and Shopping channels.
- **Asset group structure.** Asset groups replace ad groups as the organizational unit. Each asset group has themes, final URLs, and audience signals rather than keyword lists.
- **Limited negative keyword control.** PMax does not support traditional campaign-level negatives. Account-level negatives and shared lists apply, but the toolset is restricted compared to Search.

These differences require adapting the standard search term methodology rather than abandoning it.

---

## Evaluation Anchor: Asset Group Themes

In Search campaigns, the matched keyword serves as the primary reference point for evaluating a search term. In PMax, the asset group theme replaces this anchor.

**Asset group theme** is defined by:
- The asset group name and its intended product/service focus
- The final URLs associated with the asset group
- The text assets (headlines, descriptions) in the asset group
- The audience signals attached to the asset group
- For Shopping-eligible PMax: the product feed titles and descriptions within the asset group's listing group

When evaluating a PMax search term, the question is: "Does this term align with what this asset group is designed to attract and convert?"

---

## Three-Way Cross-Reference Adapted for PMax

### 1. Search Term vs. Asset Group Theme
- Does this term match the strategic purpose of the asset group?
- Would a user searching this term expect to find the products/services this asset group promotes?
- Is the term aligned with the audience signals attached to this asset group?

**Common failures:**
- Generic terms matching highly specific asset groups (or vice versa)
- Terms from one product category appearing in another product's asset group
- Brand terms appearing in non-brand asset groups

### 2. Search Term vs. Product Category (Shopping-Eligible PMax)
- For PMax campaigns with product feeds, the product titles and descriptions serve as "quasi-keywords"
- Does the search term match the products being shown?
- Is the product feed granular enough to differentiate between product categories?

**Common failures:**
- Broad product titles attracting irrelevant search terms
- Missing product attributes causing poor matching (e.g., no color/size in titles leads to mismatched queries)
- Competitor product searches matching your products when categories overlap

### 3. Search Term vs. Landing Page / Final URL
- Would a user searching this term find what they need on the final URL?
- Is the final URL the most relevant page for this query, or would another page be better?
- Does the page content address the implied intent of the search term?

**Common failures:**
- PMax selecting a generic homepage instead of a product-specific page
- Final URL expansion (if enabled) sending users to irrelevant pages
- Category pages shown for specific product queries

---

## Brand vs. Non-Brand Segmentation

### Why This Is Critical for PMax
Brand and non-brand traffic have fundamentally different economics:
- Brand clicks typically convert at 3-10x the rate of non-brand
- Brand CPCs are typically 50-80% lower than non-brand
- Blending brand and non-brand metrics in PMax creates an artificially inflated performance picture

If 70% of PMax conversions come from brand terms, the "performance" is mostly brand capture, not incremental growth. This must be identified and accounted for.

### Classification Method
1. Build a comprehensive brand term list: brand name, product names, common misspellings, abbreviations, branded campaign names
2. Use Levenshtein distance (threshold: 2) to catch misspellings not in the explicit list
3. Classify each PMax search term as brand, non-brand, or competitor
4. Report PMax metrics separately for brand and non-brand segments

### Segmentation Actions
- **Brand terms in non-brand PMax campaigns:** Flag for brand exclusion list review. These terms should be handled by dedicated brand Search campaigns where bid control exists.
- **Non-brand terms in brand-focused asset groups:** Re-evaluate asset group theme clarity. The asset group may need tighter audience signals or more specific text assets.
- **Competitor terms:** Always flag for human review. Competitor traffic in PMax is a strategic decision, not an optimization decision.

---

## When to Extract PMax Search Terms to Dedicated Search Campaigns

PMax search term extraction is the practice of identifying high-value search terms from PMax and creating dedicated Search campaigns to target them with full keyword-level control.

### Extraction Criteria

**Volume threshold:** The term should have 50+ clicks per week in PMax. Below this, the term does not have enough volume to justify a dedicated campaign.

**Proven conversion performance:** The term should have a demonstrated conversion history with CPA at or below target. Do not extract terms based on clicks alone.

**Bid control need:** You want to set specific bids for this term that differ from PMax's automated bidding. This is common for high-value, high-competition terms where CPC management matters.

**Landing page control:** The ideal landing page for this term differs from the PMax final URL. A dedicated Search campaign allows you to specify the exact destination.

**Brand protection:** Brand terms appearing in PMax should almost always be extracted to dedicated brand Search campaigns. Brand campaigns with exact match keywords and controlled bids are more efficient than letting PMax handle brand traffic.

### Extraction Process
1. Identify candidate terms from PMax search term reports (meeting criteria above)
2. Create the Search campaign with appropriate keywords, match types, and landing pages
3. Add the extracted terms as account-level or shared list negatives (since PMax does not support campaign-level negatives, you cannot block these terms in PMax directly without account-level action)
4. Monitor both campaigns for 2-4 weeks to verify the extraction improved overall performance
5. Check that PMax performance did not degrade disproportionately (some volume shift is expected)

### Risks of Over-Extraction
- Extracting too many terms can "hollow out" PMax, leaving it with only low-value traffic
- PMax's algorithm learns from its full traffic mix. Removing high-performers can reduce its ability to find similar users.
- Balance extraction with PMax's need for signal. Extract only terms where dedicated management clearly adds value.

---

## N-gram Analysis for PMax

The same n-gram methodology applies to PMax search terms, with adjustments for PMax's lower per-term data volume and limited negative keyword options.

### Wider Evaluation Windows
- PMax distributes traffic across multiple channels, so individual search terms accumulate data more slowly than in Search campaigns
- Use 4-week rolling windows minimum (vs. 1-week for high-volume Search)
- For accounts with lower PMax Search volume, extend to 8-week windows

### Focus Areas
- **Negative pattern identification:** Since PMax negatives are limited to account-level and shared lists, focus on identifying broad patterns (n-grams) rather than individual terms. A single account-level negative for a problematic n-gram is more impactful than term-by-term management.
- **Expansion candidates:** High-performing n-grams in PMax are strong candidates for dedicated Search campaign keywords.
- **Product feed alignment:** Compare top n-grams against product feed titles. Misalignment between what users search and what the feed describes indicates feed optimization opportunities.

### Volume Thresholds for PMax
- Minimum 10 clicks before classifying any individual term (vs. 5 for Search)
- Minimum 15 clicks on an n-gram before taking action (vs. 20 for Search, but with longer windows this produces similar confidence)
- Minimum 3 unique search terms containing the n-gram before treating it as a pattern

### PMax-Specific N-gram Patterns to Watch
- **Shopping query patterns:** Terms with product attributes (color, size, material, brand) indicate Shopping channel matching. Evaluate against product feed quality.
- **Informational patterns:** "How to," "what is," "best way to" patterns in PMax suggest the campaign is matching Display or YouTube-style intent on the Search channel. May indicate asset group theme is too broad.
- **Location patterns:** Geographic terms can reveal whether PMax is reaching the intended service area or leaking into unwanted geographies.

---

## Volume Thresholds Summary: PMax vs. Search

| Threshold | Search Campaign | PMax Campaign |
|-----------|----------------|---------------|
| Minimum clicks before term classification | 5 | 10 |
| Minimum clicks on n-gram before action | 20 | 15 (over 4-week window) |
| Minimum unique terms per n-gram | 5 | 3 |
| Evaluation window (standard) | 1-2 weeks | 4 weeks minimum |
| Evaluation window (low volume) | 4 weeks | 8 weeks |
| URGENT_NEGATIVE spend threshold | 2x target CPA | 3x target CPA (higher bar due to multi-channel attribution) |

The higher PMax thresholds reflect lower per-term data density and the recognition that PMax's multi-channel attribution can lag, causing premature negative classification if acted on too quickly.
