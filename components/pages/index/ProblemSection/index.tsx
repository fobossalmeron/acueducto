import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { OverlapLayout } from 'components/layout/layouts';
import { Title, Paragraph } from 'components/ui';
import Image from 'next/image';

interface Scene {
  text: string;
  profile: string;
  image?: string; // URL de la imagen opcional
}

interface ProblemSectionProps {
  title: string;
  p: string;
  scenes: Scene[];
}

// Componente para renderizar cada escena individual
interface SceneCardProps {
  scene: Scene;
  index: number;
  className?: string; // Clases personalizadas opcionales
}

const SceneCard: React.FC<SceneCardProps> = ({
  scene,
  index,
  className = '',
}) => (
  <div
    key={index}
    className={`bg-card-background border-card-border rounded-3xl border p-8 ${className}`}
  >
    {scene.image && (
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src={scene.image}
          alt={`Imagen de ${scene.profile}`}
          width={400}
          height={250}
          className="w-full object-cover"
        />
      </div>
    )}
    <p className="text-lg">{scene.text}</p>
    <p className="text-foreground-lower text-sm">- {scene.profile}</p>
  </div>
);

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  title,
  p,
  scenes,
}) => {
  return (
    <div className="bg-background">
      <OverlapLayout className="border-card-border mb-20 content-center overflow-hidden border-t px-[4%]">
        <OverlapLayout.Header>
          <Title as="h2" className="max-w-[18ch]">
            {title}
          </Title>
        </OverlapLayout.Header>
        <OverlapLayout.Content className="lg:col-start-8 lg:col-end-12">
          <Paragraph>{p}</Paragraph>
        </OverlapLayout.Content>

        <div className="col-span-10 col-start-2">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Fade cascade triggerOnce>
              {/* Primera columna con 2 escenas apiladas */}
              <div className="flex flex-col gap-8">
                {scenes.slice(0, 2).map((scene, index) => (
                  <SceneCard key={index} scene={scene} index={index} />
                ))}
              </div>

              {/* Segunda y tercera columna, cada una con una escena */}
              {scenes.slice(2, 4).map((scene, index) => (
                <SceneCard key={index + 2} scene={scene} index={index + 2} />
              ))}
            </Fade>
          </div>
        </div>
      </OverlapLayout>
    </div>
  );
};
