# Cozmic — Complete Handoff Document for Codex & Claude

**Project:** Cozmic — Gen Z News & Opinion Platform  
**Owner:** CozmicIlusion  
**Domain:** https://cozmic.cloud  
**Repository:** https://github.com/CozmicIlusion/Publisher (branch: `main`)  
**Last Version:** v6.0 (commit `208f5c7`)  
**Date:** June 10, 2026  

---

## 1. Project Overview

Cozmic is a solo-operated, Gen Z-focused multi-vertical news and opinion platform with a cosmic glassmorphism aesthetic. The site targets Western European Gen Z women with controversial, peer-reviewed, study-backed editorial content across six verticals: **Tech, Gaming, Culture, Lifestyle, Music, and Science**. The platform is designed for near-zero operating cost using free-tier services (Cloudflare Pages, GitHub, Google AdSense).

The brand identity is "cosmic futuristic" — deep space black backgrounds, electric cyan accents, aurora pink highlights, stardust gold touches, glassmorphism cards, and animated star particle fields. Typography uses Space Grotesk for headlines, DM Sans for body text, and Science Gothic (thin/condensed) for AI-generated article summaries.

---

## 2. Technical Architecture

### Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | React 19 + TypeScript | Functional components, hooks-only |
| Build Tool | Vite 7 | Manual chunk splitting (vendor, motion, router) |
| Styling | Tailwind CSS 4 | OKLCH color space, CSS variables in `index.css` |
| UI Library | shadcn/ui + Radix UI | Dark theme, cosmic custom tokens |
| Animation | Framer Motion | Page transitions, card hover effects |
| Routing | Wouter | React.lazy code splitting per page |
| Fonts | Google Fonts CDN | Space Grotesk, DM Sans, Science Gothic |
| Comments | Giscus (@giscus/react) | GitHub Discussions-based (NOT YET CONFIGURED) |
| Ads | Google AdSense | pub-7811885659406496 (pending approval) |
| Hosting | Cloudflare Pages | Via Wrangler (Workers Assets deployment) |
| CI/CD | GitHub → Cloudflare auto-deploy | Push to `main` triggers build |
| Package Manager | pnpm 10.4.1 | lockfile committed |

### Project Structure

```
/home/ubuntu/cozmic/
├── client/
│   ├── index.html              ← Entry HTML (AdSense, fonts, OG, JSON-LD)
│   ├── public/
│   │   ├── _headers            ← Cloudflare security + caching headers
│   │   ├── ads.txt             ← AdSense verification
│   │   ├── manifest.json       ← PWA manifest
│   │   ├── robots.txt          ← SEO crawl directives
│   │   ├── rss.xml             ← RSS feed
│   │   └── sitemap.xml         ← XML sitemap
│   └── src/
│       ├── App.tsx             ← Routes + React.lazy code splitting
│       ├── main.tsx            ← React entry point
│       ├── index.css           ← Global theme (OKLCH variables)
│       ├── components/
│       │   ├── AdSlot.tsx      ← AdSense ad unit (6 formats)
│       │   ├── AISummaryBadge.tsx ← AI one-sentence summary badge
│       │   ├── ArticleCard.tsx ← Reusable article card
│       │   ├── GiscusComments.tsx ← Comments (needs config)
│       │   ├── Navbar.tsx      ← Glassmorphism navigation
│       │   ├── Footer.tsx      ← Site footer with legal links
│       │   ├── StarField.tsx   ← Animated cosmic particles (RAF optimized)
│       │   ├── TrendingTicker.tsx ← Real-time trending bar
│       │   └── ScrollToTop.tsx ← Scroll reset on route change
│       ├── pages/
│       │   ├── Home.tsx        ← Hero, trending, Editor's Choice, verticals
│       │   ├── ArticlePage.tsx ← Full article view + ads + comments
│       │   ├── VerticalPage.tsx ← Category listing page
│       │   ├── About.tsx       ← About page
│       │   ├── Contact.tsx     ← Contact form
│       │   ├── PrivacyPolicy.tsx ← GDPR/CCPA/LFPDPPP compliant
│       │   └── NotFound.tsx    ← 404 page
│       ├── hooks/
│       │   └── usePageMeta.ts  ← Dynamic page titles/meta
│       └── lib/
│           └── data.ts         ← ALL ARTICLES + categories + helpers
├── server/
│   └── index.ts                ← Placeholder (static-only project)
├── shared/
│   └── const.ts                ← Shared constants placeholder
├── wrangler.jsonc              ← Cloudflare Workers/Pages config
├── vite.config.ts              ← Vite build config
├── package.json                ← Dependencies + scripts
├── tsconfig.json               ← TypeScript config
├── DEPLOYMENT_ERROR_LOG.md     ← CRITICAL: Read before every deploy
└── pnpm-lock.yaml              ← Lockfile
```

