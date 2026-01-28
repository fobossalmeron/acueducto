const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    // Sin sharp/libvips en local: unoptimized en dev; en build local usar NEXT_IMAGE_UNOPTIMIZED=1 para que pase
    unoptimized:
      process.env.NODE_ENV === 'development' ||
      process.env.NEXT_IMAGE_UNOPTIMIZED === '1',
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: false,
    },
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/es/about',
        destination: '/en/about',
        locale: false,
        permanent: true,
      },
      {
        source: '/en/nosotros',
        destination: '/en/about',
        locale: false,
        permanent: true,
      },
      {
        source: '/es/contact',
        destination: '/en/contact',
        locale: false,
        permanent: true,
      },
      {
        source: '/en/contacto',
        destination: '/en/contact',
        locale: false,
        permanent: true,
      },
      {
        source: '/es/work',
        destination: '/en/work',
        locale: false,
        permanent: true,
      },
      {
        source: '/en/portafolio',
        destination: '/en/work',
        locale: false,
        permanent: true,
      },
      {
        source: '/es/work/:slug',
        destination: '/en/work/:slug',
        locale: false,
        permanent: true,
      },
      {
        source: '/en/portafolio/:slug',
        destination: '/en/work/:slug',
        locale: false,
        permanent: true,
      },
      {
        source: '/articulos',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/articulos/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/es/privacy',
        destination: '/en/privacy',
        locale: false,
        permanent: true,
      },
      {
        source: '/en/privacidad',
        destination: '/en/privacy',
        locale: false,
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/nosotros',
      },
      {
        source: '/contact',
        destination: '/contacto',
      },
      {
        source: '/work',
        destination: '/portafolio',
      },
      {
        source: '/work/:slug',
        destination: '/portafolio/:slug',
      },
      {
        source: '/privacy',
        destination: '/privacidad',
      },
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js',
      },
    ];
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
  env: {
    BREVO_API: process.env.BREVO_API,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;