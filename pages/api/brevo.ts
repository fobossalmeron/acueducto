import type { NextApiRequest, NextApiResponse } from 'next';
import { capitalize, capitalizeAll } from 'utils/capitalize';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { action, data } = req.body;

  // Registro seguro de la clave API
  const apiKey = process.env.BREVO_API || '';
  const lastThreeDigits = apiKey.slice(-3);
  console.log(`BREVO_API configurada: ${apiKey ? 'Sí' : 'No'}, Últimos 3 dígitos: ${lastThreeDigits}`);

  switch (action) {
    case 'createContact':
      return handleCreateContact(data, res);
    case 'updateContact':
      return handleUpdateContact(data, res);
    case 'sendToHola':
      return handleSendToHola(data, res);
    default:
      return res.status(400).json({ message: 'Acción no válida' });
  }
}

async function handleCreateContact(data: any, res: NextApiResponse) {
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
      console.error('BREVO_API no está configurada');
      return res.status(500).json({ message: 'Error de configuración del servidor' });
    }
    
    const response = await fetch("https://api.sendinblue.com/v3/contacts", requestOptions);
    
    const responseText = await response.text();
    console.log('Respuesta de la API de Brevo:', responseText); // Log de la respuesta completa
    
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Error al parsear la respuesta JSON:', parseError);
      return res.status(500).json({ message: 'Error al procesar la respuesta del servidor' });
    }

    if (!response.ok) {
      console.error('Error en la API de Brevo:', response.status, responseData);
      return res.status(response.status).json({ message: 'Error al crear el contacto', error: responseData });
    }
    
    return res.status(response.status).json(responseData);
  } catch (error) {
    console.error('Error detallado:', error);
    return res.status(500).json({ message: 'Error al crear el contacto', error: error.message });
  }
}

async function handleUpdateContact(data: any, res: NextApiResponse) {
  const { email, listIds, unlinkListIds } = data;
  let requestOptions = {
    method: "PUT",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API,
    },
    body: JSON.stringify({
      listIds: listIds,
      unlinkListIds: unlinkListIds,
    }),
  };

  try {
    if (!process.env.BREVO_API) {
      console.error('BREVO_API no está configurada');
      return res.status(500).json({ message: 'Error de configuración del servidor' });
    }
    
    const response = await fetch(`https://api.sendinblue.com/v3/contacts/${email}`, requestOptions);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error en la API de Brevo:', errorData);
      return res.status(response.status).json(errorData);
    }
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    console.error('Error detallado:', error);
    return res.status(500).json({ message: 'Error al actualizar el contacto', error: error.message });
  }
}

async function handleSendToHola(data: any, res: NextApiResponse) {
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
      console.error('BREVO_API no está configurada');
      return res.status(500).json({ message: 'Error de configuración del servidor' });
    }
    
    const response = await fetch("https://api.brevo.com/v3/smtp/email", requestOptions);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error en la API de Brevo:', errorData);
      return res.status(response.status).json(errorData);
    }
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    console.error('Error detallado:', error);
    return res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
  }
}
