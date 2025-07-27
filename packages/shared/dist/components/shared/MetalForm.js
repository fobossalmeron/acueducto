import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { keyframes } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import delayForLoading from '../../utils/delayForLoading';
import InputField from './ContactInputField';
import { ButtonSubmit } from '../ui/Button/ButtonSubmit';
const MetalForm = ({ text, onSubmit, id }) => {
    const [formStatus, setFormStatus] = useState('');
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmitInside = (data) => {
        setFormStatus('loading');
        onSubmit(data);
        delayForLoading(1500).then(() => setFormStatus('done'));
    };
    return (_jsxs(_Fragment, { children: [formStatus === '' && (_jsx(Fade, { triggerOnce: true, children: _jsxs(PillForm, { onSubmit: handleSubmit(onSubmitInside), className: "w-fit items-center gap-3", children: [_jsxs(InputField, { children: [_jsx("label", { htmlFor: `${id}email`, children: "Email" }), _jsx("input", { name: "email", id: `${id}email`, type: "email", placeholder: text.email.placeholder, ...register('email', {
                                        required: text.email.errorMissing,
                                        pattern: {
                                            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                                            message: text.email.errorInvalid,
                                        },
                                    }) }), errors?.email && (_jsx(Fade, { className: "absolute -bottom-8", children: _jsx("span", { children: errors?.email?.message }) }))] }), _jsx(ButtonSubmit, { text: text.submit })] }) })), formStatus === 'loading' && (_jsx(Fade, { triggerOnce: true, children: _jsx(Loading, {}) })), formStatus === 'done' && (_jsx(Fade, { triggerOnce: true, children: _jsx(Success, { children: _jsx("p", { children: text.success }) }) }))] }));
};
export default MetalForm;
const PillForm = styled.form `
  position: relative;
  display: flex;
  margin-top: 6%;
  text-align: left;
  background-color: ${(p) => p.theme.colors.background};
  padding: 10px 10px;
  border-radius: 400px;
  border: 1px solid ${(p) => p.theme.colors.foreground_lowest};
  & div:nth-of-type(1) {
    width: auto;
    margin: 0;
    input {
      border-radius: 200px;
      height: 100% !important;
      padding-left: 22px;
      padding-top: 18px;
      padding-bottom: 19px;
    }
  }
  label {
    opacity: 0;
    font-size: 0;
    margin: 0;
  }
  @media (max-width: 800px) {
  }
`;
const fadeIn = keyframes `
  from {
    width: 5%;
  }
  to {
    width: 100%;
  }
`;
const Loading = styled.div `
  width: 100%;
  max-width: 445px;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  margin-top: 6%;
  flex-direction: column;
  border: 2px solid ${(p) => p.theme.colors.accent};
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  p {
    margin-bottom: 5px;
  }
  &:before {
    content: ' ';
    background-color: ${(p) => p.theme.colors.accent};
    height: 53px;
    border-radius: 40px;
    width: 10%;
    animation: 3s ${fadeIn} ease-out infinite;
    animation-iteration-count: infinite;
  }
`;
const Success = styled.div `
  border: ${(p) => p.theme.colors.success} solid 1px;
  background-color: #c1f1d5;
  border-radius: 18px;
  width: auto;
  display: inline-flex;
  padding: 12px 22px 14px;
  align-self: flex-start;
  margin-top: 6%;
  justify-self: flex-start;
  p {
    padding-top: 0;
    max-width: unset;
    align-self: center;
    color: #1c7d45 !important;
  }
`;
