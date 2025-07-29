import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { PrismicNextImage } from '@prismicio/next';
import { ImageField } from '@prismicio/client';
import {
  H2overable,
  PictureContainer,
  HoverableContainer,
  Guest,
  NewPod,
} from './EpisodeFeature.styles';

interface EpisodeFeatureProps {
  title: string;
  guest: string;
  business: string;
  slug: string;
  episode: number;
  blue?: boolean;
  portrait?: boolean;
  image?: ImageField;
  logos?: string[] | null;
}

const EpisodeFeature: React.FC<EpisodeFeatureProps> = ({
  title,
  guest,
  business,
  slug,
  episode,
  blue = false,
  portrait = false,
  image,
  logos = null,
}) => {
  return (
    <Link href={`/${slug}`} passHref legacyBehavior>
      <NewPod $blue={blue}>
        <PictureContainer $hoverable={true} $portrait={portrait}>
          {!portrait && image ? (
            <Fade triggerOnce>
              <PrismicNextImage field={image} fallbackAlt="" />
            </Fade>
          ) : (
            <>
              {episode && (
              <Image
                src={`/assets/img/podcast/solas/${episode}.jpg`}
                alt={`${title} - ${guest}`}
                height={episode >= 91 && !portrait ? 206 : 142}
                width={episode >= 91 && !portrait ? 365 : 142}
              />
              )}
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
          <Guest $blue={blue}>
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
