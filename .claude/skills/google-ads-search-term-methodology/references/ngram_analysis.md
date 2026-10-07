# N-gram Analysis Methodology

## What N-grams Are

An n-gram is a contiguous sequence of n words from a given text. In search term analysis, we decompose each search term into its component n-grams to find patterns that repeat across many different search terms.

- **Unigram (1-gram):** Single words. "emergency," "plumber," "near"
- **Bigram (2-gram):** Two-word sequences. "emergency plumber," "plumber near," "near me"
- **Trigram (3-gram):** Three-word sequences. "emergency plumber near," "plumber near me"
- **4-gram:** Four-word sequences. "emergency plumber near me"

For a search term like "emergency plumber near me," the full decomposition produces:
- 4 unigrams: emergency, plumber, near, me
- 3 bigrams: emergency plumber, plumber near, near me
- 2 trigrams: emergency plumber near, plumber near me
- 1 four-gram: emergency plumber near me

## Why N-grams Matter

Individual search terms are often unique. An account might have 5,000 distinct search terms, making term-by-term review impractical. But the patterns within those terms repeat. N-gram analysis surfaces these patterns at scale.

Instead of evaluating "emergency plumber cost," "emergency plumber reviews," and "emergency plumber near me" as three separate decisions, n-gram analysis reveals that the bigram "emergency plumber" appears across all three with aggregated performance data. This enables:

- **Pattern-level negative identification:** Finding that the unigram "salary" appears in 47 search terms with $230 total spend and 0 conversions
- **Theme discovery:** Finding that the bigram "small business" converts at 3x the account average across 23 terms
- **Efficiency at scale:** Reviewing 200 n-grams instead of 5,000 individual terms

## Decomposition Process

1. **Extract all search terms** with their metrics (impressions, clicks, cost, conversions, conversion value) for the evaluation window
2. **Normalize terms:** lowercase, remove extra whitespace, optionally remove common stop words (the, a, an, in, on, at, for, to, of, and, or, is, it, by, with). Be cautious with stop word removal as some stop words carry meaning in context ("for sale" vs. "sale").
3. **Break each term** into unigrams, bigrams, trigrams, and 4-grams
4. **Aggregate metrics** across all terms containing each n-gram. Every metric from the parent search term is attributed to each of its component n-grams.
5. **Count frequency:** How many unique search terms contain each n-gram
6. **Calculate derived metrics:** Conversion rate, CPA, ROAS for each n-gram

## Volume Thresholds

Minimum thresholds before taking action based on n-gram data:

| Threshold | Value | Rationale |
|-----------|-------|-----------|
| Minimum clicks on an n-gram | 20 | Below this, statistical noise dominates. A single click can swing conversion rate from 0% to 100%. |
| Minimum unique terms containing the n-gram | 5 | If an n-gram appears in fewer than 5 terms, it is effectively the same as evaluating those individual terms. The value of n-gram analysis is pattern aggregation. |
| Minimum impressions for zombie identification | 100 | Low-impression n-grams have not had enough exposure to assess click potential. |

For accounts with lower overall volume, reduce these thresholds proportionally but never below: 10 clicks, 3 unique terms, 50 impressions.

## Identification Targets

### Zero-Conversion N-grams with Significant Spend (Negative Candidates)
- N-grams with 20+ clicks, $50+ spend, and 0 conversions
- These represent systematic waste patterns, not one-off bad matches
- Adding the n-gram as a negative keyword (at the appropriate match type) blocks an entire category of irrelevant traffic
- Before adding: verify the n-gram is not a core term that should be converting (the issue might be landing page or ad copy, not relevance)

### High-Converting N-grams (Expansion Candidates)
- N-grams with conversion rate 2x+ account average
- N-grams with CPA 50%+ below target
- These indicate themes that resonate with the audience and warrant dedicated ad groups, expanded keyword coverage, or increased bids
- Consider creating new ad groups built around high-performing n-grams with tailored ad copy

### High-CPC N-grams with Low Conversion Rate
- N-grams where average CPC is above account average but conversion rate is below average
- Indicates the account is paying premium prices for underperforming traffic
- Diagnostic: is this a relevance issue (negative candidate) or a landing page/ad issue (optimization candidate)?

### Brand N-grams in Non-Brand Campaigns
- The advertiser's brand name (or close misspellings) appearing in non-brand campaigns
- This is a segmentation issue, not a relevance issue. These terms should be routed to brand campaigns with appropriate bids and budgets.
- Add as negatives in non-brand campaigns, ensure they are covered in brand campaigns

## N-gram Buckets

