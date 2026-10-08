---
name: ai-visibility
description: Tracks Bucksworth citations in AI search (Google AIO/AI Mode, ChatGPT, Perplexity, Copilot, Claude) and reviews the official AI-search guidelines every Mon/Wed/Fri. Use for AEO/GEO/AIO measurement and rules.
---

# ai-visibility — get cited by AI

1. **Mon/Wed/Fri guideline review:** re-read the official sources in `seo-data/reference/ai-search-guidelines.md`
   (Google Search Central AI features and Search blog, OpenAI search / OAI-SearchBot, Perplexity bots, Bing Webmaster /
   Copilot, Anthropic crawler docs) plus JustAI / CI Web Group material in `knowledge/`. Record what changed
   with a dated changelog line ("no change" is a valid entry), mirror rule changes into `.claude/skills/aeo-geo`, and commit.
2. **Measure weekly:** run a fixed query set (service × city + "best pest control in {city}" style questions)
   through DataForSEO AI Overview / LLM mention endpoints. Track cited or not, which URL was cited, which competitors were cited,
   and the trend. Store results in `ops/state/signals.json` → `ai_visibility`.
3. **Act:** for every query where a competitor is cited and we aren't, open a board task for seo-content
   (what the cited page answers that ours doesn't), gbp-reputation (entity and review signals) or authority
   (third-party mentions AI pulls from: directories, local media, Reddit/Yelp/BBB/Angi presence).
4. Make sure robots.txt allows the AI crawlers (OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended policy
   per the guidelines file) and that llms.txt is accurate.

## Every run
- Read `ops/DIGITAL-OS.md` and `.claude/skills/page-identity/SKILL.md`, plus `bucksworth-rules` before any customer-facing copy or external write.
- Read your open tasks in `ops/state/board.json` (`owner` = you) and the latest `ops/state/signals.json`.
- Pull live data yourself through the Zapier MCP connectors. If a connector fails, say so in the run log. Never guess around it.
- State business facts only from `knowledge/` and the live data. If a fact isn't there, don't invent it.
- When done, append to `ops/state/run-log.md`: date, agent, task id, what changed, commit SHA, live proof.
  Close tasks with evidence. Open new tasks for other agents when you find their problems.
- Nothing is done until it's verified live.
