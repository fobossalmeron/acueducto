import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import EpisodeFeature from "components/podcast/EpisodeFeature";
import ssrLocale from "utils/ssrLocale";
import { getEpisodeBySlug } from "utils/podcastApi";
import Head from "components/layout/Head";
import PageWrapper from "components/layout/PageWrapper";
import ContactFooter from "components/shared/footers/ContactFooter";
import { H1, H2, P } from "components/shared/Dangerously";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";
import { Fade } from "react-awesome-reveal";
import TitleSectionGrid from "components/shared/TitleSectionGrid";
import TitleSection from "components/shared/TitleSection";
import MetalForm from "components/shared/MetalForm";
import ButtonArrow from "components/shared/footers/ButtonArrow";
import Tilt from "react-parallax-tilt";
import { createContact } from "utils/sendinBlue";
import ReactPixel from "react-facebook-pixel";
import { advancedMatching } from "utils/analytics";
import { createClient } from "../prismicio";
import pHosts from "../public/assets/img/layout/hosts.jpg";
import Image from "next/image";

function PodcastLanding({
  locale,
  setTitle,
  lastPrismicEpisode,
  featuredEpisodes,
  pt,
}) {
  const { intro, head, banner, favorites, hosts, closing } = pt;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setTitle(head.headerTitle);
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true);
    }
    // episode100();
  }, [locale]);

  const activateSubscribePixels = (data) => {
    ReactPixel.init("506854653278097", advancedMatching(data.email));
    // Suscripción a la newsletter
    ReactPixel.track("Subscribe", { email: data.email });
  };

  const onSubmitHeader = (data) => {
    createContact({
      email: data.email,
      listIds: [2],
      updateEnabled: true,
      attributes: {
        SUBSCRIBED_FROM: "Landing Header",
      },
    });
    activateSubscribePixels(data);
  };

  const onSubmitFooter = (data) => {
    createContact({
      email: data.email,
      listIds: [2],
      updateEnabled: true,
      attributes: {
        SUBSCRIBED_FROM: "Landing Footer",
      },
    });
    activateSubscribePixels(data);
  };

  // function episode100() {
  //   confetti({
  //     particleCount: 500,
  //     spread: 75,
  //     origin: { y: 0.6 },
  //   });
  // }

  return (
    <PageWrapper>
      <Head
        {...head}
        image={{ fileName: "og_image_podcast.png", alt: head.image_alt }}
        es_canonical={`https://acueducto.studio/podcast`}
      ></Head>
      <PodcastGrid>
        <Fade triggerOnce>
          <div>
            <H1>{intro.subtitle}</H1>
            <H2 className="h1">{intro.title}</H2>
            <p>{intro.p}</p>
            <MetalForm
              onSubmit={onSubmitHeader}
              id={"podcastOL"}
              text={intro.form}
            />
          </div>
          <Parallax>
            <Tilt
              trackOnWindow={true}
              transitionSpeed={2500}
              className="parallax-effect-img"
            >
              <Image
                className="inner-element"
                width={438}
                height={438}
                src={"/assets/img/layout/logos.png"}
                alt={"Cuando el río suena"}
              />
            </Tilt>
          </Parallax>
        </Fade>
      </PodcastGrid>
      <FullSection>
        <div>
          <Fade triggerOnce>
            <h2>{banner.title}</h2>
            <p>{banner.p}</p>
            <div>
              <Link
                href={"/podcast/" + lastPrismicEpisode.uid}
                passHref
                legacyBehavior
              >
                <ButtonArrow text={banner.button} />
              </Link>
            </div>
          </Fade>
        </div>
        <Limiter>
          <p className="lastEpisodeText">Último episodio</p>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} tiltEnable={!isMobile}>
            <EpisodeFeature
              title={lastPrismicEpisode.data.introduction[0].title[0].text}
              guest={lastPrismicEpisode.data.introduction[0].guest}
              business={lastPrismicEpisode.data.introduction[0].business}
              slug={lastPrismicEpisode.uid}
              episode={lastPrismicEpisode.data.introduction[0].episode}
              image={lastPrismicEpisode.data.images[0].solas}
              blue
            />
          </Tilt>
        </Limiter>
      </FullSection>
      <EpisodesSection>
        <TitleSection title={favorites.title} heading={2} />
        <FeatureList>
          <div>
            {featuredEpisodes.map((episode, index) => (
              <div key={"npd" + index}>
                <Fade triggerOnce>
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    tiltEnable={!isMobile}
                  >
                    {episode.data ? (
                      <EpisodeFeature
                        title={episode.data.introduction[0].title[0].text}
                        guest={episode.data.introduction[0].guest}
                        business={episode.data.introduction[0].business}
                        slug={episode.uid}
                        episode={episode.data.introduction[0].episode}
                        image={episode.data.images[0].solas}
                        logos={episode.logos}
                        portrait
                      />
                    ) : (
                      <EpisodeFeature {...episode} portrait />
                    )}
                  </Tilt>
                </Fade>
              </div>
            ))}
          </div>
        </FeatureList>
        <Fade triggerOnce>
          <Link href={"/podcast/episodios"} passHref legacyBehavior>
            <ButtonArrow text={favorites.button} inverse={true} />
          </Link>
        </Fade>
      </EpisodesSection>
      <HostsSection>
        <PinnedSection title={hosts.title} notSticky heading={2}>
          <P>{hosts.p}</P>
        </PinnedSection>
        <TitleSectionGrid style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Fade triggerOnce>
            <Image
              src={pHosts}
              alt="Rodrigo Salmerón y Artemio Pedraza"
              placeholder="blur"
              width={1080}
              height={720}
            />
          </Fade>
        </TitleSectionGrid>
      </HostsSection>
      <FullLastSection>
        <Fade triggerOnce>
          <h4>
            <span>{closing.label} </span>
            {closing.title}
          </h4>
          <p>{closing.p}</p>
          <div>
            <MetalForm
              onSubmit={onSubmitFooter}
              id={"podcastOL"}
              text={intro.form}
            />
          </div>
        </Fade>
      </FullLastSection>
      <ContactFooter />
    </PageWrapper>
  );
}

