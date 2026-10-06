// Screenshots static project pages from local folders: node .design/local-shots.mjs <outDir> name=fileUrl[@WxH] ...
import { chromium } from 'playwright';
const [out, ...jobs] = process.argv.slice(2);
const b = await chromium.launch();
for (const job of jobs) {
  const [name, rest] = job.split(/=(.*)/s);
  const [url, size = '1280x800'] = rest.split('@');
  const [w, h] = size.split('x').map(Number);
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(String(e).slice(0, 80)));
  try { await p.goto(url, { waitUntil: 'networkidle', timeout: 30000 }); } catch (e) { console.log('warn', name); }
  await p.waitForTimeout(2500);
  await p.screenshot({ path: `${out}/${name}.png` });
  console.log('ok', name, errs.join(' | '));
  await ctx.close();
}
await b.close();
