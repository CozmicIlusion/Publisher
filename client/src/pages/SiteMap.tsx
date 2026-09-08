// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// Human-readable site map: static routes + every article from data.ts
// ============================================================
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import CosmicAtmosphere from "@/components/CosmicAtmosphere";
import SEOHead from "@/components/SEOHead";
import { articles, ALL_CATEGORIES, categoryMeta, getArticlesByCategory } from "@/lib/data";
import { motion } from "framer-motion";
import { Map } from "lucide-react";
import { Link } from "wouter";

const staticRoutes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/author/cozmic-editorial", label: "Cozmic Editorial" },
  { href: "/site-map", label: "Site map" },
] as const;

export default function SiteMap() {
  const headingStyle = { fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" };
  const accentColor = "oklch(0.85 0.18 192)";
  const linkStyle = { color: "oklch(0.78 0.01 270)" };

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <SEOHead
        pageType="static"
        title="Site Map"
        description="Human-readable map of every Cozmic page and article — six verticals, legal pages, and all published stories."
        canonical="https://cozmic.cloud/site-map"
      />
      <StarField />
      <CosmicAtmosphere />
      <Navbar />

      <main className="container relative z-10 pt-28 pb-16 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.85 0.18 192 / 15%)", border: "1px solid oklch(0.85 0.18 192 / 30%)" }}
            >
              <Map className="w-5 h-5" style={{ color: accentColor }} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold" style={headingStyle}>
              Site map
            </h1>
          </div>

          <p className="leading-relaxed mb-10" style={{ color: "oklch(0.78 0.01 270)" }}>
            Every public route on Cozmic, plus all {articles.length} published articles. Crawlers should use{" "}
            <a href="/sitemap.xml" style={{ color: accentColor }}>
              sitemap.xml
            </a>
            .
          </p>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4" style={headingStyle}>
              Pages
            </h2>
            <ul className="space-y-2">
              {staticRoutes.map((route) => (
                <li key={route.href}>
                  <Link href={route.href} className="text-sm transition-colors hover:text-primary" style={linkStyle}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4" style={headingStyle}>
              Verticals
            </h2>
            <ul className="space-y-2">
              {ALL_CATEGORIES.map((category) => (
                <li key={category}>
                  <Link
                    href={`/vertical/${category}`}
                    className="text-sm transition-colors hover:text-primary"
                    style={{ color: categoryMeta[category].color }}
                  >
                    {categoryMeta[category].label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2" style={headingStyle}>
              Articles
            </h2>
            <p className="text-xs mb-6" style={{ color: "oklch(0.5 0.02 270)" }}>
              {articles.length} stories
            </p>
            <div className="space-y-8">
              {ALL_CATEGORIES.map((category) => {
                const group = getArticlesByCategory(category);
                if (group.length === 0) return null;
                return (
                  <div key={category}>
                    <h3 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: categoryMeta[category].color, fontFamily: "var(--font-display)" }}>
                      {categoryMeta[category].label}
                    </h3>
                    <ul className="space-y-2">
                      {group.map((article) => (
                        <li key={article.slug}>
                          <Link
                            href={`/article/${article.slug}`}
                            className="text-sm leading-relaxed transition-colors hover:text-primary"
                            style={linkStyle}
                          >
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
