import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { P, H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import Logo from "public/assets/img/layout/logo.svg";
import EpisodeNumber from "./EpisodeNumber";
import Link from "next/link";
import BorderLink from "components/shared/BorderedLink";
import CenteredSection, {
  Content,
  Insights,
} from "components/shared/CenteredSection";
import ShareRouter from "./ShareRouter";
import YouTubePlayer from "react-player/youtube";
import { PrismicRichText } from "@prismicio/react";
import EpisodePreview from "./EpisodePreview";
import BackArrowIcon from "public/assets/img/layout/backarrow.svg";

const PrismicEpisodePage = ({
  uid,
  data,
  nextEpisodePrismic,
  findNextPrismic,
}) => {
  const episode = data.introduction[0].episode;
  const category = data.introduction[0].category;
  const title = data.introduction[0].title[0].text;
  const guest = data.introduction[0].guest;
  const business = data.introduction[0].business;
  const date = data.introduction[0].date;
  const description = data.introduction[0].description[0].text;
  const spotify = data.introduction[0].spotify;
  const apple = data.introduction[0].apple;
  const google = data.introduction[0].google;
  const youtube = data.introduction[0].youtube;
  const youtubeImage = data.images[0].youtube.url;
  const podcastImage = data.images[0].episode;
  const insights = data.introduction[0].insights;
  const content = data.body;

  //esta función es para poder alterar la propiedad seo_h1 de los capítulos de prismic
  //habrá que integrarla con los .md que tienen otro funcionamiento.
  //solo es para esos 3 capítulos
  //PD se que es horrible se te ocurre otra cosa?
  const seo_h1 = () => {
    let seo;
    if (uid == "no-vivas-de-tus-usuarios-construye-tu-futuro-junto-con-ellos") {
      seo = undefined;
    } else if (uid == "como-se-ve-la-educacion-online") {
      seo = "Nahuel Lema y Coderhouse ¿Qué es, de dónde es y es bueno?";
    } else if (uid == "como-captar-3m-de-usuarios") {
      seo = undefined;
    } else {
      seo = undefined;
    }
    return seo;
  };

  const embedYoutube = youtube && youtube.replace("watch?v=", "embed/");

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    console.log(seo_h1());
  }, []);

  return (
    <>
      <CenteredSection
        customBackground={"/assets/img/layout/backOld.svg"}
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
            {
              //Te acabo de introducir una complejidad, ver la función seo_h1 arriba
              seo_h1() ? (
                <>
                  <h1 className="seo_h1">{seo_h1()}</h1>
                  <P className="h1">
                    {title.charAt(0).toLowerCase() + title.slice(1)}
                  </P>
                </>
              ) : (
                <H1>{title.charAt(0).toLowerCase() + title.slice(1)}</H1>
              )
            }
            {youtube && domLoaded && (
              <Center>
                <VideoContainer>
                  <Video>
                    <YouTubePlayer
                      className="react-player"
                      light={youtubeImage}
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
            slug={uid}
            spotify={spotify}
            apple={apple}
            google={google}
            youtube={youtube}
            podcastImage={podcastImage}
            episode={episode}
            description={description}
            date={date}
            category={category}
            longFormat
            prismic
          />
        </Fade>
        {spotify && insights.length > 0 && (
          <Fade triggerOnce>
            <Content as={Insights}>
              <ContentType insights>Insights</ContentType>
              <p>
                Si solo tienes un minuto, lo más importante que pueden aprender
                operadores, inversionistas y fundadores de {business} es lo
                siguiente:
              </p>
              <PrismicRichText field={insights.map((e) => e)} />
            </Content>
          </Fade>
        )}
        <Fade>
          {spotify && (
            <Content>
              {content && content.lenght && (
                <ContentType>Transcript</ContentType>
              )}
              <PrismicRichText field={content} />
            </Content>
          )}
        </Fade>
        <Fade triggerOnce>
          <CenteredDiv>
            {content && spotify && (
              <>
                <RouterSpace>
                  Si crees que a alguien le sería útil este contenido,
                  compártelo con esa persona.
                </RouterSpace>
                <ShareRouter
                  shareUrl={`https://acueducto.studio/podcast/${uid}`}
                />
              </>
            )}
          </CenteredDiv>
        </Fade>
        <NextEp>
          <p>Escucha otro episodio</p>
          {findNextPrismic ? (
            <EpisodePreview
              hideImageMobile
              title={nextEpisodePrismic.data.introduction[0].title[0].text}
              guest={nextEpisodePrismic.data.introduction[0].guest}
              business={nextEpisodePrismic.data.introduction[0].business}
              slug={nextEpisodePrismic.uid}
              spotify={nextEpisodePrismic.data.introduction[0].spotify}
              apple={nextEpisodePrismic.data.introduction[0].apple}
              google={nextEpisodePrismic.data.introduction[0].google}
              youtube={nextEpisodePrismic.data.introduction[0].youtube}
              podcastImage={nextEpisodePrismic.data.images[0].episode}
              episode={nextEpisodePrismic.data.introduction[0].episode}
              description={
                nextEpisodePrismic.data.introduction[0].description[0].text
              }
              date={nextEpisodePrismic.data.introduction[0].date}
              category={nextEpisodePrismic.data.introduction[0].category}
              simplest
              prismic
            />
          ) : (
            <EpisodePreview {...nextEpisodePrismic} simplest />
          )}
        </NextEp>
      </CenteredSection>
    </>
  );
};

export default React.memo(PrismicEpisodePage);

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const VideoContainer = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  margin-top: 8%;
  @media (max-width: 620px) {
    margin-top: 10%;
  }
`;

const Video = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 30px;
  overflow: hidden;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const NextEp = styled.div`
  margin-top: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.foreground_low};
  p {
    text-align: center;
  }
  @media (max-width: 620px) {
    margin-top: 20%;
  }
