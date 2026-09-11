// ============================================================
// COZMIC — Cookie Consent Banner
// GDPR/CCPA compliant cookie consent for AdSense
// Stores consent in localStorage, blocks ad scripts until accepted
// ============================================================
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "wouter";

const CONSENT_KEY = "cozmic_cookie_consent";
const CONSENT_CHANGE_EVENT = "cozmic:cookie-consent";
const ADSENSE_SCRIPT_ID = "cozmic-adsense-script";
const ADSENSE_SCRIPT_SRC = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7811885659406496";

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
    window.dispatchEvent(new CustomEvent<ConsentStatus>(CONSENT_CHANGE_EVENT, { detail: status }));
  } catch {
    // localStorage unavailable
  }
}

export function clearCookieConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY);
    window.dispatchEvent(new CustomEvent<ConsentStatus>(CONSENT_CHANGE_EVENT, { detail: null }));
  } catch {
    // localStorage unavailable
  }
  window.location.reload();
}

function loadAdSense() {
  if (document.getElementById(ADSENSE_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = ADSENSE_SCRIPT_ID;
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = ADSENSE_SCRIPT_SRC;
  document.head.appendChild(script);
}

export function useCookieConsent(): ConsentStatus {
  const [consent, setConsent] = useState<ConsentStatus>(null);

  useEffect(() => {
    const updateConsent = () => setConsent(getStoredConsent());
    const handleConsentChange = (event: Event) => setConsent((event as CustomEvent<ConsentStatus>).detail);

    updateConsent();
    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
  }, []);

  return consent;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const showBanner = () => setVisible(true);
    const consent = getStoredConsent();
    if (consent === "accepted") {
      loadAdSense();
    } else if (!consent) {
      const timer = setTimeout(showBanner, 1500);
      return () => clearTimeout(timer);
    }

    const handleConsentChange = (event: Event) => {
      const next = (event as CustomEvent<ConsentStatus>).detail;
      if (!next) setVisible(true);
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
  }, []);

  const handleAccept = () => {
    setStoredConsent("accepted");
    loadAdSense();
    setVisible(false);
  };

  const handleReject = () => {
    setStoredConsent("rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduceMotion ? false : { y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: 100, opacity: 0 }}
          transition={reduceMotion ? { duration: 0 } : { type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-copy"
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
                  id="cookie-consent-title"
                  className="text-sm font-semibold mb-1.5"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 270)" }}
                >
                  We value your privacy
                </h3>
                <p id="cookie-consent-copy" className="text-xs leading-relaxed mb-4" style={{ color: "oklch(0.65 0.02 270)" }}>
                  We use cookies to serve personalized ads via Google AdSense after you accept. We do not currently use analytics cookies. Essential Only keeps the magazine working without ads. Read our{" "}
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
