import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { keyframes } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import delayForLoading from '../../utils/delayForLoading';
import InputField from './ContactInputField';
import { ButtonSubmit } from '../ui/Button/ButtonSubmit';
const NamedForm = ({ text, onSubmit, formMarkup, successMarkup, id, infinite, }) => {
    const [formStatus, setFormStatus] = useState('');
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmitInside = (data) => {
        setFormStatus('loading');
        onSubmit(data);
        !infinite && delayForLoading(1500).then(() => setFormStatus('done'));
    };
    return (_jsxs(_Fragment, { children: [formStatus === '' && (_jsxs(_Fragment, { children: [formMarkup, _jsxs("form", { onSubmit: handleSubmit(onSubmitInside), children: [_jsxs(InputField, { children: [_jsx("label", { htmlFor: `${id}firstName`, children: text.firstName.label }), _jsx("input", { name: "firstName", id: `${id}firstName`, type: "text", placeholder: text.firstName.placeholder, ...register('firstName', { required: true }) }), errors.firstName && _jsx("span", { children: text.firstName.errorMissing })] }), _jsxs(InputField, { children: [_jsx("label", { htmlFor: `${id}lastName`, children: text.lastName.label }), _jsx("input", { name: "lastName", id: `${id}lastName`, type: "text", placeholder: text.lastName.placeholder, ...register('lastName', { required: true }) }), errors.lastName && _jsx("span", { children: text.lastName.errorMissing })] }), _jsxs(InputField, { children: [_jsx("label", { htmlFor: `${id}email`, children: "email" }), _jsx("input", { name: "email", id: `${id}email`, type: "email", placeholder: text.email.placeholder, ...register('email', {
                                            required: text.email.errorMissing,
                                            pattern: {
                                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                                                message: text.email.errorInvalid,
                                            },
                                        }) }), _jsx("span", { children: errors?.email?.message })] }), _jsx(ButtonSubmit, { text: text.submit, className: "mt-3" })] })] })), formStatus === 'loading' && (_jsx(Fade, { triggerOnce: true, children: _jsx(Loading, { children: _jsx("p", { children: text.loading }) }) })), formStatus === 'done' && successMarkup] }));
};
export default NamedForm;
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
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 10%;
  padding-top: 5%;
  flex-direction: column;
  p {
    margin-bottom: 5px;
  }
  &:after {
    display: flex;
    height: 2px;
    background-color: ${(p) => p.theme.colors.accent};
    content: ' ';
    width: 100%;
  }
  &:before {
    content: ' ';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    height: 4px;
    margin-top: 35px;
    width: 10%;
    animation: 3s ${fadeIn} ease-out infinite;
    animation-iteration-count: infinite;
  }
`;
