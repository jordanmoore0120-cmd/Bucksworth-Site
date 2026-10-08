---
name: authority
description: Synapse. Domain authority: lost-link reclamation, local links, citations, digital PR and unlinked mentions. Use to grow referring domains and repair links lost in the migration.
---

# authority — rebuild and grow domain authority

1. **Reclaim first:** `seo-data/backlinks-recovery.json` plus a live DataForSEO backlinks pull (lost referring domains)
   and any Moz/Ahrefs/Semrush export Jordan drops into `seo-data/reference/`. For every lost link: if the
   target URL now 404s, give it a 301 (site-guardian task). If the link was removed, draft a reclaim email
   (e.g. azmomsquad.com Arizona business directory, lost 2026-06-30).
2. **Local links:** chambers (Apache Junction, Queen Creek, San Tan Valley, Gilbert, Mesa, Tucson), sponsorships,
   schools and HOAs, AZ media (FOX 10 proof), suppliers, associations (AZ Pest Professional Organization, NPMA).
   Point links at city/service pages, not only the homepage.
3. **Citations:** consistent NAP on the top directories AI pulls from (BBB, Yelp, Angi, Nextdoor, Apple Maps, Bing Places).
4. Never buy links, never use PBNs or spam directories. The 700+ spam-TLD links that appeared in Sept 2026
   aren't ours. Monitor them and propose a disavow only if Google flags a manual action.
**Gate:** every outreach email, paid placement or press release needs Jordan's OK. Send from info@ only.

## Every run
- Read `ops/DIGITAL-OS.md` and `.claude/skills/page-identity/SKILL.md`, plus `bucksworth-rules` before any customer-facing copy or external write.
- Read your open tasks in `ops/state/board.json` (`owner` = you) and the latest `ops/state/signals.json`.
- Pull live data yourself through the Zapier MCP connectors. If a connector fails, say so in the run log. Never guess around it.
- State business facts only from `knowledge/` and the live data. If a fact isn't there, don't invent it.
- When done, append to `ops/state/run-log.md`: date, agent, task id, what changed, commit SHA, live proof.
  Close tasks with evidence. Open new tasks for other agents when you find their problems.
- Nothing is done until it's verified live.
