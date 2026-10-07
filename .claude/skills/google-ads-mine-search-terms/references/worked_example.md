# Worked Example: EdgeCraft Knives (Fictional)

This is an end-to-end walkthrough of the `mine_search_terms` skill using a fictional eCommerce account. Every business name, metric, and data point in this document is fictional. The purpose is to demonstrate how the analysis pipeline works from raw data through final outputs.

---

## Account Context

- **Business:** EdgeCraft Knives (fictional premium kitchen knife eCommerce store)
- **Business model:** eCommerce (DTC, Shopify)
- **Account maturity:** Developing (25 conversions/month)
- **Primary KPI:** ROAS, target 4x
- **Brand terms:** "edgecraft", "edge craft", "edgecraft knives"
- **Negative signals (universal):** jobs, careers, salary, free, DIY, how to, reddit, quora
- **Negative signals (account-specific):** wholesale, used, rental
- **Campaign structure:**
  - Brand Search (brand terms)
  - Non-Brand Search: Product Terms (chef knives, knife sets, etc.)
  - Non-Brand Search: Gift Terms (knife gifts, kitchen gifts)
  - PMax: All Products

**Maturity-calibrated thresholds (Developing):**
- Min clicks for term action: 10
- N-gram volume threshold: 20 clicks
- Min conversions for EXPAND: 3
- High-spend flag: 2x target CPA ($50 CPA equivalent at 4x ROAS, so $100 spend with 0 conversions)

---

## Raw Search Term Data (20 Terms)

| # | Search Term | Campaign | Ad Group | Matched Keyword | Match Type | Impr | Clicks | Cost | Conv | Value |
|---|-------------|----------|----------|-----------------|------------|------|--------|------|------|-------|
| 1 | best japanese chef knife | NB: Product | Chef Knives | japanese chef knife | Phrase | 1,240 | 87 | $174.00 | 5 | $745.00 |
| 2 | edgecraft knives review | Brand Search | Brand Core | edgecraft knives | Phrase | 320 | 48 | $24.00 | 8 | $1,120.00 |
| 3 | knife sharpening jobs near me | NB: Product | Chef Knives | knife sharpening | Broad | 890 | 34 | $108.80 | 0 | $0.00 |
| 4 | 8 inch chef knife | NB: Product | Chef Knives | chef knife | Broad | 960 | 62 | $130.20 | 4 | $596.00 |
| 5 | cheap knife set walmart | NB: Product | Knife Sets | knife set | Broad | 540 | 18 | $36.00 | 0 | $0.00 |
| 6 | professional knife set for chefs | NB: Product | Knife Sets | professional knife set | Phrase | 780 | 55 | $126.50 | 3 | $537.00 |
| 7 | how to sharpen a knife at home | NB: Product | Chef Knives | knife sharpening | Broad | 1,600 | 42 | $84.00 | 0 | $0.00 |
| 8 | knife block | NB: Product | Knife Sets | knife set | Broad | 620 | 28 | $64.40 | 1 | $89.00 |
| 9 | free kitchen knife set | NB: Gift | kitchen knife gift | Broad | 310 | 12 | $30.00 | 0 | $0.00 |
| 10 | best gift for home chef | NB: Gift | kitchen gifts | Broad | 440 | 22 | $55.00 | 2 | $298.00 |
| 11 | knife sharpening service cost | NB: Product | Chef Knives | knife sharpening | Broad | 380 | 15 | $48.00 | 0 | $0.00 |
| 12 | damascus steel chef knife | NB: Product | Chef Knives | chef knife | Broad | 520 | 38 | $83.60 | 3 | $594.00 |
| 13 | kitchen knives reddit | NB: Product | Chef Knives | kitchen knives | Broad | 290 | 8 | $16.00 | 0 | $0.00 |
| 14 | edge craft coupon code | Brand Search | Brand Core | edge craft | Phrase | 180 | 26 | $13.00 | 3 | $387.00 |
| 15 | wholesale knife supplier | NB: Product | Knife Sets | knife set | Broad | 150 | 6 | $13.80 | 0 | $0.00 |
| 16 | knife set for culinary students | NB: Product | Knife Sets | knife set | Broad | 280 | 14 | $32.20 | 1 | $149.00 |
| 17 | premium kitchen knives | PMax | All Products | (none) | Auto | 2,100 | 95 | $199.50 | 6 | $948.00 |
| 18 | best knife for cutting vegetables | NB: Product | Chef Knives | chef knife | Broad | 360 | 19 | $41.80 | 1 | $139.00 |
| 19 | used chef knives for sale | NB: Product | Chef Knives | chef knives | Broad | 210 | 9 | $20.70 | 0 | $0.00 |
| 20 | knife careers culinary school | NB: Product | Chef Knives | knife | Broad | 170 | 5 | $11.50 | 0 | $0.00 |

