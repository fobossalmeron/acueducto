import { useEffect } from "react";
import EpisodeProps from "utils/types/EpisodeProps";
import markdownToHtml from "utils/markdownToHtml";
import {
  getAllEpisodes,
  getEpisodeBySlug,
  getNextEpisodeSlug,
} from "utils/podcastApi";
import Head from "components/layout/Head";
import EpisodePage from "components/podcast/EpisodePage";
import PrismicEpisodePage from "components/podcast/PrismicEpisodePage";
import PageWrapper from "components/layout/PageWrapper";
import ResourceFooter from "components/shared/footers/ResourceFooter";
import type { GetStaticPropsContext } from "next";
import { createClient } from "../../prismicio";

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
  }, [locale]);

  const title = slugMatchesPrismic?.data.introduction[0].title[0].text;
  const guest = slugMatchesPrismic?.data.introduction[0].guest;
  const business = slugMatchesPrismic?.data.introduction[0].business;
  const description =
    slugMatchesPrismic?.data.introduction[0].description[0].text;
  const gif = slugMatchesPrismic?.data.images[0].gif.url;

  //esta función es para poder alterar la propiedad seo_title de los capítulos de prismic
  //solo es para estos 3 capítulos
  //PD se que es horrible se te ocurre otra cosa?
  const seo_title_prismic = () => {
    let seo;
    if (
      slugMatchesPrismic.uid ==
      "no-vivas-de-tus-usuarios-construye-tu-futuro-junto-con-ellos"
    ) {
      seo = "Jorge Combe DD360: No vivas de usuarios, construye con ellos";
    } else if (slugMatchesPrismic.uid == "como-se-ve-la-educacion-online") {
      seo = "Desarrollo de Habilidades Digitales: Explorando Coderhouse";
    } else if (slugMatchesPrismic.uid == "como-captar-3m-de-usuarios") {
      seo = "Iván Canales de Nubank México: Cómo captar 3M de usuarios";
    } else {
      seo = undefined;
    }
    return seo;
  };

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
          ></Head>
          <EpisodePage {...episode} slug={episode.slug} />
        </>
      )}
      {slugMatchesPrismic && (
        <>
          <Head
            title={
              seo_title_prismic()
                ? seo_title_prismic()
                : title + " | " + guest + ", " + business
            }
            description={description}
            headerTitle="Episodio"
            es_canonical={`https://acueducto.studio/podcast/${slugMatchesPrismic.uid}`}
            image={{
              fileName: gif,
              alt: title + " | " + guest + ", " + business,
            }}
            // Los siguientes URLs hay que rescatarlos y si indexarlos:
            noIndex={
              slugMatchesPrismic.uid !==
                "no-vivas-de-tus-usuarios-construye-tu-futuro-junto-con-ellos" &&
              slugMatchesPrismic.uid !== "como-se-ve-la-educacion-online" &&
              slugMatchesPrismic.uid !== "como-captar-3m-de-usuarios"
            }
          ></Head>
          <PrismicEpisodePage
            {...slugMatchesPrismic}
            nextEpisodePrismic={nextEpisodePrismic}
            slug={slugMatchesPrismic.uid}
            findNextPrismic={findNextPrismic}
          />
        </>
      )}
      <ResourceFooter shadow />
    </PageWrapper>
  );
}

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext) {
  //CMS Prismic
  const client = createClient({ previewData });
  const prismicEpisode = await client.getAllByType("episode");

  const slugMatchesPrismic = prismicEpisode.find(
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
    "index", //Esto podría ser de Prismic
  ]);

  const findNextPrismic =
    slugMatchesPrismic &&
    prismicEpisode.find(
      (ep) =>
        ep.data.introduction[0].episode ===
        slugMatchesPrismic.data.introduction[0].episode - 1
    );

  const nextPrismic = findNextPrismic ? findNextPrismic : nextToMd;

  if (!slugMatchesPrismic) {
    const episode: EpisodeProps = getEpisodeBySlug(params.slug, [
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
    const next: EpisodeProps = getEpisodeBySlug(
      getNextEpisodeSlug(episode.episode),
      [
        "title",
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
      ]
    );

    const content = await markdownToHtml(episode.content.toString() || "");

    if (!episode) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        episode: {
          ...episode,
          content,
          next,
        },
        nextEpisode: {
          ...next,
        },
        slugMatchesPrismic: slugMatchesPrismic || null,
      },
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
