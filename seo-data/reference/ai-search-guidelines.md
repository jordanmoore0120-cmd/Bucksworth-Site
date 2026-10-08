# AI-search + ads guidelines (official sources) — Bucksworth

Owned by Claude (reviewed every Monday, Wednesday and Friday per CLAUDE.md §0 check 6). Last full review: **2026-10-02**; updated **2026-10-05**. Every rule below comes from an
official engine/ads document (URL given). **Official docs outrank blog tactics**: if a blog or
community tip contradicts a rule here, this file wins. Jordan's house rules (CLAUDE.md §3) still sit
above everything: no prices/deals/contract terms in site copy, never "no contract", don't promote
AC/HVAC/plumbing, don't break URLs, don't touch tracking tags.

---

## 1. Google — AI Overviews / AI Mode / Search

Source: https://developers.google.com/search/docs/appearance/ai-features (read 2026-10-02)

- DO treat AI Overviews/AI Mode as normal SEO. Google: "no additional requirements … nor other special
  optimizations necessary." A page must be indexed and snippet-eligible to be a supporting link.
- DO make pages easy to reach through **internal links**, keep important content as **text** (not only in
  images/video), support it with real photos/video, and keep **structured data matching the visible text**.
- DO keep the Google Business Profile information current — Google lists this as an AI-features factor.
- DON'T build "AI files" or special markup to chase AI features. Google: you don't need new
  machine-readable files, AI text files or special schema. Keep `llms.txt` accurate but don't spend effort on it.
- DON'T add `nosnippet`, `data-nosnippet`, `max-snippet` limits or `noindex` to money pages — those are the
  controls that remove content from AI features.
- DO expect query fan-out: AI answers pull from pages that answer sub-questions (cost factors, how to
  choose, seasonality, what to expect). Cover those sub-questions on the money page or a linked post.
- AI Overview traffic is reported inside Search Console "Web" performance; a dedicated **Generative AI
  performance report** is live for all sites since 2026-08-31
  (https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports). Use it, not guesses,
  to judge AI visibility.

