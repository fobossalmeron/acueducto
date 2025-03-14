import PageWrapper from 'components/layout/PageWrapper';
import Head from 'components/layout/Head/Head';
import MetalFooter from 'components/layout/footers/MetalFooter';
import { BottomBar } from 'components/pages/meetup/BottomBar';
import { SplitLandSection } from 'components/pages/meetup/SplitLandSection';
import { SplitScheduleSection } from 'components/pages/meetup/SplitScheduleSection';
import { SplitLearnSection } from 'components/pages/meetup/SplitLearnSection';
import { OverlapRegisterSection } from 'components/pages/meetup/OverlapRegisterSection';
import { PageProps } from 'types/PageProps';
import { useEffect } from 'react';

const nextEvent = {
  date: 'Marzo 27',
  meetupEdition: 2,
  googleCalendarEvent:
    'https://calendar.google.com/calendar/r/eventedit?text=Innovation+Leaders+Meetup&details=Meetup+for+innovation+leaders&location=La+Condesa%2C+06140+Mexico+City%2C+CDMX%2C+Mexico&dates=20250327T180000/20250327T220000&ctz=America/Mexico_City',
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

export default function Meetup({ setTitle }: PageProps) {
  useEffect(() => {
    setTitle('Meetup');
  }, []);

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

      <SplitLearnSection />

      <SplitScheduleSection />

      <OverlapRegisterSection
        meetupEdition={nextEvent.meetupEdition}
        googleCalendarEvent={nextEvent.googleCalendarEvent}
      />

      <BottomBar date={nextEvent.date} location={nextEvent.location} />
      <MetalFooter />
    </PageWrapper>
  );
}
