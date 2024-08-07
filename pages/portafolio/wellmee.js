import React, { useEffect, useState } from "react";
import clientLocale from "utils/clientLocale";
import ssrLocale from "utils/ssrLocale";
import styled from "styled-components";
import PageWrapper from "components/layout/PageWrapper";
import Head from "components/layout/Head";
import CommonSection from "components/caseStudy/shared/CommonSection";
import { Fade } from "react-awesome-reveal";
import Marquee from "components/caseStudy/shared/Marquee";
import IntroVideo from "components/caseStudy/shared/IntroVideo";
import TextColumn from "components/caseStudy/shared/TextColumn";
import { P } from "components/shared/Dangerously";
import { SeoH2 } from "components/caseStudy/shared/SEOHeadings";
import NextStudy from "components/caseStudy/shared/NextStudy";
import ContactFooter from "components/shared/footers/ContactFooter";
import AnimatedDataCards from "../../components/caseStudy/wellmee/AnimationDataCards";
import LandSectionWellmee from "../../components/caseStudy/wellmee/LandSectionWellmee";
import Picture from "components/caseStudy/shared/Picture";
import Combinator from "public/assets/img/casestudies/wellmee/Combinator.png";
import UIComponentsAnimation from "../../components/caseStudy/wellmee/AnimationUIComponents";
import AnimationScrollCards from "../../components/caseStudy/wellmee/AnimationScrollCards";
import AnimationSlideCards from "../../components/caseStudy/wellmee/AnimationSlideCards";
import Image from "next/legacy/image";
import Point4 from "public/assets/img/casestudies/wellmee/Point4.png";
import Iphone from "public/assets/img/casestudies/wellmee/Iphone1.png";

const h2Title = "#383955";
const bodyText1 = "#4a4a73";
const bodyText2 = "#FFFFFF";
const bAccent1 = "#00ceba";
const backgroundColorSection = "#5a5a8c";
const backgroundColorMain = "#f3f6f3";

