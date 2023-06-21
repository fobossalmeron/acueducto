import styled from "styled-components";
import CommonSection from "components/caseStudy/shared/CommonSection";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Landing1 from "public/assets/img/casestudies/borgatta/landing1.png";
import Landing2 from "public/assets/img/casestudies/borgatta/landing2.png";

const Landing = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {

    window.addEventListener("resize", function(){
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

  }, [isMobile]);

  return (
  <LandSection>
    <Fade delay={1100} triggerOnce>
      <LogoBorgatta>
        {!isMobile 
            ? <img
                src="/assets/img/casestudies/borgatta/brand-md.svg"
                alt="Web B360"
              />
            : <img
                src="/assets/img/casestudies/borgatta/brand-sm.svg"
                alt="Web B360"
              />
        }
        </LogoBorgatta>
    </Fade>
    {!isMobile ? (
      <PicturesContainer>
        <FirstColumn>
          <Fade delay={1300} direction="up" triggerOnce>
            <Image
              src={Landing1}
              alt="Web B360"
            />
          </Fade>
          <Fade delay={1100} direction="up" triggerOnce>
            <img
              src={Landing2}
              alt="Web B360"
              className="landing2"
            />
          </Fade>
        </FirstColumn>
        <SecondColumn>
          <Fade delay={1500} direction="up" triggerOnce>
            <img
              src="/assets/img/casestudies/borgatta/landing3.png"
              alt="Web B360"
            />
          </Fade>
        </SecondColumn>
        <ThirdColumn>
          <Fade delay={1400} direction="up" triggerOnce>
            <img
              src="/assets/img/casestudies/borgatta/landing4.png"
              alt="Web B360"
            />
          </Fade>
        </ThirdColumn>
        <FourthColumn>
          <Fade delay={1150} direction="up" triggerOnce>
            <img
              src="/assets/img/casestudies/borgatta/landing5.png"
              alt="Web B360"
            />
          </Fade>
          <Fade delay={1250} direction="up" triggerOnce>
            <img
              src="/assets/img/casestudies/borgatta/landing6.png"
              alt="Web B360"
              className="landing6"
            />
          </Fade>
        </FourthColumn>
        <FifthColumn>
          <Fade delay={1600} direction="up" triggerOnce>
            <img
              src="/assets/img/casestudies/borgatta/landing7.png"
              alt="Web B360"
            />
          </Fade>
          <Fade delay={1500} direction="up" triggerOnce>
            <img
              src="/assets/img/casestudies/borgatta/landing8.png"
              alt="Web B360"
              className="landing8"
            />
          </Fade>
        </FifthColumn>
      </PicturesContainer>
      ) : (
        <PicturesContainerMobile>
          <FirstRowMobile>
            <Fade delay={1300} direction="up" triggerOnce>
              <img
                src="/assets/img/casestudies/borgatta/landingMobile1.png"
                alt="Web B360"
              />
            </Fade>
            <Fade delay={1100} direction="up" triggerOnce>
              <img
                src="/assets/img/casestudies/borgatta/landingMobile2.png"
                alt="Web B360"
              />
            </Fade>
            <Fade delay={1100} direction="up" triggerOnce>
              <img
                src="/assets/img/casestudies/borgatta/landingMobile4.png"
                alt="Web B360"
              />
            </Fade>
          </FirstRowMobile>
          <SecondRowMobile>
            <Fade delay={1500} direction="up" triggerOnce>
              <img
                src="/assets/img/casestudies/borgatta/landingMobile3.png"
                alt="Web B360"
              />
            </Fade>
            <Fade delay={1500} direction="up" triggerOnce>
              <img
                src="/assets/img/casestudies/borgatta/landingMobile5.png"
                alt="Web B360"
              />
            </Fade>
            <Fade delay={1500} direction="up" triggerOnce>
              <img
                src="/assets/img/casestudies/borgatta/landingMobile6.png"
                alt="Web B360"
              />
            </Fade>
          </SecondRowMobile>
        </PicturesContainerMobile>
      )
    }
  </LandSection>)
};

export default Landing;

const LogoBorgatta = styled.div`
  width: 100%; 
  display: flex;
  justify-content: center;

  img {
    max-height: 96px;
    min-width: 400px;
    width: 100%;
  }

  @media (max-width: 600px) {
    img {
      min-height: 124px;
    }
  }
`;

const PicturesContainer = styled.span`
  display: flex;
  flex-direction: row;
  gap: 2%;
  min-height: 52vh;
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3.5%;
  img {
    width: 100%;
    height: 100%;
  }
  .landing2 {
    max-width: 120px;
  }
  @media (max-width: 1000px) {
    .landing2{
      max-width: 74.3px;
      max-height: 54.5px;
    }
  }
`;

const SecondColumn = styled.span`
  margin-top: 6%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ThirdColumn = styled.span`
  margin-top: 11%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const FourthColumn = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4%;
  margin-top: 6%;
  img {
    width: 100%;
    height: 100%;
  }
  .landing6 {
    max-width: 174px;
  }
  @media (max-width: 1000px) {
    .landing6{
      max-width: 107.9px;
      max-height: 70px;
    }
  }
`;

const FifthColumn = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4%;
  img {
    width: 100%;
    height: 100%;
  }
  .landing8{
    max-width: 93px;
  }
  @media (max-width: 1000px) {
    .landing8{
      max-width: 57.6px;
      max-height: 57.6px;
    }
  }
`;

const PicturesContainerMobile = styled.span`
  display: flex;
  flex-direction: column;
  gap: 3%;
`;

const FirstRowMobile = styled.span`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 2%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SecondRowMobile = styled.span`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 2%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LandSection = styled(CommonSection)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2%;
    width: 100%;
  }
  & > span {
    width: 100%;
    .span{
      width: 100%;
    }
  }
  @media (max-width: 1300px) {
    min-height: 94vh;
    & > div {
      max-width: 500px;
      padding-bottom: 4%;
    }
  }
  @media (max-width: 1000px) {
    & > div {
      max-width: 423px;
      padding-bottom: 4%;
    }
  }
  @media (max-width: 810px) {
    & > div {
      max-width: 189.41px;
      padding-bottom: 4%;
    }
  }
  @media (max-width: 490px) {
    min-height: 95vh;
    bottom: 0%;
    & > div {
      max-width: 189.41px;
      padding: 0% 0% 20% 0%;
    }
  }
`;