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

export function getNextEpisodeSlug(currentEpisode) {
  //retreive object with episodes in alphabetical order
  const allIds = getAllMarkdownEpisodes(["episodeNumber"]);


  //turn object into simple array, same order
  let slugArr: number[] = [];
  allIds.map((obj) => {
    for (var [key, value] of Object.entries(obj)) {
      slugArr.push(value);
    }
  });

  //identify next episode number
  let nextEp = currentEpisode - 1;

  //identify next episode position in array by looking for its episode num in the simple array
  let nextEpPosInArr = slugArr.indexOf(nextEp, 0);

  //if the next position doesn't exist (last episode + 1), return to first episode
  //this also prevents mislabeled episodes from breaking 
  nextEpPosInArr == -1
    ? (nextEpPosInArr = slugArr.indexOf(slugArr.length, 0))
    : (nextEpPosInArr = nextEpPosInArr);

  //retreive object with episodes slug in alphabetical order
  const allSlugs = getAllMarkdownEpisodes(["slug"]);

  //find slug by looking for next episode position in slug array
  if (nextEpPosInArr == -1) {
    return allSlugs[33].slug;
  } else {
    return allSlugs[nextEpPosInArr].slug;
  }
}