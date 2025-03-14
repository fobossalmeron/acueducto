import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Fade } from 'react-awesome-reveal';
import Arrow from 'components/shared/Arrow';
import { createContact } from 'utils/brevo';
import delayForLoading from 'utils/delayForLoading';
import Results from './Results';
import * as FacebookPixel from 'utils/facebookPixel';
import InputField, { SubmitField } from 'components/shared/ContactInputField';
import {
  Loading,
  Tag,
  LineContainer,
  ArrowContainer,
  Arrowx,
  InputGrid,
  Info,
  QuestionGrid,
  Question,
  QuestionSection,
} from './DiagnosticoDigital.styles';

const NUMBER_OF_QS = 15;

interface Question {
  question: string;
  a1: string;
  a2: string;
  a3: string;
}

interface DiagnosticoProps {
  diagnose_section: {
    questions: Question[];
    collection_form: {
      title: string;
      firstName: {
        label: string;
        placeholder: string;
        errorMissing: string;
      };
      lastName: {
        label: string;
        placeholder: string;
        errorMissing: string;
      };
      email: {
        placeholder: string;
        errorMissing: string;
        errorInvalid: string;
      };
      submit: string;
    };
  };
  results_section: any; // Tipo específico para results_section
}

interface FormData {
  [key: string]: string;
  firstName: string;
  lastName: string;
  email: string;
}

const PRUEBA_RESULTADOS = [9, 7, 4, 'Ramiro'];
const PRUEBA_ESTADO = 'done';

