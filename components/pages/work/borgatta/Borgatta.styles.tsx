import styled from "styled-components";
import PageWrapper from "components/layout/PageWrapper";
import CommonSection from "components/work/CommonSection";

const H2_TITLE = "#d76e32";
const BODY_TEXT1 = "#FFFFFF";
const BODY_TEXT2 = "#626262";

const BACKGROUND_COLOR_SECTION = "#fbfbfd";
const MAIN_GRADIENT =
  "linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(123.72deg, #E3772D 18.96%, #F2B559 114.27%);";

export const PageWrapperBorgatta = styled(PageWrapper)`
  background: ${MAIN_GRADIENT};
  background-blend-mode: normal, overlay, normal;
`;

export const FirstSection = styled(CommonSection)`
  color: ${BODY_TEXT1};
  padding-bottom: 10.7%;

  .h2 {
    padding-bottom: 4px;
    b {
      opacity: 0.7;
      font-weight: 400;
    }
  }
  .h3 {
    padding-top: 0px;
    font-size: 3.2rem;
  }

  .image {
    max-width: 982px;
  }

  @media (max-width: 1000px) {
    .h3 {
      font-size: 3rem;
    }
    .image {
      padding: 0% 3%;
    }
  }
  @media (max-width: 630px) {
    .h3 {
      font-size: 1.9rem;
    }
  }
`;

export const LessonContainer = styled.div`
  padding-top: 9%;
  padding-bottom: 14%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 159px 181px 159px;
  gap: 32px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Lesson = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border-radius: 24px;

  &:nth-child(1),
  &:nth-child(5) {
    width: 320px;
  }
  &:nth-child(2) {
    width: 348px;
    margin-left: -21%;
  }
  &:nth-child(3) {
    width: 394px;
  }
  &:nth-child(4) {
    width: 274px;
  }
  p {
    font-size: 1.65rem;
    margin: 20px 24px 24px 24px;
  }
  span {
    display: flex;
    justify-content: center;
    font-size: 1.367rem;
    border: 2px solid ${BODY_TEXT1};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 24px;
  }

  @media (max-width: 800px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      width: 100%;
      margin-left: 0px;
    }
    p {
      margin: 20px;
      font-size: 1.5rem;
    }
    span {
      margin: 20px 20px 16px 20px;
    }
  }
`;

export const SecondSection = styled(CommonSection)`
  background-color: ${BACKGROUND_COLOR_SECTION};
  color: ${BODY_TEXT2};
  padding-bottom: 11.11%;

  .h2 {
    color: ${H2_TITLE};
    b {
      opacity: 0.7;
      font-weight: 400;
    }
  }
`;

export const AspectContainer = styled.div`
  padding: 6.7% 15.53%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 5%;
  grid-row-gap: 9%;

  @media (max-width: 1000px) {
    padding: 6.7% 3.5%;
  }
  @media (max-width: 630px) {
    padding: 6.7% 5%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Aspect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  box-shadow:
    0px 2px 0px rgba(162, 162, 162, 0.1),
    0px 1px 3px rgba(162, 162, 162, 0.1),
    0px 0px 8px rgba(162, 162, 162, 0.1);
  border-radius: 32px;
  padding: 24px;
  .h4 {
    color: #060809;
    font-weight: 500;
    margin-bottom: 12px;
    margin-top: 8px;
  }
  p {
    font-size: 1.65rem;
  }
  @media (max-width: 630px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export const ThirdSection = styled(CommonSection)`
  padding-bottom: 10%;
  color: ${BODY_TEXT1};
  background-blend-mode: normal, overlay, normal;
  .h2 b {
    opacity: 0.7;
    font-weight: 400;
  }
`;

export const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 24px;
  padding: 0 15.27%;
  margin-top: 100px;
  margin-bottom: -6%;

  .result3 {
    margin-top: -11%;
  }

  .result5 {
    margin-top: -4%;
  }

  @media (max-width: 1000px) {
    padding: 0 5%;
  }
  @media (max-width: 800px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    .result3 {
      margin-top: 0%;
    }

    .result5 {
      margin-top: 0%;
    }
  }
  @media (max-width: 630px) {
    margin-bottom: 63px;
    margin-top: 48px;
  }
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 32px;
  max-width: 488px;

  .h2,
  .h3,
  .h4 {
    font-weight: 500;
  }

  .h2 {
    font-size: 7rem;
    line-height: 6.5rem;
    padding: 0px;
  }
  .h3 {
    font-size: 4.5rem;
    padding-top: 0px;
  }
  .h4 {
    font-size: 3.4rem;
  }
  p {
    padding-top: 1rem;
  }

  div span {
    display: flex;
    align-items: baseline;

    div {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      .h3 {
        font-size: 4.8rem;
        padding-bottom: 0;
        padding-left: 12px;
      }
    }
  }

  @media (max-width: 1000px) {
    .h2 {
      font-size: 6.8rem;
    }
    .h3 {
      font-size: 4.2rem;
    }
    div span div .h3 {
      font-size: 4.2rem;
    }
  }
  @media (max-width: 630px) {
    padding: 20px;
    .h2 {
      font-size: 5.6rem;
    }
    .h3 {
      font-size: 3.6rem;
    }
    div span div .h3 {
      font-size: 3.6rem;
    }
  }
`;

export const FourthSection = styled(CommonSection)`
  background-color: #f4f4f4;
  color: ${BODY_TEXT2};
  .h2 {
    color: ${H2_TITLE};
    b {
      opacity: 0.7;
      font-weight: 400;
    }
  }
`;
