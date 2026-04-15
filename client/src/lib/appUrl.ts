const DEFAULT_APP = "https://app.dermiciq.com";

function inferAppOriginFromMarketingHost(hostname: string): string | null {
  const h = hostname.toLowerCase().trim();
  if (!h || h === "localhost" || h === "127.0.0.1") return null;
  if (h.endsWith(".github.io")) return null;
  if (h.startsWith("app.")) return `https://${h}`;
  let apex = h;
  if (apex.startsWith("www.")) apex = apex.slice(4);
  return `https://app.${apex}`;
}

/**
 * Public web app URL for CTAs (Login, Get started).
 * - `VITE_APP_URL` wins when set (any host, trailing slash stripped).
 * - Otherwise, in the browser: `https://app.` + marketing hostname (e.g. dermiciq.com → app.dermiciq.com).
 * - Otherwise (e.g. prerender): {@link DEFAULT_APP}.
 */
export function resolveAppPublicUrl(): string {
  const fromEnv = (import.meta.env.VITE_APP_URL as string | undefined)?.replace(/\/$/, "")?.trim();
  if (fromEnv) return fromEnv;
  if (typeof window !== "undefined" && window.location?.hostname) {
    const inferred = inferAppOriginFromMarketingHost(window.location.hostname);
    if (inferred) return inferred;
  }
  return DEFAULT_APP;
}

export const appPublicUrl = resolveAppPublicUrl();
export const marketingCtaHref = appPublicUrl;