### Key Commands

| Action | Command |
|--------|---------|
| Dev server | `pnpm run dev` |
| Build | `pnpm run build` |
| Type check | `npx tsc --noEmit` |
| Deploy to Cloudflare | `npx wrangler deploy` |
| Full deploy pipeline | `pnpm install && pnpm run build && npx wrangler deploy` |
| Push to GitHub | `git push github main` (remote name: `github`) |

---

## 3. Content System

All articles live in a single file: **`client/src/lib/data.ts`**. This is the single source of truth for all content on the platform.

### Current Articles (8 total)

| # | Title | Vertical | Word Count |
|---|-------|----------|-----------|
| 1 | Your Brain Has a Secret Clock — And It Decides When You Actually Learn | Science | ~1,200 |
| 2 | Prozac Doesn't Just Fix Your Mood — It Literally Rewires Your Brain | Tech | ~1,100 |
| 3 | Screen Time Before Age 2 Is Silently Reshaping Your Generation's Brain | Lifestyle | ~1,300 |
| 4 | Jazz Musicians Are Literally Rewiring Their Brains in Real Time | Music | ~1,000 |
| 5 | Gen Z Is Going Analog — But They're Doing It Wrong | Culture | ~1,200 |
| 6 | Gaming Executives Aren't Gamers Anymore — And It's Killing the Industry | Gaming | ~1,400 |
| 7 | A 10-Minute Walk Can Rewire Your Memory — Here's the Neuroscience | Science | ~1,000 |
| 8 | How Memories Take Shape at the Synapse Level — Harvard's Breakthrough | Science | ~900 |

### Article Data Schema

Each article in `data.ts` follows this TypeScript interface:

```typescript
interface Article {
  id: string;           // URL slug (kebab-case)
  title: string;        // Headline
  excerpt: string;      // 1-2 sentence preview
  aiSummary: string;    // One-sentence AI summary (shown on cards)
  content: string;      // Full HTML article body
  category: string;     // "tech" | "gaming" | "culture" | "lifestyle" | "music" | "science"
  author: string;       // Byline
  date: string;         // ISO date string
  readTime: string;     // e.g., "7 min read"
  image: string;        // Hero image URL
  views: number;        // View count (static, for trending)
  trending: boolean;    // Show in trending ticker
  sourceName: string;   // Source publication name
  sourceUrl: string;    // Link to original study/source
  tags: string[];       // Topic tags
}
```

### Adding New Articles

To add a new article:
1. Add the article object to the `articles` array in `data.ts`
2. Set `trending: true` if it should appear in the trending ticker
3. Update `EDITORS_PICKS` array if it should be in Editor's Choice
4. Ensure the `category` matches one of the six verticals exactly
5. Use a unique `id` (this becomes the URL: `/article/{id}`)

### Content Guidelines

- **Tone:** Controversial but intellectually rigorous. NYT editorial quality, tailored for Gen Z women.
- **Sources:** Every article MUST cite peer-reviewed studies or credible journalism.
- **Length:** 800–1,500 words minimum.
- **Hook:** Each article needs a provocative opening that challenges conventional wisdom.
- **AI Summary:** One sentence, punchy, written in a slightly irreverent Gen Z voice.

---

## 4. Deployment Pipeline

### Architecture

```
GitHub (CozmicIlusion/Publisher) → Cloudflare Pages Auto-Deploy → cozmic.cloud
```

Cloudflare is configured to watch the `main` branch. Every push triggers:
1. `pnpm install && pnpm run build` (build command)
2. `npx wrangler deploy` (deploy command)
3. Assets served from `dist/public/`

### CRITICAL Deployment Rules

> **READ `DEPLOYMENT_ERROR_LOG.md` BEFORE EVERY DEPLOYMENT.** Six past errors are documented with root causes and fixes.

