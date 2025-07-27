import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
// Un solo mapeo entre rutas en inglés y español
const ROUTE_PAIRS = {
    // Secciones principales
    '/work': '/portafolio',
    '/about': '/nosotros',
    '/contact': '/contacto',
    '/': '/',
    // Proyectos
    '/work/wellmee': '/portafolio/wellmee',
    '/work/recupera': '/portafolio/recupera',
    '/work/borgatta': '/portafolio/borgatta',
    '/work/blockstem': '/portafolio/blockstem',
    '/work/rahid': '/portafolio/rahid',
    '/work/ladanzadelasfieras': '/portafolio/ladanzadelasfieras',
    '/work/salvajenada': '/portafolio/salvajenada',
    // Otras rutas
    '/cookies': '/cookies',
    '/privacy': '/privacidad',
};
// Generar automáticamente los mapeos en ambas direcciones
const ROUTE_MAPPINGS = {
    en: {}, // inglés -> español
    es: {}, // español -> inglés
};
// Poblar los mapeos bidireccionales
Object.entries(ROUTE_PAIRS).forEach(([enRoute, esRoute]) => {
    ROUTE_MAPPINGS.en[enRoute] = esRoute;
    ROUTE_MAPPINGS.es[esRoute] = enRoute;
});
export function useLanguageToggler(onLanguageChangeStart) {
    const router = useRouter();
    const { locale } = router;
    const currentPath = router.asPath;
    const currentLanguage = locale;
    // Determinar si la ruta actual está en las rutas mapeadas
    const showLangSelector = useMemo(() => {
        // Normalizar la ruta actual (eliminar posibles parámetros de consulta)
        const normalizedPath = currentPath.split('?')[0];
        // Comprobar si esta ruta existe en nuestros mapeos
        const allRoutes = [
            ...Object.keys(ROUTE_PAIRS),
            ...Object.values(ROUTE_PAIRS)
        ];
        return allRoutes.includes(normalizedPath);
    }, [currentPath]);
    // Memoizamos la función para evitar recreaciones en cada renderización
    const changeToLanguage = useCallback((targetLang) => {
        if (currentLanguage !== targetLang) {
            if (onLanguageChangeStart)
                onLanguageChangeStart();
            // Agregamos un retraso de 300ms antes de cambiar el idioma
            setTimeout(() => {
                const mappings = ROUTE_MAPPINGS[locale];
                const targetPath = mappings[currentPath] || currentPath;
                router.push(targetPath, targetPath, { locale: targetLang, scroll: false });
            }, 300);
        }
    }, [router, locale, currentLanguage, currentPath, onLanguageChangeStart]);
    return {
        currentLanguage,
        changeToLanguage,
        showLangSelector,
    };
}
