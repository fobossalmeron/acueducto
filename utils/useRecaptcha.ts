import { useState, useEffect, useCallback } from 'react';

interface UseRecaptchaReturn {
    recaptchaLoaded: boolean;
    recaptchaError: boolean;
    getToken: (action: string) => Promise<string | null>;
}

export const useRecaptcha = (enabled: boolean = true): UseRecaptchaReturn => {
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
    const [recaptchaError, setRecaptchaError] = useState(false);

    // Cargar script de reCAPTCHA
    useEffect(() => {
        if (!enabled) {
            return;
        }

        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
        if (!siteKey) {
            console.warn('NEXT_PUBLIC_RECAPTCHA_SITE_KEY no está configurada');
            return;
        }

        // Verificar si ya está cargado
        if (typeof window !== 'undefined' && window.grecaptcha) {
            setRecaptchaLoaded(true);
            return;
        }

        // Verificar si el script ya existe en el DOM para evitar duplicados
        if (typeof window !== 'undefined') {
            const existingScript = document.querySelector(
                `script[src*="recaptcha/api.js"]`
            );
            if (existingScript) {
                // Verificar que grecaptcha esté realmente disponible
                if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
                    setRecaptchaLoaded(true);
                }
                return;
            }
        }

        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            // Verificar que grecaptcha esté disponible y realmente funcional
            if (typeof window !== 'undefined' && window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
                // Usar ready() para verificar que realmente está listo
                window.grecaptcha.ready(() => {
                    setRecaptchaLoaded(true);
                    console.log('reCAPTCHA cargado exitosamente');
                });
            } else {
                // Si grecaptcha no está disponible después de onload, es un error
                console.error('reCAPTCHA script cargado pero grecaptcha no está disponible');
                setRecaptchaError(true);
            }
        };
        script.onerror = () => {
            console.error('Error al cargar reCAPTCHA');
            setRecaptchaError(true);
        };
        document.head.appendChild(script);

        return () => {
            // Cleanup opcional
        };
    }, [enabled]);

    // Función para obtener token de reCAPTCHA
    const getToken = useCallback(
        async (action: string): Promise<string | null> => {
            if (!recaptchaLoaded || !enabled || recaptchaError) {
                return null;
            }

            try {
                const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
                if (siteKey && typeof window !== 'undefined' && window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
                    const token = await new Promise<string>((resolve, reject) => {
                        window.grecaptcha.ready(() => {
                            window.grecaptcha
                                .execute(siteKey, { action })
                                .then(resolve)
                                .catch(reject);
                        });
                    });
                    console.log('Token de reCAPTCHA obtenido');
                    return token;
                }
            } catch (error) {
                console.error('Error al obtener token de reCAPTCHA:', error);
                setRecaptchaError(true);
            }

            return null;
        },
        [recaptchaLoaded, enabled, recaptchaError],
    );

    return {
        recaptchaLoaded,
        recaptchaError,
        getToken,
    };
};

