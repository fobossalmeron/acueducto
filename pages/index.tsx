import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import ssrLocale from 'utils/ssrLocale';
import { useLocalizedContent } from 'utils/useLocalizedContent';
import { Button } from 'components/ui/Button/Button';
import ContactFooter from 'components/layout/footers/ContactFooter';
import Head from 'components/layout/Head/Head';
import { Fade } from 'react-awesome-reveal';
import FAQSection from 'components/pages/index/FAQ';
import PageWrapper from 'components/layout/PageWrapper';
import CaseList from 'components/pages/work/CaseList';
import { ProblemSection } from 'components/pages/index/ProblemSection';
import { ProcessSection } from 'components/pages/index/ProcessSection';
import { StackSection } from 'components/pages/index/StackSection';
import { SocialProofSection } from 'components/pages/index/SocialProofSection';
import { JobOpeningsSection } from 'components/pages/index/JobOpeningsSection';
import { PodcastSection } from 'components/pages/index/PodcastSection';
import { PageProps } from 'types/PageProps';

const HomeVideo = dynamic(() => import('../components/pages/index/HomeVideo'), {
  ssr: false,
});

export default function Index({ locale, pt, hasLoaded, setTitle }: PageProps) {
  const t = useLocalizedContent({
    locale,
    fileName: 'home',
    initialContent: pt,
    onTitleChange: setTitle,
  });
  const [showSpline, setShowSpline] = useState(false);

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
        <Land id="land" $locale={locale}>
          <LandContainer>
            <Fade cascade delay={0.4}>
              <p className="h1">{t.landing.heading}</p>
              <h1 className="h2">{t.landing.tagline}</h1>
              <div className="bg-background border-card-border flex w-fit gap-4 rounded-full border p-3 md:p-4">
                <Link
                  href={locale === 'en' ? '/contact' : '/contacto'}
                  locale={locale}
                  className="flex gap-4"
                >
                  <Button text={t.landing.ctaContact} />
                </Link>
                <Link
                  href={locale === 'en' ? '/work' : '/portafolio'}
                  locale={locale}
                >
                  <Button text={t.landing.ctaWork} variant="outline" />
                </Link>
              </div>
            </Fade>
          </LandContainer>
        </Land>
        <div id="removeArrow">
          <CaseList limit={6} />
        </div>
        <ProblemSection {...t.problem} />
        <ProcessSection {...t.process} />
        <StackSection {...t.stack} />
        <SocialProofSection {...t.clients} />
        <FAQSection t={t.faq} />
        <JobOpeningsSection {...t.openings} />
        <PodcastSection {...t.podcast} />
        <ContactFooter />
      </div>
      {showSpline && <HomeVideo />}
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: 'home.json' });
  return {
    props: {
      pt,
    },
  };
};

const Land = styled.section<{ $locale: string }>`
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
    max-width: ${({ $locale }) => ($locale === 'en' ? '27ch' : '28ch')};
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
