// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from "vite-tsconfig-paths";
import Aura from "@primeuix/themes/aura";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "./favicon.svg" }],
      title: "Магазин украшений с характером | TAOLE",
    },
  },
  alias: {
    "@": "./src",
  },
  dir: {
    pages: "src/app/routes",
    layouts: "src/app/layouts",
  },
  primevue: {
    autoImport: false,
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          cssLayer: true,
        },
      },
    },
  },
  fonts: {
    families: [
      {
        name: "Montserrat",
        provider: "google",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
  css: [
    "primeicons/primeicons.css",
    "./src/app/styles/tailwind.css",
    "./src/app/styles/global.css",
  ],
  tailwindcss: {
    cssPath: "src/app/styles/tailwind.css",
    configPath: "tailwind.config.ts",
  },
  modules: [
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "nuxt-typed-router",
    "@pinia/nuxt",
  ],
  vite: {
    plugins: [tsconfigPaths()],
  },
});
