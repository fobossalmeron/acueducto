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

const Wellmee = ({ locale, setTitle, pt }) => {
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "work.wellmee.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });
  }, [locale]);

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
      </FirstSection>
      {/* <SecondSection>
        <TextColumn>
          <H2>{t?.second_section.title}</H2>
          <div>
            {t?.second_section.solutions.map((solution, i) => (
              <Fade delay={300} triggerOnce key={`solution${i}`}>
                <div>
                  <span>
                    <p>{i + 1}</p>
                  </span>
                  <p>{solution.title}</p>
                 <p>{solution.p}</p>
                </div>
              </Fade>
            ))}
          </div>
        </TextColumn>
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <H2>{t.third_section.title}</H2>
          <div>
            {t?.third_section.points.map((point, i) => (
              <Fade delay={300} triggerOnce key={`point${i}`}>
                <div>
                  <span>
                    <p>{i + 1}</p>
                  </span>
                 <p>{point.p}</p>
                </div>
              </Fade>
            ))}
          </div>
        </TextColumn>
        <TextColumn>
          <H3>{t.third_section.subtitle}</H3>
          <P>{t.third_section.p}</P>
          <div>
            {t?.third_section.results.map((result, i) => (
              <Fade delay={300} triggerOnce key={`result${i}`}>
                <span>
                  {result.sign && <h4>{result.sign}</h4>}
                  <h2>{result.title}</h2>
                  <h3>{result.subtitle}</h3>
                </span>
              </Fade>
            ))}
          </div>
        </TextColumn>
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <H2>{t.fourth_section.title}</H2>
          <P>{t.fourth_section.p}</P>
        </TextColumn>
      </FourthSection> */}
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

  div {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 5%;
    gap: 2%;
    img {
      width: 100%;
    }
  }

  .logo {
    max-width: 142px;
  }
  .marca {
    max-width: 391px;
  }

  @media (max-width: 650px) {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

const FirstSection = styled(CommonSection)`
  color: #4A4A73;
  padding-top: 14%;
  padding-bottom: 10.7%;
  background-image: url("/assets/img/casestudies/backgroundEllipse1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

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
    padding-top: 8%;

    div {
      max-width: 342px;
      img {
        box-shadow: 0px 0px 32px 0px rgba(95, 95, 131, 0.05);
      }
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
  padding-bottom: 10rem;
  max-width: 670px;

  @media (max-width: 630px) {
    padding-bottom: 4.8rem;
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
      color: #FFFFFF;
    }
  }

  div {
    gap: 15px;
    display: flex;
    flex-direction: column;

    h5 {
      font-size: 2.5rem;
      margin: 0px;
      font-weight: 500;
      color: #383955;
    }
  
    p {
      color: #4A4A73;
      font-weight: 200;
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
    font-size: 1.65rem;
  }

  .image {
    padding-top: 7rem;
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
    .image {
      padding-top: 4.8rem;
      position: relative;
      left: 3%;
    }
  }
`;

const FourthSection = styled(CommonSection)`
  background-color: #5A5A8C; 
  color: #5C5C81;
  padding-top: 10%;
  color: #FFFFFF;

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

  .image {
    width: 100%;
    max-width: 1000px;
    padding: 7% 0% 0% 0%;
    display: flex;
    justify-content: center;
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