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
    en: {} as Record<string, string>, // inglés -> español
    es: {} as Record<string, string>, // español -> inglés
};

// Poblar los mapeos bidireccionales
Object.entries(ROUTE_PAIRS).forEach(([enRoute, esRoute]) => {
    ROUTE_MAPPINGS.en[enRoute] = esRoute;
    ROUTE_MAPPINGS.es[esRoute] = enRoute;
});

export function useLanguageToggler() {
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
    const changeToLanguage = useCallback((targetLang: string) => {
        if (currentLanguage !== targetLang) {
            // Si el idioma objetivo es diferente al actual, realizar el cambio
            const mappings = ROUTE_MAPPINGS[locale as keyof typeof ROUTE_MAPPINGS];
            const targetPath =
                mappings[currentPath as keyof typeof mappings] || currentPath;

            router.push(targetPath, targetPath, { locale: targetLang });
        }
    }, [router, locale, currentLanguage, currentPath]);

    return {
        currentLanguage,
        changeToLanguage,
        showLangSelector,
    };
} 