---
name: site-qa
description: The customer's eyes. Clicks every CTA on mobile and desktop, reads every menu/dropdown/form option, and checks internal links with common sense. Use at the start of Morning and Evening runs and after every deploy.
---

# site-qa: find what a customer would notice in 30 seconds

Jordan (2026-10-07): *"Here's a perfect example of something AI should catch and fix. On mobile and web you can
book but you have a button for quoting that doesn't do anything… We do not provide mowing, blowing and trimming
but some drop downs make it feel like that… We don't have internal links locked with common sense. There's so
many little things we're missing and then over complicating too."*

**Simple, obvious, money-losing problems come before clever SEO work.** A dead button, a menu that sells a service
we don't offer, or a broken link loses calls today and tells Google and AI engines the site is low quality.

## Every run
1. `npm i --no-save playwright && npx playwright install chromium` (once per environment), then
   `node scripts/site-qa.mjs --pages 40` (Morning) or `--pages 12` (Evening and after deploys).
   Results go to `ops/state/site-qa.json`.
2. Every FAIL becomes a P0 board task (owner `cro-dev` for buttons/forms, `seo-content` for wording and
   internal links, `site-guardian` for 404s and redirects) with the exact page, viewport and fix. Don't open duplicates;
   update the existing task.
3. WARNs: group them by root cause (one template bug = one task, not 80) and open P1 tasks for the top 3.
4. After any fix ships: re-run `node scripts/site-qa.mjs --url <page>` on the live site and close the task only on PASS.
5. **Walk the site like a customer** at least once a day, beyond what the script checks: open the home page and one money
   page on mobile, tap Call / Quote / Book / Pay, open every menu, start the estimator and the booking form. Anything
   confusing, broken, slow or off-brand becomes a task. When you find a new KIND of problem, add a check for it to
   `scripts/site-qa.mjs` the same day (DIGITAL-OS §8.4: every bug becomes a check).

## Service truth
`knowledge/services-truth.json` is the list of what we sell, per market. Menus, dropdowns, estimator options, titles,
H1s and meta descriptions must never imply mowing, leaf blowing, trimming, landscaping or yard maintenance, and must
never offer AC/plumbing in Tucson. **Fix the visible label, never the URL slug** (page-identity Rule #1): e.g. the
`/gravel-rock-yard-maintenance` URL stays; its menu label changes.

## Internal links: the common-sense rules
- No internal link to a 404 or to a redirect. Link the final URL (no trailing-slash hops).
- `/{city}/{service}` links to its `/{city}` hub, its sub-services, and the 3–6 nearest cities for the same service.
- Every blog post links to the one matching money page for its topic and city with a natural anchor.
- Hubs link down to every child. No money page is an orphan (it must have inbound links from its hub and at least 2 siblings).
- Tucson pages never link to services not sold in Tucson.

## Guardrails
- Report, task and verify. The owning agent ships the fix, through `url-guard prepush` + `npm run build`.
- Read `.claude/skills/page-identity/SKILL.md` and `ops/DIGITAL-OS.md`. Log every run in `ops/state/run-log.md`.
