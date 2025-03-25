import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import { useLocalizedContent } from 'utils/useLocalizedContent';
import ssrLocale from 'utils/ssrLocale';

import Head from 'components/layout/Head/Head';
import ContactFooter from 'components/layout/footers/ContactFooter';
import { P } from 'components/shared/Dangerously';

import NextStudy from 'components/pages/work/NextStudy';
import { SeoH1, SeoH2 } from 'components/pages/work/SEOHeadings';
import { IntroVideoPadded } from 'components/pages/work/IntroVideo';
import Marquee from 'components/pages/work/Marquee';
import Quote from 'components/pages/work/Quote';
import TextColumn from 'components/pages/work/TextColumn';
import Picture from 'components/pages/work/Picture';

import LogoBlockstem from 'public/assets/img/casestudies/blockstem/logoBlockstem.svg';
import Brand1 from 'public/assets/img/casestudies/blockstem/Brand1.svg';

import {
  PageClipperBlockstem,
  LandSection,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  SeventhSection,
  WhitepaperGrid,
  Stat,
  StatGrid,
  ScreenGrid,
  TransitionWrapper,
  KeyShotGrid,
  SpanContainer,
  Aspect,
  LogosContainer,
  Lesson,
  LessonContainer,
} from 'components/pages/work/blockstem/Blockstem.styles';

interface BlockstemProps {
  locale: string;
  setTitle: (title: string) => void;
  pt: any;
}

