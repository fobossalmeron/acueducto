import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { OverlapLayout } from 'components/layout/layouts';
import { Title } from 'components/ui';
import Image from 'next/image';
import { StageCard } from './StageCard';
import { AgileDevCard } from './AgileDevCard';

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
          <Title as="h2" className="max-w-[14ch]">
            {title}
          </Title>
        </OverlapLayout.Header>

        <div className="col-span-full col-start-2 mt-16 md:col-span-10 md:col-start-2">
          {/* Etiqueta de "Primeros 10 días" - full width */}
          <div className="w-full">
            <h3 className="text-over-black text-base">{labelFirst}</h3>
          </div>

          {/* Contenedor sin líneas divisorias */}
          <div className="relative pt-2">
            <div className="absolute top-0 h-full max-h-full w-full">
              <Image
                src={'/assets/img/layout/home/lines.svg'}
                alt="Lines"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            {/* Contenido de las tarjetas */}
            <div className="relative grid grid-cols-10">
              <div className="col-span-10 md:col-span-4">
                <StageCard
                  stage={stages[0]}
                  stageNumber="1"
                  badge={stages[0].badge}
                />
              </div>
              <div className="col-span-10 md:col-span-6">
                <StageCard
                  stage={stages[1]}
                  stageNumber="2"
                  badge={stages[1].badge}
                />
              </div>
            </div>
          </div>

          {/* Etiqueta de "Siguientes 10 días" */}
          <div className="w-full">
            <h3 className="text-over-black text-base">{labelSecond}</h3>
          </div>

          {/* Segunda fila: Etapa 3 */}
          <div className="relative pt-2 pb-5">
            <div className="absolute top-0 h-full max-h-full w-full">
              <Image
                src={'/assets/img/layout/home/lines.svg'}
                alt="Lines"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <Fade triggerOnce>
              <StageCard
                stage={stages[2]}
                stageNumber="3"
                badge={stages[2].badge}
              />
            </Fade>
          </div>
        </div>
      </OverlapLayout>

      {/* Tarjeta de desarrollo ágil */}
      <AgileDevCard {...agileCard} />
    </div>
  );
};
