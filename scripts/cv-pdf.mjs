// Genera il PDF del CV dalla build di produzione.
// Uso: npm run cv            (fa prima ng build, poi lancia questo script)
//      npm run cv -- it      CV in italiano
//      npm run cv -- en out.pdf
//
// Telefono e sito personale non sono nel repo: se esiste cv.private.json nella
// root del progetto (vedi cv.private.example.json) vengono aggiunti al PDF.

import { createServer } from 'node:http';
import { existsSync, readFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import puppeteer from 'puppeteer';

const DIST = 'dist/portfolio/browser';
const LANG = process.argv[2] ?? 'en';
const OUT = process.argv[3] ?? (LANG === 'en' ? 'Tommaso-Cirillo-CV.pdf' : `Tommaso-Cirillo-${LANG.toUpperCase()}-CV.pdf`);

const types = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
};

if (!existsSync(join(DIST, 'index.html'))) {
  console.error(`Build non trovata in ${DIST}, lancia prima "ng build".`);
  process.exit(1);
}

// server statico minimale con fallback su index.html (serve per la rotta /cv)
const server = createServer((req, res) => {
  let file = join(DIST, decodeURIComponent(req.url.split('?')[0]));
  if (!existsSync(file) || !extname(file)) file = join(DIST, 'index.html');
  res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
  res.end(readFileSync(file));
});

await new Promise(resolve => server.listen(0, resolve));
const port = server.address().port;

const priv = existsSync('cv.private.json')
  ? JSON.parse(readFileSync('cv.private.json', 'utf8'))
  : {};

const browser = await puppeteer.launch();
try {
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(data => { window.__CV_PRIVATE__ = data; }, priv);
  await page.goto(`http://localhost:${port}/cv?lang=${LANG}`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);

  await page.pdf({
    path: OUT,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });
  console.log(`CV salvato in ${OUT}`);
} finally {
  await browser.close();
  server.close();
}
