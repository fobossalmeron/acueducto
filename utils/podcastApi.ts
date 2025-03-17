import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import EpisodeProps from "types/EpisodeProps";

const episodesDirectory = join(process.cwd(), "_episodios");

export function getMarkdownEpisodeSlugs() {
  return fs.readdirSync(episodesDirectory);
}

export function getMarkdownEpisodeBySlug(slug, fields = []): EpisodeProps {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(episodesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "episode") {
      items["episodeNumber"] = data.episode;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items as EpisodeProps;
}

export function getAllMarkdownEpisodes(fields = []) {
  const slugs = getMarkdownEpisodeSlugs();
  const episodes = slugs.map((slug) => getMarkdownEpisodeBySlug(slug, fields));
  return episodes;
}

export function getPrevEpisodeSlug(currentEpisode) {
  // Obtener todos los episodios con su número y slug
  const allEpisodes = getAllMarkdownEpisodes(["episode", "slug"]);

  // Buscar el episodio anterior (currentEpisode - 1)
  const prevEpisodeNumber = currentEpisode - 1;
  const prevEpisode = allEpisodes.find(
    (ep) => ep.episodeNumber === prevEpisodeNumber
  );

  // Si encontramos el episodio anterior, devolver su slug
  if (prevEpisode) {
    return prevEpisode.slug;
  }

  // Si no encontramos el episodio anterior, buscar el episodio con el número más cercano
  // Ordenar episodios por número (de mayor a menor)
  const sortedEpisodes = [...allEpisodes].sort((a, b) => {
    const aNum = a.episodeNumber || 0;
    const bNum = b.episodeNumber || 0;
    return bNum - aNum;
  });

  // Encontrar el primer episodio con número menor que el actual
  const closestPrevEpisode = sortedEpisodes.find(
    (ep) => (ep.episodeNumber || 0) < currentEpisode
  );

  // Si encontramos un episodio cercano, devolver su slug
  if (closestPrevEpisode) {
    return closestPrevEpisode.slug;
  }

  // Si todo falla, devolver el episodio más reciente
  return sortedEpisodes[0]?.slug || '';
}