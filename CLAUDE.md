# CLAUDE.md — Bucksworth-Site

You are working on the live production website for Bucksworth Home Services
(getyourbucksworth.com). Real customers hit this site. Read this file fully
before touching anything.

Repo: `jordanmoore0120-cmd/Bucksworth-Site` · Next.js on Vercel · deploys from `main`

---

## 0. FIRST: verify state before you believe anything

Do this at the start of EVERY session, before planning work:

```bash
git remote -v
git fetch origin
git log origin/main -3 --oneline
git status
```

**Do not trust a handoff.** If a previous session, a message, or a note claims
work was already committed, verify the SHA exists before building on it:

```bash
git cat-file -t <sha>   # must print "commit"
```

If the SHA does not resolve, the work does not exist. Say so plainly and start
from the actual state of `origin/main`. Never repeat a claim you have not
checked yourself.

**Then read `seo-data/daily-brief.md`** — Viktor's daily FACT feed (Jordan's own words, yesterday's
leads, your commits, data freshness, connector health). Viktor does not set your priorities; you
decide the order of work from the data and Jordan's words. Jordan's goal (2026-10-07): digital
content that RANKS and DRIVES PHONE CALLS, built on real search intent, with zero cannibalization.

**Session-start checks (every run, before planning):**
1. Open GitHub issues labelled `url-guard` = live URLs that broke. Fix them FIRST (301 or restore).
2. `seo-data/url-baseline.json` → `known_broken_*` lists indexed URLs that already 404. Every one
   needs a 301 to the closest live page; clear them over the coming sessions.
3. Connector health: call one read-only action on each Zapier app you have (GBP, Google Ads, GA4,
   Facebook Pages, Instagram, DataForSEO). Record ok / error per app in your Slack run summary. A
   broken connector is reported, never guessed around.
4. Read `knowledge/` (business facts + JustAI/CI Web Group playbooks) — state facts only from there.

Permissions for edits/commits are pre-approved in `.claude/settings.json`; work unattended.

**Skills:** `.claude/skills/` holds Bucksworth's marketing skills (rules, Google Ads/LSA, GBP,
Search Console/GA4, DataForSEO, local SEO, AEO/GEO, PR, social, Meta + ads methodologies).
Read `bucksworth-rules` before any customer-facing copy or any change to an external system.

---

## 1. Repository authentication and publishing

**Do not assume a PAT is required. Do not assume `git push` is the only valid
publishing method.** Authentication differs between interactive Claude Code,
Cowork, scheduled sessions, GitHub connectors, MCP tools, and API-backed tools.
Use the secure write-capable method that is actually available in the current
session.

### Authentication order

Use this order every session:

1. **Existing authenticated Git access.** If the environment already provides a
   working credential helper, GitHub App credential, proxy credential, or other
   authenticated Git transport with write access to this repo, use it.
2. **Connected GitHub write tool.** If a GitHub connector, MCP server, or API tool
   is available with write access to `jordanmoore0120-cmd/Bucksworth-Site`, use
   that tool directly to read/write repository files and create the commit.
3. **Interactive PAT fallback only.** In an interactive session, if no secure
   write-capable method exists, ask Jordan for a fine-grained PAT scoped only to
   this repository with `Contents: Read and write`.

### Scheduled / unattended sessions

For scheduled or unattended work:

- **Never pause to ask Jordan for a PAT.**
- Use the authenticated GitHub write method already available to the session.
- Prefer a connected GitHub connector/MCP/API tool when available instead of
  trying to manufacture Git credentials inside the sandbox.
- If no secure write-capable GitHub method is available, stop the publishing
  step and report the task as **blocked by repository authentication**. Do not
  claim the work was published.
- Do not attempt credential workarounds, scrape tokens, reuse stale credentials,
  or bypass repository authorization controls.

### Credential safety

- **NEVER commit a token.** Not in this file, not in any repo file, not in a
  script, not in generated content.
- **NEVER paste, print, or echo a token into chat output or command output.**
- **NEVER overwrite a working authenticated remote just to force a PAT URL.**
- A PAT may only be used as an interactive fallback when Jordan explicitly
  provides one and no safer authenticated write method is available.

### Publishing with Git

If the session has working authenticated Git write access, always rebase before
pushing and never force-push `main`:

```bash
git pull --rebase origin main
node scripts/url-guard.mjs prepush   # MUST print PASS. FAIL = add the 301s in the same commit first.
git push origin main
```

