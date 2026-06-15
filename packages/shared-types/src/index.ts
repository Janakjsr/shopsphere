export type ApiSuccessResponse<TData> = {
  success: true;
  message: string;
  data: TData;
};

export type ApiErrorResponse = {
  success: false;
  message: string;
  errors: string[];
};

export type ApiResponse<TData> = ApiSuccessResponse<TData> | ApiErrorResponse;

export type AppEnvironment = "local" | "development" | "uat" | "production";

