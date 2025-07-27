import { useState, useEffect } from 'react';
export const useLocalizedContent = ({ locale, fileName, initialContent, onTitleChange, }) => {
    const [content, setContent] = useState(initialContent || {});
    // Función para determinar si estamos en una página que necesita logging detallado
    const shouldShowDetailedLogs = () => {
        if (typeof window === 'undefined') {
            // En el servidor, asumimos que no necesitamos logs detallados
            return false;
        }
        const path = window.location.pathname;
        return (path.includes('/portafolio/') ||
            path.includes('/work/') ||
            path.includes('/recupera'));
    };
    // Función para error log (siempre mostramos errores)
    const errorLog = (message, error) => {
        if (error) {
            console.error(message, error);
        }
        else {
            console.error(message);
        }
    };
    useEffect(() => {
        const loadLocalizedContent = async () => {
            if (locale === initialContent?.locale) {
                return;
            }
            try {
                const newContent = await import(`public/locales/${locale}/${fileName}.json`);
                // Normalizar el contenido para garantizar consistencia
                const normalizedContent = {
                    ...initialContent, // Mantener estructura base
                    ...(newContent.default || newContent), // Manejar posible exportación default
                };
                setContent(normalizedContent);
                if (onTitleChange) {
                    onTitleChange(normalizedContent.head?.headerTitle
                        ? normalizedContent.head.headerTitle
                        : '');
                }
            }
            catch (error) {
                // Siempre mostramos errores
                errorLog('[useLocalizedContent] Error loading content:', error);
                errorLog('[useLocalizedContent] DEBUG - Error completo:', {
                    mensaje: error.message,
                    stack: error.stack,
                    fileName,
                    locale,
                });
                setContent(initialContent || {});
            }
        };
        loadLocalizedContent();
    }, [locale, fileName, onTitleChange, initialContent]);
    return content;
};
