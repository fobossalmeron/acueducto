import { useLocalizedContent } from 'utils/useLocalizedContent';
import { GetStaticProps } from 'next';
import ssrLocale from 'utils/ssrLocale';
import styled from 'styled-components';
import Head from 'components/layout/Head/Head';
import PageWrapper from 'components/layout/PageWrapper';
import PinnedSection from 'components/shared/pinnedSections/PinnedSection';
import MetalFooter from 'components/layout/footers/MetalFooter';
import ContactForm from 'components/pages/contacto/ContactForm';

export default function Contact({ locale, setTitle, pt }) {
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
      <CustomPinnedSection title={t.intro.title} heading={1}>
        <ContactForm text={t.form} intro={t.intro} />
      </CustomPinnedSection>
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

const CustomPinnedSection = styled(PinnedSection)`
  .scroll-down {
    justify-content: center;
  }
  padding-bottom: 0;
  a {
    line-height: 165%;
  }
`;
