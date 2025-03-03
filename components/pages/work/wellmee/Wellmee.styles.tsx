import styled from 'styled-components';
import PageWrapper from 'components/layout/PageWrapper';
import CommonSection from 'components/pages/work/CommonSection';

const h2Title = '#383955';
const bodyText1 = '#4a4a73';
const bodyText2 = '#FFFFFF';
const bAccent1 = '#00ceba';
const backgroundColorSection = '#5a5a8c';
const backgroundColorMain = '#f3f6f3';

export const PageClipperWellmee = styled(PageWrapper)`
  background-color: ${backgroundColorMain};
  @media (max-width: 1300px) {
    padding: 0px;
  }
`;

export const FirstSection = styled(CommonSection)`
  padding-bottom: 10.7%;
  background-image: url('/assets/img/casestudies/wellmee/Background1.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0% 30%;
  color: ${h2Title};
  .h2 b {
    color: ${bAccent1};
    font-weight: 200;
  }

  p {
    color: ${bodyText1};
  }

  .h3 {
    color: ${h2Title};
    font-size: 3.6rem;
    margin: 0px;
  }

  @media (max-width: 1000px) {
    background-position: 0% 33%;
    .h3 {
      font-size: 3rem;
    }
  }

  @media (max-width: 800px) {
    background-position: 0% 35%;
  }

  @media (max-width: 630px) {
    background-position: 0% 31%;
    .h3 {
      font-size: 1.9rem;
    }
  }
`;

export const CombinatorContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 8% 7% 0% 7%;

  div {
    max-width: 342px;
    span {
      box-shadow: 0px 0px 32px 0px rgba(95, 95, 131, 0.05);
    }
  }
`;

export const ChallengesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  padding-top: 1.8rem;
  max-width: 670px;

  @media (max-width: 630px) {
    padding-bottom: 4.8rem;
    gap: 32px;
    padding-top: 0rem;

    & > div:nth-child(1) {
      padding-top: 1.5rem;
    }
  }
`;

export const Challenge = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #383955;
    border-radius: 50%;
    width: 31px;
    height: 31px;
    min-width: 31px;
    margin-top: 0.5%;
    p {
      color: ${bodyText2};
      margin-bottom: 1px;
      margin-left: 1px;
      font-weight: 500;
    }
  }

  div {
    gap: 20px;
    display: flex;
    flex-direction: column;
    .h5 {
      font-size: 2.4rem;
      font-weight: 500;
    }
  }

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    gap: 12px;

    span {
      width: 24px;
      min-width: 24px;
      height: 24px;
      p {
        font-size: 1.4rem;
        position: relative;
        bottom: 1px;
        right: 0.5px;
      }
    }

    div .h5 {
      font-size: 1.9rem;
    }
  }
`;

export const SecondSection = styled(CommonSection)`
  background-color: ${backgroundColorSection};
  padding-bottom: 11%;
  color: ${bodyText2};

  .h2 b {
    color: ${bAccent1};
    font-weight: 200;
  }
