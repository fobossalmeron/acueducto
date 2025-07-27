import Image from 'next/legacy/image';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import Head from '@acueducto/shared/components/layout/Head/Head';
import { IntroVideo } from '@acueducto/shared/components/pages/work/IntroVideo';
import Marquee from '@acueducto/shared/components/pages/work/Marquee';
import NextStudy from '@acueducto/shared/components/pages/work/NextStudy';
import Picture from '@acueducto/shared/components/pages/work/Picture';
import { SeoH2 } from '@acueducto/shared/components/pages/work/SEOHeadings';
import TextColumn from '@acueducto/shared/components/pages/work/TextColumn';
import AnimatedDataCards from '@acueducto/shared/components/pages/work/wellmee/AnimationDataCards';
import AnimationScrollCards from '@acueducto/shared/components/pages/work/wellmee/AnimationScrollCards';
import AnimationSlideCards from '@acueducto/shared/components/pages/work/wellmee/AnimationSlideCards';
import LandSectionWellmee from '@acueducto/shared/components/pages/work/wellmee/LandSectionWellmee';
import UIComponentsAnimation from '@acueducto/shared/components/pages/work/wellmee/AnimationUIComponents';
import { P } from '@acueducto/shared/components/shared/Dangerously';
import ContactFooter from '@acueducto/shared/components/layout/footers/ContactFooter';

import Combinator from 'public/assets/img/casestudies/wellmee/Combinator.png';
import Iphone from 'public/assets/img/casestudies/wellmee/Iphone1.png';
import Iphone2 from 'public/assets/img/casestudies/wellmee/Iphone2.png';
import Point4 from 'public/assets/img/casestudies/wellmee/Point4.png';

import { useIsMobile } from '@acueducto/shared/utils/useIsMobile';
import { useLocalizedContent } from '@acueducto/shared/utils/useLocalizedContent';
import ssrLocale from '@acueducto/shared/utils/ssrLocale';

import {
  PageClipperWellmee,
  FirstSection,
  CombinatorContainer,
  ChallengesContainer,
  Challenge,
  SecondSection,
  ThirdSection,
  PointContainer,
  Point,
  StepContainer,
  Step,
  ContainerResultCard,
  FourthSection,
} from '@acueducto/shared/components/pages/work/wellmee/Wellmee.styles';
import { PageProps } from '@acueducto/shared/types/PageProps';