export default React.memo(PodcastLanding);

export const getStaticProps = async (context, previewData) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "podcast.json" });
  if (!pt) {
    return {
      notFound: true,
    };
  }

  //Get last episode from Prismic
  const prismicClient = createClient({ previewData });
  const unsortedPrismicEpisodes = await prismicClient.getAllByType("episode");
  const sortedPrismicEpisodes = unsortedPrismicEpisodes.sort(
    (ep, nextEp) =>
      ep.data.introduction[0].episode - nextEp.data.introduction[0].episode
  );

  const lastPrismicEpisode =
    sortedPrismicEpisodes[sortedPrismicEpisodes.length - 1];

  //Featured episodes
  const Kazah = getEpisodeBySlug(
    "de-mercado-libre-a-la-mesa-de-inversion-con-retornos-inimaginables",
    ["title", "guest", "business", "episode", "slug"]
  );
  Kazah.logos = ["kazsek", "mercadolibre"];

  const Migliore = await prismicClient.getByUID(
    "episode",
    "asi-se-ve-un-equipo-de-alto-rendimiento"
  );
  Migliore.logos = ["moova"];

  const Enei = getEpisodeBySlug(
    "como-encontrar-negocios-de-alto-impacto-antes-que-nadie",
    ["title", "guest", "business", "episode", "slug"]
  );
  Enei.logos = ["platanus"];

  const Aldana = await prismicClient.getByUID(
    "episode",
    "como-es-un-product-manager-de-uber-rappi-y-mercado"
  );
  Aldana.logos = ["rappi", "uber", "mercadopago"];

  const Mastronardi = await prismicClient.getByUID(
    "episode",
    "asi-son-los-mejores-ctos"
  );
  Mastronardi.logos = ["habi"];

  const Zavala = getEpisodeBySlug(
    "que-es-lo-que-hacen-por-las-startups-los-mejores-inversionistas",
    ["title", "guest", "business", "episode", "slug"]
  );
  Zavala.logos = ["500"];

  const featuredEpisodes = [Kazah, Migliore, Enei, Aldana, Mastronardi, Zavala];

  return {
    props: {
      featuredEpisodes: [...featuredEpisodes],
      pt,
      lastPrismicEpisode: lastPrismicEpisode,
    },
  };
};

