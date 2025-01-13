import React, { useRef, useState, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { CSSTransition } from "react-transition-group";

import { ButtonSubmit } from "components/shared/Button/ButtonSubmit";
import InputField from "components/shared/ContactInputField";
import delayForLoading from "utils/delayForLoading";
import { useLenis } from "utils/LenisContext";
import { createContact, sendEmailToContact } from "utils/brevo";
import { MailContact } from "utils/types/BrevoProps";

interface FeedbackFormData extends MailContact {
  firstName: string;
  lastName: string;
  company: string;
  position: string;
}

type FormStatus = "IDLE" | "LOADING" | "SUCCESS";

const MasterclassFeedbackForm = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>("IDLE");
  const formRef = useRef<HTMLFormElement>(null);
  const { lenis } = useLenis();

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
          SUBSCRIBED_FROM: "User Feedback Masterclass Form",
          COMPANY: data.company,
          POSITION: data.position,
          JOB: data.position,
        },
      };

      const emailData = {
        ...data,
        message: `
          <p>¡Hola ${data.firstName}!</p>
          <p>Gracias por registrarte a la Masterclass + Sesión de Networking de Acueducto "Itera con el feedback de tus usuarios".</p>
          <p>Te enviaremos la información del venue pronto.</p>
          <p>¡Nos vemos!<br/>Artemio, CEO de Acueducto</p>
        `,
        subject: "Registro exitoso - Itera con el feedback de tus usuarios, Masterclass",
      };

      const completeData = { ...data, ...listData };
      
      lenis.scrollTo(0, { immediate: false });
      setFormStatus("LOADING");
      
      try {
        await Promise.all([
          sendEmailToContact(emailData),
          createContact(completeData),
          delayForLoading(2300),
        ]);
        
        setFormStatus("SUCCESS");
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        setFormStatus("IDLE");
      }
    },
    [lenis]
  );

  const renderForm = () => (
    <CSSTransition
      in={formStatus === "IDLE"}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      <FadeWrapper>
        <FormInfo>
          <span>masterclass + sesión de networking</span>
          <h1>itera con el feedback de tus usuarios</h1>
          <ul>
            <li>Roma Sur, Ciudad de México (venue por confirmar)</li>
            <li>Jueves 30 de enero del 2025</li>
          </ul>
          <p>Llena el formulario y ven a nuestra masterclass.</p>
        </FormInfo>
        <Form onSubmit={handleSubmit(onSubmitInside)} ref={formRef}>
          <OneLine>
            <InputField>
              <label htmlFor={`cp_firstName`}>nombre</label>
              <input
                name="firstName"
                id={`cp_firstName`}
                type="text"
                placeholder="tu nombre"
                {...register("firstName", { required: true })}
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
                {...register("lastName", { required: true })}
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
              {...register("email", {
                required: "Por favor ingresa tu correo electrónico",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Por favor ingresa un correo electrónico válido",
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
              {...register("company", { required: true })}
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
              {...register("position", { required: true })}
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

  const renderSuccess = () => (
    <Fade triggerOnce>
      <Message>
        <p>¡Gracias por registrarte! Te enviaremos un correo con los detalles del evento.</p>
      </Message>
    </Fade>
  );

  return (
    <>
      {renderForm()}
      {formStatus === "LOADING" && renderLoading()}
      {formStatus === "SUCCESS" && renderSuccess()}
    </>
  );
};

export default MasterclassFeedbackForm;

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
  margin-bottom: 20%;
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

const FormInfo = styled.div`
  span {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    line-height: 140%;
    font-weight: 100;
    position: relative;
    display: block;
  }
  h1 {
    all: unset;
    font-size: 3.5rem !important;
    line-height: 110% !important;
    text-transform: none !important;
    letter-spacing: 0 !important;
    padding-bottom: 2rem !important;
    display: block;
    max-width: 17ch;
    font-weight: 300 !important;
  }
  ul {
    margin-bottom: 2rem;
    li {
      text-decoration: none;
      list-style: none;
      position: relative;
      padding-left: 1.5rem;
      
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background-color: ${p => p.theme.colors.accent};
        border-radius: 50%;
      }
    }
  }
  p {
    margin-bottom: 2rem;
  }
`;