`;

export const ThirdSection = styled(CommonSection)`
  padding-bottom: 10%;
  color: ${bodyText1};
  background-image: url('/assets/img/casestudies/wellmee/Background2.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0% 69%;

  .h2 {
    color: ${h2Title};
    b {
      color: ${bAccent1};
      font-weight: 200;
    }
  }
  .h3 {
    color: ${h2Title};
    font-size: 3.6rem;
    font-weight: 400;
    padding: 7.5% 0 0 0;
    margin-bottom: 12px;
  }

  @media (max-width: 1000px) {
    background-position: 0% 56%;
    h3 {
      font-size: 3rem;
    }
  }
  @media (max-width: 630px) {
    background-position: 0% 61%;
    .h3 {
      font-size: 1.9rem;
    }
    div div span p {
      font-size: 1.4rem;
      position: relative;
      bottom: 1.5px;
    }
    .image {
      padding-top: 4.8rem;
      position: relative;
      left: 3%;
    }
  }
`;

export const PointContainer = styled.div`
  margin-top: 75px;

  @media (max-width: 900px) {
    margin-top: 60px;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

export const Point = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 648px;

    p {
      padding-bottom: 48px;
    }

    .number {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #383955;
      min-width: 31px;
      max-width: 31px;
      height: 31px;
      color: ${bodyText2};
      border-radius: 50%;
      p {
        padding-bottom: 0px;
      }
    }
  }

  .point4 {
    max-width: 600px;
    padding: 0% 5%;
    span span {
      box-shadow: 1.20374px 1.20374px 13.24111px 0px rgba(64, 64, 64, 0.05);
    }
  }

  @media (max-width: 800px) {
    .point4 {
      max-width: 350px;
      align-self: center;
    }
    div {
      .number {
        min-width: 24px;
        max-width: 24px;
        height: 24px;
      }
    }
  }

  @media (max-width: 500px) {
    div {
      display: flex;
      flex-direction: column;
      gap: 16px;
      p {
        padding-bottom: 40px;
      }
    }
    .point4 {
      max-width: 231px;
    }
  }
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  background-image: url('/assets/img/casestudies/wellmee/Background4.svg');
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center 18%;
  padding: 0% 3%;
  padding-bottom: 100px;

  @media (max-width: 900px) {
    gap: 46px;
    background-position: center 15%;
  }

  @media (max-width: 740px) {
    background-image: url('/assets/img/casestudies/wellmee/Background5.svg');
    background-size: 10% 80%;
    background-position: 11% 0%;
    flex-direction: column;
    gap: 32px;
    padding-bottom: 50px;
  }
  @media (max-width: 630px) {
    background-size: 12.5% 90%;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  gap: 24px;
  max-width: 148px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    background-color: #fcfdfc;
    border-radius: 24px;
    box-shadow: 1.20374px 1.20374px 13.24111px 0px rgba(64, 64, 64, 0.05);
  }

  p {
    text-align: center;
    font-weight: 500;
    color: ${bodyText1};
  }

  @media (max-width: 900px) {
    div {
      width: 100px;
      height: 100px;
      border-radius: 20px;
    }
    p {
      font-size: 16.5px;
    }
  }

  @media (max-width: 740px) {
    display: flex;
    flex-direction: row !important;
    max-width: 100%;

    div {
      width: 80px;
      height: 80px;
    }
    p {
      font-size: 1.5rem;
      text-align: start;
    }
  }
`;

export const ContainerResultCard = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  max-width: 795px;
  padding: 60px 0;

  & > div {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 32px;
    max-width: 441px;
    max-height: 305px;
    color: #383955;
    padding: 40px;
    box-shadow: 1.20374px 1.20374px 13.24111px 0px rgba(64, 64, 64, 0.05);

    div {
      display: flex;
      flex-direction: row;
      align-items: end;
      gap: 5px;
    }

    .h3,
    .h5 {
      font-weight: 400;
      color: ${h2Title};
    }

    .h3 {
      font-size: 8rem;
      margin: 0px;
      padding: 0px;
      line-height: 100%;
    }
    .h4 {
      font-size: 4.8rem;
      line-height: 1;
      padding-bottom: 4px;
      color: ${h2Title};
    }
    .h5 {
      font-size: 3.4rem;
      margin: 0px;
    }
    p {
      color: #8a8cb2;
    }
  }

  .result0 {
    max-width: 329px;
    max-height: 305px;
  }
  .result1 {
    max-width: 441px;
    max-height: 257px;
    align-self: end;
    position: relative;
    left: -12px;
  }
  .result2 {
    max-width: 323px;
    max-height: 209px;
    justify-self: end;
  }
  .result3 {
    max-width: 394px;
    max-height: 281px;
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    padding: 60px 20px;

    .result0,
    .result1,
    .result2,
    .result3 {
      max-width: 299px;
    }

    .result1 {
      left: 0px;
    }

    & > div {
      .h3 {
        font-size: 5.6rem;
      }
      .h4,
      .h5 {
        font-size: 3.4rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 40px 38px 48px 38px;
    & > div {
      padding: 20px;
    }

    .result0 div,
    .result2 div {
      flex-direction: column;
      align-items: start;
    }
    .result0 div {
      width: 50%;
    }
    .result3 div {
      flex-wrap: wrap;
      h4 {
        flex: 1 0 78%;
      }
    }
  }
`;

export const FourthSection = styled(CommonSection)`
  background-color: ${backgroundColorSection};
  color: ${bodyText2};
  background-image: url('/assets/img/casestudies/wellmee/Background3.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;

  .h2 b {
    color: #00ceba;
    font-weight: 200;
  }

  img {
    padding-bottom: 8% !important;
    padding-top: 17% !important;
  }

  @media (max-width: 1000px) {
    img {
      padding-bottom: 0% !important;
      padding-top: 10% !important;
    }
  }
`;
