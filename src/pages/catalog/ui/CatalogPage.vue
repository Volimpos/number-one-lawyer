<template>
  <div class="catalog-page">
    <h2 class="sr-only">Каталог</h2>

    <Catalog
      :products="products"
      :error="error"
      :loading="loading"
      :page="page"
      :total="total"
      @first="handleFirst"
      @prev="handlePrev"
      @next="handleNext"
      @last="handleLast"
      @onSort="(value) => onSort(value)"
    />
  </div>
</template>

<script setup lang="ts">
import { Catalog } from "~/src/features/catalog";
import { useCatalog } from "~/src/features/catalog/model/useCatalog";
import { useProductStore } from "~/src/entities/product/model/store";
import { sortBy } from "../lib/sortBy";

const route = useRoute();
const catalog = useCatalog();
const router = useRouter();
const category = computed(() =>
  route.params.category ? String(route.params.category) : ""
);
const activeSort = ref<string>("");

const productStore = useProductStore();

await useAsyncData("catalog", async () => {
  await productStore.loadCatalogPage({
    category: category.value,
    page: Number(route.query.page) || 1,
  });
  router.push({
    params: { category: category.value },
    query: {},
  });
  return true;
});

const onSort = async (value: any) => {
  // activeSort.value = sortBy(value);
  await productStore.loadCatalogPage({
    category: category.value,
    page: 1,
    sort: sortBy(value),
  });
  router.push({
    params: { category: category.value },
    query: { sort: sortBy(value) },
  });
};

const products = computed(() => productStore.products);
const page = computed(() => productStore.page);
const total = computed(() => productStore.total);
const error = computed(() => productStore.error);
const loading = catalog.loading;

const { onFirst, onPrev, onNext, onLast } = useCatalog();

const scrollToTop = () => {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleFirst = () => {
  onFirst();
  scrollToTop();
};

const handlePrev = () => {
  onPrev();
  scrollToTop();
};

const handleNext = () => {
  onNext();
  scrollToTop();
};

const handleLast = () => {
  onLast();
  scrollToTop();
};

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
