# Cozmic — Claude & Cursor Takeover Handoff

**Status:** Current through **v7.2**  
**Canonical commit:** `b9603b0` on `main`  
**Repository:** <https://github.com/CozmicIlusion/Publisher>  
**Production domain:** <https://cozmic.cloud>  
**Prepared:** August 2026  
**Owner:** CozmicIlusion

> **Use this document as the current starting point.** It supersedes earlier handoffs whose content counts, ad behavior, Giscus configuration, and deployment guidance predate v7.2. The project has been built successfully at this commit, but Cloudflare production status must be checked after the next push.

## 1. Executive Brief

Cozmic is a solo-operated, Gen Z-focused news and opinion platform. It translates research, technology, culture, gaming, lifestyle, music, and science into provocative but source-led editorial content. The visual direction is **Nebula Flow**: deep space black, cyan as the primary signal color, restrained aurora pink and stardust gold accents, floating frosted surfaces, and a persistent but readable cosmic atmosphere.

The site is a **static React application**. It currently contains **16 original editorial articles** distributed across six verticals: **Tech, Gaming, Culture, Lifestyle, Music, and Science**. Articles, category metadata, image references, static view counts, trending state, and editor’s picks all live in one data module. The platform uses GitHub as source control and Cloudflare’s Worker Assets deployment configuration to serve `cozmic.cloud`.

| Working capability | Current state |
|---|---|
| React routes, design system, article views, vertical pages | Implemented and locally verified |
| Sitemap and RSS | Generated from the article data during every production build |
| SEO metadata and article structured data | Implemented through `SEOHead.tsx` |
| Cookie consent and AdSense loader | Consent-gated; manual units remain hidden until real slots are configured |
| Comments | Graceful “being configured” state until Giscus is configured |
| Contact form | Opens a prefilled email draft; it is not a form-delivery backend |
| GitHub → Cloudflare delivery | GitHub `main` is the intended deployment branch; confirm the live deployment after changes |

## 2. Immediate Orientation for Claude and Cursor

Claude should be used primarily for **research synthesis, editorial drafting, data-model changes, and careful code review**. Cursor should be used for **small, reviewable implementation changes**, repository navigation, refactors, and test/build execution. Neither should publish unsupported scientific claims, fabricate sources, create fake testimonials/reviews, or write real credentials into the repository.

The first task in a new work session is to confirm local state and preserve a clean starting point:

```bash
git status
git log --oneline -5
pnpm install
pnpm run check
pnpm run build
```

The expected baseline is commit `b9603b0` on `main`, zero TypeScript errors, and a successful build. The `pnpm` warning about the deprecated nested `pnpm` field in `package.json` is non-blocking; do not spend the first session changing dependency configuration unless it becomes a concrete installation or build failure.

## 3. Technical Architecture

| Area | Implementation | Working notes |
|---|---|---|
| UI runtime | React 19, TypeScript, Vite 7 | Client-side SPA rendered through Wouter routes |
| Styling | Tailwind CSS 4 plus OKLCH CSS variables | Global tokens and shared glass treatment are in `client/src/index.css` |
| Animation | Framer Motion | Use motion with restraint; respect reduced-motion behavior when adding new interaction |
| UI primitives | shadcn/ui and Radix UI | Reuse available primitives rather than duplicating basic accessibility mechanics |
| Icons | Lucide React | Use a meaningful icon rather than emoji as interface chrome |
| Routing | Wouter with `React.lazy` | Add a lazy import and explicit route in `client/src/App.tsx` for every page |
| Comments | `@giscus/react` | Disabled safely until environment configuration is supplied |
| Advertising | Google AdSense | Account meta tag remains in HTML; script and manual slots wait for consent/configuration |
| Hosting | Cloudflare Worker Assets via Wrangler | `dist/public` is the deployed assets directory |
| Server folder | Template placeholder only | Do not assume there is a live Node/Express backend in production |

### Repository Map

