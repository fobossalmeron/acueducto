import PageWrapper from '@acueducto/shared/components/layout/PageWrapper';
import Head from '@acueducto/shared/components/layout/Head/Head';
import MetalFooter from '@acueducto/shared/components/layout/footers/MetalFooter';
import { BottomBar } from '@acueducto/shared/components/pages/meetup/BottomBar';
import { SplitLandSection } from '@acueducto/shared/components/pages/meetup/SplitLandSection';
import { SplitScheduleSection } from '@acueducto/shared/components/pages/meetup/SplitScheduleSection';
import { SplitLearnSection } from '@acueducto/shared/components/pages/meetup/SplitLearnSection';
import { OverlapRegisterSection } from '@acueducto/shared/components/pages/meetup/OverlapRegisterSection';
import { PageProps } from '@acueducto/shared/types/PageProps';
import { useEffect } from 'react';

const nextEvent = {
  date: 'Julio 17',
  meetupEdition: 4,
  googleCalendarEvent:
    'https://calendar.google.com/calendar/r/eventedit?text=Innovation+Leaders+Meetup&details=Meetup+for+innovation+leaders&location=Haab%2C+Condesa&dates=20250717T180000/20250717T220000&ctz=America/Mexico_City',
  location: 'Haab, Condesa',
  talks: [
    {
      guest: 'Sergio Torres',
      image: 'sergio-torres.png',
      role: 'CTO @ LeadSales',
    },
    {
      guest: 'Juliana Aldana',
      image: 'juliana-aldana.png',
      role: 'Product mentor @ MeLi',
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
