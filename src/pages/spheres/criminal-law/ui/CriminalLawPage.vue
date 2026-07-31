<template>
  <SphereHero :content="heroContent" />
  <ServicesSection />
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
// import CasesSection from "./sections/cases-section.vue";
import FaqSection from "./sections/faq-section.vue";
import { ReviewsSection } from "~/src/widgets/reviews-section";
import { CtaSection } from "~/src/widgets/cta-section";
import logo from "~/src/shared/assets/logo.png";

useSeoMeta({
  title:
    "Адвокат по уголовным делам в Челябинске — Защита в суде, на следствии, обжалование приговора | Юридическая компания №1",
  ogTitle:
    "Адвокат по уголовным делам в Челябинске — Защита в суде, на следствии, обжалование приговора | Юридическая компания №1",
  description:
    "Профессиональный адвокат по уголовным делам в Челябинске. Защита на следствии и в суде, обжалование приговоров, консультации по уголовным делам. Опыт более 10 лет, выигранные дела, положительные отзывы. Работаем 24/7. Бесплатная первичная консультация. Защита по ст. 158, 159, 228, 105, 111 УК РФ и другим статьям.",
  ogDescription:
    "Профессиональный адвокат по уголовным делам в Челябинске. Защита на следствии и в суде, обжалование приговоров, консультации по уголовным делам. Опыт более 10 лет, выигранные дела, положительные отзывы. Работаем 24/7. Бесплатная первичная консультация. Защита по ст. 158, 159, 228, 105, 111 УК РФ и другим статьям.",
  keywords:
    "адвокат по уголовным делам Челябинск, уголовный адвокат Челябинск, защита по уголовным делам, уголовный юрист Челябинск, адвокат уголовное право, защита в суде Челябинск, защита на следствии, обжалование приговора, адвокат по краже, адвокат по мошенничеству, адвокат по наркотикам, адвокат по убийству, уголовный защитник, консультация адвоката уголовное право, лучший адвокат по уголовным делам Челябинск",
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
