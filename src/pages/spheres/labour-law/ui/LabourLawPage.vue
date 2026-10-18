<template>
  <SphereHero :content="heroContent" />
  <YouGetSection />
  <!-- <CasesSection /> -->
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
import logo from "~/src/shared/assets/logo.png";

useSeoMeta({
  title:
    "Юрист по трудовому праву в Челябинске — Восстановление на работе, взыскание зарплаты | Юридическая компания №1",
  ogTitle:
    "Юрист по трудовому праву в Челябинске — Восстановление на работе, взыскание зарплаты | Юридическая компания №1",
  description:
    "Профессиональный юрист по трудовому праву в Челябинске. Восстановление на работе после незаконного увольнения, взыскание невыплаченной зарплаты, компенсации за вынужденный прогул, защита при трудовых спорах. Проверка документов и сроков обращения. Бесплатная консультация. Работаем по Челябинску и области.",
  ogDescription:
    "Профессиональный юрист по трудовому праву в Челябинске. Восстановление на работе после незаконного увольнения, взыскание невыплаченной зарплаты, компенсации за вынужденный прогул, защита при трудовых спорах. Проверка документов и сроков обращения. Бесплатная консультация. Работаем по Челябинску и области.",
  keywords:
    "юрист по трудовому праву Челябинск, трудовые споры Челябинск, восстановление на работе, взыскание зарплаты, незаконное увольнение, компенсация за вынужденный прогул, трудовой юрист, защита прав работника, трудовое право Челябинск, юрист по трудовым спорам",
  ogImage: logo,
  twitterCard: "summary_large_image",
  ogSiteName: "Юридическая компания №1",
  ogType: "website",
  ogLocale: "ru_RU",
  robots: "index, follow",
  author: "Юридическая компания №1",
});

onMounted(() => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
</script>

<style scoped></style>
