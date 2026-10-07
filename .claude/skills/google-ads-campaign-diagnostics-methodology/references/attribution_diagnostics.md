# Attribution Diagnostics

Framework for identifying when attribution issues are distorting campaign performance data, and how to account for them before drawing conclusions.

## Conversion Lag Analysis

### The Problem

Many conversions do not happen on the day of the click. The gap between click and conversion varies by business type:

| Business Type | Typical Conversion Lag | Full Attribution Window |
|---------------|----------------------|----------------------|
| eCommerce (impulse) | 0-1 days | 7 days |
| eCommerce (considered) | 1-7 days | 14 days |
| Lead generation | 3-14 days | 30 days |
| B2B / high-consideration | 7-30+ days | 30-90 days |

### Why This Matters for Diagnosis

When you pull "last 7 days" data for a lead gen campaign, the most recent days will always look worse than they actually are because conversions have not finished attributing. Comparing an incomplete recent period to a fully-attributed prior period creates a false performance decline.

**Example:** A lead gen campaign averages 10 conversions/week. You pull data on Monday for the past 7 days. The most recent 3 days only show 2 conversions total because the remaining 4-5 conversions will attribute over the next 2 weeks. It looks like performance collapsed. It did not.

### How to Diagnose Conversion Lag

1. **Compare "by interaction time" vs "by conversion time."** Google Ads reports conversions both ways. If "by conversion time" shows significantly more conversions for the same period, lag is present.
2. **Check the conversion action's attribution window.** Tools > Conversions > click the action > Settings. Note the click-through and view-through windows.
3. **Compare a recent period to a period that is fully outside the attribution window.** For a 30-day click window, compare the current week to 5+ weeks ago (fully attributed) rather than to last week (also partially incomplete).
4. **Build a lag curve.** Pull conversion data segmented by days-to-conversion. This shows how conversions distribute over time after the initial click.

### Rules for Lag-Adjusted Analysis

- For lead gen: always compare periods that are 30+ days old for reliable CPA/conversion data
- For eCommerce: compare periods that are 7+ days old
- For recent performance: explicitly note that data is incomplete and will improve as conversions attribute
- Never make budget or bid changes based on partially-attributed data

## Cross-Device Attribution

### The Problem

Users frequently click an ad on one device and convert on another. The most common pattern: click on mobile, convert on desktop. This makes mobile campaigns appear to underperform and desktop campaigns appear to over-perform.

### Google's Cross-Device Model

Google estimates cross-device conversions for signed-in users. These appear as "Cross-device conversions" in the conversions column (if the conversion action includes them). Key limitations:

- Only works for users signed into Google
- Modeling accuracy varies by vertical and user behavior
- Not all conversion actions include cross-device by default

### How to Diagnose Cross-Device Issues

1. **Check device-segmented conversion rates.** If mobile CTR is strong but conversion rate is very low compared to desktop, cross-device conversion is likely occurring.
2. **Check the "Cross-device conversions" column.** If this is a significant percentage of total conversions, the account has meaningful cross-device behavior.
3. **Compare GA4 device paths.** GA4's path exploration can show users who started on mobile and converted on desktop.

### Implications for Campaign Diagnosis

- Do not conclude a mobile campaign is "underperforming" based solely on last-click device conversion data
- If cross-device conversions are significant, evaluate mobile campaigns on assisted + cross-device metrics, not direct conversions alone
- Consider device bid adjustments carefully: reducing mobile bids because of low mobile conversion rate may reduce total conversions if those mobile clicks drive desktop conversions

## Data-Driven Attribution (DDA) Model Interpretation

### How DDA Works

DDA uses a machine learning model to distribute conversion credit across all touchpoints in the conversion path. It considers:
- Path position (first touch, mid-touch, last touch)
- Time between touchpoints
- Number of touchpoints
- Device type at each touchpoint
- Ad interaction type (click, view, etc.)

### DDA vs Last-Click Differences

When an account switches from last-click to DDA (or when comparing campaigns under DDA), credit shifts between campaigns. Common patterns:

