import React from 'react';
import { OverlapLayout } from 'components/layout/layouts';
import { Title, Paragraph } from 'components/ui';
import Image from 'next/image';

interface StackEndProps {
  label: string;
  title: string;
  className?: string;
}

const StackEnd: React.FC<StackEndProps> = ({
  label,
  title,
  className = '',
}) => {
  return (
    <div className={`bg-card flex flex-col gap-4 rounded-3xl p-8 ${className}`}>
      <span className="text-over-black text-sm">{label}</span>
      <h3 className="text-lg font-medium">{title}</h3>
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
  lastP: string;
}

export const StackSection: React.FC<StackSectionProps> = ({
  title,
  p,
  ends,
  lastP,
}) => {
  return (
    <div className="bg-background text-white">
      <OverlapLayout className="border-card-border mb-0 content-center overflow-hidden border-t">
        <OverlapLayout.Header>
          <Title as="h2" className="max-w-[14ch]">
            {title[0]} <br /> {title[1]}
          </Title>
        </OverlapLayout.Header>
        <OverlapLayout.Content>
          <Paragraph>{p}</Paragraph>
        </OverlapLayout.Content>

        <div className="col-span-full col-start-2 mt-16 md:col-span-10 md:col-start-2">
          {/* Cards Layout */}
          <div className="relative mb-20 grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* Frontend Card - Top */}
            <div className="md:col-span-full">
              <StackEnd
                label={ends[0].label}
                title={ends[0].title}
                className="card"
              />
            </div>

            {/* Middle Section with AI Circle */}
            <div className="relative md:col-span-full">
              <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#27282F] p-4 text-center">
                  <span className="text-xs">Acelerado</span>
                  <span className="text-xs">con IA</span>
                </div>
              </div>

              {/* Backend and Deploy Cards - Bottom Row */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <StackEnd
                  label={ends[1].label}
                  title={ends[1].title}
                  className="primary-card"
                />
                <StackEnd
                  label={ends[2].label}
                  title={ends[2].title}
                  className="card"
                />
              </div>
            </div>
          </div>

          {/* Companies Section */}
          <div className="mt-20 text-center">
            <h3 className="text-over-black mb-8 text-sm">{lastP}</h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {/* Logos irán aquí */}
              {/* El cliente mencionó que pondrá las imágenes después */}
            </div>
          </div>
        </div>
      </OverlapLayout>
    </div>
  );
};
