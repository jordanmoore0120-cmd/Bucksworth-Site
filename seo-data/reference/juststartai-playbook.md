# JustStartAI (CI Web Group community) — Bucksworth Playbook

Source: Viktor read all 44 posts in the JustStartAI Circle sections `ai-tools`, `playbooks` and `ai-skills-playbooks` (Jennifer Bagley / CI Web Group), 2026-09-30, at Jordan's request. This file is a **condensed, Bucksworth-adapted** distillation, not verbatim. It adds to `ci-web-group-ai-era-guide.md` and doesn't repeat it. Key source posts: *The Pendulum Is Swinging (2026 strategy)*, *The Entity Imperative*, *The Contractor's Strategic Guide to Owning the AI-Era Web*, *Mastering AI-Powered Brand Authority*, *AI-Powered Playbook for Home Services*, *Neighborhood Trust Map*, *AI Search Blogging & Social*.

**House rules override the community.** Never quote prices or deals in blog/site copy, never write "no contract" and never mention contracts, never advertise AC/HVAC/plumbing, never change tracking tags without Jordan's OK. The posts recommend publishing price ranges and Offer/PriceSpecification schema with real numbers. **We don't.** Cover cost as *factors* only. Ignore ServiceTitan/HCP-specific items (we run FieldRoutes).

Owner tags: **[Claude]** = site/blog code and content. **[Viktor]** = data, ads, GBP, bots, monitoring. **[Jordan]** = decision or team action.

---

## 1. The 5-signal test (every blog post, page, GBP post and social post) [Claude][Viktor]
AI engines and Google trust a business when the same entity shows up consistently with proof. Check each piece of content against these 5 signals. Aim for 4–5; it must hit at least 2. Zero = noise, don't publish.
1. **Identity:** same name, same description, same service taxonomy as the entity definition.
2. **Freshness:** proof we're operating now (real recent job, current season). Never fake it.
3. **Topical authority:** pest/termite/scorpion/weed depth, not breadth.
4. **Geographic specificity:** a named city/neighborhood/ZIP we actually serve.
5. **Citation:** at least one quotable, factual, specific assertion an AI could lift (e.g. "Bark scorpions become active when night temperatures stay above ~70°F").

In the run summary, list which signals the post hits.

## 2. Entity consistency ("alignment coefficient")
- **[Claude]** Keep one machine-readable entity definition. Use the facts already on the site: name, founders, founding year, HQ/GBP address, service taxonomy, service areas, phones, voice. Content, schema and llms.txt must all match it word for word. Don't invent certifications, counts or awards.
- **[Claude]** Schema **bidirectionality**: every active social profile goes in the `sameAs` array of the LocalBusiness/PestControl schema, and every profile bio links back to the root domain. NAP must be identical everywhere.
- **[Viktor]** Audit the NAP across GBP, LSA, Apple Business Connect, Bing Places, Yelp, BBB, Angi, Nextdoor and Facebook. AI engines cross-reference these and penalize mismatches. Use Whitespark Listing Management for citations, never Yext.
- **[Jordan]** Use one phrasing everywhere: site, GBP, ads, social bios. Don't mix "pest control Mesa" / "bug guys" / "home protection experts" for the same service.

