/**
 * Run after uploading `out/` to Hostinger to confirm critical assets exist.
 * Usage: node scripts/verify-deploy.js https://universecoworks.com
 */
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const base = (process.argv[2] || 'https://universecoworks.com').replace(/\/$/, '');
const outDir = path.join(__dirname, '..', 'out');
const indexHtml = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');

const paths = new Set([
  '/',
  '/build-id.txt',
  '/favicon.ico',
  '/favi.png',
  ...[...indexHtml.matchAll(/\/_next\/static\/[^"'\s]+/g)].map((m) => m[0]),
]);

function fetchStatus(url) {
  return new Promise((resolve) => {
    const lib = url.startsWith('https') ? https : http;
    lib
      .get(url, { timeout: 15000 }, (res) => {
        res.resume();
        resolve(res.statusCode);
      })
      .on('error', () => resolve(0));
  });
}

(async () => {
  console.log('Checking', base, '...\n');
  let failed = 0;

  for (const p of paths) {
    const url = base + p;
    const status = await fetchStatus(url);
    const ok = status === 200;
    console.log(`${ok ? 'OK' : 'FAIL'} ${status} ${p}`);
    if (!ok) failed++;
  }

  if (failed > 0) {
    console.error(`\n${failed} asset(s) failed. Upload the full out/ folder (especially out/_next/).`);
    process.exit(1);
  }

  console.log('\nAll checked assets returned HTTP 200.');
})();
