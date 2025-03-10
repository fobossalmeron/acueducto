import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import ssrLocale from 'utils/ssrLocale';
import { useLocalizedContent } from 'utils/useLocalizedContent';
import TitleSection from 'components/shared/TitleSection';
import { Button } from 'components/ui/Button/Button';
import ContactFooter from 'components/layout/footers/ContactFooter';
import Services from 'components/pages/index/Services';
import Head from 'components/layout/Head/Head';
import Carousel from 'components/pages/index/Carousel';
import { Fade } from 'react-awesome-reveal';
import BroadcastRouter from 'components/pages/podcast/BroadcastRouter';
import FAQSection from 'components/pages/index/FAQ';
import PageWrapper from 'components/layout/PageWrapper';
import Quotes from 'components/pages/index/Quotes';
import CaseList from 'components/pages/work/CaseList';
import { useIsMobile } from 'utils/useIsMobile';

import ClientsDesktop from '../public/assets/img/layout/clients.png';
import ClientsMobile from '../public/assets/img/layout/clientsMobile.png';
import PodcastCover from '../public/assets/img/layout/podcast_cover.png';

const HomeVideo = dynamic(() => import('../components/pages/index/HomeVideo'), {
  ssr: false,
});

interface IndexProps {
  locale: string;
  setTitle: (title: string) => void;
  pt: any;
  hasLoaded: boolean;
}

const Index: React.FC<IndexProps> = ({ locale, pt, hasLoaded, setTitle }) => {
  const t = useLocalizedContent({
    locale,
    fileName: 'home',
    initialContent: pt,
    onTitleChange: setTitle,
  });
  const [showSpline, setShowSpline] = useState(false);
  const isMobile = useIsMobile(760);

  useEffect(() => {
    if (hasLoaded) {
      setShowSpline(true);
    }
  }, [hasLoaded]);

  return (
    <PageWrapper unPadded>
      <Head
        {...t.head}
        es_canonical="https://acueducto.studio"
        en_canonical="https://acueducto.studio/en"
      />
      <div style={{ zIndex: 1 }}>
        <Land id="land" locale={locale}>
          <LandContainer>
            <Fade cascade delay={0.4}>
              <p className="h1">{t.landing.heading}</p>
              <h1 className="h2">{t.landing.tagline}</h1>
              <Link
                href={locale === 'en' ? '/work' : '/portafolio'}
                locale={locale}
              >
                <Button
                  text={t.landing.button}
                  inverse
                  parentComponent="Land"
                />
              </Link>
            </Fade>
          </LandContainer>
        </Land>
        <Intro id="removeArrow">
          <CaseList limit={6} />
          <TitleSection {...t.intro} borderTop heading={2} />
        </Intro>
        <Carousel items={t.carousel} />
        <TitleSection {...t.clients.intro} borderTop heading={2} />
        <LogosSection>
          <Fade triggerOnce>
            <span className="text">{t.clients.span}</span>
            <Image
              src={isMobile ? ClientsMobile : ClientsDesktop}
              width={isMobile ? 550 : 800}
              height={isMobile ? 171 : 120}
              alt="Clientes"
            />
          </Fade>
          <Fade triggerOnce>
            <span className="text">
              {locale === 'en'
                ? 'From our clients'
                : 'Lo que nuestros clientes dicen de nosotros'}
            </span>
            <Quotes isMobile={isMobile} />
            <Link
              href={locale === 'en' ? '/work' : '/portafolio'}
              locale={locale}
            >
              <Button
                text={t.clients.cta}
                inverse
                parentComponent="LogosSection"
              />
            </Link>
          </Fade>
        </LogosSection>
        <Services services={t.services} />
        <FAQSection t={t.faq} />
        <TitleSection {...t.podcast.intro} borderTop heading={2}>
          <Fade>
            <Link href="/podcast" passHref locale="es" legacyBehavior>
              <HoverablePicture>
                <Image
                  src={PodcastCover}
                  width={230}
                  height={230}
                  alt="Cuando el río suena"
                />
              </HoverablePicture>
            </Link>
            <BroadcastRouter
              trackClicks
              episode={3}
              spotify="https://open.spotify.com/show/2YLB7SOeJsLp5DtDuIwX8t"
              apple="https://podcasts.apple.com/us/podcast/cuando-el-r%C3%ADo-suena/id1500473556"
              youtube="https://www.youtube.com/watch?v=k4CDIGcQ3gc&list=PLX3VC_2vq4TTRsyLoyWOHutWND0hQt9lD"
            />
          </Fade>
        </TitleSection>
        <ContactFooter />
      </div>
      {showSpline && <HomeVideo />}
    </PageWrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: 'home.json' });
  return {
    props: {
      pt,
    },
  };
};

export default React.memo(Index);

const Land = styled.section<{ locale: string }>`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 4%;
  grid-gap: 2.2rem;
  align-items: center;
  position: relative;
  .h2 {
    font-size: 2.1rem;
    margin-top: 15px;
    max-width: ${({ locale }) => (locale === 'en' ? '27ch' : '28ch')};
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 2rem;
  }
  .h1 {
    color: ${(props) => props.theme.colors.white};
    line-height: 100%;
    font-size: 7rem;
    max-width: 19ch;
    font-weight: 500;
  }
  @media (max-width: 1115px) {
    .h1 {
      font-size: 6.7rem;
    }
  }
  @media (max-width: 1070px) {
    .h1 {
      font-size: 6.4rem;
    }
  }
  @media (max-width: 1025px) {
    .h1 {
      font-size: 6.2rem;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 0.8;
    }
    .h1 {
      font-size: 5.9rem;
    }
  }
  @media (max-width: 900px) {
    .h1 {
      font-size: 5rem;
    }
    .h2 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 700px) {
    .h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 420px) {
    .h1 {
      font-size: 3.35rem;
    }
    .h2 {
      font-size: 1.6rem;
      max-width: 280px;
    }
  }
`;

const LandContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 10;
  @media (max-width: 570px) {
    grid-column: 1 / span 11;
  }
  @media (max-width: 420px) {
    grid-column: 1 / span 12;
  }
`;

const Intro = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  transition: 0.3s ease all;
  & > div {
    padding-bottom: 6%;
  }
  @media (max-width: 900px) {
    padding-bottom: 6%;
  }
`;

const LogosSection = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: calc(70px + 5%);
  .text {
    color: ${(props) => props.theme.colors.foreground_lower};
    margin-bottom: 3.5rem;
    text-align: center;
    display: block;
    padding: 0 15px;
  }
  & > :nth-child(3) {
    margin-top: 6%;
  }
  & > :nth-last-child(1) {
    margin-top: 5.5rem;
  }
  img {
    height: auto;
  }
  @media (max-width: 1100px) {
    img {
      max-width: 700px;
    }
  }
  @media (max-width: 900px) {
    img {
      max-width: 600px;
    }
  }
  @media (max-width: 760px) {
    img {
      max-width: 450px;
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 12%;
  }
  @media (max-width: 550px) {
    img {
      max-width: 300px;
    }
  }
  @media (max-width: 400px) {
    img {
      max-width: 280px;
    }
  }
`;

const HoverablePicture = styled.a`
  img {
    border: 2.5px solid transparent !important;
    transition: 0.3s ease-out;
    border-radius: 35px;
    width: auto;
    &:hover {
      border-color: ${(p) => p.theme.colors.accent} !important;
    }
  }
`;
