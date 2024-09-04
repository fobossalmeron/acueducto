import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { EpisodePreview } from "components/podcast/EpisodePreview/EpisodePreview";
import EpisodePreviewSkeleton from "components/podcast/EpisodePreviewSkeleton";
import BroadcastRouter from "components/podcast/BroadcastRouter";
import ssrLocale from "utils/ssrLocale";
import { getAllEpisodes } from "utils/podcastApi";
import Head, { HeadProps } from "components/layout/Head";
import PageWrapper from "components/layout/PageWrapper";
import ResourceFooter from "components/layout/footers/ResourceFooter";
import Logo from "public/assets/img/layout/logo.svg";
import { H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import { createClient } from "../../../prismicio";
import { GetStaticProps, GetStaticPaths } from "next";
import { debounce } from "utils/debounce";
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
  SearchInput,
} from "components/pages/allEpisodes/allEpisodes.styles";
import {
  PrismicPodcastEpisode,
  MarkdownPodcastEpisode,
} from "components/podcast/podcast.types";

interface EpisodesPageProps {
  locale: string;
  setTitle: (title: string) => void;
  initialEpisodes: Array<MarkdownPodcastEpisode | PrismicPodcastEpisode>;
  totalEpisodes: number;
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
const CATEGORIES = [
  "todas",
  "founder",
  "producto",
  "inversor",
  "growth",
  "desarrollo",
  "innovacion",
  "operador",
  "people",
];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const EpisodesPage: React.FC<EpisodesPageProps> = ({
  locale,
  setTitle,
  initialEpisodes,
  pt,
  totalPages,
  currentPage,
  currentCategory,
}) => {
  const { intro, head } = pt;
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredEpisodes, setFilteredEpisodes] = useState<
    Array<MarkdownPodcastEpisode | PrismicPodcastEpisode>
  >([]);
  const [currentFilteredPage, setCurrentFilteredPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: { episodes } = { episodes: initialEpisodes },
    error,
    mutate,
  } = useSWR(
    `/api/episodes?category=${currentCategory}&page=${currentPage}`,
    fetcher,
    {
      initialData: { episodes: initialEpisodes },
      revalidateOnFocus: false,
      onSuccess: () => setIsLoading(false),
    }
  );

