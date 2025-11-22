<template>
  <div class="filters-container">
    <div class="filters-sort">
      <Dropdown :items="filters" :active="activeSort">Сортировать по</Dropdown>
    </div>
    <div class="filters-categories">
      <LinkButton nuxtLink button severity="secondary" large link="/catalog">
        Каталог
      </LinkButton>
      <LinkButton
        nuxtLink
        button
        severity="secondary"
        large
        link="/catalog/rings"
      >
        Кольца
      </LinkButton>
      <LinkButton
        nuxtLink
        button
        severity="secondary"
        large
        link="/catalog/earrings"
      >
        Серьги
      </LinkButton>
      <LinkButton
        nuxtLink
        button
        severity="secondary"
        large
        link="/catalog/bracelets"
      >
        Браслеты
      </LinkButton>
      <LinkButton
        nuxtLink
        button
        severity="secondary"
        large
        link="/catalog/necklace"
      >
        Колье
      </LinkButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Dropdown } from "~/src/shared/ui/dropdown";
import type { DropdownItemInterface } from "~/src/shared/ui/dropdown/types";
import { LinkButton } from "~/src/shared/ui/LinkButton";
import type { SortValueType } from "../../types/filter";
import { useRoute } from "vue-router";

const route = useRoute();
const filters = ref<DropdownItemInterface[]>([
  {
    label: "По возрастанию цены",
    value: "priceUp",
    action: () => onSort("priceUp"),
  },
  {
    label: "По убыванию цены",
    value: "priceDown",
    action: () => onSort("priceDown"),
  },
  {
    label: "Сначала новые",
    value: "dateDown",
    action: () => onSort("dateDown"),
  },
  {
    label: "Сначала старые",
    value: "dateUp",
    action: () => onSort("dateUp"),
  },
]);

const emit = defineEmits<{
  (e: "onSort", sortValue: SortValueType): void;
}>();

const activeSort = ref<string>("");

const onSort = (sortValue: SortValueType) => {
  activeSort.value = sortValue;
  emit("onSort", sortValue);
};

watch(
  () => route.params,
  () => {
    activeSort.value = "";
  },
  {
    deep: false,
    immediate: true,
  }
);
</script>

<style scoped>
.filters-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  touch-action: manipulation;
}

.filters-categories {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

.filters-categories::-webkit-scrollbar {
  width: 0;
}

@media screen and (max-width: 64rem) {
  .filters-container {
    flex-direction: column-reverse;
    gap: 0.5rem;
  }
  .filters-categories {
    padding-bottom: 0.5rem;
  }
  .filters-sort {
    width: 100%;
  }
}
</style>
