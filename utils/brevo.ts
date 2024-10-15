import { NewContact, UpdatedContact, MailContact } from './types/BrevoProps';

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

// Función para actualizar un contacto
export const updateContact = async (submittedData: UpdatedContact) => {
  const response = await fetch('/api/brevo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'updateContact',
      data: submittedData,
    }),
  });
  return response;
};

// Función para enviar un correo a hola@acueducto.studio
export const sendToHola = async (formData: MailContact) => {
  const response = await fetch('/api/brevo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'sendToHola',
      data: formData,
    }),
  });
  return response;
};