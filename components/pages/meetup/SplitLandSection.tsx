import { SplitLayout, AuxiliaryTitle, Title } from 'components/layout/Grid';
import { Button } from 'components/shared/Button/Button';
import Location from 'public/assets/img/layout/meetup/location.svg';
import { TalkCard } from './TalkCard';
import landBg from 'public/assets/img/layout/meetup/land_bg.png';
import Image from 'next/image';

export function SplitLandSection({ nextEvent }: { nextEvent: any }) {
  return (
    <SplitLayout>
      <SplitLayout.Header>
        <AuxiliaryTitle>charlas + sesión de networking</AuxiliaryTitle>
        <Title as="h1" className="max-w-[16ch]">
          meetup para líderes de innovación
        </Title>
      </SplitLayout.Header>
      <SplitLayout.Content className="lg:col-start-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-0">
            <span className="text-over-black text-base">Próximo evento</span>
            <p className="text-foreground! m-0! text-3xl leading-tight! font-medium xl:text-4xl">
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
      </SplitLayout.Content>
      <Image
        src={landBg}
        alt="meetup"
        width={540}
        height={346.5}
        className="absolute -bottom-0 left-0 h-[346.5px] w-[540px] origin-top scale-x-[-1] rotate-90 [@media(min-width:1100px)]:-bottom-0 [@media(min-width:1100px)]:left-[16%] [@media(min-width:1100px)]:scale-x-100 [@media(min-width:1100px)]:rotate-0"
      />
    </SplitLayout>
  );
}
