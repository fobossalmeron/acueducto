import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import { useLocalizedContent } from 'utils/useLocalizedContent';
import ssrLocale from 'utils/ssrLocale';
import { useIsMobile } from 'utils/useIsMobile';

import Head from 'components/layout/Head/Head';
import Marquee from 'components/pages/work/Marquee';
import { IntroVideoPadded } from 'components/pages/work/IntroVideo';
import TextColumn from 'components/pages/work/TextColumn';
import { P } from 'components/shared/Dangerously';
import { SeoH1, SeoH2 } from 'components/pages/work/SEOHeadings';
import Quote from 'components/pages/work/Quote';
import NextStudy from 'components/pages/work/NextStudy';
import ContactFooter from 'components/layout/footers/ContactFooter';
import ScreensAnimation from 'components/pages/work/recupera/ScreensAnimation';
import UIComponentsAnimation from 'components/pages/work/recupera/UIComponentsAnimation';
import ScrollCardAnimation from 'components/pages/work/recupera/ScrollCardAnimation';
import Functionalities from 'components/pages/work/recupera/Functionalities';
import { Act3PhoneAnimation } from 'components/pages/work/recupera/Act3PhoneAnimation';

import ToolsMd from 'public/assets/img/casestudies/recupera/toolsMd.png';
import ToolsSm from 'public/assets/img/casestudies/recupera/toolsSm.png';
import DesktopMobile from 'public/assets/img/casestudies/recupera/desktop-mobile.png';

import {
  PageClipperRecupera,
  LandSection,
  FirstSection,
  SecondSection,
  ChallengesContainer,
  Challenge,
  ThirdSection,
  ThirdPoint,
  FourthSection,
  DesktopAndMobile,
} from 'components/pages/work/recupera/Recupera.styles';
import { PageProps } from 'types/PageProps';

const Recupera = ({ locale, setTitle, pt }: PageProps) => {
  const isMobile = useIsMobile();

  const {
    head,
    intro_section,
    second_section,
    third_section,
    fourth_section,
    link,
  } = useLocalizedContent({
    locale,
    fileName: 'work_recupera',
    initialContent: pt,
    onTitleChange: setTitle,
  });

  return (
    <PageClipperRecupera>
      <Head
        {...head}
        image={{ fileName: 'og_image_recupera.png', alt: head.image_alt }}
        es_canonical={'https://acueducto.studio/portafolio/recupera'}
        en_canonical={'https://acueducto.studio/en/work/recupera'}
      />
      <Fade triggerOnce>
        <LandSection>
          {!isMobile ? (
            <>
              <Fade delay={300} triggerOnce>
                <Image
                  src="/assets/img/casestudies/recupera/brand1Md.svg"
                  alt="Logo"
                  width={389}
                  height={540}
                />
              </Fade>
              <Fade delay={300} triggerOnce>
                <div className="logo">
                  <Image
                    src="/assets/img/casestudies/recupera/logoRecupera.svg"
                    alt="Recupera"
                    width={516}
                    height={89}
                  />
                  <SeoH1>{head.seo_h1}</SeoH1>
                </div>
              </Fade>
              <Fade delay={300} triggerOnce>
                <Image
                  src="/assets/img/casestudies/recupera/brand2Md.svg"
                  alt="Logo"
                  width={513}
                  height={668}
                />
              </Fade>
            </>
          ) : (
            <>
              <Fade delay={300} triggerOnce className="brand1">
                <Image
                  src="/assets/img/casestudies/recupera/brand1Sm.svg"
                  alt="Logo"
                  width={149}
                  height={199}
                />
              </Fade>
              <Fade delay={500} triggerOnce>
                <div className="logo">
                  <Image
                    src="/assets/img/casestudies/recupera/logoRecupera.svg"
                    alt="Recupera"
                    width={229}
                    height={39}
                  />
                  <SeoH1>{head.seo_h1}</SeoH1>
                </div>
              </Fade>
              <Fade delay={600} triggerOnce className="brand2">
                <Image
                  src="/assets/img/casestudies/recupera/brand2Sm.svg"
                  alt="Logo"
                  width={208}
                  height={246}
                />
              </Fade>
            </>
          )}
        </LandSection>
      </Fade>
      <FirstSection>
        <Marquee tags={intro_section.tags} />
        <IntroVideoPadded backgroundColor={'#F7F3F1'} link={link} />
        <SeoH2>{head.description}</SeoH2>
        <TextColumn>
          <P className="h2">{intro_section.title}</P>
          <P>{intro_section.p}</P>
        </TextColumn>
        <ScrollCardAnimation isMobile={isMobile} />
        <Quote quote={intro_section.quote} color={'#F4F4F4'} />
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <P className="h2">{second_section.title}</P>
          <P>{second_section.p}</P>
          <ChallengesContainer>
            {second_section.challenges.map((challenge: any, i: number) => (
              <Fade delay={300} triggerOnce key={`challenge${i}`}>
                <Challenge>
                  <span>
                    <p>{i + 1}</p>
                  </span>
                  <p>{challenge.p}</p>
                </Challenge>
              </Fade>
            ))}
          </ChallengesContainer>
        </TextColumn>
        <Container>
          <ScreensAnimation />
        </Container>
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <P className="h2">{third_section.title}</P>
          <P>{third_section.p}</P>
        </TextColumn>
        <TextColumn>
          <div>
            <P className="h3">{third_section.points.first.subtitle}</P>
            <P>{third_section.points.first.p}</P>
            <Act3PhoneAnimation isMobile={isMobile} />
          </div>
        </TextColumn>
        <TextColumn>
          <div>
            <P className="h3">{third_section.points.second.subtitle}</P>
            <P>{third_section.points.second.p}</P>
          </div>
        </TextColumn>
        <UIComponentsAnimation isMobile={isMobile} />
        <TextColumn>
          <ThirdPoint>
            <P className="h3">{third_section.points.third.subtitle}</P>
            <P>{third_section.points.third.p}</P>
            <div className="image">
              {!isMobile ? (
                <Image
                  width={630}
                  height={447}
                  src={ToolsMd}
                  alt="Herramientas"
                />
              ) : (
                <Image
                  width={360}
                  height={405}
                  src={ToolsSm}
                  alt="Herramientas"
                />
              )}
            </div>
          </ThirdPoint>
        </TextColumn>
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <P className="h2">{fourth_section.title}</P>
          <P>{fourth_section.p}</P>
        </TextColumn>
        <Functionalities isMobile={isMobile} t={fourth_section} />
        <Quote quote={fourth_section.quote} color={'rgb(79, 79, 79)'} />
        <DesktopAndMobile>
          <div className="image">
            <Image
              src={DesktopMobile}
              alt="Devices"
              width={1448}
              height={1117}
            />
          </div>
        </DesktopAndMobile>
      </FourthSection>
      <NextStudy link="rahid" />
      <ContactFooter />
    </PageClipperRecupera>
  );
};

export default React.memo(Recupera);

export const getStaticProps = async (context: any) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: 'work_recupera.json',
  });
  return {
    props: {
      pt,
    },
  };
};

const Container = styled.div`
  overflow: hidden;
`;
