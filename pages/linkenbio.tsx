import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

import ssrLocale from 'utils/ssrLocale';
import Head from 'components/layout/Head/Head';
import PageWrapper from 'components/layout/PageWrapper';
import MetalPinnedSection from 'components/shared/pinnedSections/MetalPinnedSection';
import ContactFooter from 'components/layout/footers/ContactFooter';

import Articulos from 'public/assets/img/layout/linkenbio/articulos.svg';
import PodcastPng from 'public/assets/img/layout/linkenbio/podcast.png';
import Kit from 'public/assets/img/layout/linkenbio/kit.png';
import Portafolio from 'public/assets/img/layout/linkenbio/portafolio.png';

interface LinkEnBioProps {
  locale: string;
  setTitle: (title: string) => void;
  pt: any;
}

export default function LinkEnBio({ locale, setTitle, pt }: LinkEnBioProps) {
  let { head, title, p } = pt;

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale]);

  interface BioLinkProps {
    url: string;
    title: string;
    subtitle: string;
    image?: StaticImageData | React.ReactNode;
  }

  const BioLink = ({ url, title, subtitle, image }: BioLinkProps) => (
    <Resource>
      {typeof image === 'object' && 'src' in image ? (
        <Image width={415} height={135} src={image} alt={title} />
      ) : (
        image
      )}

      <Link href={url}>
        <Fade triggerOnce>
          <span>{subtitle}</span>
          <h2>{title}</h2>
        </Fade>
      </Link>
    </Resource>
  );

  return (
    <PageWrapper>
      <Head
        {...head}
        es_canonical={'https://acueducto.studio/linkenbio'}
        noIndex
      ></Head>
      <MetalPinnedSection title={title} heading={1}>
        <ul>
          <BioLink
            url="/podcast"
            title="Podcast"
            subtitle="Cuando el río suena"
            image={PodcastPng}
          />
          <BioLink
            url="https://www.latamstartup.club/esenciales-para-startups"
            title="Esenciales para Startups"
            subtitle="Latam Startup 2023"
            image={Kit}
          />
          <BioLink
            url="/podcast/asi-se-ve-un-equipo-de-alto-rendimiento"
            title="Tienes que ver esto"
            subtitle="¿Tienes un negocio?"
            image={<Articulos />}
          />
        </ul>
        <Subtitle>{p}</Subtitle>
        <ul>
          <BioLink
            url="/portafolio"
            title="casos de estudio"
            subtitle="Nuestro trabajo"
            image={Portafolio}
          />
          <BioLink
            url="https://acueducto.notion.site/Vacantes-223b939ba9a14051bca07f8546e8ad26"
            title="Conoce nuestras vacantes"
            subtitle="¿Quieres trabajar con nosotros?"
          />
        </ul>
      </MetalPinnedSection>
      <ContactFooter />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: 'linkenbio.json' });
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

const Subtitle = styled.p`
  color: ${(p) => p.theme.colors.accent} !important;
  font-size: 2.3rem;
  margin: 25px 0 20px;
  @media (max-width: 1250px) {
    font-size: 2rem;
  }
`;

const Resource = styled.li`
  border: 2px solid #828282;
  border-radius: 30px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  transition: 0.2s ease-out border-color;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: ${(p) => p.theme.colors.accent};
    }
  }
  &:focus,
  &:active {
    border-color: ${(p) => p.theme.colors.accent};
    h3 {
      color: ${(p) => p.theme.colors.foreground};
    }
  }
  a {
    padding: 12% 7% 5.5%;
    display: flex;
    flex-direction: column;
  }
  span {
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.foreground_low};
    font-size: 1.3rem;
    letter-spacing: 0.15rem;
  }
  h2 {
    font-size: 3rem;
    line-height: 110%;
    margin: 0;
    text-transform: lowercase;
    font-weight: 200;
  }
  h3 {
    font-size: 3rem;
    color: ${(p) => p.theme.colors.accent};
    font-weight: 200;
    transition: 0.3s ease-out color;
  }
  svg,
  img {
    height: 100%;
    width: auto;
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
  }
  @media (max-width: 1250px) {
    h2,
    h3 {
      font-size: 2.5rem;
    }
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 800px) {
    border-radius: 25px;
  }
  @media (max-width: 600px) {
    border-radius: 20px;
    border: 2px solid ${(p) => p.theme.colors.foreground_lowest};
    a {
      padding: 13% 2% 5.5% 5%;
    }
    h2 {
      font-size: 2.1rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    span {
      font-size: 1rem;
    }
  }
`;
