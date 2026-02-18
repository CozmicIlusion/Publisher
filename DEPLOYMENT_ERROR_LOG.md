# Cozmic — Deployment Error Log

This file tracks all Cloudflare Pages deployment errors encountered, their root causes, and fixes applied. **Consult this log before every deployment to avoid repeating past mistakes.**

---

## Deployment Configuration (Current Working State)

| Setting | Value |
|---|---|
| **Platform** | Cloudflare Workers & Pages |
| **Build command** | `pnpm install && pnpm run build` |
| **Deploy command** | `npx wrangler deploy` |
| **Path (root directory)** | `/` (empty or root) |
| **SPA routing** | Handled by `wrangler.jsonc` → `"not_found_handling": "single-page-application"` |
| **Static assets dir** | `./dist/public` (set in `wrangler.jsonc`) |

---

## Error #1 — Root directory not found
- **Date:** 2026-02-09
- **Error:** `Failed: root directory not found`
- **Cause:** The "Path" field in Cloudflare was set to `dist/public` — Cloudflare interprets this as the **source root directory** (where `package.json` lives), not the build output directory.
- **Fix:** Set Path to `/` or leave it empty. The output directory is configured in `wrangler.jsonc`.

## Error #2 — pnpm already exists
- **Date:** 2026-02-09
- **Error:** `npm error EEXIST: file already exists` when running `npm install -g pnpm`
- **Cause:** Cloudflare's build environment already has pnpm pre-installed. Running `npm install -g pnpm` conflicts with the existing installation.
- **Fix:** Remove `npm install -g pnpm &&` from the build command. Use just `pnpm install && pnpm run build`.

## Error #3 — Missing wrangler.jsonc
- **Date:** 2026-02-09
- **Error:** `Missing entry-point — The entry-point should be specified via the command line`
- **Cause:** `wrangler.jsonc` was not committed to the repo, so `npx wrangler deploy` had no configuration to read.
- **Fix:** Ensure `wrangler.jsonc` is always committed and present in the repo root. Never add it to `.gitignore`.

## Error #4 — Assets binding conflict
- **Date:** 2026-02-18
- **Error:** `Cannot use assets with a binding in an assets-only Worker`
- **Cause:** `wrangler.jsonc` had both `"binding": "ASSETS"` inside the assets config AND the deploy command passed `--assets ./dist/public`. The binding is only needed for Workers scripts that reference assets programmatically — not for static sites.
- **Fix:** Remove the `"binding"` field from the assets block in `wrangler.jsonc`. Also remove `--assets` flag from the deploy command since the config file handles it.

## Error #5 — _redirects infinite loop
- **Date:** 2026-02-18
- **Error:** `Invalid _redirects configuration: Line 1: Infinite loop detected in this rule. This would cause a redirect to strip .html or /index and end up triggering this rule again.`
- **Cause:** The `_redirects` file contained `/* /index.html 200` which conflicts with Cloudflare Workers' built-in SPA routing already configured in `wrangler.jsonc` via `"not_found_handling": "single-page-application"`. The `_redirects` rule creates an infinite loop because `/index.html` matches `/*` which redirects back to `/index.html`.
- **Fix:** Delete the `_redirects` file entirely. SPA routing is handled by `wrangler.jsonc`. **NEVER add a `_redirects` file when using wrangler.jsonc with `not_found_handling: "single-page-application"`.**

---

## Pre-Deployment Checklist

Before every push to GitHub, verify:

- [ ] `wrangler.jsonc` exists in repo root with correct `name`, `compatibility_date`, and `assets` config
- [ ] `wrangler.jsonc` assets block has NO `"binding"` field (static site only)
- [ ] NO `_redirects` file exists in `client/public/` (SPA routing is in wrangler.jsonc)
- [ ] `_headers` file in `client/public/` has valid syntax (no conflicting rules)
- [ ] Build command is `pnpm install && pnpm run build` (no `npm install -g pnpm`)
- [ ] Deploy command is `npx wrangler deploy` (no extra flags)
- [ ] Path/root directory is `/` or empty
- [ ] No media files (images/videos) stored locally in the project directory
- [ ] TypeScript compiles with zero errors (`npx tsc --noEmit`)
