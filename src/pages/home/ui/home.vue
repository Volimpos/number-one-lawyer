<template>
  <error-message v-if="!landing" />
  <div v-if="landing" class="w-full">
    <hero
      :heroImage1="landing.heroImage1"
      :heroImage2="landing.heroImage2"
      :heroText1="landing.heroText1"
      :heroText2="landing.heroText2"
    />
    <example-products :products="landing.bestsellers" />
    <categories
      :categoryImageRings="landing.categoryImageRings"
      :categoryImageBracelets="landing.categoryImageBracelets"
      :categoryImageEarrings="landing.categoryImageEarrings"
      :categoryImageNecklace="landing.categoryImageNecklace"
    />
    <brand-history
      :brandHistoryTitle1="landing.brandHistoryTitle1"
      :brandHistoryText1="landing.brandHistoryText1"
      :brandHistoryImage1="landing.brandHistoryImage1"
      :brandHistoryTitle2="landing.brandHistoryTitle2"
      :brandHistoryText2="landing.brandHistoryText2"
      :brandHistoryImage2="landing.brandHistoryImage2"
      :brandHistoryTitle3="landing.brandHistoryTitle3"
      :brandHistoryText3="landing.brandHistoryText3"
      :brandHistoryImage3="landing.brandHistoryImage3"
      :brandHistoryTitle4="landing.brandHistoryTitle4"
      :brandHistoryText4="landing.brandHistoryText4"
    />
    <jewerly-advantages
      :advantagesTitle="landing.advantagesTitle"
      :advantagesDescription="landing.advantagesDescription"
      :advantagesBlock1Title="landing.advantagesBlock1Title"
      :advantagesBlock1Text="landing.advantagesBlock1Text"
      :advantagesImage1="landing.advantagesImage1"
      :advantagesBlock2Title="landing.advantagesBlock2Title"
      :advantagesBlock2Text="landing.advantagesBlock2Text"
      :advantagesImage2="landing.advantagesImage2"
    />
    <cta-section :ctaText="landing.ctaText" :ctaImage="landing.ctaImage" />
  </div>
</template>

<script setup lang="ts">
import hero from "./sections/hero.vue";
import exampleProducts from "./sections/example-products.vue";
import categories from "./sections/categories.vue";
import brandHistory from "./sections/brand-history.vue";
import jewerlyAdvantages from "./sections/jewerly-advantages.vue";
import ctaSection from "./sections/cta-section.vue";
import type { LandingInterface } from "../model/landing";
import useApi from "~/src/shared/api/useApi";
import { ErrorMessage } from "~/src/shared/ui/ErrorMessage";
useSeoMeta({
  title: "Бренд украшений с характером | TAOLE",
  ogTitle: "Бренд украшений с характером | TAOLE",
  description:
    "Бренд украшений с характером от Хабаровского бренда. Позволь себе эту роскошь - быть собой! Будь яркой, дерзкой, элегантной. Be yourself.",
  ogDescription:
    "Бренд украшений с характером от Хабаровского бренда. Позволь себе эту роскошь - быть собой! Будь яркой, дерзкой, элегантной. Be yourself.",
  ogImage:
    "https://s3.ru1.storage.beget.cloud/a9fd9a74202c-volimpos/taole/taole-logo.jpg",
  twitterCard: "summary_large_image",
  ogSiteName: "TAOLE",
});
const landing = ref<LandingInterface | null>(null);

const { data, error, status } = await useAsyncData("landing", async () => {
  try {
    const response = await useApi.get("landing", {});
    return {
      result: true,
      landing: structuredClone(response),
      error: null,
    };
  } catch (error: any) {
    return {
      result: false,
      landing: null,
      error: error.message || "Ошибка загрузки данных",
    };
  }
});

if (data.value) {
  landing.value = data.value.landing;
}
</script>

<style scoped></style>
