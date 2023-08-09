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

export default function Episodio({ locale, setTitle, episode, numberOfE, prismicEpisode, slugMatchesPrismic }) {
  useEffect(() => {
    setTitle("Podcast");
  }, [locale]);

  if(slugMatchesPrismic){
    const episodeNumber = slugMatchesPrismic.data.introduction[0].episode;
    const category = slugMatchesPrismic.data.introduction[0].category;
    const title = slugMatchesPrismic.data.introduction[0].title[0].text;
    const guest = slugMatchesPrismic.data.introduction[0].guest;
    const business = slugMatchesPrismic.data.introduction[0].business;
    const date = slugMatchesPrismic.data.introduction[0].date;
    const description = slugMatchesPrismic.data.introduction[0].description[0].text;
    const spotify = slugMatchesPrismic.data.introduction[0].spotify;
    const apple = slugMatchesPrismic.data.introduction[0].apple;
    const google = slugMatchesPrismic.data.introduction[0].google;
    const youtube = slugMatchesPrismic.data.introduction[0].youtube;
    const gif = slugMatchesPrismic.data.images[0].gif;
  }

  return (
    <PageClipper>
      {!slugMatchesPrismic &&
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
      {slugMatchesPrismic && 
        <>
          <Head
            title={ slugMatchesPrismic.data.introduction[0].title[0].text + " | " + slugMatchesPrismic.data.introduction[0].guest + ", " + slugMatchesPrismic.data.introduction[0].business}
            description={slugMatchesPrismic.data.introduction[0].description[0].text}
            headerTitle="Episodio"
            es_canonical={`https://acueducto.studio/podcast/${slugMatchesPrismic.uid}`}
            image={{
              fileName: slugMatchesPrismic.data.images[0].gif,
              alt: slugMatchesPrismic.data.introduction[0].title[0].text + " | " + slugMatchesPrismic.data.introduction[0].guest + ", " + slugMatchesPrismic.data.introduction[0].business,
            }}
          ></Head>
          <PrismicEpisodePage {...slugMatchesPrismic} slug={slugMatchesPrismic.uid} />
          {/* <ResourceFooter
            shadow
            identify={prismicEpisode.slug[0]}
            podcastEpisodes={numberOfE}
          />  */}
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

    const slugMatchesPrismic = prismicEpisode.find(objeto => objeto.uid === params.slug);

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
    
      const content = await markdownToHtml(episode.content || "");
    
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