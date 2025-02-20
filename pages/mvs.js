import React, { useEffect } from "react";
import ssrLocale from "utils/ssrLocale";
import styled from "styled-components";
import { getEpisodeBySlug } from "utils/podcastApi";
import Head from "components/layout/Head";
import { EpisodePreview } from "components/podcast/EpisodePreview/EpisodePreview";
import PageWrapper from "components/layout/PageWrapper";
import ResourceFooter from "components/layout/footers/ResourceFooter";
import { Fade } from "react-awesome-reveal";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";
import { P, H3 } from "components/shared/Dangerously";
import GatedPopup from "components/GatedPopup";

function Mvs({ locale, setTitle, pt, episodes }) {
  let { head, intro, lessons, gate_component } = pt;
  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale]);

  return (
    <PageWrapper>
      <Head
        {...head}
        es_canonical="https://acueducto.studio/mvs"
        noIndex
      />
      <PinnedSection disableFade title={intro.title} heading={1}>
        <>
          <Fade>
            <P>{intro.p}</P>
          </Fade>
          <FitSection>
            {lessons.map((lesson, index) => (
              <React.Fragment key={"nps" + index}>
                <Fade triggerOnce>
                  <H3>{lesson.title}</H3>
                </Fade>
                <Fade triggerOnce>
                  <P>{lesson.p}</P>
                </Fade>
                <ColumnedPreview>
                  <EpisodePreview
                    simplest
                    {...episodes[index]}
                    text="escuchar episodio"
                  />
                </ColumnedPreview>
                {index == 0 && <GatedPopup content={gate_component} />}
              </React.Fragment>
            ))}
          </FitSection>
        </>
      </PinnedSection>
      <ResourceFooter identify="mvs" />
    </PageWrapper>
  );
}

export default Mvs;

export const getStaticProps = async (context) => {
  const selectedEpisodes = [
    {
      slug: "como-es-invertir-en-mas-de-200-empresas-tecnologicas",
    },
    {
      slug: "el-fondo-de-inversion-detras-de-clip-el-tercer-unicornio-mexicano",
    },
    {
      slug: "de-mercado-libre-a-la-mesa-de-inversion-con-retornos-inimaginables",
    },
    {
      slug: "escala-tu-tecnologia-consolidando-bases-firmes-en-software-y-cultura",
    },
    {
      slug: "cual-es-el-trabajo-de-una-directora-de-operaciones-en-una-startup",
    },
  ];
  const episodes = selectedEpisodes.map((episode) =>
    getEpisodeBySlug(episode.slug, [
      "title",
      "guest",
      "business",
      "description",
      "category",
      "episode",
      "slug",
    ])
  );
  const pt = ssrLocale({
    locale: context.locale,
    fileName: "mvs.json",
  });
  if (!pt) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      episodes: [...episodes],
      pt,
    },
  };
};

const ColumnedPreview = styled.div`
  margin-bottom: 13%;
  article {
    justify-content: flex-start;
    margin-bottom: 10%;
    h3 {
      font-size: 2.2rem;
      line-height: 100%;
      margin-bottom: 5px;
      span {
        font-size: 1.2rem;
      }
    }
  }
`;

const FitSection = styled.div`
  margin-top: 4%;
  h3 {
    font-size: 3.2rem;
    line-height: 130%;
    font-weight: 100;
    margin: 0 0 15px;
  }

  p {
    margin-bottom: 5px;
  }
  @media (max-width: 1250px) {
    h3 {
      font-size: 2.9rem;
    }
  }
  @media (max-width: 1000px) {
    h3 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 2.2rem;
    }
  }
`;
