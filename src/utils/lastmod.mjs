/**
 * lastmod.mjs — Build a URL→lastmod map from content collection frontmatter.
 *
 * Used in astro.config.mjs to provide per-page <lastmod> in the sitemap.
 * Falls back to build date for pages without a pubDate.
 */
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const contentDir = join(__dirname, '..', '..', 'src', 'content');

/** Parse YAML-ish frontmatter (YAML-lite, enough for pubDate) */
function parseFrontmatter(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};
    const fm = {};
    for (const line of match[1].split('\n')) {
      const idx = line.indexOf(':');
      if (idx === -1) continue;
      fm[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    }
    return fm;
  } catch {
    return {};
  }
}

/**
 * Returns a function that maps a pathname → lastmod Date (or undefined).
 * Call once at config-load time.
 */
export function createLastmodLookup() {
  /** @type {Record<string, Date>} */
  const map = {};

  const collections = ['diary', 'encyclopedia', 'news'];
  for (const col of collections) {
    const dir = join(contentDir, col);
    let files;
    try {
      files = readdirSync(dir);
    } catch {
      continue; // directory might not exist yet
    }

    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      const fm = parseFrontmatter(join(dir, file));
      const raw = fm.pubDate || '';
      const d = new Date(raw);
      if (!isNaN(d.getTime())) {
        const slug = file.slice(0, -3); // strip .md
        map[`/${col}/${slug}`] = d;
      }
    }
  }

  return (/** @type {string} */ pathname) => map[pathname];
}
