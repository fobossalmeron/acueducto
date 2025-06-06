import { useLocalizedContent } from 'utils/useLocalizedContent';
import { GetStaticProps } from 'next';
import ssrLocale from 'utils/ssrLocale';
import Head from 'components/layout/Head/Head';
import PageWrapper from 'components/layout/PageWrapper';
import MetalFooter from 'components/layout/footers/MetalFooter';
import ContactForm from 'components/pages/contacto/ContactForm';
import { PageProps } from 'types/PageProps';
import { SplitLayout } from 'components/layout/layouts';
import { Title } from 'components/ui';
import { Fade } from 'react-awesome-reveal';
export default function Contact({ locale, setTitle, pt }: PageProps) {
  const t = useLocalizedContent({
    locale,
    fileName: 'contact',
    initialContent: pt,
    onTitleChange: setTitle,
  });

  return (
    <PageWrapper>
      <Head
        {...t.head}
        es_canonical={'https://acueducto.studio/contacto'}
        en_canonical={'https://acueducto.studio/en/contact'}
        noIndex
      ></Head>
      <SplitLayout>
        <SplitLayout.Header>
          <Fade triggerOnce>
            <Title>{t.intro.title}</Title>
          </Fade>
        </SplitLayout.Header>
        <SplitLayout.Content>
          <Fade triggerOnce>
            <ContactForm text={t.form} intro={t.intro} />
          </Fade>
        </SplitLayout.Content>
      </SplitLayout>
      <MetalFooter />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: 'contact.json' });
  return {
    props: {
      pt,
    },
  };
};
