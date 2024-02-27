import React, { useEffect, useState } from "react";
import ssrLocale from "utils/ssrLocale";
import Head from "components/layout/Head";
import PageWrapper from "components/layout/PageWrapper";
import Diagnostico from "components/diagnosticoDigital/Diagnostico";
import ContactFooter from "components/shared/footers/ContactFooter";
import TitleSection from "components/shared/TitleSection";

function DiagnosticoDigital({ locale, setTitle, pt }) {
  let { head, intro, diagnose_section, results_section } = pt;

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale]);
  return (
    <PageWrapper>
      <Head
        {...head}
        image={{ fileName: "og_image_diagnostico.png", alt: head.image_alt }}
        es_canonical="https://acueducto.studio/diagnostico"
        noIndex
      />
      <TitleSection {...intro} heading={1}/>
      <Diagnostico
        diagnose_section={diagnose_section}
        results_section={results_section}
      />
      <ContactFooter />
    </PageWrapper>
  );
}
export default React.memo(DiagnosticoDigital);

export const getStaticProps = async (context) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: "diagnostico.json",
  });
  if (!pt) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      pt,
    },
  };
};
