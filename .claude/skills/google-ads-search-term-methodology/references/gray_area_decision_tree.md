# Gray Area Decision Tree

## The "Diagnose Before You Pause" Framework

When a search term does not clearly fall into URGENT_NEGATIVE, EXPAND, or MONITOR_NEGATIVE, the instinct is often to add it as a negative "just to be safe." This is wrong. Premature negatives block potential revenue. The correct approach is to diagnose the underlying issue before making a permanent decision.

This framework applies to any term classified as REVIEW_MANUALLY. Run the full four-step diagnostic before reclassifying.

---

## Four-Step Diagnostic

### Step 1: Keyword Diagnostic

**Question:** Is the matched keyword appropriate for this search term?

**What to check:**
- Did the term match via broad, phrase, or exact match?
- If broad match: is the keyword too broad for the campaign's intent? The problem may be the keyword, not the search term.
- If phrase match: did Google's meaning-based matching stretch too far? The term might be relevant, but the keyword needs tightening.
- Is there a better keyword in the account that should have matched this term instead?

**Possible outcomes:**
- The keyword is appropriate, and the term legitimately triggered it. Continue to Step 2.
- The keyword is too broad. Resolution: tighten the keyword's match type, add more specific keywords, or restructure the ad group. The search term itself may be fine.
- The term should have matched a keyword in a different campaign. Resolution: add the term as a negative here and ensure the correct campaign captures it.

### Step 2: Ad Diagnostic

**Question:** Is the ad shown relevant to this search term?

**What to check:**
- Did the RSA select headlines and descriptions that align with the search term's intent?
- Is the ad group's theme narrow enough that any ad combination would be relevant?
- Is there an ad copy gap: the term is relevant, but no ad asset addresses it specifically?

**Possible outcomes:**
- The ad copy is well-aligned. Continue to Step 3.
- The ad copy is misaligned. Resolution: add new RSA assets that address this term's intent. Consider creating a new ad group with tailored copy if the term represents a distinct theme.
- RSA asset selection is the issue. Resolution: pin critical headlines for terms where Google's selection is consistently off.

### Step 3: Landing Page Diagnostic

**Question:** Is the landing page aligned with this search term's intent?

**What to check:**
- **If the landing page analysis skill is available:** Pull content-keyword alignment score and Quality Score landing page experience rating for this page. Use data instead of inference.
- **If landing page data is not available:** Infer alignment based on the ad group's final URL and the search term's intent. Flag as "landing page alignment inferred, not measured" in the output.
- Does the landing page address what the user was looking for?
- Is the conversion action on the page appropriate for this term's funnel stage? (A "buy now" page for an informational query will not convert, but the term is not necessarily irrelevant.)
- Would a different page convert this traffic?

**Possible outcomes:**
- The landing page is well-aligned. Continue to Step 4.
- The landing page is misaligned. Resolution: change the landing page for this keyword/ad group, or create a new landing page for this search theme. Do NOT add the term as a negative if it is relevant but landing on the wrong page.
- The funnel stage is misaligned. Resolution: the term may need a different campaign with a different conversion goal (e.g., lead capture instead of direct sale).

### Step 4: Attribution Diagnostic

**Question:** Is this term contributing to conversions that are attributed elsewhere?

**What to check:**
- **Data source tier gate:** Assisted conversion path data requires Tier 1 (MCP/API) access. For Tier 2 (CSV) users, assisted conversion data may be available if the user exported attribution reports. For Tier 3 (manual) users, this data is typically unavailable.
- **If attribution data is unavailable:** Note this as a data gap in the diagnostic output: "Attribution diagnostic: INCONCLUSIVE (data not available at current data source tier). Cannot rule out assisted conversion contribution." Do NOT treat missing data as evidence of no contribution.
- Does the term appear in assisted conversion paths?
- Is the term a first-touch or mid-funnel interaction that leads to conversions attributed to other channels (direct, email, brand search)?
- What is the average conversion lag for this campaign? If the lag is 7+ days, recent terms may not yet show conversions.

