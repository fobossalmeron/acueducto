import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import BorderLink from "components/shared/BorderedLink";
import { PrismicNextImage } from "@prismicio/next";

const PrismicEpisodeFeature = ({
  uid,
  data,
  blue,
}) => {
  const episode = data.introduction[0].episode;
  const title = data.introduction[0].title[0].text;
  const guest = data.introduction[0].guest;
  const business = data.introduction[0].business;
  const image = data.images[0].solas;

  return (
    <Link href={"/podcast/" + uid} passHref key={"npd" + episode} legacyBehavior>
      <NewPod blue={blue} episode={episode}>
        <PictureContainer hoverable={true} episode={episode}>
          <PrismicNextImage
            field={image}
            height={206}
            width={365}
            alt=""
          />
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

export default PrismicEpisodeFeature;

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
  & > span {
    border-radius: 25px;
    overflow: hidden !important;
    display: inline-block !important;
    height: 142px !important;
  }
  img {
    transition: all 0.25s ease-out;
    background-color: #131516;
    transform: scale(1.01);
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
  background-color: ${(p) => (p.blue ? "#305EE3" : "#131516")};
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
      background-color: ${(p) => (p.blue ? "#3A65E4" : "#171a1c")};
    }
  }
  &:active {
    background-color: ${(p) => (p.blue ? "#3A65E4" : "#171a1c")};
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