Adapted from the Mike Rhodes n-gram analysis framework. Each n-gram falls into one bucket based on its aggregate performance.

### Zombie
- **Definition:** N-grams with impressions but 0 clicks
- **Signal:** Visibility waste. Ads are showing for queries containing these n-grams but never getting clicked.
- **Investigation:** Is the ad copy misaligned? Is the search intent incompatible with the ad? Are these terms even relevant?
- **Action:** If irrelevant, add as negatives. If relevant but not clicked, investigate ad copy and positioning.

### Zeroconv (Zero Conversion)
- **Definition:** N-grams with clicks and spend but 0 conversions
- **Signal:** Active waste. Users are clicking but not converting.
- **Investigation:** Is the term irrelevant (negative candidate)? Is the landing page misaligned (optimization candidate)? Is the conversion tracking working for these terms?
- **Action:** Depends on relevance. Irrelevant terms become negatives. Relevant terms get landing page and ad diagnostics.

### Lclicks_Lconv (Low Clicks, Low Conversions)
- **Definition:** N-grams with below-threshold clicks and below-threshold conversions
- **Signal:** Insufficient data. Cannot make reliable decisions.
- **Action:** Tag for review in the next cycle. Do not make permanent decisions on low-data n-grams.

### Hclicks_Hconv (High Clicks, High Conversions)
- **Definition:** N-grams with above-threshold clicks and above-threshold conversions
- **Signal:** Winners. These n-grams represent the account's strongest performing patterns.
- **Action:** Protect these n-grams. Ensure they are not accidentally blocked by negative keywords. Consider building dedicated ad groups, expanding keyword coverage, and increasing bids for terms containing these n-grams.

### Hclicks_Lconv (High Clicks, Low Conversions)
- **Definition:** N-grams with above-threshold clicks but below-threshold conversions
- **Signal:** Volume without results. These n-grams attract traffic but fail to convert.
- **Investigation:** Is this a relevance problem or a conversion problem? Check: (1) Are the search terms containing this n-gram relevant? (2) Are the landing pages appropriate? (3) Is the ad copy setting correct expectations?
- **Action:** If irrelevant, add as negatives. If relevant, run landing page and ad diagnostics. This bucket often contains the highest-impact optimization opportunities.

### Bucket Thresholds

Define "high" and "low" relative to the account's performance:
- **Clicks threshold:** Use the account's median clicks-per-n-gram as the dividing line
- **Conversions threshold:** Use 1 conversion as the minimum for "has conversions" (for low-volume accounts) or 3 conversions for statistical confidence (for high-volume accounts)

## Brand Proximity Detection

Brand terms often appear as misspellings in search term reports. Standard string matching misses these.

**Method:** Calculate the Levenshtein distance (edit distance) between each unigram and every term in the brand term list. The Levenshtein distance counts the minimum number of single-character edits (insertions, deletions, substitutions) needed to change one word into another.

**Threshold:** Distance of 2 or fewer from any brand term flags the n-gram as potential brand traffic.

**Examples:**
- Brand: "Acme" / Misspelling: "Acmee" (distance 1)
- Brand: "Shopify" / Misspelling: "Shopfy" (distance 1)
- Brand: "Klaviyo" / Misspelling: "Klavio" (distance 1)

**Application:**
- Flag brand-proximate n-grams in non-brand campaigns for routing to brand campaigns
- Avoid accidentally adding misspelled brand terms as negative keywords
- Include brand proximity column in the output table

## Output Format

The final n-gram analysis output should be structured as a sortable table:

| N-gram | Type | Frequency | Clicks | Cost | Conversions | Conv Rate | CPA | Conv Value | ROAS | Bucket | Brand Proximity |
|--------|------|-----------|--------|------|-------------|-----------|-----|------------|------|--------|-----------------|
| emergency plumber | bigram | 23 | 187 | $1,240 | 12 | 6.4% | $103 | $3,600 | 2.9x | Hclicks_Hconv | None |
| salary | unigram | 47 | 89 | $230 | 0 | 0% | N/A | $0 | 0x | zeroconv | None |
| acmee | unigram | 3 | 12 | $45 | 2 | 16.7% | $22.50 | $180 | 4.0x | Lclicks_Lconv | "acme" (d=1) |

**Sorting recommendations:**
- Primary sort: Cost descending (surfaces highest-waste patterns first)
- Secondary sort: Conversion rate ascending (surfaces lowest-performing patterns)
- Provide separate views sorted by each column for different analysis angles

**Grouping recommendations:**
- Group by bucket for action-oriented review
- Group by n-gram type (unigram/bigram/trigram) for structural analysis
- Group by brand proximity for brand vs. non-brand segmentation review
