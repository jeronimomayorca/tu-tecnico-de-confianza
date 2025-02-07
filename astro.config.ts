import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import tailwindIntegration from "@astrojs/tailwind";
import db from "@astrojs/db";

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === "production"
      ? "https://jeronimomayorca.vercel.app/"
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : "https://localhost:3000/",
  trailingSlash: "ignore",
  integrations: [
    sitemap(),
    UnoCSS({ injectReset: true }),
    tailwindIntegration(),
    db(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
