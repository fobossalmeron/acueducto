import { NextApiRequest, NextApiResponse } from 'next';
import { getAllMarkdownEpisodes, getMarkdownEpisodeBySlug } from "utils/podcastApi";
import { createClient } from "../../prismicio";
import { PrismicPodcastEpisode } from "components/pages/podcast/podcast.types";
import EpisodeProps from 'types/EpisodeProps';
import { EpisodeSource } from 'types/EpisodeProps';
const EPISODES_PER_PAGE = 30;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category = 'todas', page = '1' } = req.query;

  // Función para verificar si un episodio es de tipo Prismic
  function isPrismicEpisode(episode: any): episode is PrismicPodcastEpisode {
    return 'data' in episode;
  }

  const sortedEpisodes = getAllMarkdownEpisodes(["slug", "episodeNumber", "category"]).sort(
    (ep1, ep2) => ep2.episodeNumber - ep1.episodeNumber
  );

  const episodes = sortedEpisodes.map((episode) =>
    getMarkdownEpisodeBySlug(episode.slug, [
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
  ) as EpisodeProps[];

  // Añadir la propiedad episodeSource a los episodios de Markdown
  const markdownEpisodes = episodes.map(episode => ({
    ...episode,
    episodeSource: 'markdown' as const
  }));

  const client = createClient();
  const prismicEpisodes = await client.getAllByType("episode") as PrismicPodcastEpisode[];

  // Combinar y ordenar todos los episodios
  const allEpisodes = [...markdownEpisodes, ...prismicEpisodes].sort((a, b) => {
    const episodeA = isPrismicEpisode(a) ? a.data.introduction[0].episode : a.episodeNumber;
    const episodeB = isPrismicEpisode(b) ? b.data.introduction[0].episode : b.episodeNumber;
    return episodeB - episodeA;  // Sort from newest to oldest
  });

  // Filtrar por categoría si es necesario
  const filteredEpisodes = category.toString().toLowerCase() === "todas"
    ? allEpisodes
    : allEpisodes.filter(episode => {
      const episodeCategory = isPrismicEpisode(episode)
        ? episode.data.introduction[0].category
        : episode.category;
      return episodeCategory.toLowerCase() === category.toString().toLowerCase();
    });

  // Paginar los resultados
  const pageNumber = parseInt(page.toString(), 10);
  const startIndex = (pageNumber - 1) * EPISODES_PER_PAGE;
  const endIndex = startIndex + EPISODES_PER_PAGE;

  // Transformar los episodios al formato de respuesta
  const paginatedEpisodes: EpisodeProps[] = filteredEpisodes.slice(startIndex, endIndex).map(episode => {
    // Crear un objeto base con propiedades comunes
    const episodeData = {
      title: isPrismicEpisode(episode) ? episode.data.introduction[0].title[0].text : episode.title,
      guest: isPrismicEpisode(episode) ? episode.data.introduction[0].guest : episode.guest,
      business: isPrismicEpisode(episode) ? episode.data.introduction[0].business : episode.business,
      slug: isPrismicEpisode(episode) ? episode.uid : episode.slug,
      episodeNumber: isPrismicEpisode(episode) ? episode.data.introduction[0].episode : episode.episodeNumber,
      category: isPrismicEpisode(episode) ? episode.data.introduction[0].category : episode.category,
      description: isPrismicEpisode(episode) ? episode.data.introduction[0].description[0].text : episode.description,
      date: isPrismicEpisode(episode) ? episode.data.introduction[0].date : episode.date,
      spotify: isPrismicEpisode(episode) ? episode.data.introduction[0].spotify : episode.spotify,
      apple: isPrismicEpisode(episode) ? episode.data.introduction[0].apple : episode.apple,
      youtube: isPrismicEpisode(episode) ? episode.data.introduction[0].youtube : episode.youtube,
      podcastCoverImage: isPrismicEpisode(episode) ? episode.data.images[0].episode.url : null,
      episodeSource: isPrismicEpisode(episode) ? 'prismic' : 'markdown' as EpisodeSource,
    };

    return episodeData;
  });

  res.status(200).json({ episodes: paginatedEpisodes });
}