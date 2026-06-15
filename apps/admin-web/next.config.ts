import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@shopsphere/shared-types",
    "@shopsphere/shared-utils",
    "@shopsphere/shared-ui"
  ]
};

export default nextConfig;

