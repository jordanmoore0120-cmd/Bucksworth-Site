# Negative Keyword Architecture

## Four-Level Negative Keyword Hierarchy

Google Ads supports negative keywords at four levels. Each level serves a distinct purpose. Placing negatives at the wrong level creates either gaps (missed irrelevant traffic) or conflicts (blocked relevant traffic).

### Level 1: Account-Level Negatives
- **Limit:** 1,000 negative keywords
- **Scope:** Applied to ALL campaigns in the account, including Search, Shopping, and PMax
- **Use for:** Universal negatives that are irrelevant to the entire business. No campaign in the account should ever show for these terms.
- **Examples:** "jobs," "careers," "salary," "internship," "free," "DIY" (for paid service businesses), terms in wrong languages, explicit/offensive terms
- **Caution:** Account-level negatives cannot be overridden at the campaign or ad group level. If you add a term here, no campaign can target it. Use sparingly and only for truly universal exclusions.

### Level 2: Shared Negative Keyword Lists
- **Limit:** 5,000 keywords per list, up to 20 lists per account
- **Scope:** Applied to all campaigns the list is attached to. Multiple lists can be attached to one campaign.
- **Use for:** Thematic negative groups shared across multiple (but not all) campaigns
- **Examples:**
  - "Competitor Names" list: applied to non-brand campaigns
  - "B2B Exclusions" list: applied to B2C campaigns
  - "Informational Intent" list: applied to bottom-of-funnel conversion campaigns
  - "Existing Customer Terms" list: applied to acquisition campaigns (login, support, account, dashboard)
- **Caution:** Adding a campaign to a shared list applies ALL keywords in that list. Review the full list before attaching to a new campaign.

### Level 3: Campaign-Level Negatives
- **Limit:** 10,000 negative keywords per campaign
- **Scope:** Applied only to the specific campaign
- **Use for:** Terms that are relevant to the business but not to this specific campaign's purpose
- **Examples:**
  - Brand terms as negatives in non-brand campaigns (to route brand traffic to brand campaigns)
  - Geographic terms as negatives in campaigns targeting a different region
  - Product A terms as negatives in a Product B campaign
- **This is the most common level for traffic sculpting between campaigns**

### Level 4: Ad Group-Level Negatives
- **Limit:** 10,000 negative keywords per ad group
- **Scope:** Applied only to the specific ad group within the campaign
- **Use for:** Sculpting traffic between ad groups to ensure each ad group's ads are the most relevant match
- **Examples:**
  - In a campaign with ad groups for "running shoes" and "trail running shoes," add "trail" as a negative in the "running shoes" ad group
  - In a campaign with ad groups for different service tiers, add tier-specific terms as negatives in the other tier's ad groups
- **Caution:** Ad group negatives can conflict with ad group positive keywords. Google will prevent the ad from showing for the exact negative, even if the positive keyword matches.

---

## Placement Decision Tree

Follow this sequence to determine where a negative keyword belongs:

1. **Is this term irrelevant for the ENTIRE account?**
   - Yes: Account-level negative. Confirm no campaign could ever benefit from this term.
   - No: Continue to step 2.

2. **Is this term irrelevant for a GROUP of campaigns that share a characteristic?**
   - Yes: Add to a shared negative keyword list. Create or use an existing thematic list.
   - No: Continue to step 3.

3. **Is this term relevant for some campaigns but not this one?**
   - Yes: Campaign-level negative. The term has a home elsewhere in the account.
   - No: Continue to step 4.

4. **Is this term relevant for some ad groups in this campaign but not this one?**
   - Yes: Ad group-level negative. This is traffic sculpting, not exclusion.
   - No: Re-evaluate. If the term is not irrelevant at any level, it may not be a negative keyword candidate.

---

## Match Type Selection for Negatives

### Negative Broad Match (Default)
- **Behavior:** Blocks any query containing ALL words in the negative, in any order. Additional words in the query do not prevent the block.
- **Does NOT include:** Close variants, synonyms, or related terms. Unlike positive broad match, negative broad is purely word-based.
- **Use for:** Concept-level blocking. When any combination of these words signals irrelevance.
- **Example:** Negative broad `pest control jobs` blocks "jobs in pest control," "pest control jobs hiring," and "pest jobs control" but does NOT block "pest control" (missing "jobs") or "pest control employment" (different word).

### Negative Phrase Match
- **Behavior:** Blocks queries containing the exact phrase in order. Can have additional words before or after.
- **Use for:** Specific multi-word phrases where the word order defines the irrelevant meaning.
- **Example:** Negative phrase `"how to become"` blocks "how to become a plumber" and "how to become certified" but does NOT block "become a plumber how to" or "how do I become."