**Totals:** 12,340 impressions, 647 clicks, $1,313.00 cost, 37 conversions, $5,751.00 value

---

## Step 2: Pre-Processing Results

### Brand Terms Identified
- Term #2 "edgecraft knives review": matches brand term "edgecraft knives". Tagged BRAND.
- Term #14 "edge craft coupon code": matches brand term "edge craft". Tagged BRAND.
- **2 brand terms separated.** Aggregate: $37.00 spend, 11 conversions, $1,507.00 value (26.2% of total value)

### Pre-Tagged Negative Signals
- Term #3 "knife sharpening jobs near me": matches universal negative "jobs". Tagged PRE_TAGGED_NEGATIVE.
- Term #7 "how to sharpen a knife at home": matches universal negative "how to". Tagged PRE_TAGGED_NEGATIVE.
- Term #9 "free kitchen knife set": matches universal negative "free". Tagged PRE_TAGGED_NEGATIVE.
- Term #13 "kitchen knives reddit": matches universal negative "reddit". Tagged PRE_TAGGED_NEGATIVE.
- Term #15 "wholesale knife supplier": matches account negative "wholesale". Tagged PRE_TAGGED_NEGATIVE.
- Term #19 "used chef knives for sale": matches account negative "used". Tagged PRE_TAGGED_NEGATIVE.
- Term #20 "knife careers culinary school": matches universal negative "careers". Tagged PRE_TAGGED_NEGATIVE.
- **7 terms pre-tagged.** Aggregate: $284.00 spend, 0 conversions (21.6% of non-brand spend)

### PMax Terms Flagged
- Term #17 "premium kitchen knives": from PMax campaign. Tagged PMAX_SOURCE.
- **1 PMax term separated.**

### Pre-Processing Summary
| Category | Count | Spend | % of Total Spend |
|----------|-------|-------|-------------------|
| Brand (separated) | 2 | $37.00 | 2.8% |
| Pre-tagged negatives | 7 | $284.00 | 21.6% |
| PMax (separated) | 1 | $199.50 | 15.2% |
| Entering classification | 10 | $792.50 | 60.4% |

---

## Step 3: Three-Way Classification

### Pre-Tagged Negative Acceleration

These terms were confirmed irrelevant by the config. Assign directly based on spend:

| Term | Spend | Classification | Reasoning |
|------|-------|----------------|-----------|
| #3 knife sharpening jobs near me | $108.80 | URGENT_NEGATIVE | Spend > $100 threshold, "jobs" signal |
| #7 how to sharpen a knife at home | $84.00 | MONITOR_NEGATIVE | Below $100 threshold, "how to" signal |
| #9 free kitchen knife set | $30.00 | MONITOR_NEGATIVE | Below threshold, "free" signal |
| #13 kitchen knives reddit | $16.00 | MONITOR_NEGATIVE | Below threshold, "reddit" signal |
| #15 wholesale knife supplier | $13.80 | MONITOR_NEGATIVE | Below threshold, "wholesale" signal |
| #19 used chef knives for sale | $20.70 | MONITOR_NEGATIVE | Below threshold, "used" signal |
| #20 knife careers culinary school | $11.50 | MONITOR_NEGATIVE | Below threshold, "careers" signal |

### Full Classification of Remaining 10 Terms

