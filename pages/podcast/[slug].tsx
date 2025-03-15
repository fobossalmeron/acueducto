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
  console.group('Datos del episodio actual');
  console.log('Episodio actual:', {
    ...episode,
    content: undefined, // Ocultamos el contenido para no imprimirlo
  });
  console.groupEnd();

  // console.group('Datos de Prismic');
  // console.log('slugMatchesPrismic:', slugMatchesPrismic);
  // console.log('nextEpisodePrismic:', nextEpisodePrismic);
  // console.log('findNextPrismic:', findNextPrismic);
  // console.log('nextEpisode:', nextEpisode);
  // console.groupEnd();

  // Establece el título de la página
  useEffect(() => {
    setTitle('Podcast');
  }, [setTitle]);

  return (
    <PageWrapper>
      {/* Renderiza episodio desde Markdown si no hay coincidencia en Prismic */}
      {episode.episodeSource === 'markdown' && (
        <Head
          title={
            episode.seo_title
              ? episode.seo_title
              : episode.title + ' | ' + episode.guest + ', ' + episode.business
          }
          description={episode.description}
          headerTitle="Episodio"
          es_canonical={`https://acueducto.studio/podcast/${episode.slug}`}
          image={{
            fileName:
              episode.episodeNumber >= 63
                ? `og_image_e${episode.episodeNumber}.gif`
                : `og_image_e${episode.episodeNumber}.png`,
            alt:
              episode.title + ' | ' + episode.guest + ', ' + episode.business,
          }}
          noIndex={!episode.index}
        />
      )}

      {/* Renderiza episodio desde Prismic si hay coincidencia */}
      {episode.episodeSource === 'prismic' && (
        <Head
          title={
            episode.seo_title
              ? episode.seo_title
              : episode.title + ' | ' + episode.guest + ', ' + episode.business
          }
          description={episode.description}
          headerTitle="Episodio"
          es_canonical={`https://acueducto.studio/podcast/${episode.slug}`}
          image={{
            fileName: episode.gif,
            alt:
              episode.title + ' | ' + episode.guest + ', ' + episode.business,
          }}
          noIndex={SEO_OVERRIDES[episode.slug]}
        />
      )}
      <PodcastEpisodePage episode={episode} prevEpisode={prevEpisode} />

      <ContactFooter />
    </PageWrapper>
  );
}

/**
 * Carga un episodio desde archivos Markdown
 * @param slug - Identificador único del episodio
 * @returns Objeto con los datos del episodio y el contenido convertido a HTML
 */
async function loadMarkdownEpisode(slug) {
  // Obtiene los datos del episodio desde el archivo Markdown
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
  // Convierte el contenido Markdown a HTML
  const content = await markdownToHtml(episode.content.toString() || '');
  return { ...episode, content };
}

/**
 * Función auxiliar para obtener datos básicos de un episodio Markdown
 * para mostrar como "siguiente episodio"
 */
const loadNextMarkdownEpisode = (slug: string): PrevEpisodeProps => ({
  ...getMarkdownEpisodeBySlug(slug, [
    'guest',
    'business',
    'category',
    'episode',
    'slug',
  ]),
  episodeSource: 'markdown',
});

/**
 * Función getStaticProps para generar páginas estáticas en tiempo de compilación
 * Maneja la obtención de datos tanto de Prismic como de archivos Markdown
 */
export async function getStaticProps({ params }: GetStaticPropsContext) {
  // Inicializamos las variables
  let episode: EpisodeProps;
  let prevEpisode: PrevEpisodeProps;

  // Determina si viene de markdown
  let matchesMarkdown;
  const markdownEpisodes = getAllMarkdownEpisodes(['slug']);
  matchesMarkdown = markdownEpisodes.some(
    (episode) => episode.slug === params.slug,
  );

  // Determina si viene de prismic
  let matchesPrismic;
  const client = createClient();
  try {
    matchesPrismic = await client.getByUID('episode', params.slug as string);
  } catch (error) {
    matchesPrismic = undefined;
  }

  if (matchesMarkdown) {
    episode = await loadMarkdownEpisode(params.slug);
    prevEpisode = await loadNextMarkdownEpisode(
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
      podcastCoverImage: prismicEpisode.data.images[0].episode,
      episodeNumber: prismicEpisode.data.introduction[0].episode,
      seo_h1:
        SEO_OVERRIDES[prismicEpisode.uid] &&
        SEO_OVERRIDES[prismicEpisode.uid].h1,
      google: prismicEpisode.data.introduction[0].google,
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
        podcastCoverImage: nextPrismicEpisode.data.images[0].episode,
        episodeSource: 'prismic',
      };
    } else {
      // Si no hay episodio previo en Prismic, usar uno de Markdown como fallback
      prevEpisode = await loadNextMarkdownEpisode(getNextEpisodeSlug(105));
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

/**
 * Esta función ESTA BIEN. NO HAY QUE CAMBIARLA.
 * Función getStaticPaths para generar las rutas estáticas en tiempo de compilación
 * Combina slugs de episodios tanto de Markdown como de Prismic
 */
export async function getStaticPaths() {
  // Obtiene todos los slugs de episodios desde archivos Markdown
  const markdownEpisodes = getAllMarkdownEpisodes(['slug']);

  // Obtiene todos los slugs de episodios desde Prismic
  const client = createClient();
  const prismicEpisodes = await client.getAllByType('episode');

  // Combina todos los slugs de ambas fuentes
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
