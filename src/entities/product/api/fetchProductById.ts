import api from "~/src/shared/api/useApi";

const fetchProductById = async (id: string) => {
  const url = `product/${id}`;
  try {
    const response = await api.get(url);
    return {
      result: true,
      error: null,
      product: response,
    };
  } catch (error: any) {
    return {
      result: false,
      error: error.message ?? "Ошибка загрузки",
      product: null,
    };
  }
};

export { fetchProductById };
