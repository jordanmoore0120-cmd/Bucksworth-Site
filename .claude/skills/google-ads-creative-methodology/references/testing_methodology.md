# Creative Testing Methodology

A/B testing and experimentation framework for Google Ads creative.

---

## Campaign Experiments

Google Ads provides a built-in experiment framework for controlled split testing.

### How Experiments Work
1. Create an experiment based on an existing campaign
2. Define the variable to test (ad copy, landing page, bidding, etc.)
3. Set traffic split (50/50 recommended for fastest results)
4. Google randomly assigns users to control or experiment
5. Run for minimum 14 days
6. Evaluate results at 95%+ statistical confidence

### Experiment Configuration
- **Traffic split:** 50/50 is standard. Use 70/30 (control/experiment) only if you need to limit risk on the experiment variant.
- **Duration:** Minimum 14 days. This captures two full weeks of day-of-week variation (weekday vs. weekend behavior).
- **Budget:** Both arms share the campaign budget proportionally. No additional budget required.
- **End condition:** End when statistical significance reaches 95%+ AND minimum duration is met.

### Experiment Limitations
- Only available for Search and Display campaign types (not PMax, Shopping, or Video)
- One experiment per campaign at a time
- Cannot test across campaign types

---

## What to Test by Campaign Type

### Search / RSA
| Test Variable | Method | Success Metric |
|--------------|--------|---------------|
| Headlines | Experiment (two RSA variants) | CTR, conversion rate |
| Descriptions | Experiment (two RSA variants) | CTR, conversion rate |
| Landing pages | Experiment (different final URL) | Conversion rate, bounce rate |
| Ad extensions | Experiment or before/after | CTR |
| Pin strategy | Experiment (pinned vs. unpinned) | CTR, conversion rate |

### PMax
PMax does not support formal experiments. Testing approach:
| Test Variable | Method | Success Metric |
|--------------|--------|---------------|
| Asset group themes | Run parallel asset groups | Conversions, ROAS per group |
| Audience signals | Add/remove signals, compare periods | Conversion rate, CPA |
| Final URLs | Test different URLs per asset group | Conversion rate |
| Asset variations | Add new assets, compare to existing | Asset performance labels |

### Shopping
| Test Variable | Method | Success Metric |
|--------------|--------|---------------|
| Product titles | Feed update, before/after comparison | CTR, impression share |
| Product images | Feed update, before/after comparison | CTR |
| Custom labels | Segment products differently, compare performance | ROAS by segment |

### Display
| Test Variable | Method | Success Metric |
|--------------|--------|---------------|
| Images | Experiment (different image sets) | CTR, conversion rate |
| Headlines | Experiment (different headline sets) | CTR |
| CTA buttons | Experiment | CTR, conversion rate |
| Landing pages | Experiment | Conversion rate |

### YouTube / Video
| Test Variable | Method | Success Metric |
|--------------|--------|---------------|
| Hook (first 5 seconds) | Parallel ad groups with different videos | View rate, view-through rate |
| Video length | Parallel ad groups | View rate, cost per view, conversion rate |
| CTA placement | Parallel ad groups | Click-through rate |
| Thumbnail (in-feed) | Parallel ad groups | View rate |

### Demand Gen
| Test Variable | Method | Success Metric |
|--------------|--------|---------------|
| Creative format | Image vs. video vs. carousel | CTR, conversion rate |
| Audience segments | Parallel ad groups | CPA, conversion rate |
| Headlines | A/B within the campaign | CTR |

---

## Sample Size Requirements

### Minimum Sample Sizes
| Test Type | Minimum per Variant | Rationale |
|-----------|-------------------|-----------|
| CTR test | 100 clicks | Enough to detect 20%+ CTR differences |
| Conversion rate test | 30 conversions | Enough to detect meaningful CVR differences |
| ROAS test | 50 conversions | Revenue variance requires larger samples |

