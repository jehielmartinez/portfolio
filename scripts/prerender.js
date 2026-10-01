// Bakes the rendered app into dist/index.html so crawlers and LLMs that don't run
// JavaScript see the full résumé, and writes dist/llms.txt (markdown) alongside it.
// Runs after `vite build` (client) and `vite build --ssr` (server entry → dist-ssr/).
import { copyFileSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = `${root}dist`;
const ssrEntry = `${root}dist-ssr/entry-server.js`;

const { render, renderMarkdown, renderJsonLd, meta } = await import(ssrEntry);

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const head = [
  `<title>${escapeAttr(meta.title)}</title>`,
  `<meta name="description" content="${escapeAttr(meta.description)}" />`,
  `<link rel="canonical" href="${meta.url}/" />`,
  `<link rel="alternate" type="text/markdown" href="/llms.txt" title="Résumé (markdown)" />`,
  `<meta property="og:type" content="profile" />`,
  `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
  `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
  `<meta property="og:url" content="${meta.url}/" />`,
  `<meta property="og:image" content="${meta.image}" />`,
  `<meta name="twitter:card" content="summary" />`,
  `<script type="application/ld+json">${renderJsonLd()}</script>`,
].join('\n    ');

const template = readFileSync(`${dist}/index.html`, 'utf8');
const html = template
  .replace(/<title>.*<\/title>/, '')
  .replace('<!--app-head-->', head)
  .replace('<!--app-html-->', render());

if (html.includes('<!--app-')) throw new Error('prerender: placeholder not replaced in index.html');

writeFileSync(`${dist}/index.html`, html);
writeFileSync(`${dist}/llms.txt`, renderMarkdown());
// Stable, unhashed URL for the PDF so llms.txt can link to it.
copyFileSync(`${root}src/assets/Jehiel_Martinez_Resume.pdf`, `${dist}/resume.pdf`);
rmSync(`${root}dist-ssr`, { recursive: true, force: true });

console.log('prerender: wrote dist/index.html, dist/llms.txt, dist/resume.pdf');
