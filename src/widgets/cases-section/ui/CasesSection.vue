<template>
  <div
    ref="gridRef"
    class="cases__grid"
    :class="{ 'cases__grid--visible': isGridVisible }"
  >
  <template v-if="!casesToDisplay || isLoading">
    <CaseCardSkeleton v-for="item in 4" :key="item"/>
  </template>
  <template v-else>
    <CaseCard
      v-for="(caseItem, index) in casesToDisplay"
      :key="caseItem.id"
      class="cases__item"
      :style="{
        '--case-index': index,
      }"
      :image="caseItem.image"
      :date="formatDate(caseItem.created_at)"
      :sphere="caseItem.sphere"
      :title="caseItem.title"
      :description="caseItem.description"
      :link="`/cases/${caseItem.id}`"
    />
  </template>
  </div>
</template>

<script setup lang="ts">
import { CaseCard } from "~/src/entities/case";
import { useCases } from "~/src/entities/case/model/store";
import getLimitedCaseItems from "~/src/entities/case/model/getLimitedCaseItems";
import type { CaseItem } from "~/src/entities/case/model/interfaces";
import CaseCardSkeleton from "~/src/entities/case/ui/CaseCardSkeleton.vue";
import { formatDate } from "~/src/shared/lib/formatDate";
import { useIntersectionObserver } from "~/src/shared/lib/useIntersectionObserver";

const casesStore = useCases()
const { loadAllCases } = casesStore
const { cases } = storeToRefs(casesStore)
const casesToDisplay = ref<CaseItem[] | null>(null)
const gridRef = ref<HTMLElement | null>(null)

const { isVisible: isGridVisible } = useIntersectionObserver(gridRef, {
  threshold: 0.2,
  once: true,
})

const isLoading = ref<boolean>(false)
const loadSection = async () => {
  isLoading.value = true
  await loadAllCases()
  if (cases.value && cases.value?.length > 0) {
    casesToDisplay.value = getLimitedCaseItems()
  }
  isLoading.value = false
}

onMounted(async () => {
  await loadSection()
})
</script>

<style scoped>
.cases__grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  --case-base-delay: 110ms;
  --case-stagger: 110ms;
  --case-offset: clamp(14px, 2vw, 32px);
  --case-offset-step: clamp(4px, 0.7vw, 10px);
  --case-rotate-step: 2deg;
}

.cases__grid > .cases__item {
  opacity: 0;
  transform:
    translate(
      calc(var(--case-offset) + (var(--case-index) * var(--case-offset-step))),
      calc(var(--case-offset) + (var(--case-index) * var(--case-offset-step)))
    )
    rotate(calc((var(--case-index) - 1.5) * var(--case-rotate-step)));
  transform-origin: bottom right;
  transition:
    opacity 720ms ease,
    transform 1200ms cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(var(--case-base-delay) + (var(--case-index) * var(--case-stagger)));
  will-change: transform, opacity;
}

.cases__grid--visible > .cases__item {
  opacity: 1;
  transform: translate(0, 0) rotate(0deg);
}

@media screen and (max-width: 96rem) {
  .cases__grid {
    gap: 1.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    --case-base-delay: 95ms;
    --case-stagger: 95ms;
    --case-offset: clamp(12px, 2vw, 28px);
    --case-offset-step: clamp(3px, 0.6vw, 8px);
  }
  .cases__grid > :nth-child(4) {
    display: none;
  }
}

@media screen and (max-width: 80rem) {
  .cases__grid {
    gap: 1rem;
    --case-base-delay: 85ms;
    --case-stagger: 90ms;
  }
}

@media screen and (max-width: 64rem) {
  .cases__grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    --case-base-delay: 75ms;
    --case-offset: clamp(10px, 4vw, 22px);
    --case-offset-step: clamp(2px, 1vw, 6px);
    --case-rotate-step: 1.2deg;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cases__grid > .cases__item {
    transition: none;
    transform: none;
    opacity: 1;
  }
}
</style>
