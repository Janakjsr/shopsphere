import swaggerJSDoc from "swagger-jsdoc";
import { env } from "../config/env.js";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.3",
    info: {
      title: env.swaggerTitle,
      version: env.swaggerVersion,
      description: "ShopSphere Phase 1 API foundation documentation."
    },
    servers: [
      {
        url: env.swaggerServerUrl,
        description: env.nodeEnv
      }
    ]
  },
  apis: ["src/routes/*.ts", "dist/routes/*.js"]
});

