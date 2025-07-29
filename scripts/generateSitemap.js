const fs = require("fs-extra");
const formatDate = require("./formatDate");

const url = "https://acueducto.studio";

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
  // Episodios del podcast que se quedan después del análisis de SEO
  {
    es: "/podcast/un-caso-de-exito-construyendo-una-marca-personal",
    priority: 0.6,
  },
  {
    es: "/podcast/un-capitulo-que-todo-ceo-debe-escuchar",
    priority: 0.6,
  },
  {
    es: "/podcast/tus-operaciones-definen-tu-tecnologia-no-al-reves",
    priority: 0.6,
  },
  {
    es: "/podcast/tu-startup-tiene-que-ser-rentable",
    priority: 0.6,
  },
  {
    es: "/podcast/transforma-digitalmente-tu-negocio-a-escala",
    priority: 0.6,
  },
  {
    es: "/podcast/no-te-enamores-de-tu-producto",
    priority: 0.6,
  },
  {
    es: "/podcast/lecciones-de-un-emprendedor-con-diez-anos-en-el-ecosistema",
    priority: 0.6,
  },
  {
    es: "/podcast/lecciones-de-un-emprendedor-con-diez-anos-en-el-ecosistema",
    priority: 0.6,
  },
  {
    es: "/podcast/la-ciencia-y-los-datos-detras-del-growth",
    priority: 0.6,
  },
  {
    es: "/podcast/el-vp-of-technology-de-mercado-libre-te-ensena-a-validar-ideas",
    priority: 0.6,
  },
  {
    es: "/podcast/el-fondo-de-inversion-detras-de-clip-el-tercer-unicornio-mexicano",
    priority: 0.6,
  },
  {
    es: "/podcast/el-coo-de-una-fintech-nos-habla-de-organizacion-estrategica-creditos-y-confianza",
    priority: 0.6,
  },
  {
    es: "/podcast/de-mercado-libre-a-la-mesa-de-inversion-con-retornos-inimaginables",
    priority: 0.6,
  },
  {
    es: "/podcast/como-y-cuando-invertir-en-ciberseguridad",
    priority: 0.6,
  },
  {
    es: "/podcast/como-y-cuando-invertir-en-ciberseguridad",
    priority: 0.6,
  },
  {
    es: "podcast/como-servir-a-miles-de-empresas-con-open-banking",
    priority: 0.6,
  },
  {
    es: "/podcast/como-se-disenan-las-apps-mas-exitosas",
    priority: 0.6,
  },
  {
    es: "/podcast/como-luce-el-departamento-de-people-de-una-empresa-con-45mil-empleados",
    priority: 0.6,
  },
  {
    es: "/podcast/como-evoluciono-una-fintech-de-lo-tradicional-al-cripto",
    priority: 0.6,
  },
  {
    es: "/podcast/como-es-ser-un-inversionista-angel-en-latinoamerica",
    priority: 0.6,
  },
  {
    es: "/podcast/como-crece-un-ecommerce-b2b-en-latinoamerica",
    priority: 0.6,
  },
  {
    es: "/podcast/como-convertir-un-problema-propio-en-un-negocio-escalable",
    priority: 0.6,
  },
  {
    es: "/podcast/asi-opera-uno-de-los-ecommerce-mas-grandes-de-mexico",
    priority: 0.6,
  },
  //Episodios de Prismic rescatables
  {
    es: "/podcast/no-vivas-de-tus-usuarios-construye-tu-futuro-junto-con-ellos",
    priority: 0.6,
  },
  {
    es: "/podcast/como-se-ve-la-educacion-online",
    priority: 0.6,
  },
  {
    es: "/podcast/como-captar-3m-de-usuarios",
    priority: 0.6,
  },
  //Artículos del blog rescatables
  {
    es: "/blog/piensa-tu-producto-escalable-desde-el-inicio",
    priority: 0.6,
  },
];

//TODO: TODOS los episodios del podcast se publican

async function generateSitemap() {
  try {
    const esRoute = (route) =>
      route.es !== undefined
        ? `<url>
        <loc>${url + route.es}</loc>
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
    // SITEMAP.XML
    const today = formatDate(new Date());
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"> 
    ${staticRoutes.map((route) => esRoute(route) + enRoute(route)).join("")}
   </urlset>`;

    fs.writeFileSync("public/sitemap.xml", sitemapXml);

    console.log("sitemap.xml saved!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();