```text
cozmic/
├── client/
│   ├── index.html                         # document shell, fonts, org schema, Ads account meta
│   ├── public/
│   │   ├── _headers                       # Cloudflare security/cache headers
│   │   ├── ads.txt                        # AdSense seller verification
│   │   ├── favicon.cozmic-57463484.svg    # branded favicon
│   │   ├── manifest.json                  # PWA manifest
│   │   ├── robots.txt                     # crawler directives
│   │   ├── sitemap.xml                    # generated output
│   │   └── rss.xml                        # generated output
│   └── src/
│       ├── App.tsx                        # app shell, lazy routes, consent placement
│       ├── index.css                      # tokens, global glass treatment, visual rules
│       ├── components/
│       │   ├── AdSlot.tsx                 # consent + slot-configured AdSense placements
│       │   ├── AISummaryBadge.tsx          # Science Gothic AI synopsis treatment
│       │   ├── ArticleCard.tsx             # shared article card and image treatment
│       │   ├── CookieConsent.tsx           # local consent state and AdSense script loader
│       │   ├── CosmicAtmosphere.tsx        # shared aurora/nebula layer for every route
│       │   ├── GiscusComments.tsx          # environment-configured comments fallback
│       │   ├── Navbar.tsx / Footer.tsx
│       │   ├── ScrollToTop.tsx / StarField.tsx
│       │   └── TrendingTicker.tsx
│       ├── hooks/usePageMeta.ts
│       ├── lib/data.ts                    # the only source of truth for editorial content
│       └── pages/                         # Home, Article, Vertical, About, Contact, Privacy,
│                                           # Terms, EditorialPolicy, Author, and NotFound
├── scripts/generate-sitemap.mjs           # extracts routes from data.ts at build time
├── scripts/generate-rss.mjs               # extracts feed entries from data.ts at build time
├── wrangler.jsonc                         # required Worker Assets configuration
├── DEPLOYMENT_ERROR_LOG.md                # read before every deployment
├── AUDIT_REPORT_v7.2.md                   # confirmed fixes and residual external setup
├── ideas.md                               # selected design direction and its rules
└── package.json
```

## 4. Design Contract

Do not treat Cozmic as a generic dark news template. New code must reinforce the existing **Nebula Flow** visual system and preserve content readability.

| Design layer | Non-negotiable rule |
|---|---|
| Atmosphere | Every page needs a visible but subtle cosmic layer. Use `StarField` and `CosmicAtmosphere`; do not return to a flat black document view. |
| Surfaces | Important panels should look like frosted, luminous glass rather than opaque dark rectangles. Prefer `.glass-card` for reusable editorial surfaces. |
| Color | Use electric cyan for primary action and information signals. Use pink and gold sparingly as spectral accents, not as broad gradients. |
| Typography | Use Space Grotesk for display hierarchy, DM Sans for reading text, and Science Gothic only for AI-summary signals. Do not introduce Inter. |
| Layout | Prefer a floating “card archipelago” with varied emphasis over uniform grids of identical cards. Preserve strong mobile reading flow. |
| Images | Keep source imagery under the same cosmic grade: deep indigo shadows, cyan/pink spectral overlay, and strong title contrast. Do not reuse a hero image in multiple primary surfaces. |
| Motion | Motion should suggest drift, signal, and orbit. Avoid constant motion that competes with long-form reading. |

When a styling choice is unclear, use this question: **Does it reinforce or dilute the Nebula Flow design philosophy?**

## 5. Content System

All editorial content is defined in `client/src/lib/data.ts`. Do not create a second content store without an explicit migration plan. The current `Article` interface is:

```ts
type Category = "tech" | "gaming" | "culture" | "lifestyle" | "music" | "science";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  aiSummary: string;
  content: string;
  category: Category;
  author: string;
  publishedAt: string;
  readTime: number;
  imageUrl: string;
  featured: boolean;
  tags: string[];
  views: number;
  trending: boolean;
  editorsPick?: boolean;
  sourceUrl?: string;
  sourceName?: string;
}
```

The helper functions in the same file power all current content views: `getArticleBySlug`, `getArticlesByCategory`, `getFeaturedArticles`, `getLatestArticles`, `getTrendingArticles`, and `getEditorsPickArticles`. A content change therefore automatically flows to the home page, vertical pages, related lists, the build-time sitemap, and the RSS generator.

