// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// this is genuinely evil and i dont know if its the right fix but npx astro dev wouldnt work without this (issue with astro icon)
const isProduction = !process.env.DEV && process.env.NODE_ENV !== 'development';

// https://astro.build/config
export default defineConfig({
  site: "https://geggos.net",
  integrations: [mdx(), sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  ...(isProduction ? {
    adapter: cloudflare({
      imageService: { build: 'compile', runtime: 'cloudflare-binding' }
    })
  } : {}),
});