<template>
  <div>
    <div class="flex flex-row items-center justify-between w-full">
      <span class="font-medium text-sm">Размер</span>
      <span class="font-medium text-sm text-gray-500">Гайд по размерам</span>
    </div>
    <div class="mt-6">
      <SelectSize
        :sizes="product.sizes"
        @select="(size: ProductSize) => onSizeSelect(size)"
      />
    </div>
    <div class="mt-4">
      <AddToCartButton :product="props.product" :size="selectedSize" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product, ProductSize } from "~/src/entities/product";
import { SelectSize } from "~/src/features/select-size";
import { AddToCartButton } from "~/src/features/cart";
const props = defineProps<{
  product: Product;
}>();

const selectedSize = ref<ProductSize | null>(null);
const onSizeSelect = (size: ProductSize) => {
  selectedSize.value = size;
};
</script>

<style scoped></style>
