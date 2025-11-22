<template>
  <div class="table-container" role="table" aria-label="Таблица размеров">
    <div class="table-header" role="row">
      <div class="table-cell header-cell">{{ props.sizeMeasure }}</div>
      <div class="table-cell header-cell">Размер</div>
    </div>

    <div class="table-body" ref="tableBodyRef">
      <div
        @click="emit('onSelect', size)"
        v-for="(size, index) in measurementArray"
        :key="size"
        class="table-row"
        :class="{ 'size-selected': size === props.selectedSize }"
        role="row"
        :data-size="size"
      >
        <div class="table-cell">{{ size }}</div>
        <div class="table-cell">{{ props.sizeValuesArray[index] }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  measurementArray: string[];
  sizeValuesArray: string[];
  sizeMeasure: string;
  selectedSize?: string;
}>();

const emit = defineEmits<{
  (e: "onSelect", size: string): void;
}>();

const tableBodyRef = ref<HTMLDivElement | null>(null);

watch(
  () => props.selectedSize,
  async (newSize) => {
    if (!newSize || !tableBodyRef.value) return;

    await nextTick();

    const selectedRow = tableBodyRef.value.querySelector(
      `.table-row[data-size="${newSize}"]`
    ) as HTMLElement | null;

    if (selectedRow) {
      selectedRow.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth",
      });
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.table-container {
  width: 100%;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  user-select: none;
  height: 100%;
  overflow-y: auto;
  position: relative;
}

.table-header {
  display: flex;
  background-color: var(--gray100);
  padding-right: 0.95rem;
  border-bottom: 1px solid var(--gray200);
  border-radius: 0.25rem 0.25rem 0 0;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
}

.table-body {
  flex-shrink: 0;
  color: var(--gray500);
}

.table-row {
  display: flex;
  width: 100%;
}
.table-row:hover,
.table-row:active,
.size-selected {
  background-color: var(--gray100);
}

.table-cell {
  flex: 1;
  padding: 0.75rem 1rem;
}

.table-body .table-cell {
  border-bottom: 1px solid var(--gray200);
}

.table-body .header-cell {
  font-weight: 600;
}

@media screen and (max-width: 64rem) {
  .table-container {
    height: calc(100dvh - 24rem);
  }
  .table-body {
    max-height: calc(100dvh - 27rem);
  }
}
</style>
