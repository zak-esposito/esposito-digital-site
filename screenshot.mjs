import puppeteer from 'puppeteer';
import { readdir, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(import.meta.url), '..');
const OUT_DIR = join(ROOT, 'temporary screenshots');

const url = process.argv[2];
const label = process.argv[3];

if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label]');
  process.exit(1);
}

if (!existsSync(OUT_DIR)) {
  await mkdir(OUT_DIR, { recursive: true });
}

const existing = await readdir(OUT_DIR);
const nums = existing
  .map((f) => f.match(/^screenshot-(\d+)(?:-|\.)/))
  .filter(Boolean)
  .map((m) => parseInt(m[1], 10));
const next = nums.length ? Math.max(...nums) + 1 : 1;

const safeLabel = label
  ? '-' + String(label).toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '')
  : '';
const filename = `screenshot-${next}${safeLabel}.png`;
const outPath = join(OUT_DIR, filename);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Scroll through the page to trigger IntersectionObservers / lazy loads,
  // then scroll back to the top and settle before capturing.
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      const distance = 400;
      const interval = 80;
      let y = 0;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        y += distance;
        if (y >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          setTimeout(resolve, 600);
        }
      }, interval);
    });
  });

  await page.screenshot({ path: outPath, fullPage: true });
  console.log(`Saved: ${outPath}`);
} finally {
  await browser.close();
}
