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
import LogoBorgatta from "public/assets/img/casestudies/borgatta/logoBorgatta.svg";
import Quote from "components/caseStudy/shared/Quote";
import Picture from "components/caseStudy/shared/Picture";
import NextStudy from "components/caseStudy/shared/NextStudy";
import ContactFooter from "components/shared/footers/ContactFooter";

const bAccent2 = "rgba(255, 255, 255, 0.7)";
const mainGradient =
  "linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(123.72deg, #E3772D 18.96%, #F2B559 114.27%);";

const Borgatta = ({ locale, setTitle, pt }) => {
  const [loadAssets, setloadAssets] = useState(false);
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "work.borgatta.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });
    setloadAssets(true);
  }, [locale]);

  return (
    <PageClipperBorgatta>
      <Head
        {...t?.head}
        image={{ fileName: "og_image_blockstem.png", alt: t?.head.image_alt }}
        es_canonical={"https://acueducto.studio/portafolio/borgatta"}
        en_canonical={"https://acueducto.studio/en/work/borgatta"}
      />
      <Fade triggerOnce>
        <LandSection>
          <Fade delay={300} triggerOnce>
            <LogoBorgatta/>
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
          <LessonContainer>
            {t?.intro_section.lessons.map((lesson, i) => (
              <Lesson key={`lessn${i}`}>
                <span>{i + 1}</span>
                <p>{lesson.p}</p>
              </Lesson>
            ))}
          </LessonContainer>
        </FirstTextColumn>
        <Picture
          src="/assets/img/casestudies/borgatta/page.png"
          alt="Page"
          width={992.57}
          height={600}
          withWrapper
        />
      </FirstSection>
      <SecondSection>
        <FirstTextColumn>
          <H2>{t?.second_section.title}</H2>
          <P>{t.second_section.p}</P>
        </FirstTextColumn>
          <AspectContainer>
            {t.second_section.aspects.map((aspect, i) => (
              <Aspect key={`aspect${i}`}>
                <span>{i + 1}</span>
                <h4>{aspect.title}</h4>
                <p>{aspect.p}</p>
              </Aspect>
            ))}
          </AspectContainer>
          <Picture
            src="/assets/img/casestudies/borgatta/cases.png"
            alt="Page"
            width={700}
            height={517.71}
            withWrapper
          />
          <Quote quote={t.second_section.quote} color={"#1F2A2D"} />
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <H2>{t.third_section.title}</H2>
          <P>{t.third_section.p}</P>
        </TextColumn>
        <ResultContainer>
          {t.third_section.results.map((result, i) => (
            <Results key={`result${i}`}>
              <div>
                <H2>{result.title}</H2>
                <h1>{result.digits}</h1>
                <H3>{result.subtitle}</H3>
              </div>
              <P>{result.p}</P>
            </Results>
          ))}
        </ResultContainer>
        <Quote quote={t.third_section.quote} color={"#1F2A2D"} />
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <H2>{t.fourth_section.title}</H2>
          <P>{t.fourth_section.p}</P>
        </TextColumn>
      </FourthSection>
      <NextStudy link="blockstem" />
      <ContactFooter />
    </PageClipperBorgatta>
  );
};

export default Borgatta;

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

const PageClipperBorgatta = styled(PageClipper)`
  background: ${mainGradient};
  background-blend-mode: normal, overlay, normal;
`;

const LandSection = styled(CommonSection)`
  min-height: 100vh;
  background-image: url("/assets/img/casestudies/borgatta/main-bg.svg");
  background-position: left bottom;
  background-size: auto 72%;
  background-repeat: no-repeat;
  align-items: flex-end;
  & > div {
    max-width: 684px;
    width: 100%;
    margin-right: 26%;
    margin-bottom: 15%;
  }
  svg {
    width: 100%;
  }
`;

