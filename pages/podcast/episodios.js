import styled from "styled-components";
import React, { useEffect } from "react";
import EpisodePreview from "components/podcast/EpisodePreview";
import BroadcastRouter from "components/podcast/BroadcastRouter";
import ssrLocale from "utils/ssrLocale";
import { getAllEpisodes, getEpisodeBySlug } from "utils/podcastApi";
import Head from "components/layout/Head";
import PageWrapper from "components/layout/PageWrapper";
import ResourceFooter from "components/shared/footers/ResourceFooter";
import Logo from "public/assets/img/layout/logo.svg";
import { H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import { createClient } from "../../prismicio";

function Podcasts({ locale, setTitle, episodes, pt, prismicEpisodes }) {
  const { intro, head } = pt;

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale]);

  const categories = [
    "founder",
    "producto",
    "inversor",
    "growth",
    "desarrollo",
    "todas",
  ];

  const sort = (category) => {
    let allCats = document.querySelectorAll(`.out`);
    for (let epis of allCats) {
      epis.style.backgroundColor = "#0D1111";
    }
    let selected = document.getElementById(`${category}out`);
    selected.style.backgroundColor = "#1A4CE0";

    let allEpisodes = document.querySelectorAll(`.npd`);
    for (let epis of allEpisodes) {
      epis.style.display = "flex";
    }

    if (category != "todas") {
      let allNotEpisodes = document.querySelectorAll(`.npd:not(.${category})`);
      for (let epis of allNotEpisodes) {
        epis.style.display = "none";
      }
    }
  };

  return (
    <PageWrapper>
      <Head
        {...head}
        image={{ fileName: "og_image_podcast.png", alt: head.image_alt }}
        es_canonical={`https://acueducto.studio/podcast/episodios`}
        noIndex
      ></Head>
      <PodcastGrid>
        <div>
          <Fade triggerOnce>
            <H1>{intro.title}</H1>
            <span className="blue">
              por <Logo />
            </span>
            <p>{intro.p}</p>
          </Fade>
          <BroadcastRouter
            spotify="https://open.spotify.com/show/2YLB7SOeJsLp5DtDuIwX8t"
            google="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84OTU5NzIucnNz"
            youtube="https://www.youtube.com/playlist?list=PLX3VC_2vq4TTRsyLoyWOHutWND0hQt9lD"
            apple="https://podcasts.apple.com/mx/podcast/cuando-el-r%C3%ADo-suena/id1500473556?i=1000466665137"
          >
            Escúchalo en
          </BroadcastRouter>
          <Fade>
            <CatFilter>
              <p>¿Buscas una categoría en especial?</p>
              <CatList>
                {categories.map((cat, i) => (
                  <Category
                    key={"cat" + i}
                    id={cat + "out"}
                    className="out"
                    onClick={(e) => sort(cat)}
                  >
                    {cat}
                  </Category>
                ))}
              </CatList>
            </CatFilter>
          </Fade>
          <PodcastList>
            {episodes.map((episode, index) => (
              <EpisodePreview {...episode} key={"npd" + index} />
            ))}
            {prismicEpisodes.map((prismicEpisode, index) => (
              <EpisodePreview
                title={prismicEpisode.data.introduction[0].title[0].text}
                guest={prismicEpisode.data.introduction[0].guest}
                business={prismicEpisode.data.introduction[0].business}
                slug={prismicEpisode.uid}
                spotify={prismicEpisode.data.introduction[0].spotify}
                apple={prismicEpisode.data.introduction[0].apple}
                google={prismicEpisode.data.introduction[0].google}
                youtube={prismicEpisode.data.introduction[0].youtube}
                podcastImage={prismicEpisode.data.images[0].episode}
                episode={prismicEpisode.data.introduction[0].episode}
                description={
                  prismicEpisode.data.introduction[0].description[0].text
                }
                date={prismicEpisode.data.introduction[0].date}
                category={prismicEpisode.data.introduction[0].category}
                key={"npd" + index}
                prismic
              />
            ))}
          </PodcastList>
        </div>
      </PodcastGrid>
      <ResourceFooter
        shadow
        identify="podcast"
        podcastEpisodes={Object.keys(episodes).length}
      />
    </PageWrapper>
  );
}

export default React.memo(Podcasts);

export const getStaticProps = async (context, previewData) => {
  const sortedEpisodes = getAllEpisodes(["slug", "episode"]).sort((ep1, ep2) =>
    ep1.episode > ep2.episode ? 1 : -1
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
  );
  const pt = ssrLocale({ locale: context.locale, fileName: "archivo.json" });
  if (!pt) {
    return {
      notFound: true,
    };
  }

  //CMS Prismic
  const client = createClient({ previewData });
  const prismicEpisodes = await client.getAllByType("episode");
  const orderedPrismicEpisodes = prismicEpisodes.sort(
    (ep, nextEp) =>
      ep.data.introduction[0].episode - nextEp.data.introduction[0].episode
  );

  return {
    props: {
      episodes: [...episodes],
      pt,

      prismicEpisodes: [...orderedPrismicEpisodes],
    },
  };
};

const CatFilter = styled.div`
  margin-top: 10px;
`;

const CatList = styled.div`
  display: block;
  margin-top: 10px;
  width: 100%;
  & > :last-child {
    border-color: ${(p) => p.theme.colors.foreground_low};
  }
`;

const Category = styled.div`
  border: 2px solid ${(p) => p.theme.colors.accent};
  border-radius: 50px;
  padding: 4px 13px 8px 14px;
  color: ${(p) => p.theme.colors.foreground_low};
  font-size: 1.5rem;
  background-color: ${(p) => p.theme.colors.background};
  cursor: pointer;
  transition: 0.3s ease;
  display: inline-block;
  margin: 0 1rem 1rem 0;
  text-transform: capitalize;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(0.97);
    }
  }
  &:focus,
  &:active {
    transform: scale(0.97);
    border-color: ${(p) => p.theme.colors.foreground_low};
  }
  @media (max-width: 620px) {
    font-size: 1.3rem;
  }
`;

const PodcastGrid = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  background-image: url("/assets/img/layout/back.svg");
  background-size: cover;
  background-position: top right;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  display: grid;
  padding: 10% 2%;
  position: relative;
  margin-bottom: -1px;
  & > div {
    grid-column: 2 / span 10;
  }
  h1 {
    letter-spacing: 0;
    line-height: 100%;
    font-size: 7rem;
    margin-bottom: 3px;
    max-width: 810px;
    color: ${(props) => props.theme.colors.foreground};
  }
  span {
    &.blue {
      color: ${(props) => props.theme.colors.accent};
    }
    svg {
      max-width: 110px;
      * {
        fill: ${(props) => props.theme.colors.accent};
      }
    }
  }
  p {
    padding-top: 1.5rem;
    color: ${(props) => props.theme.colors.foreground_low};
    position: relative;
    max-width: 600px;
  }
  @media (max-width: 1250px) {
    h1 {
      font-size: 6rem;
    }
  }
  @media (max-width: 950px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 15%;
    & > div {
      grid-column: 1 / span 12;
    }
    p {
      padding-top: 10px;
    }
    h1 {
      line-height: 0.9;
      padding-top: 5%;
      padding-bottom: 3%;
      grid-column-end: 12;
    }
  }
`;

const PodcastList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 5%;
  max-width: 800px;
`;
