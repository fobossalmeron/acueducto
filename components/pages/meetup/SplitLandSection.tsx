import { SplitLayout } from 'components/layout/layouts';
import { Title, AuxiliaryTitle } from 'components/ui';
import { Button } from 'components/ui/Button';
import Location from 'public/assets/img/layout/meetup/location.svg';
import { TalkCard } from './TalkCard';
import Image from 'next/image';
import { SmoothAnchor } from './SmoothAnchor';
import Look from 'public/assets/img/layout/meetup/look.png';

export function SplitLandSection({ nextEvent }: { nextEvent: any }) {
  return (
    <SplitLayout>
      <SplitLayout.Header>
        <AuxiliaryTitle>charlas + sesión de networking</AuxiliaryTitle>
        <Title as="h1" className="max-w-[16ch]">
          meetup para líderes de innovación
        </Title>
      </SplitLayout.Header>
      <SplitLayout.Content className="md:col-start-2! lg:col-start-8!">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-0">
            <span className="text-over-black text-sm sm:text-base">
              Próximo evento
            </span>
            <p className="text-foreground! m-0! text-2xl leading-tight! font-medium sm:text-3xl xl:text-4xl">
              {nextEvent.date}
            </p>
          </div>
          <div className="flex flex-col items-start gap-5">
            <p className="m-0! flex items-center gap-3 font-medium">
              <Location />
              {nextEvent.location}, CDMX
            </p>
            <SmoothAnchor targetId="registro">
              <Button inverse text="regístrate" />
            </SmoothAnchor>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-foreground-low mb-4! text-base">Con charlas de</p>
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
      </SplitLayout.Content>
      {/* <Image
        src={landBg}
        alt="meetup"
        width={540}
        height={346.5}
        className="absolute -bottom-0 left-0 h-[346.5px] w-[540px] origin-top scale-x-[-1] rotate-90 [@media(min-width:1100px)]:-bottom-0 [@media(min-width:1100px)]:left-[16%] [@media(min-width:1100px)]:scale-x-100 [@media(min-width:1100px)]:rotate-0"
      /> */}
      {/* esta es la imagen que se queda abajo del contenido
      <Image
        src={Look}
        alt="Look"
        width={347.875}
        height={423.5}
        className="relative bottom-0 left-0 col-span-10 col-start-1 mt-10 max-w-[200px] rounded-[0_0_1000px_1000px] sm:col-span-5 sm:col-start-2 sm:max-w-none md:col-start-5 lg:absolute lg:left-[15%] lg:col-start-2 lg:rounded-none"
      /> */}
      <Image
        src={Look}
        alt="Look"
        width={347.875}
        height={423.5}
        className="absolute top-[25%] col-start-7 max-w-[100px] justify-self-center rounded-[0_0_1000px_1000px] md:max-w-[200px] lg:top-auto lg:bottom-0 lg:col-span-5 lg:col-start-2 lg:max-w-none lg:justify-self-start lg:rounded-none"
      />
    </SplitLayout>
  );
}
