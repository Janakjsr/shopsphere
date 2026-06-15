import type { ApiErrorResponse, ApiSuccessResponse } from "@shopsphere/shared-types";

export const createSuccessResponse = <TData>(
  message: string,
  data: TData
): ApiSuccessResponse<TData> => ({
  success: true,
  message,
  data
});

export const createErrorResponse = (
  message: string,
  errors: string[] = []
): ApiErrorResponse => ({
  success: false,
  message,
  errors
});

