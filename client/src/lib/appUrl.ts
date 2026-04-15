const trimmed =
  (import.meta.env.VITE_APP_URL as string | undefined)?.replace(/\/$/, "") ??
  "";

/**
 * Public product app URL when you ship one (set `VITE_APP_URL` in env).
 * Empty when unset so marketing never sends visitors to a login-only host by default.
 */
export const appPublicUrl = trimmed;

/** Primary CTA: app when configured, otherwise contact (no auth gate on this site). */
export const marketingCtaHref = trimmed || "/contact";

export const hasPublicApp = Boolean(trimmed);
