import Image from 'next/legacy/image';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import Head from 'components/layout/Head/Head';
import { IntroVideo } from 'components/pages/work/IntroVideo';
import Marquee from 'components/pages/work/Marquee';
import NextStudy from 'components/pages/work/NextStudy';
import Picture from 'components/pages/work/Picture';
import { SeoH2 } from 'components/pages/work/SEOHeadings';
import TextColumn from 'components/pages/work/TextColumn';
import AnimatedDataCards from 'components/pages/work/wellmee/AnimationDataCards';
import AnimationScrollCards from 'components/pages/work/wellmee/AnimationScrollCards';
import AnimationSlideCards from 'components/pages/work/wellmee/AnimationSlideCards';
import LandSectionWellmee from 'components/pages/work/wellmee/LandSectionWellmee';
import UIComponentsAnimation from 'components/pages/work/wellmee/AnimationUIComponents';
import { P } from 'components/shared/Dangerously';
import ContactFooter from 'components/layout/footers/ContactFooter';

import Combinator from 'public/assets/img/casestudies/wellmee/Combinator.png';
import Iphone from 'public/assets/img/casestudies/wellmee/Iphone1.png';
import Iphone2 from 'public/assets/img/casestudies/wellmee/Iphone2.png';
import Point4 from 'public/assets/img/casestudies/wellmee/Point4.png';

import { useIsMobile } from 'utils/useIsMobile';
import { useLocalizedContent } from 'utils/useLocalizedContent';
import ssrLocale from 'utils/ssrLocale';

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
} from 'components/pages/work/wellmee/Wellmee.styles';

interface WellmeeProps {
  locale: string;
  setTitle: (title: string) => void;
  pt: any;
}

