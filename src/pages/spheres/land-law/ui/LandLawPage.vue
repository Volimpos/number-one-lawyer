<template>
  <SphereHero :content="heroContent" />
  <ServicesSection />
  <YouGetSection />
  <CasesSection />
  <ReviewsSection />
  <FaqSection />
  <CtaSection />
</template>

<script setup lang="ts">
import { SphereHero } from "~/src/widgets/sphere-hero";
import { heroContent } from "../model/hero";
import YouGetSection from "./sections/you-get-section.vue";
import CasesSection from "./sections/cases-section.vue";
import FaqSection from "./sections/faq-section.vue";
import { ReviewsSection } from "~/src/widgets/reviews-section";
import { CtaSection } from "~/src/widgets/cta-section";

const requestURL = useRequestURL();
const canonicalUrl = requestURL.href;

useSeoMeta({
  title:
    "Юрист по земельному праву в Челябинске — оформление участков, споры о границах, приватизация | Юридическая компания №1",
  ogTitle:
    "Юрист по земельному праву в Челябинске — оформление участков, споры о границах, приватизация | Юридическая компания №1",
  description:
    "Профессиональная помощь юриста по земельному праву в Челябинске. Оформление участков, споры о границах, приватизация, изъятие земельных участков, сопровождение сделок с недвижимостью, кадастровый учет, межевание. Более 10 лет опыта. Бесплатная консультация.",
  ogDescription:
    "Профессиональная помощь юриста по земельному праву в Челябинске. Оформление участков, споры о границах, приватизация, изъятие земельных участков, сопровождение сделок с недвижимостью, кадастровый учет, межевание. Более 10 лет опыта. Бесплатная консультация.",
  robots: "index, follow",
  ogType: "website",
  ogUrl: canonicalUrl,
  ogImage: "~/src/shared/assets/logo.png",
  ogImageAlt:
    "Юрист по земельному праву в Челябинске — Юридическая компания №1",
  twitterCard: "summary_large_image",
  twitterTitle:
    "Юрист по земельному праву в Челябинске — оформление участков, споры о границах, приватизация",
  twitterDescription:
    "Профессиональная помощь юриста по земельному праву в Челябинске. Оформление участков, споры о границах, приватизация, изъятие земельных участков, сопровождение сделок с недвижимостью.",
  twitterImage: "~/src/shared/assets/logo.png",
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
        "юрист по земельному праву, земельный юрист Челябинск, оформление земельных участков, споры о границах участков, приватизация земельного участка, изъятие земельных участков, кадастровый учет, межевание участков, земельные споры, юрист по земельным вопросам, защита прав на землю, регистрация права собственности на землю, споры с соседями о границах, восстановление границ участка, сделки с земельными участками, земельное законодательство, кадастровый инженер, градостроительное право, компенсация при изъятии земли, оспаривание решений по земле, земельный адвокат Челябинск",
    },
  ],
});

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
</script>

<style scoped></style>
