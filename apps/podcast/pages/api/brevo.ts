import type { NextApiRequest, NextApiResponse } from 'next';
import { capitalize, capitalizeAll } from '@acueducto/shared/utils/capitalize';
import { NewContact, MailContact, EmailToContact } from '@acueducto/shared/types/BrevoProps';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { action, data } = req.body;

  // Safe logging of the API key
  const apiKey = process.env.BREVO_API || '';
  const lastThreeDigits = apiKey.slice(-3);
  console.log(`BREVO_API configured: ${apiKey ? 'Yes' : 'No'}, Last 3 digits: ${lastThreeDigits}`);

  switch (action) {
    case 'createContact':
      return handleCreateContact(data, res);
    case 'sendEmail':
      return handleSendEmail(data, res);
    case 'SendEmailToContact':
      return handleSendEmailToContact(data, res);
    default:
      return res.status(400).json({ message: 'Acción no válida' });
  }
}

async function handleCreateContact(data: NewContact, res: NextApiResponse) {
  const { firstName, lastName, email, listIds, updateEnabled, attributes } = data;
  let capitalizedName = firstName ? capitalize(firstName) : " ";
  let capitalizedLastName = lastName ? capitalize(lastName) : " ";

  let requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API,
    },
    body: JSON.stringify({
      updateEnabled: updateEnabled,
      email: email,
      listIds: listIds,
      attributes: {
        ...{ NOMBRE: capitalizedName, APELLIDOS: capitalizedLastName },
        ...attributes,
      },
    }),
  };

  try {
    if (!process.env.BREVO_API) {
      console.error('BREVO_API is not configured');
      return res.status(500).json({ message: 'Error de configuración del servidor' });
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", requestOptions);

    console.log('Complete response from Brevo API:', response.status, response.statusText, response.body, response);

    if (response.status === 204) {
      // 204 indicates that an existing contact was successfully updated
      return res.status(200).json({ message: 'Contacto actualizado exitosamente' });
    }

    if (response.status === 201) {
      // 201 indicates that a new contact was created
      const responseData = await response.json();
      return res.status(201).json({ message: 'Contacto creado exitosamente', data: responseData });
    }

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error in Brevo API:', response.status, errorData);

      switch (response.status) {
        case 400:
          return res.status(400).json({ message: 'Datos de contacto inválidos', error: errorData.message });
        case 401:
          return res.status(401).json({ message: 'Error de autenticación' });
        case 429:
          return res.status(429).json({ message: 'Límite de tasa excedido' });
        default:
          return res.status(response.status).json({ message: 'Error al procesar el contacto', error: errorData.message });
      }
    }
  } catch (error) {
    console.error('Detailed error:', error);
    return res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
}

async function handleSendEmail(data: MailContact, res: NextApiResponse) {
  const { firstName, lastName, email, company, job, message } = data;

  let completeName = capitalize(firstName) + " " + capitalizeAll(lastName);

  let htmlContent = `
    <p>
    Nombre: ${completeName}<br/>
    Email: ${email}<br/>
    Empresa: ${capitalizeAll(company)}<br/>
    Puesto: ${job}</br>
    Mensaje: ${message}</p>
  `;

  let requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API,
    },
    body: JSON.stringify({
      sender: {
        email: email,
        name: completeName,
      },
      to: [{ name: "Acueducto", email: "hola@acueducto.studio" }],
      subject: "Nuevo proyecto - desde /contacto",
      replyTo: { email: email, name: completeName },
      textContent: htmlContent,
    }),
  };

  try {
    if (!process.env.BREVO_API) {
      console.error('BREVO_API is not configured');
      return res.status(500).json({ message: 'Error de configuración del servidor' });
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", requestOptions);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error in Brevo API:', errorData);
      return res.status(response.status).json(errorData);
    }
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    console.error('Detailed error:', error);
    return res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
  }
}

async function handleSendEmailToContact(data: EmailToContact, res: NextApiResponse) {
  const { email, message, subject } = data;

  let requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API,
    },
    body: JSON.stringify({
      sender: {
        email: "hola@acueducto.studio",
        name: "Acueducto",
      },
      to: [{ email: email }],
      subject: subject,
      replyTo: { email: "hola@acueducto.studio", name: "Acueducto" },
      htmlContent: message,
    }),
  };

  try {
    if (!process.env.BREVO_API) {
      console.error('BREVO_API is not configured');
      return res.status(500).json({ message: 'Error de configuración del servidor' });
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", requestOptions);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error in Brevo API:', errorData);
      return res.status(response.status).json(errorData);
    }
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    console.error('Detailed error:', error);
    return res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
  }
}