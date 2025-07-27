import styled from 'styled-components';
import CommonSection from 'components/pages/work/CommonSection';

export const fierasRed = 'rgb(201,32,26)';

export const SequenceContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 4% auto;
`;

export const MacContact = styled.div`
  max-width: 670px;
  margin: 5% 0;
  img {
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 500px) {
    max-width: 480px;
  }
`;

export const Faces = styled.div`
  max-width: 670px;
  margin: 5% 0 0;
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
  @media (max-width: 700px) {
    margin: 8% 0 5%;
  }
`;

export const MacPress = styled.div`
  max-width: 830px;
  width: 100%;
  margin: 4% 0 -9% 0;
  img {
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 1050px) {
    margin: 8% 0 -9% 0;
  }
  @media (max-width: 450px) {
    margin: 8% 0 -7% 0;
  }
`;

export const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 670px;
  margin: 10% 0 20% 0;
  width: 100%;
  svg {
    height: 100%;
    max-width: 100%;
    max-height: 188px;
    width: auto;
    justify-self: center;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 0 5%;
    .image {
      max-width: 400px;
      align-self: center;
      margin-bottom: 15%;
    }
  }
  @media (max-width: 450px) {
    padding: 0;
    svg {
      height: auto;
      width: 30%;
      align-self: center;
    }
  }
`;

export const Type = styled.div`
  max-width: 670px;
  width: 100%;
  svg {
    width: 100%;
  }
  @media (max-width: 800px) {
    padding: 0 10%;
  }
  @media (max-width: 600px) {
    padding: 0 15%;
    p {
      display: none;
    }
  }
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 12%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 140%;
    &:before {
      content: ' ';
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
    &:nth-child(1) {
      grid-column: 1 / span 1;
      &:before {
        background-color: ${fierasRed};
      }
    }
    &:nth-child(2) {
      grid-column: 4 / span 1;
      &:before {
        background-color: #080b0c;
        border: 2px solid white;
      }
    }
    &:nth-child(3) {
      grid-column: 5 / span 1;
      &:before {
        background-color: #f4f4f4;
      }
    }
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    div {
      font-size: 1.6rem;
      align-items: center;
      &:before {
        width: 40px;
        height: 40px;
      }
    }
  }
  @media (max-width: 600px) {
    div {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 450px) {
    div {
      font-size: 1.1rem;
    }
  }
`;

export const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    margin-top: 30%;
  }
`;

export const TransitionWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  & > div {
    max-width: 1300px;
    padding: 0 5%;
    width: 100%;
    margin: 0 auto;
    z-index: 1;
  }
  picture {
    img {
      width: 100%;
      max-width: 100%;
    }
  }
  &:before {
    content: ' ';
    z-index: 0;
    position: absolute;
    height: 50%;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const PosterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 4.65fr;
  grid-template-rows: 1fr 3fr;
  grid-gap: 2rem;
  max-width: 1200px;
  margin: 5% 5% 12% 5%;
  width: 90%;
  position: relative;
  svg {
    path {
      stroke-width: ${(props) => props.theme.stroke};
    }
  }
  & > div {
    z-index: 1;
    max-width: 100%;
    width: 100%;
    img {
      max-width: 100%;
      width: 100%;
    }
    &:nth-of-type(1) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 0;
    }
    &:nth-of-type(5) {
      grid-column: 2 / span 3;
      grid-row: 2 / span 1;
    }
    &:nth-of-type(6) {
      grid-column: 6 / span 1;
      grid-row: 1 / span 2;
    }
  }
  @media (max-width: 900px) {
    & > div {
      &:nth-of-type(5) {
        grid-column: 1 / span 3;
      }
      &:nth-of-type(6) {
        grid-column: 4 / span 3;
      }
    }
  }
  @media (max-width: 450px) {
    grid-template-rows: 1fr 1fr 5fr;
    margin-bottom: 20px;
    svg {
      display: none;
    }
    & > div {
      grid-column-end: span 2;
      &:nth-of-type(5) {
        grid-row: 1 / span 2;
        grid-column: 5 / span 2;
      }
      &:nth-of-type(6) {
        grid-row: 3 / span 1;
        grid-column: 1 / span 6;
      }
    }
  }
`;

