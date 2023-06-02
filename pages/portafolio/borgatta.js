import React, { useEffect, useState } from "react";
import PageClipper from "components/layout/PageClipper";
import Head from "components/layout/Head";
import clientLocale from "utils/clientLocale";
import ssrLocale from "utils/ssrLocale";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import CommonSection from "components/caseStudy/shared/CommonSection";
import Marquee from "components/caseStudy/shared/Marquee";
import TextColumn from "components/caseStudy/shared/TextColumn";
import { H2, H3, P } from "components/shared/Dangerously";
import Quote from "components/caseStudy/shared/Quote2";
import Picture from "components/caseStudy/shared/Picture";
import NextStudy from "components/caseStudy/shared/NextStudy";
import ContactFooter from "components/shared/footers/ContactFooter";

const white = "#FFFFFF";
const mainGradient =
  "linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(123.72deg, #E3772D 18.96%, #F2B559 114.27%);";

const Borgatta = ({ locale, setTitle, pt }) => {
  const [loadAssets, setloadAssets] = useState(false);
  const [t, setT] = useState(pt);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "work.borgatta.json",
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
        image={{ fileName: "og_image_borgatta.png", alt: t?.head.image_alt }}
        es_canonical={"https://acueducto.studio/portafolio/borgatta"}
        en_canonical={"https://acueducto.studio/en/work/borgatta"}
      />
      <Fade triggerOnce>
        <LandSection>
          <Fade delay={300} triggerOnce>
            <LogoBorgatta />
          </Fade>
        </LandSection>
      </Fade>
      <FirstSection>
        <Marquee tags={t?.intro_section.tags} />
        {/* <EditVideo>
          <IntroVideo link={t.link} />
        </EditVideo> */}
        <FirstTextColumn>
          <H2>{t?.intro_section.title}</H2>
          <H3>{t?.intro_section.subtitle}</H3>
          <P>{t?.intro_section.p}</P>
        </FirstTextColumn>
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
        <Picture
          src="/assets/img/casestudies/borgatta/page.png"
          alt="Page"
          width={982.09}
          height={580}
          withWrapper
        />
      </FirstSection>
      <SecondSection>
        <SecondTextColumn>
          <H2>{t?.second_section.title}</H2>
          <P>{t.second_section.p}</P>
        </SecondTextColumn>
        <AspectContainer>
          <Fade delay={300} triggerOnce>
            {t.second_section.aspects.map((aspect, i) => (
              <Aspect key={`aspect${i}`}>
                <span>{i + 1}</span>
                <h4>{aspect.title}</h4>
                <p>{aspect.p}</p>
              </Aspect>
            ))}
          </Fade>
        </AspectContainer>
        <Picture
          src="/assets/img/casestudies/borgatta/cases.png"
          alt="Page"
          width={700}
          height={517.71}
          withWrapper
        />
        <Quote quote={t.second_section.quote} authorColor={"#060809"} color={"#4F4F4F"}/>
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <H2>{t.third_section.title}</H2>
          <P>{t.third_section.p}</P>
        </TextColumn>
        <ResultContainer>
          <Fade delay={300} triggerOnce>
            {t.third_section.results.map((result, i) => (
              <Results key={`result${i}`}>
                <div>
                  <span>
                    <H2>{result.title}</H2>
                    <h1>{result.digits}</h1>
                  </span>
                  <H3>{result.subtitle}</H3>
                </div>
                <P>{result.p}</P>
              </Results>
            ))}
          </Fade>
        </ResultContainer>
        
        <ResultsOnThePage>
          <Fade delay={300} triggerOnce>
            {!isMobile ? (
                <img
                  src="/assets/img/casestudies/borgatta/resultsOnThePage-md.png"
                  alt="Web B360"
                />
              ) : (
                <img
                  src="/assets/img/casestudies/borgatta/resultsOnThePage-sm.png"
                  alt="Web B360"
                />
            )}
          </Fade>
        </ResultsOnThePage>
        <Quote quote={t.third_section.quote} color={"#F4F4F4"} authorColor={"#F4F4F4"}/>
      </ThirdSection>
      <FourthSection>
        <FourthTextColumn>
          <H2>{t.fourth_section.title}</H2>
          <P>{t.fourth_section.p}</P>
        </FourthTextColumn>
        <Fade delay={300} triggerOnce>
          <img
            src="/assets/img/casestudies/borgatta/components.png"
            alt="Web B360"
          />
        </Fade>
      </FourthSection>
      <NextStudy link="blockstem" />
      <ContactFooter />
    </PageClipperBorgatta>
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

const ResultsOnThePage = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const PageClipperBorgatta = styled(PageClipper)`
  background: ${mainGradient};
  background-blend-mode: normal, overlay, normal;
  @media (max-width: 630px) {
    padding: 0px;
  }
`;

const LogoBorgatta = styled.div`
  min-height: 96px;
  max-width: 684px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url("/assets/img/casestudies/borgatta/brand-md.svg");

  @media (max-width: 630px) {
    min-height: 124px;
    background-image: url("/assets/img/casestudies/borgatta/brand-sm.svg");
  }
`;

const LandSection = styled(CommonSection)`
  min-height: 100vh;
  width: 100%;
  background-image: url("/assets/img/casestudies/borgatta/main-md.png");
  background-position: left bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > div {
    max-width: 684px;
    width: 100%;
    margin-top: 15%;
  }
  @media (max-width: 1000px) {
    justify-content: center;
    bottom: 13%;
    & > div {
      max-width: 423px;
      margin: 0% 0% 10% 0%;
    }
  }
  @media (max-width: 850px) {
    & > div {
      max-width: 300px;
    }
  }
  @media (max-width: 630px) {
    bottom: 0%;
    background-image: url("/assets/img/casestudies/borgatta/main-sm.png");
    & > div {
      max-width: 189.41px;
      margin: 0% 0% 60% 0%;
    }
  }
`;

const FirstSection = styled(CommonSection)`
  color: ${white};
  padding-bottom: 10.7%;
  h2, h3 {
    font-weight: 500;
  }
  h2 {
    font-size: 6.58rem;
    padding-bottom: 4px;
    b {
      opacity: 0.7;
      font-weight: 400;
      font-size: 4.5rem;
    }
  }
  h3 {
    padding: 0px;
    font-size: 3.78rem;
    line-height: 131%;
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
      padding: 0px 10px;
    }
  }
`;
const FirstTextColumn = styled(TextColumn)`
  max-width: 700px;
`;

const LessonContainer = styled.div`
  padding: 0 5%;
  margin-top: 4.5%;
  margin-bottom: 7.2%;
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
  box-shadow: 0px 2px 0px rgba(162, 162, 162, 0.1);
  border-radius: 24px;
  
  &:nth-child(1), &:nth-child(5) {
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
    position: relative;
    border: 2px solid #FFFFFF;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 24px;
  }

  @media (max-width: 800px) {
    &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
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
  background-color: #FBFBFD;
  color: #626262;
  padding-bottom: 11.11%;
  padding-top: 11.11%;

  h2 {
    color: #D76E32;
    font-weight: 500;
    font-size: 6.58rem;
    line-height: 105%;
    padding: 4px 0px 26px 0px;
    b {
      color: rgba(215, 110, 50, 0.7);
      font-weight: 400;
      font-size: 4.5rem;
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
    .image {
      padding: 0px 10px;
    }
  }
`;

const SecondTextColumn = styled(TextColumn)`
  @media (max-width: 630px) {
    padding: 0 6%;
  }
`;

const AspectContainer = styled.div`
  margin: 6.7% 15.53%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 48px;
  p {
    font-size: 1.8rem;
    line-height: 131%;
  }
  @media (max-width: 1000px) {
    margin: 6.7% 3.5%;
  }
  @media (max-width: 630px) {
    margin: 6.7% 5%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const Aspect = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 2px 0px rgba(162, 162, 162, 0.1), 0px 1px 3px rgba(162, 162, 162, 0.1), 0px 0px 8px rgba(162, 162, 162, 0.1);
  border-radius: 32px;
  padding: 24px;
  line-height: 131%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.367rem;
    position: relative;
    border: 2px solid #D76E32;
    width: 25px;
    height: 25px;
    color: #D76E32;
    border-radius: 50%;
    margin-bottom: 20px; 
  }
  h4 {
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
  padding-top: 10%;
  color: #FFFFFF;
  background: ${mainGradient};
  h2 {
    color: #F3F4F5;
    font-weight: 500;
    font-size: 6.58rem;
    line-height: 105%;
    padding: 0px 0px 26px 0px;
    b {
      color: rgba(255, 255, 255, 0.7);
      font-weight: 400;
      font-size: 4.5rem;
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
  }
`;

const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  gap: 24px;
  padding: 0 15.27%;
  margin-top: 100px;
  margin-bottom: -6%;

  @media (max-width: 1000px) {
    padding: 0 5%;
  }
  @media (max-width: 630px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    margin-bottom: 63px;
    margin-top: 48px;
  }
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0px 2px 9px rgba(11, 82, 112, 0.06);
  border-radius: 32px;

  div span {
    display: flex;
    align-items: baseline;
  }
  h1 {
    font-size: 8rem;
    line-height: 6.5rem;
  }
  h2 {
    font-size: 3.4rem;
    padding: 0px;
  }
  h3 {
    font-size: 4.8rem;
    line-height: 4rem;
    padding-bottom: 2.4rem;
  }
  p {
    font-size: 1.8rem;
    line-height: 131%;
  }
  
  @media (max-width: 1000px) {
    h1 {
      font-size: 6.8rem;
    }
    h2 {
      font-size: 5.2rem;
    }
    h3 {
      font-size: 3rem;
    }
  }
  @media (max-width: 630px) {
    padding: 20px;
    h1 {
      font-size: 5.6rem;
    }
    h2 {
      font-size: 3.3rem;
    }
    h3 {
      font-size: 3.6rem;
      padding-bottom: 1.6rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const Screens = styled.div`
  min-height: 137em;
  width: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: left top;
  background-image: url("/assets/img/casestudies/borgatta/resultsOnThePage-md.png");
  @media (max-width: 630px) {
    min-height: 111em;
    background-size: 100%;
  }
`;

const FourthSection = styled(CommonSection)`
  background-color: #F4F4F4;
  color: #626262;
  padding-top: 10%;

  h2 {
    color: #D76E32;
    font-weight: 500;
    font-size: 6.58rem;
    line-height: 105%;
    padding: 0px 0px 26px 0px;
    b {
      color: rgba(215, 110, 50, 0.7);
      font-weight: 400;
      font-size: 4.5rem;
    }
  }
  p {
    font-size: 1.8rem;
    line-height: 131%;
  }
  img {
    width: 100%;
    padding: 5% 1%;
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

const FourthTextColumn = styled(TextColumn)`
  @media (max-width: 630px) {
    padding: 0 6%;
  }
`;