**Possible outcomes:**
- The term has assisted conversions. It is contributing value even if direct conversions are 0. Do NOT add as a negative. Consider adjusting attribution model if this pattern is common.
- The term appears in multi-touch paths. Evaluate its role in the journey before classifying.
- No attribution data available or term does not appear in paths. This is inconclusive, not a negative signal. Proceed to classification with the information available.

---

## Insufficient Data Handling

Low-data terms are the most common REVIEW_MANUALLY classification. The following rules prevent premature permanent decisions.

### Fewer Than 5 Clicks, 0 Conversions
- **Classification:** REVIEW_MANUALLY
- **Action:** Do nothing. Tag the term for revisit in 2 weeks.
- **Rationale:** 5 clicks is not enough data to determine anything. The term has not had a fair chance to convert.
- **Exception:** If the term is obviously irrelevant (fails all three cross-reference checks with high confidence), classify as MONITOR_NEGATIVE regardless of click count.

### 5 to 10 Clicks, 0 Conversions
- **Classification:** Run the four-step diagnostic above.
- **If all diagnostics pass** (keyword appropriate, ad relevant, landing page aligned, no attribution data suggesting contribution): classify as MONITOR_NEGATIVE. The term had a reasonable chance and did not convert, and there are no fixable issues.
- **If any diagnostic fails:** Fix the diagnostic issue first (keyword, ad, landing page). Then reset the evaluation clock and revisit in 2 weeks after the fix.

### 10 to 20 Clicks, 0 Conversions
- **Classification:** This is now approaching actionable data.
- **If diagnostics all pass and the term is irrelevant:** Classify as URGENT_NEGATIVE (especially if spend exceeds target CPA).
- **If diagnostics all pass and the term is relevant:** This is a conversion problem, not a relevance problem. Investigate landing page conversion rate, offer relevance, and competitive positioning for this term.
- **If any diagnostic fails:** Fix the issue. This term has enough volume that fixing the diagnostic issue could produce meaningful conversions.

### 20+ Clicks, 0 Conversions
- At this point, the standard classification framework (not the gray area tree) should be able to classify the term. If it still cannot, the term has a genuine ambiguity that requires human judgment.

---

## Seasonality Check

Before classifying any term as a negative, verify it is not seasonal traffic that will become relevant in a different time period.

### When to Suspect Seasonality
- The term contains seasonal language: holiday names, season names, event names, "back to school," "summer," "gift," "valentines"
- The term appeared suddenly after a period of absence (may correlate with a seasonal trigger)
- The term's performance was strong in a prior year but weak now (comparing same periods)

