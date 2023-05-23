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
          <Quote quote={t.second_section.quote} color={"#1F2A2D"} />
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <H2>{t.third_section.title}</H2>
          <P>{t.third_section.p}</P>
        </TextColumn>
          {t.third_section.results.map((result, i) => (
            <Results key={`result${i}`}>
              <span>{i + 1}</span>
              <p>{result.title}</p>
              <p>{result.digits}</p>
              <p>{result.subtitle}</p>
              <p>{result.p}</p>
            </Results>
          ))}
        <Quote quote={t.third_section.quote} color={"#1F2A2D"} />
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <H2>{t.fourth_section.title}</H2>
          <P>{t.fourth_section.p}</P>
        </TextColumn>
      </FourthSection>
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
  background-position: left center;
  background-size: auto 75%;
  background-repeat: no-repeat;
  align-items: flex-end;
  & > div {
    max-width: 400px;
    width: 70%;
    margin-right: 10%;
  }
  svg {
    width: 100%;
  }
`;

const FirstSection = styled(CommonSection)`
  color: ${(props) => props.theme.colors.foreground};
  padding-bottom: 15.8%;
  font-size: 45px;
  h2 {
    font-size: 65.8px;
    padding: 15% 0 0 0;
    color: ${(props) => props.theme.colors.foreground};
    b {
      color: ${bAccent2};
      font-weight: 400;
    }
  }
  h3 {
    font-size: 37.8px;
    font-weight: 500;
    padding: 1% 0 5% 0;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(159px, 181px);
  gap: 32px;
`;

const SecondSection = styled(CommonSection)`
  background-color: #FBFBFD;
  color: #626262;
  padding-bottom: 8%;
  padding-top: 3%;

  h2 {
    color: #D76E32;
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
  margin-top: 10%;
  margin: 0 232px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(261px);
  gap: 48px;
`;

const Aspect = styled.div`
  display: flex;
  flex-direction: column;
  width: 464px;
  margin: 5% 0;
  box-shadow: 0px 2px 0px rgba(162, 162, 162, 0.1), 0px 1px 3px rgba(162, 162, 162, 0.1), 0px 0px 8px rgba(162, 162, 162, 0.1);
  border-radius: 32px;
  padding: 24px;
  line-height: 131%;
  font-weight: 400;

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
  padding-bottom: 8%;
  color: ${(props) => props.theme.colors.over_black};
  background: ${mainGradient};
  h2,
  h3 {
    color: ${(props) => props.theme.colors.foreground};
    b {
      color: ${bAccent2};
    }
  }
`;

const Results = styled.div`
  display: flex;
  width: 50%;
  margin: 5% 0;
  span {
    background: ${bAccent2};
    min-width: 28px;
    width: 28px;
    line-height: 0;
    min-height: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    border-radius: 100%;
    font-weight: 300;
    color: ${(p) => p.theme.colors.background};
    margin-top: 2px;
    padding-bottom:3px;
  }
  p {
    max-width: 630px;
  }
`;

const FourthSection = styled(CommonSection)`
  background-color: #f3f4f5;
  color: ${(props) => props.theme.colors.over_white};
  padding: 10% 0;
`;