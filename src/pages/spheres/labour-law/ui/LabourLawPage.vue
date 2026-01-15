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

useSeoMeta({
  title:
    "Автоюрист в Челябинске — ДТП, ОСАГО, ГИБДД, лишение прав | Юридическая компания №1",
  ogTitle:
    "Автоюрист в Челябинске — ДТП, ОСАГО, ГИБДД, лишение прав | Юридическая компания №1",
  description:
    "Нужен автоюрист в Челябинске? Поможем после ДТП: споры со страховой (ОСАГО/КАСКО), оспаривание постановлений ГИБДД, защита при лишении прав, возмещение ущерба. Бесплатная консультация.",
  ogDescription:
    "Нужен автоюрист в Челябинске? Поможем после ДТП: споры со страховой (ОСАГО/КАСКО), оспаривание постановлений ГИБДД, защита при лишении прав, возмещение ущерба. Бесплатная консультация.",
  ogImage:
    "https://s3.ru1.storage.beget.cloud/a9fd9a74202c-volimpos/taole/taole-logo.jpg",
  twitterCard: "summary_large_image",
  ogSiteName: "Юридическая компания №1",
});
</script>

<style scoped></style>
