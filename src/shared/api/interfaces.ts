export interface Api {
  get: (path: string, params?: RequestOptions) => Promise<any>;
  post: (path: string, data: object) => Promise<any>;
}

export interface RequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, any>;
}

// Интерфейс для стандартизированного ответа с ошибкой
export interface ApiError {
  message: string;
  statusCode?: number;
  statusText?: string;
  data?: any;
}

export interface ApiResponse {
  result: boolean;
  error: string | null;
  data?: Record<string, any> | null;
}
