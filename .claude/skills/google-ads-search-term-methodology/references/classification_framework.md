# Classification Framework

## Full Four-Category Classification System

### URGENT_NEGATIVE

**Definition:** Search terms that are clearly irrelevant to the campaign's purpose and are actively consuming budget. These represent direct waste and require immediate intervention.

**Thresholds:**
- Spend exceeding 2x the campaign's target CPA with 0 conversions
- Clearly irrelevant regardless of spend level (e.g., job-seeking terms in a product campaign, competitor employee queries, terms in the wrong language)
- Any term with 10+ clicks and 0 conversions that fails all three cross-reference checks

**Examples:**
- "electrician jobs near me" appearing in a campaign for electrical repair services
- "free accounting software" appearing in a paid software campaign
- "how to DIY plumbing" appearing in a professional plumbing services campaign
- "widget manufacturer salary" appearing in a widget sales campaign

**Action:** Add as negative keyword immediately. Determine the correct match type and hierarchy level using the negative keyword architecture. Document the addition for audit trail.

---

### EXPAND

**Definition:** Search terms that are converting, relevant to the campaign theme, and currently matched through broad or phrase match. These deserve dedicated keywords for better bid control and quality score. The recommended match type depends on whether the term represents an individual high-performer or a converting pattern.

**Thresholds:**
- 3+ conversions within the evaluation window
- CPA at or below the campaign's target CPA
- Relevant to the campaign theme (passes all three cross-reference checks)
- Not already present as an exact or phrase match keyword in the account
- Sufficient volume to justify dedicated management (5+ clicks/week)

**Match Type Recommendation:**

| Signal | Recommended Match Type | Reasoning |
|--------|----------------------|-----------|
| Term is highly specific, long-tail, already close to an existing phrase match keyword | Exact match | Bid control on this specific high-performer without disrupting broader keyword coverage |
| Term represents a pattern (n-gram analysis shows the core phrase converts across multiple variations) | Phrase match | Capture the pattern, not just the single instance |
| Term is converting through broad match discovery (Lane 3) and proven at volume | Exact match in core campaign (Lane 2) | Graduate from discovery to core. Add as negative in the broad match campaign. |
| Term is a single converting instance with low volume (under 5 clicks/week) | Do not expand yet | Not enough signal. The broader keyword is handling it. Reclassify as COVERED_BY_PARENT. |

**N-gram connection:** Before recommending exact match for an individual term, check the n-gram analysis. If the term's core phrase (bigram or trigram) appears in 5+ converting search terms, recommend phrase match for the core phrase rather than exact match for each individual term.

**Action:** Add as exact match or phrase match keyword (per the match type recommendation) in the appropriate ad group. Evaluate whether the existing broader match keyword should be paused (if this term represents most of its volume) or kept (if other converting terms still flow through it). Consider whether a new ad group with more specific ad copy would improve performance.

---

### MONITOR_NEGATIVE

**Definition:** Search terms that are irrelevant to the campaign but have not yet accumulated significant spend. These are queued for batch processing rather than urgent action.

**Thresholds:**
- Less than $10 total spend in the evaluation window
- 0 conversions
- Clearly irrelevant (fails at least one cross-reference check with no ambiguity)
- Fewer than 10 clicks

**Examples:**
- "plumber apprenticeship programs" with $3 spend and 2 clicks in a plumbing services campaign
- "free trial CRM software" with $7 spend and 4 clicks in a paid CRM campaign
- "widget dimensions PDF" with $2 spend and 1 click in a widget purchasing campaign

**Action:** Add to a staging list for batch negative keyword addition during the next scheduled maintenance window. Group similar terms to identify patterns that suggest a broader negative (e.g., if multiple "apprenticeship" terms appear, add "apprenticeship" as a negative rather than each individual term).

---

### COVERED_BY_PARENT

**Definition:** Search terms that are relevant, may or may not be converting, and are already being appropriately handled by an existing keyword. These do not need to be added as separate keywords because the parent keyword is managing them effectively.

**Criteria:**
- The term is triggered by a phrase match or broad match keyword that is performing within target
- The parent keyword's overall relevance rate is healthy (70%+ of triggered terms are relevant)
- The parent keyword's CPA/ROAS is within target
- The term individually doesn't have enough volume to justify dedicated management (under 5 clicks/week)
- OR the term individually converts but adding it as exact match would not meaningfully improve bid control

