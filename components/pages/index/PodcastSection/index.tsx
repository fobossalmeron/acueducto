import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { OverlapLayout } from 'components/layout/layouts/OverlapLayout';
import { Title } from 'components/ui/Title';
import { Paragraph } from 'components/ui/Paragraph';
import { Button } from 'components/ui/Button';
import PodcastCover from 'public/assets/img/layout/home/pod.png';
interface PodcastSectionProps {
  title: string;
  p: string;
}

export const PodcastSection: React.FC<PodcastSectionProps> = ({ title, p }) => {
  return (
    <div className="bg-background">
      <OverlapLayout className="border-foreground-lowest mb-0 content-center overflow-hidden border-t">
        <OverlapLayout.Header>
          <Title as="h2" className="max-w-[14ch]">
            {title}
          </Title>
        </OverlapLayout.Header>
        <OverlapLayout.Content>
          <Paragraph dangerouslySetInnerHTML={{ __html: p }} />
          <Fade>
            <Image
              src={PodcastCover}
              alt="Cuando el río suena"
              width={320}
              height={320}
            />
            <Link
              href="/podcast"
              passHref
              locale="es"
              className="flex flex-col justify-start"
            >
              <div className="mt-10">
                <Button text="Ver podcast" />
              </div>
            </Link>
          </Fade>
        </OverlapLayout.Content>
      </OverlapLayout>
    </div>
  );
};
