import { useProductStore } from "~/src/entities/product/model/store";
import { useRouter } from "vue-router";

const useCatalog = () => {
  const route = useRoute();
  const router = useRouter();
  const productStore = useProductStore();
  const page = computed(() => {
    return Number(route.query.page) || 1;
  });
  const category = computed(() => {
    return route.params.category ? String(route.params.category) : "";
  });

  const navigatePage = async (pageNumber: number) => {
    if (
      pageNumber < 1 ||
      pageNumber > productStore.total ||
      pageNumber === page.value
    ) {
      return;
    }
    await productStore.loadCatalogPage({
      category: category.value,
      page: pageNumber,
    });

    await router.push({
      params: { category: String(category.value) ?? "" },
      query: { ...route.query, page: pageNumber },
    });
  };

  onMounted(() => {
    const unwatch = watch(
      () => route.params.category,
      (newCat, oldCat) => {
        if (newCat === oldCat) return;

        router.push({
          params: { category: newCat },
          query: {},
        });

        productStore.loadCatalogPage({
          category: category.value,
          page: 1,
        });
      }
    );
    onUnmounted(unwatch);
  });

  const onFirst = () => navigatePage(1);
  const onNext = () => navigatePage(page.value + 1);
  const onPrev = () => navigatePage(page.value - 1);
  const onLast = () => navigatePage(productStore.total);

  return {
    products: computed(() => productStore.products),
    error: computed(() => productStore.error),
    loading: computed(() => productStore.loading),
    page: computed(() => productStore.page),
    total: computed(() => productStore.total),
    onFirst,
    onPrev,
    onNext,
    onLast,
  };
};

export { useCatalog };
