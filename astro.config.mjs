// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en", "cat"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
