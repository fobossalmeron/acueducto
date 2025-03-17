import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { EpisodePreview } from 'components/pages/podcast/EpisodePreview/EpisodePreview';
import EpisodePreviewSkeleton from 'components/pages/podcast/EpisodePreviewSkeleton';
import BroadcastRouter from 'components/pages/podcast/BroadcastRouter';
import ssrLocale from 'utils/ssrLocale';
import { getAllMarkdownEpisodes } from 'utils/podcastApi';
import Head, { HeadProps } from 'components/layout/Head/Head';
import PageWrapper from 'components/layout/PageWrapper';
import ContactFooter from 'components/layout/footers/ContactFooter';
import Logo from 'public/assets/img/layout/logo.svg';
import { H1 } from 'components/shared/Dangerously';
import { Fade } from 'react-awesome-reveal';
import { createClient } from '../../../prismicio';
import { GetStaticPaths } from 'next';
import type { GetStaticPropsContext } from 'next';
import { debounce } from 'utils/debounce';
import EpisodeProps from 'types/EpisodeProps';
import { PageProps } from 'types/PageProps';
import {
  PodcastGrid,
  NameComponent,
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
} from 'components/pages/podcast/podcast-all-episodes/allEpisodes.styles';

interface EpisodesPageProps extends PageProps {
  initialEpisodes: Array<EpisodeProps>;
  totalEpisodes: number;
  totalPages: number;
  currentPage: number;
  currentCategory: string;
  pt: {
    intro: {
      title: string;
      p: string;
    };
    head: HeadProps;
  };
}

