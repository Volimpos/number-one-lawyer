<template>
  <div class="product" v-if="product">
    <ProductImages :images="product.images" />
    <div class="mt-20">
      <TitleAndPrice :title="product.title" :price="product.price" />
      <h2 class="sr-only">Информация о товаре</h2>
      <div
        class="flex flex-row items-start mt-10 w-full max-lg:flex-col-reverse"
      >
        <DescriptionAndHighlights
          :description="product.description"
          :highlights="Object.values(product.highlights)"
        />
        <div class="product-controls-container">
          <ProductControls :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import ProductImages from "./sections/ProductImages.vue";
import TitleAndPrice from "./sections/TitleAndPrice.vue";
import DescriptionAndHighlights from "./sections/DescriptionAndHighlights.vue";
import type { Product } from "~/src/entities/product/types";
import { parseIdFromSlug } from "~/src/entities/product/lib/slug";
import { fetchProductById } from "~/src/entities/product/api/fetchProductById";
import { ProductControls } from "~/src/widgets/product-controls";
import { getProductFromStore } from "~/src/entities/product/model/getProductFromStore";
const route = useRoute();
const productId = ref<string>(parseIdFromSlug(route.params.slug) ?? "");

const product = ref<Product | null>(null);

product.value = getProductFromStore(productId.value);

if (!product.value) {
  const { data } = await useAsyncData(
    `product/${productId}`, // Уникальный ключ для кэширования
    async () => await fetchProductById(productId.value)
  );

  product.value = data.value?.product;
}

useSeoMeta({
  title: () => product.value?.title,
  ogTitle: () => product.value?.title,
  description: () => product.value?.description,
  ogDescription: () => product.value?.title,
  ogImage: () => product.value?.images[0],
  ogType: "website",
  twitterCard: "summary_large_image",
  ogSiteName: "TAOLE",
});
</script>

<style scoped>
.product {
  width: 100%;
  overflow: hidden;
  padding: 6rem 1rem;
}

.product-controls-container {
  border: 1px solid var(--gray150);
  border-width: 0 0 0 1px;
  padding-bottom: 1rem;
  flex: 1;
  padding-left: 2rem;
}

@media screen and (max-width: 64rem) {
  .product {
    padding: 6rem 0.5rem;
  }
  .product-controls-container {
    padding: 1rem 0;
    width: 100%;
    border: none;
  }
}
</style>
