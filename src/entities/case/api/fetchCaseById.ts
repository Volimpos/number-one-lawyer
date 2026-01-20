import type { ApiResponse } from "~/src/shared/api/interfaces";
import api from "~/src/shared/api/useApi";

const fetchCaseById = async (id: string): Promise<ApiResponse> => {
  const url = `case/${id}`;
  try {
    const response = await api.get(url);
    return {
      result: true,
      error: null,
      data: response,
    };
  } catch (error: any) {
    return {
      result: false,
      error: error.message ?? "Ошибка загрузки",
      data: null,
    };
  }
};

export { fetchCaseById };
