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
import logo from "~/src/app/assets/logo.svg";

const requestURL = useRequestURL();
const canonicalUrl = requestURL.href;

useSeoMeta({
  title:
    "Юрист по миграционному праву в Челябинске — РВП, ВНЖ, гражданство РФ | Юридическая компания №1",
  ogTitle:
    "Юрист по миграционному праву в Челябинске — РВП, ВНЖ, гражданство РФ | Юридическая компания №1",
  description:
    "Юрист по миграционному праву в Челябинске. Помощь в оформлении РВП, ВНЖ и гражданства РФ. Защита при выдворении, депортации и запрете на въезд. Подготовка документов, сопровождение в МВД и суде. Работаем по Челябинску и области. Бесплатная консультация.",
  ogDescription:
    "Юрист по миграционному праву в Челябинске. Помощь в оформлении РВП, ВНЖ и гражданства РФ. Защита при выдворении, депортации и запрете на въезд. Подготовка документов, сопровождение в МВД и суде. Работаем по Челябинску и области. Бесплатная консультация.",
  robots: "index, follow",
  ogType: "website",
  ogUrl: canonicalUrl,
  ogImage: logo,
  ogImageAlt:
    "Юрист по миграционному праву в Челябинске — Юридическая компания №1",
  twitterCard: "summary_large_image",
  twitterTitle:
    "Юрист по миграционному праву в Челябинске — РВП, ВНЖ, гражданство РФ",
  twitterDescription:
    "Помощь в оформлении РВП, ВНЖ и гражданства РФ. Защита при выдворении, депортации и запрете на въезд. Бесплатная консультация.",
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
        "миграционный юрист Челябинск, юрист по миграционному праву, РВП Челябинск, ВНЖ Челябинск, гражданство РФ Челябинск, оформление РВП, оформление ВНЖ, получение гражданства РФ, запрет на въезд, выдворение из России, депортация, миграционный адвокат Челябинск, помощь мигрантам Челябинск, миграционные услуги Челябинская область, разрешение на временное проживание, вид на жительство, получение гражданства России, защита мигрантов, споры с МВД, миграционное право",
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
