<template>
  <div class="catalog">
    <div class="products-container" v-if="props.products && !error">
      <ProductCard
        v-for="product in props.products"
        :product="product"
        :key="product.id"
      />
    </div>
    <ErrorMessage v-if="error" />
    <div class="paginator-container" v-if="props.total > 1">
      <Paginator
        :page="props.page"
        :total="props.total"
        :loading="props.loading"
        @first="onFirst"
        @prev="onPrev"
        @next="onNext"
        @last="onLast"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductCard, type Product } from "~/src/entities/product";
import { ErrorMessage } from "~/src/shared/ui/ErrorMessage";
import { Paginator } from "~/src/features/paginator";

const props = defineProps<{
  products: Product[] | null;
  error?: any;
  loading: boolean;
  page: number;
  total: number;
  onFirst: () => void;
  onPrev: () => void;
  onNext: () => void;
  onLast: () => void;
}>();
</script>

<style scoped>
.catalog {
  padding: 10rem 1rem 5rem;
  width: 100%;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2.5rem;
  column-gap: 2rem;
  width: 100%;
}

.paginator-container {
  width: 100%;
  margin-top: 4rem;
}

@media screen and (max-width: 96rem) {
  .products-container {
    row-gap: 2rem;
  }
}
@media screen and (max-width: 80rem) {
  .products-container {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 2rem;
    column-gap: 1.5rem;
  }
}

@media screen and (max-width: 64rem) {
  .catalog {
    padding: 8rem 0.5rem 2rem;
  }
  .products-container {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
}
</style>
