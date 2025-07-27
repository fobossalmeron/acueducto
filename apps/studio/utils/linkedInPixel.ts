// Constante con el ID de LinkedIn para este proyecto
const LINKEDIN_PIXEL_ID = '1943114';
const SUBDOMAIN = 'px'; // Valor fijo para simplificar

// Función simple para inicializar el pixel
export const initLinkedinPixel = (disabled = false) => {
    if (typeof window === 'undefined' || disabled) return;

    // Configurar el partner ID
    window._linkedin_partner_id = LINKEDIN_PIXEL_ID;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(LINKEDIN_PIXEL_ID);

    // Configurar la función lintrk
    if (!window.lintrk) {
        window.lintrk = function (a: any, b: any) {
            window.lintrk.q.push([a, b]);
        };
        window.lintrk.q = [];
    }

    // Cargar el script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';

    const s = document.getElementsByTagName('script')[0];
    s.parentNode?.insertBefore(script, s);

    // Añadir noscript pixel
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.alt = '';
    img.src = `https://${SUBDOMAIN}.ads.linkedin.com/collect/?pid=${LINKEDIN_PIXEL_ID}&fmt=gif`;

    noscript.appendChild(img);
    document.body.appendChild(noscript);
};

// Función para trackear vistas de página
export const trackPageView = () => {
    if (typeof window === 'undefined') return;

    // Método principal usando lintrk
    if (window.lintrk) {
        window.lintrk('track', { conversion_id: 'pageview' });
        return;
    }

    // Método alternativo con imagen como respaldo
    trackWithImage('pageview');
};

// Función para trackear conversiones específicas
export const track = (conversionId: string) => {
    if (typeof window === 'undefined') return;

    // Método principal usando lintrk
    if (window.lintrk) {
        window.lintrk('track', { conversion_id: conversionId });
        return;
    }

    // Método alternativo con imagen como respaldo
    trackWithImage(conversionId);
};

// Función auxiliar para el método alternativo con imagen
const trackWithImage = (conversionId: string) => {
    if (typeof window === 'undefined' || !window._linkedin_partner_id) return;

    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.alt = '';
    img.src = `https://${SUBDOMAIN}.ads.linkedin.com/collect/?pid=${LINKEDIN_PIXEL_ID}&conversionId=${conversionId}&fmt=gif`;

    document.body.appendChild(img);
};

// Declaración de tipos para TypeScript
declare global {
    interface Window {
        _linkedin_partner_id: string;
        _linkedin_data_partner_ids: string[];
        lintrk: any;
    }
}