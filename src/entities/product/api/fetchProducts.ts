import api from "~/src/shared/api/useApi";

interface FetchProductsParams {
  page?: number;
  per_page?: number;
  search?: string;
  category?: string;
  sort?: "priceUp" | "priceDown" | "dateUp" | "dateDown";
  min_price?: number;
  max_price?: number;
}

const fetchProducts = async (params: FetchProductsParams = {}) => {
  const url = params.category ? `catalog/${params.category}` : "catalog";

  try {
    const data = await api.get(url, { params });
    return {
      result: true,
      error: null,
      productsData: data,
    };
  } catch (error: any) {
    return {
      result: false,
      error: error.message ?? "Ошибка загрузки",
      productsData: null,
    };
  }
};

export { fetchProducts };
