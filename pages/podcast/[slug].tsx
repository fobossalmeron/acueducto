import { useEffect } from 'react';
import EpisodeProps, { PrevEpisodeProps } from 'types/EpisodeProps';
import markdownToHtml from 'utils/markdownToHtml';
import {
  getAllMarkdownEpisodes,
  getMarkdownEpisodeBySlug,
  getNextEpisodeSlug,
} from 'utils/podcastApi';
import Head from 'components/layout/Head/Head';
import PageWrapper from 'components/layout/PageWrapper';
import type { GetStaticPropsContext } from 'next';
import { createClient } from '../../prismicio';
import { PodcastEpisodePage } from 'components/pages/podcast/podcast-episode/PodcastEpisodePage';
import ContactFooter from 'components/layout/footers/ContactFooter';
import { PageProps } from 'types/PageProps';

/**
 * Sobreescrituras de SEO para episodios específicos
 * Permite personalizar títulos y encabezados H1 para mejorar el SEO
 */
const SEO_OVERRIDES = {
  'no-vivas-de-tus-usuarios-construye-tu-futuro-junto-con-ellos': {
    title: 'Jorge Combe DD360: No vivas de usuarios, construye con ellos',
    h1: 'Jorge Combe DD360: No vivas de usuarios, construye con ellos',
  },
  'como-se-ve-la-educacion-online': {
    title: 'Desarrollo de habilidades digitales: Explorando Coderhouse',
    h1: 'Nahuel Lema y Coderhouse ¿Qué es y de dónde es?',
  },
  'como-captar-3m-de-usuarios': {
    title: 'Iván Canales de Nubank México: Cómo captar 3M de usuarios',
    h1: 'Iván Canales, Nubank Mexico: Como captar 3M de usuarios',
  },
};

interface EpisodioProps extends PageProps {
  episode: EpisodeProps;
  prevEpisode: PrevEpisodeProps;
}

/**
 * Componente principal para la página de un episodio de podcast
 * Maneja la visualización de episodios tanto de archivos Markdown como de Prismic CMS
 */
export default function Episodio({
  setTitle,
  episode,
  prevEpisode,
}: EpisodioProps) {
  useEffect(() => {
    setTitle('Podcast');
  }, [setTitle]);

  const titleContent = episode.seo_title
    ? episode.seo_title
    : `${episode.title} | ${episode.guest}, ${episode.business}`;

  const imageAlt = `${episode.title} | ${episode.guest}, ${episode.business}`;

  const imageFileName =
    episode.episodeSource === 'markdown'
      ? episode.episodeNumber >= 63
        ? `og_image_e${episode.episodeNumber}.gif`
        : `og_image_e${episode.episodeNumber}.png`
      : episode.gif;

  const noIndex =
    episode.episodeSource === 'markdown'
      ? !episode.index
      : SEO_OVERRIDES[episode.slug];

  return (
    <PageWrapper>
      <Head
        title={titleContent}
        description={episode.description}
        headerTitle="Episodio"
        es_canonical={`https://acueducto.studio/podcast/${episode.slug}`}
        image={{
          fileName: imageFileName,
          alt: imageAlt,
        }}
        noIndex={noIndex}
      />
      <PodcastEpisodePage episode={episode} prevEpisode={prevEpisode} />
      <ContactFooter />
    </PageWrapper>
  );
}

/**
 * Funciones utilitarias para cargar episodios
 */
async function loadMarkdownEpisode(slug) {
  const episode = getMarkdownEpisodeBySlug(slug, [
    'title',
    'seo_title',
    'seo_h1',
    'guest',
    'date',
    'insights',
    'business',
    'category',
    'description',
    'episode',
    'slug',
    'spotify',
    'apple',
    'google',
    'youtube',
    'content',
    'index',
  ]);
  episode.episodeSource = 'markdown';
  const content = await markdownToHtml(episode.content.toString() || '');
  return { ...episode, content };
}

const loadPrevMarkdownEpisode = (slug: string): PrevEpisodeProps => ({
  ...getMarkdownEpisodeBySlug(slug, [
    'guest',
    'business',
    'category',
    'episode',
    'slug',
  ]),
  episodeSource: 'markdown',
});