### Publishing with a GitHub connector / MCP / API

If the session is using a connected GitHub write tool instead of Git:

- Read the latest version of every file immediately before modifying it.
- Write only to `jordanmoore0120-cmd/Bucksworth-Site`.
- Publish to `main` unless Jordan explicitly instructs otherwise.
- Preserve unrelated changes already present in the file.
- Record the resulting commit SHA.
- Verify that the resulting commit exists on the repository's `main` branch
  before reporting the repository update as successful.

---

## 2. Definition of done

"Committed" is not done. "Merged" is not done. Done means **live in production**.

For a Git-based session:

```bash
git log origin/main -1 --oneline        # commit is on the remote
sleep 120                              # Vercel build takes ~2 min
curl -sI https://www.getyourbucksworth.com/<path> | head -1   # expect 200
```

For a connector/MCP/API-based session, verify the resulting commit SHA is on
`main`, then verify the production URL returns HTTP 200 after deployment.

Only after a 200 from the live URL may you report the work as complete. If you
cannot verify, say exactly what is unverified. Never report success you
haven't observed.

---

## 3. Hard content rules (business-critical)

**Do not break old URLs.** ~2,169 URLs are indexed and 335 redirects are live.
Renaming or deleting a path without a 301 destroys existing rankings. If a URL
must change, add the redirect in the same commit.
URL protection is automated (Jordan 2026-10-07: "protect all urls"):
- `node scripts/url-guard.mjs prepush` before EVERY push: fails if a blog slug, city, service,
  route or redirect disappears without a 301. Never push on FAIL.
- `.github/workflows/url-guard.yml` re-checks all ~6,500 known URLs (sitemap + every page with
  Search Console impressions) on production after each push and daily; new breaks open an issue.
- Never 404 or noindex a URL that has impressions. Consolidating = 301 the weaker URL into the
  stronger one, never delete.

**Search intent first (Jordan 2026-10-07).** Every new page/post/topic starts from a real
DataForSEO keyword with Arizona volume, never from opinion. Before writing:
1. `node scripts/topic-check.mjs "<target keyword>"` — exit 1 means one of our URLs already owns
   that search: improve that URL instead of creating a new one.
2. Pull the live Google SERP for the keyword (DataForSEO via Zapier, location
   `Phoenix,Arizona,United States`). Match the dominant result type: service pages → improve the
   money page; how-to/blog results → post; local pack only → GBP/landing work. Note who is cited
   in the AI Overview.
3. Record keyword, AZ volume, intent and the SERP type in `seo-data/publish-log.json`.
`seo-data/cannibalization.json` lists every Google query where 2+ of our URLs already compete
(Search Console, 90 days). Consolidate those (pick the winner, merge content, 301 or link up)
— never add a third page to a split query.

**Anti-cannibalization is rule #1.** Never publish a page targeting a keyword +
city combination that an existing page already targets. Check before writing —
compare target keywords, not just titles. Duplicate/competing pages are the
single worst failure mode in this repo; a previous multi-writer setup produced
mass duplicates and had to be pruned (1,354 posts removed).

