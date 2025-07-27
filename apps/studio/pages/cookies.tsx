import { useLocalizedContent } from '@acueducto/shared/utils/useLocalizedContent';
import { GetStaticProps } from 'next';
import ssrLocale from '@acueducto/shared/utils/ssrLocale';
import Head from '@acueducto/shared/components/layout/Head/Head';
import Link from 'next/link';
import PageWrapper from '@acueducto/shared/components/layout/PageWrapper';
import SimplePinnedSection from '@acueducto/shared/components/shared/pinnedSections/SimplePinnedSection';
import { P, H3 } from '@acueducto/shared/components/shared/Dangerously';
import ContactFooter from '@acueducto/shared/components/layout/footers/ContactFooter';
import { PageProps } from '@acueducto/shared/types/PageProps';

export default function Cookies({ locale, setTitle, pt }: PageProps) {
  const t = useLocalizedContent({
    locale,
    fileName: 'cookies',
    initialContent: pt,
    onTitleChange: setTitle,
  });
  let b = t.body;

  return (
    <PageWrapper>
      <Head
        {...t.head}
        es_canonical={'https://acueducto.studio/cookies'}
        en_canonical={'https://acueducto.studio/en/cookies'}
        noIndex
      />
      <SimplePinnedSection title={t.intro.title} heading={1}>
        <P>{t.intro.p}</P>
        <p>
          {b.p0}
          <Link
            href="/privacidad"
            as={locale === 'en' ? '/privacy' : '/privacidad'}
            locale={locale}
            passHref
            legacyBehavior
          >
            <a>{b.link0}</a>
          </Link>
          .
        </p>
        <h2>{b.title1}</h2>
        <p>{b.p1}</p>
        <h2>{b.title2}</h2>
        <p>{b.p2}</p>
        <h3>{b.subtitle3}</h3>
        <p>{b.p3}</p>
        <h4>{b.subsubtitle4}</h4>
        <P>{b.p4}</P>
        <h4>{b.subsubtitle6}</h4>
        <P>{b.p6}</P>
        <H3>{b.subtitle7}</H3>
        <p>{b.p7}</p>
        <h4>{b.subsubtitle8}</h4>
        <P>{b.p8}</P>
        <h2>{b.title9}</h2>
        <p>{b.p9}</p>
        <h4>{b.subsubtitle10}</h4>
        <P>{b.p10}</P>
        <h4>{b.subsubtitle11}</h4>
        <P>{b.p11}</P>
        <h4>{b.subtitle12}</h4>
        <P>{b.p12}</P>
        <h4>{b.subtitle13}</h4>
        <P>{b.p13}</P>
      </SimplePinnedSection>
      <ContactFooter />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: 'cookies.json' });
  return {
    props: {
      pt,
    },
  };
};
