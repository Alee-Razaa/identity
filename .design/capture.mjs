// Captures real screenshots of live projects for the portfolio. Usage: node .design/capture.mjs <outDir> [pphOptionsFileUrl]
import { chromium } from 'playwright';
const out = process.argv[2]; const pph = process.argv[3];
const b = await chromium.launch();
const shot = async (url, name, opts = {}) => {
  const ctx = await b.newContext({ viewport: { width: opts.w || 1440, height: opts.h || 900 }, deviceScaleFactor: opts.dpr || 1, colorScheme: opts.scheme || 'dark' });
  const p = await ctx.newPage();
  try { await p.goto(url, { waitUntil: 'networkidle', timeout: 45000 }); } catch (e) { console.log('nav warn', name, String(e).slice(0, 80)); }
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `${out}/${name}.png` });
  console.log('ok', name); await ctx.close();
};
await shot('https://www.cryptosocial.media/', 'crypto');
await shot('https://www.cryptosocial.media/', 'crypto-light', { scheme: 'light' });
await shot('https://my-lead-manager-seven.vercel.app/', 'lead');
await shot('https://xemtech.vercel.app/', 'xemtech');
if (pph) await shot(pph, 'pph', { w: 900, h: 760, dpr: 2 });
await b.close();