const Parallax = styled.div`
  .parallax-effect-img {
    transform-style: preserve-3d;
    background-image: url("/assets/img/layout/podcast_cover_sq.png");
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    .inner-element {
      transform: translateZ(70px);
      width:100%;
      height:100%;
    }
  }
  @media (max-width: 1200px) {
    .inner-element {
      transform: translateZ(50px);
    }
  }
  @media (max-width: 800px) {
    .inner-element {
      transform: translateZ(40px);
    }
  }
  @media (max-width: 600px) {
    .inner-element {
      transform: translateZ(10px);
    }
  }
`;

const Limiter = styled.div`
  max-width: 350px;
  p {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
    font-weight: 500;
  }
`;

const HostsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8%;
  & > :first-child {
    padding-top: 4%;
    padding-bottom: 4%;
  }
  img {
    grid-column: 2 / span 10;
    border-radius: 40px;
    max-width: 100%;
    height: auto;
  }
  @media (min-width: 1250px) {
    p:first-of-type {
      margin-top: 2.5rem;
    }
  }
  @media (max-width: 800px) {
    img {
      grid-column: 3 / span 8;
    }
  }
  @media (max-width: 600px) {
    img {
      grid-column: 1 / span 12;
    }
  }
`;

const EpisodesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :first-child {
    padding-bottom: 4%;
  }
  & > :last-child {
    align-self: center;
    margin-bottom: 8%;
    margin-top: 2%;
  }
`;

const FullSection = styled.section`
  background-color: ${(p) => p.theme.colors.accent};
  padding: 8% 4% 8% 12%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  & > div:first-of-type {
    padding-left: 10%;
  }
  & > div > div:last-of-type {
    margin-top: 5%;
  }
  h2 {
    font-weight: 400;
    font-size: 4.5rem;
    line-height: 118%;
    margin-bottom: 24px;
    max-width: 650px;
  }
  p {
    color: ${(p) => p.theme.colors.foreground_low};
    max-width: 610px;
  }
  @media (max-width: 1400px) {
    h2 {
      font-size: 4rem;
    }
  }
  @media (max-width: 1250px) {
    h2 {
      font-size: 3.8rem;
      max-width: 500px;
    }
  }
  @media (max-width: 1100px) {
    padding: 8% 4%;
    flex-direction: column;
    text-align: center;
    align-items: center;
    .lastEpisodeText {
      display: none;
    }
    & > div:first-of-type {
      padding-left: 0;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    & > div > div:last-of-type {
      margin-top: 28px;
      margin-bottom: 5%;
    }
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 3.4rem;
      margin-bottom: 18px;
    }
  }
  @media (max-width: 600px) {
    padding: 10% 4%;
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 450px) {
    h2 {
      font-size: 2.6rem;
    }
  }
`;

const FullLastSection = styled.section`
  text-align: center;
  padding: 0 4% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    max-width: 1100px;
    font-weight: 400;
    font-size: 6.5rem;
    line-height: 110%;
    margin-bottom: 28px;
    margin-top: 0px;
    max-width: 850px;
    color: ${(p) => p.theme.colors.accent};
    & > span {
      text-transform: uppercase;
      font-size: 1.4rem;
      letter-spacing: 4px;
      color: ${(p) => p.theme.colors.foreground_low};
      display: block;
      text-align: center;
      line-height: 30px;
    }
  }
  & > p {
    color: ${(p) => p.theme.colors.foreground_low};
    max-width: 610px;
  }
  & > div {
    min-width: 455px;
  }
  @media (max-width: 960px) {
    h4 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    text-align: left;
    align-items: flex-start;
    padding: 0 20% 14%;
    & > div {
      min-width: unset;
    }
    p {
      width: 100%;
    }
    h4 {
      font-size: 4rem;
      max-width: unset;
      span {
        text-align: left;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 0 4% 14%;
    form {
      margin-top: 10%;
    }
    h4 {
      font-size: 3.4rem;
      margin-bottom: 16px;
    }
  }
`;

