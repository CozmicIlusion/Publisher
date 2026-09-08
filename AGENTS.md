# Cozmic — agent notes

Cozmic is a solo, git-native static magazine at [cozmic.cloud](https://cozmic.cloud). Keep the Cozmic voice and domain. Later work (locales, 18–38 layer, affiliates) is a **layer**, not a brand pivot.

## Stack

- **App:** React 19 + TypeScript, Vite 7, Wouter, Tailwind 4, Framer Motion. No CMS.
- **Content:** Articles live in [`client/src/lib/data.ts`](client/src/lib/data.ts) (19 stories, six verticals). Edit that file; do not invent a database.
- **Build:** `corepack pnpm run check` then `corepack pnpm run build`. Build runs [`scripts/generate-sitemap.mjs`](scripts/generate-sitemap.mjs) and [`scripts/generate-rss.mjs`](scripts/generate-rss.mjs) into `client/public/`, then Vite to `dist/public`.
- **Host:** Cloudflare Worker Assets via [`wrangler.jsonc`](wrangler.jsonc) (`not_found_handling: single-page-application`). Push `main` on GitHub; Cloudflare builds from git.
- **Audit:** After a production-shaped build, `node scripts/audit-v72-test.mjs`.

## Current `main`

Last published SHA before this hygiene work: **`5906b03`** (`5906b031f8e277b9a355f7d7318d79a59ce747bb`) — article 17.

## Timezone

Changelog and agent timestamps use **Mexico Central**: `America/Mexico_City`, **UTC-6 year-round** (Mexico dropped DST in most of the country in 2022). Do not use US Central (`America/Chicago`). Example: `2026-09-07 08:33 Mexico Central (UTC-6)` = `2026-09-07 14:33 UTC`.

## Never create `client/public/_redirects`

SPA fallback is only `wrangler.jsonc`. A `_redirects` file with `/* /index.html 200` caused an infinite loop (see [`DEPLOYMENT_ERROR_LOG.md`](DEPLOYMENT_ERROR_LOG.md) errors #5 and #6). Do not add that file. Do not restore it from history.

## Changelog

- **2026-09-06 Mexico Central (UTC-6):** `5906b03` — publish music editorial on Turku PET-fMRI mu-opioid study (article 17).
- **2026-09-07 Mexico Central (UTC-6):** Fork A + Finding 8 hygiene — this commit. Root `AGENTS.md`; human `/site-map`; superseded handoffs moved to `Archive/`; strip Manus runtime and `__manus__` assets from production; delete Umami `%VITE_ANALYTICS_%` placeholders (no invented analytics IDs); RSS channel image → `/favicon.cozmic-57463484.svg`; Nebula Flow 404 with `CosmicAtmosphere`; `SEOHead` on About, Contact, Privacy, NotFound; commit `scripts/audit-v72-test.mjs` (sitemap expects 31 URLs including `/site-map`).

## Owner-only (do not fake)

Email Routing (`hello@` / `privacy@`), GitHub Discussions + Giscus IDs, AdSense slot env vars, Cloudflare Web Analytics IDs, and `gh` / `wrangler` login stay with the owner. Agents must not invent those IDs.

## Docs

- **This file** is the agent entry point.
- **[`DEPLOYMENT_ERROR_LOG.md`](DEPLOYMENT_ERROR_LOG.md)** stays at repo root (Cloudflare deploy pitfalls).
- **Superseded handoffs** (`HANDOFF.md`, `CLAUDE_CURSOR_HANDOFF.md`, `AUDIT_REPORT_v7.2.md`, `ideas.md`, `image-urls.md`) live in [`Archive/`](Archive/). Counts and runbooks there can be stale; prefer this file and the working tree.

- **2026-09-08 Mexico Central (UTC-6):** Add Lifestyle article 119, A Better Wardrobe Starts With What You Keep, with EEA source, original wardrobe SVG, and regenerated feeds. Publication timestamp: 12:00 UTC-6 = 18:00 UTC. Rollback: revert the article release commit and rebuild.