## 3. AI search / AEO / GEO
- **[Claude]** For AEO answer blocks: 40–60 word direct answer under each H2, the phone number near the top answer, and Speakable schema on answer pages. (Already in STRATEGY §4.)
- **[Claude]** Format for AI parsing: the H2/H3 hierarchy mirrors real questions; use real comparison **tables** (treatment A vs B, DIY vs pro, sign-by-sign ID), FAQ schema on Q&A, HowTo schema on procedures, real photos with descriptive alt text, and a YouTube embed where we have a relevant video. Posts with embedded video reportedly get much higher engagement and dwell time.
- **[Claude]** FAQ rich results were removed from Google Search (May 2026). **Keep FAQ schema anyway**, because AI engines still read it.
- **[Claude]** Structure posts as: answer/key takeaways first → detail → "what our technicians see" (expert commentary, including a seasonal outlook) → practical steps → FAQ.
- **[Claude]** GEO decision-stage content wins pre-sold, higher-ticket customers: "how to choose a pest control company in {city}", "what to expect from termite treatment", "what affects the cost of scorpion control" (factors only).
- **[Viktor]** Track the **AI Reference Rate**: monthly prompts to ChatGPT/Perplexity/Gemini/AI Overviews, e.g. "best pest control in {city}", "who handles scorpions near me". Record whether Bucksworth and competitors are cited in `seo-data/ai-visibility.json`. Turn the gaps (competitor cited, we aren't) into queue items.
- **[Viktor]** Treat leads from AI platforms (chatgpt.com, perplexity.ai referrers, "found you on ChatGPT") as their own attribution channel.
- Context: 58.5% of US Google searches end without a click; the figure is 83% on AI Overview queries and 93% in AI Mode. AI engines recommend local businesses far less often than the map pack (Google 35.9%, Gemini 11%, Perplexity 7.4%, ChatGPT 1.2%). Being the cited source is the new page one.

## 4. Content program
- **[Claude]** **Information gain + first-hand experience** on every post (already mandatory). Use AZ-specific facts that AI can't fabricate: monsoon timing, caliche/desert soil, stucco and block-wall entry points, East Valley vs Tucson differences.
- **[Claude]** **Hub-and-spoke pillars.** One comprehensive pillar per core service (scorpion, termite, general pest, weed). Each carries 2–4 embedded *real* job stories (photo + outcome; Review/ImageObject/Place schema only if real) and links to every spoke and money page. Spokes = single-question answer pages that link up.
- **[Claude]** **Cadence** (the community's evidence: daily consistency → contractors went from 11 of 15 and 9 of 12 articles ranking within weeks). Ours: 3 posts/week via the routine, never skipping. Refresh pillar/money pages quarterly with *real* new info; add Q&A troubleshooting pages weekly from `question-keywords.json`.
- **[Claude]** Write "pulse" content tied to real local events, e.g. monsoon termite swarms, first 70°F nights (scorpions) and pre-emergent windows. Time seasonal content about 60 days ahead of the season.
- **[Jordan][Viktor]** **Original data** is the strongest citation magnet: publish a Bucksworth "Arizona Scorpion/Termite Season Report" from anonymized FieldRoutes service data (counts by month/city, no PII), then pitch it to local press.
- **[Claude]** **Avoid** keyword stuffing, content written purely for the algorithm, and recycled generic answers. AI systems increasingly detect these.

## 5. Technical / schema / risk [Claude]
- **Doorway risk:** Google's March 2026 spam update hit templated city pages hard; some sites lost 80%+ of their indexed pages in a week. Our 35 city × service pages must each carry genuinely local content (neighborhoods, housing stock, local pest pressure, nearby cities). Flag any page that only differs by a swapped city name.
- **Keep the URL count lean.** Viktor watches GSC "Crawled – currently not indexed". If it grows, consolidate or noindex thin URLs instead of adding more.
- **Core Web Vitals:** INP (not FID) plus mobile LCP under 2.5s on real 4G. Pages over 3s lost materially more traffic in the 2026 core update. A slow landing page also lowers Google Ads Quality Score and raises CPC.
- **AI agents:** Google-Agent, ChatGPT-User, Claude-User and Perplexity-User are user-triggered fetches that bypass robots.txt. Never block them in the firewall or rate limiter. Serve clean semantic HTML with no JS-only content for key facts.
- **Schema types in use:** LocalBusiness/PestControl, Service, FAQPage, HowTo, BreadcrumbList, Speakable, ImageObject, and Review only for real reviews. **No Offer/PriceSpecification with prices.**
- **Back-button hijacking:** third-party scripts/widgets that hijack the back button now violate Google spam policy (enforced from June 15, 2026). We're responsible for what embedded scripts do.
- **Legal:** WCAG 2.2 AA built in (no overlay widgets), a current accessibility statement, and a privacy policy/ToS that match what the site actually does. Contact/booking forms must be real labeled forms with no CAPTCHA/login wall.
- Our headless Next.js stack is the architecture the community recommends. Keep it; no WordPress/plugin regressions.

## 6. Local / off-page / GBP
- **[Viktor]** **Every map/AI platform is required**, not just GBP: Apple Business Connect (Siri/Apple Maps), Bing Places (feeds ChatGPT), Yelp and Thumbtack (AI booking partners), Nextdoor. Claim and complete each one with identical NAP.
- **[Viktor][Jordan]** **Reviews:** real, recent, detailed reviews that *name the service and the city* are a top signal for GBP, LSA and AI. Automate the post-job review request, use a one-click "Get Reviews" link, and track velocity and recency, not just the total count.
- **[Jordan]** GBP now shows a **Social Media Updates carousel** pulled from Facebook/Instagram. Posting cadence on those platforms directly feeds GBP visibility.
- **[Jordan][Viktor]** Pursue third-party citations over raw backlinks: local AZ press, chamber, sponsorships and charity, BBB/Angi (for the citation, not the clicks), and journalist platforms (Featured/HARO, Qwoted, Source of Sources). Prioritize outlets that AI engines already cite. Non-promotional expert answers on Reddit/Nextdoor feed Google's "Expert Advice" panel.
- **[Jordan]** Structured cross-sell partnerships with complementary local trades (e.g. pest + roofing "entry-point" bundle, pest + real-estate agents). Partner referrals close at ~65% vs ~40% for cold leads.

## 7. Social (feeds GBP + AI citations) [Viktor social bot][Jordan]
- **Captions:** the first 10–15 words are search-style service + city ("Scorpion treatment in Queen Creek, AZ"), the middle is proof/detail, and the end is a CTA + **deep link to the matching service/city page**, never the homepage.
- Bio links go to an owned `/links` page on getyourbucksworth.com, not Linktree. UTM-tag every link by platform + content type + campaign. No third-party shorteners.
- **Mix:** weekly Q&A post (real search question), weekly service spotlight, job-completion posts with neighborhood named, team/credential posts and review highlights. At least 3×/week.
- Real field photos only (no stock, no AI fakes of jobs). Name files service-city (`scorpion-treatment-mesa.jpg`). Meta's Segment Anything is a free tool for cutting technicians out of photos to make branded "Meet the Team" and testimonial graphics.
- No prices, financing or "regularly $X" in social graphics.

## 8. Ads / LSA / lead handling
- **[Viktor][Jordan] LSA ranking factors:** fast answer (<60s) on calls and messages, lead response and booking rate, review velocity + recency, a precise service area (don't overreach), exact category match, current license/insurance/background checks, and marking every lead's status. **Never pause the LSA budget**: reactivation causes a 2–4 week ramp penalty. LSA reviews come from the GBP, so a complete, verified GBP is mandatory.
- **[Viktor]** Ads can now show inside AI Overviews (AI Max/PMax/broad). Quality Score still depends on landing page speed, relevance and experience, so a weak landing page silently raises CPC.
- **[Jordan][Viktor]** **Speed to lead:** contact within 60 seconds (up to 7× conversion vs after 5 min). AI does the instant first response and qualification; a human takes over for complex or emotional conversations. Follow TCPA for any automated text or call.
- **[Viktor]** Measure **cost per booked customer and revenue by channel** (FieldRoutes closed jobs), not cost per lead or traffic alone. Hold a monthly ROI review and cut the losers.
- **[Viktor]** Test **Neighborhood Trust Map** creative. A map of real customer pins near the prospect (zoomed to a neighborhood with strong density, approximate locations only, **no names or addresses**) works as social proof on the site and in geo-targeted Meta ads. A/B test it with vs without the map. Never use an AI image generator for maps.

## 9. Operating principles for Claude + Viktor
- Build order: clean data → documented process → automation → AI. AI scales whatever it's given, including chaos.
- Written operating manual first (for us, STRATEGY.md + CLAUDE.md + this file). Agents treat it as binding.
- Ground answers in our own docs (RAG), never guesses. Never invent a price, stat, job or credential.
- Isolate agents with system access, and never paste credentials into chats or agent configs.

## 10. Backlog generated from this review (ranked by cost-per-lead impact)
1. [Viktor/Jordan] LSA hygiene: status updates several times a day, <60s response, no budget pauses, reviews naming service + city.
2. [Claude] Landing page / money-page speed + relevance pass (Quality Score → CPC).
3. [Claude] Doorway audit of the city × service pages, so each one has unique local content.
4. [Viktor] AI Reference Rate baseline → `seo-data/ai-visibility.json`, plus gap topics for the queue.
5. [Claude] Scorpion + termite pillar pages with real job stories and hub-and-spoke links.
6. [Viktor] Apple Business Connect / Bing Places / Yelp / Nextdoor NAP completeness check.
7. [Claude] `sameAs` bidirectionality + an owned `/links` page (needs Jordan's OK on anything touching tracking).
8. [Jordan/Viktor] Neighborhood Trust Map (PII-safe) for the site + a Meta test.
9. [Jordan/Viktor] Arizona Scorpion Season Report from anonymized FieldRoutes data → PR pitch.
