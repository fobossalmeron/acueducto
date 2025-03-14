import { SplitLayout } from 'components/layout/layouts';
import { Title, AuxiliaryTitle } from 'components/ui';
import { Button } from 'components/ui/Button';
import Location from 'public/assets/img/layout/meetup/location.svg';
import { TalkCard } from './TalkCard';
// import landBg from 'public/assets/img/layout/meetup/land_bg.png';
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
      <Image
        src={Look}
        alt="Look"
        width={347.875}
        height={423.5}
        priority
        className="absolute top-[25%] col-start-7 max-w-[100px] justify-self-center rounded-[0_0_1000px_1000px] md:max-w-[200px] lg:top-auto lg:bottom-0 lg:col-span-5 lg:col-start-2 lg:max-w-none lg:justify-self-start lg:rounded-none"
      />
    </SplitLayout>
  );
}