| Rule | Reason |
|------|--------|
| NEVER add `/* /index.html 200` to `_redirects` | Causes infinite loop with wrangler SPA handling |
| Keep `_redirects` file EMPTY | Overrides any cached version on Cloudflare |
| `wrangler.jsonc` MUST exist in repo root | Without it, `npx wrangler deploy` fails |
| Run `npx tsc --noEmit` before pushing | Catches type errors that break the build |
| No `--assets` flag on deploy command | Already configured in `wrangler.jsonc` |
| No `binding` field in wrangler assets config | Conflicts with assets-only Workers |

### Wrangler Configuration (wrangler.jsonc)

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "cozmic-publisher",
  "compatibility_date": "2026-02-18",
  "assets": {
    "directory": "./dist/public",
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "single-page-application"
  }
}
```

### If Deployment Fails

If Cloudflare deployment fails with a cached `_redirects` error:
1. Delete the `cozmic-publisher` project in Cloudflare dashboard
2. Recreate it fresh (this permanently clears the asset cache)
3. Reconnect to the GitHub repo
4. Push again

---

## 5. Monetization

### Google AdSense

- **Publisher ID:** `ca-pub-7811885659406496`
- **Status:** REJECTED (reason: "Low value content")
- **Required for approval:** 15–20 quality articles (currently have 8)
- **Integration points:**
  - `ads.txt` in `client/public/`
  - Meta tag in `client/index.html`
  - `<script>` tag in `<head>` of `index.html`
  - `AdSlot.tsx` component with 6 format variants (native, mid-article, sidebar, banner, sticky-rail, leaderboard)

### Ad Slot Formats in AdSlot.tsx

| Format | Placement | Size |
|--------|-----------|------|
| native | In-feed between articles | Responsive |
| mid-article | Between paragraphs in article body | Rectangle |
| sidebar | Right rail on article pages | 300x250 |
| banner | Top of page / between sections | 728x90 |
| sticky-rail | Fixed sidebar on scroll | 160x600 |
| leaderboard | Header area | 970x90 |

### Reapplication Strategy

Once 15–20 articles are published with proper sourcing, reapply at https://www.google.com/adsense/. Ensure:
- All articles are 800+ words
- Each has proper source attribution
- Privacy Policy is accessible from every page
- About page clearly describes the editorial mission
- Contact page has working form
- No placeholder/lorem ipsum content anywhere

---

## 6. SEO Configuration

### Already Implemented

- `robots.txt` — allows all crawlers, points to sitemap
- `sitemap.xml` — lists all pages and articles
- `rss.xml` — RSS feed for syndication
- Open Graph meta tags (title, description, type, URL, site_name)
- Twitter Card meta tags (summary_large_image)
- JSON-LD structured data (NewsMediaOrganization schema)
- Canonical URL (`https://cozmic.cloud/`)
- `<meta name="robots" content="index, follow, max-image-preview:large">` 
- Dynamic page titles via `usePageMeta` hook

### SEO Improvements Needed

1. **Dynamic sitemap** — Currently static; should auto-generate from `data.ts` articles
2. **Per-article JSON-LD** — Add `NewsArticle` schema on each article page
3. **Image alt text** — Ensure all images have descriptive alt attributes
4. **Internal linking** — Add "Related Articles" section at bottom of each article
5. **Meta descriptions per page** — Currently only homepage has one

---

## 7. Pending Tasks (Priority Order)

### CRITICAL — Must Do First

| # | Task | Details | Estimated Effort |
|---|------|---------|-----------------|
| 1 | Verify v6.0 deployment | Check Cloudflare dashboard for green status. If failed, delete project and recreate. | 5 min |
| 2 | Write 7–12 more articles | Need 15–20 total for AdSense. Use sources below. | 4–6 hours |
| 3 | Business Operations Playbook | Content workflow, vertical management, AI integration, publishing schedule | 2 hours |

### HIGH PRIORITY

| # | Task | Details |
|---|------|---------|
| 4 | Configure Giscus comments | Enable Discussions on CozmicIlusion/Publisher → install Giscus app → get repo ID + category ID → update `GiscusComments.tsx` |
| 5 | Cloudflare Email Routing | Set up hello@cozmic.cloud and privacy@cozmic.cloud forwarding (free) |
| 6 | Cloudflare Web Analytics | Add beacon script to `index.html` (free, privacy-friendly, no cookies) |
| 7 | Reapply for AdSense | Once 15–20 articles are live and indexed |

### MEDIUM PRIORITY

