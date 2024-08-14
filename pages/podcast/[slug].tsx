import { useEffect, lazy, Suspense } from "react";
import EpisodeProps from "utils/types/EpisodeProps";
import markdownToHtml from "utils/markdownToHtml";
import {
  getAllEpisodes,
  getEpisodeBySlug,
  getNextEpisodeSlug,
} from "utils/podcastApi";
import Head from "components/layout/Head";
import PageWrapper from "components/layout/PageWrapper";
import type { GetStaticPropsContext } from "next";
import { createClient } from "../../prismicio";
import { SingleEpisodePage } from "components/pages/singleEpisode/SingleEpisodePage";

const ResourceFooter = lazy(
  () => import("components/shared/footers/ResourceFooter")
);

const SEO_OVERRIDES = {
  "no-vivas-de-tus-usuarios-construye-tu-futuro-junto-con-ellos": {
    title: "Jorge Combe DD360: No vivas de usuarios, construye con ellos",
    h1: "Jorge Combe DD360: No vivas de usuarios, construye con ellos",
  },
  "como-se-ve-la-educacion-online": {
    title: "Desarrollo de habilidades digitales: Explorando Coderhouse",
    h1: "Nahuel Lema y Coderhouse ¿Qué es y de dónde es?",
  },
  "como-captar-3m-de-usuarios": {
    title: "Iván Canales de Nubank México: Cómo captar 3M de usuarios",
    h1: "Iván Canales, Nubank Mexico: Como captar 3M de usuarios",
  },
};

export default function Episodio({
  locale,
  setTitle,
  episode,
  nextEpisodePrismic,
  slugMatchesPrismic,
  findNextPrismic,
}) {
  useEffect(() => {
    setTitle("Podcast");
  }, [locale, setTitle]);

  const title = slugMatchesPrismic?.data.introduction[0].title[0].text;
  const guest = slugMatchesPrismic?.data.introduction[0].guest;
  const business = slugMatchesPrismic?.data.introduction[0].business;
  const description =
    slugMatchesPrismic?.data.introduction[0].description[0].text;
  const gif = slugMatchesPrismic?.data.images[0].gif.url;

  return (
    <PageWrapper>
      {!slugMatchesPrismic && !findNextPrismic && (
        <>
          <Head
            title={
              episode.seo_title
                ? episode.seo_title
                : episode.title +
                  " | " +
                  episode.guest +
                  ", " +
                  episode.business
            }
            description={episode.description}
            headerTitle="Episodio"
            es_canonical={`https://acueducto.studio/podcast/${episode.slug}`}
            image={{
              fileName:
                episode.episode >= 63
                  ? `og_image_e${episode.episode}.gif`
                  : `og_image_e${episode.episode}.png`,
              alt:
                episode.title + " | " + episode.guest + ", " + episode.business,
            }}
            noIndex={!episode.index}
          />
          <SingleEpisodePage {...episode} slug={episode.slug} />
        </>
      )}
      {slugMatchesPrismic && (
        <>
          <Head
            title={
              SEO_OVERRIDES[slugMatchesPrismic.uid]
                ? SEO_OVERRIDES[slugMatchesPrismic.uid].title
                : title + " | " + guest + ", " + business
            }
            description={description}
            headerTitle="Episodio"
            es_canonical={`https://acueducto.studio/podcast/${slugMatchesPrismic.uid}`}
            image={{
              fileName: gif,
              alt: title + " | " + guest + ", " + business,
            }}
            noIndex={SEO_OVERRIDES[slugMatchesPrismic.uid]}
          />
          <SingleEpisodePage
            title={title}
            guest={guest}
            business={business}
            description={description}
            seo_h1={
              SEO_OVERRIDES[slugMatchesPrismic.uid] &&
              SEO_OVERRIDES[slugMatchesPrismic.uid].h1
            }
            slug={slugMatchesPrismic.uid}
            date={slugMatchesPrismic.data.introduction[0].date}
            insights={slugMatchesPrismic.data.introduction[0].insights}
            category={slugMatchesPrismic.data.introduction[0].category}
            spotify={slugMatchesPrismic.data.introduction[0].spotify}
            apple={slugMatchesPrismic.data.introduction[0].apple}
            youtube={slugMatchesPrismic.data.introduction[0].youtube}
            youtubeImage={slugMatchesPrismic.data.images[0].youtube.url}
            episode={slugMatchesPrismic.data.introduction[0].episode}
            content={slugMatchesPrismic.data.body}
            podcastImage={slugMatchesPrismic.data.images[0].episode}
            next={nextEpisodePrismic}
            findNextPrismic={findNextPrismic}
          />
        </>
      )}
      <Suspense fallback={<div>Cargando footer...</div>}>
        <ResourceFooter shadow />
      </Suspense>
    </PageWrapper>
  );
}

async function loadMarkdownEpisode(slug) {
  const episode = getEpisodeBySlug(slug, [
    "title",
    "seo_title",
    "seo_h1",
    "guest",
    "date",
    "insights",
    "business",
    "category",
    "description",
    "episode",
    "slug",
    "spotify",
    "apple",
    "google",
    "youtube",
    "content",
    "index",
  ]);

  const content = await markdownToHtml(episode.content.toString() || "");
  return { ...episode, content };
}

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const prismicEpisodes = await client.getAllByType("episode");

  const slugMatchesPrismic = prismicEpisodes.find(
    (ep) => ep.uid === params.slug
  );

  const nextToMd: EpisodeProps = getEpisodeBySlug(getNextEpisodeSlug(105), [
    "title",
    "seo_title",
    "seo_h1",
    "guest",
    "date",
    "business",
    "category",
    "description",
    "episode",
    "slug",
    "spotify",
    "apple",
    "google",
    "youtube",
    "index",
  ]);

  const findNextPrismic =
    slugMatchesPrismic &&
    prismicEpisodes.find(
      (ep) =>
        ep.data.introduction[0].episode ===
        slugMatchesPrismic.data.introduction[0].episode - 1
    );

  const nextPrismic = findNextPrismic ? findNextPrismic : nextToMd;

  if (!slugMatchesPrismic) {
    const episode: EpisodeProps = await loadMarkdownEpisode(params.slug);
    const next: EpisodeProps = await loadMarkdownEpisode(
      getNextEpisodeSlug(episode.episode)
    );

    if (!episode) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        episode: {
          ...episode,
          next,
        },
        nextEpisode: {
          ...next,
        },
        slugMatchesPrismic: slugMatchesPrismic || null,
      },
      revalidate: 3600, // Revalidar cada hora
    };
  } else {
    return {
      props: {
        slugMatchesPrismic: slugMatchesPrismic || null,
        nextEpisodePrismic: {
          ...nextPrismic,
        },
        findNextPrismic: findNextPrismic || null,
      },
      revalidate: 3600, // Revalidar cada hora
    };
  }
}

export async function getStaticPaths() {
  const episodes = getAllEpisodes(["slug"]);

  const client = createClient({ previewData: null });
  const prismicEpisodes = await client.getAllByType("episode");
  const prismicSlugs = prismicEpisodes.map((result) => result.uid);

  const allSlugs = [
    ...episodes.map((episode) => episode.slug),
    ...prismicSlugs,
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
