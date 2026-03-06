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
            <p className="text-over-black text-sm leading-normal">{subtitle}</p>
            <Title
              as="h2"
              className="max-w-[14ch] bg-gradient-to-r from-[#416FF7] to-[#0D35AB] bg-clip-text whitespace-pre-line text-transparent"
            >
              {title}
            </Title>
          </Fade>
        </OverlapLayout.Header>
        <div className="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2">
          {cards.map((card, i) => (
            <div
              key={i}
              className="sticky mb-6 last:mb-0"
              style={{
                top: `calc(6rem + ${i * 2.8}rem)`,
                zIndex: i + 1,
              }}
            >
              <div
                className={`${i === 1 ? 'primary-card' : 'card'} relative flex flex-col overflow-hidden rounded-4xl p-6 sm:p-10 md:min-h-[75vh] md:justify-between lg:p-16`}
              >
                {/* Gradient overlay for depth */}
                <div className="from-card-background to-background pointer-events-none absolute inset-0 bg-gradient-to-r opacity-60" />

                {/* Label - above title on mobile */}
                <p className="text-foreground-low relative z-10 pb-2 text-xs tracking-[0.13em] uppercase md:hidden">
                  {card.label}
                </p>

                {/* Top row: title + label */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <p className="text-foreground max-w-[700px] text-[clamp(2rem,1rem+3vw,4.6rem)] leading-[108%] font-medium tracking-tight">
                    {card.title}
                  </p>
                  <p className="text-foreground-low hidden shrink-0 text-xs tracking-[0.13em] uppercase md:block">
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
                  className="pointer-events-none relative z-10 mt-4 -mr-6 -mb-6 w-[85%] self-end object-contain sm:-mr-10 sm:-mb-10 md:absolute md:right-0 md:-bottom-1 md:mt-0 md:mr-0 md:mb-0 md:h-[500px] md:w-[500px] md:self-auto md:object-right-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </OverlapLayout>
    </div>
  );
};
