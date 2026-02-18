// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// Privacy Policy: US (CCPA/CPRA), Mexico (LFPDPPP), Global (GDPR)
// ============================================================

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  const sectionStyle = {
    color: "oklch(0.78 0.01 270)",
  };
  const headingStyle = {
    fontFamily: "var(--font-display)",
    color: "oklch(0.93 0.01 270)",
  };
  const subheadingStyle = {
    fontFamily: "var(--font-display)",
    color: "oklch(0.88 0.05 192)",
  };
  const accentColor = "oklch(0.85 0.18 192)";

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <StarField />
      <Navbar />

      <div className="container relative z-10 pt-28 pb-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6" style={{ color: accentColor }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: accentColor, fontFamily: "var(--font-display)" }}
            >
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={headingStyle}>
            Privacy Policy
          </h1>
          <p className="text-sm mb-10" style={{ color: "oklch(0.5 0.02 270)" }}>
            Last updated: February 18, 2026 &middot; Effective immediately
          </p>

          {/* Content */}
          <div className="space-y-8 text-base leading-[1.85]" style={sectionStyle}>
            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>1. Who We Are</h2>
              <p>
                Cozmic Company ("Cozmic," "we," "us," or "our") operates the website <strong style={{ color: "oklch(0.88 0.02 270)" }}>cozmic.cloud</strong> and its associated subdomains. We are a digital news and content platform headquartered in the Americas. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>2. Information We Collect</h2>
              
              <h3 className="text-lg font-bold mt-6 mb-2" style={subheadingStyle}>2.1 Information Automatically Collected</h3>
              <p className="mb-4">When you visit our site, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Device and browser type, operating system, and version</li>
                <li>IP address and approximate geographic location</li>
                <li>Pages visited, time spent on pages, and referring URLs</li>
                <li>Cookies and similar tracking technologies (see Section 5)</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-2" style={subheadingStyle}>2.2 Information You Provide</h3>
              <p>When you voluntarily interact with our platform (e.g., subscribing to our newsletter, submitting a contact form, or leaving a comment), we may collect your name, email address, and any other information you choose to provide.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Operate, maintain, and improve our website and services</li>
                <li>Deliver personalized content and relevant advertisements</li>
                <li>Send newsletters and updates you have opted into</li>
                <li>Analyze usage trends and site performance</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Prevent fraud, abuse, and unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>4. Advertising & Third-Party Services</h2>
              <p className="mb-4">
                We use <strong style={{ color: "oklch(0.88 0.02 270)" }}>Google AdSense</strong> and other third-party advertising services to display ads on our site. These services may use cookies and similar technologies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your browsing activity.
              </p>
              <p className="mb-4">
                You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: accentColor }}>Google Ads Settings</a> or <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: accentColor }}>aboutads.info</a>.
              </p>
              <p>
                We may also use analytics services such as Cloudflare Web Analytics and Umami to understand how visitors use our site. These tools may collect anonymized data about your browsing behavior.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>5. Cookies & Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies, web beacons, and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device. You can control cookies through your browser settings. Disabling cookies may affect the functionality of certain features.
              </p>
              <p>Types of cookies we use:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong style={{ color: "oklch(0.88 0.02 270)" }}>Essential Cookies:</strong> Required for the site to function properly</li>
                <li><strong style={{ color: "oklch(0.88 0.02 270)" }}>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
                <li><strong style={{ color: "oklch(0.88 0.02 270)" }}>Advertising Cookies:</strong> Used by third-party ad services to deliver relevant ads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>6. Your Rights</h2>

              <h3 className="text-lg font-bold mt-6 mb-2" style={subheadingStyle}>6.1 United States (CCPA/CPRA — California Residents)</h3>
              <p className="mb-4">If you are a California resident, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Know what personal information we collect and how it is used</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of the sale or sharing of personal information</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>
              <p>We do not sell your personal information. To exercise your rights, contact us at the address below.</p>

              <h3 className="text-lg font-bold mt-6 mb-2" style={subheadingStyle}>6.2 Mexico (LFPDPPP — Ley Federal de Protección de Datos Personales)</h3>
              <p className="mb-4">If you are a resident of Mexico, you have ARCO rights:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong style={{ color: "oklch(0.88 0.02 270)" }}>Acceso:</strong> Right to access your personal data</li>
                <li><strong style={{ color: "oklch(0.88 0.02 270)" }}>Rectificación:</strong> Right to correct inaccurate data</li>
                <li><strong style={{ color: "oklch(0.88 0.02 270)" }}>Cancelación:</strong> Right to request deletion of your data</li>
                <li><strong style={{ color: "oklch(0.88 0.02 270)" }}>Oposición:</strong> Right to object to the processing of your data</li>
              </ul>
              <p>To exercise your ARCO rights, send a request to our contact email with proof of identity.</p>

              <h3 className="text-lg font-bold mt-6 mb-2" style={subheadingStyle}>6.3 European Union & Global (GDPR)</h3>
              <p className="mb-4">If you are located in the European Economic Area (EEA), United Kingdom, or other jurisdictions with similar data protection laws, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access, correct, or delete your personal data</li>
                <li>Restrict or object to the processing of your data</li>
                <li>Data portability (receive your data in a structured format)</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p>Our legal basis for processing personal data includes legitimate interests (operating our platform), consent (for newsletters and cookies), and legal obligations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>7. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Analytics data is retained in anonymized form and is not linked to individual users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>8. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information, including encryption in transit (TLS/SSL), secure hosting through Cloudflare, and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>9. Children's Privacy</h2>
              <p>
                Our website is not directed at children under the age of 13 (or 16 in the EEA). We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place, including standard contractual clauses and reliance on adequacy decisions where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of the site after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={headingStyle}>12. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, wish to exercise your rights, or have concerns about how your data is handled, please contact us:
              </p>
              <div
                className="rounded-xl p-5"
                style={{
                  background: "linear-gradient(135deg, oklch(0.12 0.04 275 / 50%), oklch(0.1 0.03 280 / 30%))",
                  border: "1px solid oklch(0.85 0.18 192 / 12%)",
                }}
              >
                <p className="font-semibold mb-1" style={{ fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" }}>
                  Cozmic Company
                </p>
                <p>Email: <a href="mailto:privacy@cozmic.cloud" className="underline" style={{ color: accentColor }}>privacy@cozmic.cloud</a></p>
                <p>Website: <a href="https://cozmic.cloud" className="underline" style={{ color: accentColor }}>cozmic.cloud</a></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
