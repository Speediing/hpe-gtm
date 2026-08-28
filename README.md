# Hewlett Packard Enterprise x SpaceXAI

Password-protected Grok Bot leave-behind for HPE sales.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The preview password is
`land2expand` through `SITE_PASSWORD`.

## Brand asset

`public/brand/hpe-wordmark.svg` is vendored from HPE's official site:

`https://www.hpe.com/apps/hpeweb-ui/images/gn-icons/logo-lm.svg`

Do not replace it with a third-party logo asset.

## Deployment

The production target is `https://hpe-grokbot.vercel.app` under the
`jasonwiker` Vercel scope. Set `SITE_PASSWORD=land2expand`.