**Term #1: "best japanese chef knife"**
- Cross-ref vs. keyword ("japanese chef knife"): strong alignment
- Cross-ref vs. campaign theme (NB Product, Chef Knives): strong alignment
- Cross-ref vs. landing page: chef knife category page, strong alignment
- Clicks: 87 (high), Conversions: 5, ROAS: 4.28x (above 4x target)
- **Classification: EXPAND.** High-converting, above target ROAS, strong three-way alignment.

**Term #4: "8 inch chef knife"**
- Cross-ref vs. keyword ("chef knife"): relevant variant, good alignment
- Cross-ref vs. campaign theme: strong alignment
- Cross-ref vs. landing page: chef knife page, good alignment
- Clicks: 62 (high), Conversions: 4, ROAS: 4.58x (above target)
- **Classification: EXPAND.** Meets all criteria.

**Term #5: "cheap knife set walmart"**
- Cross-ref vs. keyword ("knife set"): keyword match but intent mismatch (price/retailer seeking)
- Cross-ref vs. campaign theme: weak alignment (premium brand, "cheap" signals price sensitivity, "walmart" signals retail channel)
- Cross-ref vs. landing page: premium knife set page would not satisfy this searcher
- Clicks: 18 (medium), Conversions: 0, Spend: $36.00 (below $100 threshold)
- **Classification: MONITOR_NEGATIVE.** Irrelevant intent (price-seeking, retail channel), below spend threshold.

**Term #6: "professional knife set for chefs"**
- Cross-ref vs. keyword ("professional knife set"): strong alignment
- Cross-ref vs. campaign theme: strong alignment
- Cross-ref vs. landing page: knife sets page, strong alignment
- Clicks: 55 (high), Conversions: 3, ROAS: 4.24x (above target)
- **Classification: EXPAND.** Meets all criteria.

**Term #8: "knife block"**
- Cross-ref vs. keyword ("knife set"): partial match. Knife blocks are accessories, not knife sets.
- Cross-ref vs. campaign theme: partial alignment. EdgeCraft may or may not sell knife blocks.
- Cross-ref vs. landing page: knife sets page would be a partial fit if blocks are included, poor fit if not.
- Clicks: 28 (medium), Conversions: 1, ROAS: 1.38x (well below 4x target)
- **Classification: REVIEW_MANUALLY.** Ambiguous relevance (depends on product catalog). One conversion but poor ROAS. Needs practitioner input on whether knife blocks are a product they sell.

**Term #10: "best gift for home chef"**
- Cross-ref vs. keyword ("kitchen gifts"): relevant match, gift intent aligns
- Cross-ref vs. campaign theme (NB Gift): strong alignment
- Cross-ref vs. landing page: gift-oriented page, reasonable alignment
- Clicks: 22 (medium), Conversions: 2, ROAS: 5.42x (above target)
- **Classification: REVIEW_MANUALLY.** Relevant and strong ROAS, but only 2 conversions (below the 3-conversion EXPAND threshold for Developing accounts). Monitor for one more review cycle.

**Term #11: "knife sharpening service cost"**
- Cross-ref vs. keyword ("knife sharpening"): keyword match but intent mismatch (seeking service pricing)
- Cross-ref vs. campaign theme: poor alignment (sells knives, not sharpening services)
- Cross-ref vs. landing page: no sharpening service page exists
- Clicks: 15 (medium), Conversions: 0, Spend: $48.00 (below $100 threshold)
- **Classification: MONITOR_NEGATIVE.** Service intent, not product intent.

**Term #12: "damascus steel chef knife"**
- Cross-ref vs. keyword ("chef knife"): strong variant, specific material
- Cross-ref vs. campaign theme: strong alignment (premium knife brand likely carries damascus)
- Cross-ref vs. landing page: chef knife page, good alignment (better if a damascus-specific page exists)
- Clicks: 38 (medium-high), Conversions: 3, ROAS: 7.10x (well above target)
- **Classification: EXPAND.** High ROAS, relevant, meets conversion threshold.

