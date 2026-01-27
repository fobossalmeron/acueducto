const fs = require("fs-extra");
const path = require("path");
const formatDate = require("./formatDate");

const url = "https://acueducto.studio";

// Rutas estáticas del studio (sitio principal acueducto.studio)
const staticRoutes = [
  {
    es: "/",
    en: "/en",
    priority: 1,
  },
  {
    es: "/nosotros",
    en: "/en/about",
    priority: 0.8,
  },
  {
    es: "/portafolio",
    en: "/en/work",
    priority: 0.9,
  },
  {
    es: "/podcast",
    priority: 0.8,
  },
  {
    es: "/podcast/episodios",
    priority: 0.7,
  },
  {
    es: "/portafolio/wellmee",
    en: "/en/work/wellmee",
    priority: 0.9,
  },
  {
    es: "/portafolio/recupera",
    en: "/en/work/recupera",
    priority: 0.9,
  },
  {
    es: "/portafolio/borgatta",
    en: "/en/work/borgatta",
    priority: 0.9,
  },
  {
    es: "/portafolio/blockstem",
    en: "/en/work/blockstem",
    priority: 0.9,
  },
  {
    es: "/portafolio/rahid",
    en: "/en/work/rahid",
    priority: 0.9,
  },
  {
    es: "/portafolio/ladanzadelasfieras",
    en: "/en/work/ladanzadelasfieras",
    priority: 0.9,
  },
  {
    es: "/blog",
    priority: 0.7,
  },
  {
    es: "/blog/piensa-tu-producto-escalable-desde-el-inicio",
    priority: 0.6,
  },
];

// Episodios del podcast: lee slugs desde apps/podcast/_episodios (base acueducto.studio/podcast vía rewrites)
function getPodcastEpisodeRoutes() {
  const episodesDir = path.resolve(__dirname, "..", "..", "podcast", "_episodios");
  if (!fs.existsSync(episodesDir)) {
    return [];
  }
  const files = fs.readdirSync(episodesDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ es: `/podcast/${f.replace(/\.md$/, "")}`, priority: 0.6 }));
}

async function generateSitemap() {
  try {
    const today = formatDate(new Date());
    const allRoutes = [...staticRoutes, ...getPodcastEpisodeRoutes()];

    const esRoute = (route) =>
      route.es !== undefined
        ? `<url>
        <loc>${url + (route.es.startsWith("/") ? route.es : "/" + route.es)}</loc>
        ${
          route.en !== undefined
            ? `<xhtml:link rel="alternate" hreflang="es" href="${url + route.es}"/>
            <xhtml:link rel="alternate" hreflang="en" href="${url + route.en}"/>
            <xhtml:link rel="alternate" hreflang="x-default" href="${
              url + route.en
            }"/>`
            : `<language>es</language>`
        }
        <priority>${route.priority}</priority>
        <lastmod>${
          route.lastModified ? formatDate(new Date(route.lastModified)) : today
        }</lastmod>
        </url>`
        : "";
    const enRoute = (route) =>
      route.en !== undefined
        ? `<url>
        <loc>${url + route.en}</loc>
        ${
          route.es !== undefined
            ? `<xhtml:link rel="alternate" hreflang="en" href="${url + route.en}"/>
               <xhtml:link rel="alternate" hreflang="es" href="${url + route.es}"/>
               <xhtml:link rel="alternate" hreflang="x-default" href="${
                 url + route.en
               }"/>`
            : `<language>en</language>`
        }
        <priority>${route.priority}</priority>
        <lastmod>${
          route.lastModified ? formatDate(new Date(route.lastModified)) : today
        }</lastmod>
        </url>
      `
        : "";

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"> 
    ${allRoutes.map((route) => esRoute(route) + enRoute(route)).join("")}
   </urlset>`;

    fs.writeFileSync("public/sitemap.xml", sitemapXml);

    console.log("sitemap.xml saved!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();
