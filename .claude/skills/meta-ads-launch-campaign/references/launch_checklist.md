# Pre-Launch Checklist

This checklist runs before any campaign creation. Each item is evaluated as PASS, WARN, or FAIL. FAIL items block launch unless explicitly overridden by the user. WARN items proceed but are logged in the launch report.

---

## Section 1: Measurement Integrity

**1.1 Pixel is firing on destination URL**
- Check: `meta_ads_list_ad_accounts` to confirm pixel is active on account
- Check: Recent pixel events in Events Manager (last 24-48 hours)
- PASS if: Pixel has fired on destination URL in last 48 hours
- WARN if: Pixel fired > 48 hours ago (may be stale or page changed)
- FAIL if: No pixel events detected on destination URL, or pixel not installed

**1.2 Custom conversion is active (if applicable)**
- Check: Confirm the target conversion event is receiving signal
- PASS if: Custom conversion has fired in last 7 days
- WARN if: Custom conversion fired 7-30 days ago
- FAIL if: Custom conversion event has never fired, or is inactive

**1.3 Attribution window matches account config**
- Check: Confirm ad set attribution window (7-day click, 1-day view standard)
- PASS if: Attribution window matches account-conventions setting
- WARN if: Not specified -- will use Meta default

**1.4 CAPI status**
- Check: Is Conversions API configured? (from `audit_measurement` findings or account-conventions)
- PASS if: CAPI is active and deduplication is configured
- WARN if: Pixel-only (no CAPI) -- note potential under-reporting, especially iOS
- Note: CAPI setup cannot be done via MCP (requires server-side implementation)

---

## Section 2: Audience Validation

**2.1 Cold audience size**
- Check: Estimated reach from targeting spec
- PASS if: Estimated reach > 1,000,000 for cold/prospecting campaigns
- WARN if: 500,000 - 1,000,000 (expect higher CPM, limited learning)
- FAIL if: < 500,000 (audience too small for meaningful testing; learning phase will struggle)
- Exception: Retargeting campaigns may legitimately have smaller audiences

**2.2 Retargeting audience has minimum size**
- Check: Custom audience size (if used)
- PASS if: Retargeting audience > 10,000
- WARN if: 1,000 - 10,000 (limited delivery, budget will not pace)
- FAIL if: < 1,000 (audience too small for ad delivery)

**2.3 Exclusions are set**
- Check: Confirm exclusion audiences are configured in targeting spec
- PASS if: Existing customers + recent converters excluded
- WARN if: No exclusions set for a cold prospecting campaign (risk of wasting budget on existing customers)
- FAIL if: Not applicable -- no exclusions needed (e.g., pure retargeting campaign)

**2.4 No audience overlap with existing active campaigns**
- Check: Are there existing active campaigns targeting the same audience?
- PASS if: No significant overlap
- WARN if: Overlapping audience detected -- note internal auction competition risk
- Note: `meta_ads_get_audience_overlap` can check this if custom audiences are involved

---

## Section 3: Budget and Bid Validation

**3.1 Daily budget above minimum threshold**
- Check: Budget per ad set (ABO) or campaign (CBO)
- PASS if: Daily budget >= 3x target CPA
- WARN if: Daily budget 1.5x-3x target CPA (may not exit learning phase efficiently)
- FAIL if: Daily budget < 1.5x target CPA (learning phase will stall; insufficient signal)

**3.2 Bid cap is reasonable (if cost cap / bid cap strategy)**
- Check: Bid cap vs. historical account CPA
- PASS if: Bid cap >= 1.5x historical average CPA
- WARN if: Bid cap 1.0x-1.5x historical CPA (may underdeliver)
- FAIL if: Bid cap < 1.0x historical CPA (will almost certainly underdeliver)
- Note: If no historical CPA data, use estimated CPA from account-conventions KPI config

**3.3 Budget type matches campaign type**
- Check: Day parting requires lifetime budget
- PASS if: Day parting off OR lifetime budget is set
- FAIL if: Day parting requested with daily budget (incompatible -- Meta will reject)

**3.4 CBO consistency**
- Check: If CBO is on at campaign level, no ad set-level budgets are set
- PASS if: CBO on + no ad set budgets set
- FAIL if: CBO on + ad set budgets also set (invalid configuration)

