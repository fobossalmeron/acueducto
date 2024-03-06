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
import { P } from "components/shared/Dangerously";
import { SeoH1, SeoH2 } from "components/caseStudy/shared/SEOHeadings";
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
import { EditVideo } from "./blockstem";

const h2Title = "#292D34";
const bodyText1 = "#FFFFFF";
const bodyText2 = "#5C5C81";
const bAccent1 = "#FAD166";
const bAccent2 = "#7368F8";
const backgroundColorSection = "#FEFAF5";
const mainGradient = "linear-gradient(46deg, #6239d9 0%, #5c50ed 100%)";

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
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 650);
    }

    const handleResize = () => {
      if (typeof window !== "undefined") {
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
              <Fade delay={300} triggerOnce>
                <div className="logo">
                  <img
                    src="/assets/img/casestudies/recupera/logoRecupera.svg"
                    alt="Recupera"
                  />
                  <SeoH1>{t.head.title}</SeoH1>
                </div>
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
              <Fade delay={500} triggerOnce>
                <div className="logo">
                  <img
                    src="/assets/img/casestudies/recupera/logoRecupera.svg"
                    alt="Recupera"
                  />
                  <SeoH1>{t.head.seo_h1}</SeoH1>
                </div>
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
        {loadAssets && <Marquee tags={t.intro_section.tags} />}
        <EditVideo backgroundColor={"#F7F3F1"}>
          <IntroVideo link={t.link} />
        </EditVideo>
        <SeoH2>{t.head.description}</SeoH2>
        <TextColumn>
          <P className="h2">{t.intro_section.title}</P>
          <P>{t.intro_section.p}</P>
        </TextColumn>
        <ScrollCardAnimation isMobile={isMobile} setIsMobile={setIsMobile} />
        <Quote
          quote={t.intro_section.quote}
          color={"#F4F4F4"}
          mark={"#060809"}
        />
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <P className="h2">{t?.second_section.title}</P>
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
          <P className="h2">{t.third_section.title}</P>
          <P>{t.third_section.p}</P>
        </TextColumn>
        <TextColumn>
          <div>
            <P className="h3">{t.third_section.points.first.subtitle}</P>
            <P>{t.third_section.points.first.p}</P>
            <IPhoneAnimation isMobile={isMobile} />
          </div>
        </TextColumn>
        <TextColumn>
          <div>
            <P className="h3">{t.third_section.points.second.subtitle}</P>
            <P>{t.third_section.points.second.p}</P>
          </div>
        </TextColumn>
        <UIComponentsAnimation isMobile={isMobile} />
        <TextColumn>
          <ThirdPoint>
            <P className="h3">{t.third_section.points.third.subtitle}</P>
            <P>{t.third_section.points.third.p}</P>
            {!isMobile ? (
              <Picture src={ToolsMd} alt="Herramientas" withWrapper />
            ) : (
              <Picture src={ToolsSm} alt="Herramientas" withWrapper />
            )}
          </ThirdPoint>
        </TextColumn>
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <P className="h2">{t.fourth_section.title}</P>
          <P>{t.fourth_section.p}</P>
        </TextColumn>
        <Functionalities isMobile={isMobile} t={t.fourth_section} />
        <Quote quote={t.fourth_section.quote} color={"rgb(79, 79, 79)"} />
        <DesktopAndMobile>
          <Picture src={DesktopMobile} alt="Devices" withWrapper />
        </DesktopAndMobile>
      </FourthSection>
      <NextStudy link="rahid" />
      <ContactFooter />
    </PageClipperRecupera>
  );
};

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
  }

  .logo {
    min-width: 223px;
    max-width: 30em;
    right: -10%;
    position: relative;
    display: flex;
    flex-direction: column;
    img {
      margin-bottom: 5%;
    }
    h1 {
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

  .image {
    max-width: 1458px;
    position: relative;
    right: -18%;
    padding: 7% 0% 0% 0%;
  }
`;
