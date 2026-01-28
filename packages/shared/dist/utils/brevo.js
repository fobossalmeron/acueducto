// Función para crear un contacto
export const createContact = async (submittedData) => {
    const response = await fetch('/api/brevo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'createContact',
            data: submittedData,
        }),
    });
    return response;
};
// Función para enviar un correo a hola@acueducto.studio
export const sendEmail = async (formData, recaptchaToken) => {
    const response = await fetch('/api/brevo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'sendEmail',
            data: formData,
            recaptchaToken: recaptchaToken ?? undefined,
        }),
    });
    return response;
};
// Función para enviar un correo a un contacto específico
export const sendEmailToContact = async (formData, recaptchaToken) => {
    const response = await fetch('/api/brevo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'SendEmailToContact',
            data: formData,
            recaptchaToken: recaptchaToken ?? undefined,
        }),
    });
    return response;
};
