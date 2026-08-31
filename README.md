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

`public/brand/hpe-wordmark.svg` is vendored from the official HPE Design System:

`https://github.com/grommet/hpe-design-system/blob/master/apps/docs/public/HPE_logo_full-clr_pos_rgb.svg`

The same current HPE mark is published on HPE's site at:

`https://www.hpe.com/apps/hpeweb-ui/images/gn-icons/logo-lm.svg`

Do not replace it with a third-party logo asset.

## Deployment

The production target is `https://hpe-grokbot.vercel.app` under the
`jasonwiker` Vercel scope. Set `SITE_PASSWORD=land2expand`.
