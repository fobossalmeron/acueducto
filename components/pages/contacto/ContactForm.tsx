import React, { useRef, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ButtonSubmit } from 'components/ui/Button/ButtonSubmit';
import InputField from 'components/shared/ContactInputField';
import { RecaptchaError } from 'components/shared/RecaptchaError';
import delayForLoading from 'utils/delayForLoading';
import { useLenis } from 'utils/LenisContext';
import { createContact, sendEmail } from 'utils/brevo';
import { MailContact } from 'types/BrevoProps';
import { useRecaptcha } from 'utils/useRecaptcha';

const DynamicAmongUs = dynamic(() => import('./AmongUs'), {
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
    error: {
      recaptchaFailed: string;
      recaptchaNotLoaded: string;
      generic: string;
    };
  };
  testing?: boolean;
}

type FormStatus = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';

const ContactForm: React.FC<ContactFormProps> = ({
  text,
  intro,
  testing = false,
}) => {
  if (process.env.NODE_ENV === 'production' && testing) {
    throw new Error('No se puede usar el prop "testing" en producción');
  }

  const [formStatus, setFormStatus] = useState<FormStatus>('IDLE');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const { lenis } = useLenis();
  const { getToken, recaptchaError } = useRecaptcha(!testing);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailContact>();

  const onSubmitInside: SubmitHandler<MailContact> = useCallback(
    async (data) => {
      // Verificar si hay error al cargar reCAPTCHA
      if (recaptchaError) {
        setErrorMessage(text.error.recaptchaNotLoaded);
        setFormStatus('ERROR');
        return;
      }

      // Obtener token de reCAPTCHA
      const recaptchaToken = await getToken('submit_contact_form');

      // Si no se obtuvo token, bloquear envío
      if (!recaptchaToken) {
        setErrorMessage(text.error.recaptchaNotLoaded);
        setFormStatus('ERROR');
        return;
      }

      const listData = {
        listIds: [10], //PidioExploracion
        updateEnabled: true,
        attributes: {
          SUBSCRIBED_FROM: 'Contact Form',
          COMPANY: data.company,
          POSITION: data.job,
          JOB: data.job,
        },
      };
      const completeData = { ...data, ...listData };
      lenis.scrollTo(0, { immediate: false });
      await delayForLoading(300);
      setFormStatus('LOADING');
      setErrorMessage('');

      if (testing) {
        console.log(
          'Modo de prueba: Simulando envío exitoso del formulario',
          completeData,
        );
        await delayForLoading(2300);
        setFormStatus('SUCCESS');
      } else {
        try {
          const emailResponse = await sendEmail(data, recaptchaToken);

          if (!emailResponse.ok) {
            const errorData = await emailResponse.json();
            if (emailResponse.status === 403) {
              // Error de reCAPTCHA
              setErrorMessage(text.error.recaptchaFailed);
              setFormStatus('ERROR');
              console.error('Error de verificación reCAPTCHA:', errorData);
              return;
            } else {
              // Otro error
              setErrorMessage(text.error.generic);
              setFormStatus('ERROR');
              console.error('Error al enviar email:', errorData);
              return;
            }
          }

          // Crear contacto (no crítico si falla)
          await createContact(completeData).catch(() => {
            console.error('Error al crear el contacto en Brevo');
            return;
          });

          await delayForLoading(2300);
          setFormStatus('SUCCESS');
        } catch (error) {
          setErrorMessage(text.error.generic);
          setFormStatus('ERROR');
          console.error('Error inesperado al enviar formulario:', error);
        }
      }
    },
    [lenis, testing, getToken, text.error, recaptchaError],
  );

  const renderForm = () => (
    <div className="animate-fade-in">
      <div className="text-over-black">
        <p className="mb-4">
          {intro.p2} <br />
          <a
            className="hover:decoration-primary !text-white underline decoration-gray-500 transition-all duration-300 ease-in-out"
            href={`mailto:hola@acueducto.studio?subject=${intro.mailto.subject}&body=${intro.mailto.body}`}
          >
            hola@acueducto.studio
          </a>
        </p>
        <p className="mb-6">{text.p3}</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmitInside)}
        ref={formRef}
        className="border-foreground-lowest flex flex-col rounded-4xl border px-[7%] py-8"
      >
        <InputField>
          <label htmlFor={`cp_email`}>{text.email.label}</label>
          <input
            name="email"
            id={`cp_email`}
            type="email"
            placeholder={text.email.placeholder}
            {...register('email', {
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
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <InputField>
            <label htmlFor={`cp_firstName`}>{text.firstName.label}</label>
            <input
              name="firstName"
              id={`cp_firstName`}
              type="text"
              placeholder={text.firstName.placeholder}
              {...register('firstName', { required: true })}
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
              {...register('lastName', { required: true })}
            />
            {errors.lastName && <span>{text.lastName.errorMissing}</span>}
          </InputField>
        </div>
        <InputField>
          <label htmlFor={`cp_company`}>{text.company.label}</label>
          <input
            name="company"
            id={`cp_company`}
            type="text"
            placeholder={text.company.placeholder}
            {...register('company', { required: true })}
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
            {...register('job', { required: true })}
          />
          {errors.job && <span>{text.job.errorMissing}</span>}
        </InputField>
        <InputField>
          <label htmlFor={`cp_message`}>{text.message.label}</label>
          <textarea
            name="message"
            id={`cp_message`}
            placeholder={text.message.placeholder}
            {...register('message', { required: true })}
          />
          {errors.message && <span>{text.message.errorMissing}</span>}
        </InputField>
        <ButtonSubmit text={text.submit} className="mt-4 w-fit" />
      </form>
    </div>
  );

  const renderLoading = () => (
    <div className="animate-fade-in">
      <div className="flex w-full flex-row items-center justify-center pt-[10%] pb-[10%]">
        <DynamicAmongUs />
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="animate-fade-in">
      <div className="text-success border-success bg-success-background flex w-full flex-col items-center justify-center rounded-3xl border-1 p-[30px_35px] text-center text-lg">
        <p className="m-0 max-w-[30ch] p-0">{text.success.p}</p>
      </div>
    </div>
  );

  return (
    <>
      {formStatus === 'IDLE' && renderForm()}
      {formStatus === 'LOADING' && renderLoading()}
      {formStatus === 'SUCCESS' && renderSuccess()}
      {formStatus === 'ERROR' && (
        <RecaptchaError errorMessage={errorMessage || text.error.generic} />
      )}
    </>
  );
};

export default ContactForm;
