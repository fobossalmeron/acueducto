import React, { useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { CSSTransition } from "react-transition-group";

import { ButtonSubmit } from "components/shared/Button/ButtonSubmit";
import InputField from "components/shared/ContactInputField";
import delayForLoading from "utils/delayForLoading";
import { useLenis } from "utils/LenisContext";
import { createContact, MailForHola, sendToHola } from "utils/sendinBlue";

const DynamicAmongUs = dynamic(() => import("./AmongUs"), {
  ssr: false,
});

interface ContactFormProps {
  intro: {
    p2: string;
    mailto: { subject: string; body: string };
  };
  text: {
    p3: string;
    email: {
      label: string;
      placeholder: string;
      errorMissing: string;
      errorInvalid: string;
    };
    firstName: { label: string; placeholder: string; errorMissing: string };
    lastName: { label: string; placeholder: string; errorMissing: string };
    company: { label: string; placeholder: string; errorMissing: string };
    job: { label: string; placeholder: string; errorMissing: string };
    message: { label: string; placeholder: string; errorMissing: string };
    submit: string;
    loading: string;
    success: { p: string };
  };
  testing?: boolean;
}

type FormStatus = "IDLE" | "LOADING" | "SUCCESS";

const ContactForm: React.FC<ContactFormProps> = ({
  text,
  intro,
  testing = false,
}) => {
  if (process.env.NODE_ENV === "production" && testing) {
    throw new Error('No se puede usar el prop "testing" en producción');
  }

  const [formStatus, setFormStatus] = useState<FormStatus>("IDLE");
  const formRef = useRef<HTMLFormElement>(null);
  const { lenis } = useLenis();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailForHola>();

  const onSubmitInside: SubmitHandler<MailForHola> = useCallback(
    async (data) => {
      const listData = {
        listIds: [10], //PidioExploracion
        updateEnabled: true,
        attributes: {
          SUBSCRIBED_FROM: "Contact Form",
          COMPANY: data.company,
          POSITION: data.job,
          JOB: data.job,
        },
      };
      const completeData = { ...data, ...listData };
      lenis.scrollTo(0, { immediate: false });
      await delayForLoading(300);
      setFormStatus("LOADING");

      if (testing) {
        console.log(
          "Modo de prueba: Simulando envío exitoso del formulario",
          completeData
        );
        await delayForLoading(2300);
      } else {
        await Promise.all([
          sendToHola(data),
          createContact(completeData),
          delayForLoading(2300),
        ]);
      }

      setFormStatus("SUCCESS");
    },
    [lenis, testing]
  );

  const renderForm = () => (
    <CSSTransition
      in={formStatus === "IDLE"}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      <FadeWrapper>
        <p>
          {intro.p2} <br />
          <a
            href={`mailto:hola@acueducto.studio?subject=${intro.mailto.subject}&body=${intro.mailto.body}`}
          >
            hola@acueducto.studio
          </a>
        </p>
        <p>{text.p3}</p>
        <Form onSubmit={handleSubmit(onSubmitInside)} ref={formRef}>
          <InputField>
            <label htmlFor={`cp_email`}>{text.email.label}</label>
            <input
              name="email"
              id={`cp_email`}
              type="email"
              placeholder={text.email.placeholder}
              {...register("email", {
                required: text.email.errorMissing,
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                  message: text.email.errorInvalid,
                },
              })}
            />
            <span>
              <>{errors?.email?.message}</>
            </span>
          </InputField>
          <OneLine>
            <InputField>
              <label htmlFor={`cp_firstName`}>{text.firstName.label}</label>
              <input
                name="firstName"
                id={`cp_firstName`}
                type="text"
                placeholder={text.firstName.placeholder}
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <span>{text.firstName.errorMissing}</span>}
            </InputField>
            <InputField>
              <label htmlFor={`cp_lastName`}>{text.lastName.label}</label>
              <input
                name="lastName"
                id={`cp_lastName`}
                type="text"
                placeholder={text.lastName.placeholder}
                {...register("lastName", { required: true })}
              />
              {errors.lastName && <span>{text.lastName.errorMissing}</span>}
            </InputField>
          </OneLine>
          <InputField>
            <label htmlFor={`cp_company`}>{text.company.label}</label>
            <input
              name="company"
              id={`cp_company`}
              type="text"
              placeholder={text.company.placeholder}
              {...register("company", { required: true })}
            />
            {errors.company && <span>{text.company.errorMissing}</span>}
          </InputField>
          <InputField>
            <label htmlFor={`cp_job`}>{text.job.label}</label>
            <input
              name="job"
              id={`cp_job`}
              type="text"
              placeholder={text.job.placeholder}
              {...register("job", { required: true })}
            />
            {errors.job && <span>{text.job.errorMissing}</span>}
          </InputField>
          <InputField>
            <label htmlFor={`cp_message`}>{text.message.label}</label>
            <textarea
              name="message"
              id={`cp_message`}
              placeholder={text.message.placeholder}
              {...register("message", { required: true })}
            />
            {errors.message && <span>{text.message.errorMissing}</span>}
          </InputField>
          <ButtonSubmit
            text={text.submit}
            inverse
            parentComponent="ContactForm"
          />
        </Form>
      </FadeWrapper>
    </CSSTransition>
  );

  const renderLoading = () => (
    <Fade triggerOnce>
      <Loading>
        <DynamicAmongUs />
      </Loading>
    </Fade>
  );

  const renderSuccess = () => (
    <Fade triggerOnce>
      <Message>
        <p>{text.success.p}</p>
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

export default ContactForm;

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
  p,
  p:first-of-type {
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
  .lottie {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 600px), (max-height: 450px) {
    .lottie {
      width: 70px;
      height: 70px;
    }
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