### Editorial Standard

Every new article should be a complete, original editorial piece of roughly 800–1,500 words, not a stitched summary or a lightly rewritten press release. It needs a clear argument, proportional representation of evidence, uncertainty where the underlying research is limited, a direct link to the primary source when available, descriptive image alt text, and a concise `aiSummary` that does not overstate the source.

The target voice is fast, curious, precise, and occasionally provocative. The headline may challenge familiar narratives; the body must not treat a single study as clinical, legal, financial, or universal advice. Do not invent quotes, studies, results, authors, publication dates, traffic numbers, reviews, ratings, or testimonials.

## 6. v7.2 Audit Outcomes

The v7.2 audit is the current quality baseline. It corrected several runtime and deployment-adjacent defects.

| Area | v7.2 behavior | What the next maintainer must preserve |
|---|---|---|
| AdSense consent | The external AdSense script is injected only after a visitor selects **Accept All**. | Never re-add the AdSense script directly in `client/index.html`. |
| Manual AdSense units | `AdSlot.tsx` renders only after consent and only when an appropriate environment slot is configured. | Never create `<ins class="adsbygoogle">` without a real `data-ad-slot`. |
| Giscus | The component displays a calm configuration notice rather than loading invalid IDs. | Keep graceful behavior until all four Giscus variables exist. |
| Contact form | Submit opens a prefilled `mailto:` draft and says so accurately. | Do not claim messages are sent until a real delivery backend exists. |
| Favicon | A hashed SVG is in `client/public` and referenced by HTML, manifest, and article schema. | Update all three references together if the icon changes. |
| Inner-page design | `CosmicAtmosphere` and upgraded frosted-glass surfaces cover all route families. | Retain the atmosphere on any page added in the future. |

### Small Post-Audit Cleanup

`scripts/generate-rss.mjs` still refers to the prior `/favicon.ico` channel image in its generated RSS output. Update it to `/favicon.cozmic-57463484.svg` before the next release. This is a narrow cleanup task; it does not block local builds.

## 7. Environment Variables and External Setup

No real tokens, publishing credentials, email forwarding addresses, or configuration IDs are stored in this repository. For Vite, values prefixed with `VITE_` are compiled into the client bundle. Never put a secret into any `VITE_*` variable.

### Required AdSense Placement Variables

Set these in Cloudflare’s build environment only after obtaining real unit IDs in AdSense:

```bash
VITE_ADSENSE_SLOT_BANNER=
VITE_ADSENSE_SLOT_SIDEBAR=
VITE_ADSENSE_SLOT_INLINE=
VITE_ADSENSE_SLOT_NATIVE=
VITE_ADSENSE_SLOT_MID_ARTICLE=
VITE_ADSENSE_SLOT_STICKY_RAIL=
```

The publisher ID is already represented by the account meta tag and consent-gated script. Blank slot values are intentional: the component returns `null` so the site does not attempt malformed ad requests.

### Required Giscus Variables

Before enabling comments, enable **GitHub Discussions** for `CozmicIlusion/Publisher`, install the Giscus GitHub App for that repository, create or select an appropriate discussion category, and obtain the values from Giscus. Then set:

```bash
VITE_GISCUS_REPO=CozmicIlusion/Publisher
VITE_GISCUS_REPO_ID=
VITE_GISCUS_CATEGORY=Article Comments
VITE_GISCUS_CATEGORY_ID=
```

The exact IDs are repository-specific. Do not guess them, hard-code blank strings, or copy them from an unrelated project.

### Required Email Routing

Set up Cloudflare Email Routing for `hello@cozmic.cloud` and `privacy@cozmic.cloud`, each forwarding to a mailbox monitored by the owner. The contact form’s `mailto:` behavior is honest but will not make the addresses receive mail until routing is configured.

## 8. SEO and Build Behavior

`pnpm run build` first runs the sitemap and RSS generators, then runs Vite, then bundles the placeholder server output. Cloudflare serves **only** `dist/public`. Do not manually edit generated `client/public/sitemap.xml` or `client/public/rss.xml` without also changing the corresponding generator.

