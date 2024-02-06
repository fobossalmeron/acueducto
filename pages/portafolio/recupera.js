import React, { useEffect, useState } from "react";
import clientLocale from "utils/clientLocale";
import ssrLocale from "utils/ssrLocale";
import styled from "styled-components";
import PageWrapper from "components/layout/PageWrapper";
import Head from "components/layout/Head";
import Marquee from "components/caseStudy/shared/Marquee";
import IntroVideo from "components/caseStudy/shared/IntroVideo";
import CommonSection from "components/caseStudy/shared/CommonSection";
import { Fade } from "react-awesome-reveal";
import TextColumn from "components/caseStudy/shared/TextColumn";
import { H2, H3, P } from "components/shared/Dangerously";
import Quote from "components/caseStudy/shared/Quote";
import NextStudy from "components/caseStudy/shared/NextStudy";
import Picture from "components/caseStudy/shared/Picture";
import ContactFooter from "components/shared/footers/ContactFooter";
import ToolsMd from "public/assets/img/casestudies/recupera/toolsMd.png";
import ToolsSm from "public/assets/img/casestudies/recupera/toolsSm.png";
import DesktopMobile from "public/assets/img/casestudies/recupera/desktop-mobile.png";
import ScreensAnimation from "components/caseStudy/recupera/ScreensAnimation";
import UIComponentsAnimation from "../../components/caseStudy/recupera/UIComponentsAnimation";
import ScrollCardAnimation from "../../components/caseStudy/recupera/ScrollCardAnimation";
import Functionalities from "../../components/caseStudy/recupera/Functionalities";
import IPhoneAnimation from "../../components/caseStudy/recupera/IPhoneAnimation";

const white = "#FFFFFF";

