
## Sprint 3 Deploy - 2026-05-20 20:50 UTC

### Commits
- `e8b5a64` - Sprint 3: Restructure 4 verticals, real logo, brand colors, underlined links
- `c4df8aa` - Fix: add missing neighborhoods.ts (332 lines, 145 neighborhoods + 111 landmarks)
- `bbf536f` - Add llms.txt and llms-full.txt for AI agent discoverability

### What Changed
1. **4 Service Verticals Restructured:**
   - Pest & Termite (10 sub-services incl termite warranty)
   - Air Conditioning & Heating (11 sub-services incl insulation)
   - Plumbing & Water Heaters (9 sub-services)
   - Weed & Lawn Care (7 sub-services) — NEW standalone
2. **Real Bucksworth mascot logo** in header/footer (bigger)
3. **Brand colors locked** to logo palette (red #b91c1c, navy #1a1a2e)
4. **City & zip links underlined** for clickability
5. **llms.txt + llms-full.txt** at domain root for AI agent discoverability
6. **145 neighborhoods + 111 landmarks** woven into city/sub-service content
7. **Total pages: ~1,189** (33 city + 114 hub + 1,041 sub-service + 1 homepage)

### Build Notes
- First push failed: missing neighborhoods.ts (not in git repo)
- Fixed by adding the file and re-pushing
- llms.txt deployed per Google's agentic audit guidelines

## Content Freshness Update — 2026-06-14

### Purpose
Weekly automated content freshness pass — June 2026 (peak scorpion/monsoon season).

### Changes Made
1. **job-sites.ts** — Added 3 fresh June 2026 job entries:
   - `p9`: Queen Creek scorpion H-block dust injection (2026-06-10)
   - `p10`: Gilbert monsoon prep — mosquito & scorpion combo (2026-06-12)
   - `a6`: North Phoenix emergency AC repair in 112°F heat (2026-06-11)
2. **about/page.tsx** — Updated video schema `uploadDate` from `2025-01-01` → `2026-01-01`
3. **[city]/[service]/page.tsx** — Added `dateModified: "2026-06-14"` to Service schema
4. **[city]/page.tsx** — Added `dateModified: "2026-06-14"` to LocalBusiness schema; updated summer/monsoon description to reflect June peak season urgency
5. **HomeContent.tsx** — Hero badge updated to seasonal: "Peak Scorpion Season — Book Same-Day Service"; footer CTA now leads with scorpion season urgency

### SEO Rationale
- Google rewards freshly dated pages in rankings
- June–August: scorpion + AC emergency peak season — content should reflect this
- New job site entries show recent activity to search engines and visitors
