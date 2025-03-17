import { SplitLayout } from 'components/layout/layouts';
import { Title, Paragraph, AuxiliaryTitle } from 'components/ui';
import Hands from 'public/assets/img/layout/meetup/hands.png';
import Notes from 'public/assets/img/layout/meetup/notes.png';
import Org from 'public/assets/img/layout/meetup/org.png';
import Image from 'next/image';
import { ScheduleItem } from './ScheduleItem';

export function SplitScheduleSection() {
  return (
    <SplitLayout className="border-foreground-lowest border-t">
      <SplitLayout.Header className="max-h-[300px]">
        <AuxiliaryTitle>¿de qué va?</AuxiliaryTitle>
        <Title as="h2">innovation leaders meetup</Title>
      </SplitLayout.Header>
      <SplitLayout.Content>
        <Paragraph>
          Una tarde de convivir con personas que piensan como tú, se enfrentan a
          retos similares y buscan ser mejores en su vida profesional. <br />
          <br />
          Cada meetup se desenvuelve de la siguiente forma:
        </Paragraph>
        <div className="flex flex-col gap-4">
          <ScheduleItem
            title="Convive"
            description="Media hora para conocerse, beber y comer algo. Tendrás tu name tag porque las conversaciones entre desconocidos pueden ser maravillosas."
            time="(6:30 - 7:00pm)"
            image={<Image src={Hands} alt="Hands" width={95} height={95} />}
          />
          <ScheduleItem
            title="Charlas"
            description="Cada meetup tiene de 2 a 4 expertos, cada uno con una charla de alrededor de 20 minutos. Ninguna charla es igual a otra."
            time="(7:00 - 8:30pm)"
            image={<Image src={Notes} alt="Notes" width={95} height={95} />}
          />
          <ScheduleItem
            title="Conecta"
            description="Disfruta de los snacks y bebidas mientras conoces a los ponentes y al resto de los asistentes. También tendremos ice breakers para los timidos."
            time="(8:30 - 10:00pm)"
            image={<Image src={Org} alt="Org" width={95} height={95} />}
          />
        </div>
      </SplitLayout.Content>
    </SplitLayout>
  );
}
