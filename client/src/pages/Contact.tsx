// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// Contact Page: Simple contact form and info
// ============================================================

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, Globe } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const accentColor = "oklch(0.85 0.18 192)";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 48 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const inputStyle = {
    background: "oklch(0.12 0.03 275 / 60%)",
    border: "1px solid oklch(0.25 0.04 275 / 40%)",
    color: "oklch(0.9 0.01 270)",
  };

  return (
    <div className="min-h-screen relative" style={{ background: "oklch(0.08 0.03 270)" }}>
      <StarField />
      <Navbar />

      <div className="container relative z-10 pt-28 pb-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="w-6 h-6" style={{ color: accentColor }} />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: accentColor, fontFamily: "var(--font-display)" }}
            >
              Get in Touch
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact Us
          </h1>
          <p
            className="text-lg leading-relaxed mb-12 max-w-xl"
            style={{ color: "oklch(0.65 0.02 270)" }}
          >
            Have a story tip, partnership inquiry, feedback, or just want to connect? We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.7 0.02 270)" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-200"
                    style={{
                      ...inputStyle,
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.7 0.02 270)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-200"
                    style={{
                      ...inputStyle,
                      fontFamily: "var(--font-body)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.7 0.02 270)" }}
                >
                  Subject
                </label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-200"
                  style={{
                    ...inputStyle,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <option value="" style={{ background: "oklch(0.1 0.03 270)" }}>Select a topic...</option>
                  <option value="story-tip" style={{ background: "oklch(0.1 0.03 270)" }}>Story Tip</option>
                  <option value="partnership" style={{ background: "oklch(0.1 0.03 270)" }}>Partnership / Advertising</option>
                  <option value="feedback" style={{ background: "oklch(0.1 0.03 270)" }}>Feedback</option>
                  <option value="privacy" style={{ background: "oklch(0.1 0.03 270)" }}>Privacy / Data Request</option>
                  <option value="other" style={{ background: "oklch(0.1 0.03 270)" }}>Other</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.7 0.02 270)" }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-200 resize-none"
                  style={{
                    ...inputStyle,
                    fontFamily: "var(--font-body)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, oklch(0.85 0.18 192), oklch(0.7 0.2 200))",
                  color: "oklch(0.08 0.03 270)",
                  fontFamily: "var(--font-display)",
                }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div
                className="rounded-xl p-6"
                style={{
                  background: "oklch(0.12 0.03 275 / 40%)",
                  border: "1px solid oklch(0.25 0.04 275 / 20%)",
                }}
              >
                <Mail className="w-5 h-5 mb-3" style={{ color: accentColor }} />
                <h3
                  className="text-sm font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" }}
                >
                  Email Us
                </h3>
                <p className="text-sm" style={{ color: "oklch(0.6 0.02 270)" }}>
                  General: <a href="mailto:hello@cozmic.cloud" className="underline" style={{ color: accentColor }}>hello@cozmic.cloud</a>
                </p>
                <p className="text-sm" style={{ color: "oklch(0.6 0.02 270)" }}>
                  Privacy: <a href="mailto:privacy@cozmic.cloud" className="underline" style={{ color: accentColor }}>privacy@cozmic.cloud</a>
                </p>
              </div>

              <div
                className="rounded-xl p-6"
                style={{
                  background: "oklch(0.12 0.03 275 / 40%)",
                  border: "1px solid oklch(0.25 0.04 275 / 20%)",
                }}
              >
                <Globe className="w-5 h-5 mb-3" style={{ color: accentColor }} />
                <h3
                  className="text-sm font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" }}
                >
                  Follow Us
                </h3>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm" style={{ color: "oklch(0.6 0.02 270)" }}>X / Twitter</span>
                  <span className="text-sm" style={{ color: "oklch(0.6 0.02 270)" }}>Instagram</span>
                  <span className="text-sm" style={{ color: "oklch(0.6 0.02 270)" }}>TikTok</span>
                </div>
              </div>

              <div
                className="rounded-xl p-6"
                style={{
                  background: "oklch(0.12 0.03 275 / 40%)",
                  border: "1px solid oklch(0.25 0.04 275 / 20%)",
                }}
              >
                <MapPin className="w-5 h-5 mb-3" style={{ color: accentColor }} />
                <h3
                  className="text-sm font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" }}
                >
                  Cozmic Company
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.6 0.02 270)" }}>
                  Digital-first, globally distributed.
                  <br />
                  Serving readers across the Americas, Europe, and beyond.
                </p>
              </div>

              <p className="text-xs leading-relaxed" style={{ color: "oklch(0.4 0.02 270)" }}>
                We typically respond within 48 hours. For privacy-related requests, please allow up to 30 days as required by applicable law.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
