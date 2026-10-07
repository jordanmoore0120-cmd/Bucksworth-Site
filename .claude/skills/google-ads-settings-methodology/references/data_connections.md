# Data Connections: Requirements, Verification, and Impact

This reference documents the data connections that should be linked to a Google Ads account, what each connection enables, how to verify the link, and what breaks when a connection is missing.

---

## Auto-Tagging Dependency

**Check auto-tagging first.** Many data connections depend on auto-tagging being ON. If auto-tagging is OFF:
- GA4 cannot match Google Ads clicks to sessions
- Audience sharing between GA4 and Google Ads fails
- Conversion import from GA4 is unreliable
- Cross-platform attribution breaks

Auto-tagging status should be the first check in any data connections audit.

---

## Connection Details

### GA4 (Google Analytics 4)

- **What it enables:**
  - Cross-platform analytics (Google Ads data flows into GA4 reports)
  - Audience sharing (GA4 audiences usable for Google Ads targeting and remarketing)
  - Conversion import (GA4 events as Google Ads conversion actions)
  - Enhanced measurement (scroll, outbound clicks, site search, video engagement, file downloads)
  - Detailed landing page and behavior analysis
- **Required for:** All accounts
- **How to verify:** Google Ads > Tools > Data Manager > Google Analytics. Status should show "Active" with the correct GA4 property ID.
- **Common linking issues:**
  - Wrong GA4 property linked (staging vs. production, old UA property reference)
  - User does not have admin access to both Google Ads and GA4
  - Auto-tagging OFF causes data mismatch even when linked
- **Impact of disconnection:** No audience sharing, no GA4 conversion import, no cross-platform reporting. Google Ads operates in isolation.

### Merchant Center

- **What it enables:**
  - Shopping ads (Standard Shopping and Shopping-eligible PMax)
  - Product feed data for PMax campaigns
  - Free product listings
  - Product-level reporting (item ID, brand, category performance)
  - Automatic item updates
- **Required for:** eCommerce accounts, any account running Shopping or product-based PMax campaigns
- **How to verify:** Google Ads > Tools > Data Manager > Google Merchant Center. Status should show "Active" with the correct Merchant Center ID.
- **Common linking issues:**
  - Merchant Center account suspended (feed errors, policy violations)
  - Feed not approved or partially disapproved
  - Multiple Merchant Center accounts causing confusion about which is linked
  - Country/currency mismatch between Merchant Center and Google Ads
- **Impact of disconnection:** All Shopping campaigns and product-based PMax campaigns stop serving. No product data available for ads.

### YouTube Channel

- **What it enables:**
  - Video campaigns (in-stream, bumper, discovery, Shorts)
  - YouTube engagement audiences (viewers, subscribers, likers)
  - YouTube channel as a PMax signal and asset source
  - Video remarketing lists
  - Brand lift studies (at sufficient spend levels)
- **Required for:** Video campaigns, PMax campaigns using video assets
- **Recommended for:** All accounts (even without video campaigns, linking enables audience building)
- **How to verify:** Google Ads > Tools > Data Manager > YouTube. Status should show "Active" with the correct channel.
- **Common linking issues:**
  - Channel owned by a different Google account than the Ads manager
  - Multiple YouTube channels, wrong one linked
  - Channel set to private or unlisted (restricts some features)
- **Impact of disconnection:** Cannot run video campaigns. Cannot build YouTube engagement audiences. PMax cannot use channel video assets.

### Search Console

- **What it enables:**
  - Organic search data alongside paid data (Paid & Organic report)
  - Keyword-level organic ranking data for competitive analysis
  - Landing page performance from organic search
  - Identification of keywords where paid and organic overlap
- **Required for:** No campaigns depend on this link to function
- **Recommended for:** All accounts. The Paid & Organic report reveals opportunities where organic rankings are weak (invest more in paid) or strong (reduce paid waste).
- **How to verify:** Google Ads > Tools > Data Manager > Search Console. Status should show "Active" with the correct property.
- **Common linking issues:**
  - Domain property vs. URL prefix property mismatch
  - User lacks ownership of the Search Console property
  - www vs. non-www URL discrepancy