const PodcastGrid = styled(TitleSectionGrid)`
  background-color: ${(p) => p.theme.colors.background};
  background-repeat: no-repeat;
  background-image: url("/assets/img/layout/backOld.svg");
  background-size: cover;
  background-position: 100% -10%;
  background-attachment: fixed;
  width: 100%;
  padding: 10% 4%;
  position: relative;
  margin-bottom: -1px;
  align-items: center;
  min-height: 85vh;
  & > div:nth-of-type(2) {
    grid-column: 8 / span 4;
    padding-left: 5%;
  }
  & > div:nth-of-type(1) {
    grid-column: 2 / span 6;
  }
  h1:not(.h1) {
    display: block;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-weight: 200;
    max-width: 490px;
    font-weight: 500;
    span {
      color: ${(props) => props.theme.colors.foreground_lower};
    }
  }
  .h1 {
    color: ${(props) => props.theme.colors.foreground};
    max-width: 650px;
    i {
      color: ${(props) => props.theme.colors.accent};
      font-style: italic;
      font-weight: 600;
      text-shadow: 1px 1px 20px rgba(13, 17, 17, 0.2);
    }
  }
  h2 {
    letter-spacing: 0;
    line-height: 105%;
    font-size: 7rem;
    margin-bottom: 3px;
    max-width: 810px;
    color: ${(props) => props.theme.colors.foreground};
  }
  p {
    padding-top: 1.5rem;
    color: ${(props) => props.theme.colors.foreground_low};
    position: relative;
    max-width: 510px;
  }
  /*      height      */
  @media (max-height: 800px), (max-width: 1100px) {
    min-height: unset;
  }

  /*      width      */
  @media (max-width: 1480px) {
    h2 {
      font-size: 6rem;
    }
  }
  @media (max-width: 1280px) {
    h2 {
      font-size: 5rem;
    }
  }
  @media (max-width: 1100px) {
    & > div:nth-of-type(1) {
      grid-column: 2 / span 12;
      padding-left: 0;
      form {
        margin-top: 4%;
      }
    }
    & > div:nth-of-type(2) {
      grid-column: 2 / span 12;
      padding: 5% 5% 5% 1%;
      display: flex;
      & > div {
        width: 100%;
        max-width: 400px;
      }
    }
  }
  @media (max-width: 800px) {
    padding-top: 15%;
    & > div:nth-of-type(2),
    & > div:nth-of-type(1) {
      grid-column: 3 / span 8;
    }
    h2 {
      margin-bottom: 5%;
      font-size: 4rem;
      font-weight: 200;
      line-height: 110%;
    }
    & > div:nth-of-type(2) {
      justify-content: center;
      padding-top: 10%;
      & > div {
        max-width: 300px;
      }
    }
  }
  @media (max-width: 600px) {
    background-position: right center;
    background-attachment: scroll;
    & > div {
      grid-column: 1 / span 12;
    }
    & > div:nth-of-type(2),
    & > div:nth-of-type(1) {
      grid-column: 1 / span 12;
    }
    & > div:nth-of-type(2) > div {
      max-width: 250px;
    }
    p {
      padding-top: 10px;
    }
    h2 {
      font-size: 3.4rem;
      line-height: 110%;
    }
    h1:not(.h1){
      max-width: 195px;
    }
  }
`;

const FeatureList = styled(TitleSectionGrid)`
  padding-top: 0;
  padding-bottom: 2%;
  & > div {
    grid-column: 2 span 9;
    display: flex;
    gap: ${(props) => (props.narrow ? "1rem" : "3.5rem")};
    flex-wrap: wrap;
    justify-content: space-between;
  }
  article {
    width: ${(props) =>
      props.narrow ? "calc(33% - 1rem)" : "calc(33% - 2.5rem)"};
  }
  & > div > div {
    width: ${(props) =>
      props.narrow ? "calc(33% - 1rem)" : "calc(33% - 2.5rem)"};
  }
  @media (max-width: 1360px) {
    & > div {
      gap: ${(props) => (props.narrow ? "1rem" : "4rem")};
      & > div,
      article {
        width: ${(props) =>
          props.narrow ? "calc(50% - 1rem)" : "calc(50% - 2rem)"};
        a {
          max-width: unset;
        }
      }
    }
  }
  @media (max-width: 950px) {
    margin: 20px 0;
    & > div {
      gap: 2rem;
      & > div,
      article {
        width: 100%;
      }
    }
  }
`;
