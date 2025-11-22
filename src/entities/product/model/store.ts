import type { Product } from "~/src/entities/product";
import { fetchProducts } from "../api/fetchProducts";
import type { SortValueType } from "~/src/shared/types/filter";

export const useProductStore = defineStore("productStore", () => {
  const products = ref<Product[]>([]);

  const total = ref<number>(1);
  const page = ref<number>(1);
  const pageSize = ref<number>(60);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);

  const loadCatalogPage = async (
    params: Partial<{
      page: number;
      category: string;
      sort: SortValueType;
      title: string;
    }>
  ) => {
    loading.value = true;
    const response = await fetchProducts(params);
    if (response && response.result) {
      products.value = response.productsData.data as Product[];
      page.value = response.productsData.current_page as number;
      total.value = response.productsData.last_page as number;
    }
    loading.value = false;
  };

  return { products, total, page, pageSize, error, loading, loadCatalogPage };
});
