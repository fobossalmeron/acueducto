import React, { useMemo } from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'components/ui/Button/Button';
import { P } from 'components/shared/Dangerously';
import BroadcastRouter from '../BroadcastRouter';
import EpisodeNumber from '../EpisodeNumber';
import ShareRouter from '../ShareRouter';
import EpisodeProps from 'types/EpisodeProps';

import {
  ToBeReleased,
  NewPod,
  PictureContainer,
  HoverableContainer,
  Guest,
  DateCat,
  ButtonSpace,
  TitleHoverable,
} from './EpisodePreview.styles';

const formatDate = (date: string): string => {
  const fullDate = new Date(`${date}T00:00:00`);
  return fullDate.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const getShortDate = (date: string): string => {
  const fullDate = new Date(`${date}T00:00:00`);
  return fullDate.toLocaleDateString('es-MX');
};

interface EpisodePreviewProps extends EpisodeProps {
  longFormat?: boolean;
  simplest?: boolean;
  text?: string;
  hideImageMobile?: boolean;
}

const PreEpisodePreview: React.FC<EpisodePreviewProps> = ({
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
  episodeNumber,
  longFormat = false,
  simplest = false,
  text = '',
  hideImageMobile = false,
  podcastCoverImage = null,
  episodeSource,
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

  // Asegurarse de que siempre haya una imagen válida
  const imageUrl = useMemo(() => {
    if (episodeSource === 'prismic' && podcastCoverImage) {
      return podcastCoverImage;
    }
  }, [episodeSource, podcastCoverImage, episodeNumber]);

  return (
    <NewPod key={'npd' + episodeNumber} $simplest={simplest}>
      <PictureContainer
        $hoverable={!longFormat}
        $hideImageMobile={hideImageMobile}
      >
        <Fade triggerOnce>
          {episodeSource === 'prismic' ? (
            longFormat ? (
              <Image
                src={imageUrl}
                width={180}
                height={180}
                alt={`${business} - ${guest}`}
                loading="lazy"
              />
            ) : (
              <LinkComplex>
                <Image
                  src={imageUrl}
                  height={simplest ? 185 : 180}
                  width={simplest ? 185 : 180}
                  alt={`${business} - ${guest}`}
                  loading="lazy"
                />
              </LinkComplex>
            )
          ) : (
            <Image
              src={`/assets/img/podcast/${episodeNumber}.jpg`}
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
                <EpisodeNumber episodeNumber={episodeNumber} />
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
                  episodeNumber={episodeNumber}
                  spotify={spotify}
                  apple={apple}
                  youtube={youtube}
                >
                  {longFormat && 'Escúchalo en'}
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
            <Link href={`/podcast/${slug}`}>
              <Button text={text || 'Seguir aprendiendo'} />
            </Link>
          )}
        </ButtonSpace>
      </div>
    </NewPod>
  );
};

export const EpisodePreview = React.memo(PreEpisodePreview);