function Blockstem({ locale, setTitle, pt }: BlockstemProps) {
  const [loadAssets, setloadAssets] = useState<boolean>(false);

  useEffect(() => {
    setloadAssets(true);
  }, []);

  const t = useLocalizedContent({
    locale,
    fileName: 'work_blockstem',
    initialContent: pt,
    onTitleChange: setTitle,
  });

  return (
    <PageClipperBlockstem unPadded>
      <Head
        {...t.head}
        image={{ fileName: 'og_image_blockstem.png', alt: t.head.image_alt }}
        es_canonical={'https://acueducto.studio/portafolio/blockstem'}
        en_canonical={'https://acueducto.studio/en/work/blockstem'}
      />
      <Fade triggerOnce>
        <LandSection>
          <Fade delay={300} triggerOnce>
            <LogoBlockstem />
            <SeoH1>{t.head.seo_h1}</SeoH1>
          </Fade>
        </LandSection>
      </Fade>
      <FirstSection>
        {loadAssets && <Marquee tags={t.intro_section.tags} />}
        <IntroVideoPadded backgroundColor={'#ffffff'} link={t.link} />
        <SeoH2>{t.head.description}</SeoH2>
        <TextColumn>
          <P className="h2">{t.intro_section.title}</P>
          <P>{t.intro_section.p}</P>
          <LessonContainer>
            {t.intro_section.lessons.map((lesson, i) => (
              <Lesson key={`lessn${i}`}>
                <span>{lesson.title}</span>
                <p>{lesson.p}</p>
              </Lesson>
            ))}
          </LessonContainer>
        </TextColumn>
      </FirstSection>
      <SecondSection>
        <Quote quote={t.second_section.quote} color={'#1F2A2D'} />
        <TextColumn>
          {loadAssets && (
            <LogosContainer>
              <img
                src="/assets/img/casestudies/blockstem/tec.svg"
                alt="Tecnológico de Monterrey"
              />
              <img
                src="/assets/img/casestudies/blockstem/global.svg"
                alt="Global Shapers Community"
              />
            </LogosContainer>
          )}

          <P>{t.second_section.p}</P>
        </TextColumn>
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <P className="h2">{t.third_section.title}</P>
          <P>{t.third_section.p}</P>
          {t.third_section.aspects.map((aspect, i) => (
            <Aspect key={`aspect${i}`}>
              <span>{i + 1}</span>
              <p>{aspect.p}</p>
            </Aspect>
          ))}
          <P>{t.third_section.p2}</P>
        </TextColumn>
        <WhitepaperGrid>
          <Picture
            src="/assets/img/casestudies/blockstem/cover.jpg"
            alt="Whitepaper cover"
            width={544}
            height={395}
          />

          <Picture
            src="/assets/img/casestudies/blockstem/small1.jpg"
            alt="Whitepaper page"
            width={306}
            height={223}
          />
          <Picture
            src="/assets/img/casestudies/blockstem/small2.jpg"
            alt="Whitepaper page"
            width={306}
            height={223}
          />
          <Picture
            src="/assets/img/casestudies/blockstem/small3.jpg"
            alt="Whitepaper page"
            width={306}
            height={223}
          />
          <Picture
            src="/assets/img/casestudies/blockstem/small4.jpg"
            alt="Whitepaper page"
            width={306}
            height={223}
          />
        </WhitepaperGrid>
        <TextColumn>
          <P className="h3">{'– ' + t.third_section.subtitle}</P>
          <P>{t.third_section.p3}</P>
        </TextColumn>
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <P>{t.fourth_section.p}</P>
          <SpanContainer>
            <span>{t.fourth_section.body}</span>
            <span>{t.fourth_section.titles}</span>
          </SpanContainer>
          <Brand1 />
        </TextColumn>
        <KeyShotGrid>
          <Picture
            src="/assets/img/casestudies/blockstem/conversation.png"
            alt="Conversation"
            width={270}
            height={270}
            withWrapper
          />
          <Picture
            src="/assets/img/casestudies/blockstem/ballot.png"
            alt="Ballot"
            width={270}
            height={270}
            withWrapper
          />
          <Picture
            src="/assets/img/casestudies/blockstem/latam.png"
            alt="LATAM"
            width={270}
            height={270}
            withWrapper
          />
        </KeyShotGrid>
      </FourthSection>
      <FifthSection>
        <TransitionWrapper>
          <Picture
            src="/assets/img/casestudies/blockstem/transition.jpg"
            alt="Ballot cover"
            width={1150}
            height={612}
          />
        </TransitionWrapper>
        <ScreenGrid>
          <Picture
            src="/assets/img/casestudies/blockstem/leftphone.png"
            alt="Blockstem homepage mobile"
            width={300}
            height={628}
          />
          <Picture
            src="/assets/img/casestudies/blockstem/rightphone.png"
            alt="Blockstem page mobile"
            width={300}
            height={628}
          />
          <Picture
            src="/assets/img/casestudies/blockstem/mac.png"
            alt="Blockstem homepage desktop"
            width={1010}
            height={650}
          />
        </ScreenGrid>
      </FifthSection>
      <SixthSection>
        <TextColumn>
          <P className="h2">{t.sixth_section.title}</P>
          <P>{t.sixth_section.p}</P>
          <StatGrid>
            <Stat>
              <span>
                <b>+</b>950
              </span>{' '}
              <P>{t.sixth_section.stat1}</P>
            </Stat>
            <Stat>
              <span>7</span> <P>{t.sixth_section.stat2}</P>
            </Stat>
          </StatGrid>
          <Quote quote={t.sixth_section.quote} color={'#1F2A2D'} />
          <div className="lastP">
            <P>{t.sixth_section.p2}</P>
          </div>
        </TextColumn>
      </SixthSection>
      <SeventhSection>
        <Picture
          src="/assets/img/casestudies/blockstem/main-bg.png"
          alt="Blockstem ballots"
          width={979}
          height={853}
        />
        <Fade triggerOnce>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://blockstem.org"
          >
            {t.seventh_section.linkp} blockstem.org
          </a>
        </Fade>
      </SeventhSection>
      <NextStudy link="borgatta" />
      <ContactFooter />
    </PageClipperBlockstem>
  );
}

export default React.memo(Blockstem);

export const getStaticProps = async (context: { locale: string }) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: 'work_blockstem.json',
  });
  return {
    props: {
      pt,
    },
  };
};
