# Match Type Behavior (2025-2026)

## Current Match Type Semantics

Google Ads match types have evolved significantly from their original definitions. As of 2025-2026, all match types use intent-based matching to varying degrees. Understanding current behavior is essential for accurate search term evaluation.

### Exact Match
- **Current behavior:** Matches the meaning and intent of the keyword, including close variants. Close variants include: plurals, misspellings, abbreviations, reworded versions, implied words, and same-intent queries.
- **No longer truly "exact."** A keyword like [running shoes] can match "shoes for running," "running sneakers," or "jogging shoes."
- **What it controls:** Exact match still provides the tightest intent alignment. Queries should be closely related to the keyword's core meaning.
- **When it fails:** Close variants occasionally change meaning. Monitor for semantic drift where Google matches queries that share words but differ in intent.

### Phrase Match
- **Current behavior:** Matches queries that include the meaning of the keyword in the correct conceptual order. Additional words can appear before or after. Google may reword or reorder slightly if the meaning is preserved.
- **Example:** Keyword "moving services NYC" can match "affordable moving services in NYC," "NYC moving and packing services," or "moving services near NYC."
- **What it controls:** Maintains directional intent while allowing modifier expansion. Useful for terms where word order carries meaning.
- **When it fails:** Google sometimes interprets "meaning" loosely. "Tennis shoes" in phrase match might match "shoes for tennis players" (reasonable) or "tennis equipment shoes accessories" (stretch).

### Broad Match
- **Current behavior:** Matches queries related to the keyword's meaning, including synonyms, related searches, and implied intent. Heavily influenced by Smart Bidding signals (user location, recent searches, other keywords in the ad group, landing page content).
- **Example:** Keyword "low carb diet plan" can match "keto meal prep ideas," "carb free eating guide," or "weight loss food plans."
- **What it controls:** Minimal keyword-level control. Broad match with Smart Bidding lets Google's algorithm determine relevance based on conversion probability.
- **Critical dependency:** Broad match performs best (and is designed to work) with Smart Bidding strategies (Target CPA, Target ROAS, Maximize Conversions). Without Smart Bidding, broad match often produces poor relevance.
- **When it fails:** Insufficient conversion data leads to poor matching. New campaigns or keywords with no history are particularly vulnerable. Broad match also tends to over-index on high-volume, low-intent queries when the bidding algorithm lacks signal.

---

## Close Variant Behavior

### What Close Variants Include
- Misspellings: "plumer" matches "plumber"
- Singular/plural: "shoe" matches "shoes"
- Stemmings: "running" matches "run"
- Abbreviations: "NYC" matches "New York City"
- Accents: "cafe" matches "caf\u00e9"
- Rewordings: "pictures of cats" matches "cat photos"
- Reordering: "shoes running" may match "running shoes" (for exact match, if meaning is preserved)
- Implied words: "plumber [in] Seattle" where "in" is implied

### Reporting Impact
Google groups close variants together in some reports. When evaluating keyword performance:
- Aggregate all close variants for the true performance picture
- Do not make decisions based on a single variant's metrics if other variants exist
- Check the search terms report to see which specific variants are driving performance

### Meaning-Changing Close Variants
Close variants can occasionally produce matches that change the keyword's meaning. Common patterns:
- Adding/removing negation: "non-toxic" vs. "toxic"
- Verb vs. noun shifts: "monitor baby" (action) vs. "baby monitor" (product)
- Subject/object reversal: "plumber needs customer" vs. "customer needs plumber"

These are Google matching errors. When identified, add the incorrect variant as a negative exact match keyword to prevent it from matching again.

---

## AI Max for Search (2025-2026 Rollout)

### What AI Max Does
AI Max is a campaign-level opt-in feature that allows Search campaigns to run without traditional keyword targeting. Instead, Google uses:
- Landing page content analysis
- Ad copy and asset signals
- Audience signals and first-party data
- Historical conversion data
- Real-time user signals (location, device, browsing history)

### How It Differs from Broad Match
- Broad match still uses a keyword as the starting point for matching
- AI Max removes the keyword anchor entirely
- AI Max evaluates user intent against the advertiser's full context (pages, ads, audiences), not a keyword

