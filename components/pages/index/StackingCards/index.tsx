import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { OverlapLayout } from 'components/layout/layouts';
import { Title } from 'components/ui';
import { Paragraph } from 'components/ui';

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
            <p className="text-over-black text-sm leading-normal">
              {subtitle}
            </p>
            <Title
              as="h2"
              className="max-w-[14ch] whitespace-pre-line bg-gradient-to-r from-[#416FF7] to-[#0D35AB] bg-clip-text text-transparent"
            >
              {title}
            </Title>
          </Fade>
        </OverlapLayout.Header>

        <div className="col-span-full col-start-1 sm:col-span-10 sm:col-start-2">
          <div className="relative">
              {cards.map((card, i) => (
                <div key={i} className="pb-6 last:pb-0">
                  <div
                    className="sticky top-24"
                    style={{ top: `calc(6rem + ${i * 2}rem)` }}
                  >
                    <Fade triggerOnce>
                    <div className="card relative flex aspect-video flex-col justify-between overflow-hidden rounded-3xl p-10 md:p-16">
                    {/* Gradient overlay for depth */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-card-background to-background opacity-60" />

                    {/* Planet decoration */}
                    <div
                      className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full opacity-15"
                      style={{
                        background:
                          'radial-gradient(circle, #416FF7 0%, transparent 70%)',
                      }}
                    />

                    {/* Top row: title + label */}
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <p className="text-foreground max-w-[700px] text-2xl leading-[108%] font-bold tracking-tight md:text-4xl">
                        {card.title}
                      </p>
                      <p className="text-foreground-low shrink-0 text-xs tracking-[0.13em] uppercase">
                        {card.label}
                      </p>
                    </div>

                    {/* Paragraph - pinned to bottom */}
                    <Paragraph className="relative z-10 pt-4 !pb-0">
                      {card.p}
                    </Paragraph>
                  </div>
                    </Fade>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </OverlapLayout>
    </div>
  );
};
