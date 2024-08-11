import React, { useEffect, useState, useCallback, useMemo } from "react";
import EpisodePreview from "components/podcast/EpisodePreview";
import BroadcastRouter from "components/podcast/BroadcastRouter";
import ssrLocale from "utils/ssrLocale";
import { getAllEpisodes, getEpisodeBySlug } from "utils/podcastApi";
import Head, { HeadProps } from "components/layout/Head";
import PageWrapper from "components/layout/PageWrapper";
import ResourceFooter from "components/shared/footers/ResourceFooter";
import Logo from "public/assets/img/layout/logo.svg";
import { H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import { createClient } from "../../../prismicio";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import {
  PodcastGrid,
  PodcastList,
  CatList,
  CatFilter,
  Category,
  Pagination,
  PageLink,
  PageNumbers,
  PageNumber,
  TextToIcon,
} from "../../../components/pages/episodes/episodios.styles";
import {
  PrismicPodcastEpisode,
  MarkdownPodcastEpisode
} from "components/podcast/podcast.types";

interface EpisodesPageProps {
  locale: string;
  setTitle: (title: string) => void;
  episodes: Array<MarkdownPodcastEpisode | PrismicPodcastEpisode>;
  pt: {
    intro: {
      title: string;
      p: string;
    };
    head: HeadProps;
  };
  totalPages: number;
  currentPage: number;
  currentCategory: string;
}

const EPISODES_PER_PAGE = 30;

const EpisodesPage: React.FC<EpisodesPageProps> = ({
  locale,
  setTitle,
  episodes,
  pt,
  totalPages,
  currentPage,
  currentCategory
}) => {
  const { intro, head } = pt;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale, head.headerTitle, setTitle]);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 760);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [checkMobile]);

  const categories = [
    "todas",
    "founder",
    "producto",
    "inversor",
    "growth",
    "desarrollo",
  ];

  const isPrismicEpisode = useMemo(() => (episode: MarkdownPodcastEpisode | PrismicPodcastEpisode): episode is PrismicPodcastEpisode => {
    return 'data' in episode;
  }, []);

  return (
    <PageWrapper>
      <Head
        {...head}
        image={{ fileName: "og_image_podcast.png", alt: head.image.alt }}
        es_canonical={`https://acueducto.studio/podcast/episodios/${currentCategory}/${currentPage}`}
        noIndex
      />
      <PodcastGrid>
        <div>
          <Fade triggerOnce>
            <H1>{intro.title}</H1>
            <span className="blue">
              por <Logo />
            </span>
          </Fade>
          <BroadcastRouter
            spotify="https://open.spotify.com/show/2YLB7SOeJsLp5DtDuIwX8t"
            youtube="https://www.youtube.com/playlist?list=PLX3VC_2vq4TTRsyLoyWOHutWND0hQt9lD"
            apple="https://podcasts.apple.com/mx/podcast/cuando-el-r%C3%ADo-suena/id1500473556?i=1000466665137"
          >
            Escúchalo en
          </BroadcastRouter>
          <Fade triggerOnce>
            <CatFilter>
              <p>¿Buscas una categoría en especial?</p>
              <CatList>
                {categories.map((cat, i) => (
                  <Link href={`/podcast/episodios/${cat}`} key={`cat${i}`}>
                    <Category
                      className={cat === currentCategory ? "active" : ""}
                    >
                      {cat}
                    </Category>
                  </Link>
                ))}
              </CatList>
            </CatFilter>
          </Fade>
          <PodcastList>
            {episodes.map((episode, index) =>
              isPrismicEpisode(episode) ? (
                <EpisodePreview
                  title={episode.data.introduction[0].title[0].text}
                  guest={episode.data.introduction[0].guest}
                  business={episode.data.introduction[0].business}
                  slug={episode.uid}
                  spotify={episode.data.introduction[0].spotify}
                  apple={episode.data.introduction[0].apple}
                  google={episode.data.introduction[0].google}
                  youtube={episode.data.introduction[0].youtube}
                  podcastImage={episode.data.images[0].episode}
                  episode={episode.data.introduction[0].episode}
                  description={episode.data.introduction[0].description[0].text}
                  date={episode.data.introduction[0].date}
                  category={episode.data.introduction[0].category}
                  key={`npd${index}`}
                  prismic
                />
              ) : (
                <EpisodePreview {...episode} key={`npd${index}`} />
              )
            )}
          </PodcastList>
          <Pagination>
            {currentPage > 1 && (
              <PageLink href={`/podcast/episodios/${currentCategory}/${currentPage - 1}`}>
                {isMobile ? <TextToIcon reverse /> : "Anterior"}
              </PageLink>
            )}
            <PageNumbers>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page, index) => (
                  <React.Fragment key={page}>
                    <PageNumber
                      href={`/podcast/episodios/${currentCategory}/${page}`}
                      $active={page === currentPage}
                    >
                      {page}
                    </PageNumber>
                  </React.Fragment>
                )
              )}
            </PageNumbers>
            {currentPage < totalPages && (
              <PageLink href={`/podcast/episodios/${currentCategory}/${currentPage + 1}`}>
                {isMobile ? <TextToIcon /> : "Siguiente"}
              </PageLink>
            )}
          </Pagination>
        </div>
      </PodcastGrid>
      <ResourceFooter shadow identify="podcast" />
    </PageWrapper>
  );
};

