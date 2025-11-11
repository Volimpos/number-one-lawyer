<template>
  <div class="section">
    <h2 class="h2">Лидеры продаж 2025</h2>

    <div class="example-products">
      <ProductCard v-for="product in props.products" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductCard } from "~/src/entities/product/ui";
import type { Product } from "~/src/entities/product";
interface Props {
  products: Product[];
}

const props = defineProps<Props>();
</script>

<style scoped>
.section {
  background-color: var(--gray100);
  width: 100%;
  padding: 12rem 1rem;
  position: relative;
  color: var(--contrast);
}

.h2 {
  font-weight: 600;
  font-size: 2.25rem;
  color: var(--contrast);
}

.example-products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding-top: 100px;
  justify-content: stretch;
}

@media screen and (max-width: 64rem) {
  .section {
    padding-inline: 0.5rem;
  }
  .h2 {
    text-align: center;
    font-size: 2rem;
  }
  .example-products {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    row-gap: 2rem;
    column-gap: 1rem;
  }

  .product-card__description__name-and-category__category,
  .product-card__description__name-and-category__price,
  .product-card__name {
    font-size: 0.875rem;
  }
}
</style>
