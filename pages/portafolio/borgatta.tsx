import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import Head from "components/layout/Head";
import { Fade } from "react-awesome-reveal";

import LandSection from "components/pages/work/borgatta/LandSection";
import AnimatedUIComponents from "components/pages/work/borgatta/AnimatedUIComponents";
import CaseTable from "../../components/pages/work/borgatta/CaseTable";
import Marquee from "components/work/Marquee";
import TextColumn from "components/work/TextColumn";
import { P } from "components/shared/Dangerously";
import { SeoH2 } from "components/work/SEOHeadings";
import Quote from "components/work/Quote";
import Picture from "components/work/Picture";
import NextStudy from "components/work/NextStudy";
import ContactFooter from "components/layout/footers/ContactFooter";
import { IntroVideoPadded } from "components/work/IntroVideo";

import ResultMd from "public/assets/img/casestudies/borgatta/resultsOnThePage-md.png";
import ResultSm from "public/assets/img/casestudies/borgatta/resultsOnThePage-sm.png";
import Page from "public/assets/img/casestudies/borgatta/page.png";

import { useLocalizedContent } from "utils/useLocalizedContent";
import ssrLocale from "utils/ssrLocale";
import { useIsMobile } from "utils/useIsMobile";

import {
  PageWrapperBorgatta,
  FirstSection,
  LessonContainer,
  Lesson,
  SecondSection,
  AspectContainer,
  Aspect,
  ThirdSection,
  ResultContainer,
  Results,
  FourthSection,
} from "components/pages/work/borgatta/Borgatta.styles";

interface BorgattaProps {
  locale: string;
  setTitle: (title: string) => void;
  pt: any;
}

const Borgatta: React.FC<BorgattaProps> = ({ locale, setTitle, pt }) => {
  const [loadAssets, setloadAssets] = useState(false);
  const isMobile = useIsMobile(650);

  const t = useLocalizedContent({
    locale,
    fileName: "work.borgatta",
    initialContent: pt,
    onTitleChange: setTitle,
  });

  useEffect(() => {
    setloadAssets(true);
  }, []);

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
        <IntroVideoPadded backgroundColor={"#f7f6f7"} link={t.link} />
        <SeoH2>{t.head.description}</SeoH2>
        <Fade delay={300} triggerOnce>
          <TextColumn>
            <P className="h2">{t.intro_section.title}</P>
            <P className="h3">{t.intro_section.subtitle}</P>
            <P>{t.intro_section.p}</P>
            <Fade delay={300} triggerOnce>
              <LessonContainer>
                {t?.intro_section.lessons.map((lesson: any, i: number) => (
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
            {t.second_section.aspects.map((aspect: any, i: number) => (
              <Aspect key={`aspect${i}`}>
                <Image
                  src={`/assets/img/casestudies/borgatta/Icon${i + 1}.svg`}
                  width={50}
                  height={50}
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
            {t.third_section.results.map((result: any, i: number) => (
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
          <Image
            src={!isMobile ? ResultMd : ResultSm}
            alt="Web B360"
            loading="lazy"
            placeholder="blur"
            blurDataURL={ResultMd.src}
          />
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

export const getStaticProps = async (context: any) => {
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