### Implications for Search Term Analysis
- AI Max campaigns produce search terms that cannot be mapped back to a specific keyword
- Evaluation must use asset group themes and landing pages as reference points (similar to PMax)
- The three-way cross-reference adapts: term vs. landing page, term vs. ad copy theme, term vs. business offering

### Current Recommendation
Keyword-based campaigns remain available and are recommended for accounts that require precise control. AI Max is appropriate for:
- Accounts with strong conversion history (100+ conversions/month)
- Advertisers with comprehensive landing page coverage
- Campaigns where discovery of new search patterns is a priority
- Accounts with well-built audience segments

AI Max is NOT recommended for:
- New accounts with no conversion history
- Accounts with limited landing page inventory
- Campaigns where every query must be evaluated for brand safety
- Accounts with low budgets where waste tolerance is near zero

---

## Three-Lane Campaign Structure

A recommended campaign architecture that balances control with algorithmic expansion:

### Lane 1: Brand Campaigns
- **Match type:** Exact match for core brand terms, phrase match for brand + modifier combinations
- **Bidding:** Manual CPC or Target CPA (brand terms are predictable enough for manual management)
- **Purpose:** Protect brand terms, control brand CPCs, prevent other campaigns from capturing brand traffic
- **Negatives:** Add all brand terms as negatives in non-brand campaigns

### Lane 2: Non-Brand Core Campaigns
- **Match type:** Phrase match and exact match for proven, high-intent keywords
- **Bidding:** Target CPA or Target ROAS with sufficient conversion data
- **Purpose:** Controlled non-brand coverage for known converting terms
- **Negatives:** Brand negatives, competitor negatives (unless running a conquesting strategy), informational intent negatives

### Lane 3: Broad Match Discovery Campaigns
- **Match type:** Broad match with Smart Bidding
- **Bidding:** Target CPA or Maximize Conversions (Smart Bidding is required for broad match to perform)
- **Purpose:** Discover new search patterns, expand reach beyond known keywords
- **Negatives:** Heavy negative keyword management. Brand negatives, terms already covered by Lane 2, and rapid URGENT_NEGATIVE additions from search term review.
- **Budget:** Typically 15-25% of non-brand budget, adjusted based on discovery performance

### How the Three Lanes Interact
- Lane 3 (discovery) surfaces new terms through broad match
- Winning terms from Lane 3 are promoted to Lane 2 (core) as exact/phrase match keywords
- Lane 3 gets those terms added as negatives (to avoid overlap)
- Lane 1 (brand) operates independently, capturing all brand traffic with controlled bids

This structure ensures the account has both a controlled foundation and a learning engine, without them competing for the same traffic.

---

## Match Type Migration Considerations

### Moving from Exact to Phrase
- **Effect:** Expands reach by allowing modifier variations before/after the keyword
- **Risk:** Reduced precision. May attract informational or lower-intent queries.
- **Mitigation:** Increase search term review frequency to daily for 2 weeks. Pre-build negative keyword list for expected irrelevant modifiers.
- **When appropriate:** Exact match volume is plateaued and target CPA has headroom for some testing waste.

### Moving from Phrase to Broad
- **Effect:** Significantly expands reach by allowing synonym, related-term, and intent-based matching
- **Risk:** Substantial precision reduction without Smart Bidding. Can drain budget quickly on irrelevant traffic.
- **Prerequisites:** Smart Bidding must be active. Campaign should have 30+ conversions in the past 30 days for the bidding algorithm to work effectively.
- **Mitigation:** Run as a separate campaign (Lane 3) rather than changing existing keywords. Set a dedicated budget to limit exposure.
- **When appropriate:** Strong conversion data, adequate budget, goal is expansion and discovery.

### Migration Best Practices
- Change one campaign at a time. Never migrate match types account-wide simultaneously.
- Monitor search terms daily for the first 2 weeks after any match type change.
- Maintain the original exact/phrase keywords in their own campaigns. Do not replace them with broad match. Run broad alongside, not instead of.
- Set clear success criteria before migrating: target CPA ceiling, minimum conversion volume, review timeline.
- Prepare a rollback plan: if performance degrades beyond thresholds within the 2-week window, revert.
