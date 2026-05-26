const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'out');

if (!fs.existsSync(outDir)) {
  console.error('postbuild: out/ folder missing — run npm run build first.');
  process.exit(1);
}

// Copy Apache rules into the export
fs.copyFileSync(path.join(root, 'public', '.htaccess'), path.join(outDir, '.htaccess'));
console.log('Copied .htaccess → out/.htaccess');

// Build id helps confirm a full deploy on the server
const buildId = process.env.NEXT_BUILD_ID || new Date().toISOString();
fs.writeFileSync(path.join(outDir, 'build-id.txt'), buildId + '\n', 'utf8');
console.log('Wrote out/build-id.txt:', buildId);

// Favicon: browsers request /favicon.ico by default
const favi = path.join(root, 'public', 'favi.png');
const faviconOut = path.join(outDir, 'favicon.ico');
if (fs.existsSync(favi)) {
  fs.copyFileSync(favi, faviconOut);
  console.log('Copied public/favi.png → out/favicon.ico');
} else {
  console.warn('postbuild: public/favi.png not found — add it to fix favicon 404.');
}

// Verify HTML chunk references exist on disk (catches incomplete uploads locally)
const indexPath = path.join(outDir, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');
const chunkRefs = [...indexHtml.matchAll(/\/_next\/static\/chunks\/[^"'\s]+/g)].map((m) => m[0]);
const missing = chunkRefs.filter((ref) => !fs.existsSync(path.join(outDir, ref.replace(/^\//, ''))));

if (missing.length > 0) {
  console.error('postbuild: index.html references missing chunk files:');
  missing.forEach((f) => console.error('  -', f));
  process.exit(1);
}

const chunksDir = path.join(outDir, '_next', 'static', 'chunks');
const chunkCount = fs.existsSync(chunksDir)
  ? fs.readdirSync(chunksDir, { recursive: true }).filter((f) => String(f).endsWith('.js')).length
  : 0;

console.log(`postbuild: verified ${chunkRefs.length} index chunk refs; ${chunkCount} .js files in _next/static/chunks`);
