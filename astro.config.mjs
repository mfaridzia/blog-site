// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.muhfaridzia.live',
  integrations: [
    mdx(),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default'
      },
      wrap: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});

