import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { useTheme } from 'styled-components';

import Head from 'components/layout/Head/Head';
import PageWrapper from 'components/layout/PageWrapper';
import ContactFooter from 'components/layout/footers/ContactFooter';
import NextStudy from 'components/pages/work/NextStudy';
import { P } from 'components/shared/Dangerously';
import { SeoH1, SeoH2 } from 'components/pages/work/SEOHeadings';
import { IntroVideo } from 'components/pages/work/IntroVideo';
import Marquee from 'components/pages/work/Marquee';
import Quote from 'components/pages/work/Quote';
import TextColumn from 'components/pages/work/TextColumn';
import Picture from 'components/pages/work/Picture';

import { useLocalizedContent } from 'utils/useLocalizedContent';
import ssrLocale from 'utils/ssrLocale';

import { Fade } from 'react-awesome-reveal';

import LogoRahid from 'public/assets/img/casestudies/rahid/logoRahid.svg';

import {
  rahidBackground,
  LaunchGrid,
  InsertBlock,
  Applications,
  Branding,
  Stat,
  SixthSection,
  FifthSection,
  FourthSection,
  ThirdSection,
  SecondSection,
  OldBrand,
  FirstSection,
  LandSection,
} from 'components/pages/work/rahid/Rahid.styles';
import { PageProps } from 'types/PageProps';

function Rahid({ locale, setTitle, pt }: PageProps): React.ReactElement {
  const [loadAssets, setloadAssets] = useState<boolean>(false);
  const theme = useTheme();
  const backgroundColor = theme.colors.background;

  const t = useLocalizedContent({
    locale,
    fileName: 'work_rahid',
    initialContent: pt,
    onTitleChange: setTitle,
  });

  useEffect(() => {
    setloadAssets(true);
  }, []);

  return (
    <PageWrapper unPadded>
      <Head
        {...t.head}
        image={{ fileName: 'og_image_rahid.png', alt: t.head.image_alt }}
        es_canonical={'https://acueducto.studio/portafolio/rahid'}
        en_canonical={'https://acueducto.studio/en/work/rahid'}
      />
      <Fade triggerOnce>
        <LandSection>
          <Fade delay={300} triggerOnce>
            <LogoRahid />
            <SeoH1>{t.head.seo_h1}</SeoH1>
          </Fade>
        </LandSection>
      </Fade>
      <FirstSection>
        <Marquee tags={t.intro_section.tags} />
        <IntroVideo link={t.link} />
        <SeoH2>{t.head.description}</SeoH2>
        <TextColumn>
          <P className="h2">{t.intro_section.title}</P>
          <P>{t.intro_section.p}</P>
          <OldBrand>
            {loadAssets && (
              <img
                src="/assets/img/casestudies/rahid/oldLogo.svg"
                alt="El Rahid"
              />
            )}
            <p>{t.intro_section.graphicp}</p>
          </OldBrand>
          <P>{t.intro_section.p2}</P>
        </TextColumn>
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <P className="h3">{'– ' + t.second_section.subtitle}</P>
          <P>{t.second_section.p}</P>
        </TextColumn>
        <Quote quote={t.second_section.quote} color={rahidBackground} />
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <P className="h2">{t.third_section.title}</P>
          <P>{t.third_section.p}</P>
        </TextColumn>
        <Branding>
          <Fade triggerOnce>
            <div>
              {t.third_section.spans.map((span, index) => (
                <span key={index + 'span'}>{span}</span>
              ))}
              {loadAssets && (
                <img
                  src="/assets/img/casestudies/rahid/brandGroup.svg"
                  alt="Branding"
                />
              )}
            </div>
          </Fade>
        </Branding>
        <Applications>
          <Picture
            src="/assets/img/casestudies/rahid/box.png"
            alt="Packaging: Rahid"
            width={279}
            height={261}
          />
          <Picture
            src="/assets/img/casestudies/rahid/fb.jpg"
            alt="Facebook Post: Rahid"
            width={372}
            height={579}
          />
          <Picture
            src="/assets/img/casestudies/rahid/ig.jpg"
            alt="Instagram Post: Rahid"
            width={465}
            height={298}
          />
        </Applications>
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <P className="h3">{'– ' + t.fourth_section.subtitle}</P>
          <P>{t.fourth_section.p}</P>
          <Picture
            src="/assets/img/casestudies/rahid/home.jpg"
            alt="Home Rahid.co"
            width={800}
            height={412}
            withWrapper
          />
          <P>{t.fourth_section.p2}</P>
        </TextColumn>
        <InsertBlock>
          <Picture
            src="/assets/img/casestudies/rahid/boxes.png"
            alt="Home Rahid.co"
            width={960}
            height={754}
          />
          <P>{t.fourth_section.graphicp}</P>
        </InsertBlock>
        <TextColumn>
          <P>{t.fourth_section.p3}</P>
        </TextColumn>
      </FourthSection>
      <FifthSection>
        <TextColumn>
          <P className="h2">{t.fifth_section.title}</P>
          <P>{t.fifth_section.p}</P>
        </TextColumn>
        <LaunchGrid>
          <Picture
            src="/assets/img/casestudies/rahid/desktop.png"
            alt="Festival awards"
            width={558}
            height={340}
            withWrapper
          />
          <Picture
            src="/assets/img/casestudies/rahid/mobile.png"
            alt="Festival awards"
            width={162}
            height={339}
            withWrapper
          />
        </LaunchGrid>
        <TextColumn>
          <P>{t.fifth_section.p2}</P>
          <Stat>
            <span>
              77<b>%</b>
            </span>
            <P>{t.fifth_section.stat}</P>
          </Stat>
          <P>{t.fifth_section.p3}</P>
        </TextColumn>
        <Picture
          src="/assets/img/casestudies/rahid/referral.jpg"
          alt="Email Marketing"
          width={800}
          height={450}
        />

        <TextColumn>
          <P>{t.fifth_section.p4}</P>
        </TextColumn>
        <Quote quote={t.fifth_section.quote} color={backgroundColor} />
        <TextColumn>
          <P>{t.fifth_section.p5}</P>
        </TextColumn>
      </FifthSection>
      <SixthSection>
        <Fade triggerOnce>
          <a target="_blank" rel="noopener noreferrer" href="https://rahid.co">
            {t.sixth_section.linkp} rahid.co
          </a>
        </Fade>
      </SixthSection>
      <NextStudy link="ladanzadelasfieras" />
      <ContactFooter />
    </PageWrapper>
  );
}

export default React.memo(Rahid);

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({
    locale: context.locale as string,
    fileName: 'work_rahid.json',
  });
  return {
    props: {
      pt,
    },
  };
};