### Small Account Considerations
If an account cannot generate sufficient sample size within 14 days:
- Extend test duration (30-60 days) rather than reducing sample requirements
- Test at the campaign level rather than ad group level (larger traffic pool)
- Focus on fewer, higher-impact tests rather than many small ones
- Accept that some tests will be inconclusive, which is still informative

### Calculator Guidance
For precise sample size calculation, use the inputs:
- Baseline conversion rate
- Minimum detectable effect (how large a difference matters)
- Statistical power (80% standard)
- Significance level (95% standard)

---

## Statistical Significance

### The 95% Standard
A result is statistically significant at 95% confidence when there is only a 5% chance the observed difference is due to random variation. This is the standard threshold for making decisions.

### Rules for Statistical Rigor
1. **Do not end tests early.** Even if one variant looks dramatically better after 3 days, early results are unreliable. Random variation is largest in small samples.
2. **Run for the full 14-day minimum.** This captures day-of-week variation. A variant that looks better on weekdays might underperform on weekends.
3. **Do not peek and decide.** Checking results daily and stopping when you see a winner inflates false positive rates. Set a check date and stick to it.
4. **Report confidence level with results.** "Variant B won with 97% confidence" is actionable. "Variant B had higher CTR" is not.

### When Results Are Inconclusive
If the test reaches the planned duration without achieving 95% confidence:
- The difference between variants is likely too small to matter
- Implement either variant (neither is significantly better)
- Move on to testing a different variable where the potential impact is larger

---

## Sequential vs. Concurrent Testing

### Sequential Testing (Recommended for Most Accounts)
1. Test variable A (e.g., headlines)
2. Implement the winner
3. Test variable B (e.g., landing pages)
4. Implement the winner

This approach isolates each variable cleanly. You know exactly what caused any performance change.

### Concurrent Testing (High-Volume Accounts Only)
Run multiple tests simultaneously on different campaigns. Requirements:
- 1,000+ clicks per day per campaign being tested
- Tests on completely separate campaigns (no audience overlap)
- Different variables per campaign (never test the same thing in two places)

### Multivariate Testing
Testing multiple variables simultaneously within one ad (e.g., headline AND image). Requires very high volume (10,000+ impressions per combination). Not practical for most Google Ads accounts. Sequential A/B testing is more reliable for typical volumes.

---

## Test Documentation

### What to Record for Every Test
| Field | Purpose |
|-------|---------|
| Test name | Identifier for reference |
| Hypothesis | "We believe [change] will improve [metric] because [reason]" |
| Variable tested | Exactly what was different between variants |
| Start date | When the test launched |
| End date | When the test concluded |
| Sample size | Clicks and conversions per variant |
| Results | Metric values for control and experiment |
| Confidence level | Statistical significance achieved |
| Decision | What action was taken based on results |
| Learnings | What was learned, even from inconclusive tests |

### Test Log Benefits
- Prevents re-testing the same variable
- Builds institutional knowledge about what works
- Tracks cumulative impact of winning tests over time
- Identifies patterns across tests (e.g., benefit-led headlines consistently win)

---

## Common Testing Mistakes

1. **Ending tests too early:** Most common mistake. False positives from small samples lead to wrong decisions.
2. **Testing too many variables at once:** Cannot isolate which variable caused the result. Stick to one variable per test.
3. **Not testing at all:** Relying on Google's Ad Strength ratings or asset performance labels instead of running controlled experiments. Labels measure relative performance within the existing set, not whether better creative exists.
4. **Testing on too-small audiences:** Results from 20 clicks are noise. Wait for sufficient sample size or don't test.
5. **Ignoring inconclusive results:** "No significant difference" is a valid finding. It means both variants perform similarly, so choose based on other criteria (brand alignment, messaging preference).
6. **Testing trivial differences:** Changing one word in a headline is unlikely to produce a detectable difference. Test meaningfully different approaches.
