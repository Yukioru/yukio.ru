import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/lib/i18n/request.ts',
});

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

export default withNextIntl(nextConfig);
