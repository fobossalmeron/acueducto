// ID de Facebook Pixel
const PIXEL_ID = '506854653278097';

/**
 * Crea un objeto de matching avanzado para Facebook Pixel
 * @param email - Correo electrónico del usuario
 * @returns Objeto con datos para matching avanzado
 */
export const advancedMatching = (email: string) => {
    const am = {
        em: email,
        ct: null,
        country: null,
        db: null,
        fn: null,
        ge: null,
        ln: null,
        ph: null,
        st: null,
        zp: null,
    };
    return am;
};

/**
 * Obtiene la instancia de ReactPixel de manera segura
 * @returns Instancia de ReactPixel o un objeto con métodos vacíos si no está en el navegador
 */
const getPixelInstance = () => {
    if (typeof window === 'undefined') {
        // Devuelve un objeto con métodos vacíos para SSR
        return {
            init: () => { },
            pageView: () => { },
            track: () => { },
            trackSingle: () => { },
            trackCustom: () => { },
        };
    }

    // En el cliente, devuelve la instancia real
    return require('react-facebook-pixel').default;
};

/**
 * Inicializa Facebook Pixel con configuración básica
 * @param advancedMatchingParams - Parámetros opcionales de matching avanzado
 * @returns Instancia de ReactPixel o un objeto con métodos vacíos si no está en el navegador
 */
export const initFacebookPixel = (advancedMatchingParams = null) => {
    const ReactPixel = getPixelInstance();

    const fbOptions = {
        autoConfig: true,
        debug: false,
    };

    ReactPixel.init(PIXEL_ID, advancedMatchingParams, fbOptions);
    return ReactPixel;
};

/**
 * Registra una vista de página en Facebook Pixel
 */
export const trackPageView = () => {
    const ReactPixel = getPixelInstance();
    ReactPixel.pageView();
};

/**
 * Registra un evento de suscripción en Facebook Pixel
 * @param email - Correo electrónico del usuario
 * @param additionalData - Datos adicionales para el evento
 */
export const trackSubscribe = (email, additionalData = {}) => {
    const ReactPixel = getPixelInstance();
    const advancedMatchingParams = advancedMatching(email);

    // Reinicializar con datos de matching avanzado si están disponibles
    if (advancedMatchingParams) {
        ReactPixel.init(PIXEL_ID, advancedMatchingParams);
    }

    ReactPixel.track('Subscribe', { email, ...additionalData });
};

/**
 * Registra un evento personalizado en Facebook Pixel
 * @param eventName - Nombre del evento
 * @param data - Datos adicionales para el evento
 */
export const trackCustomEvent = (eventName: string, data = {}) => {
    const ReactPixel = getPixelInstance();
    ReactPixel.trackCustom(eventName, data);
};

/**
 * Registra un evento estándar en Facebook Pixel
 * @param eventName - Nombre del evento estándar
 * @param data - Datos adicionales para el evento
 */
export const trackEvent = (eventName: string, data = {}) => {
    const ReactPixel = getPixelInstance();
    ReactPixel.track(eventName, data);
};