### How to Check
1. **Prior year data:** If the account has 12+ months of history, check whether this term appeared and converted in the same period last year. Also check the opposite season (a term appearing in January for Valentine's Day gifts is pre-season, not irrelevant).
2. **Google Trends:** Check the term's search volume pattern over the past 2-3 years. Clear seasonal spikes indicate the term has cyclical relevance.
3. **Industry calendar:** Cross-reference with known industry events, promotional periods, or regulatory deadlines.

### If Seasonal
- Do NOT add as a permanent negative
- Options: (1) Use scheduled negative keywords if the platform supports it, (2) add a reminder to remove the negative before the next relevant season, (3) manage through campaign scheduling rather than negatives

---

## Assisted Conversions Check

### Why This Matters
Last-click attribution undervalues terms that introduce users to the brand or product. A term with 0 direct conversions may have 10+ assisted conversions, meaning it plays a critical role in the conversion path.

### How to Check
1. Pull conversion path reports that include search term data (where available)
2. Check if the term appears as a first interaction, mid-path interaction, or assist
3. Calculate the term's assisted conversion value if possible

### Interpretation
- **0 direct, 5+ assists:** This term is an introducer. It brings users into the funnel who later convert through other touchpoints. Not a negative candidate. Consider maintaining or even expanding coverage.
- **0 direct, 1-4 assists:** Promising but inconclusive. Tag for continued monitoring with attribution focus.
- **0 direct, 0 assists:** No evidence of contribution. Proceed with standard classification based on the four-step diagnostic.

### Assisted Conversion Caveats
- Not all accounts have sufficient path data for term-level analysis
- Long conversion windows (30+ days) mean recent terms may not yet show assists
- Cross-device paths may not be fully tracked
- If assisted data is unavailable, note this as a data gap, not as evidence of no contribution

---

## Cross-Run Classification Memory

### Purpose
Terms classified as REVIEW_MANUALLY that the practitioner has reviewed and decided to leave as-is should not trigger the full diagnostic again in subsequent runs unless conditions change.

### How it works
After the practitioner reviews a REVIEW_MANUALLY term and makes a decision (keep, negate, expand, or monitor), record:
- The term
- The decision made
- The date
- Key metrics at the time of decision (clicks, cost, conversions)

### When to re-evaluate
A previously reviewed term should be re-flagged for review ONLY if:
- Spend has doubled since the last review
- Conversion count has changed (was 0, now has conversions, or vice versa)
- The parent keyword's health has changed significantly
- 90 days have passed since the last review (periodic recheck)

### When NOT to re-evaluate
- The term appears in the next run's search term report with similar metrics
- The term's parent keyword is unchanged
- No new information is available

This prevents the toolkit from presenting the same ambiguous terms every week, wasting the practitioner's review time on decisions that have already been made.

---

## Escalation Criteria

Some terms should always be escalated to human review, regardless of what the diagnostic framework suggests. The framework is designed for clear or moderately ambiguous cases. These categories require strategic judgment.

### Always Escalate

**High-spend gray area (over $50 in ambiguous territory):**
- Present the term with full diagnostic data
- Include: the term, matched keyword, campaign/ad group, all metrics, all four diagnostic results
- The financial exposure justifies human attention regardless of classification confidence

**Competitor brand terms:**
- Whether to bid on, block, or ignore competitor terms is a business strategy decision
- Never automatically add competitor terms as negatives without explicit direction
- Never automatically expand into competitor terms without explicit direction

**Adjacent category terms:**
- Terms for products/services the business does not currently offer but could
- Example: a plumbing company getting "drain cleaning" queries when they only do pipe repair
- This is a business development question, not a search term optimization question

**New market or product terms:**
- Terms that suggest a market opportunity or product demand the business has not addressed
- These should be surfaced as strategic intelligence, not filtered as irrelevant

**Terms with legal or compliance implications:**
- Claims-related terms (e.g., "FDA approved" for non-FDA-approved products)
- Regulated industry terms that may require specific landing page disclosures
- Competitor comparison terms that may trigger trademark concerns

---

## Decision Output Format

For every REVIEW_MANUALLY term that has been through the diagnostic process, present the following to the practitioner:

```
TERM: [the search term]
MATCHED KEYWORD: [the keyword that triggered it]
MATCH TYPE: [broad/phrase/exact]
CAMPAIGN / AD GROUP: [full path]

METRICS:
  Impressions: [X]
  Clicks: [X]
  Cost: [$X]
  Conversions: [X]
  Conversion Value: [$X]
  CPA: [$X or N/A]

DIAGNOSTICS:
  1. Keyword: [PASS/FAIL] - [brief explanation]
  2. Ad Copy: [PASS/FAIL] - [brief explanation]
  3. Landing Page: [PASS/FAIL] - [brief explanation]
  4. Attribution: [PASS/INCONCLUSIVE/FAIL] - [brief explanation]

SEASONALITY: [Not seasonal / Possibly seasonal - details]
ASSISTED CONVERSIONS: [X assists / No data available]

RECOMMENDED CLASSIFICATION: [category]
CONFIDENCE: [HIGH / MEDIUM / LOW]
REASONING: [1-2 sentence explanation]
```

### Grouping for Practitioner Review
Present terms grouped by confidence level:

1. **LOW confidence** (review first, these need the most judgment): strategic terms, high-spend ambiguous terms, terms with conflicting diagnostic results
2. **MEDIUM confidence** (quick validation needed): terms where diagnostics mostly align but one check is borderline or data is thin
3. **HIGH confidence** (batch approval): terms where the framework is fairly certain but the classification fell into REVIEW_MANUALLY due to a technical trigger (e.g., just under the click threshold for automatic classification)

This grouping ensures the practitioner spends review time where it matters most, rather than reviewing every term with equal attention.
