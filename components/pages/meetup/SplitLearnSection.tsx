import { OverlapLayout } from 'components/layout/layouts';
import { AuxiliaryTitle, Title, Paragraph } from 'components/ui';
import { Button } from 'components/ui/Button';
import Image from 'next/image';
import secondBg from 'public/assets/img/layout/meetup/second_bg.png';

export function SplitLearnSection() {
  return (
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
  );
}
