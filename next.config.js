// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  async redirects() {
    return [
      {
        source: "/es/about",
        destination: "/en/about",
        locale: false,
        permanent: true,
      },
      {
        source: "/en/nosotros",
        destination: "/en/about",
        locale: false,
        permanent: true,
      },
      {
        source: "/es/contact",
        destination: "/en/contact",
        locale: false,
        permanent: true,
      },
      {
        source: "/en/contacto",
        destination: "/en/contact",
        locale: false,
        permanent: true,
      },
      {
        source: "/es/work",
        destination: "/en/work",
        locale: false,
        permanent: true,
      },
      {
        source: "/en/portafolio",
        destination: "/en/work",
        locale: false,
        permanent: true,
      },
      {
        source: "/es/work/:slug",
        destination: "/en/work/:slug",
        locale: false,
        permanent: true,
      },
      {
        source: "/en/portafolio/:slug",
        destination: "/en/work/:slug",
        locale: false,
        permanent: true,
      },
      {
        source: "/pitch",
        destination: "/nosotros",
        permanent: false,
      },
      {
        source: "/consultoria",
        destination: "/consultoria-digital",
        permanent: true,
      },
      {
        source: "/articulos",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/articulos/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/es/privacy",
        destination: "/en/privacy",
        locale: false,
        permanent: true,
      },
      {
        source: "/en/privacidad",
        destination: "/en/privacy",
        locale: false,
        permanent: true,
      },
      {
        source: "/podcast/cual-es-el-trabajo-de-un-director-de-operaciones-en-una-startup",
        destination: "/podcast/cual-es-el-trabajo-de-una-directora-de-operaciones-en-una-startup",
        permanent: true,
      },
      {
        source: "/podcast/como-captar-30m-de-usuarios-en-menos-de-un-ano",
        destination: "/podcast/como-captar-3m-de-usuarios",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/nosotros",
      },
      {
        source: "/contact",
        destination: "/contacto",
      },
      {
        source: "/work",
        destination: "/portafolio",
      },
      {
        source: "/work/:slug",
        destination: "/portafolio/:slug",
      },
      {
        source: "/privacy",
        destination: "/privacidad",
      },
      {
        source: "/service-worker.js",
        destination: "/_next/static/service-worker.js",
      },
    ];
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false;
    
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    });
    return config;
  },
  //env config
  env: {
    BREVO_API: process.env.BREVO_API,
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    localeDetection: false,
  },
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
