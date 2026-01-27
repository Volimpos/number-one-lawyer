<template>
  <Hero />
  <ServicesSection />
  <YouGetSection />
  <CasesSection />
  <ReviewsSection />
  <FaqSection />
  <CtaSection />
</template>

<script setup lang="ts">
import Hero from "./sections/hero.vue";
import YouGetSection from "./sections/you-get-section.vue";
import CasesSection from "./sections/cases-section.vue";
import FaqSection from "./sections/faq-section.vue";
import { ReviewsSection } from "~/src/widgets/reviews-section";
import { CtaSection } from "~/src/widgets/cta-section";
import logo from "~/src/shared/assets/logo.svg";

const requestURL = useRequestURL();
const canonicalUrl = requestURL.href;

useSeoMeta({
  title:
    "Автоюрист в Челябинске — ДТП, ОСАГО, ГИБДД, лишение прав | Юридическая компания №1",
  ogTitle:
    "Автоюрист в Челябинске — ДТП, ОСАГО, ГИБДД, лишение прав | Юридическая компания №1",
  description:
    "Нужен автоюрист в Челябинске? Поможем после ДТП: споры со страховой (ОСАГО/КАСКО), оспаривание постановлений ГИБДД, защита при лишении прав, возмещение ущерба. Бесплатная консультация.",
  ogDescription:
    "Нужен автоюрист в Челябинске? Поможем после ДТП: споры со страховой (ОСАГО/КАСКО), оспаривание постановлений ГИБДД, защита при лишении прав, возмещение ущерба. Бесплатная консультация.",
  robots: "index, follow",
  ogType: "website",
  ogUrl: canonicalUrl,
  ogImage: logo,
  ogImageAlt: "Автоюрист в Челябинске — Юридическая компания №1",
  twitterCard: "summary_large_image",
  twitterTitle: "Автоюрист в Челябинске — ДТП, ОСАГО, ГИБДД, лишение прав",
  twitterDescription:
    "Нужен автоюрист в Челябинске? Поможем после ДТП: споры со страховой (ОСАГО/КАСКО), оспаривание постановлений ГИБДД, защита при лишении прав, возмещение ущерба.",
  twitterImage: logo,
  ogSiteName: "Юридическая компания №1",
  ogLocale: "ru_RU",
  articleAuthor: "Юридическая компания №1",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: canonicalUrl,
    },
  ],
  meta: [
    {
      name: "keywords",
      content:
        "автоюрист, автоюрист Челябинск, юрист по ДТП, юрист по ОСАГО, юрист по КАСКО, оспаривание постановлений ГИБДД, лишение водительских прав, возмещение ущерба после ДТП, споры со страховой, автоюрист консультация, защита при ДТП, юрист по автомобильным делам, восстановление прав, обжалование штрафов ГИБДД",
    },
  ],
});
</script>

<style scoped></style>
