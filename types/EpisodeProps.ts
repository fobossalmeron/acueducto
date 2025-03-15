import { RichTextField } from '@prismicio/types';
import { ImageField } from '@prismicio/types';

type EpisodeSource = 'prismic' | 'markdown' | undefined;

export interface PrevEpisodeProps {
  episodeSource: EpisodeSource;
  episodeNumber: number;
  slug: string;
  guest: string;
  business: string;
  category: string;
  podcastCoverImage?: ImageField<never>;
}

interface EpisodeProps {
  slug: string;
  date?: string;
  title?: string;
  guest: string;
  business: string;
  category: string;
  description?: string;
  episodeNumber: number;
  file?: string;
  spotify?: string;
  insights?: string[] | RichTextField; // Los insights pueden venir como array de strings (Markdown) o como RichText (Prismic)
  apple?: string;
  google?: string;
  youtube?: string;
  consolify?: any;
  content?: string | RichTextField;
  next?: object;
  prevEpisode?: object;
  gif?: string;
  podcastCoverImage?: ImageField<never>;
  youtubeImageUrl?: string;
  seo_title?: string;
  seo_h1?: string;
  index?: boolean;
  episodeSource: EpisodeSource;
}

export default EpisodeProps;
