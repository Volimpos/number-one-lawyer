<template>
  <div class="h-full w-full">
    <SizeTable
      :measurementArray="measurementArray"
      :sizeValuesArray="sizeValuesArray"
      :selected-size="selectedSize"
      size-measure="Запястье (см)"
      @onSelect="(size: string) => selectSize(size)"
    />
  </div>
</template>

<script setup lang="ts">
import { generateNumberSizes } from "../lib/generateNumberSizes";
import SizeTable from "./SizeTable.vue";
const measurementArray = ref<string[]>(generateNumberSizes(14, 21, 1));
const sizeValuesArray = ref<string[]>(generateNumberSizes(16, 23, 1));
const selectedSize = ref<string>(sizeValuesArray.value[0] ?? "");

const selectSize = (size: string) => {
  selectedSize.value = size;
};
</script>

<style scoped></style>
