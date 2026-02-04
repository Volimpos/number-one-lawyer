<template>
  <div class="wrapper">
    <div class="loader" v-if="!caseItem">
      <i class="pi pi-spinner pi-spin text-2xl"></i>
    </div>
  
    <div class="case-info" v-else>
    <div class="case-text">
        <p class="sphere">{{ caseItem.sphere }}</p>
        <p class="case-title">{{ caseItem.title }}</p>
        <p class="case-description">{{ caseItem.description }}</p>
        <a :href="caseItem.document" target="_blank" class="show-documents-btn">
            Документы по делу
        </a>
    </div>
    <img :src="caseItem.image" alt="Кейс" class="case-image">
  </div>
  <div class="more-cases">
    <p class="more-cases__subtitle">Другие кейсы</p>
    <CasesSection/>
  </div>
  </div>
  
</template>

<script setup lang="ts">
import { CasesSection } from '~/src/widgets/cases-section';
import type { CaseItem } from '~/src/entities/case/model/interfaces';
import getCaseFromStore from '~/src/entities/case/model/getCaseFromStore';
import { fetchCaseById } from '~/src/entities/case/api/fetchCaseById';
import logo from "~/src/shared/assets/logo.png";
import { useHead } from 'nuxt/app';
import { ref } from 'vue';

const route = useRoute();
const caseId = computed(() => String(route.params.id ?? ''));
const caseItem = ref<CaseItem | null>(null);

const loadCase = async () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const id = caseId.value;
  if (!id || id === 'undefined') return;

  const fromStore = getCaseFromStore(id);
  if (fromStore) {
    caseItem.value = fromStore;
    return;
  }

  caseItem.value = null;
  const result = await fetchCaseById(id);
  if (result?.data) {
    caseItem.value = result.data as CaseItem;
  }
};

// Загрузка данных кейса на клиенте после гидрации (SSG)
onMounted(loadCase);
watch(caseId, loadCase);

// SEO и GEO оптимизация - вычисляемые значения для динамических мета-тегов
const seoTitle = computed(() => {
  if (!caseItem.value) {
    return 'Кейс | Юридическая компания №1 в Челябинске';
  }
  return `${caseItem.value.title} | ${caseItem.value.sphere} в Челябинске | Юридическая компания №1`;
});

const seoDescription = computed(() => {
  if (!caseItem.value) {
    return 'Успешные кейсы юридической компании №1 в Челябинске. Профессиональная помощь юристов и адвокатов по различным правовым вопросам.';
  }
  const geoKeywords = 'в Челябинске, Челябинская область';
  const shortDescription = caseItem.value.description.length > 120 
    ? caseItem.value.description.substring(0, 120) + '...'
    : caseItem.value.description;
  return `${shortDescription} ${geoKeywords}. ${caseItem.value.sphere} - профессиональная юридическая помощь от компании №1 в Челябинске.`;
});

const seoKeywords = computed(() => {
  if (!caseItem.value) {
    return 'юрист Челябинск, адвокат Челябинск, юридическая помощь Челябинск, юридические услуги Челябинск';
  }
  const sphere = caseItem.value.sphere.toLowerCase();
  return `${sphere} Челябинск, ${sphere} Челябинская область, юрист по ${sphere} Челябинск, адвокат ${sphere} Челябинск, юридическая помощь ${sphere} Челябинск, кейс ${sphere}, успешное дело ${sphere}, юридическая компания №1 Челябинск`;
});

const seoImage = computed(() => 
  caseItem.value?.image || logo
);

const twitterTitle = computed(() => {
  if (!caseItem.value) {
    return 'Кейс | Юридическая компания №1 в Челябинске';
  }
  return `${caseItem.value.title} | ${caseItem.value.sphere} в Челябинске`;
});

const twitterDescription = computed(() => {
  if (!caseItem.value) {
    return 'Успешные кейсы юридической компании №1 в Челябинске.';
  }
  const shortDescription = caseItem.value.description.length > 100 
    ? caseItem.value.description.substring(0, 100) + '...'
    : caseItem.value.description;
  return `${shortDescription} в Челябинске. ${caseItem.value.sphere}.`;
});

useSeoMeta({
  title: seoTitle,
  ogTitle: seoTitle,
  description: seoDescription,
  ogDescription: seoDescription,
  ogImage: seoImage,
  ogType: 'article',
  ogSiteName: 'Юридическая компания №1',
  ogLocale: 'ru_RU',
  twitterCard: 'summary_large_image',
  twitterTitle: twitterTitle,
  twitterDescription: twitterDescription,
  twitterImage: seoImage,
  keywords: seoKeywords,
  author: 'Юридическая компания №1',
});

// Статические GEO мета-теги для улучшения локального ранжирования
useHead({
  meta: [
    { name: 'geo.region', content: 'RU-CHE' },
    { name: 'geo.placename', content: 'Челябинск' },
    { name: 'geo.position', content: '55.1644;61.4368' },
    { name: 'ICBM', content: '55.1644, 61.4368' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
  ],
});


</script>

<style scoped>
.wrapper {
  padding: 10rem 5rem 1rem;
}
.loader {
  width: 100%;
  height: 50dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader i {
  font-size: 2rem;
  color: var(--gray400);
}
.case-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.case-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: start;
}

.sphere {
  background: var(--gray100);
  border-radius: 999px;
  padding: 0.5rem 2rem;
  font-size: 0.875rem;
  color: var(--gray500);
  user-select: none;
}
.case-title {
font-size: 2.75rem;
line-height: 110%;
font-weight: 700;
color: var(--gray600);
}

.case-text {
  color: var(--gray600);
}

.show-documents-btn {
  border: 1.75px solid var(--primary);
  color: var(--primaryDark);
  height: 2.75rem;
  padding-inline: 2rem;
  border-radius: 0.25rem;
  transition: 200ms;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}

.show-documents-btn:hover {
background: var(--primary);
color: var(--gray600);
}
.show-documents-btn:active {
  background: var(--primaryDark);
  border-color: var(--primaryDark);
} 

.case-image {
  border-radius: 0.5rem;
  object-fit: cover;
  height: 90dvh;
  width: 100%;
}

.more-cases {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
}

.more-cases__subtitle {
  font-size: 2rem;
  font-weight: 600;
  color: var(--gray600);
}

@media screen and (max-width: 96rem) {
  .wrapper {
  padding: 10rem 2rem 1rem;
}
}

@media screen and (max-width: 80rem) {
  .wrapper {
  padding: 10rem 1rem 1rem;
}
.case-info {
  gap: 1rem;
}
}

@media screen and (max-width: 64rem) {
  .case-info {
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
}
.case-title {
  font-size: 2rem;
  line-height: 100%;
}
.case-image {
  aspect-ratio: 1/1;
  height: auto;
}
}


</style>