const EPISODES_PER_PAGE = 20;
const CATEGORIES = [
  'todas',
  'founder',
  'producto',
  'inversor',
  'growth',
  'desarrollo',
  'innovacion',
  'operador',
  'people',
];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function EpisodesPage({
  setTitle,
  initialEpisodes,
  pt,
  totalPages,
  currentPage,
  currentCategory,
}: EpisodesPageProps) {
  // Verificar que pt existe antes de destructurarlo
  if (!pt) {
    return <div>Error: No se pudo cargar la información de la página</div>;
  }

  const { intro, head } = pt;
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [filteredEpisodes, setFilteredEpisodes] = useState<Array<EpisodeProps>>(
    [],
  );
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
    },
  );

  const { data: allEpisodes, error: allEpisodesError } = useSWR(
    isSearching ? '/api/all-episodes' : null,
    fetcher,
  );

  useEffect(() => {
    setTitle(head.headerTitle);
  }, []);

  useEffect(() => {
    // Asegurarse de que isLoading se establezca en false cuando cambian los episodios
    if (episodes) {
      setIsLoading(false);
    }
  }, [episodes]);

  useEffect(() => {
    // Limpiar búsqueda cuando cambia la categoría
    setInputValue('');
    setSearchTerm('');
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
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [checkMobile]);

  const isPrismicEpisode = useCallback((episode: EpisodeProps): boolean => {
    return episode.episodeSource === 'prismic';
  }, []);

  const normalizeText = useCallback((text: string): string => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }, []);

  const performSearch = useCallback(
    (term: string, episodes: Array<EpisodeProps>) => {
      const normalizedTerm = normalizeText(term);
      const filtered = episodes.filter((episode) => {
        return (
          normalizeText(episode.title).includes(normalizedTerm) ||
          normalizeText(episode.guest).includes(normalizedTerm) ||
          normalizeText(episode.business).includes(normalizedTerm) ||
          normalizeText(episode.description).includes(normalizedTerm) ||
          normalizeText(episode.category).includes(normalizedTerm)
        );
      });
      setFilteredEpisodes(filtered);
      setNoResults(filtered.length === 0);

      // Navegar a la URL base de episodios
      if (currentCategory !== 'todas') {
        router.push('/podcast/episodios', undefined, { shallow: true });
      }
    },
    [isPrismicEpisode, currentCategory, router, normalizeText],
  );

  const debouncedSearch = useMemo(
    () =>
      debounce((term: string, episodes: Array<EpisodeProps>) => {
        setSearchTerm(term);
        performSearch(term, episodes);
        setCurrentFilteredPage(1);
      }, 300),
    [performSearch],
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
        setSearchTerm('');
        setFilteredEpisodes([]);
        setNoResults(false);
        if (currentCategory !== 'todas') {
          router.push(`/podcast/episodios/${currentCategory}`);
        }
      }
    },
    [debouncedSearch, isSearching, allEpisodes, currentCategory, router],
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
        setInputValue('');
        setSearchTerm('');
        setNoResults(false);
        setFilteredEpisodes([]);
        setCurrentFilteredPage(1);
        router.push(`/podcast/episodios/${category}`);
      }
    },
    [currentCategory, router, mutate],
  );

  const paginatedEpisodes = useMemo(() => {
    const startIndex = (currentFilteredPage - 1) * EPISODES_PER_PAGE;
    const endIndex = startIndex + EPISODES_PER_PAGE;
    return (searchTerm ? filteredEpisodes : episodes).slice(
      startIndex,
      endIndex,
    );
  }, [searchTerm, filteredEpisodes, episodes, currentFilteredPage]);

  // Manejar el estado de fallback
  if (router.isFallback) {
    return (
      <PageWrapper>
        <PodcastGrid>
          <div>
            <div style={{ textAlign: 'center', padding: '50px 0' }}>
              <p>Cargando episodios...</p>
            </div>
          </div>
        </PodcastGrid>
      </PageWrapper>
    );
  }

  if (error || allEpisodesError) return <div>Failed to load episodes</div>;
  if (!episodes) return <div>Loading...</div>;

  return (
    <PageWrapper>
      <Head
        {...head}
        image={{ fileName: 'og_image_podcast.png', alt: head.image.alt }}
        es_canonical={`https://acueducto.studio/podcast/episodios/${currentCategory}/${currentPage}`}
        noIndex
      />
      <PodcastGrid>
        <div>
          <Fade triggerOnce>
            <NameComponent>
              <H1>{intro.title}</H1>
              <span className="blue">
                por <Logo />
              </span>
            </NameComponent>
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
                      cat === currentCategory && !isSearching ? 'active' : ''
                    }
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {cat === 'innovacion' ? 'Innovación' : cat}
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
                    <EpisodePreview key={`npd${index}`} {...episode} />
                  ),
                )}
              </PodcastList>
            )}
          {!searchTerm && (
            <Pagination>
              {currentPage > 1 && (
                <PageLink
                  href={`/podcast/episodios/${currentCategory}/${currentPage - 1}`}
                >
                  {isMobile ? <TextToIcon $reverse /> : 'Anterior'}
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
                  ),
                )}
              </PageNumbers>
              {currentPage < totalPages && (
                <PageLink
                  href={`/podcast/episodios/${currentCategory}/${currentPage + 1}`}
                >
                  {isMobile ? <TextToIcon /> : 'Siguiente'}
                </PageLink>
              )}
            </Pagination>
          )}
        </div>
      </PodcastGrid>
      <ContactFooter />
    </PageWrapper>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const client = createClient();
    const episodes = getAllMarkdownEpisodes(['slug', 'category']);

    let prismicEpisodes = [];
    try {
      // Intentar obtener episodios de Prismic con un timeout más largo
      prismicEpisodes = await client.getAllByType('episode');
    } catch (error) {
      console.error(
        'Error al obtener episodios de Prismic en getStaticPaths:',
        error,
      );
      // Continuar con un array vacío si falla
    }

    // Generar solo las rutas principales para reducir el tiempo de build
    const paths = [
      { params: { params: [] } }, // /podcast/episodios
      ...CATEGORIES.map((category) => ({ params: { params: [category] } })), // /podcast/episodios/[category]
    ];

    return {
      paths,
      fallback: true, // Cambiar a true para generar páginas bajo demanda
    };
  } catch (error) {
    console.error('Error en getStaticPaths:', error);

    // Devolver rutas mínimas en caso de error
    return {
      paths: [{ params: { params: [] } }],
      fallback: true,
    };
  }
};

