import React, { useState, useEffect } from "react";
import { H1, P, Li } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import { EpisodePreview } from "components/podcast/EpisodePreview/EpisodePreview";
import Logo from "public/assets/img/layout/logo.svg";
import EpisodeNumber from "components/podcast/EpisodeNumber";
import Link from "next/link";
import CenteredSection, {
  Content,
  Insights,
  Transcript,
} from "components/shared/CenteredSection";
import ShareRouter from "components/podcast/ShareRouter";
import dynamic from "next/dynamic"; 
import BackArrowIcon from "public/assets/img/layout/backarrow.svg";
import { PrismicRichText} from "@prismicio/react";
import BroadcastRouter from "components/podcast/BroadcastRouter";
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
} from "./PodcastEpisode.styles";
import { ImageFieldImage } from "@prismicio/client";

const NoSSRPlayer = dynamic(() => import("react-player/youtube"), {
  loading: () => <p>Cargando...</p>,
  ssr: false,
});

interface SingleEpisodePageProps {
  title: string;
  seo_h1?: string;
  date: string;
  guest: string;
  insights?: any;
  business: string;
  category: string;
  description: string;
  slug: string;
  spotify: string;
  apple: string;
  youtube?: string;
  episode: number;
  content: string | any; // Replace 'any' with a more specific type if possible
  next: any; // Replace 'any' with a more specific type if possible
  youtubeImage?: string;
  podcastImage: ImageFieldImage;
  findNextPrismic?: boolean;
}

export const PodcastEpisodePage: React.FC<SingleEpisodePageProps> = ({
  title,
  seo_h1,
  date,
  guest,
  insights,
  business,
  category,
  description,
  slug,
  spotify,
  apple,
  youtube,
  episode,
  content,
  next,
  youtubeImage,
  podcastImage,
  findNextPrismic,
}) => {
  const embedYoutube = youtube && youtube.replace("watch?v=", "embed/");
  const [domLoaded, setDomLoaded] = useState<boolean>(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <CenteredSection
        $customBackground={"/assets/img/layout/backOld.svg"}
        id="cuandoelriosuena"
      >
        <Fade triggerOnce>
          <IntroLogo>
            <Link href="/podcast" passHref legacyBehavior>
              <a>
                <THoverable>cuando el río suena</THoverable>
                <span>
                  por <Logo />
                </span>
              </a>
            </Link>
          </IntroLogo>
        </Fade>
        <Fade triggerOnce>
          <>
            <Link href={"/podcast/episodios"} passHref legacyBehavior>
              <AllEpisodesHoverable>
                <BackArrowIcon />
                <p>ver todos los episodios</p>
              </AllEpisodesHoverable>
            </Link>
            <EpisodeNumberStyled>
              <EpisodeNumber episode={episode} />
            </EpisodeNumberStyled>
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
            <Center style={{ marginTop: "10px" }}>
              <BroadcastRouter
                trackClicks
                episode={episode}
                spotify={spotify}
                apple={apple}
                youtube={youtube}
              >
                Escúchalo en
              </BroadcastRouter>
            </Center>
            {youtube && domLoaded && (
              <Center>
                <VideoContainer>
                  <Video>
                    <NoSSRPlayer
                      className="react-player"
                      light={
                        youtubeImage
                          ? youtubeImage
                          : `/assets/img/podcast/youtube/${episode}.jpg`
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
          </>
        </Fade>
        <Fade triggerOnce>
          <EpisodePreview
            hideImageMobile
            title={title}
            guest={guest}
            business={business}
            slug={slug}
            spotify={spotify}
            apple={apple}
            youtube={youtube}
            episode={episode}
            description={description}
            date={date}
            category={category}
            podcastImage={podcastImage}
            prismic={podcastImage ? true : false}
            longFormat
          />
        </Fade>
        <Fade triggerOnce>
          {spotify && insights && (
            <Content as={Insights}>
              <ContentType $insights>Insights</ContentType>
              <p>
                Si solo tienes un minuto, lo más importante que pueden aprender
                operadores, inversionistas y fundadores de {business} es lo
                siguiente:
              </p>
              {youtubeImage && insights?.length > 0 ? (
                <PrismicRichText field={insights.map((e) => e)} />
              ) : (
                <Transcript as={"div"}>
                  {insights && (
                    <ul>
                      {insights.map((insight, i) => (
                        <Li key={"insight" + i}>{insight}</Li>
                      ))}
                    </ul>
                  )}
                </Transcript>
              )}
            </Content>
          )}
        </Fade>
        <Fade>
          {spotify && (
            <Content>
              {youtubeImage ? (
                <>
                  {content && Array.isArray(content) && content.length > 0 && (
                    <ContentType>Transcript</ContentType>
                  )}
                  <PrismicRichText field={content} />
                </>
              ) : (
                <>
                  <ContentType>Transcript</ContentType>
                  <Transcript>{content}</Transcript>
                </>
              )}
            </Content>
          )}
        </Fade>
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
        <NextEp>
          <p>Escucha otro episodio</p>
          {!youtubeImage || !findNextPrismic ? (
            <EpisodePreview {...next} simplest />
          ) : (
            <EpisodePreview
              hideImageMobile
              title={next.data.introduction[0].title[0].text}
              guest={next.data.introduction[0].guest}
              business={next.data.introduction[0].business}
              slug={next.uid}
              spotify={next.data.introduction[0].spotify}
              apple={next.data.introduction[0].apple}
              youtube={next.data.introduction[0].youtube}
              podcastImage={next.data.images[0].episode}
              episode={next.data.introduction[0].episode}
              description={next.data.introduction[0].description[0].text}
              date={next.data.introduction[0].date}
              category={next.data.introduction[0].category}
              simplest
              prismic
            />
          )}
        </NextEp>
      </CenteredSection>
    </>
  );
};