export async function getStaticProps({ params }: GetStaticPropsContext) {
  let episode: EpisodeProps;
  let prevEpisode: PrevEpisodeProps;

  let matchesMarkdown;
  const markdownEpisodes = getAllMarkdownEpisodes(['slug']);
  matchesMarkdown = markdownEpisodes.some(
    (episode) => episode.slug === params.slug,
  );

  let matchesPrismic;
  const client = createClient();
  try {
    matchesPrismic = await client.getByUID('episode', params.slug as string);
  } catch (error) {
    matchesPrismic = undefined;
  }

  if (matchesMarkdown) {
    episode = await loadMarkdownEpisode(params.slug);
    prevEpisode = await loadPrevMarkdownEpisode(
      getNextEpisodeSlug(episode.episodeNumber),
    );
  } else if (matchesPrismic) {
    const prismicEpisode = await client.getByUID(
      'episode',
      params.slug as string,
    );
    episode = {
      slug: prismicEpisode.uid,
      date: prismicEpisode.data.introduction[0].date,
      title:
        'text' in prismicEpisode.data.introduction[0].title[0]
          ? prismicEpisode.data.introduction[0].title[0].text
          : '',
      guest: prismicEpisode.data.introduction[0].guest,
      business: prismicEpisode.data.introduction[0].business,
      category: prismicEpisode.data.introduction[0].category,
      description:
        'text' in prismicEpisode.data.introduction[0].description[0]
          ? prismicEpisode.data.introduction[0].description[0].text
          : '',
      gif: prismicEpisode.data.images[0].gif.url,
      insights: prismicEpisode.data.introduction[0].insights,
      spotify: prismicEpisode.data.introduction[0].spotify,
      apple: prismicEpisode.data.introduction[0].apple,
      content: prismicEpisode.data.body,
      podcastCoverImage: prismicEpisode.data.images[0].episode.url,
      episodeNumber: prismicEpisode.data.introduction[0].episode,
      seo_h1: SEO_OVERRIDES[prismicEpisode.uid]
        ? SEO_OVERRIDES[prismicEpisode.uid].h1
        : null,
      youtube: prismicEpisode.data.introduction[0].youtube,
      youtubeImageUrl: prismicEpisode.data.images[0].youtube.url,
      episodeSource: 'prismic',
    };

    // Buscar el siguiente episodio en Prismic
    const prismicEpisodes = await client.getAllByType('episode');
    const nextPrismicEpisode = prismicEpisodes.find(
      (ep) =>
        ep.data.introduction[0].episode ===
        prismicEpisode.data.introduction[0].episode - 1,
    );

    // Transformar el siguiente episodio si existe
    if (nextPrismicEpisode) {
      prevEpisode = {
        slug: nextPrismicEpisode.uid,
        guest: nextPrismicEpisode.data.introduction[0].guest,
        business: nextPrismicEpisode.data.introduction[0].business,
        category: nextPrismicEpisode.data.introduction[0].category,
        episodeNumber: nextPrismicEpisode.data.introduction[0].episode,
        podcastCoverImage: nextPrismicEpisode.data.images[0].episode.url,
        episodeSource: 'prismic',
      };
    } else {
      // Si no hay episodio previo en Prismic, usar uno de Markdown como fallback
      prevEpisode = await loadPrevMarkdownEpisode(getNextEpisodeSlug(105));
    }
  }

  if (!episode) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      episode: {
        ...episode,
      },
      prevEpisode: {
        ...prevEpisode,
      },
    },
    revalidate: 3600, // Revalidar cada hora
  };
}

export async function getStaticPaths() {
  const markdownEpisodes = getAllMarkdownEpisodes(['slug']);

  const client = createClient();
  const prismicEpisodes = await client.getAllByType('episode');

  const allSlugs = [
    ...markdownEpisodes.map((episode) => episode.slug),
    ...prismicEpisodes.map((result) => result.uid),
  ];

  return {
    paths: allSlugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}
