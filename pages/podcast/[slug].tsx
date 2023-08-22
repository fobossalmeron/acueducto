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
import PageClipper from "components/layout/PageClipper";
import ResourceFooter from "components/shared/footers/ResourceFooter";
import type { GetStaticPropsContext } from 'next';
import { createClient } from '../../prismicio';

export default function Episodio({ locale, setTitle, episode, numberOfE, nextEpisodePrismic, slugMatchesPrismic, findNextPrismic }) {
  useEffect(() => {
    setTitle("Podcast");
  }, [locale]);

  const episodeNumber = slugMatchesPrismic?.data.introduction[0].episode;
  const title = slugMatchesPrismic?.data.introduction[0].title[0].text;
  const guest = slugMatchesPrismic?.data.introduction[0].guest;
  const business = slugMatchesPrismic?.data.introduction[0].business;
  const description = slugMatchesPrismic?.data.introduction[0].description[0].text;
  const gif = slugMatchesPrismic?.data.images[0].gif.url;

  return (
    <PageClipper>
      {(!slugMatchesPrismic && !findNextPrismic) &&
        <>
          <Head
            title={episode.title + " | " + episode.guest + ", " + episode.business}
            description={episode.description}
            headerTitle="Episodio"
            es_canonical={`https://acueducto.studio/podcast/${episode.slug}`}
            image={{
              fileName:
                episode.episode >= 63
                  ? `og_image_e${episode.episode}.gif`
                  : `og_image_e${episode.episode}.png`,
                alt: episode.title + " | " + episode.guest + ", " + episode.business,
            }}
          ></Head>
          <EpisodePage {...episode} slug={episode.slug} />
          <ResourceFooter
            shadow
            identify={episode.slug}
            podcastEpisodes={numberOfE}
          />
        </>
      }
      {(slugMatchesPrismic) && 
        <>
          <Head
            title={ title + " | " + guest + ", " + business}
            description={description}
            headerTitle="Episodio"
            es_canonical={`https://acueducto.studio/podcast/${slugMatchesPrismic.uid}`}
            image={{
              fileName: gif,
              alt: title + " | " + guest + ", " + business,
            }}
          ></Head>
          <PrismicEpisodePage 
            {...slugMatchesPrismic} 
            nextEpisodePrismic={...nextEpisodePrismic} 
            slug={slugMatchesPrismic.uid} 
            findNextPrismic={findNextPrismic}
          />
          <ResourceFooter
            shadow
            identify={slugMatchesPrismic.uid}
            podcastEpisodes={episodeNumber}
          /> 
        </>
      }
    </PageClipper>
  );
}

export async function getStaticProps({
  params,
  previewData
}: GetStaticPropsContext) {
    //CMS Prismic
    const client = createClient({ previewData });
    const prismicEpisode = await client.getAllByType("episode");

    const slugMatchesPrismic = prismicEpisode.find(ep => ep.uid === params.slug);

    const nextToMd: EpisodeProps = getEpisodeBySlug(
      getNextEpisodeSlug(105),
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
      ]
    );

    const findNextPrismic = slugMatchesPrismic && prismicEpisode.find((ep) => 
      ep.data.introduction[0].episode === (slugMatchesPrismic.data.introduction[0].episode - 1)
    );

    const nextPrismic = findNextPrismic ? findNextPrismic : nextToMd;

    if(!slugMatchesPrismic) {
      const episode: EpisodeProps = getEpisodeBySlug(params.slug, [
        "title",
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
        ]
      );
    
      const content = await markdownToHtml( episode.content.toString() || "");
    
      //For podcast episode number in footer
      const episodes = getAllEpisodes(["slug"]);
      const numberOfE = Object.keys(episodes).length + 1;
      
      if (!episode) {
        return {
          notFound: true,
        };
      }

      return {
        props: {
          numberOfE: numberOfE,
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
};

export async function getStaticPaths() {
  const episodes = getAllEpisodes(["slug"]);

  const client = createClient({ previewData: null });
  const prismicEpisodes = await client.getAllByType("episode");
  const prismicSlugs = prismicEpisodes.map((result) => result.uid);

  const allSlugs = [...episodes.map((episode) => episode.slug), ...prismicSlugs];

  return {
    paths: allSlugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}