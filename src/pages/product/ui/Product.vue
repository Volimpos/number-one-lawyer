<template>
  <div class="product" v-if="product">
    <ProductImages :images="product.images" />
    <ProductInfo
      :title="product.title"
      :description="product.description"
      :price="product.price"
      :highlights="product.highlights"
      :sizes="product.sizes"
    />
    <!-- <Button label="В корзину" class="product__submit-btn" @click="addToCart" /> -->
  </div>
  <!-- <SizeGuide /> -->
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import ProductImages from "./sections/ProductImages.vue";
import ProductInfo from "./sections/ProductInfo.vue";
import type { Product } from "~/src/entities/product/types";
import { slugParseId } from "~/src/entities/product/lib/slug";
import { fetchProductById } from "~/src/entities/product/api/fetchProductById";

const route = useRoute();

// Убеждаем TypeScript, что slug это строка
const slug = Array.isArray(route.params.slug)
  ? (route.params.slug[0] ?? "")
  : (route.params.slug ?? "");

const productId = ref<string>(slugParseId(slug) ?? "");

const { data } = await useAsyncData(
  `product/${productId}`, // Уникальный ключ для кэширования
  async () => await fetchProductById(productId.value)
);

const product = computed<Product | null>(() => data.value?.product);

// const productCartStore = useProductCartStore();

// const addToCart = () => {
//   if (!product.value) {
//     toast.add({ severity: "error", summary: "Товар не найден", life: 3000 });
//     return;
//   }
//   if (!selectedSize.value) {
//     toast.add({ severity: "error", summary: "Размер не выбран", life: 3000 });
//     return;
//   }

//   productCartStore.addProduct(product.value, selectedSize.value);
//   toast.add({
//     severity: "success",
//     summary: product.value.title,
//     detail: `Добавлено в корзину (размер ${selectedSize.value})`,
//     life: 3000,
//   });
// };

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

@media screen and (max-width: 64rem) {
  .product {
    padding: 6rem 0.5rem;
  }
}
</style>
