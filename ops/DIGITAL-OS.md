# Bucksworth Digital OS — the agentic marketing machine (Claude)

Owner: Jordan Moore. Built 2026-10-07 on Jordan's order: *"All marketing, all advertising, all website,
all SEO, all GMB — all of it should be agentic"*, modeled on CI Web Group's Hydra OS
(knowledge base + central brain + a coordinated network of specialist agents).

**Claude runs this machine and teaches itself. Viktor is not in the loop.** No one feeds it data, tasks or
opinions. Claude pulls its own data (Zapier MCP), decides, ships, verifies, measures the result, and
rewrites its own playbooks from what worked (§8). Jordan's directives come straight from Jordan (Slack via
Zapier if connected, or the routine prompt). Viktor's old `seo-data/` files and `daily-brief.md` are legacy
and will stop once the agents' own pulls are proven. Don't depend on them.

Goal: Bucksworth ranks top 3 in the map pack, on page 1 and is cited by AI search
(Google AI Overviews/AI Mode, ChatGPT, Perplexity, Copilot, Claude) for every profitable
service × city, and that visibility turns into **phone calls**. East Valley/Pinal comes first.

---

## 0. The two laws (Jordan 2026-10-07). Read before anything else

**Law 1: Demand and traffic, or it doesn't get done.** Every piece of work must name the search demand or
traffic/call leak it serves. That means a DataForSEO keyword and its monthly volume (`Phoenix,Arizona,United States` or the
city), GSC impressions/clicks for the page, or calls/bookings at stake. No number means no task, except P0 breakage that
customers can see. Each keyword maps to exactly ONE URL (no cannibalization). The director ranks work by
**expected calls = demand × how far we are from top 3 × close rate of the service**. A guideline, a best practice or
a "nice idea" is never a reason on its own. It only shapes HOW a demand-backed task is done.

**Law 2: The obvious first, keep it simple.** A dead button, a menu that implies a service we don't sell (mowing,
blowing, trimming, landscaping), a broken or redirected internal link, a slow mobile page or a wrong phone number beats any
clever SEO project. `site-qa` finds these every Morning and Evening (`scripts/site-qa.mjs`) and they are P0.
Fix the smallest thing that solves the problem. Don't build frameworks or new systems when a one-line fix works.

## 1. The four layers (Hydra pattern, mapped to what we have)

| Hydra layer | Bucksworth equivalent |
|---|---|
| **Knowledgebase (HBIS)** | `knowledge/`: business facts, services, prices and rules, cities, proof, reviews, JustAI/CI Web Group playbooks. Every claim on the site, GBP, ads and AI answers must trace to it. |
| **Signals in** | Zapier MCP: GSC, GA4, Google Ads/LSA, GBP (both listings), Facebook, Instagram and DataForSEO (SERP, map pack, AI Overview, LLM mentions, backlinks). Also the live site itself (rendered HTML, status codes). |
| **Central brain** | `ops/state/`: `board.json` (one shared task board), `signals.json` (latest numbers), `run-log.md` (what every agent did, with commit SHAs). Agents read it before acting and write to it after. |
| **Agents (actions out)** | `.claude/agents/*.md`: the **director** plus 10 specialists below, each with one domain, its data and its guardrails. |
| **Presentation/edge** | Next.js on Vercel from `main`. Every change goes through `scripts/url-guard.mjs prepush` + `npm run build` before push, then gets a live check after deploy. |

## 2. The agents

