const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {

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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
    ],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es', 
    localeDetection: false,
  },
};

module.exports = nextConfig;