<template>
  <fieldset class="select-size" aria-label="Выберите размер">
    <Size
      v-for="size in props.sizes"
      :value="size.value"
      :selected="isSizeSelected(size)"
      :in-stock="size.inStock"
      @onSelect="onSelect(size)"
    />
  </fieldset>
</template>

<script setup lang="ts">
import type { ProductSize } from "~/src/entities/product";
import { Size } from "~/src/shared/ui/size";

const props = defineProps<{ sizes: ProductSize[] }>();
const selectedSize = ref<ProductSize | null>(null);
const isSizeSelected = (size: ProductSize) => {
  return size.value === selectedSize.value?.value;
};

const emit = defineEmits<{
  (e: "select", size: ProductSize): void;
}>();

const onSelect = (size: ProductSize) => {
  selectedSize.value = size;
  emit("select", size);
};
</script>

<style scoped>
.select-size {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
}
</style>
