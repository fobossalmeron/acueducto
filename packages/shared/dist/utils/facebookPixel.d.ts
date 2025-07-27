/**
 * Crea un objeto de matching avanzado para Facebook Pixel
 * @param email - Correo electrónico del usuario
 * @returns Objeto con datos para matching avanzado
 */
export declare const advancedMatching: (email: string) => {
    em: string;
    ct: any;
    country: any;
    db: any;
    fn: any;
    ge: any;
    ln: any;
    ph: any;
    st: any;
    zp: any;
};
/**
 * Inicializa Facebook Pixel con configuración básica
 * @param advancedMatchingParams - Parámetros opcionales de matching avanzado
 * @returns Instancia de ReactPixel o un objeto con métodos vacíos si no está en el navegador
 */
export declare const initFacebookPixel: (advancedMatchingParams?: any) => any;
/**
 * Registra una vista de página en Facebook Pixel
 */
export declare const trackPageView: () => void;
/**
 * Registra un evento de suscripción en Facebook Pixel
 * @param email - Correo electrónico del usuario
 * @param additionalData - Datos adicionales para el evento
 */
export declare const trackSubscribe: (email: any, additionalData?: {}) => void;
/**
 * Registra un evento personalizado en Facebook Pixel
 * @param eventName - Nombre del evento
 * @param data - Datos adicionales para el evento
 */
export declare const trackCustomEvent: (eventName: string, data?: {}) => void;
/**
 * Registra un evento estándar en Facebook Pixel
 * @param eventName - Nombre del evento estándar
 * @param data - Datos adicionales para el evento
 */
export declare const trackEvent: (eventName: string, data?: {}) => void;
//# sourceMappingURL=facebookPixel.d.ts.map