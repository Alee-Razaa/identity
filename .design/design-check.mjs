#!/usr/bin/env node
// design-check.mjs : strict quality gate for the `design` skill.
// Usage: node design-check.mjs <url> [--out ./design-check] [--strict]
// Needs: playwright (npm i -D playwright && npx playwright install chromium). Optional: axe-core for WCAG checks.
// Optional .design/allow.json: { "console": ["regex"], "axe": ["rule-id"], "dashes": 0 }
// Exit code 1 when any HARD gate fails.

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const args = process.argv.slice(2);
const url = args.find(a => !a.startsWith('--'));
if (!url) { console.error('Usage: node design-check.mjs <url> [--out dir] [--strict]'); process.exit(2); }
const outDir = args.includes('--out') ? args[args.indexOf('--out') + 1] : './design-check';
const strict = args.includes('--strict');
let allow = { console: [], axe: [], dashes: 0 };
try { allow = { ...allow, ...JSON.parse(fs.readFileSync(path.join(process.cwd(), '.design/allow.json'), 'utf8')) }; } catch {}
const pageOrigin = new URL(url).origin;
fs.mkdirSync(outDir, { recursive: true });

let axeSource = null;
try { axeSource = fs.readFileSync(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8'); } catch {}

const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844, isMobile: true, hasTouch: true },
  { name: 'desktop', width: 1440, height: 900 },
];

const hard = []; const soft = []; const info = {};
const fail = (vp, msg) => hard.push(`[${vp}] ${msg}`);
const warn = (vp, msg) => soft.push(`[${vp}] ${msg}`);

const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});

