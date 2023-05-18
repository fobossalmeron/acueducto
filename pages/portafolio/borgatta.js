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

const bAccent2 = "rgba(255, 255, 255, 0.7)";
const mainGradient =
  "linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(123.72deg, #E3772D 18.96%, #F2B559 114.27%);";

const Borgatta = ({ locale, setTitle, pt }) => {
  const [loadAssets, setloadAssets] = useState(false);
  const [t, setT] = useState(pt);

  useEffect(() => {
    console.log(t, locale, 'data')
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
      {console.log(locale, t, 'locale')}
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
        <TextColumn>
          <H2>{t?.intro_section.title}</H2>
          <H3>{t?.intro_section.subtitle}</H3>
          <P>{t?.intro_section.p}</P>
          <LessonContainer>
            {t?.intro_section.lessons.map((lesson, i) => (
              <Lesson key={`lessn${i}`}>
                <span>{lesson.title}</span>
                <p>{lesson.p}</p>
              </Lesson>
            ))}
          </LessonContainer>
        </TextColumn>
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <P>{t.second_section.p}</P>
        </TextColumn>
      </SecondSection>
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

const LessonContainer = styled.div`
  margin-top: 10%;
  display: grid;
`;

const SecondSection = styled(CommonSection)`
  background-color: #f3f4f5;
  color: ${(props) => props.theme.colors.over_white};
  padding-bottom: 8%;
  padding-top: 3%;
`;

const Lesson = styled.div`
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0px 2px 0px rgba(162, 162, 162, 0.1);
  border-radius: 24px;
  width: 50%;

  &:not(:last-of-type) {
    margin-bottom: 32px;
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

const LogosContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10%;
  justify-content: space-around;
  margin-top: 5%;
  img {
    max-height: 100px;
    width: auto;
    max-width: 50%;
  }
`;