# Landing Page Alignment Scoring Methodology

## Three-Dimension Scoring

### Dimension 1: Page Content vs. Keywords

**What to evaluate:**
For each keyword associated with the page, check whether the keyword's core concept appears in:
1. Page title tag
2. H1 heading
3. H2/H3 subheadings
4. First 200 words of body content
5. CTA text
6. Meta description

**Scoring:**
- **HIGH:** Core keyword concept appears in H1 or page title AND in body content. The page clearly addresses the keyword's intent.
- **MEDIUM:** Core concept appears in body content but not in headings or title. The page addresses the intent but doesn't lead with it.
- **LOW:** Core concept is absent or only tangentially mentioned. The page does not clearly address the keyword's intent.

**Aggregation:** If a page has 10 keywords, score each keyword's alignment individually, then report the distribution (e.g., "7 HIGH, 2 MEDIUM, 1 LOW"). The overall dimension score is the mode (most common rating), with LOW taking precedence if it affects keywords representing >20% of the page's traffic.

### Dimension 2: Page Content vs. Search Terms

**What to evaluate:**
For the top 10 search terms (by click volume) driving traffic to this page:
1. Does the page answer the question the search term implies?
2. Does the page contain the specific language/terminology used in the search term?
3. Are there search term themes clustered together that the page doesn't address?

**Scoring:**
- **HIGH:** 8+ of top 10 terms find their intent clearly addressed on the page.
- **MEDIUM:** 5-7 of top 10 terms are addressed.
- **LOW:** Fewer than 5 of top 10 terms are addressed. The page is mismatched with actual traffic.

**Content gap identification:** Any search term theme (identified via n-gram analysis of search terms hitting this page) that appears in 3+ terms but is NOT represented on the page is flagged as a content gap.

### Dimension 3: Page Content vs. Ad Copy

**What to evaluate:**
For each ad (RSA headlines and descriptions) pointing to this page:
1. Do the ad's promises match what the page delivers?
2. Does the page's CTA align with the ad's CTA?
3. Is the value proposition in the ad reflected on the page?

**Scoring:**
- **HIGH:** Ad promises and page content are tightly aligned. User expectation from ad is met on the page.
- **MEDIUM:** General alignment but some ad claims or CTAs are not reflected on the page.
- **LOW:** Significant disconnect between ad messaging and page content. User clicking the ad would not find what was promised.

## Overall Alignment Score

| Keywords | Search Terms | Ad Copy | Overall |
|----------|-------------|---------|---------|
| HIGH | HIGH | HIGH | **STRONG** |
| Any HIGH, rest MEDIUM | Any HIGH, rest MEDIUM | Any HIGH, rest MEDIUM | **GOOD** |
| Any LOW | Any | Any | **NEEDS ATTENTION** |
| Any | Any LOW | Any | **NEEDS ATTENTION** |
| Any | Any | Any LOW | **NEEDS ATTENTION** |
| LOW | LOW | Any | **CRITICAL** |

## Quality Score Cross-Reference

After scoring alignment, cross-reference with Google Ads Quality Score `landing_page_experience` field:

| Alignment Score | QS Landing Page | Interpretation |
|----------------|-----------------|----------------|
| STRONG/GOOD | ABOVE_AVERAGE | Validated. Page is performing well on all measures. |
| STRONG/GOOD | AVERAGE | Content is good but technical factors may be limiting QS. Check page speed, mobile experience. |
| STRONG/GOOD | BELOW_AVERAGE | Technical issue likely. Content alignment is strong, so the QS problem is speed, mobile, security, or interstitials. |
| NEEDS ATTENTION | AVERAGE | Content improvement opportunity. Better alignment could lift QS. |
| NEEDS ATTENTION | BELOW_AVERAGE | Content is the likely driver of low QS. Prioritize content alignment fixes. |
| CRITICAL | BELOW_AVERAGE | Urgent. Page is mismatched with its traffic AND Google is penalizing it. Immediate rewrite or page reassignment needed. |
