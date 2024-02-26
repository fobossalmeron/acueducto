import Head from "components/layout/Head";
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import PageWrapper from "components/layout/PageWrapper";
import TitleSection from "components/shared/TitleSection";
import ContactFooter from "components/shared/footers/ContactFooter";

export default function Error({ locale, setTitle, pt }) {
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "404.json",
      callBack: (nT) => {
        setT(nT);
        setTitle("Error 404");
      },
    });
  }, [locale]);

  return (
    <PageWrapper>
      <Head
        title="Acueducto | 404"
        description={t.description}
        headerTitle="Error 404"
        es_canonical={"https://acueducto.studio/404"}
        en_canonical={"https://acueducto.studio/en/404"}
        noIndex
      />
      <TitleSection {...t.intro} heading={1}/>
      <ContactFooter />
    </PageWrapper>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "404.json" });
  return {
    props: {
      pt,
    },
  };
};