**Term #16: "knife set for culinary students"**
- Cross-ref vs. keyword ("knife set"): relevant match
- Cross-ref vs. campaign theme: moderate alignment (student audience may differ from primary target)
- Cross-ref vs. landing page: knife sets page, reasonable fit
- Clicks: 14 (medium), Conversions: 1, ROAS: 4.63x (above target)
- **Classification: REVIEW_MANUALLY.** Only 1 conversion (insufficient data). Audience alignment uncertain. Worth monitoring.

**Term #18: "best knife for cutting vegetables"**
- Cross-ref vs. keyword ("chef knife"): relevant, chef knives are used for vegetable cutting
- Cross-ref vs. campaign theme: moderate alignment (specific use case)
- Cross-ref vs. landing page: chef knife page is reasonable but not specific to use case
- Clicks: 19 (medium), Conversions: 1, ROAS: 3.33x (below 4x target)
- **Classification: REVIEW_MANUALLY.** Relevant but underperforming. One conversion, below ROAS target. Could indicate landing page misalignment or insufficient data.

### Classification Summary

| Category | Count | Spend | Conversions | Conv Value |
|----------|-------|-------|-------------|------------|
| URGENT_NEGATIVE | 1 | $108.80 | 0 | $0.00 |
| EXPAND | 4 | $514.30 | 15 | $2,472.00 |
| MONITOR_NEGATIVE | 7 | $212.00 | 0 | $0.00 |
| REVIEW_MANUALLY | 4 | $193.40 | 5 | $675.00 |
| BRAND (separated) | 2 | $37.00 | 11 | $1,507.00 |
| PMAX (separated) | 1 | $199.50 | 6 | $948.00 |

Top URGENT_NEGATIVE by spend: "knife sharpening jobs near me" ($108.80, 34 clicks, 0 conversions)

Top EXPAND by conversions: "best japanese chef knife" (5 conversions, 4.28x ROAS)

---

## Step 4: N-Gram Analysis

Decomposing all non-brand terms into n-grams (18 terms, aggregating metrics):

### Top Unigrams (by spend)

| N-gram | Type | Terms | Clicks | Cost | Conv | ROAS | Bucket |
|--------|------|-------|--------|------|------|------|--------|
| knife | Uni | 16 | 551 | $1,070.50 | 26 | 4.86x | Mixed Signal (too broad to act on) |
| chef | Uni | 7 | 287 | $589.60 | 16 | 4.55x | High-Converting |
| sharpening | Uni | 3 | 91 | $240.80 | 0 | 0.00x | Zero-Conv High-Spend |
| set | Uni | 5 | 82 | $198.40 | 4 | 3.79x | Mixed Signal |
| kitchen | Uni | 3 | 42 | $100.50 | 2 | 4.35x | Mixed Signal (low volume) |

### Top Bigrams (by spend)

| N-gram | Type | Terms | Clicks | Cost | Conv | ROAS | Bucket |
|--------|------|-------|--------|------|------|------|--------|
| chef knife | Bi | 5 | 225 | $471.40 | 13 | 5.11x | High-Converting |
| knife set | Bi | 4 | 60 | $118.00 | 4 | 5.85x | High-Converting |
| knife sharpening | Bi | 3 | 91 | $240.80 | 0 | 0.00x | Zero-Conv High-Spend |
| how to | Bi | 1 | 42 | $84.00 | 0 | 0.00x | Zero-Conv (already tagged) |

### Top Trigrams (by spend)

| N-gram | Type | Terms | Clicks | Cost | Conv | ROAS | Bucket |
|--------|------|-------|--------|------|------|------|--------|
| knife sharpening jobs | Tri | 1 | 34 | $108.80 | 0 | 0.00x | Zero-Conv (already tagged) |
| knife sharpening service | Tri | 1 | 15 | $48.00 | 0 | 0.00x | Zero-Conv |

### Patterns Discovered

**New negative pattern:** The bigram "knife sharpening" appears across 3 terms totaling $240.80 in spend with 0 conversions. Individual terms #3 and #7 were already pre-tagged, but term #11 ("knife sharpening service cost") was classified as MONITOR_NEGATIVE on its own. The n-gram analysis confirms "knife sharpening" as a concept-level negative, suggesting a negative phrase match on "knife sharpening" rather than negating individual terms.