**A question is one search result page, whatever the city (Jordan, 2026-10-02).**
"How to get rid of fruit mosquitoes" shows the same Google results in Mesa and
Tucson, so swapping the city name does NOT make a new topic. Before writing:
1. Compare your target question against EVERY `target_question` in
   `seo-data/publish-log.json` and all titles in `content/blog/index.json`.
   If it matches or is a near-variant (same core words: "what do bed bugs look
   like" = "what does bed bugs look like on a bed"), pick a different topic.
2. Never reuse another post's H2 outline with only the city swapped.
3. If unsure, skip the topic and log why — never publish a possible duplicate.
Viktor's QA flags any violation and it goes into `seo-data/fix-list.md`.

**Silo structure:** City → Service → Sub-service → blog posts. Blog posts are
always self-canonical — never set `canonicalTarget` on a blog post.

**Phone numbers — only these two are real:**
- Phoenix: `(480) 422-8388`
- Tucson: `(520) 284-9930`

Any other number on the site is a bug. Never publish a placeholder number.

**No HVAC or plumbing content in Google Business Profile copy.** (Site pages are
fine; GBP is deliberately pest + weed only.)

**Never claim the site is new.** The domain has been active since 2013.

**Domain authority (Jordan 2026-10-07: "get the domain authority up").** Baseline in
`seo-data/authority.json` (DataForSEO domain rank + referring domains for us vs AZ competitors,
refreshed weekly). Earning real links and mentions is part of the job: follow the `pr-backlinks`
skill (outreach from info@, local partners, journalist queries, citations) and log every link
won or pitched in `seo-data/backlinks-log.json` with its live URL. No paid link schemes, PBNs or
link exchanges.

---

## 4. Blog post quality bar

Every post must hit all of it — a thin post is worse than no post:

- 1,500+ words, hyper-local (zip codes, neighborhoods, landmarks, local angle)
- Must not feel templated. Vary hooks, H2 order, structure. Similarity-check
  against the 5 most recent posts for the same city + vertical
- 6–10 H2s, H3 subheads, lists in 2+ sections, at least 1 data table
- Answer-first: the first 1–3 sentences directly answer the page's question
- Question-format H2/H3s that mirror real search queries
- 4–6 FAQ items at the bottom, `<h3>` for questions (drives FAQ schema)
- 2+ images from `/images/photos/`, alt text includes service + city
- First-person voice ("we", "our technicians") — never third-person corporate
- 10–12 contextual internal links: service page, city page + 1 nearby city,
  3–4 same-sub-service posts, 1–2 related sub-service posts, 1+ conversion page
- Mention 3–5 nearby cities we also service
- Unique title — check existing titles first
- Excerpt: first 155 chars work as the meta description

**Every session: do the open items in `seo-data/fix-list.md` FIRST**, before
picking a new topic, and mark each one done with the commit SHA.

Before writing or changing any page, read `seo-data/reference/ai-search-guidelines.md`; its rules are part of this quality bar.

After the fix-list, do **at least 3 open items** in `seo-data/site-tasks.md` (in the order you judge best from the data), mark each [x] with the commit SHA, then write the day's post.

**Topic selection is data-driven — read `seo-data/STRATEGY.md` first.** Pick the
next post from `seo-data/blog-queue.json` (real DataForSEO AZ demand), check
`seo-data/gsc-ranking-map.json` + `content/blog/index.json` for cannibalization,
and use `rankings.json`, `whitespark-rankings.json`, `striking-distance.json` to
choose which money page each post supports. Append every published post to
`seo-data/publish-log.json`. Viktor refreshes these files weekly.

Publishing path: write content → add to `content/blog/index.json` and
`content/blog/data.json` → publish using the secure authenticated GitHub method
available to the session → verify live (section 2).

Note: `data.json` is ~20MB / 1,448 posts. Append, never rewrite wholesale.

---

## 4.5 Performance budget (non-negotiable, Jordan 2026-09-30)

Every page change is optimized for Google's Core Web Vitals. Full rules are in
`seo-data/reference/performance-budget.md`; read it before touching pages, templates,
components, CSS or `/lp/*`.

- **Google's rules:** LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, measured on real mobile users.
  Landing-page speed also feeds Google Ads Quality Score, and a slow page raises CPC.
- **Budget:** mobile Lighthouse **≥ 90 on every page type**. `/lp/*` ad landing pages never go
  live below 90 (target 95+).
- **Tracking tags stay exactly as they are.** Same GA4/Ads/Meta IDs and same load strategy;
  never defer or remove them. Hit the budget by making everything else near-zero cost.
- Every perf-relevant PR includes a Lighthouse before/after table and must pass the
  Lighthouse CI check.

---

## 5. Key files

| Path | What |
|---|---|
| `content/blog/data.json` | Blog post bodies (~20MB) |
| `content/blog/index.json` | Blog index |
| `src/lib/blog.ts` | Blog logic |
| `src/lib/cities.ts` | 35 cities (Tolleson/El Mirage/Youngtown removed 09-25) |
| `src/lib/services.ts` | Sub-services (blog focus: pest-and-termite + weed-and-lawn-care only) |
| `seo-data/` | SEO data pack + STRATEGY.md (not served; Viktor refreshes weekly) |

---

## 6. When to stop and ask

- No secure write-capable GitHub authentication is available in the current session
- A change would alter or remove an existing URL and you're unsure of the redirect
- A new page might cannibalize an existing one and you can't confirm
- Anything touching billing, customer data, or contact details
- You cannot verify a change went live

Being honest that something is blocked is always better than reporting work you
did not verify.