| Agent | Hydra twin | Owns | Can ship without asking |
|---|---|---|---|
| `director` | Sarge | Reads signals and the board, picks the day's work, dispatches the agents, writes the run report | board edits, run report |
| `intel` | Wolverine | Pulls every signal source, detects anomalies (rank or traffic drops, call drops, 404 spikes, dark ads), writes `signals.json` and opens board tasks | data files, board tasks |
| `site-guardian` | Goodspeed | **URL and page-identity protection** (§3), migration repair, redirects, Core Web Vitals, security, uptime, crawlability (robots, sitemap, canonicals, schema validity) | 301s, sitemap/robots/schema fixes, perf fixes |
| `seo-content` | Groot | Service×city pages, blog, on-page SEO, schema, AEO/GEO answer-first content, llms.txt, internal links. Search intent and cannibalization checks come before every page | site content that passes guards |
| `ai-visibility` | (Cortex) | Tracks AI-search citations and mentions, reviews the official AI-search guidelines **Mon/Wed/Fri**, keeps `seo-data/reference/ai-search-guidelines.md` and the `aeo-geo` skill current | guideline file, skill updates |
| `gbp-reputation` | Buttercup | Both GBP listings: posts, photos, review replies, review velocity, NAP consistency, brand safety | posts, photos, review replies (never listing fields) |
| `authority` | (Synapse) | Domain authority: lost-link reclamation, local links (chambers, sponsors, AZ media), citations, digital PR, unlinked mentions | research, drafts. **Sends need Jordan** |
| `ads` | (Pulse) | Google Ads, LSA, Meta: performance, search terms, waste, landing-page fit, tracking health | analysis and drafts. **Every write needs Jordan's Approve button** |
| `competitor` | Vader | Competitor rankings, content, review counts, links and AI citations. Content gaps go to the board | board tasks |
| `knowledge` | Yoda | `knowledge/` base, JustAI / CI Web Group best practices, Jordan's rules. Validates every agent's output against the business | knowledge files |
| `site-qa` | (QA) | The customer's eyes: clicks every CTA on mobile + desktop, reads every menu/dropdown/form option against `knowledge/services-truth.json`, and runs the common-sense internal-link rules. FAILs become P0 tasks | board tasks, `scripts/site-qa.mjs` checks |
| `cro-dev` | Neo | Conversion: call buttons, page speed, forms, A/B tests on hooks/deals/pages/photos (never on keyword demand) | UI changes that pass guards + perf budget |

## 3. Rule #1: never make an existing page look NEW (Jordan 2026-10-07)

The May 2026 WordPress → Next.js migration changed URLs, dates and structure all at once. Google
treated the new site like a brand-new business, and old backlinks and authority were lost. Every agent obeys
`.claude/skills/page-identity/SKILL.md`. In short: the URL, canonical, published date, core topic/H1 and
schema identity of an existing page stay fixed. Pages are improved in place, a little at a time. Dates and
sitemap `lastmod` change only when content really changes. `scripts/url-guard.mjs prepush` enforces the
mechanical parts, and a FAIL means do not push.

## 4. The loop (every run)

1. **Verify state.** Follow CLAUDE.md §0: git state, URL GUARD items, connector health.
2. **Sense.** `intel` pulls live data and updates `ops/state/signals.json`, then opens or updates tasks on `board.json`.
3. **Decide.** `director` ranks open tasks by the two laws (§0): customer-visible breakage and URL/identity first
   (site-qa FAILs, dark ads, tracking), then expected calls (demand × gap to top 3 × close rate) by service×city, East
   Valley/Pinal first. Tasks without a demand/traffic/calls number are sent back to their owner, not worked.
4. **Act.** Dispatch the owning agent for each task (Task tool → subagent). Agents ship directly where §2 allows.
   Where a human gate applies, they draft and post the ask.
5. **Verify.** Every shipped change is checked live: page 200, rendered HTML correct, schema valid, post
   visible, redirect single-hop. Unverified = not done.
6. **Learn.** Append to `ops/state/run-log.md` (agent, task id, what changed, commit SHA, live
   proof). Close board tasks with evidence. Put any reusable lesson into the owning skill or `knowledge/`.
7. **Report.** Send a short run summary to Slack #bucksworth-digital: shipped, verified, blocked, and anything needing Jordan.

## 5. Routines (claude.ai → Code → Routines, repo Bucksworth-Site, all Zapier connectors on)

| Routine | When (AZ) | Prompt file |
|---|---|---|
| Bucksworth OS — Morning | daily 6:00 AM | `ops/routines/morning.md` |
| Bucksworth OS — Midday | daily 12:00 PM | `ops/routines/midday.md` |
| Bucksworth OS — Evening | daily 6:00 PM | `ops/routines/evening.md` |

