import type { NextApiRequest, NextApiResponse } from 'next';
import { capitalize, capitalizeAll } from 'utils/capitalize';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { action, data } = req.body;

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
    const response = await fetch("https://api.sendinblue.com/v3/contacts", requestOptions);
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el contacto desde API' });
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
    const response = await fetch(`https://api.sendinblue.com/v3/contacts/${email}`, requestOptions);
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el contacto' });
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
    const response = await fetch("https://api.brevo.com/v3/smtp/email", requestOptions);
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Error al enviar el correo' });
  }
}
