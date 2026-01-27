import { NextApiRequest, NextApiResponse } from 'next';
import { getAllMarkdownEpisodes, getMarkdownEpisodeBySlug } from "../../utils/podcastApi";
import { createClient } from "../../prismicio";
import { PrismicPodcastEpisode } from "../../components/pages/podcast.types";
import EpisodeProps from '@acueducto/shared/types/EpisodeProps';
import { EpisodeSource } from '@acueducto/shared/types/EpisodeProps';

const EPISODES_PER_PAGE = 20;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category = 'todas', page = '1' } = req.query;

  // Función para verificar si un episodio es de tipo Prismic
  function isPrismicEpisode(episode: any): episode is PrismicPodcastEpisode {
    return 'data' in episode;
  }

  try {
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
    let prismicEpisodes: PrismicPodcastEpisode[] = [];
    
    try {
      prismicEpisodes = await client.getAllByType("episode") as PrismicPodcastEpisode[];
    } catch (prismicError) {
      console.error('Error al obtener episodios de Prismic:', prismicError);
      // Continuar con un array vacío si falla
    }

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
      const isPrismic = isPrismicEpisode(episode);
      const intro = isPrismic ? episode.data.introduction[0] : null;
      const episodeData = {
        title: isPrismic ? (intro?.title?.[0]?.text ?? '') : episode.title,
        guest: isPrismic ? (intro?.guest ?? '') : episode.guest,
        business: isPrismic ? (intro?.business ?? '') : episode.business,
        slug: isPrismic ? episode.uid : episode.slug,
        episodeNumber: isPrismic ? (intro?.episode ?? 0) : episode.episodeNumber,
        category: isPrismic ? (intro?.category ?? '') : episode.category,
        description: isPrismic ? (intro?.description?.[0]?.text ?? '') : episode.description,
        date: isPrismic ? (intro?.date ?? '') : episode.date,
        spotify: isPrismic ? intro?.spotify : episode.spotify,
        apple: isPrismic ? intro?.apple : episode.apple,
        youtube: isPrismic ? intro?.youtube : episode.youtube,
        podcastCoverImage: isPrismic ? episode.data.images[0].episode.url : null,
        episodeSource: isPrismic ? 'prismic' : 'markdown' as EpisodeSource,
      };

      return episodeData;
    });

    res.status(200).json({ episodes: paginatedEpisodes });
  } catch (error) {
    console.error('Error en API episodes:', error);
    res.status(500).json({ episodes: [] });
  }
}