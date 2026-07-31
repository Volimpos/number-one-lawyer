// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  compatibilityDate: "2025-12-29",
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
      title:
        "Бесплатная консультация  юриста в Челябинске | Юридическая компания №1",
      script: [
        {
          src: "//cdn.callibri.ru/callibri.js",
          defer: true,
        },
      ],
    },
  },
  alias: {
    "@": "/src",
  },
  dir: {
    pages: "src/app/routes",
    layouts: "src/app/layouts",
  },
  css: [
    "primeicons/primeicons.css",
    "lenis/dist/lenis.css",
    "./src/app/styles/tailwind.css",
    "./src/app/styles/global.css",
    "./src/app/styles/fonts.css",
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
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "nuxt-typed-router",
    "@pinia/nuxt",
  ],
  nitro: {
    prerender: {
      routes: [
        "/",
        "/about",
        "/privacy",
        "/thank_you",
        "/autolawyer",
        "/criminal_law",
        "/customer_law",
        "/family_law",
        "/housing_law",
        "/inheritance_law",
        "/labour_law",
        "/land_law",
        "/migration_law",
        // "/cases",
      ],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
});
