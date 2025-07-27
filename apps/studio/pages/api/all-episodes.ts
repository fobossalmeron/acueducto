import { NextApiRequest, NextApiResponse } from 'next';
import { getAllMarkdownEpisodes } from '@acueducto/shared/utils/podcastApi';
import { createClient } from '../../prismicio';
import { PrismicPodcastEpisode } from "@acueducto/shared/components/pages/podcast/podcast.types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Obtener episodios de Markdown
    const markdownEpisodes = getAllMarkdownEpisodes([
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
    ]);

    // Obtener episodios de Prismic
    const client = createClient();
    const prismicEpisodes = await client.getAllByType("episode") as PrismicPodcastEpisode[];

    // Combinar y ordenar todos los episodios
    const allEpisodes = [...markdownEpisodes, ...prismicEpisodes].sort((a, b) => {
      const episodeA = 'data' in a ? a.data.introduction[0].episode : a.episodeNumber;
      const episodeB = 'data' in b ? b.data.introduction[0].episode : b.episodeNumber;
      return episodeB - episodeA;  // Ordenar de mayor a menor (más nuevo a más viejo)
    });

    // Transformar los episodios al formato de respuesta
    const transformedEpisodes = allEpisodes.map(episode => {
      if ('data' in episode) {
        // Es un episodio de Prismic
        return {
          slug: episode.uid,
          title: episode.data.introduction[0].title[0].text,
          guest: episode.data.introduction[0].guest,
          business: episode.data.introduction[0].business,
          description: episode.data.introduction[0].description[0].text,
          category: episode.data.introduction[0].category,
          episodeNumber: episode.data.introduction[0].episode,
          date: episode.data.introduction[0].date,
          spotify: episode.data.introduction[0].spotify,
          apple: episode.data.introduction[0].apple,
          youtube: episode.data.introduction[0].youtube,
          podcastCoverImage: episode.data.images[0].episode.url,
          episodeSource: 'prismic'
        };
      }
      // Es un episodio de Markdown
      return {
        ...episode,
        episodeSource: 'markdown'
      };
    });

    res.status(200).json(transformedEpisodes);
  } catch (error) {
    console.error('Error al obtener todos los episodios:', error);
    res.status(500).json({ error: 'Error al cargar los episodios' });
  }
}