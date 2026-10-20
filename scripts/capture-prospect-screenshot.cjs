'use strict';
const { chromium } = require('playwright');
const fs = require('node:fs/promises');
const path = require('node:path');

(async () => {
  const slug = process.env.PROSPECT_SLUG || '';
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 100) {
    throw new Error('Invalid prospect slug');
  }
  const url = `https://aslisite-gym-template.vercel.app/${slug}`;
  const output = path.join(process.cwd(), 'public', 'images', 'screenshots', `${slug}.png`);
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 750 }, deviceScaleFactor: 1 });
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    if (!response || response.status() !== 200) throw new Error(`Unexpected HTTP status: ${response?.status()}`);
    await page.locator('main .hero h1').waitFor({ state: 'visible', timeout: 15000 });
    const text = await page.locator('body').innerText();
    if (/GYM NOT FOUND|This page isn.t available/i.test(text)) throw new Error('Demo not found; refusing to capture error page');
    await page.evaluate(() => document.fonts.ready);
    await fs.mkdir(path.dirname(output), { recursive: true });
    await page.screenshot({ path: output, type: 'png', fullPage: false, animations: 'disabled' });
    const stats = await fs.stat(output);
    if (stats.size < 15000) throw new Error('Screenshot unexpectedly small');
    console.log(JSON.stringify({ slug, url, screenshot: output, bytes: stats.size, publishedImage: `https://aslisite-gym-template.vercel.app/images/screenshots/${slug}.png` }));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
