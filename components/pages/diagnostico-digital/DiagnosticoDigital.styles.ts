import styled, { keyframes } from "styled-components";
import { SubmitField } from "components/shared/ContactInputField";

const fadeIn = keyframes`
  from {
    width: 5%;
  }
  to {
    width: 70%;
  }
`;

const Loading = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 30px;
  flex-direction: column;
  min-height: 40vh;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  span:after {
    display: flex;
    margin-top: 20px;
    height: 4px;
    background-color: ${(p) => p.theme.colors.accent};
    content: " ";
    width: 70%;
  }
  span:before {
    content: " ";
    margin-top: 20px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    height: 4px;
    width: 10%;
    animation: 3s ${fadeIn} ease-out infinite;
    animation-iteration-count: infinite;
  }
`;

const Tag = styled.span<{ $show: boolean }>`
  opacity: ${(p) => (p.$show ? 1 : 0)};
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.accent};
  letter-spacing: 4px;
  margin-top: 15px;
  font-size: 1.5rem;
  user-select: none;
  transition: 0.3s ease opacity;
  @media (max-width: 600px) {
    position: absolute;
    text-align: center;
    width: 100%;
  }
`;

const LineContainer = styled.div<{ $percentage: string }>`
  grid-column: 4 / span 8;
  max-width: 800px;
  width: 100%;
  grid-row: 3;
  position: relative;
  display: flex;
  justify-content: space-between;
  &::before {
    height: 2px;
    content: " ";
    display: block;
    width: 100%;
    top: 0;
    position: absolute;
    background-color: ${(p) => p.theme.colors.foreground};
  }
  &::after {
    height: 2px;
    content: " ";
    display: block;
    width: ${(p) => p.$percentage};
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${(p) => p.theme.colors.accent};
    z-index: 2;
    transition: 0.3s 0.3s ease width;
  }
  @media (max-width: 1100px) {
    grid-column-start: 3;
  }
  @media (max-width: 1000px) {
    grid-column: 2 / span 10;
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 12;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 4 / span 8;
  max-width: 800px;
  grid-row: 2;
  z-index: 100;
  @media (max-width: 1100px) {
    grid-column-start: 3;
  }
  @media (max-width: 1000px) {
    grid-column: 2 / span 10;
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 12;
  }
`;

const Arrowx = styled.div<{ $reveal?: boolean; $left?: boolean }>`
  width: 40px;
  height: 30px;
  color: white;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s ease opacity;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg * {
        stroke: ${(props) => props.theme.colors.accent};
        transition: stroke 0.3s ease;
      }
    }
  }
  span {
    width: 40px;
  }
  @media (max-width: 600px) {
    background-color: ${(p) => p.theme.colors.accent};
    border-radius: 50%;
    height: 45px;
    width: 45px;
    span {
      width: 25px;
      margin-top: 14px;
      margin-left: ${(p) => (p.$left ? "9px" : "11px")};
    }
  }
  ${(p) =>
    p.$reveal &&
    `pointer-events: auto;
     opacity: 1;
     `}
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem 2rem;
  width: 100%;
  align-items: flex-start;
  ${SubmitField} {
    margin-top: 30px;
  }
  @media (max-width: 750px) {
    grid-gap: 0 1.4rem;
    ${SubmitField} {
      margin-top: 28px;
    }
  }
`;

const Info = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  label {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    color: ${(p) => p.theme.colors.accent_smalltext};
  }
  h4 {
    font-weight: 100;
    font-size: 2.7rem;
    margin-bottom: 20px;
    line-height: 125%;
  }
  @media (max-width: 600px) {
    h4 {
      font-size: 2rem;
    }
  }
`;

const QuestionGrid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2fr 25px 50px;
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 0 4% 10% 4%;
  position: relative;
  form {
    grid-column: 4 / span 8;
    max-width: 800px;
    position: relative;
  }
  @media (max-width: 1100px) {
    form {
      grid-column-start: 3;
    }
  }
  @media (max-width: 1000px) {
    form {
      grid-column: 2 / span 10;
    }
  }
  @media (max-width: 600px) {
    form {
      grid-column: 1 / span 12;
    }
    grid-template-rows: 2fr 35px 50px;
  }
`;

const Question = styled.div<{ $selected?: boolean; $deselected?: boolean }>`
  position: absolute;
  transform: translateX(10%);
  opacity: 0;
  pointer-events: none;
  ${({ $selected }) =>
    $selected &&
    `transform: translateX(0); 
    pointer-events: auto;
    position:relative;
     opacity: 1;
     transition: 0.4s ease transform, 0.4s 0.1s ease opacity;`}
  ${({ $deselected }) =>
    $deselected &&
    `transform: translateX(-10%); 
     pointer-events: none;
     opacity: 0;
     transition: 0.2s ease transform, 0.3 ease opacity`}
  transition: 0.4s ease transform, 0.4s ease opacity;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:nth-child(3) {
    border-right: 0;
  }
  label {
    color: ${({ theme }) => theme.colors.foreground_low};
    position: relative;
    cursor: pointer;
    padding-left: 35px;
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
    &:hover input ~ span {
      background-color: ${({ theme }) => theme.colors.accent};
    }
    span {
      position: absolute;
      top: 1px;
      left: 0;
      height: 23px;
      width: 23px;
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.foreground_low};
      border-radius: 50%;
      transition: 0.4s ease all;
    }
    input {
      &[type="radio"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ span {
          background-color: ${({ theme }) => theme.colors.accent};
        }
      }
    }
  }
  div > div {
    margin-bottom: 10px;
  }
  h5 {
    color: ${({ theme }) => theme.colors.accent};
    text-align: left;
    font-size: 3.2rem;
    font-weight: 200;
    line-height: 115%;
    margin-top: 0;
    margin-bottom: 20px;
  }
  @media (max-width: 660px) {
    h5 {
      font-size: 2.7rem;
    }
  }
`;

const QuestionSection = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
`;

export {
  Loading,
  Tag,
  LineContainer,
  ArrowContainer,
  Arrowx,
  InputGrid,
  Info,
  QuestionGrid,
  Question,
  QuestionSection
};
