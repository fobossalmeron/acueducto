import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Fade } from "react-awesome-reveal";
import { GetStaticProps } from "next";

import { useLocalizedContent } from "utils/useLocalizedContent";
import ssrLocale from "utils/ssrLocale";

import Head from "components/layout/Head";
import PageWrapper from "components/layout/PageWrapper";
import ContactFooter from "components/layout/footers/ContactFooter";

import NextStudy from "components/work/NextStudy";
import { P } from "components/shared/Dangerously";
import { SeoH1, SeoH2 } from "components/work/SEOHeadings";
import { IntroVideo } from "components/work/IntroVideo";
import Marquee from "components/work/Marquee";
import Quote from "components/work/Quote";
import Insight from "components/work/Insight";
import TextColumn from "components/work/TextColumn";
import Picture from "components/work/Picture";

import LogoDanza from "public/assets/img/casestudies/ladanzadelasfieras/logoDanza.svg";
import Laurel from "public/assets/img/casestudies/ladanzadelasfieras/laurel.svg";
import PosterLine from "public/assets/img/casestudies/ladanzadelasfieras/line.svg";
import Type_1 from "public/assets/img/casestudies/ladanzadelasfieras/type_1.svg";
import Type_2 from "public/assets/img/casestudies/ladanzadelasfieras/type_2.svg";
import Type_3 from "public/assets/img/casestudies/ladanzadelasfieras/type_3.svg";
import AppSvg from "public/assets/img/casestudies/ladanzadelasfieras/app.svg";

import {
  fierasRed,
  SequenceContainer,
  MacContact,
  Faces,
  MacPress,
  AppGrid,
  Type,
  ColorGrid,
  TypeGrid,
  TransitionWrapper,
  PosterGrid,
  Stat,
  Sixth,
  Fifth,
  Fourth,
  Third,
  Section_Pre,
  Section_Sub,
  SecondSection,
  LaurelNumbers,
  FirstSection,
  LandSection
} from "components/pages/work/ladanzadelasfieras/LaDanzaDeLasFieras.styles";

const ThePlayer = dynamic(
  () => import("components/pages/work/ladanzadelasfieras/VideoPlayer"),
  {
    loading: () => <p>Loading player...</p>,
    ssr: false,
  }
);

interface LaDanzaDeLasFierasProps {
  locale: string;
  setTitle: (title: string) => void;
  pt: any;
}

