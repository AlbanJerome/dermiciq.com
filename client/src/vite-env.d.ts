/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** e.g. https://app.dermiciq.com — omit for static-only builds */
  readonly VITE_API_ORIGIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