const Wellmee = ({ locale, setTitle, pt }) => {
  const [loadAssets, setloadAssets] = useState(false);
  const [t, setT] = useState(pt);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "work.wellmee.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 650);
    }
    window.addEventListener("resize", handleResize);

    setloadAssets(true);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [locale, isMobile]);

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 650);
    }
  };

  return (
    <PageClipperWellmee>
      <Head
        {...t?.head}
        image={{ fileName: "og_image_wellmee.png", alt: t?.head.image_alt }}
        es_canonical={"https://acueducto.studio/portafolio/wellmee"}
        en_canonical={"https://acueducto.studio/en/work/wellmee"}
      />
      <Fade delay={300} triggerOnce>
        <LandSectionWellmee isMobile={isMobile} title={t.head.title} seo_h1={t.head.seo_h1}/>
      </Fade>
      <FirstSection>
        {loadAssets && <Marquee tags={t.intro_section.tags} />}
        <IntroVideo link={t.link} />
        <SeoH2>{t.head.description}</SeoH2>
        <TextColumn>
          <P className="h2">{t?.intro_section.title}</P>
          <P>{t?.intro_section.p}</P>
        </TextColumn>
        <TextColumn>
          <P className="h3">
            {t?.intro_section.characteristics.first.subtitle}
          </P>
          <P>{t?.intro_section.characteristics.first.p}</P>
        </TextColumn>
        <AnimatedDataCards />
        <TextColumn>
          <P className="h3">
            {t.intro_section.characteristics.second.subtitle}
          </P>
          <P>{t.intro_section.characteristics.second.p}</P>
          <CombinatorContainer>
            <Picture src={Combinator} alt="Combinator" />
          </CombinatorContainer>
        </TextColumn>
        <TextColumn>
          <P className="h3">{t.intro_section.characteristics.third.subtitle}</P>
          <ChallengesContainer>
            {t?.intro_section.characteristics.third.challenges.map(
              (challenge, i) => (
                <Fade delay={300} triggerOnce key={`challenge${i}`}>
                  <Challenge>
                    <span>
                      <p>{i + 1}</p>
                    </span>
                    <div>
                      <p className="h5">{challenge.title}</p>
                      <p>{challenge.p}</p>
                    </div>
                  </Challenge>
                </Fade>
              )
            )}
          </ChallengesContainer>
        </TextColumn>
        <UIComponentsAnimation isMobile={isMobile} />
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <P className="h2">{t?.second_section.title}</P>
        </TextColumn>
        {loadAssets && (
          <AnimationSlideCards t={t?.second_section} isMobile={isMobile} />
        )}
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <P className="h2">{t.third_section.title}</P>
          <PointContainer>
            <Fade delay={300} triggerOnce key={"point1"}>
              <Point style={{ paddingBottom: isMobile ? "49px" : "90px" }}>
                <div>
                  <span className="number">
                    <p>1</p>
                  </span>
                  <p>{t?.third_section.points[0].p}</p>
                </div>
                <Picture
                  src={"/assets/img/casestudies/wellmee/Point1.png"}
                  alt="Point"
                  width={420}
                  height={263}
                />
              </Point>
            </Fade>
          </PointContainer>
        </TextColumn>
        <TextColumn>
          <Fade delay={300} triggerOnce key={"point2"}>
            <Point>
              <div>
                <span className="number">
                  <p>2</p>
                </span>
                <p>{t?.third_section.points[1].p}</p>
              </div>
            </Point>
          </Fade>
        </TextColumn>
        <Fade delay={300} triggerOnce>
          <StepContainer>
            {t?.third_section.points[1].steps.map((step, i) => (
              <Step key={`step${i}`}>
                <div>
                  <Picture
                    src={`/assets/img/casestudies/wellmee/Step${i + 1}.svg`}
                    alt="Step"
                    width={isMobile ? 37 : 48}
                    height={isMobile ? 37 : 48}
                  />
                </div>
                <p>{step}</p>
              </Step>
            ))}
          </StepContainer>
        </Fade>
        <TextColumn>
          <Fade delay={300} triggerOnce key={"point3"}>
            <Point>
              <div>
                <span className="number">
                  <p>3</p>
                </span>
                <p>{t?.third_section.points[2].p}</p>
              </div>
            </Point>
          </Fade>
        </TextColumn>
        <AnimationScrollCards isMobile={isMobile} />
        <TextColumn>
          <Fade delay={300} triggerOnce key={"point4"}>
            <Point>
              <div>
                <span className="number">
                  <p>4</p>
                </span>
                <p>{t?.third_section.points[3].p}</p>
              </div>
              <div className="point4">
                <Image src={Point4} alt="Point" />
              </div>
            </Point>
          </Fade>
        </TextColumn>
        <TextColumn>
          <P className="h3">{t.third_section.subtitle}</P>
          <P>{t.third_section.p}</P>
        </TextColumn>
        <Fade delay={300} triggerOnce>
          <ContainerResultCard>
            {t?.third_section.results.map((result, i) => (
              <div className={`result${i}`} key={`result${i}`}>
                <div>
                  {result.sign && <p className="h5">{result.sign}</p>}
                  <p className="h3">{result.title}</p>
                  <p className="h4">{i !== 1 && " " + result.first_subtitle}</p>
                </div>
                <p className="h4">{i === 1 && result.first_subtitle}</p>
                <p className="h4">{result.second_subtitle}</p>
                <p>{result.p}</p>
              </div>
            ))}
          </ContainerResultCard>
        </Fade>
        <Fade delay={300} triggerOnce style={{ maxWidth: "902px" }}>
          <Picture src={Iphone} alt="Iphone" />
        </Fade>
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <P className="h2">{t.fourth_section.title}</P>
          <P>{t.fourth_section.p}</P>
        </TextColumn>
        <Picture
          src={"/assets/img/casestudies/wellmee/Iphone2.png"}
          alt="Wellmee"
          width={914}
          height={836}
        />
      </FourthSection>
      <NextStudy link="recupera" />
      <ContactFooter />
    </PageClipperWellmee>
  );
};

export default React.memo(Wellmee);

export const getStaticProps = async (context) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: "work.wellmee.json",
  });
  return {
    props: {
      pt,
    },
  };
};

const PageClipperWellmee = styled(PageWrapper)`
  background-color: ${backgroundColorMain};
  @media (max-width: 1300px) {
    padding: 0px;
  }
`;

const FirstSection = styled(CommonSection)`
  padding-bottom: 10.7%;
  background-image: url("/assets/img/casestudies/wellmee/Background1.svg");
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

const CombinatorContainer = styled.div`
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

const ChallengesContainer = styled.div`
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

const Challenge = styled.div`
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

const SecondSection = styled(CommonSection)`
  background-color: ${backgroundColorSection};
  padding-bottom: 11%;
  color: ${bodyText2};

  .h2 b {
    color: ${bAccent1};
    font-weight: 200;
  }
`;

const ThirdSection = styled(CommonSection)`
  padding-bottom: 10%;
  color: ${bodyText1};
  background-image: url("/assets/img/casestudies/wellmee/Background2.svg");
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

const PointContainer = styled.div`
  margin-top: 75px;

  @media (max-width: 900px) {
    margin-top: 60px;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const Point = styled.div`
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

const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  background-image: url("/assets/img/casestudies/wellmee/Background4.svg");
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
    background-image: url("/assets/img/casestudies/wellmee/Background5.svg");
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

const Step = styled.div`
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

const ContainerResultCard = styled.div`
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

const FourthSection = styled(CommonSection)`
  background-color: ${backgroundColorSection};
  color: ${bodyText2};
  background-image: url("/assets/img/casestudies/wellmee/Background3.svg");
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
