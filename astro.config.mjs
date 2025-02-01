// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        mdi: ["scale-balance", "gavel", "briefcase", "arrow-right"],
        "fa-solid": ["scale-balanced", "landmark"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});
