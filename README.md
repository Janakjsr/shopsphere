# ShopSphere

ShopSphere is a full-stack e-commerce learning platform. This repository is set up as a Phase 1 monorepo foundation only.

Business modules are intentionally not implemented yet. Authentication, products, cart, checkout, orders, CMS, and admin workflows will be added in later phases.

## Architecture

```text
apps/
  customer-web/   Next.js customer storefront shell
  admin-web/      Next.js admin portal shell
  api/            Express TypeScript API shell
packages/
  shared-types/   Shared TypeScript contracts
  shared-utils/   Shared utilities
  shared-ui/      Shared React UI primitives
infrastructure/
  nginx/          Local reverse proxy config
docs/             Project documentation workspace
```

## Technology Stack

- Next.js, React, TypeScript
- Express.js, TypeScript
- PostgreSQL
- Prisma
- Swagger/OpenAPI
- Docker and Docker Compose
- Nginx
- npm workspaces

## Prerequisites

- Node.js 20+
- npm 10+
- Docker Desktop

## Environment Setup

Copy the root environment template:

```bash
cp .env.example .env
```

For local frontend development, copy app-specific examples if needed:

```bash
cp apps/customer-web/.env.local.example apps/customer-web/.env.local
cp apps/admin-web/.env.local.example apps/admin-web/.env.local
cp apps/api/.env.example apps/api/.env
```

## Install Dependencies

```bash
npm install
```

## Run Local Development

Start PostgreSQL:

```bash
docker compose up postgres
```

Generate the Prisma client:

```bash
npm run prisma:generate
```

Start all applications:

```bash
npm run dev
```

Local URLs:

- Customer web: http://localhost:3000
- Admin web: http://localhost:3001
- API health: http://localhost:4000/health
- Versioned API health: http://localhost:4000/api/v1/health
- Swagger docs: http://localhost:4000/api-docs

## Docker Compose

Run the complete local stack:

```bash
docker compose up --build
```

Docker URLs:

- Nginx entrypoint: http://localhost:8080
- Customer web direct: http://localhost:3000
- Admin web direct: http://localhost:3001
- API direct: http://localhost:4000
- PostgreSQL: localhost:5432

Stop the stack:

```bash
docker compose down
```

## Prisma

The Prisma schema is located at:

```text
apps/api/prisma/schema.prisma
```

Phase 1 includes only the Prisma datasource and client generator. Business models will be added in the database phase.

Generate Prisma client:

```bash
npm run prisma:generate
```

Create migrations after models are added:

```bash
npm run prisma:migrate
```

## Validation Commands

```bash
npm run typecheck
npm run build
```

## Phase 1 Scope

Included:

- Monorepo foundation
- Customer web shell
- Admin web shell
- API shell
- Shared packages
- PostgreSQL local setup
- Prisma setup
- Docker and Docker Compose
- Swagger setup
- Environment templates

Not included:

- Authentication
- Product catalog
- Cart
- Checkout
- Orders
- CMS
- Admin business modules
