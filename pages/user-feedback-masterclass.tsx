import PageWrapper from "components/layout/PageWrapper";
import MasterclassFeedbackForm from "components/pages/user-feedback-masterclass/MasterclassFeedbackForm";
import styled from "styled-components";
import Head from "components/layout/Head";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";

const t = {
  head: {
    title: "Ven a nuestra masterclass + sesión de networking",
    description: 'Ven a nuestra masterclass "Itera con el feedback de tus usuarios" + sesión de networking el próximo 29 de enero del 2025 en la colonia Roma Sur, Ciudad de México (ubicación a confirmar)',
    headerTitle: "Masterclass",
  },
};

const UserFeedbackMasterclass = () => {
  return (
    <PageWrapper>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio/user-feedback-masterclass"}
        noIndex
      ></Head>
      <CustomPinnedSection title={"ven a nuestra masterclass"}>
        <MasterclassFeedbackForm />
      </CustomPinnedSection>
    </PageWrapper>
  );
};

export default UserFeedbackMasterclass;

const CustomPinnedSection = styled(PinnedSection)`
  .scroll-down {
    justify-content: center;
  }
  padding-bottom: 0;
  a {
    line-height: 165%;
  }
`;
