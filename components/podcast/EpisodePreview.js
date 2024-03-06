import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { P } from "components/shared/Dangerously";
import Picture from "components/caseStudy/shared/Picture";
import BroadcastRouter from "./BroadcastRouter";
import EpisodeNumber from "./EpisodeNumber";
import ShareRouter from "./ShareRouter";
import BorderLink from "components/shared/BorderedLink";
import ButtonArrow from "components/shared/footers/ButtonArrow";
import { PrismicNextImage } from "@prismicio/next";

const EpisodePreview = ({
  title,
  guest,
  business,
  description,
  category,
  slug,
  date,
  spotify,
  apple,
  google,
  youtube,
  episode,
  longFormat,
  simplest,
  text,
  hideImageMobile,
  podcastImage,
  prismic,
}) => {
  const LinkComplex = ({ children }) => (
    <Link href={"/podcast/" + slug} passHref legacyBehavior>
      <a className="clean">{children}</a>
    </Link>
  );
  let fullDate = new Date(`${date}T00:00:00`);
  let shortDate = fullDate.toLocaleDateString("es-MX");
  let formatDate = fullDate.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <NewPod
        key={"npd" + episode}
        simplest={simplest}
        className={`${
          category == "Growth/marketing"
            ? "growth-marketing"
            : category
              ? category.toLowerCase()
              : ""
        } npd`}
      >
        <PictureContainer
          hoverable={!longFormat}
          hideImageMobile={hideImageMobile}
        >
          {prismic &&
            (longFormat ? (
              <PrismicNextImage
                field={podcastImage}
                width="180"
                height="180"
                alt={`${business} - ${guest}`}
              />
            ) : (
              <LinkComplex>
                <PrismicNextImage
                  field={podcastImage}
                  height={simplest ? "185" : "180"}
                  width={simplest ? "185" : "180"}
                  alt={`${business} - ${guest}`}
                />
              </LinkComplex>
            ))}
          {!prismic &&
            (longFormat ? (
              <Picture
                src={`/assets/img/podcast/${episode}.jpg`}
                alt={`${business} - ${guest}`}
                height={180}
                width={180}
              />
            ) : (
              <LinkComplex>
                <Picture
                  src={`/assets/img/podcast/${episode}.jpg`}
                  alt={`${business} - ${guest}`}
                  height={simplest ? 185 : 180}
                  width={simplest ? 185 : 180}
                />
              </LinkComplex>
            ))}
        </PictureContainer>
        <div>
          <Fade triggerOnce>
            <HoverableContainer>
              {!longFormat && !simplest && (
                <LinkComplex legacyBehavior>
                  <TitleHoverable>{title}</TitleHoverable>
                </LinkComplex>
              )}
            </HoverableContainer>
            <Guest>
              {!longFormat ? (
                <LinkComplex>
                  <EpisodeNumber episode={episode} />
                  <p className="guest">
                    {guest} <span>{business}</span>
                  </p>
                </LinkComplex>
              ) : (
                <h2 className="guest">
                  {guest} <span>{business}</span> <strong>{title}</strong>
                </h2>
              )}
            </Guest>
            <DateCat>
              {longFormat && spotify && (
                <time dateTime={date.toString()}>{formatDate}</time>
              )}
              <span>{category}</span>
            </DateCat>
            <div>{!simplest ? <P>{description}</P> : null}</div>
            <div>
              {!simplest &&
                (spotify ? (
                  <BroadcastRouter
                    trackClicks
                    episode={episode}
                    spotify={spotify}
                    apple={apple}
                    google={google}
                    youtube={youtube}
                  >
                    {longFormat && "Escúchalo en"}
                  </BroadcastRouter>
                ) : (
                  <ToBeReleased>Disponible el {shortDate}</ToBeReleased>
                ))}
            </div>
            <div>
              {longFormat && spotify && (
                <ShareRouter
                  shareUrl={`https://acueducto.studio/podcast/${slug}`}
                >
                  Comparte
                </ShareRouter>
              )}
            </div>
          </Fade>
          <ButtonSpace>
            {simplest && (
              <Link href={"/podcast/" + slug + "#"} passHref legacyBehavior>
                <ButtonArrow
                  text={text ? text : "seguir aprendiendo"}
                  inverse
                  className="leftFix clean"
                />
              </Link>
            )}
          </ButtonSpace>
        </div>
      </NewPod>
    </>
  );
};

