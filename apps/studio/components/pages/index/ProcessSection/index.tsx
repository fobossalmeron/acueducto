import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { OverlapLayout, Title } from '@acueducto/shared';
import Image from 'next/image';
import { StageCard } from './StageCard';
import { AgileDevCard } from './AgileDevCard';
import { Badge } from './Badge';

interface ProcessSectionProps {
  title: string;
  labelFirst: string;
  labelSecond: string;
  stages: { p: string; badge: string; title: string }[];
  agileCard: {
    auxiliary: string;
    title: string;
    p: string;
    button: string;
  };
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  title,
  labelFirst,
  labelSecond,
  stages,
  agileCard,
}) => {
  return (
    <div className="bg-background">
      <OverlapLayout className="border-card-border mb-0 content-center overflow-hidden border-t">
        <OverlapLayout.Header>
          <Fade triggerOnce>
            <Title as="h2" className="max-w-[14ch]">
              {title}
            </Title>
          </Fade>
        </OverlapLayout.Header>

        <div className="col-span-full col-start-1 mt-0 sm:col-span-10 sm:col-start-2 md:mt-12 lg:mt-16">
          {/* Etiqueta de "Primeros 10 días" - full width */}
          <div className="w-full">
            <Fade triggerOnce>
              <h3 className="text-over-black text-base">{labelFirst}</h3>
            </Fade>
          </div>

          {/* Contenedor de primeros 10 días */}
          <Fade triggerOnce>
            <div className="relative pt-2">
              <div className="absolute top-0 hidden h-full max-h-full w-full opacity-50 lg:flex">
                <Image
                  src={'/assets/img/layout/home/lines.svg'}
                  alt="Lines"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              {/* Contenido de las tarjetas */}
              <div className="relative grid grid-cols-10 gap-3">
                <div className="relative col-span-10 lg:col-span-5 2xl:col-span-4">
                  <StageCard stage={stages[0]} stageNumber="1" />
                  <Badge
                    badge={stages[0].badge}
                    className="absolute -top-6 right-6 hidden lg:flex"
                  />
                </div>
                <div className="relative col-span-10 lg:col-span-5 2xl:col-span-6">
                  <StageCard stage={stages[1]} stageNumber="2" maxCharMobile />
                  <Badge
                    badge={stages[1].badge}
                    className="lg:top-unset absolute top-3 -right-7 lg:-bottom-3"
                  />
                </div>
              </div>
            </div>
          </Fade>

          {/* Etiqueta de "Siguientes 10 días" */}
          <div className="w-full pt-4 md:pt-6">
            <Fade triggerOnce>
              <h3 className="text-over-black text-base">{labelSecond}</h3>
            </Fade>
          </div>

          {/* Segunda fila: Etapa 3 */}
          <Fade triggerOnce>
            <div className="relative pt-2 pb-5">
              <div className="absolute top-0 hidden h-full max-h-full w-full opacity-50 lg:flex">
                <Image
                  src={'/assets/img/layout/home/lines.svg'}
                  alt="Lines"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="relative">
                <StageCard stage={stages[2]} stageNumber="3" maxCharMobile />
                <Badge
                  badge={stages[2].badge}
                  className="bg-accent md:top-unset absolute -top-4 right-8 !border-[#7191EF] md:right-6 md:bottom-1/2 md:translate-y-1/2"
                />
              </div>
            </div>
          </Fade>
        </div>
        <AgileDevCard {...agileCard} />
      </OverlapLayout>
    </div>
  );
};
