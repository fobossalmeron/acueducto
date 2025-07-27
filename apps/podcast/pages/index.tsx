import React, { useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { Fade } from 'react-awesome-reveal';
import { Button } from '@acueducto/shared';
import Tilt from 'react-parallax-tilt';
import * as FacebookPixel from '@acueducto/shared/utils/facebookPixel';

import EpisodeFeature from '../components/pages/EpisodeFeature/EpisodeFeature';
import Head, { HeadProps } from '@acueducto/shared/components/layout/Head/Head';
import PageWrapper from '@acueducto/shared/components/layout/PageWrapper';
import { H1, H2, P } from '@acueducto/shared/components/shared/Dangerously';
import PinnedSection from '@acueducto/shared/components/shared/pinnedSections/PinnedSection';
import TitleSectionGrid from '@acueducto/shared/components/shared/TitleSectionGrid';
import TitleSection from '@acueducto/shared/components/shared/TitleSection';
import MetalForm from '@acueducto/shared/components/shared/MetalForm';
import ContactFooter from '@acueducto/shared/components/layout/footers/ContactFooter';

import ssrLocale from 'utils/ssrLocale';
import { createContact } from '@acueducto/shared';
import { useIsMobile } from '@acueducto/shared/utils/useIsMobile';
import { createClient } from '../prismicio';
import { GetStaticProps } from 'next';
import { PrismicPodcastEpisode } from '../components/pages/podcast.types';

import pHosts from 'public/assets/images/layout/hosts.jpg';

import {
  PodcastGrid,
  FullSection,
  EpisodesSection,
  FeatureList,
  HostsSection,
  Limiter,
  Parallax,
  FullLastSection,
} from '../components/pages/podcast-landing/podcastLanding.styles';
import { PageProps } from '@acueducto/shared/types/PageProps';

// Lazy load ContactFooter
/* const ContactFooter = dynamic(
  () => import('@acueducto/shared/components/layout/footers/ContactFooter'),
  {
    loading: () => <p>Loading...</p>,
  },
); */

interface PodcastLandingProps extends PageProps {
  lastPrismicEpisode: PrismicPodcastEpisode;
  featuredEpisodes: PrismicPodcastEpisode[];
  pt: {
    intro: {
      subtitle: string;
      title: string;
      p: string;
      form: {
        email: {
          placeholder: string;
          errorMissing: string;
          errorInvalid: string;
        };
        loading: string;
        submit: string;
        success: string;
      };
    };
    head: HeadProps;
    banner: {
      title: string;
      p: string;
      button: string;
    };
    favorites: {
      title: string;
      button: string;
    };
    hosts: {
      title: string;
      p: string;
    };
    closing: {
      label: string;
      title: string;
      p: string;
    };
  };
}

interface SubmitData {
  email: string;
}

export default function PodcastLanding({
  locale,
  setTitle,
  lastPrismicEpisode,
  featuredEpisodes,
  pt,
}: PodcastLandingProps) {
  const { intro, head, banner, favorites, hosts, closing } = pt;
  const isMobile = useIsMobile(600);

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale, head.headerTitle, setTitle]);

  const handleSubscribe = useCallback((data: SubmitData, source: string) => {
    createContact({
      email: data.email,
      listIds: [2],
      updateEnabled: true,
      attributes: {
        SUBSCRIBED_FROM: source,
      },
    });

    FacebookPixel.trackSubscribe(data.email);
  }, []);

  const renderEpisodeCard = useCallback(
    (episode: PrismicPodcastEpisode, index: number, isPortrait = false) => {
      if (!episode?.data?.introduction?.[0] || !episode.data.images[0]?.solas) return null;

      const episodeData = episode.data.introduction[0];

      return (
        <div key={`episode-${index}`}>
          <Fade triggerOnce>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} tiltEnable={!isMobile}>
              <EpisodeFeature
                title={episodeData.title[0].text}
                guest={episodeData.guest}
                business={episodeData.business}
                slug={episode.uid}
                episode={episodeData.episode}
                image={episode.data.images[0].solas}
                logos={episode.logos}
                portrait={isPortrait}
              />
            </Tilt>
          </Fade>
        </div>
      );
    },
    [isMobile],
  );

  const memoizedFeaturedEpisodes = useMemo(
    () =>
      featuredEpisodes.map((episode, index) =>
        renderEpisodeCard(episode, index, true),
      ),
    [featuredEpisodes, renderEpisodeCard],
  );

  if (!head?.image?.alt) {
    // Return a loader or null if head is not ready
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper>
      <Head
        {...head}
        image={{ fileName: 'og_image_podcast.png', alt: head.image.alt }}
        es_canonical={`https://acueducto.studio/podcast`}
      />
      <PodcastGrid>
        <Fade triggerOnce>
          <div>
            <H1>{intro.subtitle}</H1>
            <H2 className="h1">{intro.title}</H2>
            <p>{intro.p}</p>
            <MetalForm
              onSubmit={(data) =>
                handleSubscribe(data, 'Landing Header')
              }
              id={'podcastOL'}
              text={intro.form}
            />
          </div>
          <Parallax>
            <Tilt
              trackOnWindow={true}
              transitionSpeed={2500}
              className="parallax-effect-img"
            >
              <Image
                className="inner-element"
                width={438}
                height={438}
                src="/shared/img/layout/logos.png"
                alt="Cuando el río suena"
              />
            </Tilt>
          </Parallax>
        </Fade>
      </PodcastGrid>
      <FullSection>
        <div>
          <Fade triggerOnce>
            <h2>{banner.title}</h2>
            <p>{banner.p}</p>
            <div>
              {lastPrismicEpisode.uid && (
                <Link href={'/podcast/' + lastPrismicEpisode.uid}>
                  <Button text={banner.button} variant="secondary" />
                </Link>
              )}
            </div>
          </Fade>
        </div>
        <Limiter>
          <p className="lastEpisodeText">Último episodio</p>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} tiltEnable={!isMobile}>
            <EpisodeFeature
              title={lastPrismicEpisode.data.introduction[0].title[0].text}
              guest={lastPrismicEpisode.data.introduction[0].guest}
              business={lastPrismicEpisode.data.introduction[0].business}
              slug={lastPrismicEpisode.uid || ''}
              episode={lastPrismicEpisode.data.introduction[0].episode}
              image={lastPrismicEpisode.data.images[0].solas}
              blue
            />
          </Tilt>
        </Limiter>
      </FullSection>
      <EpisodesSection>
        <TitleSection title={favorites.title} heading={2} />
        <FeatureList>
          <div>{memoizedFeaturedEpisodes}</div>
        </FeatureList>
        <Fade triggerOnce>
          <Link href={`/podcast/episodios`}>
            <Button text={favorites.button} />
          </Link>
        </Fade>
      </EpisodesSection>
      <HostsSection>
        <PinnedSection title={hosts.title} notSticky heading={2}>
          <P>{hosts.p}</P>
        </PinnedSection>
        <TitleSectionGrid style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Fade triggerOnce>
            <Image
              src={pHosts}
              alt="Rodrigo Salmerón y Artemio Pedraza"
              placeholder="blur"
              width={1080}
              height={720}
            />
          </Fade>
        </TitleSectionGrid>
      </HostsSection>
      <FullLastSection>
        <Fade triggerOnce>
          <h4>
            <span>{closing.label} </span>
            {closing.title}
          </h4>
          <p>{closing.p}</p>
          <div>
            <MetalForm
              onSubmit={(data) =>
                handleSubscribe(data, 'Landing Footer')
              }
              id={'podcastOL'}
              text={intro.form}
            />
          </div>
        </Fade>
      </FullLastSection>
      <ContactFooter />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: 'podcast.json' });
  if (!pt) {
    return {
      notFound: true,
    };
  }

  const fetchPrismicEpisodes = async () => {
    const prismicClient = createClient();
    const unsortedPrismicEpisodes = await prismicClient.getAllByType('episode');
    return unsortedPrismicEpisodes.sort(
      (ep, nextEp) =>
        (ep.data.introduction[0]?.episode ?? 0) - (nextEp.data.introduction[0]?.episode ?? 0),
    );
  };

  const fetchFeaturedEpisodes = async (prismicClient: any) => {
    const featuredEpisodesData = [
      {
        slug: 'quieres-emprender-una-startup-tienes-que-ver-esto',
        logos: ['kazsek', 'mercadolibre'],
      },
      { slug: 'asi-se-ve-un-equipo-de-alto-rendimiento', logos: ['moova'] },
      {
        slug: 'por-que-tienes-que-enfocar-tu-empresa-a-un-nicho',
        logos: ['nxtp'],
      },
      {
        slug: 'como-es-un-product-manager-de-uber-rappi-y-mercado',
        logos: ['rappi', 'uber', 'mercadopago'],
      },
      { slug: 'asi-son-los-mejores-ctos', logos: ['habi'] },
      { slug: 'como-reinventarse-despues-de-13-anos-operando', logos: ['500'] },
    ];

    return Promise.all(
      featuredEpisodesData.map(async (episodeData) => {
        try {
          const episode = await prismicClient.getByUID(
            'episode',
            episodeData.slug,
          );
          if (!episode || !episode.data || !episode.data.introduction) {
            console.error(`Invalid episode data for slug: ${episodeData.slug}`);
            return null;
          }
          return { ...episode, logos: episodeData.logos };
        } catch (error) {
          console.error(
            `Error fetching episode with slug: ${episodeData.slug}`,
            error,
          );
          return null;
        }
      }),
    );
  };

  try {
    const sortedPrismicEpisodes = await fetchPrismicEpisodes();
    const lastPrismicEpisode = sortedPrismicEpisodes.pop();
    if (!lastPrismicEpisode || !lastPrismicEpisode.data.introduction[0] || !lastPrismicEpisode.data.images[0]?.solas) {
      return {
        notFound: true,
      };
    }
    const prismicClient = createClient();
    const featuredEpisodes = await fetchFeaturedEpisodes(prismicClient);

    return {
      props: {
        featuredEpisodes: featuredEpisodes.filter((e): e is PrismicPodcastEpisode => e !== null),
        pt,
        lastPrismicEpisode,
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
};