export default EpisodePreview;

const ToBeReleased = styled.div`
  border: 2px solid orange;
  border-radius: 100px;
  padding: 10px 20px 14px 20px;
  display: inline-block;
  margin-top: 15px;
  color: 2px solid ${(p) => p.theme.colors.foreground_low};
`;

const ButtonSpace = styled.div`
  min-width: 270px;
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  .leftFix {
    box-shadow: 0px 3px 10px rgb(0 0 0 / 15%);
  }
  @media (max-width: 600px) {
    min-width: 241px;
  }
`;

const HoverableContainer = styled.div`
  margin-bottom: 8px;
`;

const TitleHoverable = styled.p`
  font-size: 2.5rem;
  font-weight: 200;
  line-height: 115%;
  margin-top: 0;
  margin-bottom: 12px;
  @media (max-width: 970px) {
    font-size: 2.2rem;
  }
  @media (max-width: 620px) {
    font-size: 2rem;
  }
  ${BorderLink({ showLink: false })}
`;

const PictureContainer = styled.div`
  min-width: 180px;
  margin-right: 5%;
  img {
    border-radius: 20px;
    transition: all 0.25s ease-out;
    opacity: ${(p) => (p.hoverable ? 0.9 : 1)};
    background-color: black;
    transform: scale(1);
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      img {
        opacity: 1;
        transform: ${(p) => (p.hoverable ? "scale(0.99)" : "scale(1)")};
      }
    }
  }
  &:active {
    img {
      opacity: 1;
      transform: scale(0.99);
    }
  }
  @media (max-width: 900px) {
    display: ${(p) => (p.hideImageMobile ? "none" : "inherit")};
  }
`;

const Guest = styled.div`
  padding-top: 4px;
  display: flex;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      div {
        transform: scale(0.97);
      }
    }
  }
  &:active {
    div {
      transform: scale(0.95);
    }
  }
  a {
    display: flex;
  }
  div {
    margin-right: 15px;
    transition: transform 0.3s ease;
  }
`;

const DateCat = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.foreground};
  margin-top: 10px;
  margin-bottom: 0px;
  address {
    display: inline-block;
    font-style: normal;
  }
  time {
    margin-right: 10px;
  }
  span {
    border: 2px solid ${(p) => p.theme.colors.accent};
    border-radius: 50px;
    padding: 4px 13px 8px 14px;
    text-transform: capitalize;
    color: ${(p) => p.theme.colors.foreground_low};
    font-size: 1.5rem;
    mix-blend-mode: exclusion;
    background-color: ${(p) => p.theme.colors.background};
  }
`;

const NewPod = styled.article`
  display: flex;
  max-width: 800px;
  margin-top: ${(p) => (p.simplest ? "3.5rem" : "10%")};
  width: ${(p) => (p.simplest ? "100%" : "inherit")};
  justify-content: ${(p) => (p.simplest ? "center" : "inherit")};
  a {
    text-decoration: none;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 200;
    line-height: 125%;
    margin-top: 0;
    margin-bottom: 12px;
    transition: 0.3s ease all;
  }
  .guest {
    font-size: 2.2rem;
    color: ${(p) => p.theme.colors.foreground};
    margin-top: -2px;
    text-align: left;
    padding-top: 0;
    line-height: 120%;
    span {
      display: block;
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      font-weight: 200;
      color: ${(p) => p.theme.colors.foreground_low};
    }
    strong {
      font-size: 1.8rem;
      display: block;
    }
  }
  div p {
    color: ${(p) => p.theme.colors.foreground_low};
    padding-top: 1.3rem;
    line-height: 145%;
    &:empty {
      display: none;
    }
  }
  @media (max-width: 970px) {
    h2 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: ${(p) => (p.simplest ? "center" : "inherit")};
    ${PictureContainer} {
      min-width: unset;
      max-width: 150px;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 620px) {
    ${DateCat} {
      span {
        font-size: 1.3rem;
      }
    }
    margin-top: ${(p) => (p.simplest ? "3.5rem" : "20%")};
    p {
      padding-top: 9px;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
  }
`;
