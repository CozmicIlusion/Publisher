// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// AuthorPage: Author profile with bio, expertise, and article list
// Demonstrates E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
// ============================================================
import { Link } from "wouter";
import { motion } from "framer-motion";
import { User, BookOpen, Award, Globe, Mail, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import StarField from "@/components/StarField";
import SEOHead from "@/components/SEOHead";
import { articles } from "@/lib/data";

export default function AuthorPage() {
  const accentColor = "oklch(0.85 0.18 192)";
  const headingStyle = { fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" };
  const allArticles = articles;

  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Cozmic Editorial",
    "url": "https://cozmic.cloud/author/cozmic-editorial",
    "jobTitle": "Editorial Team",
    "worksFor": {
      "@type": "NewsMediaOrganization",
      "name": "Cozmic",
      "url": "https://cozmic.cloud",
    },
    "description": "The Cozmic Editorial team translates peer-reviewed research into provocative, accessible journalism for the connected generation.",
  };

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <SEOHead
        pageType="author"
        title="Cozmic Editorial Team"
        description="Meet the Cozmic Editorial team — AI-augmented journalists translating peer-reviewed research into provocative, accessible content for Gen Z."
        canonical="https://cozmic.cloud/author/cozmic-editorial"
      />
      <StarField />
      <Navbar />

      <main className="container relative z-10 pt-28 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Author Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Avatar */}
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, oklch(0.85 0.18 192 / 20%), oklch(0.72 0.25 350 / 20%))",
                  border: "2px solid oklch(0.85 0.18 192 / 40%)",
                }}
              >
                <Sparkles className="w-10 h-10" style={{ color: accentColor }} />
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={headingStyle}>
                  Cozmic Editorial
                </h1>
                <p className="text-sm mb-4" style={{ color: "oklch(0.6 0.02 270)" }}>
                  AI-Augmented Editorial Team · {allArticles.length} Published Articles
                </p>
                <p className="leading-relaxed max-w-xl" style={{ color: "oklch(0.75 0.01 270)" }}>
                  We are a hybrid editorial team combining human editorial judgment with AI-powered research capabilities. Our mission is to translate complex peer-reviewed science and cultural research into provocative, accessible journalism that challenges conventional wisdom and respects our readers' intelligence.
                </p>
              </div>
            </div>

            {/* Expertise Badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: BookOpen, label: "Neuroscience & Psychology" },
                { icon: Award, label: "Peer-Reviewed Sources" },
                { icon: Globe, label: "Gen Z Culture & Trends" },
                { icon: User, label: "Human-Verified Content" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "oklch(0.14 0.04 275 / 50%)",
                    border: "1px solid oklch(0.25 0.04 275 / 40%)",
                    color: "oklch(0.7 0.02 270)",
                  }}
                >
                  <badge.icon className="w-3.5 h-3.5" style={{ color: accentColor }} />
                  {badge.label}
                </div>
              ))}
            </div>

            {/* Editorial Process */}
            <div
              className="mt-8 rounded-xl p-6"
              style={{ background: "oklch(0.12 0.04 275 / 40%)", border: "1px solid oklch(0.25 0.04 275 / 30%)" }}
            >
              <h3 className="text-sm font-semibold mb-3" style={headingStyle}>Our Editorial Process</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { step: "01", title: "Research", desc: "AI scans peer-reviewed journals and identifies breakthrough studies" },
                  { step: "02", title: "Draft & Verify", desc: "Human editors verify claims, add context, and craft the editorial angle" },
                  { step: "03", title: "Publish", desc: "Final review for accuracy, sourcing, and tone before publication" },
                ].map((s) => (
                  <div key={s.step}>
                    <span className="text-xs font-bold" style={{ color: accentColor }}>{s.step}</span>
                    <h4 className="text-sm font-semibold mt-1 mb-1" style={{ color: "oklch(0.9 0.01 270)" }}>{s.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "oklch(0.6 0.02 270)" }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="mailto:hello@cozmic.cloud"
                className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg transition-colors hover:opacity-80"
                style={{ background: "oklch(0.85 0.18 192 / 15%)", color: accentColor, border: "1px solid oklch(0.85 0.18 192 / 30%)" }}
              >
                <Mail className="w-3.5 h-3.5" />
                Contact Editorial
              </a>
              <Link
                href="/editorial-policy"
                className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg transition-colors hover:opacity-80"
                style={{ color: "oklch(0.65 0.02 270)", border: "1px solid oklch(0.25 0.04 275 / 40%)" }}
              >
                Read Our Editorial Policy
              </Link>
            </div>
          </div>

          {/* Published Articles */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold mb-6" style={headingStyle}>
              Published Articles ({allArticles.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allArticles.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} showSummary={true} />
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      {/* Author JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      <Footer />
    </div>
  );
}
