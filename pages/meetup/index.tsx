import PageWrapper from 'components/layout/PageWrapper';
import Head from 'components/layout/Head/Head';
import MetalFooter from 'components/layout/footers/MetalFooter';
import { BottomBar } from 'components/pages/meetup/BottomBar';
import { SplitLandSection } from 'components/pages/meetup/SplitLandSection';
import { SplitScheduleSection } from 'components/pages/meetup/SplitScheduleSection';
import { SplitLearnSection } from 'components/pages/meetup/SplitLearnSection';
import { OverlapRegisterSection } from 'components/pages/meetup/OverlapRegisterSection';

const nextEvent = {
  date: 'Marzo 26',
  googleCalendarEvent:
    'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NG1sZ3AzdjFpZm5zamY3bjR1MnNvbXBjNW4gaG9sYUBhY3VlZHVjdG8uc3R1ZGlv&tmsrc=hola%40acueducto.studio',
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

      <SplitLearnSection />

      <SplitScheduleSection />

      <OverlapRegisterSection
        googleCalendarEvent={nextEvent.googleCalendarEvent}
      />

      <BottomBar date={nextEvent.date} location={nextEvent.location} />
      <MetalFooter />
    </PageWrapper>
  );
};

export default Meetup;
