import React, { useEffect } from 'react';
import Head from 'components/layout/Head/Head';
import PageWrapper from 'components/layout/PageWrapper';
import ContactFooter from 'components/layout/footers/ContactFooter';
import PinnedSection from 'components/shared/pinnedSections/PinnedSection';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

interface WebinarsProps {
  locale: string;
  setTitle: (title: string) => void;
}

function Webinars({ locale, setTitle }: WebinarsProps) {
  useEffect(() => {
    setTitle('webinars');
  }, [locale]);
  return (
    <PageWrapper>
      <Head
        title="Nuestros Webinars - Acueducto"
        description="Inscríbete a nuestros próximos webinars"
        headerTitle="Webinars"
        es_canonical={'https://acueducto.studio/webinars'}
        noIndex
      />
      <PinnedSection title="próximos webinars" heading={1}>
        <Fade triggerOnce>
          <Webinar>
            <iframe
              src="https://lu.ma/embed-checkout/evt-JD3veO6QwHNzH6B"
              width="100%"
              height="820"
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </Webinar>
        </Fade>
      </PinnedSection>
      <ContactFooter />
    </PageWrapper>
  );
}

export default React.memo(Webinars);

const Webinar = styled.div`
  border-radius: 45px;
  overflow: hidden;
  background-color: white;
`;
