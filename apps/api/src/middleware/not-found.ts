import type { RequestHandler } from "express";
import { createErrorResponse } from "../utils/api-response.js";

export const notFoundHandler: RequestHandler = (request, response) => {
  response.status(404).json(
    createErrorResponse("Route not found", [
      `${request.method} ${request.originalUrl} is not registered.`
    ])
  );
};