| # | Task | Details |
|---|------|---------|
| 8 | Cloudflare R2 storage | Set up for article images (10GB free) |
| 9 | Real-time trending | Use Cloudflare KV or Workers AI for dynamic view counts |
| 10 | GitHub Actions CI | Add workflow for type-check + build on PR (couldn't push via CLI — do via GitHub web editor) |
| 11 | Related Articles section | Add to ArticlePage.tsx — show 3 articles from same vertical |
| 12 | Dynamic sitemap generation | Build script that generates sitemap.xml from data.ts |
| 13 | Per-article JSON-LD | Add NewsArticle structured data on ArticlePage.tsx |
| 14 | X/Twitter topic monitoring | Track trending topics for content ideas |

### LOW PRIORITY / FUTURE

| # | Task | Details |
|---|------|---------|
| 15 | n8n automation pipelines | Content discovery → draft → review → publish workflow |
| 16 | Subdomain strategy | gaming.cozmic.cloud, tech.cozmic.cloud, etc. |
| 17 | Newsletter signup (Mailchimp/Buttondown) | Email list building |
| 18 | PWA offline support | Service worker for offline reading |
| 19 | Dark/light theme toggle | Currently dark-only |

---

## 8. Article Sources for New Content

These peer-reviewed sources have been identified but NOT yet turned into articles:

### Unused Sources

| Source | Suggested Vertical | URL |
|--------|-------------------|-----|
| Brain connectivity & learning (ScienceDirect) | Science | https://www.sciencedirect.com/science/article/pii/S0006899325002021 |
| FASEB Journal — exercise & neuroplasticity | Science/Lifestyle | https://faseb.onlinelibrary.wiley.com/doi/10.1096/fj.202400418RRR |
| Nature Neuroscience — brain circuits | Science | https://www.nature.com/articles/s41593-025-02124-9 |
| "10 Things People Say If They Love You" | Culture/Lifestyle | https://www.freejupiter.com/if-someone-truly-loves-you-theyll-say-these-10-things-often/ |

### Content Discovery Strategy for Remaining Articles

To reach 15–20 articles, write content across ALL verticals evenly:

- **Tech (need 2–3 more):** AI regulation, social media algorithms, right-to-repair, privacy tech
- **Gaming (need 2–3 more):** Indie game renaissance, gaming addiction studies, esports burnout
- **Culture (need 2–3 more):** Gen Z dating patterns, cancel culture studies, digital identity
- **Lifestyle (need 1–2 more):** Sleep science, nutrition myths debunked, remote work psychology
- **Music (need 2–3 more):** Streaming economics, AI-generated music ethics, vinyl revival data
- **Science (have 3, need 1–2 more):** Climate anxiety studies, space exploration economics

### Article Writing Process

1. Find a peer-reviewed study or credible source
2. Identify the controversial angle (what challenges conventional wisdom?)
3. Write 800–1,500 words with the study as backbone
4. Include direct quotes from the research
5. Add a punchy AI summary (one sentence)
6. Link to original source in `sourceUrl`
7. Add to `data.ts` with all required fields

---

## 9. Giscus Comments Setup Instructions

The component exists (`GiscusComments.tsx`) but needs configuration:

```
1. Go to https://github.com/CozmicIlusion/Publisher/settings
2. Scroll to "Features" → Enable "Discussions"
3. Create a Discussion category called "Article Comments"
4. Go to https://github.com/apps/giscus → Install on CozmicIlusion/Publisher
5. Go to https://giscus.app
6. Enter repo: CozmicIlusion/Publisher
7. Select mapping: "Discussion title contains page pathname"
8. Copy the generated `data-repo-id` and `data-category-id`
9. Update GiscusComments.tsx:
   - Replace `repo="cozmic-news/discussions"` → `repo="CozmicIlusion/Publisher"`
   - Replace `repoId=""` → `repoId="YOUR_REPO_ID"`
   - Replace `categoryId=""` → `categoryId="YOUR_CATEGORY_ID"`
10. Commit and push
```

---

## 10. Cloudflare Free-Tier Features to Activate

| Service | Free Tier | Use Case | Status |
|---------|-----------|----------|--------|
| Web Analytics | Unlimited, no cookies | Privacy-friendly traffic tracking | NOT ACTIVATED |
| Email Routing | Unlimited addresses | hello@ and privacy@ forwarding | NOT SET UP |
| R2 Storage | 10GB, no egress fees | Article hero images | NOT SET UP |
| KV Store | 1GB, 100K reads/day | View counts, trending data | NOT SET UP |
| Workers AI | 10K inferences/day | Article summaries, content moderation | NOT SET UP |
| D1 Database | 5GB, 5M reads/month | Article metadata, analytics | NOT SET UP |
| Turnstile | Unlimited | CAPTCHA for contact form | NOT SET UP |
| Cache Rules | 10 rules | Aggressive static asset caching | PARTIALLY (via _headers) |

### Activation Steps

**Web Analytics:**
1. Cloudflare Dashboard → Analytics & Logs → Web Analytics
2. Add site: cozmic.cloud
3. Copy the beacon script
4. Add to `client/index.html` before `</body>`

**Email Routing:**
1. Cloudflare Dashboard → Email → Email Routing
2. Add destination email (personal email)
3. Create routes: hello@cozmic.cloud → personal, privacy@cozmic.cloud → personal

---

## 11. Design System Reference

### Color Tokens (OKLCH)

```css
--color-space-black: oklch(0.08 0.02 275);      /* Background */
--color-deep-void: oklch(0.12 0.04 275);         /* Card backgrounds */
--color-nebula-dark: oklch(0.16 0.05 275);       /* Elevated surfaces */
--color-electric-cyan: oklch(0.85 0.18 192);     /* Primary accent */
--color-aurora-pink: oklch(0.75 0.20 350);       /* Secondary accent */
--color-stardust-gold: oklch(0.82 0.15 85);      /* Tertiary accent */
--color-cosmic-gray: oklch(0.60 0.02 270);       /* Muted text */
--color-starlight: oklch(0.95 0.01 270);         /* Primary text */
```

### Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display/Headlines | Space Grotesk | 600–700 | h1, h2, article titles |
| Body | DM Sans | 400–500 | Paragraphs, UI text |
| AI Summaries | Science Gothic | 100–200 (thin) | AI badge text, condensed width |

### Component Patterns

- **Glassmorphism cards:** `background: oklch(0.12 0.04 275 / 40%)` + `backdrop-filter: blur(12px)` + `border: 1px solid oklch(0.85 0.18 192 / 8%)`
- **Neon glow:** `box-shadow: 0 0 20px oklch(0.85 0.18 192 / 20%)`
- **Category badges:** Each vertical has a unique `badgeClass` defined in `data.ts` `categoryMeta`

---

## 12. Business Operations Playbook (TO BE CREATED)

This document has NOT been written yet. It should cover:

1. **Account Structure** — How to organize GitHub, Cloudflare, AdSense, social media accounts
2. **Content Curation Workflow** — Source discovery → research → draft → edit → publish pipeline
3. **Vertical Management** — Editorial strategy per vertical, posting cadence, topic selection
4. **AI Integration** — n8n pipelines, Gemini Gem usage, Manus collaboration patterns
5. **Publishing Schedule** — Recommended frequency (2–3 articles/week minimum for AdSense)
6. **SEO Strategy** — Keyword research per vertical, internal linking, backlink building
7. **Social Media** — X/Twitter, Instagram, TikTok presence for traffic driving
8. **Brand Guidelines** — Voice, tone, visual identity rules per vertical
9. **Monetization Roadmap** — AdSense → affiliate → sponsored content → premium
10. **Growth Metrics** — KPIs to track (UV, PV, time on page, bounce rate, ad revenue)

---

## 13. Gemini Gem (Editorial Assistant)

A Gemini Gem document exists at `/home/ubuntu/COZMIC_Gemini_Gem.md`. This configures Google Gemini as a Cozmic-aware editorial assistant for:

- Drafting articles from source URLs
- Maintaining brand voice consistency
- Generating AI summaries
- Suggesting controversial angles
- Checking source credibility

The Gem should be uploaded to Google AI Studio as a custom instruction set.

---

## 14. Known Issues & Gotchas

| Issue | Impact | Workaround |
|-------|--------|-----------|
| Cloudflare caches old `_redirects` | Deploy fails with infinite loop | Delete project and recreate if persists |
| `_redirects` must be EMPTY file | Presence of file overrides cache; content causes loops | Never write rules to it |
| AdSense rejected for thin content | No ad revenue | Publish 7+ more articles, then reapply |
| Giscus shows nothing | Comments don't work | Configure repo ID (see Section 9) |
| GitHub Actions CI can't be pushed via CLI | No automated checks | Add workflow via GitHub web editor |
| `server/index.ts` exists but unused | Confusing for contributors | It's a template placeholder, ignore it |
| Build includes server bundle step | Unnecessary for static site | Harmless, outputs to `dist/` but only `dist/public/` is deployed |

---

## 15. Environment & Authentication

### GitHub (CozmicIlusion)

The `gh` CLI is authenticated. To verify:
```bash
gh auth status
```

If expired, re-authenticate:
```bash
gh auth login --web
```

### Cloudflare

Wrangler uses the Cloudflare account linked to the project. If deploying locally:
```bash
npx wrangler login
npx wrangler deploy
```

For auto-deploy via GitHub, Cloudflare Pages is connected to the repo. No manual deploy needed — just push to `main`.

### Git Remote Setup

The sandbox uses `origin` for the internal webdev system. To push to GitHub:
```bash
git remote add github https://github.com/CozmicIlusion/Publisher.git
git push github main
```

---

## 16. Pre-Deployment Checklist

Run this EVERY TIME before pushing to GitHub:

```bash
# 1. Type check — must be zero errors
npx tsc --noEmit

# 2. Verify _redirects is empty
cat client/public/_redirects  # Should output nothing

# 3. Verify wrangler.jsonc exists
cat wrangler.jsonc  # Should show valid config

# 4. Build succeeds
pnpm run build

# 5. Check DEPLOYMENT_ERROR_LOG.md for any new patterns
cat DEPLOYMENT_ERROR_LOG.md

# 6. Commit with versioned message
git add -A
git commit -m "v7.0: [description of changes]"

# 7. Push
git push github main
```

---

## 17. File Locations Summary

| Document | Path | Purpose |
|----------|------|---------|
| Complete Strategy Guide | `/home/ubuntu/COZMIC_Complete_Strategy_Guide.md` | 4,000+ word platform strategy |
| Gemini Gem Instructions | `/home/ubuntu/COZMIC_Gemini_Gem.md` | Editorial AI assistant config |
| Code Audit | `/home/ubuntu/cozmic_audit.md` | 14 issues identified + fixes applied |
| Article Plan | `/home/ubuntu/article_plan.md` | 7 planned articles with sources |
| Free Tier Research | `/home/ubuntu/free_tier_research.md` | GitHub + Cloudflare free features |
| Hosting Research | `/home/ubuntu/hosting_research.md` | Platform comparison |
| Deployment Error Log | `/home/ubuntu/cozmic/DEPLOYMENT_ERROR_LOG.md` | 6 past errors + fixes |
| This Handoff | `/home/ubuntu/COZMIC_HANDOFF.md` | You are here |

---

## 18. Quick Start for Codex/Claude

### To add a new article:
1. Open `client/src/lib/data.ts`
2. Add article object to `articles` array following the schema in Section 3
3. Run `npx tsc --noEmit` to verify no type errors
4. Commit: `git add -A && git commit -m "v6.x: Add [article title]"`
5. Push: `git push github main`

### To modify the homepage:
- Edit `client/src/pages/Home.tsx`
- Editor's Choice picks are in `EDITORS_PICKS` array in `data.ts`
- Trending articles are those with `trending: true` in `data.ts`

### To add a new page:
1. Create component in `client/src/pages/NewPage.tsx`
2. Add lazy import in `App.tsx`: `const NewPage = lazy(() => import("./pages/NewPage"));`
3. Add route in `App.tsx`: `<Route path="/new-page" component={NewPage} />`
4. Add to `usePageMeta` hook if it needs a custom title

### To modify styling:
- Global theme tokens: `client/src/index.css`
- Component-specific: Tailwind classes inline
- Color palette: OKLCH values (see Section 11)

---

## 19. Success Criteria

The project is "done" when:

1. **15–20 quality articles** published across all 6 verticals (evenly distributed)
2. **Google AdSense approved** and serving ads
3. **Giscus comments working** on every article
4. **Cloudflare Web Analytics** tracking traffic
5. **Email routing** active for hello@ and privacy@
6. **Business Operations Playbook** written and delivered
7. **Site loads fast** (< 2s LCP, > 90 Lighthouse score)
8. **All verticals have 2+ articles** each

---

## 20. Contact & Accounts

| Service | Account | Notes |
|---------|---------|-------|
| GitHub | CozmicIlusion | Repo: Publisher |
| Cloudflare | Owner's account | Project: cozmic-publisher |
| Google AdSense | pub-7811885659406496 | Pending reapplication |
| Domain | cozmic.cloud (GoDaddy) | Nameservers pointed to Cloudflare |
| Giscus | Not yet configured | Needs GitHub Discussions enabled |

---

*End of handoff. All context needed to continue development is contained in this document and the referenced files in the repository.*
