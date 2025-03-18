import React from 'react';
import { OverlapLayout } from 'components/layout/layouts';
import { Title, Paragraph } from 'components/ui';
import Image from 'next/image';
import AI from 'public/assets/img/layout/home/ia.png';
import Front from 'public/assets/img/layout/home/front.png';
import Back from 'public/assets/img/layout/home/back.png';
import Deploy from 'public/assets/img/layout/home/deploy.png';
import Apple from 'public/assets/img/layout/home/logos/apple.png';
import Spotify from 'public/assets/img/layout/home/logos/spotify.png';
import Netflix from 'public/assets/img/layout/home/logos/netflix.png';
import Tiktok from 'public/assets/img/layout/home/logos/tiktok.png';
import Uber from 'public/assets/img/layout/home/logos/uber.png';

interface StackEndProps {
  label: string;
  title: string;
  image?: {
    src: any;
    alt: string;
  };
  imagePosition?: 'left' | 'right';
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
}

const StackEnd: React.FC<StackEndProps> = ({
  label,
  title,
  image,
  imagePosition = 'left',
  textAlign = 'left',
  className = '',
}) => {
  return (
    <div
      className={`bg-card h-[166px] overflow-hidden rounded-3xl ${className}`}
    >
      <div
        className={`flex items-center ${imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'}`}
      >
        {image && (
          <div className="flex h-full flex-shrink-0 items-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={0}
              height={166}
              className="h-[166px] w-auto"
              style={{ width: 'auto' }}
              sizes="100vh"
            />
          </div>
        )}
        <div
          className={`flex flex-1 flex-col gap-2 p-8 ${textAlign === 'center' ? 'text-center' : textAlign === 'right' ? 'text-right' : 'text-left'}`}
        >
          <span className="text-over-black text-base">{label}</span>
          <h3 className="text-xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};

interface StackSectionProps {
  title: string[];
  p: string;
  ends: Array<{
    label: string;
    title: string;
  }>;
  sticker: string;
  lastP: string;
}

export const StackSection: React.FC<StackSectionProps> = ({
  title,
  p,
  ends,
  lastP,
  sticker,
}) => {
  return (
    <div className="bg-background text-white">
      <OverlapLayout className="border-card-border mb-0 content-center overflow-hidden border-t">
        <OverlapLayout.Header>
          <Title as="h2">
            {title[0]}
            <span className="block text-right">{title[1]}</span>
          </Title>
        </OverlapLayout.Header>
        <OverlapLayout.Content>
          <Paragraph>{p}</Paragraph>
        </OverlapLayout.Content>

        <div className="col-span-full col-start-2 mt-16 md:col-span-10 md:col-start-2">
          {/* Cards Layout */}
          <div className="relative mb-20 grid grid-cols-1 gap-5 md:grid-cols-4">
            {/* AI Circle - Positioned absolutely relative to entire grid */}
            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-[35%]">
              <div className="flex h-[100px] w-[100px] -rotate-6 flex-col items-center justify-center rounded-full border-1 border-[#666666] bg-[#2F333C] p-2 text-center shadow-[0_0_19px_rgba(0,0,0,0.3)]">
                <Image src={AI} alt="AI" width={26} height={26} />
                <span className="mb-[5px] text-xs font-medium">{sticker}</span>
              </div>
            </div>

            {/* Frontend Card - Top */}
            <div className="md:col-span-2 md:col-start-2">
              <StackEnd
                label={ends[0].label}
                title={ends[0].title}
                image={{ src: Front, alt: 'Frontend' }}
                imagePosition="right"
                textAlign="center"
                className="card"
              />
            </div>

            {/* Backend and Deploy Cards - Bottom Row */}
            <div className="md:col-span-full">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <StackEnd
                  label={ends[1].label}
                  title={ends[1].title}
                  image={{ src: Back, alt: 'Backend' }}
                  imagePosition="left"
                  textAlign="right"
                  className="bg-accent"
                />
                <StackEnd
                  label={ends[2].label}
                  title={ends[2].title}
                  image={{ src: Deploy, alt: 'Deploy' }}
                  imagePosition="right"
                  textAlign="left"
                  className="card"
                />
              </div>
            </div>
          </div>

          {/* Companies Section */}
          <div className="mt-24 text-center">
            <h3 className="text-foreground-lower mb-8 text-sm">{lastP}</h3>
            <div className="flex flex-wrap items-center justify-center gap-12">
              <Image src={Apple} alt="Apple" width={81} height={29} />
              <Image src={Spotify} alt="Spotify" width={91} height={28} />
              <Image src={Netflix} alt="Netflix" width={97} height={28} />
              <Image src={Tiktok} alt="Tiktok" width={103} height={27} />
              <Image src={Uber} alt="Uber" width={62} height={22} />
            </div>
          </div>
        </div>
      </OverlapLayout>
    </div>
  );
};