| SEO component | Current implementation |
|---|---|
| Page title and description | `SEOHead.tsx` and `usePageMeta.ts` |
| Article schema | `NewsArticle` plus `BreadcrumbList` injected per article |
| Site schema | `NewsMediaOrganization` in `client/index.html` |
| Canonical/Open Graph/Twitter tags | Base tags in `index.html`, dynamically updated for route-specific content |
| Sitemap | Generated from article `slug` and `publishedAt`, plus named static pages |
| RSS | Generated from article title, excerpt, category, author, date, and slug |
| Crawl controls | `robots.txt` points crawlers to the sitemap |

The app remains an SPA. Route-specific client metadata improves browser/social behavior, but it is not equivalent to server-rendered document metadata for every crawler. Do not begin an Astro/SSG migration casually; write an explicit migration plan and preserve every existing route, sitemap, structured-data behavior, and visual token before changing frameworks.

## 9. Cloudflare Deployment Runbook

Read `DEPLOYMENT_ERROR_LOG.md` before every deployment. It records six historical failure modes and is more authoritative than old handoffs.

```bash
# Quality gate
pnpm run check
pnpm run build

# Direct deploy when an authenticated Wrangler session is available
npx wrangler deploy

# GitHub-backed auto-deploy path
git add -A
git commit -m "v7.x: concise description"
git push github main
```

`wrangler.jsonc` must remain at the repository root with `assets.directory` set to `./dist/public` and SPA fallback configured through `not_found_handling: "single-page-application"`.

> **Do not create or populate `client/public/_redirects`.** In this deployment history, a SPA redirect rule such as `/* /index.html 200` caused an infinite redirect loop. Routing is handled by Wrangler’s `not_found_handling` configuration, not by `_redirects`.

If Cloudflare reports that an old `_redirects` asset still exists despite a correct repository, the documented recovery is to recreate the affected `cozmic-publisher` Cloudflare project and reconnect its GitHub deployment. Do not repeatedly add redirects or command-line flags in an attempt to force around this problem.

## 10. Priority Backlog

The following order balances launch quality, operational correctness, and monetization readiness.

| Priority | Work item | Definition of done |
|---|---|---|
| P0 | Confirm production deployment | `cozmic.cloud` serves the v7.2 release, article routes load directly, favicon exists, and no redirect loop appears. |
| P0 | Configure Cloudflare Email Routing | Both public addresses forward to a real, monitored inbox. |
| P0 | Configure Giscus | Discussions enabled, app installed, variables set, article comments render without console errors. |
| P0 | Configure AdSense manual slot IDs | Real per-format IDs set in Cloudflare; placements appear only after consent and pass live policy review. |
| P1 | Correct RSS favicon reference | Update `generate-rss.mjs`, build, inspect `rss.xml`, and release. |
| P1 | Improve the contact path | Replace `mailto:` with a deliberately chosen form service or a secured backend only after email routing is live. |
| P1 | Add Cloudflare Web Analytics | Add the Cloudflare-provided beacon after the property is created; document whether it is consent-exempt in the applicable regions. |
| P1 | Build real trending data | Replace static `views` with a transparent event model using a reviewed backend design. Never present invented live counts as real analytics. |
| P1 | Add related-article editorial logic | Add three relevant, non-duplicative article suggestions below each story and retain clean internal links. |
| P2 | Create CI | Add GitHub Actions for `pnpm install --frozen-lockfile`, `pnpm run check`, and `pnpm run build` on pull requests. |
| P2 | Content operations | Continue publishing research-led articles evenly across all six verticals; verify all sources before publication. |
| P2 | Evaluate static-site migration | Consider Astro or another SSG only after a written, tested migration plan demonstrates improved crawlability without lost functionality. |
| P3 | Automation workflow | Build supervised n8n research-to-draft workflows; preserve human editorial sign-off before any content is published. |

## 11. Safe Change Procedure

