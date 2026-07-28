# DermicIQ contact form Worker

Cloudflare Worker that accepts `POST /api/contact`, verifies Turnstile, rate-limits by IP, and emails `support@dermiciq.com` via Resend.

## API

`POST /api/contact` (JSON):

```json
{
  "name": "string",
  "email": "string",
  "phone": "string optional",
  "subject": "string",
  "message": "string",
  "turnstileToken": "string"
}
```

| Status | Body |
|--------|------|
| 200 | `{ "ok": true }` |
| 400 | `{ "error": "..." }` |
| 429 | `{ "error": "..." }` |

Intended route: same-origin `https://dermiciq.com/api/contact*` (no CORS).

## Prerequisites

1. **Turnstile** widget for `dermiciq.com` (+ `localhost` / `127.0.0.1` for local testing). Site key goes in the Vite frontend; secret is a Worker secret.
2. **Resend** account with domain `dermiciq.com` verified, and an API key. The `CONTACT_FROM` address (default `DermicIQ <noreply@dermiciq.com>`) must be allowed on that verified domain.
3. Zone `dermiciq.com` on Cloudflare (already true for DNS/proxy in front of GitHub Pages).

## Secrets (never commit)

```bash
cd workers/contact
npm install

npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put RESEND_API_KEY
```

Optional non-secret vars in `wrangler.jsonc`:

- `CONTACT_FROM` — default `DermicIQ <noreply@dermiciq.com>` (Resend domain must be verified)
- `CONTACT_TO` — default `support@dermiciq.com`

Local dev: copy `.dev.vars.example` → `.dev.vars` and fill in secrets.

## Rate limiting

Uses the Cloudflare **Rate Limiting** binding (`CONTACT_RATE_LIMITER`).

Cloudflare only allows periods of **10 or 60 seconds**, so this Worker uses **5 requests / 60 seconds per IP** (stricter burst than “5 / 10 minutes”, which cannot be expressed with the binding). Limits are applied per Cloudflare location.

## Deploy

1. Enable the production route in `wrangler.jsonc` (uncomment `routes`):

   ```jsonc
   "routes": [
     { "pattern": "dermiciq.com/api/contact*", "zone_name": "dermiciq.com" }
   ]
   ```

2. Deploy:

   ```bash
   cd workers/contact
   npm install
   npx wrangler deploy
   ```

3. Confirm the route in the Cloudflare dashboard: Workers → `dermiciq-contact` → Triggers → Routes → `dermiciq.com/api/contact*`.

## Local test

```bash
cd workers/contact
cp .dev.vars.example .dev.vars   # fill secrets
npm run dev
```

```bash
curl -sS -X POST http://127.0.0.1:8787/api/contact \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Test User",
    "email": "you@example.com",
    "subject": "Hello",
    "message": "Smoke test",
    "turnstileToken": "<token-from-widget-or-test-keys>"
  }'
```

For Turnstile without a real widget, use [test keys](https://developers.cloudflare.com/turnstile/troubleshooting/testing/).

## Project layout

```
workers/contact/
  wrangler.jsonc      # name, vars, ratelimits, routes
  src/index.ts        # HTTP handler
  src/validate.ts     # field validation
  src/turnstile.ts    # siteverify
  src/resend.ts       # Resend email
  README.md
```
