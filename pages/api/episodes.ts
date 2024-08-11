import { NextApiRequest, NextApiResponse } from 'next';
import { getAllEpisodes, getEpisodeBySlug } from "utils/podcastApi";
import { createClient } from "../../prismicio";
import { PrismicPodcastEpisode, MarkdownPodcastEpisode } from "components/podcast/podcast.types";

const EPISODES_PER_PAGE = 30;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category = 'todas', page = '1' } = req.query;

  function isPrismicEpisode(episode: MarkdownPodcastEpisode | PrismicPodcastEpisode): episode is PrismicPodcastEpisode {
    return 'data' in episode;
  }

  const sortedEpisodes = getAllEpisodes(["slug", "episode", "category"]).sort(
    (ep1, ep2) => ep2.episode - ep1.episode
  );

  const episodes = sortedEpisodes.map((episode) =>
    getEpisodeBySlug(episode.slug, [
      "title",
      "guest",
      "business",
      "description",
      "category",
      "episode",
      "date",
      "slug",
      "spotify",
      "apple",
      "google",
      "youtube",
    ])
  ) as MarkdownPodcastEpisode[];

  const client = createClient();
  const prismicEpisodes = await client.getAllByType("episode") as PrismicPodcastEpisode[];

  const allEpisodes = [...episodes, ...prismicEpisodes].sort((a, b) => {
    const episodeA = isPrismicEpisode(a) ? a.data.introduction[0].episode : a.episode;
    const episodeB = isPrismicEpisode(b) ? b.data.introduction[0].episode : b.episode;
    return episodeB - episodeA;  // Sort from newest to oldest
  });
  
  const filteredEpisodes = category.toString().toLowerCase() === "todas"
    ? allEpisodes
    : allEpisodes.filter(episode => {
        const episodeCategory = isPrismicEpisode(episode)
          ? episode.data.introduction[0].category
          : episode.category;
        return episodeCategory.toLowerCase() === category.toString().toLowerCase();
      });

  const pageNumber = parseInt(page.toString(), 10);
  const startIndex = (pageNumber - 1) * EPISODES_PER_PAGE;
  const endIndex = startIndex + EPISODES_PER_PAGE;
  const paginatedEpisodes = filteredEpisodes.slice(startIndex, endIndex).map(episode => ({
    title: isPrismicEpisode(episode) ? episode.data.introduction[0].title[0].text : episode.title,
    guest: isPrismicEpisode(episode) ? episode.data.introduction[0].guest : episode.guest,
    business: isPrismicEpisode(episode) ? episode.data.introduction[0].business : episode.business,
    slug: isPrismicEpisode(episode) ? episode.uid : episode.slug,
    episode: isPrismicEpisode(episode) ? episode.data.introduction[0].episode : episode.episode,
    category: isPrismicEpisode(episode) ? episode.data.introduction[0].category : episode.category,
    description: isPrismicEpisode(episode) ? episode.data.introduction[0].description[0].text : episode.description,
    date: isPrismicEpisode(episode) ? episode.data.introduction[0].date : episode.date,
    spotify: isPrismicEpisode(episode) ? episode.data.introduction[0].spotify : episode.spotify,
    apple: isPrismicEpisode(episode) ? episode.data.introduction[0].apple : episode.apple,
    google: isPrismicEpisode(episode) ? episode.data.introduction[0].google : episode.google,
    youtube: isPrismicEpisode(episode) ? episode.data.introduction[0].youtube : episode.youtube,
    podcastImage: isPrismicEpisode(episode) ? episode.data.images[0].episode : null,
    prismic: isPrismicEpisode(episode),
  }));

  res.status(200).json({ episodes: paginatedEpisodes });
}