import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import Head, { HeadProps } from "components/layout/Head";
import PageWrapper from "components/layout/PageWrapper";
import DiagnosticoDigitalPage from "components/pages/diagnosticoDigital/DiagnosticoDigitalPage";
import ContactFooter from "components/layout/footers/ContactFooter";
import TitleSection from "components/shared/TitleSection";

interface DiagnosticoDigitalProps {
  locale: string;
  setTitle: (title: string) => void;
  pt: {
    head: HeadProps;
    intro: {
      title: string;
      [key: string]: any;  // Para otras propiedades que pueda tener intro
    };
    diagnose_section: any;  // Tipo más específico si se conoce la estructura
    results_section: any;  // Tipo más específico si se conoce la estructura
  };
}

const DiagnosticoDigital: React.FC<DiagnosticoDigitalProps> = ({ locale, setTitle, pt }) => {
  const { head, intro, diagnose_section, results_section } = pt;

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale, head.headerTitle, setTitle]);

  return (
    <PageWrapper>
      <Head
        {...head}
        image={{ fileName: "og_image_diagnostico.png", alt: head.image.alt }}
        es_canonical="https://acueducto.studio/diagnostico"
        noIndex
      />
      <TitleSection {...intro} heading={1}/>
      <DiagnosticoDigitalPage
        diagnose_section={diagnose_section}
        results_section={results_section}
      />
      <ContactFooter />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
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

export default DiagnosticoDigital;
