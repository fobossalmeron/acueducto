import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Head from 'next/head';
import { useRouter } from 'next/router';
import LD from './returnLd';
import { useMemo } from 'react';
// Palabras clave predeterminadas para SEO
const es_default_keywords = 'diseño, estudio, studio, acueducto, cdmx, innovación, diseño estratégico, diseño de experiencia, diseño de producto, diseño de servicio, diseño de estrategia, tecnología';
const en_default_keywords = 'design, studio, acueducto, cdmx, innovation, strategic design, experience design, product design, brand design, design strategy, technology';
const NewHead = ({ title, description, headerTitle, keywords, en_canonical, es_canonical, image, noIndex, }) => {
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
    return (_jsxs(Head, { children: [_jsx("meta", { charSet: "utf-8" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no,viewport-fit=cover, user-scalable=no" }), _jsx("title", { children: title }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:creator", content: "@acueductostudio" }), _jsx("meta", { name: "twitter:site", content: "@acueductostudio" }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { name: "og:description", property: "og:description", content: description }), _jsx("meta", { name: "og:title", property: "og:title", content: title }), _jsx("meta", { property: "og:type", content: "website" }), _jsx("meta", { property: "og:site_name", content: "Acueducto" }), noIndex && _jsx("meta", { name: "robots", content: "noindex, follow" }), isSpanish ? (_jsxs(_Fragment, { children: [_jsx("meta", { property: "og:locale", content: "es_MX" }), en_canonical && (_jsx("meta", { property: "og:locale:alternate", content: "en_US" })), _jsx("meta", { property: "og:url", content: es_canonical }), _jsx("meta", { name: "keywords", content: keywords || es_default_keywords })] })) : (_jsxs(_Fragment, { children: [_jsx("meta", { property: "og:locale", content: "en_US" }), es_canonical && (_jsx("meta", { property: "og:locale:alternate", content: "es_MX" })), _jsx("meta", { property: "og:url", content: en_canonical }), _jsx("meta", { name: "keywords", content: keywords || en_default_keywords })] })), _jsx("meta", { property: "og:image", content: ogImage.url }), _jsx("meta", { property: "og:image:alt", content: ogImage.alt }), isSpanish ? (_jsxs(_Fragment, { children: [_jsx("link", { rel: "canonical", href: es_canonical }), en_canonical && (_jsxs(_Fragment, { children: [_jsx("link", { rel: "alternate", hrefLang: "en", href: en_canonical }), _jsx("link", { rel: "alternate", hrefLang: "es", href: es_canonical }), _jsx("link", { rel: "alternate", href: en_canonical, hrefLang: "x-default" })] }))] })) : (_jsxs(_Fragment, { children: [_jsx("link", { rel: "canonical", href: en_canonical }), es_canonical && (_jsxs(_Fragment, { children: [_jsx("link", { rel: "alternate", hrefLang: "es", href: es_canonical }), _jsx("link", { rel: "alternate", hrefLang: "en", href: en_canonical }), _jsx("link", { rel: "alternate", href: en_canonical, hrefLang: "x-default" })] }))] })), _jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
                    __html: LD(locale, router.asPath, description, title, headerTitle, image),
                } }), _jsx("link", { rel: "preconnect", href: "https://connect.facebook.net" }), _jsx("link", { rel: "preconnect", href: "https://www.googletagmanager.com" })] }));
};
export default NewHead;
