// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  compatibilityDate: "2025-12-29",
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
      title: "Бесплатная консультация  юриста в Челябинске | Юридическая компания №1",
    },
  },
  alias: {
    "@": "/src",
  },
  dir: {
    pages: "src/app/routes",
    layouts: "src/app/layouts",
  },
  fonts: {
    families: [
      {
        name: "Manrope",
        provider: "google",
        weights: [200, 300, 400, 500, 600, 700, 800],
      },
    ],
  },
  css: [
    "primeicons/primeicons.css",
    "./src/app/styles/tailwind.css",
    "./src/app/styles/global.css",
  ],
  runtimeConfig: {
    public: {
      yandexMetrikaId: 104927147,
    },
  },
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