---

## Section 4: Creative Validation

**4.1 Asset specs compliance**
- Check: Image/video dimensions and file size
- Standard specs:
  - Feed image: 1080x1080 (1:1) or 1200x628 (1.91:1), max 30MB
  - Feed video: 1:1 or 4:5, max 4GB, 15-240s
  - Reels video: 9:16 (1080x1920), max 4GB, 3-90s
  - Stories image/video: 9:16 (1080x1920)
- PASS if: All assets meet spec
- WARN if: Asset spec is acceptable but not optimal (e.g., 16:9 video for Reels placement)
- FAIL if: Asset is outside Meta's accepted dimensions or file size

**4.2 Text overlay compliance**
- Check: Images should not have text covering more than 20% of the image
- PASS if: Text overlay is minimal or absent
- WARN if: Significant text overlay present (may limit reach)
- Note: Meta removed the 20% rule officially but heavy text still correlates with lower reach

**4.3 Creative count for campaign type**
- Check: Number of ads vs. campaign type requirements
- PASS if: Creative Testing has 3-20 ads total; Winners has 3-10 ads; other types have minimum 2
- WARN if: Only 1-2 ads (limited optimization signal)
- FAIL if: 0 ads (cannot launch without a creative)

**4.4 Dynamic creative consistency**
- Check: If `is_dynamic_creative: true`, assets are in correct DCO format (separate headline/image/text fields)
- PASS if: DCO format confirmed, or DCO is off
- WARN if: Unsure -- note DCO cannot be toggled after ad set creation
- Note: Dynamic creative cannot be changed after the ad set is created

---

## Section 5: Naming and Structure

**5.1 Naming convention applied**
- Check: Campaign/ad set/ad names match convention from account-conventions
- PASS if: Names follow the convention
- WARN if: No naming convention configured in account-conventions (flag for setup)
- Note: Inconsistent naming makes reporting harder but does not block delivery

**5.2 Campaign objective matches use case**
- Check: Objective is appropriate for the campaign goal
- PASS if: Objective matches (e.g., OUTCOME_SALES for purchase campaigns, OUTCOME_LEADS for lead gen)
- FAIL if: Objective mismatch (e.g., OUTCOME_AWARENESS for a conversion campaign)

**5.3 Special Ad Category declared correctly**
- Check: Is the campaign for housing, credit, employment, or political ads?
- PASS if: Special ad category set correctly (or NONE if not applicable)
- FAIL if: Campaign is for a regulated category (housing, credit, employment, political/social issues) but special ad category is not declared -- Meta will reject

---

## Section 6: Tracking

**6.1 UTM parameters / tracking template set**
- Check: Destination URL includes UTM parameters or tracking template
- PASS if: UTMs are present and correctly formatted
- WARN if: No UTMs -- conversion will not be attributable in GA4 or other analytics tools
- Note: `url_tags` field on the creative spec applies UTMs to all destination URLs

**6.2 Destination URL is live and loads correctly**
- Check: Manually verify the destination URL returns 200 OK and loads the correct page
- PASS if: URL loads correctly
- WARN if: Unable to verify automatically -- user should manually check
- FAIL if: URL is known to redirect incorrectly, return 404, or is behind a login wall

---

## Checklist Summary Format

Present results as:

```
Pre-Launch Checklist Results
=============================
Section 1 (Measurement): [X PASS, Y WARN, Z FAIL]
Section 2 (Audience):    [X PASS, Y WARN, Z FAIL]
Section 3 (Budget/Bid):  [X PASS, Y WARN, Z FAIL]
Section 4 (Creative):    [X PASS, Y WARN, Z FAIL]
Section 5 (Structure):   [X PASS, Y WARN, Z FAIL]
Section 6 (Tracking):    [X PASS, Y WARN, Z FAIL]

Overall: [PASS / PASS WITH WARNINGS / BLOCKED]

WARN items:
- [2.1] Cold audience on the smaller side (800K) -- expect slightly higher CPM
- [4.2] Text overlay present on hero image -- monitor reach delivery

FAIL items:
- [3.2] Bid cap ($30) is below 1x historical CPA ($45) -- launch will underdeliver

To proceed with a FAIL: type "I acknowledge [item number] and want to proceed anyway"
```
