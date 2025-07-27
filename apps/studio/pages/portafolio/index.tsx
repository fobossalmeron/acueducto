import { useLocalizedContent } from '@acueducto/shared/utils/useLocalizedContent';
import ssrLocale from '@acueducto/shared/utils/ssrLocale';
import Head from '@acueducto/shared/components/layout/Head/Head';
import TitleSection from '@acueducto/shared/components/shared/TitleSection';
import CaseList from '@acueducto/shared/components/pages/work/CaseList';
import PageWrapper from '@acueducto/shared/components/layout/PageWrapper';
import ContactFooter from '@acueducto/shared/components/layout/footers/ContactFooter';
import { PageProps } from '@acueducto/shared/types/PageProps';

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