const Recupera = ({ locale, setTitle, pt }) => {
  const [loadAssets, setloadAssets] = useState(false);
  const [t, setT] = useState(pt);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "work.recupera.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });
    setloadAssets(true);
  }, [locale]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 650);
    }

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 650);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [isMobile]);

  return (
    <PageClipperRecupera>
      <Head
        {...t?.head}
        image={{ fileName: "og_image_recupera.png", alt: t?.head.image_alt }}
        es_canonical={"https://acueducto.studio/portafolio/recupera"}
        en_canonical={"https://acueducto.studio/en/work/recupera"}
      />
      <Fade triggerOnce>
        <LandSection>
          {!isMobile ? (
            <>
              <Fade delay={300} triggerOnce>
                <img
                  src="/assets/img/casestudies/recupera/brand1Md.svg"
                  alt="Logo"
                />
              </Fade>
              <Fade delay={300} triggerOnce className="logo">
                <img
                  src="/assets/img/casestudies/recupera/logoRecupera.svg"
                  alt="Recupera"
                />
              </Fade>
              <Fade delay={300} triggerOnce>
                <img
                  src="/assets/img/casestudies/recupera/brand2Md.svg"
                  alt="Logo"
                />
              </Fade>
            </>
          ) : (
            <>
              <Fade delay={300} triggerOnce className="brand1">
                <img
                  src="/assets/img/casestudies/recupera/brand1Sm.svg"
                  alt="Logo"
                />
              </Fade>
              <Fade delay={500} triggerOnce className="logo">
                <img
                  src="/assets/img/casestudies/recupera/logoRecupera.svg"
                  alt="Recupera"
                />
              </Fade>
              <Fade delay={600} triggerOnce className="brand2">
                <img
                  src="/assets/img/casestudies/recupera/brand2Sm.svg"
                  alt="Logo"
                />
              </Fade>
            </>
          )}
        </LandSection>
      </Fade>
      <FirstSection>
        <Marquee tags={t.intro_section.tags} />
        <EditVideo>
          <IntroVideo link={t.link} />
        </EditVideo>
        <TextColumn>
          <H2>{t.intro_section.title}</H2>
          <P>
            {t.intro_section.p}
          </P>
        </TextColumn>
        <ScrollCardAnimation isMobile={isMobile} setIsMobile={setIsMobile} />
        <Quote quote={t.intro_section.quote} color={"#F4F4F4"} mark={"#060809"}/>
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <H2>{t?.second_section.title}</H2>
          <P>{t.second_section.p}</P>
          <ChallengesContainer>
            {t?.second_section.challenges.map((challenge, i) => (
              <Fade delay={300} triggerOnce key={`challenge${i}`}>
                <Challenge>
                  <span>
                    <p>{i + 1}</p>
                  </span>
                  <p>{challenge.p}</p>
                </Challenge>
              </Fade>
            ))}
          </ChallengesContainer>
        </TextColumn>
        <ScreensAnimation />
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <H2>{t.third_section.title}</H2>
          <P>{t.third_section.p}</P>
        </TextColumn>
        <TextColumn>
          <FirstPoint>
            <H3>{t.third_section.points.first.subtitle}</H3>
            <P>{t.third_section.points.first.p}</P>
            <IPhoneAnimation isMobile={isMobile} />
          </FirstPoint>
        </TextColumn>
        <TextColumn>
          <SecondPoint>
            <H3>{t.third_section.points.second.subtitle}</H3>
            <P>{t.third_section.points.second.p}</P>
          </SecondPoint>
        </TextColumn>
          <UIComponentsAnimation isMobile={isMobile}/>
        <TextColumn>
          <ThirdPoint>
            <H3>{t.third_section.points.third.subtitle}</H3>
            <P>{t.third_section.points.third.p}</P>
            {!isMobile ? (
              <Picture
                src={ToolsMd}
                alt="Herramientas"
                withWrapper
              />
              ) : (
                <Picture
                  src={ToolsSm}
                  alt="Herramientas"
                  withWrapper
                />
            )}
          </ThirdPoint>
        </TextColumn>
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <H2>{t.fourth_section.title}</H2>
          <P>{t.fourth_section.p}</P>
        </TextColumn>
        <Functionalities 
          isMobile={isMobile}
          t={t.fourth_section}
        />
        <Quote 
          quote={t.fourth_section.quote} 
          color={"rgb(79, 79, 79)"}
        />
        <DesktopAndMobile>     
          <Picture
            src={DesktopMobile}
            alt="Devices"
            withWrapper
          />
        </DesktopAndMobile>
      </FourthSection>
      <NextStudy link="rahid" />
      <ContactFooter />
    </PageClipperRecupera>
  );
}

export default React.memo(Recupera);

export const getStaticProps = async (context) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: "work.recupera.json",
  });
  return {
    props: {
      pt,
    },
  };
};



const PageClipperRecupera = styled(PageWrapper)`
  background: linear-gradient(46deg, #6239D9 0%, #5C50ED 100%);
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

  img, svg {
    width: 100%;
  }

  .logo {
    min-width: 223px;
    max-width: 30em;
    right: -4%;
    position: relative;
  }
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .logo {
      max-width: 223px;
      right: 0%;
      position: relative;
    }
    .brand1 {
      align-self: flex-start;
    }
    .brand2 {
      align-self: flex-end;
    }
  }
`;

const EditVideo = styled.div`
  padding: 3%;
  border-radius: 40px;
  background-color: rgb(247, 243, 241);
  & > div {
    padding: 0px;
  }
  @media (max-width: 1300px) {
    margin: 0 30px;
  }
  @media (max-width: 700px) {
    padding: 10px;
    border-radius: 20px;
    margin: 0 20px;
  }
  @media (max-width: 500px) {
    border-radius: 17px;
  }
`;

const FirstSection = styled(CommonSection)`
  color: ${white};
  padding-bottom: 10.7%;
  h2, h3 {
    font-weight: 500;
  }
  h2 {
    font-size: 5.8rem;
    padding-bottom: 26px;
    b {
      color: #FAD166;
      font-weight: 200;
      font-size: 4rem;
    }
  }
  h3 {
    padding: 0px;
    padding-bottom: 4%;
    font-size: 3.2rem;
    line-height: 131%;
    margin-bottom: 0px;
    width: 100%;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 5.2rem;
      b {
        font-size: 3.2rem;
      }
    }
    h3 {
      font-size: 3rem;
    }
  }
  @media (max-width: 630px) {
    h2 {
      font-size: 3.3rem;
      b {
        font-size: 2rem;
      }
    }
    h3 {
      font-size: 1.9rem;
    }
  }
`;

