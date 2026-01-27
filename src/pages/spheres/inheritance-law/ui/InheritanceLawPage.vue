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
    "Юрист по наследству в Челябинске — оформление наследства, споры наследников | Юридическая компания №1",
  ogTitle:
    "Юрист по наследству в Челябинске — оформление наследства, споры наследников | Юридическая компания №1",
  description:
    "Юрист по наследству в Челябинске. Помощь в оформлении наследства, решении споров между наследниками, восстановлении пропущенных сроков. Защита интересов в суде, сопровождение у нотариуса. Более 10 лет практики в наследственном праве. Работаем по Челябинску и области. Бесплатная консультация.",
  ogDescription:
    "Юрист по наследству в Челябинске. Помощь в оформлении наследства, решении споров между наследниками, восстановлении пропущенных сроков. Защита интересов в суде, сопровождение у нотариуса. Более 10 лет практики в наследственном праве. Работаем по Челябинску и области. Бесплатная консультация.",
  robots: "index, follow",
  ogType: "website",
  ogUrl: canonicalUrl,
  ogImage: logo,
  ogImageAlt: "Юрист по наследству в Челябинске — Юридическая компания №1",
  twitterCard: "summary_large_image",
  twitterTitle:
    "Юрист по наследству в Челябинске — оформление наследства, споры наследников",
  twitterDescription:
    "Помощь в оформлении наследства, решении споров между наследниками, восстановлении пропущенных сроков. Защита интересов в суде. Бесплатная консультация.",
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
        "юрист по наследству Челябинск, наследственный юрист, оформление наследства Челябинск, юрист по наследственным делам, споры между наследниками, восстановление срока принятия наследства, раздел наследства, наследственное право Челябинск, юрист по наследственным спорам, помощь в оформлении наследства, нотариус наследство, вступление в наследство, принятие наследства, отказ от наследства, обязательная доля в наследстве, недостойные наследники, оспаривание завещания, признание наследника недостойным, наследственный адвокат Челябинск, наследственные услуги Челябинская область, защита прав наследников, судебные споры по наследству, наследственное имущество, наследование по закону, наследование по завещанию",
    },
    {
      name: "geo.region",
      content: "RU-CHE",
    },
    {
      name: "geo.placename",
      content: "Челябинск",
    },
    {
      name: "author",
      content: "Юридическая компания №1",
    },
  ],
});
</script>

<style scoped></style>
