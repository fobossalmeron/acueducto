import React, { useRef, useState, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { CSSTransition } from 'react-transition-group';
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
    <CSSTransition
      in={formStatus === 'IDLE'}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      <FadeWrapper>
        <Form onSubmit={handleSubmit(onSubmitInside)} ref={formRef}>
          <OneLine>
            <InputField>
              <label htmlFor={`cp_firstName`}>nombre</label>
              <input
                name="firstName"
                id={`cp_firstName`}
                type="text"
                placeholder="tu nombre"
                {...register('firstName', { required: true })}
              />
              {errors.firstName && <span>Por favor ingresa tu nombre</span>}
            </InputField>
            <InputField>
              <label htmlFor={`cp_lastName`}>apellido</label>
              <input
                name="lastName"
                id={`cp_lastName`}
                type="text"
                placeholder="tu apellido"
                {...register('lastName', { required: true })}
              />
              {errors.lastName && <span>Por favor ingresa tu apellido</span>}
            </InputField>
          </OneLine>

          <InputField>
            <label htmlFor={`cp_email`}>correo electrónico</label>
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
            <label htmlFor={`cp_company`}>tu empresa</label>
            <input
              name="company"
              id={`cp_company`}
              type="text"
              placeholder="nombre de tu empresa"
              {...register('company', { required: true })}
            />
            {errors.company && (
              <span>Por favor ingresa el nombre de tu empresa</span>
            )}
          </InputField>

          <InputField>
            <label htmlFor={`cp_position`}>tu puesto</label>
            <input
              name="position"
              id={`cp_position`}
              type="text"
              placeholder="tu puesto actual"
              {...register('position', { required: true })}
            />
            {errors.position && <span>Por favor ingresa tu cargo</span>}
          </InputField>

          <ButtonSubmit
            text="regístrate"
            inverse
            parentComponent="MasterclassFeedbackForm"
          />
        </Form>
      </FadeWrapper>
    </CSSTransition>
  );

  const renderLoading = () => (
    <Fade triggerOnce>
      <Loading>
        <p>Enviando...</p>
      </Loading>
    </Fade>
  );

  return (
    <>
      {renderForm()}
      {formStatus === 'LOADING' && renderLoading()}
    </>
  );
};

// Reutilizamos los mismos estilos del ContactForm
const OneLine = styled.div`
  flex-direction: row;
  display: flex;
  gap: 2rem;
  @media (max-width: 600px), (max-height: 450px) {
    display: unset;
  }
`;

const Message = styled.div`
  color: ${(p) => p.theme.colors.success};
  border: 2px solid ${(p) => p.theme.colors.success};
  background-color: ${(p) => p.theme.colors.success_background};
  border-radius: 30px;
  font-size: 1.8rem;
  padding: 30px 35px;
  text-align: center;
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 30ch;
    color: inherit;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 600px), (max-height: 450px) {
    font-size: 1.6rem;
    margin-top: 20px;
  }
`;

const Loading = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 10%;
  padding-top: 10%;
  flex-direction: row;
  p {
    margin-bottom: 5px;
    margin-left: 20px;
    width: 100%;
    font-weight: 200;
    font-size: 2.2rem;
  }
`;

const Form = styled.form`
  padding: 5% 7.5%;
  border: 2px solid ${(p) => p.theme.colors.foreground_lowest};
  border-radius: 30px;
  margin-top: -10px;
  display: flex;
  flex-direction: column;
`;

const FadeWrapper = styled.div`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
`;
