import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import styled from "styled-components";
import TitleSection from "components/shared/TitleSection";
import ContactFooter from "components/shared/footers/ContactFooter";
import { H1, H2, P } from "components/shared/Dangerously";
import Services from "components/shared/Services";
import Head from "components/layout/Head";
import Carousel from "components/Carousel";
import { Fade } from "react-awesome-reveal";
import Picture from "components/caseStudy/shared/Picture";
import ButtonArrow from "components/shared/footers/ButtonArrow";
import BroadcastRouter from "components/podcast/BroadcastRouter.tsx";
import FAQSection from "components/shared/FAQ";
import ClientsDesktop from "../public/assets/img/layout/clients.png";
import ClientsMobile from "../public/assets/img/layout/clientsMobile.png";
import PageWrapper from "components/layout/PageWrapper";
import Quotes from "components/Quotes";
import CaseList from "components/caseStudy/CaseList";

const HomeSpline = dynamic(import("../components/homeSpline/HomeSpline.tsx"), {
  ssr: false,
});

function Index({ locale, setTitle, pt, hasLoaded }) {
  const [t, setT] = useState(pt);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "home.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("scroll", checkMobile);
    };
  }, [locale]);

  const checkMobile = () => {
    if (window.innerWidth <= 760) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <PageWrapper unPadded>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio"}
        en_canonical={"https://acueducto.studio/en"}
      />
      <div style={{ zIndex: 1 }}>
        <Land id="land">
          <LandContainer>
            <H1>{t.landing.seo_h1}</H1>
            <P className="h1">{t.landing.heading}</P>
            <H2 className="h2">{t.landing.tagline}</H2>
            <Link
              href={"/portafolio"}
              as={locale === "en" ? "/work" : "/portafolio"}
              locale={locale}
              passHref
              legacyBehavior
            >
              <ButtonArrow text={t.landing.button} inverse />
            </Link>
          </LandContainer>
        </Land>
        <Intro id="removeArrow">
          <CaseList limit={6} />
          <TitleSection {...t.intro} borderTop heading={2} />
        </Intro>
        <Carousel items={t.carousel} />
        <TitleSection {...t.clients.intro} borderTop heading={2} />
        <LogosSection>
          <Fade triggerOnce>
            <span className="text">{t.clients.span}</span>
            <div style={{ maxWidth: !isMobile ? 900 : 650 }}>
              {!isMobile ? (
                <Picture src={ClientsDesktop} alt="Clientes" />
              ) : (
                <Picture src={ClientsMobile} alt="Clientes" />
              )}
            </div>
          </Fade>
          <Fade triggerOnce>
            <span className="text">
              Lo que nuestros clientes dicen de nosotros
            </span>
            <Quotes isMobile={isMobile} />
            <Link
              href={"/portafolio"}
              as={locale === "en" ? "/work" : "/portafolio"}
              locale={locale}
              passHref
              legacyBehavior
            >
              <ButtonArrow text={t.clients.cta} inverse />
            </Link>
          </Fade>
        </LogosSection>
        <Services services={t.services} />
     
        <FAQSection t={t.faq} />
        <TitleSection {...t.podcast.intro} borderTop heading={2}>
          <Fade>
            <Link href={"/podcast"} passHref locale="es" legacyBehavior>
              <HoverablePicture>
                <Picture
                  src="/assets/img/layout/podcast_cover.png"
                  width={230}
                  height={230}
                  alt="Cuando el río suena"
                />
              </HoverablePicture>
            </Link>
            <BroadcastRouter
              trackClicks
              episode={3}
              spotify={"https://open.spotify.com/show/2YLB7SOeJsLp5DtDuIwX8t"}
              apple={
                "https://podcasts.apple.com/us/podcast/cuando-el-r%C3%ADo-suena/id1500473556"
              }
              google={
                "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84OTU5NzIucnNz"
              }
              youtube={
                "https://www.youtube.com/watch?v=k4CDIGcQ3gc&list=PLX3VC_2vq4TTRsyLoyWOHutWND0hQt9lD"
              }
            />
          </Fade>
        </TitleSection>
        <ContactFooter />
      </div>
      {hasLoaded && <HomeSpline />}
    </PageWrapper>
  );
}

export default React.memo(Index);

export const getStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "home.json" });
  return {
    props: {
      pt,
    },
  };
};

const Land = styled.section`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 4%;
  grid-gap: 2.2rem;
  align-items: center;
  position: relative;
  h1 {
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 4px;
    line-height: 140%;
    font-weight: 100;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 6%;
    z-index: -10;
    text-align: center;
  }
  .h2 {
    font-size: 2.1rem;
    margin-top: 15px;
    max-width: 300px;
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 2rem;
  }
  .h1 {
    color: ${(props) => props.theme.colors.white};
    line-height: 100%;
    font-size: 7rem;
    max-width: 860px;
    font-weight: 500;
  }
  @media (max-width: 1115px) {
    .h1 {
      font-size: 6.7rem;
    }
  }
  @media (max-width: 1070px) {
    .h1 {
      font-size: 6.4rem;
    }
  }
  @media (max-width: 1025px) {
    .h1 {
      font-size: 6.2rem;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 0.8;
    }
    .h1 {
      font-size: 5.9rem;
    }
  }
  @media (max-width: 900px) {
    .h1 {
      font-size: 5rem;
      max-width: 360px;
    }
    .h2 {
      font-size: 1.8rem;
      max-width: 420px;
    }
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 0.7;
      text-align:left;
      left:4%;
      transform: unset;
      max-width: 300px;
    }
    .h1 {
      font-size: 4rem;
      max-width: 450px;
    }
  }
  @media (max-width: 520px) {
    .h1 {
      max-width: 280px;
    }
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 0.6;
      margin-bottom: 70px;
    }
    .h1 {
      font-size: 3.35rem;
      max-width: 250px;
    }
    .h2 {
      font-size: 1.6rem;
      max-width: 280px;
    }
  }
`;

const LandContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 10;
  @media (max-width: 570px) {
    grid-column: 1 / span 11;
  }
  @media (max-width: 420px) {
    grid-column: 1 / span 12;
  }
`;

const Intro = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  transition: 0.3s ease all;
  & > div {
    padding-bottom: 6%;
  }
  @media (max-width: 900px) {
    padding-bottom: 6%;
  }
`;

const LogosSection = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: calc(70px + 5%);
  .text {
    color: ${(props) => props.theme.colors.foreground_lower};
    margin-bottom: 3.5rem;
    text-align: center;
    display: block;
  }
  /* & > :nth-child(1) {
    color: ${(props) => props.theme.colors.foreground_lower};
    margin-bottom: 3.5rem;
  } */
  & > :nth-child(3) {
    margin-top: 6%;
  }
  & > :nth-last-child(1) {
    margin-top: 5.5rem;
  }
  @media (max-width: 1100px) {
    img {
      max-width: 700px !important;
    }
  }
  @media (max-width: 850px) {
    img {
      max-width: 400px !important;
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 12%;
  }
  @media (max-width: 500px) {
    img {
      max-width: 300px !important;
    }
  }
  @media (max-width: 400px) {
    img {
      max-width: 280px !important;
    }
  }
`;

const HoverablePicture = styled.a`
  & > div span {
    border: 2.5px solid transparent !important;
    transition: 0.3s ease-out;
    border-radius: 35px;
    width: auto;
    &:hover {
      border-color: ${(p) => p.theme.colors.accent} !important;
    }
  }
`;
