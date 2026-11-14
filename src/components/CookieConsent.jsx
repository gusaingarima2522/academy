import { useEffect, useState } from "react";
import { COOKIE_CONSENT_KEY, readCookieConsent } from "../services/cookieConsent";

const CookieConsent = () => {
  const [consent, setConsent] = useState(() => readCookieConsent());

  useEffect(() => {
    if (consent) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
    };
  }, [consent]);

  if (consent) return null;

  const decide = (value) => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setConsent(value);
    window.dispatchEvent(new CustomEvent("academy-cookie-consent", { detail: value }));
  };

  return (
    <div className="fixed inset-0 z-[1000001] flex items-center justify-center bg-black/60 px-4 py-4">
      <section
        className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
      >
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-800">
          Your privacy
        </p>
        <h2 id="cookie-consent-title" className="mt-2 text-2xl font-bold text-red-900">
          We use necessary browser storage
        </h2>
        <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
          Worldwise Education Consultants uses essential browser storage to
          remember your consent, preserve mock-test progress, and support site
          functionality. We do not currently use analytics or advertising cookies.
          Read our <a className="font-semibold text-red-900 underline" href="/cookie-policy">Cookie Policy</a>.
        </p>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="min-h-11 rounded-lg border border-red-900 px-5 py-2.5 font-semibold text-red-900 hover:bg-red-50"
          >
            Decline optional cookies
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="min-h-11 rounded-lg bg-red-900 px-5 py-2.5 font-semibold text-white hover:bg-red-800"
          >
            Accept necessary storage
          </button>
        </div>
      </section>
    </div>
  );
};

export default CookieConsent;
