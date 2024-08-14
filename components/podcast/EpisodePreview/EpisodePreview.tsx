import React, { useMemo } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Image from "next/image";
import { P } from "components/shared/Dangerously";
import BroadcastRouter from "../BroadcastRouter";
import EpisodeNumber from "../EpisodeNumber";
import ShareRouter from "../ShareRouter";
import ButtonArrow from "components/shared/footers/ButtonArrow";
import { PrismicNextImage } from "@prismicio/next";
import { ImageFieldImage } from "@prismicio/client";

import {
  ToBeReleased,
  NewPod,
  PictureContainer,
  HoverableContainer,
  Guest,
  DateCat,
  ButtonSpace,
  TitleHoverable
} from "./EpisodePreview.styles";

const formatDate = (date: string): string => {
  const fullDate = new Date(`${date}T00:00:00`);
  return fullDate.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getShortDate = (date: string): string => {
  const fullDate = new Date(`${date}T00:00:00`);
  return fullDate.toLocaleDateString("es-MX");
};

interface EpisodePreviewProps {
  title: string;
  guest: string;
  business: string;
  description: string;
  category: string;
  slug: string;
  date: string;
  spotify?: string;
  apple?: string;
  youtube?: string;
  episode: number;
  longFormat?: boolean;
  simplest?: boolean;
  text?: string;
  hideImageMobile?: boolean;
  podcastImage?: ImageFieldImage;
  prismic?: boolean;
}

const EpisodePreview: React.FC<EpisodePreviewProps> = ({
  title,
  guest,
  business,
  description,
  category,
  slug,
  date,
  spotify,
  apple,
  youtube,
  episode,
  longFormat = false,
  simplest = false,
  text = "",
  hideImageMobile = false,
  podcastImage = null,
  prismic = false,
}) => {
  const LinkComplex = useMemo(() => {
    const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <Link href={`/podcast/${slug}`} passHref legacyBehavior>
        <a className="clean">{children}</a>
      </Link>
    );
    return Wrapper;
  }, [slug]);

  const formattedDate = useMemo(() => formatDate(date), [date]);
  const shortDate = useMemo(() => getShortDate(date), [date]);

  return (
    <NewPod key={"npd" + episode} simplest={simplest}>
      <PictureContainer
        hoverable={!longFormat}
        hideImageMobile={hideImageMobile}
      >
        <Fade triggerOnce>
          {prismic ? (
            longFormat ? (
              <PrismicNextImage
                field={podcastImage}
                width={180}
                height={180}
                alt=""
              />
            ) : (
              <LinkComplex>
                <PrismicNextImage
                  field={podcastImage}
                  height={simplest ? 185 : 180}
                  width={simplest ? 185 : 180}
                  alt=""
                />
              </LinkComplex>
            )
          ) : (
            <Image
              src={`/assets/img/podcast/${episode}.jpg`}
              alt={`${business} - ${guest}`}
              width={simplest ? 185 : 180}
              height={simplest ? 185 : 180}
              loading="lazy"
            />
          )}
        </Fade>
      </PictureContainer>
      <div>
        <Fade triggerOnce>
          <HoverableContainer>
            {!longFormat && !simplest && (
              <LinkComplex>
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
              <time dateTime={date}>{formattedDate}</time>
            )}
            <span>{category}</span>
          </DateCat>
          <div>{!simplest && <P>{description}</P>}</div>
          <div>
            {!simplest &&
              (spotify ? (
                <BroadcastRouter
                  trackClicks
                  episode={episode}
                  spotify={spotify}
                  apple={apple}
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
            <Link href={`/podcast/${slug}`} passHref legacyBehavior>
            <ButtonArrow
              text={text || "seguir aprendiendo"}
              inverse
              className="leftFix clean"
            />
          </Link>
          )}
        </ButtonSpace>
      </div>
    </NewPod>
  );
};

export default React.memo(EpisodePreview);