import dotenv from "dotenv";

dotenv.config();

const toNumber = (value: string | undefined, fallback: number): number => {
  if (!value) {
    return fallback;
  }

  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: toNumber(process.env.PORT, 4000),
  apiBasePath: process.env.API_BASE_PATH ?? "/api/v1",
  databaseUrl: process.env.DATABASE_URL ?? "",
  swaggerTitle: process.env.SWAGGER_TITLE ?? "ShopSphere API",
  swaggerVersion: process.env.SWAGGER_VERSION ?? "1.0.0",
  swaggerServerUrl: process.env.SWAGGER_SERVER_URL ?? "http://localhost:4000"
};

