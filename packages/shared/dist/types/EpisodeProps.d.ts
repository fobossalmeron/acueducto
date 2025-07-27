import { RichTextField } from '@prismicio/types';
export type EpisodeSource = 'prismic' | 'markdown' | undefined;
export interface PrevEpisodeProps {
    episodeSource: EpisodeSource;
    episodeNumber: number;
    slug: string;
    guest: string;
    business: string;
    category: string;
    podcastCoverImage?: string;
}
interface EpisodeProps {
    episodeSource: EpisodeSource;
    episodeNumber: number;
    slug: string;
    guest: string;
    business: string;
    category: string;
    title?: string;
    seo_title?: string;
    seo_h1?: string;
    index?: boolean;
    date?: string;
    description?: string;
    spotify?: string;
    apple?: string;
    youtube?: string;
    content?: string | RichTextField;
    insights?: string[] | RichTextField;
    podcastCoverImage?: string | null;
    youtubeImageUrl?: string;
    prevEpisode?: object;
    gif?: string;
}
export default EpisodeProps;
//# sourceMappingURL=EpisodeProps.d.ts.map