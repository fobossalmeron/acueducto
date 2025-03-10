import { useEffect, useState } from 'react';
import ssrLocale from 'utils/ssrLocale';
import styled from 'styled-components';
import useInterval from 'utils/useInterval';
import Head from 'components/layout/Head/Head';
import TitleSection from 'components/shared/TitleSection';
import PageWrapper from 'components/layout/PageWrapper';
import ContactFooter from 'components/layout/footers/ContactFooter';
import { Fade } from 'react-awesome-reveal';
import PinnedSection from 'components/shared/pinnedSections/PinnedSection';
import { P } from 'components/shared/Dangerously';
import ConsultoriaCTA from 'components/pages/consultoria/ConsultoriaCTA';
import Steps from 'components/shared/Steps';

import {
  DigitalTransformation,
  Strategy,
  Apps,
  Culture,
} from 'components/shared/Icons';

const stepIconArray = [Strategy, DigitalTransformation, Apps, Culture];

interface SpinPinnedSectionProps {
  hasLoaded: boolean;
  children: React.ReactNode;
  intro: {
    pre_title: string;
    words: string[];
    post_title: string;
    seo_h1: string;
  };
}

interface ConsultoriaProps {
  locale: string;
  setTitle: (title: string) => void;
  hasLoaded: boolean;
  pt: any;
}

const SpinPinnedSection: React.FC<SpinPinnedSectionProps> = ({
  hasLoaded,
  children,
  intro,
}) => {
  const [spinWord, setSpinWord] = useState<number>(0);
  useInterval(
    () => {
      setSpinWord(spinWord === 2 ? 0 : spinWord + 1);
    },
    1700,
    hasLoaded,
  );
  let spinTitle = intro.pre_title + intro.words[spinWord] + intro.post_title;

  return (
    <PinnedSection title={spinTitle} seo_h1={intro.seo_h1}>
      {children}
    </PinnedSection>
  );
};

const Consultoria: React.FC<ConsultoriaProps> = ({
  locale,
  setTitle,
  pt,
  hasLoaded,
}) => {
  let {
    head,
    intro,
    cta,
    fit_section,
    process_section,
    areas_section,
    last_section,
  } = pt;

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale]);

  return (
    <PageWrapper>
      <Head
        {...head}
        image={{ fileName: 'og_image_consultoria.jpg', alt: head.image_alt }}
        es_canonical="https://acueducto.studio/consultoria-digital"
      />
      <SpinPinnedSection hasLoaded={hasLoaded} intro={intro}>
        <>
          <P>{intro.p}</P>
          <ConsultoriaCTA cta={cta} />
          <FitSection>
            <h2>{fit_section.title}</h2>
            <P>{fit_section.p}</P>
            <ul>
              {fit_section.ul.map((li, i) => (
                <li key={'fit' + i}>{li}</li>
              ))}
            </ul>
          </FitSection>
        </>
      </SpinPinnedSection>

      <TitleSection {...areas_section.intro} borderTop heading={2} />
      <Steps steps={areas_section.areas} iconArray={stepIconArray}>
        <LastStep>
          <Fade triggerOnce>
            <h3>{areas_section.area_extra.title}</h3>
            <ul>
              {areas_section.area_extra.ul.map((item, index) => (
                <li key={`listItem${index}`}>{item.li}</li>
              ))}
            </ul>
          </Fade>
        </LastStep>
      </Steps>
      <TitleSection {...process_section.intro} borderTop heading={2} />
      <StepGrid>
        {process_section.process.map((step, index) => (
          <Fade key={`consultingStep${index}`} triggerOnce>
            <div>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.p}</p>
            </div>
          </Fade>
        ))}
      </StepGrid>
      <TitleSection {...last_section.intro} borderTop heading={2}>
        <ConsultoriaCTA cta={cta} diagnostico_cta />
      </TitleSection>
      <ContactFooter />
    </PageWrapper>
  );
};

export default Consultoria;

export const getStaticProps = async (context: { locale: string }) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: 'consultoria.json',
  });
  if (!pt) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      pt,
    },
  };
};

const StepGrid = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 8%;
  div {
    margin-right: 2%;
  }
  span {
    color: ${(p) => p.theme.colors.accent_smalltext};
    font-size: 1.6rem;
  }
  h3 {
    font-size: 2.8rem;
    line-height: 125%;
    font-weight: 100;
    margin-bottom: 17px;
    margin-top: 8px;
  }
  p {
    color: ${(p) => p.theme.colors.foreground_low};
    max-width: 220px;
  }
  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 900px;
    grid-gap: 2rem;
    margin: 0 auto;
    margin-bottom: 5%;
    p {
      max-width: 250px;
    }
  }
  @media (max-width: 1250px) {
    h3 {
      font-size: 2.2rem;
      font-weight: 200;
    }
  }
  @media (max-width: 1000px) {
    h3 {
      font-size: 2rem;
    }
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    margin: 0;
    padding: 0 5% 10%;
    p {
      max-width: unset;
    }
    div:not(:last-of-type) {
      margin-bottom: 10%;
    }
    h3 {
      margin-bottom: 5px;
    }
  }
`;

const LastStep = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 3.5rem;
    color: ${(p) => p.theme.colors.accent};
    font-weight: 200;
    max-width: 360px;
    line-height: 110%;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    max-width: 340px;
    li {
      text-decoration: none;
      color: ${(p) => p.theme.colors.foreground_low};
      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
      &:before {
        content: ' ';
        width: 10px;
        height: 3px;
        background-color: ${(p) => p.theme.colors.accent};
        display: inline-block;
        border-radius: 1px;
        margin-right: 10px;
      }
    }
  }
  @media (max-width: 1000px) {
    h3 {
      font-size: 2.5rem;
    }
    ul li {
      font-size: 1.4rem;
    }
  }
`;

const FitSection = styled.div`
  ul {
    list-style: none;
    color: inherit;
    color: ${(p) => p.theme.colors.foreground_low};
    li {
      max-width: 445px;

      &:before {
        content: '– ';
        color: ${(p) => p.theme.colors.accent};
      }
    }
  }
  h2 {
    font-size: 3.2rem;
    line-height: 130%;
    font-weight: 100;
    margin: 0 0 15px;
  }
  p {
    margin-bottom: 5px;
  }
  @media (max-width: 1250px) {
    h2 {
      font-size: 2.9rem;
    }
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 800px) {
    h2 {
      font-size: 2.2rem;
    }
  }
`;