export default React.memo(EpisodesPage);

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();
  const episodes = getAllEpisodes(["slug", "category"]);
  const prismicEpisodes = await client.getAllByType("episode");

  const categories = ["founder", "producto", "inversor", "growth", "desarrollo", "todas"];

  let paths = [];

  // Generate paths for /podcast/episodios
  paths.push({ params: { params: [] } });

  categories.forEach(category => {
    // Generate paths for /podcast/episodios/[category]
    paths.push({ params: { params: [category] } });

    const filteredEpisodes = category.toLowerCase() === "todas"
      ? [...episodes, ...prismicEpisodes]
      : [
          ...episodes.filter(ep => ep.category.toLowerCase() === category.toLowerCase()),
          ...prismicEpisodes.filter(ep => ep.data.introduction[0].category.toLowerCase() === category.toLowerCase())
        ];

    const totalPages = Math.ceil(filteredEpisodes.length / EPISODES_PER_PAGE);

    // Generate paths for /podcast/episodios/[category]/[page]
    Array.from({ length: totalPages }, (_, i) => i + 1).forEach(page => {
      paths.push({ params: { params: [category, page.toString()] } });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Omit<EpisodesPageProps, 'setTitle'>> = async (context) => {
  const params = context.params?.params as string[] || [];
  const category = params[0] || "todas";
  const page = Number(params[1]) || 1;

  function isPrismicEpisode(episode: MarkdownPodcastEpisode | PrismicPodcastEpisode): episode is PrismicPodcastEpisode {
    return 'data' in episode;
  }

  const sortedEpisodes = getAllEpisodes(["slug", "episode", "category"]).sort(
    (ep1, ep2) => ep2.episode - ep1.episode
  );

  const episodes = sortedEpisodes.map((episode) =>
    getEpisodeBySlug(episode.slug, [
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
  ) as MarkdownPodcastEpisode[];

  const pt = ssrLocale({ locale: context.locale, fileName: "archivo.json" });
  if (!pt) {
    return {
      notFound: true,
    };
  }

  const client = createClient({ previewData: context.previewData });
  const prismicEpisodes = await client.getAllByType("episode") as PrismicPodcastEpisode[];

  const allEpisodes = [...episodes, ...prismicEpisodes].sort((a, b) => {
    const episodeA = isPrismicEpisode(a) ? a.data.introduction[0].episode : a.episode;
    const episodeB = isPrismicEpisode(b) ? b.data.introduction[0].episode : b.episode;
    return episodeB - episodeA;  // Ordenar de mayor a menor (más nuevo a más viejo)
  });
  
  const filteredEpisodes = category.toLowerCase() === "todas"
    ? allEpisodes
    : allEpisodes.filter(episode => {
        const episodeCategory = isPrismicEpisode(episode)
          ? episode.data.introduction[0].category
          : episode.category;
        return episodeCategory.toLowerCase() === category.toLowerCase();
      });

  const totalEpisodes = filteredEpisodes.length;
  const totalPages = Math.ceil(totalEpisodes / EPISODES_PER_PAGE);

  const startIndex = (page - 1) * EPISODES_PER_PAGE;
  const endIndex = startIndex + EPISODES_PER_PAGE;
  const paginatedEpisodes = filteredEpisodes.slice(startIndex, endIndex);

  return {
    props: {
      locale: context.locale || 'es',
      episodes: paginatedEpisodes,
      pt,
      prismicEpisodes: allEpisodes.filter(isPrismicEpisode),  // Mantenemos todos los episodios de Prismic ordenados
      totalPages,
      currentPage: page,
      currentCategory: category,
    },
  };
};