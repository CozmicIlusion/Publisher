// ============================================================
// COZMIC — Cookie Consent Banner
// GDPR/CCPA compliant cookie consent for AdSense
// Stores consent in localStorage, blocks ad scripts until accepted
// ============================================================
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "wouter";

const CONSENT_KEY = "cozmic_cookie_consent";

type ConsentStatus = "accepted" | "rejected" | null;

function getStoredConsent(): ConsentStatus {
  try {
    return localStorage.getItem(CONSENT_KEY) as ConsentStatus;
  } catch {
    return null;
  }
}

function setStoredConsent(status: "accepted" | "rejected") {
  try {
    localStorage.setItem(CONSENT_KEY, status);
  } catch {
    // localStorage unavailable
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no consent decision has been made
    const consent = getStoredConsent();
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setStoredConsent("accepted");
    setVisible(false);
    // Reload AdSense if it was blocked
    if (typeof window !== "undefined" && (window as any).adsbygoogle) {
      try {
        (window as any).adsbygoogle.push({});
      } catch {
        // ignore
      }
    }
  };

  const handleReject = () => {
    setStoredConsent("rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
        >
          <div
            className="max-w-2xl mx-auto rounded-2xl p-5 sm:p-6 shadow-2xl"
            style={{
              background: "oklch(0.12 0.04 275 / 95%)",
              backdropFilter: "blur(20px)",
              border: "1px solid oklch(0.85 0.18 192 / 15%)",
              boxShadow: "0 -4px 40px oklch(0.08 0.03 270 / 60%)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: "oklch(0.85 0.18 192 / 12%)",
                  border: "1px solid oklch(0.85 0.18 192 / 25%)",
                }}
              >
                <Cookie className="w-5 h-5" style={{ color: "oklch(0.85 0.18 192)" }} />
              </div>

              <div className="flex-1 min-w-0">
                <h3
                  className="text-sm font-semibold mb-1.5"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" }}
                >
                  We value your privacy
                </h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "oklch(0.65 0.02 270)" }}>
                  We use cookies to serve personalized ads via Google AdSense and to analyze site traffic.
                  You can accept all cookies, or reject non-essential ones. Read our{" "}
                  <Link href="/privacy" className="underline" style={{ color: "oklch(0.85 0.18 192)" }}>
                    Privacy Policy
                  </Link>{" "}
                  for details.
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: "oklch(0.85 0.18 192)",
                      color: "oklch(0.08 0.03 270)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleReject}
                    className="px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: "oklch(0.2 0.04 275 / 60%)",
                      color: "oklch(0.7 0.02 270)",
                      border: "1px solid oklch(0.3 0.04 275 / 50%)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Essential Only
                  </button>
                </div>
              </div>

              <button
                onClick={handleReject}
                className="shrink-0 p-1.5 rounded-lg transition-colors hover:bg-white/5"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" style={{ color: "oklch(0.5 0.02 270)" }} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Utility: Check if user has given cookie consent
export function hasCookieConsent(): boolean {
  return getStoredConsent() === "accepted";
}
