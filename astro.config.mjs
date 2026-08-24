import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://diegolu7.github.io',
  base: '/beira/',
  integrations: [react(), sitemap()],
});
