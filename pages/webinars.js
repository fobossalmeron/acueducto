import React, { useEffect } from "react";
import Head from "components/layout/Head";
import PageClipper from "components/layout/PageClipper";
import ContactFooter from "components/shared/footers/ContactFooter";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Webinars({ locale, setTitle }) {
  useEffect(() => {
    setTitle("webinars");
  }, [locale]);
  return (
    <PageClipper>
      <Head
        title="Nuestros Webinars - Acueducto"
        description="Inscríbete a nuestros próximos webinars"
        headerTitle="Webinars"
        es_canonical={"https://acueducto.studio/webinars"}
      />
      <PinnedSection title="próximos webinars">
        <Fade triggerOnce>
          <Webinar>
            <iframe
              src="https://lu.ma/embed-checkout/evt-JD3veO6QwHNzH6B"
              width="100%"
              height="820"
              allowFullScreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Webinar>
        </Fade>
      </PinnedSection>
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(Webinars);

const Webinar = styled.div`
  border-radius: 45px;
  overflow: hidden;
  background-color: white;
`;