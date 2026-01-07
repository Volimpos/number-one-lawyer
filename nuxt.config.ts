// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  compatibilityDate: "2025-12-29",
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "./favicon.svg" }],
      title: "Консультация юриста в Челябинске | Юрист №1",
    },
  },
  alias: {
    "@": "./src",
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
