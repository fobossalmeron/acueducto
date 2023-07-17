import React, { useEffect, useState } from "react";
import clientLocale from "utils/clientLocale";
import ssrLocale from "utils/ssrLocale";
import styled from "styled-components";
import PageClipper from "components/layout/PageClipper";
import Head from "components/layout/Head";
import Marquee from "components/caseStudy/shared/Marquee";
import IntroVideo from "components/caseStudy/shared/IntroVideo";
import CommonSection from "components/caseStudy/shared/CommonSection";
import { Fade } from "react-awesome-reveal";
import LogoRecupera from "public/assets/img/casestudies/recupera/logoRecupera.svg";
import TextColumn from "components/caseStudy/shared/TextColumn";
import { H2, H3, P } from "components/shared/Dangerously";
import Quote from "components/caseStudy/shared/Quote";

const white = "#FFFFFF";

const Recupera = ({ locale, setTitle, pt }) => {
  const [loadAssets, setloadAssets] = useState(false);
  const [t, setT] = useState(pt);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "work.recupera.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });

    window.addEventListener("resize", function(){
      if (window.innerWidth <= 650) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
    
    setloadAssets(true);

  }, [locale, isMobile]);

  return (
    <PageClipperBorgatta>
      <Head
        {...t?.head}
        image={{ fileName: "og_image_recupera.png", alt: t?.head.image_alt }}
        es_canonical={"https://acueducto.studio/portafolio/recupera"}
        en_canonical={"https://acueducto.studio/en/work/recupera"}
      />
      <Fade triggerOnce>
        <LandSection>
          <Fade delay={300} triggerOnce>
            <LogoRecupera />
          </Fade>
        </LandSection>
      </Fade>
      <FirstSection>
        <Marquee tags={t.intro_section.tags} />
        <EditVideo>
          <IntroVideo link={t.link} />
        </EditVideo>
        <Fade delay={300} triggerOnce>
          <TextColumn>
            <H2>{t.intro_section.title}</H2>
            <P>
              {t.intro_section.p}
            </P>
            <Fade delay={300} triggerOnce>
            </Fade>
          </TextColumn>
        </Fade>
        <Quote quote={t.intro_section.quote} color={"#F4F4F4"} />
      </FirstSection>
      <SecondSection>
          <TextColumn>
            <H2>{t?.second_section.title}</H2>
            <P>{t.second_section.p}</P>
          </TextColumn>
      </SecondSection>
    </PageClipperBorgatta>
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

const SecondSection = styled(CommonSection)`
  background-color: #FEFAF5;
  color: #5C5C81;
  padding-bottom: 11.11%;
  padding-top: 11.11%;

  h2 {
    color: #292D34;
    font-weight: 500;
    font-size: 5.6rem;
    line-height: 105%;
    padding: 4px 0px 26px 0px;
    b {
      color: #7368F8;
      font-weight: 400;
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

const LandSection = styled(CommonSection)`
  min-height: 100vh;

  & > div {
    max-width: 400px;
    width: 70%;
    margin-right: 10%;
  }
  svg {
    width: 100%;
  }
  @media (max-width: 1000px) {
    background-size: auto 65%;
    & > div {
      max-width: 300px;
      margin-right: 10%;
    }
  }
  @media (max-width: 850px) {
    background-size: auto 55%;
    svg {
      overflow: visible;
      path {
        filter: drop-shadow(0px 0px 45px rgba(43, 44, 4, 1));
      }
    }
    & > div {
      margin-right: 12%;
    }
  }
  @media (max-width: 730px) {
    align-items: center;
    background-position: center center;
    & > div {
      max-width: 300px;
      margin-right: 0;
    }
  }
`;

const EditVideo = styled.div`
  padding: 3%;
  border-radius: 40px;
  background-color: #FBFBFD;
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
    font-size: 5.6rem;
    padding-bottom: 4px;
    b {
      color: #FAD166;
      opacity: 0.7;
      font-weight: 400;
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
  .image {
    padding-top: 3.5%;
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
    .image {
      padding: 0px 30px;
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
    .image {
      padding: 3% 10px;
    }
  }
`;

const PageClipperBorgatta = styled(PageClipper)`
  background: linear-gradient(46deg, #6137D7 0%, #5C50ED 100%);
`;