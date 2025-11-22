<template>
  <div class="h-full w-full border">
    <SizeTable
      :measurementArray="measurementArray"
      :sizeValuesArray="measurementArray"
      :selected-size="selectedSize"
      size-measure="Длина (см)"
      @onSelect="(size: string) => selectSize(size)"
    />
  </div>
</template>

<script setup lang="ts">
import { generateNumberSizes } from "../lib/generateNumberSizes";
import SizeTable from "./SizeTable.vue";
const measurementArray = ref<string[]>(generateNumberSizes(35, 70, 5));
const selectedSize = ref<string>(measurementArray.value[0] ?? "");

const selectSize = (size: string) => {
  selectedSize.value = size;
};
</script>

<style scoped></style>
