const baseURL = "https://api.number1lawyer.site";
class ApiError extends Error {
  constructor(message, statusCode, statusText, data) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.data = data;
  }
}
const api = {
  get: async (path, options = {}) => {
    try {
      const response = await $fetch(`${baseURL}/${path}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...options.headers
        },
        params: options.params,
        // Опции для обработки ошибок
        onRequestError({ error }) {
          throw new ApiError(
            `Request error: ${error.message}`,
            void 0,
            void 0,
            error
          );
        },
        onResponseError({ response: response2 }) {
          const errorData = response2._data || {};
          throw new ApiError(
            errorData.message || response2.statusText || "Unknown error",
            response2.status,
            response2.statusText,
            errorData
          );
        }
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
        void 0,
        void 0,
        error
      );
    }
  },
  post: async (path, data, options = {}) => {
    try {
      const isFormData = data instanceof FormData;
      const result = await $fetch(`${baseURL}/${path}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
          ...!isFormData && { "Content-Type": "application/json" },
          ...options.headers
        },
        onRequestError({ error }) {
          throw new ApiError(
            `Request error: ${error.message}`,
            void 0,
            void 0,
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
        }
      });
      return {
        error: false,
        data: result
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
        void 0,
        void 0,
        error
      );
    }
  }
};

export { api as a };
//# sourceMappingURL=useApi-DuJXikC3.mjs.map
