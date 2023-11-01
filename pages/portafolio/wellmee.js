import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import clientLocale from "utils/clientLocale";
import ssrLocale from "utils/ssrLocale";
import styled from "styled-components";
import PageClipper from "components/layout/PageClipper";
import Head from "components/layout/Head";
import CommonSection from "components/caseStudy/shared/CommonSection";
import { Fade } from "react-awesome-reveal";
import Marquee from "components/caseStudy/shared/Marquee";
import IntroVideo from "components/caseStudy/shared/IntroVideo";
import TextColumn from "components/caseStudy/shared/TextColumn";
import { H2, H3, P } from "components/shared/Dangerously";
import NextStudy from "components/caseStudy/shared/NextStudy";
import ContactFooter from "components/shared/footers/ContactFooter";
import AnimatedDataCards from "../../components/caseStudy/wellmee/AnimationDataCards";
import Picture from "components/caseStudy/shared/Picture";
import Combinator from "public/assets/img/casestudies/wellmee/Combinator.png";
import UIComponentsAnimation from "../../components/caseStudy/wellmee/AnimationUIComponents";
import AnimationScrollCards from "../../components/caseStudy/wellmee/AnimationScrollCards";
import AnimationSliceCards from "../../components/caseStudy/wellmee/AnimationSliceCards";
import Image from "next/legacy/image";
import Point4 from "public/assets/img/casestudies/wellmee/Point4.png"

const Wellmee = ({ locale, setTitle, pt }) => {
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

  }, [locale, isMobile]);

  return (
    <PageClipperWellmee>
      <Head
        {...t?.head}
        image={{ fileName: "og_image_recupera.png", alt: t?.head.image_alt }}
        es_canonical={"https://acueducto.studio/portafolio/wellmee"}
        en_canonical={"https://acueducto.studio/en/work/wellmee"}
      />
      <Fade triggerOnce>
        <LandSection>
          <div>
            <img
              src="/assets/img/casestudies/wellmee/brandWellmee.svg"
              alt="Logo"
              className="logo"
            />
            <img
              src="/assets/img/casestudies/wellmee/logoWellmee.svg"
              alt="Logo"
              className="marca"
            />
          </div>
        </LandSection>
      </Fade>
      <FirstSection>
        <Marquee tags={t.intro_section.tags} />
        <EditVideo>
          <IntroVideo link={t.link} />
        </EditVideo>
        <TextColumn>
          <H2>{t?.intro_section.title}</H2>
          <P>{t?.intro_section.p}</P>
        </TextColumn>
        <TextColumn>
          <H3>{t?.intro_section.characteristics.first.subtitle}</H3>
          <P>{t?.intro_section.characteristics.first.p}</P>
        </TextColumn>
        <AnimatedDataCards/>
        <TextColumn>
          <H3>{t.intro_section.characteristics.second.subtitle}</H3>
          <P>{t.intro_section.characteristics.second.p}</P>
          <div className="combinator">
            <Picture
              src={Combinator}
              alt="Combinator"
            />
          </div>
        </TextColumn>
        <TextColumn>
          <H3>{t.intro_section.characteristics.third.subtitle}</H3>
          <ChallengesContainer>
            {t?.intro_section.characteristics.third.challenges.map((challenge, i) => (
              <Fade delay={300} triggerOnce key={`challenge${i}`}>
                <Challenge>
                  <span>
                    <p>{i + 1}</p>
                  </span>
                  <div>
                    <h5>{challenge.title}</h5>
                    <p>{challenge.p}</p>
                  </div>
                </Challenge>
              </Fade>
            ))}
          </ChallengesContainer>
        </TextColumn>
        <UIComponentsAnimation isMobile={isMobile} />
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <H2>{t?.second_section.title}</H2>
        </TextColumn>
        <AnimationSliceCards t={t?.second_section}/>
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <H2>{t.third_section.title}</H2>
          <PointContainer>
            <Fade delay={300} triggerOnce key={'point1'}>
              <Point style={{ paddingBottom: isMobile ? '49px' : '90px' }}>
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
                  height= {263}
                />
              </Point>
            </Fade>
          </PointContainer>
        </TextColumn>
        <TextColumn>
            <Fade delay={300} triggerOnce key={'point2'}>
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
                      height= {isMobile ? 37 : 48}
                    />
                  </div>
                  <p>{step}</p>
                </Step>
              ))}
            </StepContainer>
          </Fade>
          <TextColumn>
            <Fade delay={300} triggerOnce key={'point3'}>
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
          <AnimationScrollCards />
          <TextColumn>
            <Fade delay={300} triggerOnce key={'point4'}>
              <Point>
                <div>
                  <span className="number">
                    <p>4</p>
                  </span>
                  <p>{t?.third_section.points[3].p}</p>
                </div>
                <div className="point4">
                  <Image
                    src={Point4}
                    alt="Point"
                  />
                </div>
              </Point>
            </Fade>
          </TextColumn>
          <TextColumn>
            <H3>{t.third_section.subtitle}</H3>
            <P>{t.third_section.p}</P>
          </TextColumn>
          <Fade delay={300} triggerOnce>
            <ContainerResultCard>
              {t?.third_section.results.map((result, i) => (
                <div className={`result${i}`} key={`result${i}`}>
                  <div>
                    {result.sign && <h5>{result.sign}</h5>}
                    <h3>{result.title}</h3>
                    <h4>{i !== 1 && result.first_subtitle}</h4>
                  </div>
                  <h4>{i === 1 && result.first_subtitle}</h4>
                  <h4>{result.second_subtitle}</h4>
                  <p>{result.p}</p>
                </div>
              ))}
            </ContainerResultCard>
          </Fade>
        <Picture
          src={"/assets/img/casestudies/wellmee/Iphone1.png"}
          alt="Iphone"
          width={902}
          height= {450}
        />
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <H2>{t.fourth_section.title}</H2>
          <P>{t.fourth_section.p}</P>
        </TextColumn>
        <Picture
          src={"/assets/img/casestudies/wellmee/Iphone2.png"}
          alt="Wellmee"
          width={914}
          height= {836}
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