### Negative Exact Match
- **Behavior:** Blocks only queries that match the negative keyword exactly.
- **Use for:** Surgical exclusions. When one specific query is irrelevant but closely related queries are fine.
- **Example:** Negative exact `[plumber salary]` blocks only "plumber salary" but does NOT block "average plumber salary" or "plumber salary range."

### Critical Differences from Positive Match Types
- Negative broad does NOT use intent matching, synonyms, or close variant expansion
- Negative phrase does NOT include implied words or reworded versions
- Negative exact is truly exact (with minimal close variant behavior)
- This means negatives are MORE literal and LESS expansive than their positive counterparts

---

## Conflict Detection

Adding negative keywords without checking for conflicts can silently kill performing traffic. Run these checks before any negative keyword addition.

### Pre-Addition Conflict Check
Before adding any negative keyword:

1. **Check against positive keywords at the same level and below.** A campaign negative can block an ad group positive keyword. An account negative can block any positive keyword in the account.
2. **Check across campaigns.** When adding to a shared list, verify the negative does not conflict with positive keywords in any attached campaign.
3. **Check close variants.** A negative for "run" will block "running" in some cases. Verify the intended scope.
4. **Check compound impact.** Two negative broad match keywords can combine to block queries that neither would block alone. For example, negative broad "red" and negative broad "shoes" would individually block "red widget" and "shoes store," but together they do NOT block "red shoes" (negative broad requires ALL words from a single negative, not across negatives).

### Cross-Level Conflict Resolution
When a conflict is detected:

- **Account negative vs. campaign positive:** Remove from account level, add at campaign level only where needed. Or change account negative to exact match to narrow its scope.
- **Shared list vs. campaign positive:** Remove campaign from the shared list, add the relevant negatives at campaign level individually (excluding the conflicting term).
- **Campaign negative vs. ad group positive:** Change campaign negative to exact match, or move it to ad group level in the specific ad groups where it should apply.

### Periodic Conflict Audit
Monthly, run a cross-reference of all negative keywords against all positive keywords to identify:
- Direct conflicts (same term appears as both positive and negative)
- Partial conflicts (negative broad match blocking positive phrase or exact match keywords)
- Newly created conflicts (from recent keyword additions)

---

## PMax Limitations

### What Does Not Work
- PMax campaigns do NOT support campaign-level or ad group-level negative keywords through the standard interface (as of 2026)
- You cannot add traditional negative keywords directly to a PMax campaign
- You cannot sculpt traffic between PMax asset groups using negative keywords

### What Does Work
- **Account-level negatives** apply to PMax campaigns
- **Shared negative keyword lists** can be applied to PMax campaigns (added in 2024)
- **Brand exclusion lists** are the primary mechanism for controlling brand traffic in PMax
- **Limited negative keyword support** has been rolling out for PMax, but availability varies by account and is restricted in scope

### PMax Negative Strategy
Given these limitations:
1. Use account-level negatives for universal exclusions (this is the most reliable PMax negative mechanism)
2. Create a dedicated shared negative list for PMax-specific exclusions
3. Use brand exclusion lists to prevent PMax from cannibalizing brand Search campaigns
4. For high-volume irrelevant terms in PMax, consider extracting the relevant terms to dedicated Search campaigns (where you have full negative keyword control) and letting PMax handle the remainder
5. Monitor PMax search term reports closely, because your ability to exclude is limited

---

## Monthly Audit Process

### Step 1: Staleness Review
Review all negative keyword lists for terms that should be removed:
- Terms added based on seasonal patterns that are no longer relevant
- Terms from discontinued product lines or retired campaigns
- Terms that may now be relevant due to business expansion (new services, new geographies)

### Step 2: Conflict Check
Cross-reference all negatives against recently added positive keywords:
- Any new campaigns launched since last audit?
- Any new ad groups or keywords added?
- Any shared lists attached to new campaigns?

### Step 3: Gap Identification
Review n-gram data for new negative candidates:
- Run the n-gram analysis for the past 30 days
- Identify zero-conversion n-grams meeting the volume thresholds
- Classify and place per the hierarchy and decision tree above

### Step 4: PMax Brand Exclusion Verification
- Verify brand exclusion lists are current (new brand terms, product names, misspellings)
- Check PMax search term reports for brand leakage
- Update account-level negatives if PMax is attracting systematic irrelevant traffic

### Step 5: Documentation
Maintain a changelog of negative keyword additions and removals:
- Date, term, match type, level, reason for addition/removal
- This audit trail is essential for diagnosing unexpected performance changes
