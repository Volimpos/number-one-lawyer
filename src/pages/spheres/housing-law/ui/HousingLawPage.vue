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

const requestURL = useRequestURL();
const canonicalUrl = requestURL.href;

useSeoMeta({
  title:
    "Юрист по жилищному праву в Челябинске — споры с УК, приватизация, ЖКХ | Юридическая компания №1",
  ogTitle:
    "Юрист по жилищному праву в Челябинске — споры с УК, приватизация, ЖКХ | Юридическая компания №1",
  description:
    "Профессиональная помощь юриста по жилищному праву в Челябинске. Споры с управляющими компаниями, приватизация, проблемы с ЖКХ, выселение, перепланировка. Более 10 лет опыта. Бесплатная консультация.",
  ogDescription:
    "Профессиональная помощь юриста по жилищному праву в Челябинске. Споры с управляющими компаниями, приватизация, проблемы с ЖКХ, выселение, перепланировка. Более 10 лет опыта. Бесплатная консультация.",
  robots: "index, follow",
  ogType: "website",
  ogUrl: canonicalUrl,
  ogImage: "~/src/app/assets/logo.svg",
  ogImageAlt: "Юрист по жилищному праву в Челябинске — Юридическая компания №1",
  twitterCard: "summary_large_image",
  twitterTitle:
    "Юрист по жилищному праву в Челябинске — споры с УК, приватизация, ЖКХ",
  twitterDescription:
    "Профессиональная помощь юриста по жилищному праву в Челябинске. Споры с управляющими компаниями, приватизация, проблемы с ЖКХ, выселение, перепланировка.",
  twitterImage: "~/src/app/assets/logo.svg",
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
        "юрист по жилищному праву, жилищный юрист Челябинск, споры с управляющей компанией, приватизация квартиры, проблемы с ЖКХ, выселение, перепланировка, признание права собственности, раздел жилья, споры с застройщиками, юрист ЖКХ, защита жилищных прав",
    },
  ],
});
</script>

<style scoped></style>
