import { useLocalizedContent } from 'utils/useLocalizedContent';
import ssrLocale from 'utils/ssrLocale';
import Head from 'components/layout/Head/Head';
import TitleSection from 'components/shared/TitleSection';
import CaseList from 'components/pages/work/CaseList';
import PageWrapper from 'components/layout/PageWrapper';
import ContactFooter from 'components/layout/footers/ContactFooter';
import { PageProps } from 'types/PageProps';

export default function Work({ locale, setTitle, pt }: PageProps) {
  const t = useLocalizedContent({
    locale,
    fileName: 'work',
    initialContent: pt,
    onTitleChange: setTitle,
  });

  return (
    <PageWrapper>
      <Head
        {...t.head}
        es_canonical={'https://acueducto.studio/portafolio'}
        en_canonical={'https://acueducto.studio/en/work'}
      />
      <TitleSection {...t.intro} />
      <CaseList cases={t.caseStudies} limit={6} locale={locale} />
      <ContactFooter />
    </PageWrapper>
  );
}
export const getStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: 'work.json' });
  return {
    props: {
      pt,
    },
  };
};
