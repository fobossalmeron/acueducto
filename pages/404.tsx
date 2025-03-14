import Head from 'components/layout/Head/Head';
import { useLocalizedContent } from 'utils/useLocalizedContent';
import { GetStaticProps } from 'next';
import ssrLocale from 'utils/ssrLocale';
import PageWrapper from 'components/layout/PageWrapper';
import TitleSection from 'components/shared/TitleSection';
import ContactFooter from 'components/layout/footers/ContactFooter';
import { PageProps } from 'types/PageProps';

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