const PageClipperWellmee = styled(PageClipper)`
  background-color: #F3F6F3;

  @media (max-width: 1300px) {
    padding: 0px;
  }
`;

const LandSection = styled(CommonSection)`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/img/casestudies/wellmee/BackgroundDesktop.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;

  div {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 30px;
    gap: 2%;
    padding-top: 7%;
    img {
      width: 100%;
    }
  }

  .logo {
    max-width: 140px;
    width: 100%;
  }
  .marca {
    max-width: 388px;
    width: 100%;
  }

  @media (max-width: 1050px) {
    background-image: url("/assets/img/casestudies/wellmee/BackgroundMobile.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    .logo {
      max-width: 90px;
    }
    .marca {
      max-width: 250px;
    }
  }

  @media (max-width: 650px) {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .logo {
      padding: 0px 8px 30px 8px;
    }
  }
`;

const FirstSection = styled(CommonSection)`
  color: #4A4A73;
  padding-bottom: 10.7%;
  background-image: url("/assets/img/casestudies/wellmee/Background1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0% 30%;

  h2, h3 {
    font-weight: 500;
  }
  h2 {
    font-size: 5.8rem;
    padding-bottom: 26px;
    b {
      color: #00CEBA;
      font-weight: 200;
      font-size: 4rem;
    }
  }
  h3 {
    color: #383955;
    padding: 0px;
    padding-bottom: 4%;
    font-size: 3.6rem;
    line-height: 131%;
    margin-top: 100px;
    margin-bottom: 0px;
    width: 100%;
  }

  .combinator {
    display: flex;
    justify-content: center;
    padding: 8% 7% 0% 7%;
  
    div{
      max-width: 342px;
      span {
        box-shadow: 0px 0px 32px 0px rgba(95, 95, 131, 0.05);
      }
    }
  }

  @media (max-width: 1000px) {
    background-position: 0% 33%;
    h2 {
      font-size: 5.2rem;
      b {
        font-size: 3.2rem;
      }
    }
    h3 {
      font-size: 3rem;
      margin-top: 80px;
    }
  }
  @media (max-width: 800px) {
    background-position: 0% 35%;
    }
  }
  @media (max-width: 630px) {
    background-position: 0% 31%;
    h2 {
      font-size: 3.3rem;
      b {
        font-size: 2rem;
      }
    }
    h3 {
      font-size: 1.9rem;
      margin-top: 48px;
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

const ChallengesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  padding-top: 2rem;
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
    margin-top: 1%;
    p {
      font-size: 1.8rem;
      color: #FFFFFF;
    }
  }

  div {
    gap: 20px;
    display: flex;
    flex-direction: column;

    h5 {
      font-size: 2.4rem;
      margin: 0px;
      font-weight: 500;
      color: #383955;
    }
  
    p {
      color: #4A4A73;
      font-size: 1.8rem;
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

    div {
      display: flex;
      flex-direction: column;
  
      h5 {
        font-size: 1.9rem;
        margin: 0px;
        font-weight: 500;
        color: #383955;
      }
    
      p {
        color: #4A4A73;
        font-size: 1.5rem;
      }
    }
  }
`;