function LaDanzaDeLasFieras({ locale, setTitle, pt }: LaDanzaDeLasFierasProps) {
  const [loadAssets, setloadAssets] = useState(false);
  const t = useLocalizedContent({
    locale,
    fileName: "work.lddlf",
    initialContent: pt,
    onTitleChange: setTitle,
  });

  useEffect(() => {
    setloadAssets(true);
  }, []);

  return (
    <PageWrapper unPadded>
      <Head
        {...t.head}
        image={{ fileName: "og_image_lddlf.png", alt: t.head.image_alt }}
        es_canonical={"https://acueducto.studio/portafolio/ladanzadelasfieras"}
        en_canonical={"https://acueducto.studio/en/work/ladanzadelasfieras"}
      />
      <Fade triggerOnce>
        <LandSection>
          <Fade delay={300} triggerOnce>
            <LogoDanza />
            <SeoH1>{t.head.seo_h1}</SeoH1>
          </Fade>
        </LandSection>
      </Fade>
      <FirstSection>
        {loadAssets && <Marquee tags={t.intro_section.tags} />}
        <IntroVideo link={t.link} />
        <SeoH2>{t.head.description}</SeoH2>
        <TextColumn>
          <P className="h2">{t.intro_section.title}</P>
          <P>{t.intro_section.p}</P>
          <LaurelNumbers>
            <Laurel />
            <ul>
              {t.intro_section.stats.map((stat, index) => (
                <li key={"stat_" + index}>
                  <b>{stat.big}</b>
                  <p>{stat.small}</p>
                </li>
              ))}
            </ul>
            <Laurel />
          </LaurelNumbers>
          <P>{t.intro_section.p2}</P>
        </TextColumn>
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <P className="h2">{t.second_section.title}</P>
          <P>{t.second_section.p}</P>
        </TextColumn>
        <PosterGrid>
          <Fade triggerOnce>
            <PosterLine />
          </Fade>
          <Picture
            src={"/assets/img/casestudies/ladanzadelasfieras/p_1.jpg"}
            alt="First references for branding"
            width={114}
            height={160}
          />
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/p_2.jpg"
            alt="First references for branding"
            width={114}
            height={160}
          />
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/p_3.jpg"
            alt="First references for branding"
            width={114}
            height={160}
          />
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/boceto.jpg"
            alt="Original sketch of poster design"
            width={382}
            height={544}
          />
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/p_5.jpg"
            alt="Final poster design with awards"
            width={530}
            height={755}
          />
        </PosterGrid>
      </SecondSection>
      <Section_Pre>
        <TextColumn>
          <Type>
            <P>{t.second_section.font_logo}</P>
            <Type_1 />
            <TypeGrid>
              <div>
                <P>{t.second_section.font_body}</P>
                <Type_2 />
              </div>
              <div>
                <p>{t.second_section.font_titles}</p>
                <Type_3 />
              </div>
            </TypeGrid>
            <ColorGrid>
              <div>
                {t.second_section.red}
                <br />
                #DD3814
              </div>
              <div>#080B0C</div>
              <div>#F4F4F4</div>
            </ColorGrid>
          </Type>
        </TextColumn>
      </Section_Pre>
      <Section_Sub>
        <TransitionWrapper>
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/materials.jpg"
            alt="Printed assets for film attendants"
            width={1150}
            height={612}
          />
        </TransitionWrapper>
        <TextColumn>
          <P className="h3">{"– " + t.second_section.subtitle}</P>
          <P>{t.second_section.p2}</P>
        </TextColumn>
        <SequenceContainer>
          {loadAssets && (
            <Fade triggerOnce>
              <ThePlayer
                url={"https://www.youtube.com/watch?v=11aYNilxhko"}
                still={
                  "/assets/img/casestudies/ladanzadelasfieras/videoBack.jpg"
                }
                ratio={"50.62%"}
              />
            </Fade>
          )}
        </SequenceContainer>
      </Section_Sub>
      <Third>
        <TextColumn>
          <P className="h3">{"– " + t.third_section.subtitle}</P>
          <P>{t.third_section.p}</P>
        </TextColumn>
        <Insight
          insight={t.third_section.insights.portfolio}
          number={1}
          color={fierasRed}
        >
          <Faces>
            <Picture
              src="/assets/img/casestudies/ladanzadelasfieras/d_1.jpg"
              alt="Contact cards for directors and producers"
              width={670}
              height={356}
            />
          </Faces>
        </Insight>
        <Quote
          quote={t.third_section.insights.portfolio.quote}
          color={(props) => props.theme.colors.background}
          noMargin
        />
        <Insight
          color={fierasRed}
          insight={t.third_section.insights.press}
          number={2}
        >
          <MacPress>
            <Picture
              src="/assets/img/casestudies/ladanzadelasfieras/i_1.jpg"
              alt="A whole section for the press"
              width={830}
              height={634}
            />
          </MacPress>
        </Insight>
        <Quote
          quote={t.third_section.insights.press.quote}
          color={(props) => props.theme.colors.background}
          noMargin
        />
        <Insight
          color={fierasRed}
          insight={t.third_section.insights.availability}
          number={3}
        >
          <MacContact>
            <Picture
              src="/assets/img/casestudies/ladanzadelasfieras/i_3.jpg"
              alt="A contact component on every page"
              width={670}
              height={1057}
            />
          </MacContact>
        </Insight>
        <TextColumn>
          <P className="h3">{"– " + t.third_section.subtitle2}</P>
          <P>{t.third_section.p2}</P>
          <AppGrid>
            <Picture
              src="/assets/img/casestudies/ladanzadelasfieras/webapp.png"
              alt="A Progressive Web App"
              width={335}
              height={188}
              withWrapper
            />
            <AppSvg />
          </AppGrid>
        </TextColumn>
      </Third>
      <Fourth>
        <TextColumn>
          <P className="h3">{"– " + t.fourth_section.subtitle}</P>
          <P>{t.fourth_section.p}</P>
          <Stat>
            <span>
              81<b>%</b>
            </span>
            <P>{t.fourth_section.stat}</P>
          </Stat>
          <P>{t.fourth_section.p2}</P>
          <div>
            {loadAssets && (
              <video
                autoPlay
                playsInline
                muted
                loop
                poster={
                  "/assets/img/casestudies/ladanzadelasfieras/incognito_poster.jpg"
                }
              >
                <source src="/assets/video/casestudies/ladanzadelasfieras/incognito.mp4" />
              </video>
            )}
          </div>
        </TextColumn>
      </Fourth>
      <Fifth>
        <TextColumn>
          <P className="h2">{t.fifth_section.title}</P>
          <P>{t.fifth_section.p}</P>
        </TextColumn>
        <Quote
          quote={t.fifth_section.quote}
          color={(props) => props.theme.colors.background}
        />
        <TextColumn>
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/l_1.jpg"
            alt="Festival awards"
            width={670}
            height={445}
            withWrapper
          />
          <P>{t.fifth_section.p2}</P>
        </TextColumn>
      </Fifth>
      <Sixth>
        <Fade triggerOnce>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ladanzadelasfieras.com"
          >
            {t.sixth_section.linkp} ladanzadelasfieras.com
          </a>
        </Fade>
      </Sixth>
      <NextStudy link="blockstem" />
      <ContactFooter />
    </PageWrapper>
  );
}

export default React.memo(LaDanzaDeLasFieras);

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale as string, fileName: "work.lddlf.json" });
  return {
    props: {
      pt,
    },
  };
};