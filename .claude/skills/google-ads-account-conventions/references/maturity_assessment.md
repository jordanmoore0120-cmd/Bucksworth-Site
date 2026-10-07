# Account Maturity Assessment

Use this questionnaire during account setup (Phase 3 of the setup wizard) to classify each account's maturity level. The maturity level controls how every action skill calibrates its analysis depth and recommendations.

---

## Assessment Questions

### Q1: Monthly Conversion Volume

"Approximately how many conversions does this account generate per month?"

| Answer | Points |
|--------|--------|
| <15 conversions/month | 1 |
| 15-50 conversions/month | 2 |
| 50-100 conversions/month | 3 |
| 100+ conversions/month | 4 |

**Important:** Count only PRIMARY conversions (purchases, leads, bookings), not micro-conversions (page views, add-to-carts) unless those are the stated primary KPI.

### Q2: Account Age and History

"How long has this account been actively managed with its current structure?"

| Answer | Points |
|--------|--------|
| <3 months | 1 |
| 3-12 months | 2 |
| 1-2 years | 3 |
| 2+ years | 4 |

### Q3: Current Bidding Sophistication

"What bidding strategies are currently in use?"

| Answer | Points |
|--------|--------|
| Manual CPC or Maximize Clicks only | 1 |
| Maximize Conversions (no target) | 2 |
| Target CPA or Target ROAS | 3 |
| Value-based bidding, portfolio strategies, or Experiments | 4 |

### Q4: Conversion Tracking Quality

"How confident are you in the accuracy of conversion tracking?"

| Answer | Points |
|--------|--------|
| Basic setup, known gaps or unverified | 1 |
| Standard setup, reasonably accurate | 2 |
| Enhanced conversions enabled, validated regularly | 3 |
| Full-stack: enhanced conversions + offline import + regular audits | 4 |

### Q5: Campaign Structure Complexity

"How many active campaigns, and how are they structured?"

| Answer | Points |
|--------|--------|
| 1-3 campaigns, basic structure | 1 |
| 4-8 campaigns, separated by type or goal | 2 |
| 9-15 campaigns, segmented by product/service/audience | 3 |
| 15+ campaigns with structured naming, labels, and segmentation | 4 |

---

## Scoring

| Total Points | Maturity Level | Description |
|-------------|---------------|-------------|
| 5-8 | **Nascent** | Early-stage account with limited data, simple structure, and basic tracking |
| 9-12 | **Developing** | Growing account with some automation, expanding structure |
| 13-16 | **Established** | Mature account with reliable data, target-based bidding, full structure |
| 17-20 | **Advanced** | Sophisticated account with portfolio strategies, VBB, and granular optimization |

---

## Override Rules

These conditions override the point-based classification:

| Condition | Override To | Reason |
|-----------|-----------|--------|
| <15 conversions/month regardless of other scores | Cap at **Developing** | Insufficient data for advanced strategies |
| Conversion tracking "known gaps" regardless of other scores | Cap at **Developing** | Unreliable data makes advanced optimization risky |
| 100+ conversions/month AND 2+ years AND full tracking | Floor at **Established** | Account has the data foundation for advanced work |
| Account age <3 months regardless of conversion volume | Cap at **Developing** | Insufficient history for pattern recognition |

---

## False Positive Warnings

Flag these situations that can inflate maturity classification:

- **Micro-conversion inflation:** 100+ "conversions" but 80% are page views or scroll depth events. Classify based on primary conversion volume only.
- **Seasonal spikes:** Account hits 100 conversions in December but averages 30. Use the average, not the peak.
- **Duplicate counting:** "Every" count setting on form submissions can double-count. Verify before classifying.
- **Short attribution windows:** An account may appear to have fewer conversions simply because the attribution window is too short for the sales cycle. Check before downgrading.
- **Inherited structure:** A 15+ campaign structure inherited from a previous manager may be overcomplicated, not sophisticated. Evaluate whether the structure is intentional and functional.

---

## Reassessment Triggers

Re-run the maturity assessment when:

1. Monthly conversion volume crosses a threshold boundary (15, 50, or 100)
2. A major structural change occurs (new campaign types, bidding migration)
3. Conversion tracking is upgraded (enhanced conversions, offline import)
4. Quarterly review (standard cadence)
5. Account age crosses 3 months, 12 months, or 24 months

---

## Output

After assessment, record in the account config:

```yaml
maturity_level: <nascent | developing | established | advanced>
monthly_conversion_volume: <number>
```

Confirm with the user: "Based on your answers, I'm classifying [Account Name] as **[level]**. This means [one-sentence implication from maturity-stages.md]. Does that sound right?"
