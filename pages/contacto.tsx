import { useLocalizedContent } from "utils/useLocalizedContent";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import styled from "styled-components";
import Head from "components/layout/Head";
import PageWrapper from "components/layout/PageWrapper";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";
import MetalFooter from "components/shared/footers/MetalFooter";
import ContactForm from "components/ContactForm";

export default function Contact({ locale, setTitle, pt }) {
  const t = useLocalizedContent({
    locale,
    fileName: "contact",
    initialContent: pt,
    onTitleChange: setTitle,
  });

  return (
    <PageWrapper>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio/contacto"}
        en_canonical={"https://acueducto.studio/en/contact"}
        noIndex
      ></Head>
      <CustomPinnedSection title={t.intro.title} id="Scroll" heading={1}>
        <p>
          {t.intro.p2} <br />
          <a
            href={`mailto:hola@acueducto.studio?subject=${t.intro.mailto.subject}&body=${t.intro.mailto.body}`}
          >
            hola@acueducto.studio
          </a>
        </p>
        <ContactForm text={t.form} />
      </CustomPinnedSection>
      <MetalFooter />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "contact.json" });
  return {
    props: {
      pt,
    },
  };
};

const CustomPinnedSection = styled(PinnedSection)`
  a {
    line-height: 165%;
  }
  // > div > div:nth-of-type(1) a {
  //   position: relative;
  //   padding-left: 35px;
  //   svg {
  //     width: 35px;
  //     height: 35px;
  //     position: absolute;
  //     top: 0;
  //     background-color: ${(p) => p.theme.colors.background};
  //     padding-right: 10px;
  //     padding-bottom: 5px;
  //     left: 0;
  //   }
  // }
`;
