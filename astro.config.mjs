import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const target = process.env.DEPLOY_TARGET ?? 'local';

const targets = {
  local: { site: 'http://localhost:4321', base: '/' },
  'gh-pages': { site: 'https://diegolu7.github.io', base: '/beira/' },
  production: { site: 'https://beira.ar', base: '/' },
};

const { site, base } = targets[target] ?? targets.local;

export default defineConfig({
  site,
  base,
  integrations: [react(), sitemap()],
});
