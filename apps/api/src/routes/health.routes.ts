import { Router } from "express";
import { createSuccessResponse } from "../utils/api-response.js";

export const healthRouter = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Check API health
 *     tags:
 *       - System
 *     responses:
 *       200:
 *         description: API is running
 */
healthRouter.get("/health", (_request, response) => {
  response.json(
    createSuccessResponse("API is healthy", {
      service: "shopsphere-api",
      status: "ok",
      timestamp: new Date().toISOString()
    })
  );
});