for (const vp of VIEWPORTS) {
  for (const motion of ['no-preference', 'reduce']) {
    if (motion === 'reduce' && vp.name !== 'mobile') continue; // one reduced-motion pass is enough
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: !!vp.isMobile, hasTouch: !!vp.hasTouch, reducedMotion: motion });
    const page = await ctx.newPage();
    const consoleErrors = []; const thirdPartyErrors = [];
    page.on('console', m => {
      if (m.type() !== 'error' || allow.console.some(rx => new RegExp(rx).test(m.text()))) return;
      const src = m.location()?.url || '';
      let origin = pageOrigin; try { if (src) origin = new URL(src).origin; } catch {}
      (origin === pageOrigin ? consoleErrors : thirdPartyErrors).push(`${m.text()}${src ? ' @ ' + origin : ''}`);
    });
    page.on('pageerror', e => { if (!allow.console.some(rx => new RegExp(rx).test(String(e)))) consoleErrors.push(String(e)); });

    await page.addInitScript(() => {
      window.__lcp = 0; window.__cls = 0;
      try {
        new PerformanceObserver(l => { for (const e of l.getEntries()) window.__lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
        let w = 0, f = 0, last = 0; // CLS = largest session window (1s gap, 5s max), like Chrome
        new PerformanceObserver(l => { for (const e of l.getEntries()) { if (e.hadRecentInput) continue; if (w && e.startTime - last < 1000 && e.startTime - f < 5000) w += e.value; else { w = e.value; f = e.startTime; } last = e.startTime; window.__cls = Math.max(window.__cls, w); } }).observe({ type: 'layout-shift', buffered: true });
      } catch {}
    });

    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(500);
    const vitals = await page.evaluate(() => ({ lcp: Math.round(window.__lcp), cls: +window.__cls.toFixed(3) })); // before scrolling
    // Scroll through the page so lazy content and scroll animations run, then back to top.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += innerHeight * 0.8) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
      scrollTo(0, 0); await new Promise(r => setTimeout(r, 400));
    });

    const tag = `${vp.name}${motion === 'reduce' ? '-reduced-motion' : ''}`;
    await page.screenshot({ path: path.join(outDir, `${tag}-fold.png`) });
    await page.screenshot({ path: path.join(outDir, `${tag}-full.png`), fullPage: true });
    if (motion === 'reduce') { await ctx.close(); continue; }

    const r = await page.evaluate(() => {
      const vis = el => { const s = getComputedStyle(el); const b = el.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && b.width > 0 && b.height > 0; };
      const text = document.body.innerText;
      const imgs = [...document.images];
      const foldImgs = imgs.filter(i => { const b = i.getBoundingClientRect(); return b.top < innerHeight && b.bottom > 0 && b.left < innerWidth && b.right > 0 && vis(i); });
      const interactive = [...document.querySelectorAll('a[href],button,input,select,textarea,[role=button]')].filter(vis);
      const smallTargets = interactive.filter(el => { const b = el.getBoundingClientRect(); return (b.width < 24 || b.height < 24) && getComputedStyle(el).display !== 'inline'; }).length;
      const transitionAll = interactive.filter(el => { const s = getComputedStyle(el); return s.transitionProperty.split(',').map(x => x.trim()).includes('all') && parseFloat(s.transitionDuration) > 0; }).length;
      const all = [...document.querySelectorAll('body *')].filter(vis);
      const gradientText = all.filter(el => { const s = getComputedStyle(el); return (s.webkitBackgroundClip === 'text' || s.backgroundClip === 'text') && s.backgroundImage.includes('gradient'); }).length;
      const gradientBg = all.filter(el => getComputedStyle(el).backgroundImage.includes('gradient')).length;
      const eyebrows = all.filter(el => { const s = getComputedStyle(el); return s.textTransform === 'uppercase' && parseFloat(s.letterSpacing) >= 1 && parseFloat(s.fontSize) <= 14 && el.children.length === 0 && el.innerText.trim().length > 0; }).length;
      const sections = document.querySelectorAll('main section, main > div, main .shopify-section, section').length;
      const fonts = new Set(all.map(el => getComputedStyle(el).fontFamily.split(',')[0].replace(/["']/g, '').trim()));
      const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => { try { const j = JSON.parse(s.textContent); return [].concat(j['@graph'] || j).map(x => x['@type']).join('+'); } catch { return 'INVALID'; } });
      const meta = n => document.querySelector(`meta[name="${n}"]`)?.content || '';
      return {
        overflowX: document.documentElement.scrollWidth - innerWidth,
        h1: document.querySelectorAll('h1').length,
        headingSkips: (() => { let prev = 0, skips = 0; document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(h => { const l = +h.tagName[1]; if (prev && l > prev + 1) skips++; prev = l; }); return skips; })(),
        emDashes: (text.match(/[—–]/g) || []).length,
        imgNoAlt: imgs.filter(i => !i.hasAttribute('alt')).length,
        imgNoDims: imgs.filter(i => !(i.getAttribute('width') && i.getAttribute('height')) && !getComputedStyle(i).aspectRatio.includes('/')).length,
        lazyInFold: foldImgs.filter(i => i.loading === 'lazy').length,
        smallTargets, transitionAll, gradientText, gradientBg, eyebrows, sections,
        fonts: [...fonts],
        title: document.title, titleLen: document.title.length,
        description: meta('description').length,
        canonical: !!document.querySelector('link[rel="canonical"]'),
        lang: document.documentElement.lang,
        zoomBlocked: /user-scalable\s*=\s*no|maximum-scale\s*=\s*1(\.0)?\b/.test(meta('viewport')),
        ogImage: !!document.querySelector('meta[property="og:image"]'),
        jsonld: ld,
        domNodes: document.getElementsByTagName('*').length,
      };
    });

    let axe = null;
    if (axeSource) {
      await page.addScriptTag({ content: axeSource });
      axe = await page.evaluate(async () => {
        const res = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'] } });
        return res.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.length }));
      });
      axe = axe.filter(v => !allow.axe.includes(v.id));
    }

    const res = await page.evaluate(() => performance.getEntriesByType('resource').map(e => ({ n: e.name, t: e.initiatorType, s: e.transferSize })));
    const kb = t => Math.round(res.filter(e => e.t === t).reduce((a, e) => a + (e.s || 0), 0) / 1024);
    r.jsKB = kb('script'); r.cssKB = kb('link') + kb('css'); r.imgKB = kb('img');

    Object.assign(r, vitals);
    info[vp.name] = { ...r, axe, consoleErrors, thirdPartyErrors };

    // HARD gates (ship blockers)
    if (r.overflowX > 1) fail(vp.name, `horizontal overflow ${r.overflowX}px`);
    if (r.h1 !== 1) fail(vp.name, `h1 count is ${r.h1}, expected 1`);
    if (r.emDashes > (allow.dashes || 0)) fail(vp.name, `${r.emDashes} em/en dash characters in visible text`);
    if (r.imgNoAlt) fail(vp.name, `${r.imgNoAlt} <img> without alt attribute`);
    if (r.lazyInFold) fail(vp.name, `${r.lazyInFold} above-the-fold image(s) lazy-loaded (LCP killer)`);
    if (r.zoomBlocked) fail(vp.name, 'viewport meta blocks zoom');
    if (!r.lang) fail(vp.name, '<html> missing lang');
    if (r.jsonld.includes('INVALID')) fail(vp.name, 'invalid JSON-LD block');
    if (r.cls > 0.1) fail(vp.name, `CLS ${r.cls} > 0.1`);
    if (consoleErrors.length) fail(vp.name, `${consoleErrors.length} console error(s): ${consoleErrors[0].slice(0, 120)}`);
    if (axe) axe.filter(v => v.impact === 'critical' || v.impact === 'serious').forEach(v => fail(vp.name, `axe ${v.impact}: ${v.id} (${v.nodes} nodes)`));

    // SOFT gates (fix unless there is a reason)
    if (thirdPartyErrors.length) warn(vp.name, `${thirdPartyErrors.length} third-party console error(s): ${thirdPartyErrors[0].slice(0, 120)}`);
    if (r.imgNoDims) warn(vp.name, `${r.imgNoDims} <img> without width/height (CLS risk)`);
    if (r.headingSkips) warn(vp.name, `${r.headingSkips} heading level skip(s)`);
    if (r.transitionAll) warn(vp.name, `${r.transitionAll} interactive element(s) use transition: all`);
    if (r.gradientText) warn(vp.name, `${r.gradientText} gradient-text element(s) (AI tell)`);
    if (r.gradientBg > 3) warn(vp.name, `${r.gradientBg} gradient backgrounds (AI tell if decorative)`);
    if (r.eyebrows > Math.ceil(Math.max(r.sections, 3) / 3)) warn(vp.name, `${r.eyebrows} uppercase tracked micro-labels (eyebrow spam)`);
    if (r.fonts.length > 3) warn(vp.name, `${r.fonts.length} font families: ${r.fonts.join(', ')}`);
    if (r.titleLen < 15 || r.titleLen > 65) warn(vp.name, `title length ${r.titleLen}`);
    if (r.description < 50 || r.description > 165) warn(vp.name, `meta description length ${r.description}`);
    if (!r.canonical) warn(vp.name, 'no canonical link');
    if (!r.ogImage) warn(vp.name, 'no og:image');
    if (!r.jsonld.length) warn(vp.name, 'no JSON-LD structured data');
    if (vp.name === 'mobile' && r.smallTargets) warn(vp.name, `${r.smallTargets} tap target(s) under 24px`);
    if (r.lcp > 2500) warn(vp.name, `LCP ${r.lcp}ms (lab) > 2500ms`);
    if (r.jsKB > 150) warn(vp.name, `JS transfer ${r.jsKB}KB > 150KB`);
    if (r.domNodes > 1500) warn(vp.name, `${r.domNodes} DOM nodes > 1500`);
    if (!axe) warn(vp.name, 'axe-core not installed, contrast/ARIA not checked (npm i -D axe-core)');

    await ctx.close();
  }
}
await browser.close();

const report = { url, date: new Date().toISOString(), pass: hard.length === 0 && (!strict || soft.length === 0), hard, soft, info };
fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
console.log(`\nDESIGN CHECK ${report.pass ? 'PASS' : 'FAIL'}  ${url}`);
console.log(`hard fails: ${hard.length}   warnings: ${soft.length}   screenshots + report: ${outDir}/`);
hard.forEach(h => console.log('  FAIL ' + h));
soft.forEach(s => console.log('  WARN ' + s));
process.exit(report.pass ? 0 : 1);
