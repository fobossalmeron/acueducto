import Head from '@acueducto/shared/components/layout/Head/Head';
import { useLocalizedContent } from '@acueducto/shared';
import ssrLocale from '../utils/ssrLocale';
import { GetStaticProps } from 'next';
import PageWrapper from '@acueducto/shared/components/layout/PageWrapper';
import TitleSection from '@acueducto/shared/components/shared/TitleSection';
import ContactFooter from '@acueducto/shared/components/layout/footers/ContactFooter';
import { PageProps } from '@acueducto/shared/types/PageProps';

export default function Error({ locale, setTitle, pt }: PageProps) {
  const t = useLocalizedContent({
    locale,
    fileName: '404',
    initialContent: pt,
    onTitleChange: setTitle,
  });

  return (
    <PageWrapper>
      <Head
        title="Acueducto | 404"
        description={t.description}
        headerTitle="Error 404"
        es_canonical={'https://acueducto.studio/404'}
        en_canonical={'https://acueducto.studio/en/404'}
        noIndex
      />
      <TitleSection {...t.intro} heading={1} />
      <ContactFooter />
    </PageWrapper>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: '404.json' });
  return {
    props: {
      pt,
    },
  };
};
