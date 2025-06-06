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
  date: 'Mayo 15',
  meetupEdition: 3,
  googleCalendarEvent:
    'https://calendar.google.com/calendar/r/eventedit?text=Innovation+Leaders+Meetup&details=Meetup+for+innovation+leaders&location=La+Condesa%2C+06140+Mexico+City%2C+CDMX%2C+Mexico&dates=20250515T180000/20250515T220000&ctz=America/Mexico_City',
  location: 'Condesa',
  talks: [
    {
      guest: 'Monserrat Reyes',
      image: 'monserrat-reyes.png',
      role: 'Engineering Director @ Clara',
    },
    {
      guest: 'Sebastián Prida',
      image: 'sebastian-prida.png',
      role: 'CEO @ Medu',
    },
    {
      guest: 'Victor Lima',
      image: 'victor-lima.png',
      role: 'CTO @ UnDosTres',
    },
    {
      guest: 'Rodrigo y Artemio',
      image: 'rodrigo-artemio.png',
      role: 'Cofundadores @ Acueducto',
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
