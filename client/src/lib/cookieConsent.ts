export const COOKIE_CONSENT_STORAGE_KEY = "cookieConsent";

const CONSENT_EVENT = "cookie-consent:open" as const;

/** Reopens the cookie banner (e.g. from footer "Cookie settings"). */
export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}

export function subscribeCookieSettingsOpen(handler: () => void) {
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}
