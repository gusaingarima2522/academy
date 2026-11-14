export const COOKIE_CONSENT_KEY = "academy-cookie-consent";

export const readCookieConsent = () => {
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "declined" ? value : null;
};
