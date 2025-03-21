import styled from 'styled-components';
import CommonSection from 'components/pages/work/CommonSection';
import { Fade } from 'react-awesome-reveal';
import { SeoH1 } from 'components/pages/work/SEOHeadings';
import Image from 'next/legacy/image';
import Landing1 from 'public/assets/img/casestudies/borgatta/landing1.png';
import Landing2 from 'public/assets/img/casestudies/borgatta/landing2.png';
import Landing3 from 'public/assets/img/casestudies/borgatta/landing3.png';
import Landing4 from 'public/assets/img/casestudies/borgatta/landing4.png';
import Landing5 from 'public/assets/img/casestudies/borgatta/landing5.png';
import Landing6 from 'public/assets/img/casestudies/borgatta/landing6.png';
import Landing7 from 'public/assets/img/casestudies/borgatta/landing7.png';
import Landing8 from 'public/assets/img/casestudies/borgatta/landing8.png';
import LandingMobile1 from 'public/assets/img/casestudies/borgatta/landingMobile1.png';
import LandingMobile2 from 'public/assets/img/casestudies/borgatta/landingMobile2.png';
import LandingMobile3 from 'public/assets/img/casestudies/borgatta/landingMobile3.png';
import LandingMobile4 from 'public/assets/img/casestudies/borgatta/landingMobile4.png';
import LandingMobile5 from 'public/assets/img/casestudies/borgatta/landingMobile5.png';
import LandingMobile6 from 'public/assets/img/casestudies/borgatta/landingMobile6.png';
import { keyframes } from '@emotion/react';
import Reveal from 'react-awesome-reveal';

const Landing = (props) => {
  return (
    <LandSection>
      <Fade delay={750} triggerOnce>
        <LogoBorgatta>
          {!props.isMobile ? (
            <img
              src="/assets/img/casestudies/borgatta/brand-md.svg"
              alt="Web B360"
            />
          ) : (
            <img
              src="/assets/img/casestudies/borgatta/brand-sm.svg"
              alt="Web B360"
            />
          )}
          <SeoH1>{props.title}</SeoH1>
        </LogoBorgatta>
      </Fade>
      {!props.isMobile ? (
        <PicturesContainer>
          <FirstColumn>
            <Reveal
              keyframes={customAnimation}
              delay={1300}
              // direction="up"
              triggerOnce
            >
              <Image src={Landing1} alt="Web B360" />
            </Reveal>
            <Reveal
              keyframes={customAnimation}
              delay={1550}
              // direction="up"
              triggerOnce
              className="landing2"
            >
              <Image src={Landing2} alt="Web B360" />
            </Reveal>
          </FirstColumn>
          <SecondColumn>
            <Reveal
              keyframes={customAnimation}
              delay={1500}
              // direction="up"
              triggerOnce
            >
              <Image src={Landing3} alt="Web B360" />
            </Reveal>
          </SecondColumn>
          <ThirdColumn>
            <Reveal
              keyframes={customAnimation}
              delay={1400}
              // direction="up"
              triggerOnce
            >
              <Image src={Landing4} alt="Web B360" />
            </Reveal>
          </ThirdColumn>
          <FourthColumn>
            <Reveal
              keyframes={customAnimation}
              delay={1150}
              // direction="up"
              triggerOnce
            >
              <Image src={Landing5} alt="Web B360" />
            </Reveal>
            <Reveal
              keyframes={customAnimation}
              delay={1250}
              // direction="up"
              triggerOnce
              className="landing6"
            >
              <Image src={Landing6} alt="Web B360" />
            </Reveal>
          </FourthColumn>
          <FifthColumn>
            <Reveal
              keyframes={customAnimation}
              delay={1600}
              // direction="up"
              triggerOnce
            >
              <Image src={Landing7} alt="Web B360" />
            </Reveal>
            <Reveal
              keyframes={customAnimation}
              delay={1500}
              // direction="up"
              triggerOnce
              className="landing8"
            >
              <Image src={Landing8} alt="Web B360" />
            </Reveal>
          </FifthColumn>
        </PicturesContainer>
      ) : (
        <PicturesContainerMobile>
          <FirstRowMobile>
            <Reveal
              keyframes={customAnimation}
              delay={1300}
              // direction="up"
              triggerOnce
            >
              <Image src={LandingMobile1} alt="Web B360" />
            </Reveal>
            <Reveal
              keyframes={customAnimation}
              delay={1100}
              // direction="up"
              triggerOnce
            >
              <Image src={LandingMobile2} alt="Web B360" />
            </Reveal>
            <Reveal
              keyframes={customAnimation}
              delay={1100}
              // direction="up"
              triggerOnce
            >
              <Image src={LandingMobile4} alt="Web B360" />
            </Reveal>
          </FirstRowMobile>
          <SecondRowMobile>
            <Reveal
              keyframes={customAnimation}
              delay={1500}
              // direction="up"
              triggerOnce
            >
              <Image src={LandingMobile3} alt="Web B360" />
            </Reveal>
            <Reveal
              keyframes={customAnimation}
              delay={1500}
              // direction="up"
              triggerOnce
            >
              <Image src={LandingMobile5} alt="Web B360" />
            </Reveal>
            <Reveal
              keyframes={customAnimation}
              delay={1500}
              // direction="up"
              triggerOnce
            >
              <Image src={LandingMobile6} alt="Web B360" />
            </Reveal>
          </SecondRowMobile>
        </PicturesContainerMobile>
      )}
    </LandSection>
  );
};

export default Landing;

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 95px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
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
  .landing2 {
    max-width: 120px;
  }
  @media (max-width: 1000px) {
    .landing2 {
      max-width: 74.3px;
      max-height: 54.5px;
    }
  }
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
  align-items: flex-start;
  gap: 4%;
  margin-top: 6%;
  .landing6 {
    max-width: 174px;
  }
  @media (max-width: 1000px) {
    .landing6 {
      max-width: 107.9px;
      max-height: 70px;
    }
  }
`;

const FifthColumn = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4%;
  .landing8 {
    max-width: 93px;
  }
  @media (max-width: 1000px) {
    .landing8 {
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
`;

const SecondRowMobile = styled.span`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 2%;
`;

const LogoBorgatta = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 670px;
  h1 {
    margin-top: 4%;
    text-align: center;
  }
  img {
    max-height: 96px;
    min-width: 400px;
    width: 100%;
  }
  @media (max-width: 1300px) {
    max-width: 500px;
    padding-bottom: 10%;
  }
  @media (max-width: 1000px) {
    max-width: 423px;
  }
  @media (max-width: 650px) {
    max-width: 300px;
    padding: 18px 18px 20% 18px;
    img {
      min-width: unset;
    }
  }
`;

const LandSection = styled(CommonSection)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