const Wellmee: React.FC<WellmeeProps> = ({ locale, setTitle, pt }) => {
  const [loadAssets, setLoadAssets] = useState(false);
  const isMobile = useIsMobile();

  console.log('Wellmee - Initial render:', { locale, hasInitialContent: !!pt });

  const t = useLocalizedContent({
    locale,
    fileName: 'work.wellmee',
    initialContent: pt,
    onTitleChange: setTitle,
  });

  // Si no hay contenido, mostrar 404
  if (!t) {
    console.log('No content available, returning 404');
    return null; // Next.js mostrará la página 404 automáticamente
  }

  useEffect(() => {
    setLoadAssets(true);
  }, []);

  return (
    <PageClipperWellmee>
      <Head
        {...t.head}
        image={{ fileName: 'og_image_wellmee.png', alt: t.head.image_alt }}
        es_canonical={'https://acueducto.studio/portafolio/wellmee'}
        en_canonical={'https://acueducto.studio/en/work/wellmee'}
      />
      <Fade delay={300} triggerOnce>
        <LandSectionWellmee
          isMobile={isMobile}
          title={t.head.title}
          seo_h1={t.head.seo_h1}
        />
      </Fade>
      <FirstSection>
        {loadAssets && <Marquee tags={t.intro_section.tags} />}
        <IntroVideo link={t.link} />
        <SeoH2>{t.head.description}</SeoH2>
        <TextColumn>
          <P className="h2">{t?.intro_section.title}</P>
          <P>{t?.intro_section.p}</P>
        </TextColumn>
        <TextColumn>
          <P className="h3">
            {t?.intro_section.characteristics.first.subtitle}
          </P>
          <P>{t?.intro_section.characteristics.first.p}</P>
        </TextColumn>
        <AnimatedDataCards />
        <TextColumn>
          <P className="h3">
            {t.intro_section.characteristics.second.subtitle}
          </P>
          <P>{t.intro_section.characteristics.second.p}</P>
          <CombinatorContainer>
            <Picture src={Combinator} alt="Combinator" />
          </CombinatorContainer>
        </TextColumn>
        <TextColumn>
          <P className="h3">{t.intro_section.characteristics.third.subtitle}</P>
          <ChallengesContainer>
            {t?.intro_section.characteristics.third.challenges.map(
              (challenge: any, i: number) => (
                <Fade delay={300} triggerOnce key={`challenge${i}`}>
                  <Challenge>
                    <span>
                      <p>{i + 1}</p>
                    </span>
                    <div>
                      <p className="h5">{challenge.title}</p>
                      <p>{challenge.p}</p>
                    </div>
                  </Challenge>
                </Fade>
              ),
            )}
          </ChallengesContainer>
        </TextColumn>
        <UIComponentsAnimation isMobile={isMobile} />
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <P className="h2">{t?.second_section.title}</P>
        </TextColumn>
        {loadAssets && (
          <AnimationSlideCards t={t?.second_section} isMobile={isMobile} />
        )}
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <P className="h2">{t.third_section.title}</P>
          <PointContainer>
            <Fade delay={300} triggerOnce key={'point1'}>
              <Point style={{ paddingBottom: isMobile ? '49px' : '90px' }}>
                <div>
                  <span className="number">
                    <p>1</p>
                  </span>
                  <p>{t?.third_section.points[0].p}</p>
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
                <p>{t?.third_section.points[1].p}</p>
              </div>
            </Point>
          </Fade>
        </TextColumn>
        <Fade delay={300} triggerOnce>
          <StepContainer>
            {t?.third_section.points[1].steps.map((step: string, i: number) => (
              <Step key={`step${i}`}>
                <div>
                  <Picture
                    src={`/assets/img/casestudies/wellmee/Step${i + 1}.svg`}
                    alt="Step"
                    width={isMobile ? 37 : 48}
                    height={isMobile ? 37 : 48}
                  />
                </div>
                <p>{step}</p>
              </Step>
            ))}
          </StepContainer>
        </Fade>
        <TextColumn>
          <Fade delay={300} triggerOnce key={'point3'}>
            <Point>
              <div>
                <span className="number">
                  <p>3</p>
                </span>
                <p>{t?.third_section.points[2].p}</p>
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
                <p>{t?.third_section.points[3].p}</p>
              </div>
              <div className="point4">
                <Image src={Point4} alt="Point" />
              </div>
            </Point>
          </Fade>
        </TextColumn>
        <TextColumn>
          <P className="h3">{t.third_section.subtitle}</P>
          <P>{t.third_section.p}</P>
        </TextColumn>
        <Fade delay={300} triggerOnce>
          <ContainerResultCard>
            {t?.third_section.results.map((result: any, i: number) => (
              <div className={`result${i}`} key={`result${i}`}>
                <div>
                  {result.sign && <p className="h5">{result.sign}</p>}
                  <p className="h3">{result.title}</p>
                  <p className="h4">{i !== 1 && ' ' + result.first_subtitle}</p>
                </div>
                <p className="h4">{i === 1 && result.first_subtitle}</p>
                <p className="h4">{result.second_subtitle}</p>
                <p>{result.p}</p>
              </div>
            ))}
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
          <P className="h2">{t.fourth_section.title}</P>
          <P>{t.fourth_section.p}</P>
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
  try {
    console.log('getStaticProps - Starting:', {
      locale: context.locale,
      path: 'work.wellmee.json',
    });

    const pt = ssrLocale({
      locale: context.locale,
      fileName: 'work.wellmee.json',
    });

    if (!pt) {
      console.log('getStaticProps - No content found');
      return {
        notFound: true,
      };
    }

    console.log('getStaticProps - Success:', {
      locale: context.locale,
      hasContent: !!pt,
      contentKeys: Object.keys(pt),
    });

    return {
      props: {
        pt,
        locale: context.locale || 'es',
      },
    };
  } catch (error) {
    console.error('getStaticProps - Error:', {
      locale: context.locale,
      error,
      stack: error.stack,
    });
    return {
      notFound: true,
    };
  }
};
