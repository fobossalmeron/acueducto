import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Picture from "components/caseStudy/shared/Picture";
import Image from "next/image";
import BorderLink from "components/shared/BorderedLink";
import { PrismicNextImage } from "@prismicio/next";

const EpisodeFeature = ({
  title,
  guest,
  business,
  slug,
  episode,
  blue,
  portrait,
  image,
  logos,
}) => {
  return (
    <Link
      href={"/podcast/" + slug}
      passHref
      key={"npd" + episode}
      legacyBehavior
    >
      <NewPod blue={blue} episode={episode}>
        <PictureContainer
          hoverable={true}
          episode={episode}
          portrait={portrait}
        >
          {!portrait && image ? (
            <PrismicNextImage
              field={image}
              height="206"
              width="365"
              fallbackAlt=""
            />
          ) : (
            <>
              <Picture
                src={`/assets/img/podcast/solas/${episode}.jpg`}
                alt={title + " - " + guest}
                height={episode >= 91 && !portrait ? 206 : 142}
                width={episode >= 91 && !portrait ? 365 : 142}
              />
              {logos && (
                <div className="logos">
                  {logos.map((logo) => (
                    <Image
                      key={logo}
                      className="logoMini"
                      width={30}
                      height={30}
                      src={`/assets/img/podcast/logos/${logo}.png`}
                      alt={logo}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </PictureContainer>
        <Fade triggerOnce>
          <Guest blue={blue}>
            <h3>
              {guest} <span>{business}</span>
            </h3>
          </Guest>
          <HoverableContainer>
            <H2overable>{title}</H2overable>
          </HoverableContainer>
        </Fade>
      </NewPod>
    </Link>
  );
};

export default EpisodeFeature;

const HoverableContainer = styled.div`
  margin-bottom: 8px;
`;

const H2overable = styled.h3`
  ${BorderLink({ showLink: false })}
  &:first-letter {
    text-transform: lowercase;
  }
`;

const PictureContainer = styled.div`
  margin-bottom: 7%;
  height: 145px;
  position: relative;
  max-width: ${(p) => (p.portrait ? "142px" : "unset")};
  & > div:not(.logos) {
    border-radius: 25px;
    overflow: hidden;
    display: inline-block;
    height: 100%;
  }
  img:not(.logoMini) {
    transition: all 0.25s ease-out;
    background-color: #131516;
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
  .logos {
    position: absolute;
    bottom: -5px;
    left: 120px;
    display: flex;
    gap: 0.7rem;
    align-items: flex-end;
  }
  .logoMini {
    position: relative;
  }
`;

const Guest = styled.div`
  display: flex;
  margin-bottom: 10px;
  text-shadow: ${(p) =>
    p.blue
      ? "-1px -1px 0 #305EE3,  1px -1px 0 #305EE3,-1px 1px 0 #305EE3,1px 1px 0 #305EE3;"
      : "-1px -1px 0 #131516,  1px -1px 0 #131516,-1px 1px 0 #131516,1px 1px 0 #131516;"};
  a {
    display: flex;
  }
  div {
    margin-right: 15px;
    transition: transform 0.3s ease;
  }
`;

const NewPod = styled.a`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 800px;
  width: 100%;
  background-image: ${(p) =>
    p.blue
      ? 'url("/assets/img/layout/backCardWhite.svg")'
      : 'url("/assets/img/layout/backCard.svg")'};
  background-size: cover;
  background-position: bottom;
  background-color: ${(p) => (p.blue ? "#305EE3" : "#181a1b")};
  border-radius: 50px;
  padding: 3.5rem 3.5rem 2.5rem 3.5rem;
  text-decoration: none;
  transition: 0.3s ease-out all;
  a {
    text-decoration: none;
  }
  h3 {
    font-size: 2.1rem;
    font-weight: 100;
    line-height: 120%;
    margin-top: 0;
    margin-bottom: 12px;
    transition: 0.3s ease all;
  }
  h3 {
    font-size: 2rem;
    color: ${(p) => p.theme.colors.foreground};
    margin-top: -4px;
    text-align: left;
    span {
      display: block;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      font-weight: 200;
      color: #c8c8c8;
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

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(p) => (p.blue ? "#3A65E4" : "#1e2224")};
    }
  }
  &:active {
    background-color: ${(p) => (p.blue ? "#3A65E4" : "#1e2224")};
  }

  @media (max-width: 970px) {
    h2 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 3rem 3rem 2rem 3rem;
    border-radius: 40px;
    ${PictureContainer} {
      min-width: unset;
      max-width: ${(p) => (p.episode >= 91 ? "none" : "142px")};
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 620px) {
    padding: 2.5rem 2.5rem 1.5rem 2.5rem;
    border-radius: 30px;
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