- **Impact of disconnection:** Paid & Organic report unavailable. No loss of campaign functionality.

### Google Business Profile (GBP)

- **What it enables:**
  - Location assets (address, phone, map pin in ads)
  - Local campaigns and local inventory ads
  - Maps channel in PMax campaigns
  - Store visit conversions (at sufficient volume)
  - Location-based bid adjustments
- **Required for:** Local businesses, multi-location businesses, any business with a physical presence
- **How to verify:** Google Ads > Tools > Data Manager > Google Business Profile. Status should show "Active" with the correct location(s).
- **Common linking issues:**
  - GBP owned by a different Google account
  - Multiple GBP locations, not all linked
  - GBP listing suspended or unverified
  - Location group not created in Google Ads after linking
- **Impact of disconnection:** No location assets in ads. No Maps channel in PMax. No store visit conversion tracking. Local businesses lose a significant competitive advantage.

### CRM (Offline Conversion Import)

- **What it enables:**
  - Offline conversion import (sales, revenue, pipeline stages)
  - Lead quality feedback loop to Smart Bidding
  - Value-based bidding using actual revenue data
  - Customer match audiences
- **Required for:** Lead gen accounts where conversions happen offline (phone calls, in-person meetings, enterprise sales)
- **How to verify:** Google Ads > Tools > Conversions > check for "Import" type conversion actions. Google Ads > Tools > Data Manager > check for CRM connector.
- **Common integration methods:**
  - Direct API import (Salesforce, HubSpot native connectors)
  - Zapier/Make automation
  - Google Ads API upload
  - Enhanced Conversions for Leads (hashed email matching)
- **Common issues:**
  - GCLID not captured at form submission (breaks click-to-conversion matching)
  - Import delay too long (data arriving after the attribution window closes)
  - Offline conversion values not mapped correctly
  - Import errors from data formatting issues
- **Impact of disconnection:** Smart Bidding optimizes for form fills rather than actual sales. No lead quality signal. Value-based bidding impossible. The gap between "leads" and "revenue" remains invisible to the advertising platform.

### Data Manager (First-Party Data)

- **What it enables:**
  - Customer Match audiences (upload customer lists for targeting)
  - First-party data signals for Smart Bidding
  - Lookalike/similar audience seed data
  - Cross-device matching using hashed customer data
- **Required for:** Accounts with customer databases, especially eCommerce and lead gen
- **How to verify:** Google Ads > Tools > Data Manager. Check for configured data sources and their sync status.
- **Common issues:**
  - Customer list format errors (wrong column headers, missing required fields)
  - Match rate below 30% (indicates data quality issues)
  - Lists not refreshing on schedule
  - Privacy policy not updated to reflect data usage
- **Impact of disconnection:** No Customer Match targeting. Reduced Smart Bidding signal quality. Cannot leverage existing customer data for audience building.

---

## Connection Priority Matrix

| Connection | All Accounts | eCommerce | Lead Gen | Local | SaaS |
|---|---|---|---|---|---|
| GA4 | Required | Required | Required | Required | Required |
| Merchant Center | N/A | Required | N/A | N/A | N/A |
| YouTube | Recommended | Recommended | Recommended | Recommended | Recommended |
| Search Console | Recommended | Recommended | Recommended | Recommended | Recommended |
| GBP | N/A | Optional | Optional | Required | N/A |
| CRM | Optional | Optional | Required | Optional | Required |
| Data Manager | Recommended | Required | Required | Optional | Required |

---

## Audit Output Format

When reporting data connection status, use this format:

| Connection | Status | Impact if Missing |
|---|---|---|
| GA4 | Linked (Property: GA4-XXXXXXX) | N/A |
| Merchant Center | Not linked | Shopping campaigns cannot run |
| YouTube | Linked (Channel: @example) | N/A |
| Search Console | Not linked | Paid & Organic report unavailable |
| GBP | Not applicable | N/A |
| CRM | Not linked | No offline conversion data for Smart Bidding |
| Data Manager | Not configured | No Customer Match audiences |
