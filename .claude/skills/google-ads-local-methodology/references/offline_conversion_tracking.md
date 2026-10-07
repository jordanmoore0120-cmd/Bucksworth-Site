# Offline Conversion Tracking

## Overview

Most local business conversions happen offline: phone calls, store visits, in-person consultations, booked appointments. If Google Ads only tracks online form submissions, the account is optimizing on a fraction of its actual performance data. This leads to Smart Bidding undervaluing high-performing campaigns and overvaluing low-intent clicks.

---

## Store Visit Conversions

### Requirements
- Multiple physical business locations
- 1,000+ ad clicks per month (across the account)
- Sufficient store visit data volume (Google determines this automatically)
- Location extensions enabled and GBP linked

### How It Works
- Google uses aggregated, anonymized location data from users who have opted into Location History
- Visits are modeled/estimated, not exact counts
- Reported with a confidence interval
- Typically available 3-7 days after the visit occurs

### Limitations
- Not available for all businesses (minimum volume thresholds)
- Cannot be used as a primary conversion action for Smart Bidding in most cases
- Best used as a supplementary metric alongside other conversions
- Accuracy varies by location density and foot traffic patterns

---

## Call Tracking

### Google Forwarding Numbers
- Free, built into Google Ads
- Tracks: call starts, call duration, caller area code
- Available via call extensions and call-only ads
- Conversion definition: calls lasting X+ seconds (default 60, configurable)
- Limitation: no call recording, no lead quality scoring, no CRM integration

### Third-Party Call Tracking (CallRail, CallTrackingMetrics, etc.)
- Records calls for quality review
- Scores leads (qualified vs unqualified)
- Integrates with CRM for closed-loop reporting
- Supports dynamic number insertion on landing pages
- Tracks calls from all sources, not just Google Ads
- Cost: typically $30-100/month depending on volume

### Call Extensions vs Call-Only Ads
- **Call extensions**: add a phone number to an existing text ad. User can click the ad or call.
- **Call-only ads**: the entire ad drives phone calls. No landing page click option.
- Call-only ads are best for businesses where the phone call IS the conversion (emergency services, appointment-based businesses)
- Call extensions work for businesses where both website visits and calls are valuable

### Call Conversion Best Practices
- Set call duration threshold based on actual call data (analyze how long a qualified call takes)
- 60 seconds is the default but may be too short for complex services (legal, medical) or too long for simple bookings
- Track both "calls from ads" and "calls from website" separately
- If using third-party tracking, import qualified calls back to Google Ads as conversions

---

## Offline Conversion Import (OCI)

### How It Works
1. User clicks ad, lands on website (GCLID captured in URL)
2. User submits lead form (GCLID stored in CRM alongside lead record)
3. Lead progresses through pipeline (MQL, SQL, closed-won)
4. Conversion data (with GCLID and value) imported back to Google Ads
5. Google Ads attributes the offline conversion to the original click

### Import Methods
- **Direct upload**: manual CSV upload via Google Ads UI (good for testing, not scalable)
- **Scheduled import**: Google Sheets or HTTPS endpoint polled on a schedule
- **API import**: automated via Google Ads API (best for high-volume, real-time needs)
- **CRM integrations**: Salesforce, HubSpot have direct Google Ads OCI connectors

### Technical Requirements
- GCLID must be captured on form submission (hidden field, URL parameter)
- GCLID must be stored in CRM alongside the lead record
- Import must happen within 90 days of the original click (attribution window)
- Conversion action must be created in Google Ads before importing
- Minimum 15-30 conversions per month for Smart Bidding to use OCI data effectively

### Common OCI Failures
- GCLID not captured (form doesn't have hidden field, or JavaScript fails)
- GCLID lost during redirect or form processing
- CRM field mapping incorrect (GCLID stored but not exported correctly)
- Import timing too late (beyond 90-day window)
- Duplicate conversions imported (same GCLID + conversion action + timestamp)

---

## Enhanced Conversions for Leads

### What It Is
- Alternative to GCLID-based OCI for matching offline conversions to ad clicks
- Uses hashed first-party data (email address, phone number) instead of GCLID
- Google matches hashed data against signed-in user data to find the ad click

### When to Use
- When GCLID capture is technically difficult or unreliable
- As a supplement to GCLID-based OCI (improves match rates)
- When the CRM cannot easily store and export GCLID values

### Setup Requirements
- Enhanced conversions enabled in Google Ads settings
- Conversion tag configured to collect hashed user data
- User provides email or phone on the lead form
- Google Tag Manager or gtag.js implementation

### Limitations
- Match rate depends on whether the user was signed into Google when they clicked
- Lower match rate than GCLID-based import (typically 40-70% vs 90%+)
- Cannot import actual deal values as easily (better for pass/fail conversion events)

---

## Conversion Value Assignment

### Option 1: Actual Revenue (Best)
- Import the real closed-deal value from CRM
- Requires waiting until deal closes (lag time between click and close)
- Best for value-based bidding (tROAS, maximize conversion value)
- Example: import $5,000 when a $5,000 deal closes

### Option 2: Stage-Based Proxy Values (Good)
- Assign estimated values based on pipeline stage
- Import each stage as a separate conversion action with different values
- Example: Lead = $10, MQL = $50, SQL = $200, Opportunity = $500, Closed = $2,000
- Values should reflect the probability of closing at each stage times the average deal value

### Option 3: Flat Value (Minimum)
- Assign the same value to every conversion
- Simplest to implement but least informative for Smart Bidding
- Example: every form submission = $100
- Better than no value, but does not differentiate high-value from low-value leads

### Choosing the Right Approach
- If deal values vary significantly (e.g., $500 to $50,000): use actual revenue or stage-based
- If deal values are relatively consistent: flat value is acceptable
- If using tROAS bidding: accurate values are required. Inaccurate values degrade optimization.
- If using tCPA bidding: values are less critical since optimization targets cost, not value
