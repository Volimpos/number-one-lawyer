<template>
  <div
    class="cases__grid"
  >
  <template v-if="!casesToDisplay || isLoading">
    <CaseCardSkeleton v-for="item in 4" :key="item"/>
  </template>
  <template v-else>
    <CaseCard
      v-for="caseItem in casesToDisplay"
      :key="caseItem.id"
      class="cases__item"
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

const casesStore = useCases()
const { loadAllCases } = casesStore
const { cases } = storeToRefs(casesStore)
const casesToDisplay = ref<CaseItem[] | null>(null)

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
}

@media screen and (max-width: 96rem) {
  .cases__grid {
    gap: 1.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .cases__grid > :nth-child(4) {
    display: none;
  }
}

@media screen and (max-width: 80rem) {
  .cases__grid {
    gap: 1rem;
  }
}

@media screen and (max-width: 64rem) {
  .cases__grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
