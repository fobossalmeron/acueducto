import React, { useRef, useState, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';

import { ButtonSubmit } from 'components/ui/Button';
import InputField from 'components/shared/ContactInputField';
import delayForLoading from 'utils/delayForLoading';
import { useLenis } from 'utils/LenisContext';
import { createContact, sendEmailToContact } from 'utils/brevo';
import { MailContact } from 'types/BrevoProps';

interface FeedbackFormData extends MailContact {
  firstName: string;
  lastName: string;
  company: string;
  position: string;
}

type FormStatus = 'IDLE' | 'LOADING' | 'SUCCESS';

export const MeetupForm = ({
  googleCalendarEvent,
  meetupEdition,
}: {
  googleCalendarEvent: string;
  meetupEdition: number;
}) => {
  const [formStatus, setFormStatus] = useState<FormStatus>('IDLE');
  const formRef = useRef<HTMLFormElement>(null);
  const { lenis } = useLenis();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormData>();

  const onSubmitInside: SubmitHandler<FeedbackFormData> = useCallback(
    async (data) => {
      const listData = {
        listIds: [17],
        updateEnabled: true,
        attributes: {
          SUBSCRIBED_FROM: `Meetup #${meetupEdition}`,
          COMPANY: data.company,
          POSITION: data.position,
          JOB: data.position,
        },
      };

      const emailData = {
        ...data,
        message: `
          <p>¡Hola ${data.firstName}!</p>
          <p>Gracias por registrarte a nuestro Meetup de líderes de innovación.</p>
          <p>Pronto te enviaremos el resto de la información.</p>
          <p><a href="${googleCalendarEvent}" target="_blank" style="display: inline-block; background-color: #1A4CE0; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 15px; margin-bottom: 15px;">Añadir a Google Calendar</a></p>
          <p>¡Nos vemos pronto!<br/>Artemio, CEO de Acueducto</p>
        `,
        subject: 'Registro exitoso - Meetup de líderes de innovación',
      };

      const completeData = { ...data, ...listData };

      lenis.scrollTo(0, { immediate: false });
      lenis.scrollTo('#registro', {
        immediate: false,
      });
      setFormStatus('LOADING');

      try {
        await Promise.all([
          sendEmailToContact(emailData),
          createContact(completeData),
          delayForLoading(2300),
        ]);

        setTimeout(() => {
          router.push('/meetup/confirmation');
        }, 1000);
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        setFormStatus('IDLE');
      }
    },
    [lenis, router],
  );

  const renderForm = () => (
    <div className="animate-fade-in">
      <form
        onSubmit={handleSubmit(onSubmitInside)}
        ref={formRef}
        className="border-foreground-lowest flex flex-col rounded-4xl border px-[7%] py-8"
      >
        <p className="text-over-black mt-3 mb-3 max-w-[13ch] text-lg leading-[125%] font-medium md:text-xl">
          Regístrate aquí y aparta tu lugar
        </p>
        <p className="text-foreground-lower mb-8 text-sm md:mb-10 md:text-base">
          Llena el formulario y ven a nuestro meetup
        </p>

        <div className="flex flex-col sm:flex-row sm:gap-6">
          <InputField>
            <label htmlFor={`cp_firstName`}>Nombre</label>
            <input
              name="firstName"
              id={`cp_firstName`}
              type="text"
              placeholder="Tu nombre"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && <span>Por favor ingresa tu nombre</span>}
          </InputField>
          <InputField>
            <label htmlFor={`cp_lastName`}>Apellido</label>
            <input
              name="lastName"
              id={`cp_lastName`}
              type="text"
              placeholder="Tu apellido"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && <span>Por favor ingresa tu apellido</span>}
          </InputField>
        </div>

        <InputField>
          <label htmlFor={`cp_email`}>Correo electrónico</label>
          <input
            name="email"
            id={`cp_email`}
            type="email"
            placeholder="tu@email.com"
            {...register('email', {
              required: 'Por favor ingresa tu correo electrónico',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Por favor ingresa un correo electrónico válido',
              },
              validate: {
                noPersonalEmail: (value) => {
                  const personalDomains = [
                    'gmail.com',
                    'hotmail.com',
                    'yahoo.com',
                    'aol.com',
                    'outlook.com',
                    'live.com',
                    'icloud.com',
                  ];
                  const domain = value.split('@')[1]?.toLowerCase();
                  return (
                    !personalDomains.includes(domain) ||
                    'Por favor ingresa un email de trabajo'
                  );
                },
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </InputField>

        <InputField>
          <label htmlFor={`cp_company`}>Tu empresa</label>
          <input
            name="company"
            id={`cp_company`}
            type="text"
            placeholder="Nombre de tu empresa"
            {...register('company', { required: true })}
          />
          {errors.company && (
            <span>Por favor ingresa el nombre de tu empresa</span>
          )}
        </InputField>

        <InputField>
          <label htmlFor={`cp_position`}>Tu puesto</label>
          <input
            name="position"
            id={`cp_position`}
            type="text"
            placeholder="Tu puesto actual"
            {...register('position', { required: true })}
          />
          {errors.position && <span>Por favor ingresa tu cargo</span>}
        </InputField>

        <ButtonSubmit text="Regístrate" className="mt-4 w-fit" />
      </form>
    </div>
  );

  const renderLoading = () => (
    <div className="animate-fade-in">
      <div className="flex w-full flex-row items-center justify-center py-[10%]">
        <p className="ml-5 text-lg">Enviando...</p>
      </div>
    </div>
  );

  return (
    <>
      {formStatus === 'IDLE' && renderForm()}
      {formStatus === 'LOADING' && renderLoading()}
    </>
  );
};
