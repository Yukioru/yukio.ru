import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  typedRoutes: true,
  experimental: {
    ppr: 'incremental',
    reactCompiler: true,
    useLightningcss: true,
    viewTransition: true,
    cssChunking: true,
  },
};

export default nextConfig;