const Wellmee = ({ locale, setTitle, pt }: PageProps) => {
  const [loadAssets, setLoadAssets] = useState(false);
  const isMobile = useIsMobile();

  const {
    head,
    intro_section,
    second_section,
    third_section,
    fourth_section,
    link,
  } = useLocalizedContent({
    locale,
    fileName: 'work_wellmee',
    initialContent: pt,
    onTitleChange: setTitle,
  });

  useEffect(() => {
    setLoadAssets(true);
  }, []);
  return (
    <PageClipperWellmee>
      <Head
        {...head}
        image={{
          fileName: 'og_image_wellmee.png',
          alt: head.image_alt || '',
        }}
        es_canonical={'https://acueducto.studio/portafolio/wellmee'}
        en_canonical={'https://acueducto.studio/en/work/wellmee'}
      />
      <Fade delay={300} triggerOnce>
        <LandSectionWellmee
          isMobile={isMobile}
          title={head.title || ''}
          seo_h1={head.seo_h1 || ''}
        />
      </Fade>
      <FirstSection>
        <Marquee tags={intro_section.tags} />
        <IntroVideo link={link} />
        <SeoH2>{head.description}</SeoH2>
        <TextColumn>
          <P className="h2">{intro_section.title || ''}</P>
          <P>{intro_section.p || ''}</P>
        </TextColumn>
        <TextColumn>
          <P className="h3">
            {intro_section.characteristics?.first?.subtitle || ''}
          </P>
          <P>{intro_section.characteristics?.first?.p || ''}</P>
        </TextColumn>
        <AnimatedDataCards />
        <TextColumn>
          <P className="h3">
            {intro_section.characteristics?.second?.subtitle || ''}
          </P>
          <P>{intro_section.characteristics?.second?.p || ''}</P>
          <CombinatorContainer>
            <Picture src={Combinator} alt="Combinator" />
          </CombinatorContainer>
        </TextColumn>
        <TextColumn>
          <P className="h3">
            {intro_section.characteristics?.third?.subtitle || ''}
          </P>
          <ChallengesContainer>
            {intro_section.characteristics?.third?.challenges?.map(
              (challenge: any, i: number) => (
                <Fade delay={300} triggerOnce key={`challenge${i}`}>
                  <Challenge>
                    <span>
                      <p>{i + 1}</p>
                    </span>
                    <div>
                      <p className="h5">{challenge?.title || ''}</p>
                      <p>{challenge?.p || ''}</p>
                    </div>
                  </Challenge>
                </Fade>
              ),
            ) || []}
          </ChallengesContainer>
        </TextColumn>
        <UIComponentsAnimation isMobile={isMobile} />
      </FirstSection>

      <SecondSection>
        <TextColumn>
          <P className="h2">{second_section?.title || ''}</P>
        </TextColumn>
        {loadAssets && (
          <AnimationSlideCards t={second_section} isMobile={isMobile} />
        )}
      </SecondSection>

      <ThirdSection>
        <TextColumn>
          <P className="h2">{third_section?.title || ''}</P>
          <PointContainer>
            <Fade delay={300} triggerOnce key={'point1'}>
              <Point style={{ paddingBottom: isMobile ? '49px' : '90px' }}>
                <div>
                  <span className="number">
                    <p>1</p>
                  </span>
                  <p>{third_section?.points?.[0]?.p || ''}</p>
                </div>
                <Picture
                  src={'/assets/img/casestudies/wellmee/Point1.png'}
                  alt="Point"
                  width={420}
                  height={263}
                />
              </Point>
            </Fade>
          </PointContainer>
        </TextColumn>
        <TextColumn>
          <Fade delay={300} triggerOnce key={'point2'}>
            <Point>
              <div>
                <span className="number">
                  <p>2</p>
                </span>
                <p>{third_section?.points?.[1]?.p || ''}</p>
              </div>
            </Point>
          </Fade>
        </TextColumn>
        <Fade delay={300} triggerOnce>
          <StepContainer>
            {third_section?.points?.[1]?.steps?.map(
              (step: string, i: number) => (
                <Step key={`step${i}`}>
                  <div>
                    <Picture
                      src={`/assets/img/casestudies/wellmee/Step${i + 1}.svg`}
                      alt="Step"
                      width={isMobile ? 37 : 48}
                      height={isMobile ? 37 : 48}
                    />
                  </div>
                  <p>{step || ''}</p>
                </Step>
              ),
            ) || []}
          </StepContainer>
        </Fade>
        <TextColumn>
          <Fade delay={300} triggerOnce key={'point3'}>
            <Point>
              <div>
                <span className="number">
                  <p>3</p>
                </span>
                <p>{third_section?.points?.[2]?.p || ''}</p>
              </div>
            </Point>
          </Fade>
        </TextColumn>
        <AnimationScrollCards isMobile={isMobile} />
        <TextColumn>
          <Fade delay={300} triggerOnce key={'point4'}>
            <Point>
              <div>
                <span className="number">
                  <p>4</p>
                </span>
                <p>{third_section?.points?.[3]?.p || ''}</p>
              </div>
              <div className="point4">
                <Image src={Point4} alt="Point" />
              </div>
            </Point>
          </Fade>
        </TextColumn>
        <TextColumn>
          <P className="h3">{third_section?.subtitle || ''}</P>
          <P>{third_section?.p || ''}</P>
        </TextColumn>
        <Fade delay={300} triggerOnce>
          <ContainerResultCard>
            {third_section?.results?.map((result: any, i: number) => (
              <div className={`result${i}`} key={`result${i}`}>
                <div>
                  {result?.sign && <p className="h5">{result.sign}</p>}
                  <p className="h3">{result?.title || ''}</p>
                  <p className="h4">
                    {i !== 1 && ' ' + (result?.first_subtitle || '')}
                  </p>
                </div>
                <p className="h4">{i === 1 && result?.first_subtitle}</p>
                <p className="h4">{result?.second_subtitle || ''}</p>
                <p>{result?.p || ''}</p>
              </div>
            )) || []}
          </ContainerResultCard>
        </Fade>
        <Fade delay={300} triggerOnce>
          <Image
            src={Iphone}
            alt="Iphone"
            width={902}
            height={492}
            placeholder="blur"
            blurDataURL={Iphone.src}
            loading="lazy"
          />
        </Fade>
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <P className="h2">{fourth_section?.title || ''}</P>
          <P>{fourth_section?.p || ''}</P>
        </TextColumn>
        <Image
          src={Iphone2}
          alt="Wellmee"
          width={914}
          height={836}
          placeholder="blur"
          blurDataURL={Iphone2.src}
          loading="lazy"
        />
      </FourthSection>
      <NextStudy link="recupera" />
      <ContactFooter />
    </PageClipperWellmee>
  );
};

export default React.memo(Wellmee);

export const getStaticProps = async (context: any) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: 'work_wellmee.json',
  });
  return {
    props: {
      pt,
    },
  };
};