export const Stat = styled.div`
  position: relative;
  margin: 12% auto;
  max-width: 310px;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.foreground};
  span {
    font-size: 8rem;
    font-weight: 300;
    display: block;
    text-align: center;
    z-index: 1;
    line-height: 1.3;
    margin-top: -20px;
    b {
      color: ${fierasRed};
    }
  }
  p {
    z-index: 1;
  }
  svg {
    position: absolute;
    margin: 0 auto;
    width: 15%;
    display: flex;
    z-index: 0;
    align-self: center;
    top: -12px;
  }
  @media (max-width: 700px) {
    max-width: 330px;
    margin: 16% auto 12%;
  }
  @media (max-width: 600px) {
    max-width: 240px;
    margin: 20% auto 14%;
    b {
      font-size: 6rem;
    }
    svg {
      width: 13%;
    }
  }
  @media (max-width: 400px) {
    margin: 14% auto 14%;
  }
`;

export const Sixth = styled(CommonSection)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  background-image: url('/assets/img/casestudies/ladanzadelasfieras/sixthBack.svg');
  background-position: center bottom;
  background-size: cover;
  a {
    font-size: 4.5rem;
    text-decoration: none;
    line-height: 100%;
    border-bottom: 3px solid ${(props) => props.theme.colors.foreground};
  }
  & > div {
    margin-bottom: 5%;
  }
  @media (max-width: 900px) {
    background-position: left top;
    a {
      font-size: 3rem;
    }
  }
  @media (max-width: 600px) {
    a {
      font-size: 2rem;
    }
  }
  @media (max-width: 500px), (max-height: 450px) {
    & > div {
      display: contents;
    }
    a {
      font-size: 1.5rem;
      padding: 5%;
      border-radius: 8px;
      background-color: ${fierasRed};
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
      border: 0;
      transition: 0.2s ease-out all;
      &:active,
      &:focus {
        transform: scale(0.95);
      }
    }
  }
`;

export const Fifth = styled(CommonSection)`
  background-color: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.background};
  padding-bottom: 10%;
  .h2 b {
    color: ${fierasRed};
  }
  .image {
    max-width: 670px;
    margin: 5% 0 12% 0;
  }
`;

export const Fourth = styled(CommonSection)`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground_low};
  margin-bottom: 10%;
  video {
    width: 100%;
    max-width: 670px;
    margin-top: 12%;
  }
  .h3 {
    color: ${(props) => props.theme.colors.foreground};
  }
`;

export const Third = styled(CommonSection)`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
`;

export const Section_Pre = styled(CommonSection)`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  padding: 10% 0%;
  @media (max-width: 1000px) {
    padding-top: 20%;
  }
`;

export const Section_Sub = styled(CommonSection)`
  color: ${(props) => props.theme.colors.background};
  background-color: ${fierasRed};
  padding-bottom: 2%;
`;

export const SecondSection = styled(CommonSection)`
  background-color: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.background};
  .h2 {
    color: ${(props) => props.theme.colors.background};
    b {
      color: ${fierasRed};
    }
  }
`;

export const LaurelNumbers = styled.div`
  display: flex;
  width: 100%;
  margin: 10% auto;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    width: 100%;
  }
  li {
    list-style: none;
    text-align: center;
    margin-top: -20px;
  }
  svg {
    width: 20%;
    max-width: 70px;
    transform-origin: 50% 50%;
    * {
      fill: ${(props) => props.theme.colors.foreground};
    }
    &:nth-of-type(2) {
      transform: scaleX(-1);
    }
  }
  p {
    width: 100%;
    line-height: 1;
  }
  b {
    font-size: 11.7rem;
    font-weight: 300;
    line-height: 1;
  }
  @media (max-width: 700px) {
    ul {
      padding: 0 5%;
    }
    b {
      font-size: 10rem;
    }
  }
  @media (max-width: 600px) {
    p {
      color: ${(props) => props.theme.colors.foreground_low};
      margin-top: -5px;
    }
    b {
      font-size: 9rem;
    }
    svg {
      max-width: 50px;
    }
  }
  @media (max-width: 500px) {
    b {
      font-size: 7rem;
    }
    svg {
      max-width: 40px;
    }
  }
  @media (max-width: 400px) {
    ul {
      padding: 0 10px;
      li {
        margin-top: -10px;
      }
    }
    p {
      margin-top: 0px;
      font-size: 1.3rem;
    }
    b {
      font-size: 5rem;
    }
    svg {
      max-width: 30px;
    }
  }
`;

export const FirstSection = styled(CommonSection)`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
  padding-bottom: 10%;
  .h2 b {
    color: ${fierasRed};
  }
`;

export const LandSection = styled(CommonSection)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  background-image: url('/assets/img/casestudies/ladanzadelasfieras/landBack.svg');
  background-position: center bottom;
  background-size: cover;
  & > div {
    max-width: 650px;
    width: 70%;
  }
  svg {
    width: 100%;
  }
`;