export async function getStaticProps({
  params,
  locale,
}: GetStaticPropsContext) {
  const paramsArray = (params?.params as string[]) || [];
  const category = paramsArray[0] || 'todas';
  const page = Number(paramsArray[1]) || 1;

  try {
    const client = createClient();

    let prismicEpisodes = [];
    try {
      // Intentar obtener episodios de Prismic
      prismicEpisodes = await client.getAllByType('episode');
    } catch (prismicError) {
      console.error('Error al obtener episodios de Prismic:', prismicError);
      // Continuar con un array vacío si falla
    }

    const markdownEpisodes = getAllMarkdownEpisodes([
      'title',
      'guest',
      'business',
      'description',
      'category',
      'episode',
      'date',
      'slug',
      'spotify',
      'apple',
      'google',
      'youtube',
    ]) as EpisodeProps[];

    const allEpisodes = [...markdownEpisodes, ...prismicEpisodes].sort(
      (a, b) => {
        const episodeA =
          'data' in a ? a.data.introduction[0].episode : a.episodeNumber;
        const episodeB =
          'data' in b ? b.data.introduction[0].episode : b.episodeNumber;
        return episodeB - episodeA; // Ordenar de mayor a menor (más nuevo a más viejo)
      },
    );

    const filteredEpisodes =
      category.toLowerCase() === 'todas'
        ? allEpisodes
        : allEpisodes.filter((episode) => {
            const episodeCategory =
              'data' in episode
                ? episode.data.introduction[0].category
                : episode.category;
            return episodeCategory.toLowerCase() === category.toLowerCase();
          });

    const totalEpisodes = filteredEpisodes.length;
    const totalPages = Math.ceil(totalEpisodes / EPISODES_PER_PAGE);

    const startIndex = (page - 1) * EPISODES_PER_PAGE;
    const endIndex = startIndex + EPISODES_PER_PAGE;
    const paginatedEpisodes = filteredEpisodes
      .slice(startIndex, endIndex)
      .map((episode) => {
        if ('data' in episode) {
          // Es un episodio de Prismic
          return {
            slug: episode.uid,
            date: episode.data.introduction[0].date,
            title:
              'text' in episode.data.introduction[0].title[0]
                ? episode.data.introduction[0].title[0].text
                : '',
            guest: episode.data.introduction[0].guest,
            business: episode.data.introduction[0].business,
            category: episode.data.introduction[0].category,
            description:
              'text' in episode.data.introduction[0].description[0]
                ? episode.data.introduction[0].description[0].text
                : '',
            episodeNumber: episode.data.introduction[0].episode,
            spotify: episode.data.introduction[0].spotify,
            apple: episode.data.introduction[0].apple,
            youtube: episode.data.introduction[0].youtube,
            podcastCoverImage: episode.data.images[0].episode.url,
            episodeSource: 'prismic',
          };
        }
        // Es un episodio de Markdown
        return {
          ...episode,
          episodeSource: 'markdown',
        };
      });

    // Obtener traducciones
    const pt = ssrLocale({ locale: locale, fileName: 'archivo.json' });

    // Si no hay traducciones, usar un objeto predeterminado
    const defaultPt = {
      intro: {
        title: 'Episodios del podcast',
        p: 'Escucha todos nuestros episodios',
      },
      head: {
        title: 'Episodios | Cuando el río suena',
        description: 'Todos los episodios del podcast Cuando el río suena',
        headerTitle: 'Episodios',
        image: { alt: 'Episodios del podcast' },
      },
    };

    return {
      props: {
        locale: locale || 'es',
        initialEpisodes: paginatedEpisodes,
        pt: pt || defaultPt,
        totalPages,
        currentPage: page,
        currentCategory: category,
        totalEpisodes,
      },
      revalidate: 60, // Revalidar cada minuto si hay error
    };
  } catch (error) {
    console.error('Error general en getStaticProps:', error);

    // Devolver datos mínimos para evitar que falle el build
    return {
      props: {
        locale: locale || 'es',
        initialEpisodes: [],
        pt: {
          intro: {
            title: 'Episodios del podcast',
            p: 'Escucha todos nuestros episodios',
          },
          head: {
            title: 'Episodios | Cuando el río suena',
            description: 'Todos los episodios del podcast Cuando el río suena',
            headerTitle: 'Episodios',
            image: { alt: 'Episodios del podcast' },
          },
        },
        totalPages: 1,
        currentPage: 1,
        currentCategory: category || 'todas',
        totalEpisodes: 0,
      },
      revalidate: 60,
    };
  }
}
