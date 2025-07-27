import React from 'react';
import { OverlapLayout } from '@acueducto/shared';
import { Title, Paragraph } from '@acueducto/shared';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import AI from 'public/assets/img/layout/home/ia.png';
import Front from 'public/assets/img/layout/home/front.png';
import Back from 'public/assets/img/layout/home/back.png';
import Deploy from 'public/assets/img/layout/home/deploy.png';
import Apple from 'public/assets/img/layout/home/logos/apple.png';
import Spotify from 'public/assets/img/layout/home/logos/spotify.png';
import Netflix from 'public/assets/img/layout/home/logos/netflix.png';
import Tiktok from 'public/assets/img/layout/home/logos/tiktok.png';
import Uber from 'public/assets/img/layout/home/logos/uber.png';
import Background from 'public/assets/img/layout/home/stackbg.svg';

interface StackSectionProps {
  title: string[];
  p: string;
  ends: Array<{
    label: string;
    title: string;
  }>;
  sticker: string;
  lastP: string;
}

export const StackSection: React.FC<StackSectionProps> = ({
  title,
  p,
  ends,
  lastP,
  sticker,
}) => {
  return (
    <div className="bg-background text-white">
      <OverlapLayout className="border-card-border content-center overflow-hidden border-t">
        <OverlapLayout.Header>
          <Fade triggerOnce>
            <Title as="h2">
              {title[0]}
              <span className="block max-w-[12ch] sm:max-w-[25ch] sm:text-right">
                {title[1]}
              </span>
            </Title>
          </Fade>
        </OverlapLayout.Header>
        <OverlapLayout.Content>
          <Fade triggerOnce>
            <Paragraph className="pb-4 md:pb-18">{p}</Paragraph>
          </Fade>
        </OverlapLayout.Content>

        <div className="col-span-full col-start-1 flex flex-col sm:col-span-10 sm:col-start-2">
          {/* Cards Layout */}
          <div className="relative grid grid-cols-1 gap-5 md:grid-cols-4">
            <Background className="absolute inset-x-0 bottom-0 z-1 mx-auto w-full max-w-[300px] md:hidden" />
            {/* Frontend Card - Top */}
            <div className="z-2 md:col-span-2 md:col-start-2">
              <Fade triggerOnce>
                <div className="card h-[140px] overflow-hidden rounded-3xl md:h-[166px]">
                  <div className="flex h-full items-center justify-between">
                    <div className="flex flex-1 flex-col p-6 sm:gap-2 sm:p-8 lg:translate-x-[15%] lg:text-center">
                      <span className="text-over-black text-sm lg:text-base">
                        Frontend
                      </span>
                      <h3 className="text-lg lg:text-xl">Next.js (React)</h3>
                    </div>
                    <div className="order-last flex h-full flex-shrink-0 items-center">
                      <Image
                        src={Front}
                        alt="Frontend"
                        width={166}
                        height={166}
                        className="h-full w-auto object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            {/* Bottom Row */}
            <div className="z-2 md:col-span-full">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Backend Card */}
                <Fade delay={100} triggerOnce>
                  <div className="primary-card h-[140px] overflow-hidden rounded-3xl md:h-[166px]">
                    <div className="flex h-full items-center justify-between">
                      <div className="order-first flex h-full flex-shrink-0 items-center">
                        <Image
                          src={Back}
                          alt="Backend"
                          width={166}
                          height={166}
                          className="h-full w-auto max-w-[128px] object-cover object-right lg:max-w-[178px]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6 text-right sm:gap-2 sm:p-8">
                        <span className="text-over-black text-sm lg:text-base">
                          Backend
                        </span>
                        <h3 className="text-lg leading-tight lg:text-xl">
                          Serverless{' '}
                          <span className="whitespace-nowrap"> / Nestjs</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Fade>

                {/* Deploy Card */}
                <Fade delay={200} triggerOnce>
                  <div className="card h-[140px] overflow-hidden rounded-3xl md:h-[166px]">
                    <div className="flex h-full items-center justify-between">
                      <div className="flex flex-1 flex-col p-6 text-left sm:gap-2 sm:p-8">
                        <span className="text-over-black text-sm lg:text-base">
                          Deploy
                        </span>
                        <h3 className="text-lg leading-tight lg:text-xl">
                          Vercel{' '}
                          <span className="whitespace-nowrap">+ AWS</span>
                        </h3>
                      </div>
                      <div className="order-last flex h-full max-w-[120px] flex-shrink-0 items-center sm:max-w-[220px]">
                        <Image
                          src={Deploy}
                          alt="Deploy"
                          width={166}
                          height={166}
                          className="h-full w-auto object-cover object-left"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              {/* AI Circle - Positioned absolutely relative to entire grid in desktop */}
              <div className="relative mt-10 flex justify-center md:absolute md:top-1/2 md:left-1/2 md:z-10 md:mt-0 md:-translate-x-1/2 md:-translate-y-[35%]">
                <Fade delay={300} triggerOnce>
                  <div className="flex h-[140px] w-[140px] -rotate-6 flex-col items-center justify-center rounded-full border-1 border-[#666666] bg-[#2F333C] p-2 text-center shadow-[0_0_19px_rgba(0,0,0,0.3)] md:h-[100px] md:w-[100px]">
                    <Image src={AI} alt="AI" width={26} height={26} />
                    <span className="mb-[5px] max-w-[10ch] text-base md:text-xs md:font-medium">
                      {sticker}
                    </span>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          {/* Companies Section */}
          <Fade triggerOnce>
            <div className="mt-10 flex flex-col items-center text-center sm:mt-20">
              <p className="mb-8 max-w-[25ch] text-sm text-[#7D7D7D] sm:max-w-[50ch] sm:text-base">
                {lastP}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 gap-y-6 px-10 sm:gap-12 sm:gap-y-7">
                <Image
                  src={Spotify}
                  alt="Spotify"
                  width={0}
                  height={32}
                  className="h-[22px] w-auto sm:h-[32px]"
                />
                <Image
                  src={Apple}
                  alt="Apple"
                  width={0}
                  height={32}
                  className="h-[22px] w-auto sm:h-[32px]"
                />
                <Image
                  src={Netflix}
                  alt="Netflix"
                  width={0}
                  height={32}
                  className="h-[22px] w-auto sm:h-[32px]"
                />
                <Image
                  src={Uber}
                  alt="Uber"
                  width={0}
                  height={32}
                  className="h-[22px] w-auto sm:h-[32px]"
                />
                <Image
                  src={Tiktok}
                  alt="Tiktok"
                  width={0}
                  height={32}
                  className="h-[22px] w-auto sm:h-[32px]"
                />
              </div>
            </div>
          </Fade>
        </div>
      </OverlapLayout>
    </div>
  );
};
