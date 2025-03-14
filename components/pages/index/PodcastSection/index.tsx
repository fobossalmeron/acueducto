import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { OverlapLayout } from 'components/layout/layouts/OverlapLayout';
import { Title } from 'components/ui/Title';
import { Paragraph } from 'components/ui/Paragraph';
import BroadcastRouter from 'components/pages/podcast/BroadcastRouter';
import PodcastCover from 'public/assets/img/layout/podcast_cover.png';

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
          <Paragraph>{p}</Paragraph>
          <Fade>
            <Link href="/podcast" passHref locale="es" legacyBehavior>
              <a className="block">
                <div className="relative">
                  <Image
                    src={PodcastCover}
                    width={230}
                    height={230}
                    alt="Cuando el río suena"
                    className="hover:border-accent rounded-[35px] border-[2.5px] border-transparent transition-all duration-300 ease-out"
                  />
                </div>
              </a>
            </Link>
            <BroadcastRouter
              trackClicks
              episode={3}
              spotify="https://open.spotify.com/show/2YLB7SOeJsLp5DtDuIwX8t"
              apple="https://podcasts.apple.com/us/podcast/cuando-el-r%C3%ADo-suena/id1500473556"
              youtube="https://www.youtube.com/watch?v=k4CDIGcQ3gc&list=PLX3VC_2vq4TTRsyLoyWOHutWND0hQt9lD"
            />
          </Fade>
        </OverlapLayout.Content>
      </OverlapLayout>
    </div>
  );
};
