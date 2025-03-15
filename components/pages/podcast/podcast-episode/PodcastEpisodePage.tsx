import React, { useState, useEffect } from 'react';
import { H1, P, Li } from 'components/shared/Dangerously';
import { Fade } from 'react-awesome-reveal';
import { EpisodePreview } from 'components/pages/podcast/EpisodePreview/EpisodePreview';
import Logo from 'public/assets/img/layout/logo.svg';
import EpisodeNumber from 'components/pages/podcast/EpisodeNumber';
import Link from 'next/link';
import CenteredSection, {
  Content,
  Insights,
  Transcript,
} from 'components/shared/CenteredSection';
import ShareRouter from 'components/pages/podcast/ShareRouter';
import dynamic from 'next/dynamic';
import BackArrowIcon from 'public/assets/img/layout/backarrow.svg';
import { PrismicRichText } from '@prismicio/react';
import BroadcastRouter from 'components/pages/podcast/BroadcastRouter';
import {
  IntroLogo,
  THoverable,
  AllEpisodesHoverable,
  EpisodeNumberStyled,
  Center,
  ContentType,
  CenteredDiv,
  RouterSpace,
  NextEp,
  VideoContainer,
  Video,
} from './PodcastEpisode.styles';
import EpisodeProps, { PrevEpisodeProps } from 'types/EpisodeProps';
import { RichTextField } from '@prismicio/client';

// Importación dinámica del reproductor de YouTube para evitar problemas de SSR
// Se carga solo en el cliente para evitar errores de renderizado en el servidor
const NoSSRPlayer = dynamic(() => import('react-player/youtube'), {
  loading: () => <p>Cargando...</p>,
  ssr: false,
});

interface PodcastEpisodePageProps {
  episode: EpisodeProps;
  prevEpisode: PrevEpisodeProps;
}

export const PodcastEpisodePage: React.FC<PodcastEpisodePageProps> = ({
  episode,
  prevEpisode,
}) => {
  const {
    title,
    seo_h1,
    insights,
    business,
    slug,
    spotify,
    apple,
    youtube,
    episodeNumber,
    content,
    youtubeImageUrl,
    episodeSource,
  } = episode;

  // Convierte la URL de YouTube al formato de embed para poder incrustar el video
  const embedYoutube = youtube && youtube.replace('watch?v=', 'embed/');
  // Estado para controlar si el DOM ya está cargado (necesario para componentes client-side)
  // Probablemente pueda heredar el hasLoaded de la página de episodios
  const [domLoaded, setDomLoaded] = useState<boolean>(false);

  // Establece domLoaded a true cuando el componente se monta en el cliente
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <CenteredSection
        $customBackground={'/assets/img/layout/backOld.svg'}
        id="cuandoelriosuena"
      >
        {/* Cabecera del podcast con logo y título */}
        <Fade triggerOnce>
          <IntroLogo>
            <Link href="/podcast" passHref legacyBehavior>
              <a>
                <THoverable>cuando el río suena</THoverable>
                <span>
                  por <Logo className="inline" />
                </span>
              </a>
            </Link>
          </IntroLogo>
        </Fade>
        <Fade triggerOnce>
          <div>
            {/* Enlace para volver a todos los episodios */}
            <Link href={'/podcast/episodios'} passHref legacyBehavior>
              <AllEpisodesHoverable>
                <BackArrowIcon />
                <p>ver todos los episodios</p>
              </AllEpisodesHoverable>
            </Link>
            {/* Número de episodio */}
            <EpisodeNumberStyled>
              <EpisodeNumber episodeNumber={episodeNumber} />
            </EpisodeNumberStyled>
            {/* Título del episodio - maneja SEO con h1 oculto si es necesario */}
            {seo_h1 ? (
              <>
                <h1 className="seo_h1">{seo_h1}</h1>
                <P className="h1">
                  {title.charAt(0).toLowerCase() + title.slice(1)}
                </P>
              </>
            ) : (
              <H1>{title.charAt(0).toLowerCase() + title.slice(1)}</H1>
            )}
            {/* Enlaces a plataformas de podcast */}
            <Center style={{ marginTop: '10px' }}>
              <BroadcastRouter
                trackClicks
                episodeNumber={episodeNumber}
                spotify={spotify}
                apple={apple}
                youtube={youtube}
              >
                Escúchalo en
              </BroadcastRouter>
            </Center>
            {/* Reproductor de YouTube si existe URL y el DOM está cargado */}
            {youtube && domLoaded && (
              <Center>
                <VideoContainer>
                  <Video>
                    <NoSSRPlayer
                      className="react-player"
                      light={
                        episodeSource === 'prismic'
                          ? youtubeImageUrl
                          : `/assets/img/podcast/youtube/${episodeNumber}.jpg`
                      }
                      url={embedYoutube}
                      controls={true}
                      width="100%"
                      height="100%"
                    />
                  </Video>
                </VideoContainer>
              </Center>
            )}
          </div>
        </Fade>

        {/* Previsualización del episodio con detalles */}
        <Fade triggerOnce>
          <EpisodePreview hideImageMobile {...episode} longFormat />
        </Fade>

        {/* Sección de Insights - Puntos clave del episodio */}
        <Fade triggerOnce>
          {spotify && insights && (
            <Content as={Insights}>
              <ContentType $insights>Insights</ContentType>
              <p>
                Si solo tienes un minuto, lo más importante que pueden aprender
                operadores, inversionistas y fundadores de {business} es lo
                siguiente:
              </p>
              {/* Renderiza insights de manera diferente según la fuente (Prismic o Markdown) */}
              {episodeSource === 'prismic' ? (
                <PrismicRichText field={insights as RichTextField} />
              ) : episodeSource === 'markdown' ? (
                <Transcript as={'div'}>
                  {
                    <ul>
                      {insights.map((insight, i) => (
                        <Li key={'insight' + i}>{insight}</Li>
                      ))}
                    </ul>
                  }
                </Transcript>
              ) : null}
            </Content>
          )}
        </Fade>

        {/* Sección de transcripción del episodio */}
        <Fade>
          {spotify && (
            <Content>
              {youtubeImageUrl ? (
                <>
                  {/* Contenido de Prismic renderizado con PrismicRichText */}
                  {content && Array.isArray(content) && content.length > 0 && (
                    <ContentType>Transcript</ContentType>
                  )}
                  <PrismicRichText field={content as RichTextField} />
                </>
              ) : (
                <>
                  {/* Contenido de Markdown renderizado como HTML */}
                  <ContentType>Transcript</ContentType>
                  <Transcript>{content}</Transcript>
                </>
              )}
            </Content>
          )}
        </Fade>

        {/* Sección para compartir el episodio */}
        <Fade triggerOnce>
          <CenteredDiv>
            {content && spotify && (
              <>
                <RouterSpace>
                  Si crees que a alguien le seria útil este contenido,
                  compártelo con esa persona.
                </RouterSpace>
                <ShareRouter
                  shareUrl={`https://acueducto.studio/podcast/${slug}`}
                />
              </>
            )}
          </CenteredDiv>
        </Fade>

        {/* Sección para mostrar el siguiente episodio */}
        <NextEp>
          <p>Escucha otro episodio</p>
          <EpisodePreview {...prevEpisode} simplest />
        </NextEp>
      </CenteredSection>
    </>
  );
};
