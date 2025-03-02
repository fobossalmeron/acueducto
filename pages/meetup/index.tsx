import PageWrapper from 'components/layout/PageWrapper';
import { MeetupForm } from 'components/pages/meetup/MeetupForm';
import styled from 'styled-components';
import Head from 'components/layout/Head';
import PinnedSection from 'components/shared/pinnedSections/PinnedSection';
import MetalFooter from 'components/layout/footers/MetalFooter';
import { Button } from 'components/shared/Button/Button';
import TitleSection from 'components/shared/TitleSection';
import Image from 'next/image';
import { BottomBar } from 'components/pages/meetup/BottomBar';
import secondBg from 'public/assets/img/layout/meetup/second_bg.png';
import { SplitLandSection } from 'components/pages/meetup/SplitLandSection';
import { SplitScheduleSection } from 'components/pages/meetup/SplitScheduleSection';
import {
  Title,
  AuxiliaryTitle,
  SplitLayout,
  Paragraph,
  OverlapLayout,
} from 'components/layout/Grid';

const nextEvent = {
  date: 'Marzo 26',
  location: 'Condesa',
  title: 'Itera con el feedback de tus usuarios',
  talks: [
    {
      guest: 'Adriana Malaret',
      image: 'adriana-malaret.png',
      role: 'Head of Product @ Koltin',
      title: 'Diseñando productos centrados en el usuario',
    },
    {
      guest: 'Oscar Castillo',
      image: 'oscar-castillo.png',
      role: 'CTO @ Stealth Startup',
      title: 'Innovación en la era de la IA',
    },
    {
      guest: 'Rodrigo y Artemio',
      image: 'rodrigo-artemio.png',
      role: 'Cofundadores @ Acueducto',
      title: 'Escalando equipos de ingeniería de alto rendimiento',
    },
  ],
};

const Meetup = () => {
  return (
    <PageWrapper>
      <Head
        title="Ven a nuestro meetup para líderes de innovación en CDMX"
        description={`Ven a nuestro meetup para líderes de innovación en CDMX el próximo ${nextEvent.date}, 2025 en la colonia ${nextEvent.location}, Ciudad de México`}
        headerTitle="Innovation leaders meetup"
        es_canonical="https://acueducto.studio/meetup"
        noIndex
      />
      <SplitLandSection nextEvent={nextEvent} />
      <SplitScheduleSection />
      <PinnedSection
        seo_h1="¿de qué va?"
        title="innovation leaders meetup"
        borderTop
        className="bg-red-500"
      >
        <p>
          Una tarde de convivir con personas que piensan como tú, se enfrentan a
          retos similares y buscan ser mejores en su vida profesional. <br />
          Cada meetup se desenvuelve de la siguiente forma, y puedes unirte en
          el momento que prefieras.
        </p>
        <MeetupStep>
          <p>
            Vibra<span>(6:30 - 7:00pm)</span>
          </p>
          <p>
            Media hora para conocerse y preparase antes de las charlas. Les
            daremos name tags porque las conversaciones entre desconocidos
            pueden ser maravillosas.
          </p>
        </MeetupStep>
      </PinnedSection>
      <OverlapLayout className="border-foreground border-t">
        <OverlapLayout.Header>
          <Title className="max-w-[16ch]">¿emocionado? nosotros también</Title>
        </OverlapLayout.Header>
        <OverlapLayout.Content>
          <p>Llena el formulario y ven a nuestro meetup</p>
          <MeetupForm />
        </OverlapLayout.Content>
      </OverlapLayout>

      <TitleSection title="¿emocionado? nosotros también" borderTop>
        <p className="bg-red-500">Llena el formulario y ven a nuestro meetup</p>
        <MeetupForm />
      </TitleSection>

      <OverlapLayout className="border-foreground border-t">
        <OverlapLayout.Header>
          <AuxiliaryTitle>Innovation Leaders Meetup</AuxiliaryTitle>
          <Title as="h1" className="max-w-[20ch]">
            aprende, conecta y transforma tu negocio
          </Title>
          <Paragraph>
            Reúnete con líderes de negocio, innovación y tecnología mientras
            aprendes de quienes están en el frente de batalla.
          </Paragraph>
          <Button inverse text="regístrate" />
        </OverlapLayout.Header>
        <Image
          src={secondBg}
          alt="Creciendo, escalando"
          width={350}
          height={800}
          className="absolute right-[10%] -bottom-0 h-[800px] w-[350px] [@media(min-width:1100px)]:-bottom-0"
        />
      </OverlapLayout>
      <TitleSection
        seo_h1="Innovation Leaders Meetup"
        title="aprende, conecta y transforma tu negocio"
        borderTop
        className="bg-red-500"
      >
        <p className="pb-10">
          Reúnete con líderes de negocio, innovación y tecnología mientras
          aprendes de quienes están en el frente de batalla
        </p>
        <Button inverse text="regístrate" />
        <Image
          src={secondBg}
          alt="Creciendo, escalando"
          width={350}
          height={800}
          className="absolute right-[10%] -bottom-0 h-[800px] w-[350px] [@media(min-width:1100px)]:-bottom-0"
        />
      </TitleSection>

      <BottomBar date={nextEvent.date} location={nextEvent.location} />
      <MetalFooter />
    </PageWrapper>
  );
};

export default Meetup;

const MeetupStep = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #22242b;
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 1rem;
  padding-bottom: 10rem;
  p {
    span {
      font-weight: 600;
    }
  }
`;
