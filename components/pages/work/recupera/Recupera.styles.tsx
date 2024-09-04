import styled from "styled-components";
import PageWrapper from "components/layout/PageWrapper";
import CommonSection from "components/work/CommonSection";

const h2Title = "#292D34";
const bodyText1 = "#FFFFFF";
const bodyText2 = "#5C5C81";
const bAccent1 = "#FAD166";
const bAccent2 = "#7368F8";
const backgroundColorSection = "#FEFAF5";
const mainGradient = "linear-gradient(46deg, #6239d9 0%, #5c50ed 100%)";

export {
  PageClipperRecupera,
  LandSection,
  FirstSection,
  SecondSection,
  ChallengesContainer,
  Challenge,
  ThirdSection,
  ThirdPoint,
  FourthSection,
  DesktopAndMobile,
};

const PageClipperRecupera = styled(PageWrapper)`
  background: ${mainGradient};
  @media (max-width: 1300px) {
    padding: 0px;
  }
`;

const LandSection = styled(CommonSection)`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img,
  svg {
    width: 100%;
    height: auto;
  }
  .logo {
    min-width: 223px;
    max-width: 30em;
    right: -10%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-bottom: 5%;
    }
    h1 {
      text-align: center;
      max-width: 380px;
      font-weight: 100;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: space-evenly;
    .logo {
      width: 223px;
      right: 0%;
    }
    .brand1 {
      align-self: flex-start;
    }
    .brand2 {
      align-self: flex-end;
    }
  }
`;

const FirstSection = styled(CommonSection)`
  color: ${bodyText1};
  padding-bottom: 10.7%;

  .h2 {
    b {
      color: ${bAccent1};
      font-weight: 200;
    }
  }
`;

const SecondSection = styled(CommonSection)`
  background-color: ${backgroundColorSection};
  color: ${bodyText2};
  padding-bottom: 11.11%;

  .h2 {
    color: ${h2Title};
    b {
      color: ${bAccent2};
      font-weight: 200;
    }
  }
`;

const ChallengesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 4.8rem;
  padding-bottom: 10rem;

  @media (max-width: 630px) {
    padding-bottom: 4.8rem;
  }
`;

const Challenge = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  p {
    max-width: 640px;
  }
  span {
    width: 31.1px;
    height: 31.1px;
    min-width: 31px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${backgroundColorSection};
    background-color: ${bAccent2};
    p {
      font-weight: 500;
      line-height: 18px;
      text-align: center;
      margin-bottom: 2px;
    }
  }

  @media (max-width: 630px) {
    flex-direction: column;
    gap: 12px;
    span {
      width: 24px;
      height: 24px;
      min-width: 24px;
    }
  }
`;

const ThirdSection = styled(CommonSection)`
  background-color: #6239d9;
  color: ${bodyText1};
  .h2 {
    color: #f3f4f5;
    b {
      color: ${bAccent1};
      font-weight: 200;
    }
  }
  .h3 {
    font-size: 3.6rem;
    padding: 7.5% 0 0 0;
    margin-bottom: 12px;
  }

  @media (max-width: 630px) {
    .h3 {
      font-size: 2.1rem;
    }
  }
`;

const ThirdPoint = styled.div`
  .h3 {
    padding-top: 0%;
  }
  .image {
    max-width: 630px;
    padding: 6.7rem 0 9rem 0;
  }
  @media (max-width: 630px) {
    .image {
      padding-top: 5rem;
    }
  }
`;

const FourthSection = styled(CommonSection)`
  color: ${bodyText2};
  background-color: ${backgroundColorSection};

  .h2 {
    color: ${h2Title};
    b {
      color: ${bAccent2};
      font-weight: 200;
    }
  }
`;

const DesktopAndMobile = styled.div`
  background-image: url("/assets/img/casestudies/recupera/backgroundDesktopMobile.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 3rem;
  img {
    width: 100%;
    height: auto;
  }
  .image {
    max-width: 1458px;
    position: relative;
    right: -18%;
    padding: 7% 0% 0% 0%;
  }
`;
