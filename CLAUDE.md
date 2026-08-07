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

**Anti-cannibalization is rule #1.** Never publish a page targeting a keyword +
city combination that an existing page already targets. Check before writing —
compare target keywords, not just titles. Duplicate/competing pages are the
single worst failure mode in this repo; a previous multi-writer setup produced
mass duplicates and had to be pruned (1,354 posts removed).

**Silo structure:** City → Service → Sub-service → blog posts. Blog posts are
always self-canonical — never set `canonicalTarget` on a blog post.

**Phone numbers — only these two are real:**
- Phoenix: `(480) 422-8388`
- Tucson: `(520) 284-9930`

Any other number on the site is a bug. Never publish a placeholder number.

**No HVAC or plumbing content in Google Business Profile copy.** (Site pages are
fine; GBP is deliberately pest + weed only.)

**Never claim the site is new.** The domain has been active since 2013.

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

Publishing path: write content → add to `content/blog/index.json` and
`content/blog/data.json` → publish using the secure authenticated GitHub method
available to the session → verify live (section 2).

Note: `data.json` is ~20MB / 1,448 posts. Append, never rewrite wholesale.

---

## 5. Key files

| Path | What |
|---|---|
| `content/blog/data.json` | Blog post bodies (~20MB) |
| `content/blog/index.json` | Blog index |
| `src/lib/blog.ts` | Blog logic |
| `src/lib/cities.ts` | 33 cities |
| `src/lib/services.ts` | 36 sub-services |

---

## 6. When to stop and ask

- No secure write-capable GitHub authentication is available in the current session
- A change would alter or remove an existing URL and you're unsure of the redirect
- A new page might cannibalize an existing one and you can't confirm
- Anything touching billing, customer data, or contact details
- You cannot verify a change went live

Being honest that something is blocked is always better than reporting work you
did not verify.