const Diagnostico: React.FC<DiagnosticoProps> = ({
  diagnose_section,
  results_section,
}) => {
  const { questions, collection_form } = diagnose_section;

  const [qIndex, setQIndex] = useState<number>(0);
  const [aIndex, setAIndex] = useState<number>(0);
  const [aIndexShouldIncrease, setAIndexShouldIncrease] =
    useState<boolean>(true);
  const [testStatus, setTestStatus] = useState<string>('');
  const [results, setResults] = useState<[number, number, number, string]>([
    0,
    0,
    0,
    '',
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setTestStatus('loading');
    //Clean TestResults object in sendinBlue
    let testResults = { ...data };
    delete testResults.email;
    delete testResults.firstName;
    delete testResults.lastName;

    //Create contact and add to list 3 (Consulting funnel) w/ test results
    createContact({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      listIds: [2],
      updateEnabled: true,
      attributes: {
        TESTRESULTS: JSON.stringify(testResults),
      },
    });

    // Get the averages of the three areas
    let estrategia =
      (parseFloat(data.Q0) +
        parseFloat(data.Q1) +
        parseFloat(data.Q2) +
        parseFloat(data.Q3) +
        parseFloat(data.Q4)) /
      5;
    let cultura =
      (parseFloat(data.Q5) +
        parseFloat(data.Q6) +
        parseFloat(data.Q7) +
        parseFloat(data.Q8)) /
      4;
    let competencia =
      (parseFloat(data.Q9) +
        parseFloat(data.Q10) +
        parseFloat(data.Q11) +
        parseFloat(data.Q12) +
        parseFloat(data.Q13) +
        parseFloat(data.Q14)) /
      6;

    setResults([estrategia, cultura, competencia, data.firstName]);
    FacebookPixel.trackEvent('Lead', { email: data.email }); // Hizo el diagnóstico
    delayForLoading(1500).then(() => setTestStatus('done'));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      qIndex < NUMBER_OF_QS && e.preventDefault();
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (qIndex < NUMBER_OF_QS) {
        prevIndex();
      }
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (qIndex < NUMBER_OF_QS) {
        nextIndex();
      }
    }
  };

  useEffect(() => {
    qIndex === aIndex && setAIndexShouldIncrease(true);
  }, [qIndex, aIndex]);

  function handleClick() {
    if (qIndex < NUMBER_OF_QS) {
      setQIndex(qIndex + 1);
      aIndexShouldIncrease && setAIndex(aIndex + 1);
    }
  }

  function prevIndex() {
    qIndex !== 0 && setQIndex(qIndex - 1);
    setAIndexShouldIncrease(false);
  }
  function nextIndex() {
    aIndex > qIndex && qIndex < NUMBER_OF_QS && setQIndex(qIndex + 1);
    qIndex === aIndex && setAIndexShouldIncrease(true);
  }

  return (
    <QuestionSection>
      {testStatus === '' && (
        <Fade triggerOnce>
          <QuestionGrid>
            <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
              {questions.map((question, index) => (
                <Question
                  key={'question' + index}
                  $selected={qIndex === index}
                  $deselected={qIndex === index - 1}
                >
                  <Info>
                    <span>
                      {index + 1 < 10 ? `0${index + 1}` : index}/
                      {NUMBER_OF_QS > 10 ? NUMBER_OF_QS : `0${NUMBER_OF_QS}`}
                    </span>
                    <h4>{question.question}</h4>
                    <label>
                      {question.a1}
                      <input
                        name={'Q' + index}
                        type="radio"
                        value={10}
                        {...register('Q' + index)}
                        onClick={handleClick}
                      />
                      <span />
                    </label>
                    <label>
                      {question.a2}
                      <input
                        name={'Q' + index}
                        type="radio"
                        value={5}
                        {...register('Q' + index)}
                        onClick={handleClick}
                      />
                      <span />
                    </label>
                    <label>
                      {question.a3}
                      <input
                        name={'Q' + index}
                        type="radio"
                        value={0}
                        {...register('Q' + index)}
                        onClick={handleClick}
                      />
                      <span />
                    </label>
                  </Info>
                </Question>
              ))}
              <Question
                $selected={qIndex === NUMBER_OF_QS}
                $deselected={qIndex === NUMBER_OF_QS - 1}
              >
                <h5>{collection_form.title}</h5>
                <InputGrid>
                  <InputField>
                    <label htmlFor="firstName">
                      {collection_form.firstName.label}
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      id="firstName"
                      placeholder={collection_form.firstName.placeholder}
                      {...register('firstName', { required: true })}
                    />
                    {errors.firstName && (
                      <span>{collection_form.firstName.errorMissing}</span>
                    )}
                  </InputField>

                  <InputField>
                    <label htmlFor="lastName">
                      {collection_form.lastName.label}
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      id="lastName"
                      placeholder={collection_form.lastName.placeholder}
                      {...register('lastName', { required: true })}
                    />
                    {errors.lastName && (
                      <span>{collection_form.lastName.errorMissing}</span>
                    )}
                  </InputField>

                  <InputField>
                    <label htmlFor="email">email</label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      placeholder={collection_form.email.placeholder}
                      {...register('email', {
                        required: collection_form.email.errorMissing,
                        pattern: {
                          value:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                          message: collection_form.email.errorInvalid,
                        },
                      })}
                    />
                    <span>{errors?.email?.message}</span>
                  </InputField>
                  <SubmitField>
                    <input type="submit" value={collection_form.submit} />
                  </SubmitField>
                </InputGrid>
              </Question>
            </form>
            <ArrowContainer>
              <Arrowx $reveal={qIndex > 0} onClick={prevIndex} $left>
                <Arrow reverse />
              </Arrowx>
              <Arrowx $reveal={aIndex > qIndex} onClick={nextIndex}>
                <Arrow />
              </Arrowx>
            </ArrowContainer>
            <LineContainer $percentage={`${(qIndex * 100) / NUMBER_OF_QS}%`}>
              <Tag $show={qIndex <= 4}>estrategia</Tag>
              <Tag $show={qIndex > 4 && qIndex <= 8}>cultura</Tag>
              <Tag $show={qIndex > 8 && qIndex < NUMBER_OF_QS}>competencia</Tag>
            </LineContainer>
          </QuestionGrid>
        </Fade>
      )}
      {testStatus === 'loading' && (
        <Fade triggerOnce>
          <Loading>
            <p>analizando resultados...</p>
            <span />
          </Loading>
        </Fade>
      )}
      {testStatus === 'done' && (
        <Results results={results} results_section={results_section} />
      )}
    </QuestionSection>
  );
};

export default React.memo(Diagnostico);
