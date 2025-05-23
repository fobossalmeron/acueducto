import { NewContact, MailContact, EmailToContact } from '../types/BrevoProps';

// Función para crear un contacto
export const createContact = async (submittedData: NewContact) => {
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
export const sendEmail = async (formData: MailContact) => {
  const response = await fetch('/api/brevo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'sendEmail',
      data: formData,
    }),
  });
  return response;
};

// Función para enviar un correo a un contacto específico
export const sendEmailToContact = async (formData: EmailToContact) => {
  const response = await fetch('/api/brevo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'SendEmailToContact',
      data: formData,
    }),
  });
  return response;
};