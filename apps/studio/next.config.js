const nextConfig = {
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
};

module.exports = nextConfig;