const SecondSection = styled(CommonSection)`
  background-color: #FEFAF5;
  color: #5C5C81;
  padding-bottom: 11.11%;
  padding-top: 11.11%;

  h2 {
    color: #292D34;
    font-weight: 500;
    font-size: 5.8rem;
    line-height: 105%;
    padding: 4px 0px 26px 0px;
    b {
      color: #7368F8;
      font-weight: 200;
      font-size: 4rem;
    }
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 5.2rem;
      b {
        font-size: 3.2rem;
      }
    }
    h3 {
      font-size: 3rem;
    }
  }
  @media (max-width: 630px) {
    h2 {
      font-size: 3.3rem;
      b {
        font-size: 2rem;
      }
    }
    h3 {
      font-size: 1.9rem;
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
    background-color: #7368F8;
    width: 31.1px;
    height: 31.1px;
    min-width: 31px;
    display: flex;
    color: #FEFAF5;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
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
  padding-bottom: 10%;
  padding-top: 10%;
  background-color: #6239D9;
  color: #FFFFFF;
  h2 {
    color: #f3f4f5;
    font-weight: 500;
    font-size: 5.8rem;
    line-height: 105%;
    padding: 0px 0px 26px 0px;
    b {
      color: #FAD166;
      font-weight: 200;
      font-size: 4rem;
    }
  }
  h3{
    font-size: 3.6rem;
    font-weight: 400;
    padding: 7.5% 0 0 0;
    margin-bottom: 12px;
  }

  div div div p {
    font-size: 1.65rem;
  }

  .image {
    padding-top: 7rem;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 5.2rem;
      b {
        font-size: 3.2rem;
      }
    }
    h3 {
      font-size: 30px;
    }
  }
  @media (max-width: 630px) {
    h2 {
      font-size: 3.3rem;
      b {
        font-size: 2rem;
      }
    }
    h3 {
      font-size: 1.9rem;
    }
    p {
      font-size: 1.5rem;
    }
    .image {
      padding-top: 4.8rem;
      position: relative;
      left: 3%;
    }
  }
`;

const FirstPoint = styled.div`
  @media (max-width: 630px) {
    .image {
      padding-top: 10%;
    }
  }
`;

const SecondPoint = styled.div`
  width: 100%;
`;

const ThirdPoint = styled.div`
  h3{
    padding-top: 0%;
  }
  .image {
    width: 100%;
    max-width: 630px;
    padding-top: 6.7rem;
    padding-bottom: 6.7rem;
    position: relative;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 630px) {
    .image {
      padding-top: 5rem;
    }
  }
`;

const FourthSection = styled(CommonSection)`
  background-color: #FEFAF5;
  color: #5C5C81;
  padding-top: 10%;

  h2 {
    color: #292D34;
    font-weight: 500;
    font-size: 5.6rem;
    line-height: 105%;
    padding: 0px 0px 26px 0px;
    b {
      color: #7368F8;
      font-weight: 200;
      font-size: 4rem;
    }
  }

  .image {
    width: 100%;
    max-width: 1000px;
    padding: 7% 0% 0% 0%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 5.2rem;
      b {
        font-size: 3.2rem;
      }
    }
    h3 {
      font-size: 3rem;
    }
  }
  @media (max-width: 630px) {
    h2 {
      font-size: 3.3rem;
      b {
        font-size: 2rem;
      }
    }
    h3 {
      font-size: 1.9rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const DesktopAndMobile = styled.div`
  background-image: url("/assets/img/casestudies/recupera/backgroundDesktopMobile.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .image{
    position: relative;
    right: -18%;
    width: 100%;
    max-width: 1458px;
  }
`;