`;

const THoverable = styled.b`
  font-weight: 300;
  ${BorderLink({ showLink: false })}
`;

const AllEpisodesHoverable = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 6%;
  font-weight: 100;
  cursor: pointer;
  text-decoration: none;

  p {
    ${BorderLink({ showLink: true })}
  }
  background: none;
`;

const CenteredDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ContentType = styled.span`
  font-weight: 300;
  font-weight: ${(p) => (p.insights ? 600 : 300)};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 6px;
  color: ${(p) => (p.insights ? "#4DA465" : p.theme.colors.background)};
  margin-bottom: 2rem;
  font-size: 1.5rem;
  width: 100%;
  display: block;
  transform: translateY(-100%);
  @media (max-width: 900px) {
    margin-top: 10px;
  }
  @media (max-width: 650px) {
    margin-top: 30px;
    margin-bottom: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 1.3rem;
    margin-top: 40px;
  }
`;

const RouterSpace = styled.div`
  padding-top: 20%;
  margin-top: 20px;
  text-align: center;
  max-width: 450px;
  color: ${(props) => props.theme.colors.foreground_low};
  @media (max-width: 800px) {
    max-width: 400px;
    padding-top: 10%;
  }
  @media (max-width: 500px) {
    padding-top: 6%;
  }
`;

const EpisodeNumberStyled = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    transform: scale(0.9);
  }
  @media (max-width: 800px) {
    transform: scale(0.8);
    margin-top: 10px;
  }
  @media (max-width: 650px) {
    margin-top: 0px;
  }
`;

const IntroLogo = styled.p`
  line-height: 100%;
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 3px;
  color: ${(props) => props.theme.colors.foreground};
  text-align: center;
  margin-bottom: 5%;
  text-decoration: none;
  padding-top: 120px;
  a {
    text-decoration: none;
  }
  span {
    display: block;
    font-size: 2rem;
    font-weight: 100;
    color: ${(props) => props.theme.colors.accent};
    svg {
      max-width: 110px;
      * {
        fill: ${(props) => props.theme.colors.accent};
      }
    }
  }
  @media (max-width: 1300px) {
    padding-top: 50px;
  }
  @media (max-width: 1250px) {
    font-size: 3rem;
  }
  @media (max-width: 950px) {
    font-size: 2.5rem;
    span {
      margin-top: 5px;
      font-size: 1.5rem;
      svg {
        max-width: 90px;
      }
    }
  }
  @media (max-width: 800px) {
    font-size: 2rem;
    padding-top: 35px;
    span {
      margin-top: 0px;
      font-size: 1.3rem;
      svg {
        max-width: 70px;
      }
    }
  }
`;
