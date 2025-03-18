import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { OverlapLayout } from 'components/layout/layouts';
import { Title, Paragraph } from 'components/ui';
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
          <Title as="h2" className="max-w-[18ch]">
            {title}
          </Title>
        </OverlapLayout.Header>
        <OverlapLayout.Content className="lg:col-start-8 lg:col-end-12">
          <Paragraph>{p}</Paragraph>
        </OverlapLayout.Content>

        <div className="col-span-10 col-start-2">
          <Fade cascade triggerOnce>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-10">
              <div className="flex flex-col gap-5 md:col-span-4">
                {/* Scene Card 1 - Left image */}
                <div className="card overflow-hidden rounded-3xl md:h-1/2">
                  <div className="flex h-full flex-col md:flex-row">
                    <div className="h-full flex-shrink-0 md:w-auto">
                      <Image
                        src={Scene1.src}
                        alt={`Imagen de ${scenes[0]?.profile}`}
                        width={150}
                        height={133}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-end px-8 py-6 text-end">
                      <p className="text-lg">{scenes[0]?.text}</p>
                      <p className="text-foreground-lower mt-1 text-sm">
                        - {scenes[0]?.profile}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scene Card 2 - Right image */}
                <div className="card overflow-hidden rounded-3xl md:h-1/2">
                  <div className="flex flex-col md:flex-row-reverse">
                    <div className="flex-shrink-0 md:w-1/3">
                      <Image
                        src={Scene2.src}
                        alt={`Imagen de ${scenes[1]?.profile}`}
                        width={136}
                        height={162}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col px-8 py-6">
                      <p className="text-lg">{scenes[1]?.text}</p>
                      <p className="text-foreground-lower mt-1 text-sm">
                        - {scenes[1]?.profile}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scene Card 3 - Bottom image */}
              <div className="bg-accent overflow-hidden rounded-3xl md:col-span-3 md:h-full">
                <div className="flex h-full flex-col">
                  <div className="flex flex-col px-8 py-6 pb-0">
                    <p className="text-lg">{scenes[2]?.text}</p>
                    <p className="text-foreground-low mt-1 text-sm">
                      - {scenes[2]?.profile}
                    </p>
                  </div>
                  <div className="mt-auto">
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
              <div className="card overflow-hidden rounded-3xl md:col-span-3">
                <div className="flex h-full flex-col">
                  <div className="flex flex-col px-8 py-6 pb-0">
                    <p className="text-lg">{scenes[3]?.text}</p>
                    <p className="text-foreground-lower mt-1 text-sm">
                      - {scenes[3]?.profile}
                    </p>
                  </div>
                  <div className="mt-auto">
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