The existing "Bucksworth Site + Blog — DAILY" routine becomes Morning (swap its prompt). Each
routine starts the `director`, which dispatches the agents for that slot. If the plan's daily
routine cap is lower, Morning alone still runs the full loop and the others catch up.

## 6. Human gates (from `bucksworth-rules`, never bypassed)

- Ads/LSA/Meta writes (budgets, bids, keywords, ads, pages tied to ads): Jordan's Approve button.
- New customer-facing deals, prices or claims; tracking tags; GBP listing fields (name, categories,
  hours, services, areas, description); outreach emails and paid placements.
- Deleting any page or redirect, changing any URL, mass rewrites of ranking pages: never. These are not "ask first" items.

## 7. Viktor bot → Claude agent handover

Viktor's old digital bots move to Claude agents one at a time. A Viktor bot is retired only after
the Claude agent has run its job cleanly for 2 weeks **and Jordan approves**.
| Viktor bot | Claude owner |
|---|---|
| seo-intel, search-intelligence, keyword-gap-analyzer | intel / ai-visibility |
| site-gatekeeper, site-health-guardian, redirect-manager, pagespeed-monitor, ada-compliance | site-guardian |
| blog-engine, city-page-builder, content-optimizer, content-freshness, internal-link-optimizer, seo-optimizer | seo-content |
| gbp-content-engine, gbp-review-responder, gbp-listing-optimizer, nap-consistency-checker | gbp-reputation |
| pr-backlink-engine, backlink-monitor, citation-builder | authority |
| google-ads-bot, ads-dark-alert | ads |
| competitor-monitor, map-pack-attack, ws-grid-bot, local-seo-whitespark | competitor / intel |
| central-brain | director + knowledge |
| Stays with Viktor (Claude can't reach FieldRoutes/phones): LSA lead entry, lead/sales reporting, Buck Bot, time tracking | — |

## 8. Self-learning loop (the machine improves itself; no one feeds it)

1. **Every change is an experiment.** When an agent ships something that should move a metric (new or improved page,
   schema, GBP post type, internal links, a link won, an ad change), it adds an entry to `ops/state/experiments.json`:
   id, agent, URL/asset, what changed, hypothesis, metric (GSC position/clicks, calls, AI citation, map-pack rank),
   baseline value, check dates (+14d, +28d).
2. **intel scores them.** On each check date it pulls the metric live and records the result: win, flat or loss.
3. **Weekly retro (director, Monday).** Read the scored experiments and write `ops/state/learnings.md`: what moved
   rankings, calls and citations, what didn't, and why. Then **edit the playbooks themselves**: the owning
   `.claude/agents/*.md` and `.claude/skills/*`. Promote what wins, ban what loses, and note each edit with a dated line.
   This is how the agents get better every week without a human writing their instructions.
4. **Every bug becomes a check.** A problem found twice gets an automated check the same day (in `scripts/url-guard.mjs`,
   a new script, or an `intel` anomaly rule), so it can't recur silently.
5. **Self-sourced knowledge.** `ai-visibility` (Mon/Wed/Fri) re-reads the official AI-search guidelines, and `knowledge`
   (Friday) refreshes JustAI / CI Web Group / Whitespark / Sterling Sky best practices into `knowledge/`. Rules that change go into the skills.
6. **Grow the team.** When the director sees a recurring job with no owner, it writes a new agent in
   `.claude/agents/` (same format, one domain, guardrails), adds it to §2 and the routines, and logs it.
7. **Monthly self-audit.** Compare this setup to Hydra OS / CI Web Group's current public features and the
   JustAI material. Every gap becomes a board task. Also benchmark 3 live home-service sites built on CI Web Group's
   platform (find them via ciwebgroup.com case studies/portfolio). Compare their navigation, CTAs, service×city structure, internal
   linking, schema, page speed and AI-search citations against ours, and open tasks for what they do better.
