import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { OverlapLayout } from '@acueducto/shared';
import { Title, Paragraph } from '@acueducto/shared';
import Image from 'next/image';
import Scene1 from 'public/assets/img/layout/home/scene-1.png';
import Scene2 from 'public/assets/img/layout/home/scene-2.png';
import Scene3 from 'public/assets/img/layout/home/scene-3.png';
import Scene4 from 'public/assets/img/layout/home/scene-4.png';

interface Scene {
  text: string;
  profile: string;
}

interface ProblemSectionProps {
  title: string;
  p: string;
  scenes: Scene[];
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  title,
  p,
  scenes,
}) => {
  return (
    <div className="bg-background">
      <OverlapLayout className="border-card-border content-center overflow-hidden border-t px-[4%]">
        <OverlapLayout.Header>
          <Fade triggerOnce>
            <Title as="h2" className="max-w-[18ch]">
              {title}
            </Title>
          </Fade>
        </OverlapLayout.Header>
        <OverlapLayout.Content className="lg:col-start-8 lg:col-end-12">
          <Fade triggerOnce>
            <Paragraph>{p}</Paragraph>
          </Fade>
        </OverlapLayout.Content>

        <div className="col-span-12 col-start-1 sm:col-span-10 sm:col-start-2">
          <Fade cascade triggerOnce>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-10">
              <div className="col-span-10 flex flex-col gap-5 lg:col-span-4">
                {/* Scene Card 1 - Left image */}
                <div className="card h-fit max-h-[133px] overflow-hidden rounded-3xl lg:h-1/2 lg:max-h-1/2">
                  <div className="flex h-full flex-row justify-between">
                    <div className="h-full w-1/3">
                      <Image
                        src={Scene1.src}
                        alt={`Imagen de ${scenes[0]?.profile}`}
                        width={150}
                        height={133}
                        className="h-full w-full object-cover object-right"
                      />
                    </div>
                    <div className="flex h-fit w-2/3 flex-col items-end px-6 py-4 pl-4 text-end md:px-8 md:py-6">
                      <p className="max-w-[15ch] text-base lg:text-lg">
                        {scenes[0]?.text}
                      </p>
                      <p className="text-foreground-lower mt-1 text-sm">
                        - {scenes[0]?.profile}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scene Card 2 - Right image */}
                <div className="card h-fit max-h-[166px] overflow-hidden rounded-3xl lg:h-1/2 lg:max-h-1/2">
                  <div className="flex h-full flex-row-reverse justify-between">
                    <div className="h-full w-1/3">
                      <Image
                        src={Scene2.src}
                        alt={`Imagen de ${scenes[1]?.profile}`}
                        width={136}
                        height={162}
                        className="h-full w-full object-cover object-left"
                      />
                    </div>
                    <div className="flex h-fit w-2/3 flex-col px-6 py-4 md:px-8 md:py-6">
                      <p className="max-w-[15ch] text-base lg:text-lg">
                        {scenes[1]?.text}
                      </p>
                      <p className="text-foreground-lower mt-1 text-sm">
                        - {scenes[1]?.profile}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scene Card 3 - Bottom image */}
              <div className="primary-card col-span-10 max-h-[240px] overflow-hidden rounded-3xl md:h-full lg:col-span-3 lg:max-h-full">
                <div className="flex h-full flex-col">
                  <div className="flex flex-col items-end px-6 py-4 pb-0 text-right md:px-8 md:py-6 lg:items-start lg:text-left">
                    <p className="max-w-[26ch] text-base lg:max-w-[18ch] lg:text-lg">
                      {scenes[2]?.text}
                    </p>
                    <p className="text-foreground-lower mt-1 text-sm">
                      - {scenes[2]?.profile}
                    </p>
                  </div>
                  <div className="mt-auto h-auto">
                    <Image
                      src={Scene3.src}
                      alt={`Imagen de ${scenes[2]?.profile}`}
                      width={349}
                      height={153}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Scene Card 4 - Bottom image */}
              <div className="card col-span-10 overflow-hidden rounded-3xl lg:col-span-3">
                <div className="flex h-full flex-col">
                  <div className="flex flex-col px-6 py-4 pb-0 md:px-8 md:py-6">
                    <p className="max-w-[30ch] text-base lg:max-w-[19ch] lg:text-lg">
                      {scenes[3]?.text}
                    </p>
                    <p className="text-foreground-lower mt-1 text-sm">
                      - {scenes[3]?.profile}
                    </p>
                  </div>
                  <div className="mt-auto max-h-[120px] max-w-[350px] self-end lg:h-auto lg:max-h-full">
                    <Image
                      src={Scene4.src}
                      alt={`Imagen de ${scenes[3]?.profile}`}
                      width={300}
                      height={169}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </OverlapLayout>
    </div>
  );
};
