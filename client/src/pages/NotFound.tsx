// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// 404: Missing route, same atmosphere as the rest of the site
// ============================================================
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import CosmicAtmosphere from "@/components/CosmicAtmosphere";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Compass, Home, Map } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  const headingStyle = { fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" };
  const accentColor = "oklch(0.85 0.18 192)";

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <SEOHead
        pageType="static"
        title="Page Not Found"
        description="This page does not exist on Cozmic. Return home or browse every article and route on the site map."
        canonical="https://cozmic.cloud/404"
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
              <Compass className="w-5 h-5" style={{ color: accentColor }} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold" style={headingStyle}>
              404
            </h1>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={headingStyle}>
            This signal never arrived
          </h2>
          <p className="leading-relaxed mb-10" style={{ color: "oklch(0.78 0.01 270)" }}>
            That URL is not a Cozmic page. It may have moved, or it may never have existed. You can return home or scan the full site map.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, oklch(0.85 0.18 192), oklch(0.7 0.2 200))",
                color: "oklch(0.08 0.03 270)",
                fontFamily: "var(--font-display)",
              }}
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <Link
              href="/site-map"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "oklch(0.12 0.04 275 / 40%)",
                border: "1px solid oklch(0.85 0.18 192 / 25%)",
                color: accentColor,
                fontFamily: "var(--font-display)",
              }}
            >
              <Map className="w-4 h-4" />
              Site map
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
