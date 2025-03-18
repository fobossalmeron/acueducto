import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { Button } from 'components/ui/Button/Button';
import { useIsMobile } from 'utils/useIsMobile';
import ClientsDesktop from 'public/assets/img/layout/clients.png';
import ClientsMobile from 'public/assets/img/layout/clientsMobile.png';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { OverlapLayout } from 'components/layout/layouts/OverlapLayout';
import { Title } from 'components/ui/Title';
import { Paragraph } from 'components/ui/Paragraph';
import Quotes1 from 'public/assets/img/layout/home/quotes-3.png';
import Quotes2 from 'public/assets/img/layout/home/quotes-4.png';

interface SocialProofSectionProps {
  intro: {
    title: string;
    p: string;
  };
  span: string;
  span2: string;
  cta: string;
  quotes: {
    text: string;
    person: string;
    job: string;
    picture: string;
  }[];
}

export function SocialProofSection({
  intro,
  span,
  span2,
  cta,
  quotes,
}: SocialProofSectionProps) {
  const isMobile = useIsMobile(760);
  const { locale } = useRouter();

  // Crear un array con todas las quotes y las cards adicionales
  const quotesAndCards = [...quotes];

  // Insertar las cards después de las posiciones 0 y 1 (después de las dos primeras quotes)
  quotesAndCards.splice(2, 0, {
    text: '',
    person: 'card-one',
    job: '',
    picture: '',
  });
  quotesAndCards.splice(3, 0, {
    text: '',
    person: 'card-two',
    job: '',
    picture: '',
  });

  return (
    <div className="bg-background">
      <OverlapLayout className="border-card-border mb-0 content-center overflow-hidden border-t">
        <OverlapLayout.Header>
          <Title as="h2" className="max-w-[14ch]">
            {intro.title}
          </Title>
        </OverlapLayout.Header>
        <OverlapLayout.Content>
          <Paragraph>{intro.p}</Paragraph>
        </OverlapLayout.Content>

        <div className="col-span-full col-start-1 flex flex-col items-center pb-[calc(70px+5%)] md:col-span-10 md:col-start-2">
          <Fade triggerOnce>
            <span className="text-foreground-lower mb-14 block px-4 text-center">
              {' '}
              {span}{' '}
            </span>
            <Image
              src={isMobile ? ClientsMobile : ClientsDesktop}
              width={isMobile ? 550 : 800}
              height={isMobile ? 171 : 120}
              alt="Clientes"
              className="xs:max-w-[300px] h-auto max-w-[800px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </Fade>
          <Fade triggerOnce>
            <span className="text-foreground-lower mt-24 mb-14 block px-4 text-center">
              {span2}
            </span>
            <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {quotesAndCards.map((item, index) => {
                // Si es una de las cards especiales
                if (item.person === 'card-one' || item.person === 'card-two') {
                  return (
                    <div
                      key={`card-${index}`}
                      className="card relative overflow-hidden rounded-4xl p-8"
                    >
                      <Image
                        src={item.person === 'card-one' ? Quotes1 : Quotes2}
                        alt="Card background"
                        width={500}
                        height={300}
                        className="absolute top-0 left-0 h-full w-full object-cover"
                      />
                    </div>
                  );
                }
                return (
                  <div
                    key={item.person}
                    className="primary-card flex flex-col justify-center gap-4 rounded-4xl p-9"
                  >
                    <p className="text-over-black text-base">{item.text}</p>
                    <div className="flex origin-bottom-left flex-row items-center gap-4 select-none">
                      <Image
                        src={`/assets/img/layout/clients/${item.picture}.jpg`}
                        width={45}
                        height={45}
                        alt={`${item.person}, ${item.job}`}
                        className="rounded-full"
                      />
                      <p className="text-foreground-low flex flex-col text-sm">
                        {item.person}{' '}
                        <span className="text-accent-light text-[1.4rem]">
                          {item.job}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link
              href={locale === 'en' ? '/work' : '/portafolio'}
              locale={locale}
              className="mt-22"
            >
              <Button text={cta} />
            </Link>
          </Fade>
        </div>
      </OverlapLayout>
    </div>
  );
}