**How to evaluate parent keyword health:**
For each phrase match keyword, calculate:
- Relevance rate: % of triggered search terms that are relevant (pass three-way cross-reference)
- Keyword-level CPA/ROAS: aggregate metrics across all triggered terms
- Volume distribution: is one term dominating the keyword's volume, or is it spread?

| Parent Keyword Health | Implication for Triggered Terms |
|-----------------------|-------------------------------|
| Healthy (70%+ relevance, CPA within target) | Triggered terms are COVERED_BY_PARENT. No action needed. |
| Leaking (under 70% relevance) | Parent keyword needs more negatives, not more expansions. Fix the keyword, not the terms. |
| Exhausted (declining volume, rising CPA) | Parent keyword may need restructuring. Evaluate whether high-performing triggered terms should be expanded to preserve their performance. |

**Action:** No action required. Tag the term as COVERED_BY_PARENT in the classification output. Do not re-flag in subsequent runs unless the parent keyword's health changes.

**Cross-run behavior:** Terms classified as COVERED_BY_PARENT should not be re-evaluated in subsequent runs unless:
- The parent keyword's health metrics change (relevance drops below 70%, CPA exceeds target)
- The term's individual volume increases above the expansion threshold (5+ clicks/week)
- The term starts converting at a rate that suggests it deserves dedicated management

---

### REVIEW_MANUALLY

**Definition:** Search terms that cannot be confidently classified by the framework alone. These have ambiguous signals, insufficient data, or strategic implications that require human judgment.

**Triggers:**
- Ambiguous intent (the term could be relevant or irrelevant depending on context)
- Partial relevance (passes some cross-reference checks but fails others)
- Insufficient data (fewer than 10 clicks, making statistical judgment unreliable)
- Conflicting signals (relevant term with very high CPA, or irrelevant term that somehow converts)
- Strategic implications (competitor terms, adjacent category terms, new market terms)
- High spend with conversions but questionable relevance

**Examples:**
- "best plumber reviews" in a plumbing services campaign (informational intent, but could convert)
- A competitor's brand name appearing with 3 conversions (strategic decision, not a data decision)
- "widget repair kit" in a new-widget sales campaign with 8 clicks and 1 conversion (adjacent relevance)
- A term with 4 clicks, 0 conversions (insufficient data to classify)

**Action:** Present to practitioner with full context. See `gray-area-decision-tree.md` for the diagnostic framework to apply before escalation.

---

## Three-Way Cross-Reference Rubric

### Check 1: Term vs. Keyword

**Question:** Does the search term align with the intent that the keyword was designed to capture?

**Pass criteria:**
- The term's core intent matches the keyword's core intent
- Any additional words in the term refine rather than redirect the intent
- Close variants preserve the original meaning

**Fail criteria:**
- The term adds words that fundamentally change the intent (e.g., "jobs," "salary," "DIY," "free")
- Close variants have shifted the meaning (e.g., "baby monitor" keyword matching "monitor baby temperature" where "monitor" is a verb, not a product)
- The term targets a different stage of the buyer journey than the keyword intended

**Common failure patterns:**
- Modifier words that flip intent: "how to," "can I," "should I" (informational, not transactional)
- Employment modifiers: "jobs," "careers," "salary," "hiring," "internship"
- Freeloader modifiers: "free," "open source," "DIY," "homemade"
- Academic modifiers: "definition," "meaning," "examples," "essay," "research paper"

### Check 2: Term vs. Campaign/Ad Group Theme

**Question:** Does the search term belong in this campaign's strategic territory, even if it technically matches the keyword?

**Pass criteria:**
- The term fits the campaign's target audience and use case
- The term aligns with the campaign's geographic targeting strategy
- The term matches the campaign's brand vs. non-brand intent

**Fail criteria:**
- The term targets a different customer segment (e.g., residential term in a commercial campaign)
- The term targets a different geographic intent (e.g., "plumber london" in a US-only campaign)
- Brand terms appearing in non-brand campaigns or vice versa
- The term relates to a product/service handled by a different campaign

**Common failure patterns:**
- Cross-campaign bleed: broad match pulling terms that belong in another campaign
- Audience mismatch: B2B terms in B2C campaigns
- Funnel stage mismatch: top-of-funnel research terms in bottom-of-funnel conversion campaigns

### Check 3: Term vs. Landing Page

**Question:** Would a user searching this term find what they need on the destination page?

**Pass criteria:**
- The landing page directly addresses the search term's query
- The user can take the desired conversion action without navigating away
- The page content matches the specificity of the search term

