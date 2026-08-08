// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// Terms of Service: Required for AdSense compliance
// ============================================================
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Terms() {
  const sectionStyle = { color: "oklch(0.78 0.01 270)" };
  const headingStyle = { fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" };

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <SEOHead
        pageType="static"
        title="Terms of Service"
        description="Terms of Service for Cozmic — the next-generation news platform. Read our terms governing the use of cozmic.cloud."
        canonical="https://cozmic.cloud/terms"
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
              <FileText className="w-5 h-5" style={{ color: "oklch(0.85 0.18 192)" }} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold" style={headingStyle}>
              Terms of Service
            </h1>
          </div>

          <p className="text-xs mb-8" style={{ color: "oklch(0.5 0.02 270)" }}>
            Last updated: August 7, 2026
          </p>

          <div className="space-y-8" style={sectionStyle}>
            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using cozmic.cloud (the "Site"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site. These terms apply to all visitors, users, and others who access or use the Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>2. Description of Service</h2>
              <p className="leading-relaxed">
                Cozmic is a digital news and opinion platform that publishes editorial content across multiple verticals including Technology, Gaming, Culture, Lifestyle, Music, and Science. Our content is AI-assisted in research and drafting but is editorially reviewed and verified by human editors before publication. We provide our content free of charge, supported by advertising.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>3. Intellectual Property</h2>
              <p className="leading-relaxed mb-3">
                All content published on Cozmic — including but not limited to articles, graphics, logos, icons, images, audio clips, digital downloads, and data compilations — is the property of Cozmic Company or its content suppliers and is protected by international copyright laws.
              </p>
              <p className="leading-relaxed">
                You may share links to our articles and quote brief excerpts (up to 200 words) with proper attribution and a link back to the original article. Reproducing full articles without written permission is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>4. User Conduct</h2>
              <p className="leading-relaxed mb-3">When using our Site, you agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "oklch(0.7 0.01 270)" }}>
                <li>Use the Site for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorized access to any portion of the Site or its systems</li>
                <li>Interfere with or disrupt the Site's servers or networks</li>
                <li>Use automated systems (bots, scrapers) to access the Site without our written permission</li>
                <li>Post or transmit any content that is defamatory, obscene, or infringes on third-party rights</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>5. Comments and User-Generated Content</h2>
              <p className="leading-relaxed">
                Our commenting system is powered by GitHub Discussions via Giscus. By posting comments, you agree to GitHub's Terms of Service in addition to ours. We reserve the right to remove any comments that violate our community guidelines, are spam, or are otherwise inappropriate. You retain ownership of your comments but grant us a non-exclusive license to display them on our Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>6. Advertising</h2>
              <p className="leading-relaxed">
                Cozmic displays advertisements provided by Google AdSense and potentially other advertising partners. These advertisements are clearly labeled. We are not responsible for the content of third-party advertisements or the products/services they promote. Your interaction with advertisers is solely between you and the advertiser.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>7. Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                The Site and its content are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. While we strive for accuracy, we do not guarantee that all information on the Site is complete, accurate, or current. Our articles represent editorial opinions informed by cited research — they are not professional medical, legal, or financial advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by applicable law, Cozmic Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Site, including but not limited to damages for loss of profits, goodwill, data, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>9. External Links</h2>
              <p className="leading-relaxed">
                Our articles contain links to external websites, including academic journals, news sources, and research institutions. These links are provided for reference and convenience. We do not control or endorse the content of external sites and are not responsible for their availability, accuracy, or privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>10. Modifications to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Site after changes are posted constitutes your acceptance of the revised terms. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>11. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable international laws. Any disputes arising from these terms shall be resolved through good-faith negotiation before pursuing any formal legal action.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={headingStyle}>12. Contact</h2>
              <p className="leading-relaxed">
                If you have questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:hello@cozmic.cloud" style={{ color: "oklch(0.85 0.18 192)" }}>
                  hello@cozmic.cloud
                </a>{" "}
                or visit our <a href="/contact" style={{ color: "oklch(0.85 0.18 192)" }}>Contact page</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
