# Conversions API (CAPI) Implementation Guide

## Purpose

Step-by-step guide for implementing Meta's Conversions API, configuring deduplication, and optimizing Event Match Quality (EMQ). This reference supports the measurement-methodology SKILL.md and is used by the audit-measurement action skill.

---

## Implementation Methods

### Method 1: Partner Integration (Recommended for Most)

Best for businesses using supported ecommerce or CMS platforms.

**Shopify:**
1. Go to Shopify Admin > Settings > Customer events
2. Add Meta pixel via the Meta & Instagram sales channel
3. CAPI is automatically enabled through Shopify's server-side integration
4. Verify in Meta Events Manager that both "Browser" and "Server" event sources appear
5. Deduplication is handled automatically by Shopify's integration (event_id is generated and shared)

**WooCommerce:**
1. Install the "Facebook for WooCommerce" plugin (official Meta plugin)
2. Connect your Meta Business account and pixel
3. Enable CAPI in plugin settings (toggle "Enable Conversions API")
4. The plugin sends server events for: ViewContent, AddToCart, InitiateCheckout, Purchase
5. Deduplication: Plugin generates matching event_id for pixel and CAPI events

**WordPress (non-WooCommerce):**
1. Install the "Meta Pixel" plugin or use a third-party plugin (PixelYourSite Pro recommended)
2. Configure CAPI access token in plugin settings
3. Map standard events to site actions (form submissions, page views, etc.)
4. Test using Events Manager > Test Events

**BigCommerce, Magento, and others:**
- Check Meta's partner integrations directory for native support
- If no native integration: use GTM server-side or direct API

### Method 2: CAPI Gateway (Meta's Managed Solution)

Best for businesses that want server-side tracking without engineering resources.

**What it is:**
- A Meta-managed cloud service that handles CAPI event forwarding
- Runs on AWS, Google Cloud, or Azure (you provision the instance, Meta manages the software)
- Acts as a middleman between your site and Meta's servers

**Setup steps:**
1. In Events Manager, go to Data Sources > Your Pixel > Settings
2. Find "Conversions API Gateway" section
3. Select your cloud provider (AWS recommended for simplicity)
4. Follow the provisioning wizard (creates a cloud instance in your account)
5. Configure your domain's DNS to route tracking requests through the gateway
6. The gateway captures browser events and forwards them server-side

**Advantages:**
- No custom code required
- Meta manages updates and maintenance
- Automatic deduplication
- Good EMQ out of the box (captures IP, user agent, fbclid automatically)