1. Read the component and its direct consumers before changing it.
2. Keep each change small and scoped. Do not combine a refactor, dependency upgrade, design overhaul, and feature delivery in one pull request.
3. Update `data.ts` first for content. Let the generators produce sitemap and feed output.
4. Run `pnpm run check` and `pnpm run build` after every functional change.
5. Check direct article navigation, a vertical page, the home page, legal pages, and the 404 path in a browser.
6. Inspect the console for newly introduced errors, especially third-party errors.
7. Review the deployed site after Cloudflare finishes its build.
8. Create a versioned commit, push to `main`, and record externally configured changes in documentation without committing credentials.

## 12. Ready-to-Paste Prompts

### Prompt for Claude

```text
You are the editorial and technical-review partner for Cozmic, a React 19 + TypeScript + Vite news/opinion platform at https://github.com/CozmicIlusion/Publisher. Start by reading CLAUDE_CURSOR_HANDOFF.md, AUDIT_REPORT_v7.2.md, DEPLOYMENT_ERROR_LOG.md, ideas.md, and client/src/lib/data.ts. Treat commit b9603b0 as the baseline.

Maintain the Nebula Flow design system: deep-space base, electric cyan signals, restrained pink/gold accents, frosted glass, persistent subtle cosmic atmosphere, Space Grotesk / DM Sans / Science Gothic, and readable long-form content. Do not use a generic dark dashboard look, Inter, excess gradients, fake reviews, fabricated research, fake metrics, or hard-coded credentials.

Before recommending code, inspect actual files. Keep changes small, explain impact, preserve the strict Cloudflare rule: no client/public/_redirects and no SPA redirect rules. Run pnpm run check and pnpm run build before calling a change complete. Prioritize P0 items, then P1 items in the handoff.
```

### Prompt for Cursor

```text
You are implementing changes in the Cozmic repository. Read CLAUDE_CURSOR_HANDOFF.md before editing. Current baseline: commit b9603b0 on main. This is a static React 19 + TypeScript + Vite app; client/src/lib/data.ts is the only content source of truth.

Respect Nebula Flow and the existing component architecture. Reuse existing utilities/components, preserve lazy routes in App.tsx, and keep styles consistent with the OKLCH tokens in client/src/index.css. Never create client/public/_redirects, never re-add the raw AdSense script to index.html, never render manual AdSense units without real slot IDs, and never pretend the mailto contact path sends messages.

For every completed change: run pnpm run check and pnpm run build; inspect modified routes; make one focused, versioned commit. Never commit API keys, AdSense IDs beyond the existing publisher account metadata, Giscus IDs from another repository, or personal email forwarding addresses.
```

## 13. Reference Documents

| Document | Role | Reliability note |
|---|---|---|
| `CLAUDE_CURSOR_HANDOFF.md` | Current takeover guide | Start here. |
| `AUDIT_REPORT_v7.2.md` | Confirmed bugs, resolutions, and external setup gaps | Current through v7.2. |
| `DEPLOYMENT_ERROR_LOG.md` | Cloudflare failure modes and recovery procedure | Read before deploys. |
| `ideas.md` | Chosen visual-design contract | Follow it when modifying UI. |
| `/home/ubuntu/COZMIC_Business_Operations_Playbook.md` | Solo operator editorial/operations plan | Useful but contains some stale pre-v7.1 content counts; reconcile against `data.ts`. |
| `/home/ubuntu/COZMIC_Gemini_Gem.md` | Gemini editorial assistant instructions | Use as a drafting aid, not as publication approval. |
| `/home/ubuntu/COZMIC_Complete_Strategy_Guide.md` | Broader platform strategy | Strategic reference, not a source of current implementation truth. |
| `HANDOFF.md` | Historical Codex/Claude handoff | Superseded by this document where the two conflict. |

## 14. Definition of a Healthy Next Release

A release should be considered healthy only if it retains the v7.2 behavior, passes type checking and production build, preserves direct SPA route access through Wrangler configuration, contains no raw credentials, does not emit new browser-console errors, presents only verifiable editorial content, and has been visually checked at both desktop and mobile widths. For operational work, the external service must also be configured and verified; a UI shell alone is not a completed integration.

---

**End of current handoff.** Start with the P0 deployment and external-configuration tasks, then make small, testable P1 improvements.
