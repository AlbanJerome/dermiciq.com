# DermicIQ marketing site (Cloudflare Worker assets)

Serves the Vite build from `dist/public` on `dermiciq.com` / `www.dermiciq.com`.

GitHub Pages (`gh-pages`) is no longer the live origin — Pages builds were stuck/errored behind the Cloudflare proxy. The contact API remains on `dermiciq-contact` (`dermiciq.com/api/contact*`), which wins over these routes because it is more specific.

## Deploy

```bash
# From repo root (preferred)
npm run deploy:apex

# Or from this package
cp ../contact/.env .env   # CLOUDFLARE_ACCOUNT_ID + CLOUDFLARE_API_TOKEN
npm run deploy
```

`deploy:apex` builds with `VITE_BASE=/` then runs `wrangler deploy` here.
