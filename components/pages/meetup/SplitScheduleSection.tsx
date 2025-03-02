import {
  SplitLayout,
  AuxiliaryTitle,
  Title,
  Paragraph,
} from 'components/layout/Grid';

export function SplitScheduleSection() {
  return (
    <SplitLayout className="border-foreground border-t">
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
          <p>
            Vibra<span>(6:30 - 7:00pm)</span>
          </p>
          <p>
            Media hora para conocerse y preparase antes de las charlas. Les
            daremos name tags porque las conversaciones entre desconocidos
            pueden ser maravillosas.
          </p>
        </div>
        <div>
          <p>
            Escucha<span>(7:00 - 8:00pm)</span>
          </p>
          <p>
            Cada meetup tiene de 2 a 4 expertos, cada uno con una charla de
            alrededor de 20 minutos. Ninguna charla es igual a otra.
          </p>
        </div>
        <div>
          <p>
            Conecta<span>(8:00 - 10:00pm)</span>
          </p>
          <p>
            Después de las charlas, disfruta de los refrigedios y las bebidas
            mientras conoces a los ponentes y al resto de los asistentes. Es el
            momento de conectar con líderes que piensan como tú.
          </p>
        </div>
      </SplitLayout.Content>
    </SplitLayout>
  );
}
