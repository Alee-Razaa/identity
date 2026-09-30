# Ali Raza Memon, portfolio

Personal portfolio for AI specialist roles. One page: work, about, experience, skills, certifications, contact.

## Stack

Next.js 15 (App Router, fully static), React 19, plain CSS. No UI framework and no animation library. The 3D tilt is a 40-line client component that only writes CSS variables.

## Edit the content

Everything on the page comes from [`lib/data.ts`](lib/data.ts). Change text, links, projects or certifications there.

Images live in [`assets/`](assets). Project screenshots are real captures:

- `node .design/capture.mjs <outDir>` screenshots the live sites.
- `node .design/images.mjs <rawDir>` crops and compresses them into `assets/`.

## Run

```bash
npm install
npm run dev
```

## Quality gate

```bash
npm run build && npx next start -p 3000
npm run check
```

`npm run check` runs `.design/design-check.mjs` (Playwright and axe) at 390px and 1440px. It fails on horizontal overflow, missing alt text, contrast and ARIA problems, layout shift and console errors.

## Deploy

Hosted on Vercel. Live at https://alirazamemon.vercel.app. After attaching a custom domain, set `NEXT_PUBLIC_SITE_URL` to it so the canonical URL, sitemap and social card point to the right place.
