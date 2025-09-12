import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import svg from '@neodx/svg/webpack';

const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/lib/i18n/request.ts',
});

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    ppr: 'incremental',
    reactCompiler: true,
    cssChunking: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        svg({
          group: true,
          optimize: true,
          cleanup: 'auto',
          inputRoot: './src/assets/svgs',
          output: './public/sprites',
          fileName: '{name}.{hash:8}.svg',
          metadata: 'src/sprite.gen.ts',
          resetColors: {
            exclude: [/^flags/, /^logos/, /-colored\.svg$/],
            replaceUnknown: 'currentColor'
          }
        }),
      );
    }

    return config;
  }
};

export default withNextIntl(nextConfig);
