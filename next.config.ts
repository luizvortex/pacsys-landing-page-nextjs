import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Cache Components (NOVO recurso principal)
  cacheComponents: true,

  // React Compiler para otimização automática
  reactCompiler: false,

  // Turbopack File System Caching (Beta)
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },

  // Otimizações de imagem
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 14400, // 4 horas
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    qualities: [75],
    dangerouslyAllowLocalIP: false,
    maximumRedirects: 3,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Compressão
  compress: true,

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Webpack otimizado (fallback caso precise)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;