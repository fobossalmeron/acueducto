import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import ssrLocale from 'utils/ssrLocale';
import { useLocalizedContent } from 'utils/useLocalizedContent';
import ContactFooter from 'components/layout/footers/ContactFooter';
import Head from 'components/layout/Head/Head';
import PageWrapper from 'components/layout/PageWrapper';
import { LandSection } from 'components/pages/index/LandSection';
import { ProblemSection } from 'components/pages/index/ProblemSection';
import { ProcessSection } from 'components/pages/index/ProcessSection';
import { SocialProofSection } from 'components/pages/index/SocialProofSection';
import { PortfolioSection } from 'components/pages/index/PortfolioSection';
import { StackingCards } from 'components/pages/index/StackingCards';
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
        <LandSection {...t.landing} locale={locale} />
        <StackingCards {...t.stackingCards} />
        <div id="removeArrow">
          <PortfolioSection {...t.work} />
        </div>
        <ProcessSection {...t.process} />
        <SocialProofSection {...t.clients} />
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
