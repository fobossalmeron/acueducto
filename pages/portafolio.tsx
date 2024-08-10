import { useLocalizedContent } from "utils/useLocalizedContent";
import ssrLocale from "utils/ssrLocale";
import Head from "components/layout/Head";
import TitleSection from "components/shared/TitleSection";
import CaseList from "components/caseStudy/CaseList";
import PageWrapper from "components/layout/PageWrapper";
import ContactFooter from "components/shared/footers/ContactFooter";

export default function Work({ locale, setTitle, pt }) {
  const t = useLocalizedContent({
    locale,
    fileName: "work",
    initialContent: pt,
    onTitleChange: setTitle,
  });

  return (
    <PageWrapper>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio/portafolio"}
        en_canonical={"https://acueducto.studio/en/work"}
      />
      <TitleSection {...t.intro} />
      <CaseList limit={6} />
      <ContactFooter />
    </PageWrapper>
  );
}
export const getStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "work.json" });
  return {
    props: {
      pt,
    },
  };
};
