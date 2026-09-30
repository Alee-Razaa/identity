// Canonical site URL. Override with NEXT_PUBLIC_SITE_URL if a custom domain is attached.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === 'production' ? 'https://alirazamemon.vercel.app' : 'http://localhost:3000')
