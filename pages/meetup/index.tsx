import PageWrapper from 'components/layout/PageWrapper';
import { MeetupForm } from 'components/pages/meetup/MeetupForm';
import styled from 'styled-components';
import Head from 'components/layout/Head';
import PinnedSection from 'components/shared/pinnedSections/PinnedSection';
import MetalFooter from 'components/layout/footers/MetalFooter';
import { Button } from 'components/shared/Button/Button';
import TitleSection from 'components/shared/TitleSection';
import Location from 'public/assets/img/layout/meetup/location.svg';
import Image from 'next/image';
import { TalkCard } from 'components/pages/meetup/TalkCard';
import { BottomBar } from 'components/pages/meetup/BottomBar';
import landBg from 'public/assets/img/layout/meetup/land_bg.png';

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
        title="Ven a nuestra masterclass + sesión de networking"
        description='Ven a nuestra masterclass "Itera con el feedback de tus usuarios" + sesión de networking el próximo jueves 30 de enero del 2025 en la colonia Roma Sur, Ciudad de México (ubicación a confirmar)'
        headerTitle="Innovation Leaders Meetup"
        es_canonical="https://acueducto.studio/meetup"
        noIndex
      />
      <PinnedSection
        seo_h1="charlas + sesión de networking"
        title={'meetup para líderes de innovación'}
        className="relative"
        notSticky
        absoluteElement={
          <Image
            src={landBg}
            alt="meetup"
            width={540}
            height={346.5}
            className="absolute -bottom-0 left-0 h-[346.5px] w-[540px] origin-top scale-x-[-1] rotate-90 [@media(min-width:1100px)]:-bottom-0 [@media(min-width:1100px)]:left-[16%] [@media(min-width:1100px)]:scale-x-100 [@media(min-width:1100px)]:rotate-0"
          />
        }
      >
        <div className="pl-40">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-0">
              <span className="text-over-black text-base">Próximo evento</span>
              <p className="text-foreground! m-0! text-4xl leading-tight! font-medium">
                {nextEvent.date}
              </p>
            </div>
            <div className="flex flex-col items-start gap-6">
              <p className="m-0! flex items-center gap-3 font-medium">
                <Location />
                {nextEvent.location}, CDMX
              </p>
              <Button inverse text="regístrate" />
            </div>
          </div>
          <div className="mt-16">
            <p className="text-foreground-lowest mb-4! text-base">
              Con charlas de
            </p>
            <div className="flex flex-col gap-4">
              {nextEvent.talks.map((talk) => (
                <TalkCard
                  key={talk.guest}
                  title={talk.title}
                  guest={talk.guest}
                  role={talk.role}
                  image={talk.image}
                />
              ))}
            </div>
          </div>
        </div>
      </PinnedSection>
      <TitleSection
        seo_h1="Innovation Leaders Meetup"
        title="aprende, conecta y transforma tu negocio"
        borderTop
      >
        <p className="pb-10">
          Reúnete con líderes de negocio, innovación y tecnología mientras
          aprendes de quienes están en el frente de batalla
        </p>
        <Button inverse text="regístrate" />
      </TitleSection>
      <PinnedSection
        seo_h1="¿de qué va?"
        title="innovation leaders meetup"
        borderTop
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
        <MeetupStep>
          <p>
            Escucha<span>(7:00 - 8:00pm)</span>
          </p>
          <p>
            Cada meetup tiene de 2 a 4 expertos, cada uno con una charla de
            alrededor de 20 minutos. Ninguna charla es igual a otra.
          </p>
        </MeetupStep>
        <MeetupStep>
          <p>
            Conecta<span>(8:00 - 10:00pm)</span>
          </p>
          <p>
            Después de las charlas, disfruta de los refrigedios y las bebidas
            mientras conoces a los ponentes y al resto de los asistentes. Es el
            momento de conectar con líderes que piensan como tú.
          </p>
        </MeetupStep>
      </PinnedSection>
      <TitleSection title="¿emocionado? nosotros también" borderTop>
        <p>Llena el formulario y ven a nuestro meetup</p>
        <MeetupForm />
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
  p {
    span {
      font-weight: 600;
    }
  }
`;
