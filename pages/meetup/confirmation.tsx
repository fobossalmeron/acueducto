import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import PageWrapper from 'components/layout/PageWrapper';
import Head from 'components/layout/Head';
import PinnedSection from 'components/shared/pinnedSections/PinnedSection';
import MetalFooter from 'components/layout/footers/MetalFooter';

const t = {
  head: {
    title: "Registro confirmado - Tech Leaders Meetup",
    description: "Tu registro al Tech Leaders Meetup ha sido confirmado. Te esperamos en San Ángel, Ciudad de México.",
    headerTitle: "Registro confirmado",
  },
};

const TechLeadersConfirmation = () => {
  return (
    <PageWrapper>
      <Head 
        {...t.head}
        es_canonical={"https://acueducto.studio/tech-leaders/confirmation"}
        noIndex
      />
      <CustomPinnedSection title={"¡registro confirmado!"}>
        <Fade triggerOnce>
          <Message>
            <h1>¡gracias por registrarte!</h1>
            <ul>
              <li>San Ángel, Ciudad de México</li>
              <li>Jueves 30 de enero del 2025</li>
            </ul>
            <p>Te hemos enviado un correo con los detalles del evento.</p>
            <p>¡Nos vemos!</p>
          </Message>
        </Fade>
      </CustomPinnedSection>
      <MetalFooter />
    </PageWrapper>
  );
};

export default TechLeadersConfirmation;

const Message = styled.div`
  color: ${(p) => p.theme.colors.success};
  border: 2px solid ${(p) => p.theme.colors.success};
  background-color: ${(p) => p.theme.colors.success_background};
  border-radius: 30px;
  font-size: 1.8rem;
  padding: 40px 45px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  h1 {
    all: unset;
    font-size: 3.5rem;
    line-height: 110%;
    display: block;
    margin-bottom: 2rem;
    font-weight: 300;
  }

  ul {
    margin: 2rem 0;
    text-decoration: none;
    list-style: none;
    li {
      text-decoration: none;
      list-style: none;
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  p {
    color: inherit;
    margin: 1rem 0;
  }

  @media (max-width: 600px), (max-height: 450px) {
    font-size: 1.6rem;
    padding: 30px 35px;
    
    h1 {
      font-size: 2.8rem;
    }
  }
`;

const CustomPinnedSection = styled(PinnedSection)`
  .scroll-down {
    justify-content: center;
  }
  padding-bottom: 0;
`; 