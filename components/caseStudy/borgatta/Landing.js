import styled from "styled-components";
import CommonSection from "components/caseStudy/shared/CommonSection";
import { Fade } from "react-awesome-reveal";
import Picture from "components/caseStudy/shared/Picture";
import { useState } from "react";
import { useEffect } from "react";

const Landing = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {

    window.addEventListener("resize", function(){
      if (window.innerWidth <= 650) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

  }, [isMobile]);

  return (
  <LandSection>
    <Fade delay={1100} triggerOnce>
      <LogoBorgatta />
    </Fade>
    {!isMobile ? (
      <PicturesContainer>
        <FirstColumn>
          <Fade delay={1300} direction="up" triggerOnce>
            <Picture
              src="/assets/img/casestudies/borgatta/landing1.png"
              alt="Page"
              width={180}
              height={231}
              withWrapper
            />
          </Fade>
          <Fade delay={1100} direction="up" triggerOnce>
            <Picture
              src="/assets/img/casestudies/borgatta/landing2.png"
              alt="Page"
              width={120}
              height={88}
              withWrapper
            />
          </Fade>
        </FirstColumn>
      <SecondColumn>
        <Fade delay={1500} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landing3.png"
            alt="Page"
            width={263.3}
            height={327.5}
            withWrapper
          />
        </Fade>
      </SecondColumn>
      <ThirdColumn>
        <Fade delay={1400} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landing4.png"
            alt="Page"
            width={392.7}
            height={289.7}
            withWrapper
          />
        </Fade>
      </ThirdColumn>
      <FourthColumn>
        <Fade delay={1150} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landing5.png"
            alt="Page"
            width={319}
            height={187}
            withWrapper
          />
        </Fade>
        <Fade delay={1250} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landing6.png"
            alt="Page"
            width={174.3}
            height={112.8}
            withWrapper
          />
        </Fade>
      </FourthColumn>
      <FifthColumn>
        <Fade delay={1600} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landing7.png"
            alt="Page"
            width={130}
            height={184}
            withWrapper
          />
        </Fade>
        <Fade delay={1500} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landing8.png"
            alt="Page"
            width={93}
            height={93}
            withWrapper
          />
        </Fade>
      </FifthColumn>
    </PicturesContainer>
      ) : (
        <PicturesContainerMobile>
      <FirstRowMobile>
        <Fade delay={1300} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landingMobile1.png"
            alt="Page"
            width={135}
            height={168}
            withWrapper
          />
        </Fade>
        <Fade delay={1100} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landingMobile2.png"
            alt="Page"
            width={89.66}
            height={89.66}
            withWrapper
          />
        </Fade>
        <Fade delay={1100} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landingMobile4.png"
            alt="Page"
            width={135}
            height={203}
            withWrapper
          />
        </Fade>
      </FirstRowMobile>
      <SecondRowMobile>
        <Fade delay={1500} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landingMobile3.png"
            alt="Page"
            width={60}
            height={77.5}
            withWrapper
          />
        </Fade>
        <Fade delay={1500} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landingMobile5.png"
            alt="Page"
            width={220}
            height={162.45}
            withWrapper
          />
        </Fade>
        <Fade delay={1500} direction="up" triggerOnce>
          <Picture
            src="/assets/img/casestudies/borgatta/landingMobile6.png"
            alt="Page"
            width={64.25}
            height={54.45}
            withWrapper
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
  min-height: 96px;
  max-width: 684px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("/assets/img/casestudies/borgatta/brand-md.svg");

  @media (max-width: 630px) {
    min-height: 124px;
    background-image: url("/assets/img/casestudies/borgatta/brand-sm.svg");
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
  gap: 3.5%;
`;

const SecondColumn = styled.span`
  margin-top: 6%;
`;

const ThirdColumn = styled.span`
  margin-top: 11%;
`;

const FourthColumn = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4%;
  margin-top: 6%;
`;

const FifthColumn = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4%;
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
`;

const SecondRowMobile = styled.span`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 2%;
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
    padding-bottom: 1%;
    width: 100%;
  }
  & > span {
    width: 100%;
  }
  @media (max-width: 1300px) {
    min-height: 94vh;
    & > div {
      max-width: 500px;
      padding-bottom: 4%;
    }
  }
  @media (max-width: 1000px) {
    min-height: 94vh;
    & > div {
      max-width: 423px;
      padding-bottom: 4%;
    }
  }
  @media (max-width: 630px) {
    min-height: 95vh;
    bottom: 0%;
    & > div {
      max-width: 189.41px;
      padding: 0% 0% 20% 0%;
    }
  }
`;