**Expansion theme:** The bigram "chef knife" is a strong performer across 5 terms with 5.11x aggregate ROAS. This confirms the individual EXPAND classifications and suggests the ad group "Chef Knives" is well-themed.

---

## Step 5: Negative Keyword Placement

### Proposed Negatives

| Keyword | Match Type | Level | Reason | Source |
|---------|-----------|-------|--------|--------|
| jobs | Negative broad | Account | Universal negative, irrelevant across all campaigns | Pre-tagged + n-gram |
| careers | Negative broad | Account | Universal negative | Pre-tagged |
| free | Negative phrase | Account | Universal negative | Pre-tagged |
| how to | Negative phrase | Account | Universal negative | Pre-tagged |
| reddit | Negative broad | Account | Universal negative | Pre-tagged |
| wholesale | Negative broad | Account | Account-specific negative | Pre-tagged |
| used | Negative broad | Account | Account-specific negative | Pre-tagged |
| knife sharpening | Negative phrase | Campaign: NB Product | N-gram pattern, $240.80 zero-conv spend | N-gram analysis |
| [cheap knife set walmart] | Negative exact | Ad Group: Knife Sets | Irrelevant price/channel intent | Classification |

### Conflict Detection

**Conflict found:** Proposed negative phrase "knife sharpening" in campaign NB Product.

Check: Does NB Product contain any positive keyword with the phrase "knife sharpening"?

Result: Yes. The broad match keyword "knife sharpening" exists in the Chef Knives ad group.

**Resolution:** This is actually desirable. The positive keyword "knife sharpening" is attracting irrelevant service and job searches. Options:
1. Add the negative phrase "knife sharpening" at campaign level AND pause the positive keyword "knife sharpening" in the Chef Knives ad group (recommended, since 91 clicks and 0 conversions from this keyword)
2. Add only negative exact matches for the specific bad terms (narrower, leaves the keyword active for potential discovery)

**Recommendation:** Option 1. The keyword "knife sharpening" has generated $240.80 in spend with 0 conversions across all matched terms. The keyword itself is a poor fit for a knife retailer.

**No other conflicts detected.** The account-level broad negatives (jobs, careers, free, wholesale, used, reddit) do not conflict with any positive keywords.

---

## Step 6: PMax Term Evaluation

**PMax term #17: "premium kitchen knives"**
- 95 clicks, $199.50 spend, 6 conversions, $948.00 value, ROAS: 4.75x
- Relevant to the business
- Not currently covered by a Search campaign exact match keyword
- **Extraction candidate:** This term has sufficient volume and strong performance to justify a dedicated exact match keyword in the NB Product campaign. Adding [premium kitchen knives] as an exact match in Search would give bid control and ad copy alignment, while PMax continues to serve on broader related queries.

**Brand cannibalization:** Not detected in this single-term sample. In a full analysis, check whether PMax is serving on brand terms like "edgecraft knives" that should be handled exclusively by the Brand Search campaign.

---

## Step 7: Gray Area Triage

### Group 1: High Confidence (recommended action, requesting confirmation)

**Term #10: "best gift for home chef"** (22 clicks, 2 conv, 5.42x ROAS)
- Diagnostic: All three cross-reference checks pass. Strong ROAS. Just 1 conversion short of the EXPAND threshold.
- Recommendation: Monitor for 2 more weeks. If it reaches 3+ conversions, promote to EXPAND. Do not negate.
- Confidence: High

### Group 2: Medium Confidence (mixed signals)

**Term #8: "knife block"** (28 clicks, 1 conv, 1.38x ROAS)
- Diagnostic: Keyword match is loose ("knife set" matching to "knife block"). These are different products. If EdgeCraft sells knife blocks, this is a landing page issue. If EdgeCraft does not sell knife blocks, this is a negative.
- Key question for practitioner: Does EdgeCraft sell knife blocks?
  - If yes: Keep the term, create a dedicated knife blocks ad group with appropriate landing page
  - If no: Add as negative exact [knife block]
