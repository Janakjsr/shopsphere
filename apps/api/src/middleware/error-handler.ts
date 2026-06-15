import type { ErrorRequestHandler } from "express";
import { createErrorResponse } from "../utils/api-response.js";

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  console.error(error);

  response.status(500).json(
    createErrorResponse("Internal server error", [
      "An unexpected error occurred."
    ])
  );
};
