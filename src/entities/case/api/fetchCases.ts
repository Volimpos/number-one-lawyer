import type { ApiResponse } from "~/src/shared/api/interfaces";
import api from "~/src/shared/api/useApi"

const fetchCases = async (): Promise<ApiResponse> => {
    try {
        const response = await api.get('cases');
        console.log('загрузка кейсов: ', response)
        return {
            result: true,
            error: null,
            data: response,
          };
    } catch (error: any) {
        return {
            result: false,
            error: error.message ?? "Ошибка загрузки",
            data: null
        }
    }
}

export { fetchCases }