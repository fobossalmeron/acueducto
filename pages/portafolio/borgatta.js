import React, { useEffect, useState } from "react";
import PageWrapper from "components/layout/PageWrapper";
import Head from "components/layout/Head";
import clientLocale from "utils/clientLocale";
import ssrLocale from "utils/ssrLocale";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import CommonSection from "components/caseStudy/shared/CommonSection";
import LandSection from "components/caseStudy/borgatta/LandSection";
import AnimatedUIComponents from "components/caseStudy/borgatta/AnimatedUIComponents";
import Marquee from "components/caseStudy/shared/Marquee";
import TextColumn from "components/caseStudy/shared/TextColumn";
import { P } from "components/shared/Dangerously";
import { SeoH2 } from "components/caseStudy/shared/SEOHeadings";
import Quote from "components/caseStudy/shared/Quote";
import Picture from "components/caseStudy/shared/Picture";
import NextStudy from "components/caseStudy/shared/NextStudy";
import ContactFooter from "components/shared/footers/ContactFooter";
import IntroVideo from "components/caseStudy/shared/IntroVideo";
import Image from "next/legacy/image";
import ResultMd from "public/assets/img/casestudies/borgatta/resultsOnThePage-md.png";
import ResultSm from "public/assets/img/casestudies/borgatta/resultsOnThePage-sm.png";
import CaseTable from "../../components/caseStudy/borgatta/CaseTable";
import Page from "public/assets/img/casestudies/borgatta/page.png";
import { EditVideo } from "./blockstem";

const h2Title = "#d76e32";
const bodyText1 = "#FFFFFF";
const bodyText2 = "#626262";

const backgroundColorSection = "#fbfbfd";
const mainGradient =
  "linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(123.72deg, #E3772D 18.96%, #F2B559 114.27%);";

const Borgatta = ({ locale, setTitle, pt }) => {
  const [loadAssets, setloadAssets] = useState(false);
  const [t, setT] = useState(pt);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "work.borgatta.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 650);
    }

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 650);
      }
    };

    window.addEventListener("resize", handleResize);

    setloadAssets(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [locale, isMobile]);

  return (
    <PageWrapperBorgatta>
      <Head
        {...t?.head}
        image={{ fileName: "og_image_borgatta.png", alt: t?.head.image_alt }}
        es_canonical={"https://acueducto.studio/portafolio/borgatta"}
        en_canonical={"https://acueducto.studio/en/work/borgatta"}
      />
      <Fade triggerOnce>
        <LandSection isMobile={isMobile} title={t.head.seo_h1} />
      </Fade>
      <FirstSection>
        {loadAssets && <Marquee tags={t.intro_section.tags} />}
        <EditVideo backgroundColor={"#f7f6f7"}>
          <IntroVideo desktopLayout link={t.link} />
        </EditVideo>
        <SeoH2>{t.head.description}</SeoH2>
        <Fade delay={300} triggerOnce>
          <TextColumn>
            <P className="h2">{t.intro_section.title}</P>
            <P className="h3">{t.intro_section.subtitle}</P>
            <P>{t.intro_section.p}</P>
            <Fade delay={300} triggerOnce>
              <LessonContainer>
                {t?.intro_section.lessons.map((lesson, i) => (
                  <Lesson key={`lessn${i}`}>
                    <span>{i + 1}</span>
                    <p>{lesson.p}</p>
                  </Lesson>
                ))}
              </LessonContainer>
            </Fade>
          </TextColumn>
        </Fade>
        <Picture src={Page} alt="Page" withWrapper />
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <P className="h2">{t?.second_section.title}</P>
          <P>{t.second_section.p}</P>
        </TextColumn>
        <AspectContainer>
          <Fade delay={300} triggerOnce>
            {t.second_section.aspects.map((aspect, i) => (
              <Aspect key={`aspect${i}`}>
                <Picture
                  src={`/assets/img/casestudies/borgatta/Icon${i + 1}.svg`}
                  width={"50"}
                  height={"50"}
                  alt="Aspecto"
                />
                <p className="h4">{aspect.title}</p>
                <p>{aspect.p}</p>
              </Aspect>
            ))}
          </Fade>
        </AspectContainer>
        <CaseTable />
        <Quote quote={t.second_section.quote} color={"#060809"} />
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <P className="h2">{t.third_section.title}</P>
          <P>{t.third_section.p}</P>
        </TextColumn>
        <ResultContainer>
          <Fade delay={300} triggerOnce>
            {t.third_section.results.map((result, i) => (
              <Results key={`result${i}`} className={`result${i}`}>
                <div>
                  <span>
                    {result.sign && <p className="h4">{result.sign}</p>}
                    {result.title.length > 4 ? (
                      <div>
                        <p className="h2">{result.title.split(" ")[0]}</p>
                        <p className="h3">{result.title.split(" ")[1]}</p>
                      </div>
                    ) : (
                      <p className="h2">{result.title}</p>
                    )}
                  </span>
                  {result.subtitle && <P className="h3">{result.subtitle}</P>}
                </div>
                <P>{result.p}</P>
              </Results>
            ))}
          </Fade>
        </ResultContainer>
        <Fade delay={300} triggerOnce>
          {!isMobile ? (
            <Image src={ResultMd} alt="Web B360" />
          ) : (
            <Image src={ResultSm} alt="Web B360" />
          )}
        </Fade>
        <Quote quote={t.third_section.quote} color={"#F4F4F4"} />
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <P className="h2">{t.fourth_section.title}</P>
          <P>{t.fourth_section.p}</P>
        </TextColumn>
        <AnimatedUIComponents isMobile={isMobile} />
      </FourthSection>
      <NextStudy link="wellmee" />
      <ContactFooter />
    </PageWrapperBorgatta>
  );
};

export default React.memo(Borgatta);

export const getStaticProps = async (context) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: "work.borgatta.json",
  });
  return {
    props: {
      pt,
    },
  };
};

const PageWrapperBorgatta = styled(PageWrapper)`
  background: ${mainGradient};
  background-blend-mode: normal, overlay, normal;
`;

const FirstSection = styled(CommonSection)`
  color: ${bodyText1};
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

const LessonContainer = styled.div`
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

const Lesson = styled.div`
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
    border: 2px solid ${bodyText1};
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

const SecondSection = styled(CommonSection)`
  background-color: ${backgroundColorSection};
  color: ${bodyText2};
  padding-bottom: 11.11%;

  .h2 {
    color: ${h2Title};
    b {
      opacity: 0.7;
      font-weight: 400;
    }
  }
`;

const AspectContainer = styled.div`
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

const Aspect = styled.div`
  display: flex;
  flex-direction: column;
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

const ThirdSection = styled(CommonSection)`
  padding-bottom: 10%;
  color: ${bodyText1};
  background-blend-mode: normal, overlay, normal;
  .h2 b {
    opacity: 0.7;
    font-weight: 400;
  }
`;

const ResultContainer = styled.div`
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

const Results = styled.div`
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

const FourthSection = styled(CommonSection)`
  background-color: #f4f4f4;
  color: ${bodyText2};
  .h2 {
    color: ${h2Title};
    b {
      opacity: 0.7;
      font-weight: 400;
    }
  }
`;
