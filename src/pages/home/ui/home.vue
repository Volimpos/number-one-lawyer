<template>
  <hero />
  <cases-section />
  <ReviewsSection />
  <stats-section />
  <may-trust-section />
  <law-spheres />
  <cta-section />
</template>

<script setup lang="ts">
import Hero from "./sections/hero.vue";
import CasesSection from "./sections/cases-section.vue";
import { ReviewsSection } from "~/src/widgets/reviews-section";
import StatsSection from "./sections/stats-section.vue";
import MayTrustSection from "./sections/may-trust-section.vue";
import LawSpheres from "./sections/law-spheres.vue";
import { CtaSection } from "~/src/widgets/cta-section"
import logo from "~/src/shared/assets/logo.png";
useSeoMeta({
  title:
    "Бесплатная консультация юриста в Челябинске | Юридическая компания №1",
  ogTitle:
    "Бесплатная консультация юриста в Челябинске | Юридическая компания №1",
  description:
    "Юридическая компания №1 в Челябинске — профессиональная помощь юристов и адвокатов. Консультации, защита в суде, сопровождение бизнеса, гражданские и арбитражные споры. Работаем по Челябинску и области.",
  ogDescription:
    "Юридическая компания №1 в Челябинске — профессиональная помощь юристов и адвокатов. Консультации, защита в суде, сопровождение бизнеса, гражданские и арбитражные споры. Работаем по Челябинску и области.",
  ogImage: logo,
  twitterCard: "summary_large_image",
  ogSiteName: "Юридическая компания №1",
});
</script>

<style scoped></style>
