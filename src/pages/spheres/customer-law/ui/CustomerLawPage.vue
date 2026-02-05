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
    "Юрист по защите прав потребителей в Челябинске — возврат денег за некачественный товар или услугу | Юридическая компания №1",
  ogTitle:
    "Юрист по защите прав потребителей в Челябинске — возврат денег за некачественный товар или услугу | Юридическая компания №1",
  description:
    "Профессиональная помощь юриста по защите прав потребителей в Челябинске. Возврат товара, защита при некачественных услугах, взыскание компенсации, споры с продавцами и исполнителями услуг. Более 10 лет опыта. Бесплатная консультация.",
  ogDescription:
    "Профессиональная помощь юриста по защите прав потребителей в Челябинске. Возврат товара, защита при некачественных услугах, взыскание компенсации, споры с продавцами и исполнителями услуг. Более 10 лет опыта. Бесплатная консультация.",
  robots: "index, follow",
  ogType: "website",
  ogUrl: canonicalUrl,
  ogImage: "~/src/shared/assets/logo.png",
  ogImageAlt:
    "Юрист по защите прав потребителей в Челябинске — Юридическая компания №1",
  twitterCard: "summary_large_image",
  twitterTitle:
    "Юрист по защите прав потребителей в Челябинске — возврат денег за некачественный товар или услугу",
  twitterDescription:
    "Профессиональная помощь юриста по защите прав потребителей в Челябинске. Возврат товара, защита при некачественных услугах, взыскание компенсации, споры с продавцами и исполнителями услуг.",
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
        "юрист по защите прав потребителей, защита прав потребителей Челябинск, возврат товара, некачественный товар, защита прав потребителя, взыскание компенсации, споры с продавцами, защита при некачественных услугах, обмен товара, гарантийный ремонт, юрист по правам потребителей, консультация по защите прав потребителей, возмещение ущерба потребителю, претензия продавцу",
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
