// Viewport-by-viewport screenshots: node .design/shots.mjs <url> <outDir> [desktop|mobile]
import { chromium } from 'playwright';
const [url, out, which = 'desktop'] = process.argv.slice(2);
const vp = which === 'mobile' ? { width: 390, height: 844 } : { width: 1440, height: 900 };
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: vp, isMobile: which === 'mobile', hasTouch: which === 'mobile', deviceScaleFactor: 1 });
const p = await ctx.newPage();
await p.goto(url, { waitUntil: 'networkidle' });
await p.waitForTimeout(1200);
const total = await p.evaluate(() => document.documentElement.scrollHeight);
let i = 0;
for (let y = 0; y < total; y += vp.height - 80) {
  await p.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), y);
  await p.waitForTimeout(350);
  await p.screenshot({ path: `${out}/${which}-${String(i++).padStart(2, '0')}.png` });
}
console.log(which, 'shots', i, 'height', total);
await b.close();
