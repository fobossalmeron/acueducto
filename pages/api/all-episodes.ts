import { NextApiRequest, NextApiResponse } from 'next';
import { getAllEpisodes } from 'utils/podcastApi';
import { createClient } from '../../prismicio';
import { PrismicPodcastEpisode, MarkdownPodcastEpisode } from "components/pages/podcast/podcast.types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Obtener episodios de Markdown
    const markdownEpisodes = getAllEpisodes([
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
    ]) as MarkdownPodcastEpisode[];

    // Obtener episodios de Prismic
    const client = createClient();
    const prismicEpisodes = await client.getAllByType("episode") as PrismicPodcastEpisode[];

    // Combinar y ordenar todos los episodios
    const allEpisodes = [...markdownEpisodes, ...prismicEpisodes].sort((a, b) => {
      const episodeA = 'data' in a ? a.data.introduction[0].episode : a.episode;
      const episodeB = 'data' in b ? b.data.introduction[0].episode : b.episode;
      return episodeB - episodeA;  // Ordenar de mayor a menor (más nuevo a más viejo)
    });

    res.status(200).json(allEpisodes);
  } catch (error) {
    console.error('Error al obtener todos los episodios:', error);
    res.status(500).json({ error: 'Error al cargar los episodios' });
  }
}