import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

import ssrLocale from 'utils/ssrLocale';
import { useLocalizedContent } from 'utils/useLocalizedContent';

import Head from 'components/layout/Head/Head';
import TitleSection from 'components/shared/TitleSection';
import PageWrapper from 'components/layout/PageWrapper';
import ContactFooter from 'components/layout/footers/ContactFooter';
import PinnedSection from 'components/shared/pinnedSections/PinnedSection';
import { P } from 'components/shared/Dangerously';
import TitleSectionGrid from 'components/shared/TitleSectionGrid';
import Recursos from 'components/pages/nosotros/Recursos';
import ManifiestoSection from 'components/pages/nosotros/ManifiestoSection';
import { PageProps } from 'types/PageProps';

import pTeam from 'public/assets/img/layout/team.png';
import pPaper from 'public/assets/img/layout/paper.png';

export default function About({ locale, setTitle, pt }: PageProps) {
  const t = useLocalizedContent({
    locale,
    fileName: 'about',
    initialContent: pt,
    onTitleChange: setTitle,
  });

  return (
    <PageWrapper>
      <Head
        {...t.head}
        es_canonical={'https://acueducto.studio/nosotros'}
        en_canonical={'https://acueducto.studio/en/about'}
      />
      <Team as={TitleSectionGrid}>
        <Fade triggerOnce>
          <Image
            src={pTeam}
            width={1110}
            height={500}
            alt="Equipo de Acueducto"
            placeholder="blur"
            priority
          />
        </Fade>
      </Team>
      <ControlledPadding
        as={PinnedSection}
        title={t.intro.title}
        notSticky
        heading={1}
      >
        <P>{t.intro.p}</P>
      </ControlledPadding>
      <PaperPlane>
        <Fade triggerOnce>
          <Image
            src={pPaper}
            width={600}
            height={400}
            placeholder="blur"
            alt="Gran lugar para trabajar"
          />
        </Fade>
      </PaperPlane>
      <ManifiestoSection t={t.manifesto} />
      <TitleSection {...t.values} borderTop heading={2}>
        <Recursos />
      </TitleSection>
      <ContactFooter />
    </PageWrapper>
  );
}

export const getStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: 'about.json' });
  return {
    props: {
      pt,
    },
  };
};

const ControlledPadding = styled.div`
  padding-bottom: 5%;
`;

const PaperPlane = styled.div`
  padding-bottom: calc(70px + 5%);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1300px) {
    & > div {
      max-width: 500px;
    }
  }
  @media (max-width: 1100px) {
    padding-bottom: 9%;
    & > div {
      max-width: 400px;
      padding-top: 2%;
    }
  }
  @media (max-width: 800px) {
    & > div {
      max-width: 300px;
    }
  }
`;

const Team = styled.div`
  padding-top: 140px;
  padding-bottom: 0;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1300px) {
    padding-top: 6.5%;
  }
  @media (max-width: 950px) {
    padding-top: 10%;
  }
  @media (max-width: 750px) {
    padding-top: 15%;
  }
`;