**Fail criteria:**
- The landing page covers a different product/service than what the term implies
- The page is too generic for a highly specific search term
- The page is too specific for a broad search term (e.g., a single-product page for a category search)
- Key information the searcher would expect is missing

**Important distinction:** A landing page failure does NOT automatically mean the term should be a negative. It may mean the landing page needs to change, or the term needs a different landing page destination. Only classify as a negative if the term itself is irrelevant, not just misrouted.

---

## Relevance Evaluation Criteria

### Intent Alignment
- **Transactional:** User wants to buy, hire, or take action (highest value for most campaigns)
- **Commercial investigation:** User is comparing options (high value, may need different landing page)
- **Informational:** User wants to learn (lower value, may still have a place in top-of-funnel campaigns)
- **Navigational:** User is looking for a specific website or brand (only relevant for brand campaigns)

Classify the search term's intent and compare it to the campaign's target intent. A mismatch is not automatically a negative. Informational terms in a conversion campaign might be candidates for a separate awareness campaign rather than negatives.

### Product/Service Fit
- Does the term describe something the advertiser actually sells or provides?
- Is the term specific enough to match a real offering, or is it too broad?
- Does the term imply a price point or quality tier that matches the advertiser's positioning?

### Geographic Relevance
- Does the term include location modifiers that match the campaign's targeting?
- Does the term imply a service area outside the advertiser's coverage?
- For national campaigns: does the term have local intent that would be better served by a local campaign?

### Modifier Analysis
Common modifiers and their typical classification implications:

| Modifier | Typical Signal | Default Classification |
|----------|---------------|----------------------|
| jobs, careers, salary, hiring | Employment intent | URGENT_NEGATIVE |
| free, open source, DIY | Non-paying intent | URGENT_NEGATIVE (for paid products) |
| review, comparison, best, top | Commercial investigation | REVIEW_MANUALLY |
| near me, in [city] | Local intent | Check geographic alignment |
| wholesale, bulk | B2B intent | Check campaign audience |
| used, refurbished, cheap | Budget intent | Check brand positioning |
| how to, what is, tutorial | Informational intent | REVIEW_MANUALLY |
| login, support, contact | Existing customer | MONITOR_NEGATIVE (for acquisition campaigns) |

### Brand vs. Non-Brand Classification
- Brand terms: contain the advertiser's brand name, product names, or common misspellings
- Competitor terms: contain a competitor's brand name (strategic decision, always REVIEW_MANUALLY)
- Non-brand terms: generic category, product, or service terms
- Semi-brand terms: contain brand-adjacent terms (e.g., a well-known product feature name). These require human judgment.

---

## Edge Cases

### Long-Tail Variants That Are Technically Relevant but Too Niche
A search term like "best running shoes for flat feet with bunions size 14 wide" is technically relevant to a running shoe campaign, but so specific that it may never reach meaningful volume. Classification: REVIEW_MANUALLY. The question is whether to ignore it (low volume, not worth managing) or use it to inform landing page content.

### Competitor Brand Terms in Non-Brand Campaigns
When a competitor's name appears in a non-brand campaign through broad match, this is always REVIEW_MANUALLY. The decision to add as a negative or pursue as a conquesting opportunity is strategic, not data-driven. Factors: competitive position, CPA tolerance for competitor traffic, brand policy.

### Close Variants That Change Meaning
Google's close variant matching can produce semantically different terms. Examples:
- "pest control" (service) vs. "pest control jobs" (employment)
- "baby monitor" (product) vs. "monitor baby" (action/advice)
- "moving company" (service) vs. "company moving" (corporate relocation news)

These require individual evaluation. Do not assume close variants preserve intent.

### Seasonal or Event-Driven Terms
Terms that appear irrelevant in the current context may be highly relevant in a different season or during specific events. Before classifying as a negative, check: is this term time-sensitive? Would it be relevant in Q4, during a promotion, or around a specific event? If yes, consider using scheduled negative keywords or seasonal campaign structures rather than permanent negatives.

### Terms That Convert Despite Appearing Irrelevant
Occasionally, a term that fails the three-way cross-reference still generates conversions. Do not blindly add it as a negative. Investigate: is the conversion legitimate (check conversion action, not just count)? Is the user journey making sense? Could the landing page be serving a need you did not anticipate? If the conversions are real and valuable, the term is relevant. Update the three-way cross-reference understanding rather than discarding the data.
