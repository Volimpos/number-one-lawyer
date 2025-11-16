<template>
  <div class="catalog-page">
    <h2 class="sr-only">Каталог</h2>
    <Catalog
      :products="products"
      :error="error"
      :loading="loading"
      :page="page"
      :total="total"
      @first="onFirst"
      @prev="onPrev"
      @next="onNext"
      @last="onLast"
    />
  </div>
</template>

<script setup lang="ts">
import { Catalog } from "~/src/features/catalog";
import { useCatalog } from "~/src/features/catalog/model/useCatalog";
import { useProductStore } from "~/src/entities/product/model/store";
import type { ProductsPage } from "~/src/entities/product";

const route = useRoute();
const catalog = useCatalog();

const category = computed(() =>
  route.params.category ? String(route.params.category) : ""
);

const productStore = useProductStore();

await useAsyncData<ProductsPage>("catalog", async () => {
  await productStore.loadCatalogPage({
    category: category.value,
    page: Number(route.query.page) || 1,
  });

  return {
    items: productStore.products,
    page: productStore.page,
    total: productStore.total,
    error: productStore.error,
  };
});

const products = computed(() => productStore.products);
const page = computed(() => productStore.page);
const total = computed(() => productStore.total);
const error = computed(() => productStore.error);
const loading = catalog.loading;

const { onFirst, onPrev, onNext, onLast } = useCatalog();

useSeoMeta({
  title: "Каталог товаров TAOLE",
  ogTitle: "Каталог товаров TAOLE",
  description:
    "Украшения с характером от Хабаровского бренда. TAOLE — это галерея украшений на каждый день и для особых случаев. Откройте для себя коллекции, созданные с душой. Каждое изделие в нашем магазине — это маленькое произведение искусства, которое подчеркнет вашу индивидуальность.",
  ogDescription:
    "Украшения с характером от Хабаровского бренда. TAOLE — это галерея украшений на каждый день и для особых случаев. Откройте для себя коллекции, созданные с душой. Каждое изделие в нашем магазине — это маленькое произведение искусства, которое подчеркнет вашу индивидуальность.",
  ogImage:
    "https://s3.ru1.storage.beget.cloud/a9fd9a74202c-volimpos/taole/taole-logo.jpg",
  twitterCard: "summary_large_image",
});
</script>

<style scoped></style>
