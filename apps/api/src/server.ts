import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { prisma } from "./config/prisma.js";

const app = createApp();

const server = app.listen(env.port, () => {
  console.log(`ShopSphere API running on http://localhost:${env.port}`);
  console.log(`Swagger docs available at http://localhost:${env.port}/api-docs`);
});

const shutdown = async () => {
  console.log("Shutting down ShopSphere API");
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