  const { data: allEpisodes, error: allEpisodesError } = useSWR(
    isSearching ? "/api/all-episodes" : null,
    fetcher
  );

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale, head.headerTitle, setTitle]);

  useEffect(() => {
    // Asegurarse de que isLoading se establezca en false cuando cambian los episodios
    if (episodes) {
      setIsLoading(false);
    }
  }, [episodes]);

  useEffect(() => {
    // Limpiar búsqueda cuando cambia la categoría
    setInputValue("");
    setSearchTerm("");
    setIsSearching(false);
    setFilteredEpisodes([]);
    setNoResults(false);
    setCurrentFilteredPage(1);
  }, [currentCategory]);

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

  const isPrismicEpisode = useCallback(
    (
      episode: MarkdownPodcastEpisode | PrismicPodcastEpisode
    ): episode is PrismicPodcastEpisode => {
      return "data" in episode;
    },
    []
  );

  const normalizeText = useCallback((text: string): string => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }, []);

  const performSearch = useCallback(
    (
      term: string,
      episodes: Array<MarkdownPodcastEpisode | PrismicPodcastEpisode>
    ) => {
      const normalizedTerm = normalizeText(term);
      const filtered = episodes.filter((episode) => {
        if (isPrismicEpisode(episode)) {
          return (
            normalizeText(episode.data.introduction[0].title[0].text).includes(
              normalizedTerm
            ) ||
            normalizeText(episode.data.introduction[0].guest).includes(
              normalizedTerm
            ) ||
            normalizeText(episode.data.introduction[0].business).includes(
              normalizedTerm
            ) ||
            normalizeText(
              episode.data.introduction[0].description[0].text
            ).includes(normalizedTerm) ||
            normalizeText(episode.data.introduction[0].category).includes(
              normalizedTerm
            )
          );
        } else {
          return (
            normalizeText(episode.title).includes(normalizedTerm) ||
            normalizeText(episode.guest).includes(normalizedTerm) ||
            normalizeText(episode.business).includes(normalizedTerm) ||
            normalizeText(episode.description).includes(normalizedTerm) ||
            normalizeText(episode.category).includes(normalizedTerm)
          );
        }
      });
      setFilteredEpisodes(filtered);
      setNoResults(filtered.length === 0);

      // Navegar a la URL base de episodios
      if (currentCategory !== "todas") {
        router.push("/podcast/episodios", undefined, { shallow: true });
      }
    },
    [isPrismicEpisode, currentCategory, router, normalizeText]
  );

  const debouncedSearch = useMemo(
    () =>
      debounce(
        (
          term: string,
          episodes: Array<MarkdownPodcastEpisode | PrismicPodcastEpisode>
        ) => {
          setSearchTerm(term);
          performSearch(term, episodes);
          setCurrentFilteredPage(1);
        },
        300
      ),
    [performSearch]
  );

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      setInputValue(term);

      if (term) {
        if (!isSearching) {
          setIsSearching(true);
        }

        if (allEpisodes) {
          debouncedSearch(term.toLowerCase(), allEpisodes);
        }
      } else {
        setIsSearching(false);
        setSearchTerm("");
        setFilteredEpisodes([]);
        setNoResults(false);
        if (currentCategory !== "todas") {
          router.push(`/podcast/episodios/${currentCategory}`);
        }
      }
    },
    [debouncedSearch, isSearching, allEpisodes, currentCategory, router]
  );

  const handleCategoryChange = useCallback(
    (category: string) => {
      if (category === currentCategory) {
        // Si es la misma categoría, solo recargamos los datos
        setIsLoading(true);
        mutate();
      } else {
        setIsLoading(true);
        setIsSearching(false);
        setInputValue("");
        setSearchTerm("");
        setNoResults(false);
        setFilteredEpisodes([]);
        setCurrentFilteredPage(1);
        router.push(`/podcast/episodios/${category}`);
      }
    },
    [currentCategory, router, mutate]
  );

  const paginatedEpisodes = useMemo(() => {
    const startIndex = (currentFilteredPage - 1) * EPISODES_PER_PAGE;
    const endIndex = startIndex + EPISODES_PER_PAGE;
    return (searchTerm ? filteredEpisodes : episodes).slice(
      startIndex,
      endIndex
    );
  }, [searchTerm, filteredEpisodes, episodes, currentFilteredPage]);

  const memoizedEpisodes = useMemo(() => 
    paginatedEpisodes.map((episode) => (
      <EpisodePreview
        key={episode.uid || episode.slug}
        {...(isPrismicEpisode(episode)
          ? {
              title: episode.data.introduction[0].title[0].text,
              guest: episode.data.introduction[0].guest,
              business: episode.data.introduction[0].business,
              slug: episode.uid,
              spotify: episode.data.introduction[0].spotify,
              apple: episode.data.introduction[0].apple,
              google: episode.data.introduction[0].google,
              youtube: episode.data.introduction[0].youtube,
              podcastImage: episode.data.images[0].episode,
              episode: episode.data.introduction[0].episode,
              description:
                episode.data.introduction[0].description[0].text,
              date: episode.data.introduction[0].date,
              category: episode.data.introduction[0].category,
              prismic: true,
            }
          : episode)}
      />
    )),
    [paginatedEpisodes, isPrismicEpisode]
  );

  if (error || allEpisodesError) return <div>Failed to load episodes</div>;
  if (!episodes) return <div>Loading...</div>;

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
                {CATEGORIES.map((cat, i) => (
                  <Category
                    key={`cat${i}`}
                    className={
                      cat === currentCategory && !isSearching ? "active" : ""
                    }
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {cat === "innovacion" ? "Innovación" : cat}
                  </Category>
                ))}
              </CatList>
            </CatFilter>
          </Fade>
          <Fade triggerOnce>
            <p>¿O alguna, empresa, invitado o tema?</p>
            <SearchInput
              type="text"
              placeholder="Buscar episodios"
              value={inputValue}
              onChange={handleSearch}
            />
          </Fade>
          {(isLoading || (isSearching && !allEpisodes)) && (
            <Fade>
              <EpisodePreviewSkeleton />
              <EpisodePreviewSkeleton />
            </Fade>
          )}

          {noResults && searchTerm && (
            <div>
              No se encontraron coincidencias con tu búsqueda "{searchTerm}"
            </div>
          )}
          {!isLoading &&
            (!isSearching || (isSearching && allEpisodes)) &&
            !noResults && (
              <PodcastList>
                {(searchTerm ? filteredEpisodes : paginatedEpisodes).map(
                  (episode, index) => (
                    <EpisodePreview
                      key={`npd${index}`}
                      {...(isPrismicEpisode(episode)
                        ? {
                            title: episode.data.introduction[0].title[0].text,
                            guest: episode.data.introduction[0].guest,
                            business: episode.data.introduction[0].business,
                            slug: episode.uid,
                            spotify: episode.data.introduction[0].spotify,
                            apple: episode.data.introduction[0].apple,
                            google: episode.data.introduction[0].google,
                            youtube: episode.data.introduction[0].youtube,
                            podcastImage: episode.data.images[0].episode,
                            episode: episode.data.introduction[0].episode,
                            description:
                              episode.data.introduction[0].description[0].text,
                            date: episode.data.introduction[0].date,
                            category: episode.data.introduction[0].category,
                            prismic: true,
                          }
                        : episode)}
                    />
                  )
                )}
              </PodcastList>
            )}
          {!searchTerm && (
            <Pagination>
              {currentPage > 1 && (
                <PageLink
                  href={`/podcast/episodios/${currentCategory}/${currentPage - 1}`}
                >
                  {isMobile ? <TextToIcon $reverse /> : "Anterior"}
                </PageLink>
              )}
              <PageNumbers>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page, index) => (
                    <PageNumber
                      key={page}
                      href={`/podcast/episodios/${currentCategory}/${page}`}
                      $active={page === currentPage}
                    >
                      {page}
                    </PageNumber>
                  )
                )}
              </PageNumbers>
              {currentPage < totalPages && (
                <PageLink
                  href={`/podcast/episodios/${currentCategory}/${currentPage + 1}`}
                >
                  {isMobile ? <TextToIcon /> : "Siguiente"}
                </PageLink>
              )}
            </Pagination>
          )}
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

  let paths = [];

  // Generate paths for /podcast/episodios
  paths.push({ params: { params: [] } });

  CATEGORIES.forEach((category) => {
    // Generate paths for /podcast/episodios/[category]
    paths.push({ params: { params: [category] } });

    const filteredEpisodes =
      category.toLowerCase() === "todas"
        ? [...episodes, ...prismicEpisodes]
        : [
            ...episodes.filter(
              (ep) => ep.category.toLowerCase() === category.toLowerCase()
            ),
            ...prismicEpisodes.filter(
              (ep) =>
                ep.data.introduction[0].category.toLowerCase() ===
                category.toLowerCase()
            ),
          ];

    const totalPages = Math.ceil(filteredEpisodes.length / EPISODES_PER_PAGE);

    // Generate paths for /podcast/episodios/[category]/[page]
    Array.from({ length: totalPages }, (_, i) => i + 1).forEach((page) => {
      paths.push({ params: { params: [category, page.toString()] } });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  Omit<EpisodesPageProps, "setTitle">
> = async (context) => {
  const params = (context.params?.params as string[]) || [];
  const category = params[0] || "todas";
  const page = Number(params[1]) || 1;

  const client = createClient({ previewData: context.previewData });

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

  const prismicEpisodes = (await client.getAllByType(
    "episode"
  )) as PrismicPodcastEpisode[];

  const allEpisodes = [...markdownEpisodes, ...prismicEpisodes].sort((a, b) => {
    const episodeA = "data" in a ? a.data.introduction[0].episode : a.episode;
    const episodeB = "data" in b ? b.data.introduction[0].episode : b.episode;
    return episodeB - episodeA; // Ordenar de mayor a menor (más nuevo a más viejo)
  });

  const filteredEpisodes =
    category.toLowerCase() === "todas"
      ? allEpisodes
      : allEpisodes.filter((episode) => {
          const episodeCategory =
            "data" in episode
              ? episode.data.introduction[0].category
              : episode.category;
          return episodeCategory.toLowerCase() === category.toLowerCase();
        });

  const totalEpisodes = filteredEpisodes.length;
  const totalPages = Math.ceil(totalEpisodes / EPISODES_PER_PAGE);

  const startIndex = (page - 1) * EPISODES_PER_PAGE;
  const endIndex = startIndex + EPISODES_PER_PAGE;
  const paginatedEpisodes = filteredEpisodes.slice(startIndex, endIndex);

  const pt = ssrLocale({ locale: context.locale, fileName: "archivo.json" });
  if (!pt) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locale: context.locale || "es",
      initialEpisodes: paginatedEpisodes,
      pt,
      totalPages,
      currentPage: page,
      currentCategory: category,
      totalEpisodes,
    },
  };
};
