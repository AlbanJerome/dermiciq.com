/** Public web app (auth, dashboard, APIs). Marketing site links here instead of fake /login. */
export const appPublicUrl =
  (import.meta.env.VITE_APP_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://app.dermiciq.com";
