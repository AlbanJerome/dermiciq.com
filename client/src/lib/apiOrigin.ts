/**
 * Intended split:
 * - Apex domain (`dermiciq.com`): static marketing site (this Vite output).
 * - App subdomain (`app.dermiciq.com`): real app + `/api/*` (sessions, login, etc.).
 *
 * Set `VITE_API_ORIGIN` to `https://app.dermiciq.com` when building the marketing
 * site for production so login and contact POST hit the app (CORS must allow the
 * marketing origin). Leave it unset for GitHub Pages preview builds: no `/api`
 * calls; contact falls back to `mailto:`.
 */
const raw = (import.meta.env.VITE_API_ORIGIN as string | undefined)?.trim();

export const API_ORIGIN = raw ? raw.replace(/\/$/, "") : "";

export const hasBackendApi = API_ORIGIN.length > 0;

export function apiUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (!hasBackendApi) return p;
  return `${API_ORIGIN}${p}`;
}
