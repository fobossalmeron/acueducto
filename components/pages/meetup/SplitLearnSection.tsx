import { OverlapLayout } from 'components/layout/layouts';
import { AuxiliaryTitle, Title, Paragraph } from 'components/ui';
import { Button } from 'components/ui/Button';
import Image from 'next/image';
import secondBg from 'public/assets/img/layout/meetup/second_bg.png';
import { SmoothAnchor } from './SmoothAnchor';

export function SplitLearnSection() {
  return (
    <OverlapLayout className="border-foreground-lowest content-center overflow-hidden border-t lg:min-h-screen">
      <OverlapLayout.Header className="items-center">
        <AuxiliaryTitle>Innovation Leaders Meetup</AuxiliaryTitle>
        <Title as="h1" className="max-w-[20ch]">
          aprende, conecta y transforma tu negocio
        </Title>
        <Paragraph>
          Reúnete con líderes de negocio, innovación y tecnología mientras
          aprendes de quienes están en el frente de batalla.
        </Paragraph>
        <SmoothAnchor targetId="registro">
          <Button text="Regístrate" />
        </SmoothAnchor>
      </OverlapLayout.Header>
      <Image
        src={secondBg}
        alt="Creciendo, escalando"
        width={350}
        height={800}
        className="relative right-0 -bottom-0 col-span-12 flex h-[300px] w-auto justify-self-center sm:absolute sm:h-auto sm:w-[200px] lg:right-[10%] xl:w-[350px]"
      />
    </OverlapLayout>
  );
}