Helpful content — https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- DO write people-first content showing first-hand experience (our techs, our jobs, local conditions).
- DO answer "Who/How/Why": clear author (Jordan Moore byline), how it was made, made to help customers.
- DON'T write for search engines first: no padding to a word count, no topics outside our expertise,
  no fake "updated" dates (don't change a date without substantial changes).
- **Main content quality (doc updated 2026-10-02).** Raters judge the main content (text, photos/video,
  tools, reviews, tabbed sections, titles/headings) on four attributes. Check every page/post against them:
  - **Effort**: real human work (our job photos, tech observations, local data). Auto-generated pages or
    bulk AI text "without manual oversight or curation" = little to no effort. Citing sources doesn't replace it.
  - **Originality**: something not already on other sites. Test: swap "Bucksworth" for a competitor and the
    city for another city. If the page is still just as true and useful, it's commodity content; add our own facts.
  - **Talent/skill**: clear writing, real photos, working page tools.
  - **Accuracy**: pest/termite/chemical-safety claims touch health and home value, so treat them as YMYL:
    must be accurate and match expert consensus (AZ Dept of Ag, UA Extension). No invented stats.

Generative AI content — https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- DO manually fact-check and review **all** AI-drafted content before publishing: body claims, `<title>`,
  meta description, alt text and structured data (Google calls this "critical", doc updated 2026-10-02).
  Generative models predict words; they don't retrieve facts.
- DO consider a short "how this was made" note where automation was used (e.g. "written with AI assistance,
  reviewed by our licensed team"), only if it's true.
- DON'T generate many pages without added value — that is **scaled content abuse**.

Spam policies — https://developers.google.com/search/docs/essentials/spam-policies
- DON'T create city-swap pages/posts that differ only by the city name (doorway + scaled content abuse).
  This is why one question = one post (CLAUDE.md §3).
- DON'T host third-party content to borrow our domain's reputation (site reputation abuse).
- DON'T use hidden text/links, keyword stuffing, sneaky redirects, or back-button hijacking
  (https://developers.google.com/search/blog/2026/04/back-button-hijacking).
- DON'T buy/sell links or run link exchanges; PR/backlinks must be earned.
- Spam updates: September 2026 spam update started 2026-09-24, second wave ~09-30, still rolling out on
  2026-10-05 (https://status.search.google.com — Ranking). Don't react to rank swings until it completes.
  Google (Search Central Live, Oct 2026, via seroundtable.com/google-search-spam-updates-ai-42226.html):
  **scaled content is now a bigger problem than link spam**, spam is caught with AI, and quality is judged
  **per page, not per domain**. A template that's useful on 100 pages can be thin on 1,000. For our
  /{city}-az/{vertical}/{sub} pages, every city page needs city-specific main content, not just the city name.

Structured data — https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- DO mark up only what users can see on the page; DON'T mark up hidden, misleading or irrelevant content.
- **FAQ rich results are no longer shown in Google Search (deprecated 2026-05-07)**
  (https://developers.google.com/search/docs/appearance/structured-data/faqpage). Keep visible FAQ
  sections because they help users and AI answers; FAQPage markup is optional and must match the visible
  Q&A exactly. Don't add FAQ blocks just for rich results.
- LocalBusiness (https://developers.google.com/search/docs/appearance/structured-data/local-business):
  name/address/phone/hours must match the GBP exactly; use the most specific type (PestControl).
  DON'T add self-serving review/aggregateRating stars about our own business expecting rich results,
  and never put prices/priceRange values in schema (house rule).
- Article markup: author must be a real person (Jordan Moore) with a `url`; dates must be honest.

## 2. Google Business Profile

Source: https://support.google.com/business/answer/3038177 (read 2026-10-02)

- DO use the real-world name only ("Bucksworth Home Services"). DON'T add keywords or cities to the name.
- Service-area business: hide the address unless the location is staffed and receives customers during
  posted hours. Virtual offices aren't eligible; a co-working/exec-suite office needs permanent signage,
  staff during business hours and must receive customers.
- Service area should stay within ~2 hours' drive of the base. One profile per location with separate staff.
- Use a local phone number per location (PHX (480) 422-8388, TUC (520) 284-9930) and a website URL that
  represents that location.
- Description: services + history; no URLs, no promos/prices, no keyword lists.
- Content policy (https://support.google.com/contributionpolicy/answer/7400114): no fake engagement,
  no incentivized or gated reviews, no asking reviewers to name employees with rewards attached.

## 3. Microsoft Bing / Copilot

Source: https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a (page is JS-only; read via
search summary 2026-10-02 — re-verify wording before quoting)

- Bing + Copilot use the same crawl/index/rank foundation; normal SEO = Copilot eligibility.
- DO keep the XML sitemap complete with accurate `lastmod`; DO notify changes quickly via **IndexNow**
  (https://www.indexnow.org/documentation). The site has no IndexNow key yet (see site-tasks).
- DON'T use `NOCACHE`/`NOARCHIVE` on pages we want cited — they limit Copilot answers/citations.
- Bing Webmaster Tools has an **AI Performance** report (Copilot citations by URL) — check it monthly.

## 4. ChatGPT search (OpenAI)

Sources: https://platform.openai.com/docs/bots ; Publisher FAQ https://help.openai.com/en/articles/12627856
(FAQ blocks scripts; read via search summary 2026-10-02)

- DO keep `OAI-SearchBot` and `ChatGPT-User` allowed in robots.txt and allowed by the CDN/firewall.
  `GPTBot` (training) is a separate choice and doesn't affect ChatGPT search.
- ChatGPT referrals arrive with `utm_source=chatgpt.com` — read them in GA4; no tag changes needed.
- ChatGPT local answers lean on third-party listings/reviews (Yelp, BBB, directories): keep NAP identical
  everywhere (Whitespark Listing Management).

## 5. Perplexity

Source: https://docs.perplexity.ai/guides/bots (read 2026-10-02)
- DO allow `PerplexityBot` (search index, not training) and `Perplexity-User`; whitelist their IP ranges if a WAF is added.

## 6. Claude (Anthropic) and Apple

Sources: https://support.claude.com/en/articles/8896518 ; https://support.apple.com/en-us/119829 (read 2026-10-02)
- DO allow `Claude-SearchBot` and `Claude-User` (search visibility). `ClaudeBot` = training only.
- DO allow `Applebot` (Siri/Spotlight search). `Applebot-Extended` only controls training use.

Robots.txt status (live check 2026-10-05): Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot,
Claude-SearchBot and Applebot are all allowed (only `/api/` disallowed). **Never add a blanket
"block AI" rule or CDN setting** — Googlebot/Bingbot/Applebot are mixed-use crawlers and a hard block cuts search too.

## 7. Google Ads, AI Max, ads in AI Overviews

Sources: https://support.google.com/google-ads/answer/16297775 ; https://support.google.com/google-ads/answer/15910366 (read 2026-10-02)
- Ads can show above/below/inside AI Overviews in the US from existing Search/PMax campaigns; ads inside
  the AI Overview must match both the query and the AI Overview content. → Landing pages should answer the
  question directly (answer-first) so the ad and page match the AI context.
- AI Max (search-term matching, text customization, **final URL expansion**) can send traffic to pages we
  didn't choose and rewrite headlines. If enabled, exclude non-pest/weed URLs and review asset text against
  house rules (no "no contract", no AC/plumbing, no deal pairing). Changes need Jordan's approval.
- Advanced Verification (https://support.google.com/adspolicy/answer/7167922): if an ad or landing page
  mentions a **guarantee or warranty, the same page must link to its terms, exclusions and how to claim**.
  Don't claim response times we can't always meet ("arrive in 30 minutes").
- **Automated promotions (opt-out, starts 2026-10-12):** Google Ads will pull coupons/deals from our website
  into Search and PMax campaigns with location assets that have no promotion asset. That can put a site deal
  on an ad we didn't approve, or pair two deals. Keep it OFF: Assets → Account-level automated assets →
  Advanced settings → turn off Automated Promotions (needs Jordan's OK). Source:
  https://support.google.com/google-ads/answer/16049135 + seroundtable.com/google-ads-automated-promotions-october-12-42223.html

## 8. Local Services Ads

Sources: https://support.google.com/localservices/answer/6245891 (now "Local Services Ads requirements",
updated 2026-07-31) ; https://support.google.com/google-ads/answer/17213585 (read 2026-10-02)
- Bucksworth is Google Guaranteed via LSA. Keep "Google Guaranteed" wording consistent and true; don't
  imply Google endorses us or that we work for Google.
- Everything shown in LSA must be accurate: license, service area, services. Only list areas/services we are
  licensed for and actually serve; keep the business name the same in all customer communication.
- Pricing honesty: never quote low and charge more on arrival; disclose any trip/diagnostic fee upfront.
- **LSA → Performance Max migration:** pest control is in the first US wave (from Aug 2026). The admin gets an
  email 14 days before the migration date. **Export LSA performance history before migration** — old
  reports do not carry over. Name/address then sync one-way from GBP; a name/address change triggers a
  24–48h verification review during which the campaign can pause.
- Missed calls: business-hours calls that ring >20 s unanswered are billable from 2026-10-01.
