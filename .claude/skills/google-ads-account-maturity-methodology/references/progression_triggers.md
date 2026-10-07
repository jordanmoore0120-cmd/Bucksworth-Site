# Maturity Progression Triggers

When to reassess, upgrade, or downgrade an account's maturity classification. Maturity is not a one-time label. It changes as accounts grow, decline, or undergo structural shifts.

---

## Standard Reassessment Cadence

| Cadence | Action |
|---------|--------|
| **Quarterly** | Full reassessment using the maturity-assessment questionnaire |
| **Monthly** | Quick check: has conversion volume crossed a threshold boundary? |
| **On structural change** | Re-run assessment after major account changes |

---

## Upgrade Triggers (Move Up One Stage)

### Nascent to Developing

**Primary trigger:** 15+ primary conversions/month for 2 consecutive months.

**Supporting conditions (at least 2 of 4):**
1. Conversion tracking verified and stable (no unexplained spikes/drops)
2. Brand and non-brand campaigns separated
3. At least 3 months of active management history
4. Basic negative keyword list in place

**Action:** Update maturity_level in account-conventions config. Inform user: "This account now qualifies for automated bidding testing. Consider moving from [current strategy] to Maximize Conversions."

### Developing to Established

**Primary trigger:** 50+ primary conversions/month for 2 consecutive months.

**Supporting conditions (at least 2 of 4):**
1. Automated bidding (tCPA or tROAS) running stably for 30+ days
2. Enhanced conversions enabled
3. Campaign structure supports business model (not over-segmented)
4. At least 6 months of active management history

**Action:** Update config. Inform user: "This account now supports target-based bidding optimization, creative testing, and budget reallocation modeling."

### Established to Advanced

**Primary trigger:** 100+ primary conversions/month for 2 consecutive months.

**Supporting conditions (at least 2 of 4):**
1. Full-stack tracking (enhanced conversions + offline import if applicable)
2. Stable target-based bidding across primary campaigns
3. Campaign naming conventions and labels in active use
4. At least 12 months of active management history

**Action:** Update config. Inform user: "This account qualifies for VBB evaluation, portfolio bidding optimization, and incrementality testing."

---

## Downgrade Triggers (Move Down One Stage)

Downgrading is less common but necessary when conditions change.

### Any Stage to Nascent

**Triggers:**
- Conversion volume drops below 15/month for 2 consecutive months (not seasonal)
- Conversion tracking breaks or becomes unreliable
- Account restructured from scratch (new campaigns, new tracking)
- Account paused for 3+ months and restarted

**Action:** Update config. Adjust all active recommendations to nascent-appropriate level. Warn user: "This account's conversion volume has dropped below the threshold for [current bidding strategy]. Consider reverting to [nascent-appropriate strategy]."

### Advanced to Established

**Triggers:**
- Conversion volume sustained below 100/month for 3+ months (not seasonal)
- Offline conversion pipeline broken or disconnected
- Major account restructure that resets campaign history

### Established to Developing

**Triggers:**
- Conversion volume sustained below 50/month for 3+ months
- Automated bidding destabilized (perpetual learning, erratic performance)
- Enhanced conversions disabled or broken

---

## False Signals (Do NOT Trigger Reassessment)

| Signal | Why It's False | What to Do Instead |
|--------|---------------|-------------------|
| Single month above/below threshold | Normal variance | Wait for 2 consecutive months |
| Seasonal spike (e.g., Black Friday) | Temporary, not sustained | Use average monthly volume, note seasonality |
| Seasonal dip (e.g., January) | Temporary, expected | Maintain current level, note seasonal pattern |
| Conversion volume rises but tracking is broken | Inflated data | Fix tracking first, then reassess |
| Budget increase doubles conversions | May be bought volume, not organic growth | Verify CPA/ROAS held, then reassess |
| Client changes primary conversion action | Apples to oranges comparison | Reset baseline, wait 2 months at new definition |

---

## Structural Change Triggers

These events warrant immediate reassessment regardless of cadence:

| Event | Action |
|-------|--------|
| Conversion tracking overhaul | Re-run full assessment. New baseline needed. |
| Bidding strategy migration (e.g., Manual to tCPA) | Reassess after 30-day stabilization period |
| Major campaign restructure (>50% of campaigns changed) | Re-run assessment. History partially reset. |
| New campaign type added (e.g., first PMax launch) | Update capability flags. May not change maturity. |
| Budget change >50% | Monitor for 2 months. Volume shift may trigger upgrade/downgrade. |
| Business model change (e.g., adds eCommerce to lead gen) | Update business_model. Re-run assessment for new model. |
| Agency transition (inherited account) | Full assessment. Don't trust prior classification. |

---

## Seasonal Accounts

Some accounts have genuine seasonality where conversion volume fluctuates dramatically:

| Quarter | Conversions | Apparent Maturity |
|---------|------------|-------------------|
| Q1 | 30/month | Developing |
| Q2 | 60/month | Established |
| Q3 | 45/month | Developing |
| Q4 | 150/month | Advanced |

**Rule:** Classify based on the **annual average**, not the peak or trough. Note seasonality in the config's special_handling_notes field. Adjust within-quarter recommendations to match current-quarter capability (e.g., "This quarter's volume supports creative testing; next quarter it may not").

**Exception:** If the off-season drops below 15 conversions/month for 3+ months, seasonal nascent rules apply during those months regardless of annual average.

---

## Documentation

When changing maturity level, update the config and log:

```yaml
# In account-conventions config
maturity_level: established  # Updated 2026-03-25 from developing
monthly_conversion_volume: 55  # 2-month average
```

Inform the user of the change and its implications: what new capabilities are now available, and what (if anything) should be adjusted in current strategy.

---

## Seasonality Cross-Reference for Maturity Promotion

When recommending a maturity level promotion, the toolkit must cross-reference against historical baseline data (from the Phase 3b setup pull) to determine whether the sustained volume coincides with a historically high period.

### Process
1. Account has sustained conversion volume above the next maturity threshold for 2+ consecutive months
2. Check: does the historical baseline show these months as historically above-average? (>25% above annual mean)
3. If yes: extend the observation window. "This account crossed the [level] threshold during [months], which are historically [X%] above average for this account. Recommend waiting until [next below-average or average month] to confirm the volume sustains outside of peak season."
4. If no: proceed with standard promotion recommendation.

### Examples
- Account crosses Established threshold (50 conv/mo) in November-December for an eCommerce account with strong Q4 seasonality: extend observation to January-February.
- Account crosses Developing threshold (15 conv/mo) in March-April for a tax preparation service: Q1 is peak season. Wait until May-June to confirm.
- Account crosses Advanced threshold (100 conv/mo) in a non-seasonal month: proceed with standard 2-month confirmation.

### When historical data is unavailable
If the Phase 3b baseline pull was not performed (CSV/manual data source), note: "Historical seasonality data is not available. This promotion is based on [N] months of observed volume. Consider whether current volume may be seasonally inflated before changing bidding strategies."