**Limitations:**
- Cloud hosting costs (~$50-150/month depending on traffic)
- Limited customization (can't add custom parameters easily)
- Relies on Meta's infrastructure updates

### Method 3: Google Tag Manager Server-Side

Best for businesses with existing GTM infrastructure and moderate technical resources.

**Setup steps:**

1. **Set up GTM Server-Side container:**
   - Create a server-side container in GTM
   - Deploy to Google Cloud (App Engine) or a self-hosted server
   - Configure your domain to proxy requests through the server container

2. **Configure Meta CAPI tag:**
   - In the server-side container, add the "Facebook Conversions API" tag (community template)
   - Configure:
     - Pixel ID
     - Access Token (generated in Events Manager > Settings > Generate Access Token)
     - Event name mapping (map GTM events to Meta standard events)
     - User data mapping (email, phone, IP, user agent, fbclid)

3. **Set up deduplication:**
   - Generate a unique event_id in your web GTM container (using a custom JavaScript variable)
   - Pass this event_id to both the browser pixel tag and the server-side CAPI tag
   - Example event_id generation:
     ```javascript
     function() {
       return 'evt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
     }
     ```

4. **Map user parameters:**
   - em (email): Hash with SHA-256, lowercase, trimmed
   - ph (phone): Hash with SHA-256, digits only (no formatting)
   - fn (first name): Hash with SHA-256, lowercase
   - ln (last name): Hash with SHA-256, lowercase
   - client_ip_address: From request header (automatic in server-side GTM)
   - client_user_agent: From request header (automatic in server-side GTM)
   - fbc: Extract from `_fbc` cookie or `fbclid` URL parameter
   - fbp: Extract from `_fbp` cookie
   - external_id: Your user/customer ID, hashed with SHA-256

5. **Test and verify:**
   - Use Events Manager > Test Events to verify server events
   - Check that deduplication is working (duplicated events should appear)
   - Verify EMQ scores after 24-48 hours of data

### Method 4: Direct API Integration

Best for businesses with engineering resources who need full control.

**Requirements:**
- Server-side programming capability (Python, Node.js, PHP, Ruby, etc.)
- Access to user data at the point of conversion (email, transaction data)
- Meta Business SDK or raw HTTP API calls

**Setup steps:**

1. **Generate access token:**
   - Events Manager > Settings > Generate Access Token
   - Store securely (this token has write access to your pixel data)

2. **Install Meta Business SDK:**
   ```bash
   # Python
   pip install facebook-business

   # Node.js
   npm install facebook-nodejs-business-sdk
   ```

3. **Send events (Python example):**
   ```python
   from facebook_business.adobjects.serverside.event import Event
   from facebook_business.adobjects.serverside.event_request import EventRequest
   from facebook_business.adobjects.serverside.user_data import UserData
   from facebook_business.adobjects.serverside.custom_data import CustomData
   from facebook_business.api import FacebookAdsApi
   import hashlib
   import time

   # Initialize
   FacebookAdsApi.init(access_token='YOUR_ACCESS_TOKEN')

   # Hash helper
   def hash_sha256(value):
       return hashlib.sha256(value.strip().lower().encode()).hexdigest()

   # Build user data
   user_data = UserData(
       emails=[hash_sha256('user@example.com')],
       phones=[hash_sha256('15551234567')],
       client_ip_address='203.0.113.1',
       client_user_agent='Mozilla/5.0...',
       fbc='fb.1.1234567890.AbCdEfGh',
       fbp='fb.1.1234567890.1234567890',
       external_id=hash_sha256('user-id-12345')
   )

   # Build custom data
   custom_data = CustomData(
       currency='usd',
       value=99.99,
       content_ids=['SKU-12345'],
       content_type='product'
   )

   # Build event
   event = Event(
       event_name='Purchase',
       event_time=int(time.time()),
       event_id='order_12345',  # Must match pixel event_id
       user_data=user_data,
       custom_data=custom_data,
       event_source_url='https://example.comthank_you',
       action_source='website'
   )

   # Send
   request = EventRequest(
       events=[event],
       pixel_id='YOUR_PIXEL_ID'
   )
   response = request.execute()
   ```

4. **Batch events:**
   - Send up to 1,000 events per API call
   - Send events within 1 hour of occurrence (real-time preferred)
   - Events older than 7 days are rejected

---

## Deduplication Configuration

### How Deduplication Works

When both browser pixel and CAPI send the same event, Meta deduplicates using:
1. **event_id** (primary): Must be identical in both pixel and CAPI events
2. **event_name**: Must match (e.g., both "Purchase")
3. **Timing**: Events must occur within a reasonable time window

If event_id matches, Meta keeps one event and marks the other as deduplicated.

### Generating event_id

The event_id must be:
- Unique per event occurrence (not per user or per session)
- Shared between pixel and CAPI for the same event
- Generated at the point of conversion (not in the tracking code)

**Best practices by event type:**

| Event | Recommended event_id | Example |
|-------|---------------------|---------|
| Purchase | Order ID or transaction ID | `order_12345` |
| AddToCart | Cart ID + product ID + timestamp | `cart_789_sku123_1711500000` |
| InitiateCheckout | Checkout session ID | `checkout_abc123` |
| Lead | Form submission ID or lead ID | `lead_456` |
| ViewContent | Page URL hash + session ID + timestamp | `vc_a1b2c3_sess789_1711500000` |
| CompleteRegistration | User ID or registration ID | `reg_user_789` |

### Verifying Deduplication

1. Go to Events Manager > Your Pixel > Overview
2. Select a specific event (e.g., Purchase)
3. Look for the "Connection Method" breakdown:
   - "Browser" = pixel events
   - "Server" = CAPI events
   - "Browser and Server" = both fired, deduplicated
4. The "Deduplicated" count shows how many duplicate events were removed

**Healthy state:**
- You see both "Browser" and "Server" events
- 5-20% of total events show as "Browser and Server" (deduplicated)
- Total event count matches your backend data (within 5-10%)

**Unhealthy states and fixes:**

| Symptom | Cause | Fix |
|---------|-------|-----|
| 0% deduplication, both sources firing | event_id not matching | Verify event_id is identical in pixel and CAPI; check for formatting differences |
| 0% deduplication, only Browser events | CAPI not sending events | Check CAPI configuration, access token, server connectivity |
| 0% deduplication, only Server events | Pixel not firing | Check pixel installation, ad blockers in test environment |
| >40% deduplication | Both systems catching nearly every event | Good redundancy, but check if CAPI is double-firing |
| Total events > backend data | Double-counting (deduplication failing) | Confirm event_id is present in both sources and matches exactly |
| Total events < backend data | Missing events in both systems | Check for blocked users, consent-denied users, or technical failures |

---

## EMQ Optimization Guide

### Understanding EMQ Scoring

EMQ (Event Match Quality) measures how well Meta can match your server events to real Meta users. Each user parameter you send improves the match rate.

**Parameter contribution to EMQ (approximate):**

| Parameter | EMQ Impact | Notes |
|-----------|-----------|-------|
| em (hashed email) | +2.0-3.0 | Biggest single factor. Most users have email linked to Meta. |
| ph (hashed phone) | +1.0-1.5 | Strong secondary identifier. |
| fbc (Facebook click ID) | +1.0-2.0 | Deterministic match for users who clicked an ad. Only available for click-through users. |
| fbp (Facebook browser ID) | +0.5-1.0 | Probabilistic match from Meta's first-party cookie. |
| external_id | +0.5-1.0 | Your user ID. Helps with cross-device matching. |
| client_ip_address | +0.5-1.0 | Combined with user agent for probabilistic matching. |
| client_user_agent | +0.3-0.5 | Supports IP-based matching. |
| fn + ln (first/last name) | +0.5-1.0 | Useful when email/phone aren't available. |
| ge, db, ct, st, zp | +0.2-0.5 each | Supplementary. Helps disambiguate common names. |

### EMQ Improvement Roadmap

Follow this order to maximize EMQ improvement per effort:

**Phase 1: Quick wins (EMQ 3.0 -> 5.0+)**
1. Send hashed email with every CAPI event
2. Send client IP address and user agent (usually automatic with server-side setup)
3. Pass fbclid from landing page URL to server events (store in session)

**Phase 2: Strong matching (EMQ 5.0 -> 7.0+)**
4. Send hashed phone number (when available from account/form data)
5. Implement fbc cookie forwarding (extract from `_fbc` cookie)
6. Implement fbp cookie forwarding (extract from `_fbp` cookie)
7. Send external_id (your user/customer ID, hashed)

**Phase 3: Maximum quality (EMQ 7.0 -> 9.0+)**
8. Send hashed first and last name
9. Send hashed location data (city, state, ZIP)
10. Send hashed date of birth and gender (if available)
11. Ensure all parameters are consistently sent for every event (not just some)

### Hashing Requirements

All PII parameters must be SHA-256 hashed before sending to Meta.

**Hashing rules:**
- Lowercase the value before hashing
- Trim leading/trailing whitespace
- Remove all formatting (phone: digits only, no dashes or parentheses)
- Use UTF-8 encoding
- Hash with SHA-256 (no salt)

**Examples:**

| Parameter | Raw Value | Prepared Value | SHA-256 Hash |
|-----------|----------|---------------|-------------|
| em | `John@Example.com` | `john@example.com` | `a1b2c3...` |
| ph | `(555) 123-4567` | `5551234567` | `d4e5f6...` |
| fn | ` John ` | `john` | `g7h8i9...` |
| ln | `DOE` | `doe` | `j0k1l2...` |
| ct | `New York` | `newyork` | `m3n4o5...` |
| st | `NY` | `ny` | `p6q7r8...` |
| zp | `10001-1234` | `10001` | `s9t0u1...` |

### Monitoring EMQ

- Check EMQ scores weekly in Events Manager > Data Sources > CAPI
- EMQ is calculated per event type (Purchase may have different EMQ than Lead)
- Focus on EMQ for your primary optimization event (the one your campaigns optimize for)
- EMQ updates with a 24-48 hour delay after parameter changes
- After making improvements, wait 3-5 days for the score to stabilize

---

## Testing and Validation

### Pre-Launch Testing

1. **Use Test Events tool:**
   - Events Manager > Data Sources > Your Pixel > Test Events
   - Enter your website URL and browse through the conversion flow
   - Verify that both Browser and Server events appear for each action
   - Check that event_id matches between Browser and Server events

2. **Verify parameters:**
   - Click on a server event in Test Events
   - Confirm all expected user parameters are present
   - Check that values are properly hashed (64-character hex strings)

3. **Check event timing:**
   - Server events should arrive within seconds of the browser event
   - If CAPI events are delayed by more than 5 minutes, check your server-side processing

### Post-Launch Monitoring

| Check | Frequency | Tool | Action Threshold |
|-------|-----------|------|-----------------|
| CAPI event volume | Daily | Events Manager | If server events drop >20% from prior 7d average |
| EMQ scores | Weekly | Events Manager | If EMQ drops below 6.0 for primary event |
| Deduplication rate | Weekly | Events Manager | If dedup rate drops to 0% or exceeds 40% |
| Conversion accuracy | Weekly | Compare Meta vs backend | If discrepancy exceeds 15% |
| Access token validity | Monthly | Events Manager | Regenerate if approaching expiry or after security changes |

### Troubleshooting Common Issues

| Issue | Diagnostic Steps | Resolution |
|-------|-----------------|-----------|
| CAPI events not appearing | Check access token validity, server logs for API errors, network connectivity | Regenerate token, fix server errors, check firewall rules |
| EMQ stuck below 5.0 | Review which parameters are being sent (Events Manager > Test Events) | Add missing parameters per the improvement roadmap above |
| Deduplication not working | Compare event_id values in pixel and CAPI; check for type mismatches (string vs number) | Ensure event_id is generated once and shared to both systems as a string |
| Events delayed >1 hour | Check server processing queue, batch vs real-time sending | Switch from batch to real-time sending; reduce queue processing interval |
| Duplicate CAPI events | Server sending the same event multiple times (retry logic, queue issues) | Implement idempotency checks; use event_id to prevent re-sending |
