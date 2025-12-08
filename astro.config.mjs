import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

export default defineConfig({
  // 正式網域，先寫好
  site: 'https://www.mrpeach.com.tw',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), partytown()]
});