import React from 'react';
import { Fade } from 'react-awesome-reveal';
import PageWrapper from 'components/layout/PageWrapper';
import Head from 'components/layout/Head/Head';
import PinnedSection from 'components/shared/pinnedSections/PinnedSection';
import MetalFooter from 'components/layout/footers/MetalFooter';

const TechLeadersConfirmation = () => {
  return (
    <PageWrapper>
      <Head
        title="Registro confirmado - Tech Leaders Meetup"
        description="Tu registro al Tech Leaders Meetup ha sido confirmado. Te esperamos en San Ángel, Ciudad de México."
        headerTitle="Registro confirmado"
        es_canonical="https://acueducto.studio/tech-leaders/confirmation"
        noIndex
      />
      <div className="pb-0 [&_.scroll-down]:flex [&_.scroll-down]:justify-center">
        <PinnedSection title={'¡registro confirmado!'}>
          <Fade triggerOnce>
            <div className="text-success border-success bg-success_background mx-auto max-w-[600px] rounded-[30px] border-2 px-[45px] py-[40px] text-center text-[1.8rem]">
              <h1 className="mb-8 block text-[3.5rem] leading-[110%] font-light">
                ¡gracias por registrarte!
              </h1>
              <p className="my-4">
                Te hemos enviado un correo
                <br /> con los detalles del Meetup.
              </p>
              <p className="my-4">¡Nos vemos pronto!</p>
            </div>
          </Fade>
        </PinnedSection>
      </div>
      <MetalFooter />
    </PageWrapper>
  );
};

export default TechLeadersConfirmation;