const SecondSection = styled(CommonSection)`
  background-color: #5A5A8C;
  color: #5C5C81;
  padding-bottom: 11.11%;
  padding-top: 11.11%;
  color: #FFFFFF;

  h2 {
    font-weight: 500;
    font-size: 5.8rem;
    line-height: 105%;
    padding: 4px 0px 26px 0px;
    b {
      color: #00CEBA;
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

const ThirdSection = styled(CommonSection)`
  padding-bottom: 10%;
  padding-top: 10%;
  color: #4A4A73;
  background-image: url("/assets/img/casestudies/wellmee/Background2.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0% 69%;

  h2 {
    color: #383955;
    font-weight: 500;
    font-size: 5.8rem;
    line-height: 105%;
    padding: 0px 0px 26px 0px;
    b {
      color: #00CEBA;
      font-weight: 200;
      font-size: 4rem;
    }
  }
  h3{
    color: #383955;
    font-size: 3.6rem;
    font-weight: 400;
    padding: 7.5% 0 0 0;
    margin-bottom: 12px;
  }

  div div div p {
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {
    background-position: 0% 56%;
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
    background-position: 0% 61%;
    h2 {
      font-size: 3.3rem;
      b {
        font-size: 2rem;
      }
    }
    h3 {
      font-size: 1.9rem;
    }
    div div div p {
      font-size: 1.5rem;
    }
    div div span p {
      font-size: 1.4rem;
      position: relative;
      bottom: 1px;
      right: 0.5px;
    }
    .image {
      padding-top: 4.8rem;
      position: relative;
      left: 3%;
    }
  }
`;

const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
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
    flex-direction: row;
    gap: 20px;
    max-width: 648px;
    justify-content: center;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #383955;
      min-width: 31px;
      max-width: 31px;
      height: 31px;
      color: #FFFFFF;
    }

    p {
      padding-bottom: 48px;
    }

    .number {
      border-radius: 50%;
    }

    .number p {
      padding-bottom: 0px;
    }
  }

  .point4 {
    align-self: center;
    max-width: 600px;
    padding: 0% 5%;
    span span {
      box-shadow: 1.20374px 1.20374px 13.24111px 0px rgba(64, 64, 64, 0.05);
    }
  }

  @media (max-width: 800px){
    .point4 {
      max-width: 350px;
    }
  }

  @media (max-width: 500px){
    div {
      display: flex;
      flex-direction: column;
      gap: 16px;
      p {
        padding-bottom: 40px;
      }
      span {
        width: 24px;
        min-width: 24px;
        height: 24px;
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

  @media (max-width: 700px) {
    background-image: url("/assets/img/casestudies/wellmee/Background5.svg");
    background-size: 10%;
    background-position: 12% -100%;
    flex-direction: column;
    gap: 32px;
    padding-bottom: 50px;
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
    background-color: #FCFDFC;
    border-radius: 24px;
    box-shadow: 1.20374px 1.20374px 13.24111px 0px rgba(64, 64, 64, 0.05);
  }

  p {
    text-align: center;
    font-weight: 500;
    color: #4A4A73;
  }

  @media (max-width: 900px){
    div {
      width: 100px;
      height: 100px;
      border-radius: 20px;
    }
    p {
      font-size: 16.5px;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row !important;
    max-width: 100%;

    div {
      width: 80px;
      height: 80px;
    }
    p {
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
    background-color: #FFFFFF;
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

    h3 {
      font-size: 8rem;
      margin: 0px;
      padding: 0px;
      line-height: 100%;
    }
    h4 {
      font-size: 4.8rem;
      line-height: 1;
      padding-bottom: 4px;
    }
    h5 {
      font-size: 3.4rem;
      font-weight: 400;
      margin: 0px;
    }
    p {
      font-size: 1.8rem !important;
      color: #8A8CB2;
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

  @media (max-width: 850px){
    display: flex;
    flex-direction: column;
    padding: 60px 20px;

    .result0, .result1, .result2, .result3 {
      max-width: 299px;
    }

    .result1 {
      left: 0px;
    }

    & > div {
      h3 {
        font-size: 5.6rem;
      }
      h4 {
        font-size: 3.4rem;
      }
      h5 {
        font-size: 3.4rem;
      }
      p {
        font-size: 1.5rem !important;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 40px 38px 48px 38px;
    & > div {
      padding: 20px;
    }
  }
`;

const FourthSection = styled(CommonSection)`
  background-color: #5A5A8C;
  padding-top: 10%;
  color: #FFFFFF;
  background-image: url("/assets/img/casestudies/wellmee/Background3.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;

  h2 {
    font-weight: 500;
    font-size: 5.6rem;
    line-height: 105%;
    padding: 0px 0px 26px 0px;
    b {
      color: #00CEBA;
      font-weight: 200;
      font-size: 4rem;
    }
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