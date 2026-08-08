// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// Editorial Policy: Demonstrates E-E-A-T for AdSense/Google
// Covers methodology, corrections, AI disclosure, sourcing standards
// ============================================================
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Shield, BookOpen, AlertTriangle, Bot, CheckCircle, RefreshCw } from "lucide-react";

export default function EditorialPolicy() {
  const sectionStyle = { color: "oklch(0.78 0.01 270)" };
  const headingStyle = { fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" };
  const accentColor = "oklch(0.85 0.18 192)";

  const principles = [
    { icon: BookOpen, title: "Source-First Journalism", desc: "Every factual claim links to its original peer-reviewed study, institutional report, or credible primary source." },
    { icon: Bot, title: "AI Transparency", desc: "We disclose when AI assists in research or drafting. All content is editorially reviewed and verified by humans before publication." },
    { icon: AlertTriangle, title: "Corrections Policy", desc: "We correct errors promptly and transparently. Corrections are noted at the top of affected articles with timestamps." },
    { icon: CheckCircle, title: "Editorial Independence", desc: "Advertising never influences our editorial decisions. Sponsored content is always clearly labeled and separated from editorial." },
  ];

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <SEOHead
        pageType="static"
        title="Editorial Policy"
        description="Cozmic's editorial standards, methodology, corrections policy, and AI transparency disclosure. How we research, write, and verify our journalism."
        canonical="https://cozmic.cloud/editorial-policy"
      />
      <StarField />
      <Navbar />

      <main className="container relative z-10 pt-28 pb-16 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.85 0.18 192 / 15%)", border: "1px solid oklch(0.85 0.18 192 / 30%)" }}
            >
              <Shield className="w-5 h-5" style={{ color: accentColor }} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold" style={headingStyle}>
              Editorial Policy
            </h1>
          </div>

          <p className="text-xs mb-8" style={{ color: "oklch(0.5 0.02 270)" }}>
            Last updated: August 7, 2026
          </p>

          {/* Core Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl p-5"
                style={{ background: "oklch(0.12 0.04 275 / 40%)", border: "1px solid oklch(0.25 0.04 275 / 30%)" }}
              >
                <p.icon className="w-5 h-5 mb-3" style={{ color: accentColor }} />
                <h3 className="text-sm font-semibold mb-1.5" style={headingStyle}>{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "oklch(0.65 0.02 270)" }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8" style={sectionStyle}>
            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>Our Mission</h2>
              <p className="leading-relaxed">
                Cozmic exists to make complex research accessible and engaging for a generation that deserves better than clickbait. We translate peer-reviewed science, industry analysis, and cultural research into editorial content that informs, challenges, and provokes thought. Our editorial voice is intentionally provocative — we believe the best journalism makes you uncomfortable enough to think differently.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>Sourcing Standards</h2>
              <p className="leading-relaxed mb-3">
                We maintain strict sourcing standards to ensure the credibility of our content:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "oklch(0.7 0.01 270)" }}>
                <li><strong>Primary sources preferred:</strong> Peer-reviewed journals (Nature, Science, PNAS, FASEB, etc.), institutional press releases, official reports</li>
                <li><strong>Secondary sources accepted:</strong> Established science journalism outlets (Neuroscience News, Ars Technica, Nature News) when linking to the underlying study</li>
                <li><strong>Attribution required:</strong> Every factual claim must be traceable to a named source with a hyperlink</li>
                <li><strong>Recency matters:</strong> We prioritize studies published within the last 12 months unless historical context is relevant</li>
                <li><strong>Single-study caution:</strong> When reporting on a single study, we note limitations and avoid overgeneralizing findings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>AI in Our Workflow</h2>
              <p className="leading-relaxed mb-3">
                We believe in radical transparency about AI's role in our editorial process. Here is exactly how we use AI:
              </p>
              <div
                className="rounded-lg p-4 mb-4"
                style={{ background: "oklch(0.14 0.05 275 / 50%)", border: "1px solid oklch(0.85 0.18 192 / 12%)" }}
              >
                <h4 className="text-sm font-semibold mb-2" style={{ color: accentColor }}>AI Does:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: "oklch(0.7 0.01 270)" }}>
                  <li>Assist in discovering and summarizing research papers</li>
                  <li>Generate initial article drafts from provided source material</li>
                  <li>Produce one-sentence AI summaries displayed on article cards</li>
                  <li>Suggest SEO-optimized headlines and meta descriptions</li>
                </ul>
              </div>
              <div
                className="rounded-lg p-4"
                style={{ background: "oklch(0.14 0.05 275 / 50%)", border: "1px solid oklch(0.75 0.2 350 / 12%)" }}
              >
                <h4 className="text-sm font-semibold mb-2" style={{ color: "oklch(0.75 0.2 350)" }}>AI Does NOT:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: "oklch(0.7 0.01 270)" }}>
                  <li>Make editorial decisions about what to publish</li>
                  <li>Fabricate quotes, data, or sources</li>
                  <li>Publish content without human editorial review</li>
                  <li>Determine our editorial stance or opinion on any topic</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>Corrections Policy</h2>
              <p className="leading-relaxed mb-3">
                We take accuracy seriously. When we get something wrong, we fix it openly:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "oklch(0.7 0.01 270)" }}>
                <li><strong>Minor corrections</strong> (typos, formatting, broken links): Fixed silently within 24 hours</li>
                <li><strong>Factual corrections</strong> (incorrect data, misattributed quotes): Corrected with a visible "Correction" notice at the top of the article, including the date and nature of the error</li>
                <li><strong>Significant errors</strong> (fundamental misrepresentation of a study's findings): Article may be retracted or substantially rewritten with a prominent editor's note explaining the change</li>
              </ul>
              <p className="leading-relaxed mt-3">
                To report an error, email{" "}
                <a href="mailto:hello@cozmic.cloud" style={{ color: accentColor }}>hello@cozmic.cloud</a>{" "}
                with the article URL and a description of the issue. We aim to respond within 48 hours.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>Opinion vs. Reporting</h2>
              <p className="leading-relaxed">
                Cozmic publishes both reported pieces and opinion/analysis. Our articles are editorial in nature — they present factual research through an opinionated lens. We do not claim to be neutral; we claim to be honest. When we express an opinion, it is clearly framed as such. When we cite a fact, it is sourced. Readers should understand that our provocative headlines and angles represent editorial choices, not the conclusions of the studies we cite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>Advertising and Editorial Independence</h2>
              <p className="leading-relaxed">
                Advertising revenue supports our ability to publish free content. However, advertisers have zero influence over our editorial decisions. We use Google AdSense for programmatic advertising — we do not select which ads appear on our pages. Sponsored content, if ever published, will be clearly labeled with a "Sponsored" tag and will never be disguised as editorial content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>Contact the Editorial Team</h2>
              <p className="leading-relaxed">
                Questions, concerns, or tips? Reach our editorial team at{" "}
                <a href="mailto:hello@cozmic.cloud" style={{ color: accentColor }}>hello@cozmic.cloud</a>.
                We read every message and respond within 48 hours.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
