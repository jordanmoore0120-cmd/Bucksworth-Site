---
name: bucksworth-rules
description: Jordan Moore's standing rules for ALL Bucksworth marketing work — website, blog, SEO/AEO/GEO, Google Business Profile, Google Ads/LSA, Meta, social, PR and email. Read before any customer-facing copy or any change to an external system.
---

# Bucksworth standing rules (from Jordan Moore, CEO)

These are Jordan's own decisions, collected from Slack. They outrank any blog
tactic, playbook or "best practice". If a rule seems to block good work, ask
Jordan in Slack. Don't work around it.

## 1. Truth: never invent anything
- Only state facts you can trace to a source: the repo (`content/`, `src/lib/`), the
  knowledgebase (`knowledge/` once it exists), a live API result, or Jordan's own
  words. If you can't trace it, leave it out or ask.
- Never invent a job, a customer quote, a review, a reviewer's city, a statistic, a
  before/after, an award, an exact customer count, or a year other than founded 2013.
- Never infer "not ranking" or "zero" from an empty or failed data pull. Empty data
  means the source is broken until you prove otherwise.
- Nothing is done until it's verified live (HTTP 200 on www, read-back from the API,
  a screenshot). A commit or a "success" response is not proof.

## 2. Services: what we sell and promote
- **Paid ads:** pest, termite, scorpion, rodent and weed control ONLY. Never pay to
  promote AC/HVAC or plumbing.
- **Organic content (site, blog, social, GBP):** pest/termite/weed first. AC and plumbing
  are allowed occasionally, about 1 piece in 6, never most of the content. [Jordan 2026-10-06]
- GBP: Phoenix = pest, termite, scorpion, weed. Tucson = pest + lawn/weed only. Never
  AC/HVAC/plumbing on GBP. Never mowing, trimming, landscaping or yard cleanup (we
  don't do it).
- Sales reports count net-new customers only and exclude builder termite renewals.

## 3. Copy rules (site, ads, GBP, social, email)
- **NEVER say "no contract" or "no long-term contracts."** Bucksworth uses contracts.
  Use: "100% Money Back Guarantee *Terms and conditions apply".
- No prices, price ranges or price schema unless Jordan approves that exact use. No
  "regularly $X".
- Deals: one deal per page/ad group/post, never in a headline or first line. Never
  pair $150 off with a $99 start, or 75% off with $39/mo. Weed deal = "2 treatments
  for 1 price".
- Termite: no warranty specifics. Never "builders trust". Never "Arizona's #1".
- "Google Guaranteed" is TRUE (we have the LSA badge). Never remove or flag it.
- No soft openers. StoryBrand hero tone: the customer is the hero, we're the guide.
- Content ban list: "in today's fast-paced world", "when it comes to", "look no
  further", "nestled in", "trust the experts", "peace of mind".
- Customer-facing wording that is new or unusual needs Jordan's OK before it goes out.

## 4. Contact details (only these)
- Phoenix (480) 422-8388 · Tucson (520) 284-9930. Any other number is a bug.
- `info@getyourbucksworth.com` for PR, listings and outreach. `customercare@` for upset
  customers. Never `jordan@` publicly and never Jordan's cell.
- Phoenix branch: 2073 W Houston Ave Ste 101, Apache Junction, AZ 85120.
- Tucson branch: 3430 E Sunrise Dr Suite 180, Tucson, AZ 85718.

## 5. Google Business Profile: never touch the name
- Phoenix listing name = "Bucksworth Home Services". Tucson listing name =
  "Bucksworth Services" (matches the building sign). NEVER change either name.
  Changing it once triggered re-verification.
- Never change categories, hours, services, service areas or description without
  Jordan's explicit OK. Posts, photos and review replies are fine.

## 6. Systems and approvals
- **Tracking tags** (GA4 `G-ZDL1V7HMVV`, Google Ads `AW-16665649274`, Meta pixel
  `1745744873282534`): never add, remove, defer or lazy-load them without Jordan's OK.
- **URLs:** never delete a page or change a slug. Any move needs a 301 in the same commit.
- **Google Ads/LSA:** any change to spend, bids, budgets, keywords, ads or status needs
  Jordan's approval of the exact change first. The $10K/month cap includes LSA. No
  "let's scale" pitch until tracking has been clean 2–3 weeks and cost per booked
  customer is known.
- **Ad landing pages (/lp/\*):** options → full-page proofs → Jordan approves → copy.
  Headline 1 = the DataForSEO search term, line 2 = creative twist. Call button only.
- **Demand comes from data:** keywords and topics come from DataForSEO / Search
  Console data, not from opinion. Test hooks, deals, pages, photos and video.
- **Creative:** real Arizona field photos. No stock-looking AI photos on GBP, no
  competitor logos, no Jordan Air photos, no old black buck triangle logo.
- **Performance:** every page type ≥90 mobile Lighthouse. /lp/\* never goes live below 90.
- **Mass texting:** never from more than one system at once.
- Never use credentials pasted in chat. Never commit secrets.

## 7. Reporting to Jordan
- Post results to Slack `#bucksworth-digital` (C0B5WFWFE92). Lead with the result in
  one bold line. Use service and page names, not IDs. Plain business English.
- Give your call with the data ("Do X, because Y"), not a menu of options.
- Blocked? Say so the same day, with the exact reason. Never go silent.
- Every bug Jordan finds by hand becomes an automated check the same day.
