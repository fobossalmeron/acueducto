import Head from 'next/head';
import { useRouter } from 'next/router';
import LD from 'components/layout/Head/returnLd';
import { useMemo } from 'react';

// Palabras clave predeterminadas para SEO
const es_default_keywords =
  'diseño, estudio, studio, acueducto, cdmx, innovación, diseño estratégico, diseño de experiencia, diseño de producto, diseño de servicio, diseño de estrategia, tecnología';
const en_default_keywords =
  'design, studio, acueducto, cdmx, innovation, strategic design, experience design, product design, brand design, design strategy, technology';

// Definición de tipos para las props del componente
export type HeadProps = {
  title: string;
  description: string;
  headerTitle: string;
  keywords?: string;
  en_canonical?: string;
  es_canonical?: string;
  image?: { fileName: string; alt: string };
  noIndex?: boolean;
};

const NewHead = ({
  title,
  description,
  headerTitle,
  keywords,
  en_canonical,
  es_canonical,
  image,
  noIndex,
}: HeadProps) => {
  const router = useRouter();
  const { locale } = router;

  // Determina si el idioma actual es español
  const isSpanish = locale === 'es';

  // Memoriza la imagen OG para evitar recálculos innecesarios
  const ogImage = useMemo(() => {
    if (!image)
      return {
        url: 'https://acueducto.studio/assets/img/og/og_main.gif',
        alt: 'Acueducto Studio',
      };

    return {
      url: image.fileName.includes('images.prismic.io')
        ? image.fileName
        : `https://acueducto.studio/assets/img/og/${image.fileName}`,
      alt: image.alt,
    };
  }, [image]);

  return (
    <Head>
      {/* Metadatos básicos */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no,viewport-fit=cover, user-scalable=no"
      />
      <title>{title}</title>

      {/* Metadatos para Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@acueductostudio" />
      <meta name="twitter:site" content="@acueductostudio" />

      {/* Metadatos para SEO y Open Graph */}
      <meta name="description" content={description} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta name="og:title" property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Acueducto" />

      {/* Metadato para no indexar si es necesario */}
      {noIndex && <meta name="robots" content="noindex, follow" />}

      {/* Metadatos específicos del idioma */}
      {isSpanish ? (
        <>
          <meta property="og:locale" content="es_MX" />
          {en_canonical && (
            <meta property="og:locale:alternate" content="en_US" />
          )}
          <meta property="og:url" content={es_canonical} />
          <meta name="keywords" content={keywords || es_default_keywords} />
        </>
      ) : (
        <>
          <meta property="og:locale" content="en_US" />
          {es_canonical && (
            <meta property="og:locale:alternate" content="es_MX" />
          )}
          <meta property="og:url" content={en_canonical} />
          <meta name="keywords" content={keywords || en_default_keywords} />
        </>
      )}

      {/* Metadatos para la imagen OG */}
      <meta property="og:image" content={ogImage.url} />
      <meta property="og:image:alt" content={ogImage.alt} />

      {/* Enlaces canónicos y alternativos */}
      {isSpanish ? (
        <>
          <link rel="canonical" href={es_canonical} />
          {en_canonical && (
            <>
              <link rel="alternate" hrefLang="en" href={en_canonical} />
              <link rel="alternate" hrefLang="es" href={es_canonical} />
              <link rel="alternate" href={en_canonical} hrefLang="x-default" />
            </>
          )}
        </>
      ) : (
        <>
          <link rel="canonical" href={en_canonical} />
          {es_canonical && (
            <>
              <link rel="alternate" hrefLang="es" href={es_canonical} />
              <link rel="alternate" hrefLang="en" href={en_canonical} />
              <link rel="alternate" href={en_canonical} hrefLang="x-default" />
            </>
          )}
        </>
      )}

      {/* Script para datos estructurados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: LD(
            locale,
            router.asPath,
            description,
            title,
            headerTitle,
            image,
          ),
        }}
      />

      {/* Preconexiones para mejorar el rendimiento */}
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Head>
  );
};

export default NewHead;
