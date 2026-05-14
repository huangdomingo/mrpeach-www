import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import { createLastmodLookup } from './src/utils/lastmod.mjs';

// Build a per-page lastmod map from content collection frontmatter
const getLastmod = createLastmodLookup();

export default defineConfig({
  // 正式網域
  site: 'https://www.mrpeach.com.tw',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Fallback: build date for pages without pubDate (about, contact, FAQ…)
      lastmod: new Date(),
      // Per-page: use pubDate from content frontmatter where available
      serialize(item) {
        const path = new URL(item.url).pathname;
        const custom = getLastmod(path);
        if (custom) item.lastmod = custom;
        return item;
      },
    }),
    partytown()
  ]
});