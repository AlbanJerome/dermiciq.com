#!/usr/bin/env node
/**
 * Fail fast when this project would deploy with the wrong Cloudflare identity.
 * Prefer project-local `.env` (CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID)
 * over the global `wrangler login` OAuth shared across Cursor projects.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = resolve(root, ".env");

function loadDotEnv(path) {
  if (!existsSync(path)) return;
  const text = readFileSync(path, "utf8");
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadDotEnv(envPath);

const token = process.env.CLOUDFLARE_API_TOKEN?.trim();
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID?.trim();

const problems = [];

if (!existsSync(envPath)) {
  problems.push(
    `Missing ${envPath}. Copy .env.example → .env and fill DermicIQ credentials.`,
  );
}

if (!token || token.startsWith("replace_with_")) {
  problems.push(
    "CLOUDFLARE_API_TOKEN is missing or still a placeholder. Use a DermicIQ API token in .env (not global wrangler login).",
  );
}

if (!accountId || accountId.startsWith("replace_with_")) {
  problems.push(
    "CLOUDFLARE_ACCOUNT_ID is missing or still a placeholder. Pin the DermicIQ account ID in .env.",
  );
}

if (problems.length > 0) {
  console.error("Refusing to deploy: Cloudflare auth is not scoped to this project.\n");
  for (const problem of problems) {
    console.error(`  • ${problem}`);
  }
  console.error(`
Why: Cursor uses one machine-wide wrangler OAuth session. Without a project
.env, deploy can land in another account (e.g. Forjyn).

Setup:
  cd workers/contact
  cp .env.example .env
  # edit .env with DermicIQ CLOUDFLARE_ACCOUNT_ID + CLOUDFLARE_API_TOKEN
  npm run whoami   # should show the DermicIQ account
  npm run deploy
`);
  process.exit(1);
}

console.log(
  `Cloudflare deploy auth OK (account ${accountId.slice(0, 8)}…, token via project .env).`,
);