| Campaign Type | Typical DDA Effect vs Last-Click |
|---------------|--------------------------------|
| Brand Search | Usually receives less credit (last touch is often brand) |
| Non-Brand Search | May receive more or less depending on path position |
| Display/Video | Usually receives more credit (upper-funnel gets recognized) |
| Shopping | Usually receives slightly less credit |
| Remarketing | Usually receives less credit (last-click overvalues remarket) |

### Diagnostic Implications

- If a campaign's performance "dropped" after switching to DDA, the campaign did not get worse. Credit was redistributed.
- When comparing a DDA period to a last-click period, the comparison is not apples-to-apples. Normalize by comparing DDA-to-DDA only.
- A campaign that looks bad under DDA but good under last-click is likely receiving inflated last-click credit from being the final touchpoint rather than the value-driving touchpoint.

### When DDA Distorts Diagnosis

DDA can create misleading signals when:
- The model retrains and shifts credit allocation (can happen without any campaign changes)
- Very few conversion paths exist (DDA needs volume to model accurately)
- The conversion window is very short (less path data for the model)

## Assisted vs Last-Click Conversions

### The Concept

A conversion path may involve multiple campaign touchpoints. The last campaign clicked before conversion gets "last-click" credit. All other campaigns on the path get "assisted conversion" credit.

### Why This Matters for Diagnosis

A campaign with zero last-click conversions but significant assisted conversions is not underperforming. It is serving an upper-funnel role in the conversion path. Killing this campaign may cause last-click conversions in other campaigns to drop.

### How to Check

1. **Attribution > Top Paths report** in Google Ads: shows the most common multi-campaign paths to conversion
2. **"Assisted conversions" column** (add via column modification): shows how many conversions the campaign assisted
3. **Assisted/Last-Click ratio:**
   - Ratio < 1: campaign is primarily a closer (last-touch)
   - Ratio = 1: balanced between assisting and closing
   - Ratio > 1: campaign is primarily an assister (upper-funnel)

### Diagnostic Rule

Before concluding a campaign is not contributing, always check assisted conversions. If the assist count is significant, the campaign is part of the conversion ecosystem. Evaluate it on total contribution (last-click + assisted), not last-click alone.

## Common Attribution Traps

### Trap 1: Evaluating YouTube/Display on Last-Click
YouTube and Display are upper-funnel channels. Evaluating them on last-click CPA against Search is a methodology error. These channels should be evaluated on assisted conversions, view-through conversions, and brand lift metrics.

### Trap 2: Ignoring View-Through Conversions
View-through conversions (user sees ad, does not click, converts later) are real for Display and Video. Ignoring them undervalues these campaigns. Include view-through in evaluation, but weight them less than click-through (typically 10-25% weight).

### Trap 3: Making Real-Time Budget Decisions on Lagged Data
If conversion lag is 14 days and you cut budget based on "this week's" CPA, you are cutting budget based on incomplete data. The CPA will improve as conversions attribute. Budget decisions should be based on fully-attributed periods.

### Trap 4: Comparing DDA to Last-Click Periods
If the account switched attribution models, comparing a DDA period to a last-click period will show false performance shifts. Always compare within the same model.

### Trap 5: Attributing Brand Search Performance to Brand Search
Brand Search often appears to be the highest-performing campaign because it captures the last click from users who were already going to convert. Its true incremental value may be much lower. Consider incrementality testing before scaling brand search investment based on last-click ROAS alone.

### Trap 6: Over-Crediting Remarketing
Similar to brand search, remarketing captures users already in the funnel. Last-click attribution makes remarketing look highly efficient, but much of the credit belongs to the campaigns that brought the user into the funnel originally. DDA partially corrects this, but awareness of the dynamic is important for diagnosis.

## Attribution Diagnostic Checklist

Before concluding a campaign has a real performance problem, verify:

- [ ] Comparison periods are fully attributed (outside the conversion lag window)
- [ ] Attribution model has not changed during the comparison period
- [ ] Cross-device conversions are accounted for (especially mobile campaigns)
- [ ] Assisted conversions have been checked (especially upper-funnel campaigns)
- [ ] View-through conversions are included in Display/Video evaluation
- [ ] DDA credit shifts have been considered as an explanation for performance changes
- [ ] Conversion actions have not been modified (which can affect what gets counted)
