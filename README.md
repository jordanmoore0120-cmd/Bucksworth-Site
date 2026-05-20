# Bucksworth Home Services

Next.js website for [Bucksworth Home Services](https://getyourbucksworth.com) — pest control, HVAC, plumbing, and home services serving Phoenix and Tucson, Arizona.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Deployment:** Vercel
- **CMS:** WordPress (headless, for blog content)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — Pages (homepage, city pages, service pages)
- `src/components/` — Shared components (Header, Footer, etc.)
- `src/lib/` — Data and utilities (city data, WP API client)
- `src/styles/` — Global styles
- `public/` — Static files (robots.txt, llms.txt)

## Deployment

Pushes to `main` auto-deploy to Vercel.

---

Built and maintained by Viktor AI + Bucksworth team.