- Confidence: Medium

**Term #18: "best knife for cutting vegetables"** (19 clicks, 1 conv, 3.33x ROAS)
- Diagnostic: Relevant query. Chef knives are used for cutting vegetables. ROAS is below 4x target but not dramatically. One conversion is insufficient data.
- Key question: Is the landing page a general chef knife page, or does it address use-case queries?
- Recommendation: Monitor. If ROAS improves with more data, this becomes an EXPAND candidate. If ROAS stays below 3x after 30+ clicks, consider landing page optimization.
- Confidence: Medium

### Group 3: Low Confidence (insufficient data)

**Term #16: "knife set for culinary students"** (14 clicks, 1 conv, 4.63x ROAS)
- Diagnostic: Relevant, good ROAS, but only 14 clicks and 1 conversion. This could be a one-time purchase or a legitimate audience segment.
- Recommendation: Wait for 20+ clicks before making a decision. If conversions hold, this represents an audience worth targeting.
- Confidence: Low

---

## Step 8: Output Samples

### Negative Keyword CSV (snippet)

```csv
Campaign,Ad Group,Keyword,Criterion Type,Status
"","",jobs,"Negative broad","Active"
"","",careers,"Negative broad","Active"
"","","free","Negative phrase","Active"
"","","how to","Negative phrase","Active"
"","",reddit,"Negative broad","Active"
"","",wholesale,"Negative broad","Active"
"","",used,"Negative broad","Active"
"Non-Brand Search: Product Terms","","knife sharpening","Negative phrase","Active"
"Non-Brand Search: Product Terms","Knife Sets","[cheap knife set walmart]","Negative exact","Active"
```

### Keyword Expansion CSV (snippet)

```csv
Campaign,Ad Group,Keyword,Match Type,Max CPC,Final URL,Status
"Non-Brand Search: Product Terms","Chef Knives","[best japanese chef knife]","Exact","","","Active"
"Non-Brand Search: Product Terms","Chef Knives","[8 inch chef knife]","Exact","","","Active"
"Non-Brand Search: Product Terms","Knife Sets","[professional knife set for chefs]","Exact","","","Active"
"Non-Brand Search: Product Terms","Chef Knives","[damascus steel chef knife]","Exact","","","Active"
"Non-Brand Search: Product Terms","Chef Knives","[premium kitchen knives]","Exact","","","Active"
```

Note: "premium kitchen knives" extracted from PMax and added as a Search expansion keyword.

### N-Gram Analysis Table (top entries)

| N-gram | Type | Bucket | Terms | Clicks | Cost | Conv | ROAS | Action |
|--------|------|--------|-------|--------|------|------|------|--------|
| knife sharpening | Bigram | Zero-Conv High-Spend | 3 | 91 | $240.80 | 0 | 0.00x | Negative phrase (campaign-level) + pause positive keyword |
| chef knife | Bigram | High-Converting | 5 | 225 | $471.40 | 13 | 5.11x | Confirm ad group theme. Expand exact match variants. |
| knife set | Bigram | High-Converting | 4 | 60 | $118.00 | 4 | 5.85x | Expand best-performing variants to exact match |
| knife | Unigram | Mixed Signal | 16 | 551 | $1,070.50 | 26 | 4.86x | Too broad to act on. Monitor at bigram/trigram level. |

### Summary Dashboard

