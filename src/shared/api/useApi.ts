import type { Api } from "./interfaces";
import type { RequestOptions } from "./interfaces";

// const baseURL = "http://127.0.0.1:8000";
const baseURL = "https://api.number1lawyer.site";

// Кастомный класс ошибки для API
class ApiError extends Error {
  statusCode?: number;
  statusText?: string;
  data?: any;

  constructor(
    message: string,
    statusCode?: number,
    statusText?: string,
    data?: any
  ) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.data = data;
  }
}

const api: Api = {
  get: async (path: string, options: RequestOptions = {}) => {
    try {
      const response = await $fetch(`${baseURL}/${path}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...options.headers,
        },
        params: options.params,
        // Опции для обработки ошибок
        onRequestError({ error }) {
          throw new ApiError(
            `Request error: ${error.message}`,
            undefined,
            undefined,
            error
          );
        },
        onResponseError({ response }) {
          const errorData = response._data || {};
          throw new ApiError(
            errorData.message || response.statusText || "Unknown error",
            response.status,
            response.statusText,
            errorData
          );
        },
      });
      return response;
    } catch (error) {
      if (error instanceof ApiError) {
        console.error(
          `GET Error (${error.statusCode}):`,
          error.message,
          error.data
        );
        throw error;
      }
      console.error("GET Unexpected Error:", error);
      throw new ApiError(
        "Unexpected network error",
        undefined,
        undefined,
        error
      );
    }
  },

  post: async (path: string, data: any, options: RequestOptions = {}) => {
    try {
      const isFormData = data instanceof FormData;

      const result = await $fetch(`${baseURL}/${path}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
          ...(!isFormData && { "Content-Type": "application/json" }),
          ...options.headers,
        },
        onRequestError({ error }) {
          throw new ApiError(
            `Request error: ${error.message}`,
            undefined,
            undefined,
            error
          );
        },
        onResponseError({ response }) {
          const errorData = response._data || {};
          throw new ApiError(
            errorData.message || response.statusText || "Unknown error",
            response.status,
            response.statusText,
            errorData
          );
        },
      });
      return {
        error: false,
        data: result,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        console.error(
          `POST Error (${error.statusCode}):`,
          error.message,
          error.data
        );
        throw error;
      }
      console.error("POST Unexpected Error:", error);
      throw new ApiError(
        "Unexpected network error",
        undefined,
        undefined,
        error
      );
    }
  },
};

export default api;
