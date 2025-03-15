import { ImageFieldImage } from "@prismicio/client";

// export interface MarkdownPodcastEpisode {
//   title: string;
//   guest: string;
//   business: string;
//   description: string;
//   category: string;
//   episode: number;
//   date: string;
//   slug: string;
//   spotify: string;
//   apple: string;
//   google: string;
//   youtube: string;
//   podcastImage?: string;
// }

export interface PrismicPodcastEpisode {
  data: {
    introduction: Array<{
      title: Array<{ text: string }>;
      guest: string;
      business: string;
      description: Array<{ text: string }>;
      category: string;
      episode: number;
      date: string;
      spotify: string;
      apple: string;
      google: string;
      youtube: string;
    }>;
    images: Array<{ episode: ImageFieldImage; solas?: ImageFieldImage }>;
  };
  uid: string;
  logos?: string[];
}