```
# Search Term Mining Summary: EdgeCraft Knives
## Analysis Period: 2026-02-25 to 2026-03-26
## Account Maturity: Developing

### Classification Overview
| Category | Terms | Spend | % of Total | Conv | Conv Value |
|----------|-------|-------|------------|------|------------|
| URGENT_NEGATIVE | 1 | $108.80 | 8.3% | 0 | $0.00 |
| EXPAND | 4 | $514.30 | 39.2% | 15 | $2,472.00 |
| MONITOR_NEGATIVE | 7 | $212.00 | 16.1% | 0 | $0.00 |
| REVIEW_MANUALLY | 4 | $193.40 | 14.7% | 5 | $675.00 |
| BRAND | 2 | $37.00 | 2.8% | 11 | $1,507.00 |
| PMAX | 1 | $199.50 | 15.2% | 6 | $948.00 |
| **TOTAL** | **20** | **$1,313.00** | **100%** | **37** | **$5,751.00** |

### Immediate Savings Opportunity
- Spend on URGENT_NEGATIVE terms: $108.80 (8.3% of total spend)
- Spend on MONITOR_NEGATIVE terms: $212.00 (16.1% of total spend)
- Combined wasted spend: $320.80 (24.4% of total spend)
- Estimated monthly savings if negated today: $320.80

### Expansion Opportunity
- 5 EXPAND terms (including 1 PMax extraction) with 21 conversions
- Combined ROAS of expansion candidates: 4.81x (above 4x target)
- Adding exact match keywords improves bid control and quality score

### Top 5 Negatives by Spend
| Search Term | Campaign | Spend | Clicks | Reason |
|-------------|----------|-------|--------|--------|
| knife sharpening jobs near me | NB Product | $108.80 | 34 | Employment intent, "jobs" signal |
| how to sharpen a knife at home | NB Product | $84.00 | 42 | Informational intent, "how to" signal |
| cheap knife set walmart | NB Product | $36.00 | 18 | Price/channel mismatch |
| free kitchen knife set | NB Gift | $30.00 | 12 | Freebie-seeking, "free" signal |
| used chef knives for sale | NB Product | $20.70 | 9 | Secondhand market, "used" signal |

### Top 5 Expansion Candidates
| Search Term | Campaign | Conv | Conv Value | ROAS |
|-------------|----------|------|------------|------|
| best japanese chef knife | NB Product | 5 | $745.00 | 4.28x |
| premium kitchen knives | PMax (extract) | 6 | $948.00 | 4.75x |
| 8 inch chef knife | NB Product | 4 | $596.00 | 4.58x |
| professional knife set for chefs | NB Product | 3 | $537.00 | 4.24x |
| damascus steel chef knife | NB Product | 3 | $594.00 | 7.10x |

### N-Gram Patterns Discovered
- New negative patterns: 1 ("knife sharpening" as concept-level negative)
- New expansion themes: 2 ("chef knife" and "knife set" confirmed as strong themes)

### PMax Findings
- Brand cannibalization detected: No (not in this sample)
- Extraction candidates: 1 ("premium kitchen knives", 6 conv, 4.75x ROAS)

### Conflicts Detected and Resolved
- Total conflicts: 1
- Resolved by pausing conflicting positive keyword: 1 (pause "knife sharpening" broad match keyword)
- Resolved by narrowing match type: 0
- Removed: 0

### Gray Area Terms Pending Review
- High confidence (recommended action): 1 (monitor "best gift for home chef")
- Medium confidence (mixed signals): 2 ("knife block", "best knife for cutting vegetables")
- Low confidence (need more data): 1 ("knife set for culinary students")
```

---

## Key Takeaways from This Example

1. **Pre-tagging caught 7 of 8 negatives instantly.** The universal and account-specific negative signal lists in the config did most of the negative identification work. Only "cheap knife set walmart" required classification logic.

2. **N-gram analysis found a pattern that individual terms missed.** The bigram "knife sharpening" revealed that the positive keyword "knife sharpening" was a problem keyword, not just the individual terms matching to it. The recommendation to pause the keyword came from pattern-level analysis, not term-level.

3. **PMax extraction identified a high-value keyword.** "Premium kitchen knives" was performing well in PMax but had no dedicated Search coverage. Extracting it to Search gives bid control, ad copy alignment, and landing page specificity.

4. **Gray area terms require business context.** "Knife block" cannot be classified without knowing whether the business sells knife blocks. The framework correctly flagged this for practitioner input rather than making an assumption.

5. **24.4% of spend was wasted.** $320.80 of $1,313.00 went to clearly irrelevant terms. For a Developing account doing ~$1,300/month in search spend, this is a meaningful savings opportunity.
