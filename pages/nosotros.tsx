import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import ssrLocale from "utils/ssrLocale";
import { useLocalizedContent } from "utils/useLocalizedContent";

import Head, { HeadProps } from "components/layout/Head";
import TitleSection from "components/shared/TitleSection";
import PageWrapper from "components/layout/PageWrapper";
import ContactFooter from "components/shared/footers/ContactFooter";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";
import { P } from "components/shared/Dangerously";
import TitleSectionGrid from "components/shared/TitleSectionGrid";
import Recursos from "components/shared/Recursos";
import ManifiestoSection from "components/ManifiestoSection";

import pTeam from "../public/assets/img/layout/team.png";
import pPaper from "../public/assets/img/layout/paper.png";

interface AboutProps {
  locale: string;
  setTitle: (title: string) => void;
  pt: any; 
}

const About: React.FC<AboutProps> = ({ locale, setTitle, pt }) => {
  const t = useLocalizedContent({
    locale,
    fileName: "about",
    initialContent: pt,
    onTitleChange: setTitle,
  });

  return (
    <PageWrapper>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio/nosotros"}
        en_canonical={"https://acueducto.studio/en/about"}
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
        <Image
          src={pPaper}
          width={600}
          height={400}
          placeholder="blur"
          alt="Gran lugar para trabajar"
        />
      </PaperPlane>
      <ManifiestoSection t={t.manifesto} />
      <TitleSection {...t.values} borderTop heading={2}>
        <Recursos />
      </TitleSection>
      <ContactFooter />
    </PageWrapper>
  );
};

export default React.memo(About);

export const getStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "about.json" });
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