const FirstSection = styled(CommonSection)`
  color: #FFFFFF;
  padding-bottom: 10.7%;
  h2 {
    font-weight: 500;
    font-size: 65.8px;
    b {
      color: rgba(255, 255, 255, 0.7);
      font-weight: 400;
      font-size: 45px;
    }
  }
  h3 {
    font-size: 37.8px;
    font-weight: 500;
    padding: 4px 0px 26px 0px;
    line-height: 131%;
    margin: 0;
    max-width: 700px;
  }
  ul li,
  p {
    font-size: 18px;
    color: #FFFFFF;
    line-height: 131%;
    max-width: 700px;
  }
`;

const FirstTextColumn = styled.div`
  margin: 0 25.69%;
`;

const LessonContainer = styled.div`
  margin-top: 10%;
  margin-bottom: 13.8%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(159px, 181px);
  gap: 32px;
`;

const SecondSection = styled(CommonSection)`
  background-color: #FBFBFD;
  color: #626262;
  padding-bottom: 11.11%;
  padding-top: 11.11%;

  h2 {
    color: #D76E32;
    font-weight: 500;
    font-size: 65.8px;
    line-height: 105%;
    padding: 4px 0px 26px 0px;
    b {
      color: rgba(215, 110, 50, 0.7);
      font-weight: 400;
      font-size: 45px;
    }
  }
  p {
    font-size: 18px;
    line-height: 131%;
  }
`;

const Lesson = styled.div`
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0px 2px 0px rgba(162, 162, 162, 0.1);
  border-radius: 24px;
  
  &:nth-child(1) {
    width: 320px;
  }
  &:nth-child(2) {
    width: 348px;
  }
  &:nth-child(5) {
  }
  &:nth-of-type(2) {
    span {
      &::before,
      &::after {
        background: linear-gradient(92.93deg, #1e6a5a -6.6%, #4da38b 150.71%);
      }
    }
  }
  p {
    margin: 20px 24px 24px 24px;
    font-size: 16.5px;
  }
  span {
    display: flex;
    justify-content: center;
    font-size: 13.67px;
    position: relative;
    border: 2px solid #FFFFFF;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 24px;
  }
`;

const AspectContainer = styled.div`
  margin: 6.7% 15.53%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
`;

const Aspect = styled.div`
  display: flex;
  flex-direction: column;
  width: 464px;
  box-shadow: 0px 2px 0px rgba(162, 162, 162, 0.1), 0px 1px 3px rgba(162, 162, 162, 0.1), 0px 0px 8px rgba(162, 162, 162, 0.1);
  border-radius: 32px;
  padding: 24px;
  line-height: 131%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13.67px;
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
    font-size: 16.5px;
  }
`;

const ThirdSection = styled(CommonSection)`
  padding-bottom: 3.48%;
  padding-top: 3.48%;
  color: #FFFFFF;
  background: ${mainGradient};
  h2 {
    color: #F3F4F5;
    font-weight: 500;
    font-size: 65.8px;
    line-height: 105%;
    padding: 0px 0px 26px 0px;
    b {
      color: rgba(255, 255, 255, 0.7);
      font-weight: 400;
      font-size: 45px;
    }
  }
  p {
    font-size: 18px;
    line-height: 131%;
  }
`;

const ResultContainer = styled.div`
  margin: 100px 220px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  width: 488px;
  padding: 0px 40px 40px 40px;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0px 2px 9px rgba(11, 82, 112, 0.06);
  border-radius: 32px;

  div {
    display: flex;
    align-items: baseline;
  }
  h1 {
    font-size: 80px;
  }
  h2 {
    font-size: 34px;
    padding: 0px;
  }
  h3 {
    font-size: 48px;
  }
  p {
    font-size: 18px;
    line-height: 131%;
  }
  &:nth-child(4), &:nth-child(6) {
    div {
      background-color: blue;
    }
  }
`;

const FourthSection = styled(CommonSection)`
  background-color: #F4F4F4;
  color: #626262;
  padding: 10% 0;

  h2 {
    color: #D76E32;
    font-weight: 500;
    font-size: 65.8px;
    line-height: 105%;
    padding: 0px 0px 26px 0px;
    b {
      color: rgba(215, 110, 50, 0.7);
      font-weight: 400;
      font-size: 45px;
    }
  }
  p {
    font-size: 18px;
    line-height: 131%;
  }
`;