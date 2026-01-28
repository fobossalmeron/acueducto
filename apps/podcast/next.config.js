const nextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV !== 'development') return [];
    return [
      { source: '/podcast', destination: '/' },
      { source: '/podcast/:path*', destination: '/:path*' },
    ];
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: false,
    },
  },
  webpack: (config) => {
    // Forzar una sola instancia de styled-components
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-components': require.resolve('styled-components'),
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    });
    return config;
  },
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
    ],
  },
  reactStrictMode: true,
  // Suprimir warnings de hidratación temporalmente
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;