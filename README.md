# COZMIC — The Future of News

> A next-generation news platform for the connected generation. Tech, gaming, culture, lifestyle, and music — curated by AI, verified by humans.

## Stack

- **Frontend**: React 19 + Tailwind CSS 4 + Framer Motion
- **Design**: Cosmic Glassmorphism — frosted glass cards, nebula backgrounds, neon accents
- **Fonts**: Space Grotesk (headlines) + DM Sans (body) + Caveat (AI summaries)
- **Hosting**: Cloudflare Pages (unlimited bandwidth, global CDN)
- **Comments**: Giscus (GitHub Discussions)
- **CI/CD**: GitHub Actions → Cloudflare Pages auto-deploy on push

## Features

- 5 content verticals: Tech, Gaming, Culture, Lifestyle, Music
- Real-time trending articles ticker with live view counts
- AI-generated one-sentence article summaries
- Giscus-powered comments and discussions
- Ad placement slots (AdSense / EthicalAds ready)
- Newsletter signup integration
- Full SEO: Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt, RSS
- Cloudflare-optimized: custom headers, cache rules, security headers
- PWA-ready with web manifest

## Development

```bash
pnpm install
pnpm run dev
```

## Build & Deploy

```bash
pnpm run build
# Output: dist/public/
```

Cloudflare Pages auto-deploys on push to `main`.

## Project Structure

```
client/
  public/          → Static assets (robots.txt, sitemap, _headers, _redirects)
  src/
    pages/         → Home, ArticlePage, VerticalPage
    components/    → Navbar, ArticleCard, StarField, TrendingTicker, etc.
    lib/           → Data layer, utilities
    contexts/      → Theme context
.github/workflows/ → CI pipeline
wrangler.jsonc     → Cloudflare deployment config
```

## License

MIT
