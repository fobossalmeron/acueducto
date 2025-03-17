import { getAllMarkdownEpisodes } from './markdownApi';

export function getPrevEpisodeSlug(currentEpisodeNumber: number): string {
    // Asumimos que queremos el episodio inmediatamente anterior
    const prevEpisodeNumber = currentEpisodeNumber - 1;

    // Obtenemos todos los episodios de markdown
    const allEpisodes = getAllMarkdownEpisodes(['slug', 'episode']);

    // Buscamos el episodio con el número previo
    const prevEpisode = allEpisodes.find(
        (episode) => episode.episodeNumber === prevEpisodeNumber
    );

    // Si encontramos el episodio anterior, devolvemos su slug
    if (prevEpisode) {
        return prevEpisode.slug;
    }

    // Si no encontramos el episodio anterior, podríamos devolver un valor por defecto
    // o el slug del episodio más reciente disponible
    const sortedEpisodes = [...allEpisodes].sort(
        (a, b) => b.episodeNumber - a.episodeNumber
    );

    return sortedEpisodes[0]?.slug || '';
}