import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { OverlapLayout } from 'components/layout/layouts';
import { Title } from 'components/ui';
import Image from 'next/image';
import { Button } from 'components/ui/Button/Button';
import { StageCard } from './StageCard';

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
      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="primary-card relative overflow-hidden rounded-4xl border bg-[#091A4E] p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-primary text-sm">{agileCard.auxiliary}</p>
              <h2 className="text-xl font-medium text-white">
                {agileCard.title}
              </h2>
              <p className="text-over-black max-w-md text-base">
                {agileCard.p}
              </p>
              <Button text={agileCard.button} />
            </div>
            <div className="relative">
              <div className="absolute right-0 bottom-0">
                <svg
                  width="300"
                  height="300"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50,250 Q150,50 250,150"
                    stroke="#FFA94D"
                    strokeWidth="12"
                    fill="none"
                  />
                  <path
                    d="M250,150 L280,100"
                    stroke="#FFA94D"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="150"
                    cy="150"
                    r="30"
                    stroke="#FFA94D"
                    strokeWidth="12"
                    fill="none"
                  />
                </svg>
                <div className="absolute top-20 right-20 text-white">
                  <span className="text-2xl">✦</span>
                </div>
                <div className="absolute top-80 right-40 text-white">
                  <span className="text-2xl">✦</span>
                </div>
                <div className="absolute top-40 right-60 text-white">
                  <span className="text-2xl">✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
