import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { OverlapLayout } from 'components/layout/layouts';
import { Title } from 'components/ui';
import { Paragraph } from 'components/ui';

const cardImages = [
  '/assets/img/layout/home/estrategia.png',
  '/assets/img/layout/home/diseño.png',
  '/assets/img/layout/home/desarrollo.png',
];

interface Card {
  label: string;
  title: string;
  p: string;
}

interface StackingCardsProps {
  subtitle: string;
  title: string;
  cards: Card[];
}

export const StackingCards: React.FC<StackingCardsProps> = ({
  subtitle,
  title,
  cards,
}) => {
  return (
    <div className="bg-background">
      <OverlapLayout className="border-card-border mb-0 border-t">
        <OverlapLayout.Header>
          <Fade triggerOnce>
            <p className="text-over-black text-base leading-normal">
              {subtitle}
            </p>
            <Title as="h2" className="max-w-[14ch] whitespace-pre-line">
              {title}
            </Title>
          </Fade>
        </OverlapLayout.Header>
        <div className="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2">
          {cards.map((card, i) => (
            <div
              key={i}
              className="sticky"
              style={{
                top: `calc(6rem + ${i * 2.8}rem)`,
                marginBottom: `${(cards.length - 1 - i) * 2.8}rem`,
                zIndex: i + 1,
              }}
            >
              <div
                className={`${i === 1 ? 'primary-card' : 'card'} relative flex flex-col overflow-hidden rounded-4xl p-6 sm:p-10 lg:min-h-[75vh] lg:justify-between lg:p-16`}
                style={i === 0 ? { backgroundColor: 'transparent' } : undefined}
              >
                {/* Radial glow + noise for first card */}
                {i === 0 && (
                  <>
                    <div
                      className="pointer-events-none absolute inset-0 z-[1] opacity-60"
                      style={{
                        background:
                          'radial-gradient(ellipse 150% 150% at 40% 60%, #4a5060 0%, transparent 50%, transparent 100%)',
                      }}
                    />
                    {/* Inline SVG noise — data URI doesn't render feTurbulence */}
                    <svg
                      className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <filter id="card-noise">
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="0.65"
                          numOctaves="2"
                          stitchTiles="stitch"
                        />
                      </filter>
                      <rect
                        width="100%"
                        height="100%"
                        filter="url(#card-noise)"
                        opacity="0.10"
                      />
                    </svg>
                  </>
                )}

                {/* Gradient overlay for depth */}
                <div
                  className={`from-card-background to-background pointer-events-none absolute inset-0 bg-gradient-to-r ${i === 0 ? 'opacity-0' : 'opacity-60'}`}
                />

                {/* Label - above title on mobile */}
                <p className="text-foreground-low relative z-10 pb-2 text-xs tracking-[0.13em] uppercase lg:hidden">
                  {card.label}
                </p>

                {/* Top row: title + label */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <p className="text-foreground max-w-[700px] text-[clamp(2rem,1rem+3vw,4.6rem)] leading-[108%] font-medium tracking-tight">
                    {card.title}
                  </p>
                  <p className="text-foreground-low hidden shrink-0 text-xs tracking-[0.13em] uppercase lg:block">
                    {card.label}
                  </p>
                </div>

                {/* Paragraph */}
                <Paragraph className="relative z-10 pt-4 !pb-0">
                  {card.p}
                </Paragraph>

                {/* Card illustration */}
                <Image
                  src={cardImages[i]}
                  alt={card.label}
                  width={500}
                  height={500}
                  className="pointer-events-none relative z-10 mt-4 -mr-6 -mb-6 w-[85%] self-end object-contain sm:-mr-10 sm:-mb-10 md:w-[clamp(280px,45%,500px)] lg:absolute lg:right-0 lg:-bottom-1 lg:mt-0 lg:mr-0 lg:mb-0 lg:h-auto lg:self-auto lg:object-right-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </OverlapLayout>
    </div>
  );
};
