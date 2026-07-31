<template>
  <div class="wrapper">
    <div class="title-container">
      <h1 class="title">Наши кейсы</h1>
      <p class="description">
        Показываем свою работу и делимся полезной практикой
      </p>
    </div>
    <div class="cases-grid">
      <template v-if="!cases || cases.length === 0">
        <CaseCardSkeleton v-for="i in 20" :key="i" />
      </template>
      <template v-else>
        <CaseCard
          v-for="(caseItem, index) in cases"
          :key="index"
          :image="caseItem.image"
          :date="formatDate(caseItem.created_at)"
          :sphere="caseItem.sphere"
          :title="caseItem.title"
          :description="caseItem.description"
          :link="`/cases/${caseItem.id}`"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from "nuxt/app";
import { CaseCard, CaseCardSkeleton } from "~/src/entities/case";
import { useCases } from "~/src/entities/case/model/store";
import { formatDate } from "~/src/shared/lib/formatDate";
import logo from "~/src/shared/assets/logo.png";

const requestURL = useRequestURL();
const canonicalUrl = requestURL.href;

useSeoMeta({
  title:
    "Наши кейсы — Реальные дела и практика юристов в Челябинске | Юридическая компания №1",
  ogTitle:
    "Наши кейсы — Реальные дела и практика юристов в Челябинске | Юридическая компания №1",
  description:
    "Изучите наши кейсы: реальные дела по различным отраслям права в Челябинске. Успешные решения по ДТП, семейным спорам, трудовым вопросам, недвижимости и другим юридическим вопросам. Показываем свою работу и делимся полезной практикой.",
  ogDescription:
    "Изучите наши кейсы: реальные дела по различным отраслям права в Челябинске. Успешные решения по ДТП, семейным спорам, трудовым вопросам, недвижимости и другим юридическим вопросам. Показываем свою работу и делимся полезной практикой.",
  robots: "index, follow",
  ogType: "website",
  ogUrl: canonicalUrl,
  ogImage: logo,
  ogImageAlt: "Наши кейсы — Юридическая компания №1",
  twitterCard: "summary_large_image",
  twitterTitle: "Наши кейсы — Реальные дела и практика юристов в Челябинске",
  twitterDescription:
    "Изучите наши кейсы: реальные дела по различным отраслям права в Челябинске. Успешные решения по ДТП, семейным спорам, трудовым вопросам, недвижимости и другим юридическим вопросам.",
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
        "кейсы юристов, юридические кейсы, судебная практика, примеры дел, успешные дела юристов, кейсы по праву, юридическая практика Челябинск, реальные дела юристов, кейсы по семейному праву, кейсы по ДТП, кейсы по трудовому праву, кейсы по недвижимости, судебные решения, практика юристов, примеры судебных дел",
    },
  ],
});

const casesStore = useCases();
const { cases } = storeToRefs(casesStore);

await useAsyncData(
  "cases",
  async () => {
    await casesStore.loadAllCases();
  },
  { server: false },
);
</script>

<style scoped>
.wrapper {
  padding: 7rem 5rem;
}
.title-container {
  text-align: center;
}
.title {
  font-size: 3rem;
  line-height: 110%;
  font-weight: 700;
  color: var(--gray600);
}

.description {
  color: var(--gray500);
  margin-top: 0.5rem;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

.cases-grid > * {
  min-width: 0;
}

@media screen and (max-width: 96rem) {
  .wrapper {
    padding: 7rem 2rem;
  }
}

@media screen and (max-width: 80rem) {
  .wrapper {
    padding: 7rem 1rem;
  }
  .cases-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

@media screen and (max-width: 64rem) {
  .cases-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
