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
        mdi: [
          "scale-balance",
          "chat",
          "alert-circle",
          "robot",
          "cash-remove",
          "home-outline",
          "shield-account",
          "account-lock-open",
          "clock-fast",
          "account-tie",
          "account-child-outline",
          "account-switch",
          "cash-multiple",
          "file-document-outline",
          "police-badge",
          "hand-heart",
          "shield-check",
          "gavel",
          "briefcase",
          "account-multiple",
          "hand-coin",
          "arrow-right",
          "check",
          "target",
          "folder-information",
          "eye",
          "star-four-points",
          "facebook",
          "whatsapp",
          "map-marker",
          "phone",
          "email",
          "home",
          "account-group",
          "format-quote-open",
          "check-circle",
          "handshake",
          "briefcase-check",
          "account-heart",
          "send",
          "arrow-left",
        ],
        "fa-solid": ["scale-balanced", "landmark"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});
