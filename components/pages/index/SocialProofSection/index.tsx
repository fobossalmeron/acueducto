import { Fade } from 'react-awesome-reveal';
import { Quotes } from './Quotes';
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

interface SocialProofSectionProps {
  intro: {
    title: string;
    p: string;
  };
  span: string;
  span2: string;
  cta: string;
}

export function SocialProofSection({
  intro,
  span,
  span2,
  cta,
}: SocialProofSectionProps) {
  const isMobile = useIsMobile(760);
  const { locale } = useRouter();
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
            <span className="text-foreground-lower mt-[6%] mb-14 block px-4 text-center">
              {span2}
            </span>
            <Quotes isMobile={isMobile} />
            <Link
              href={locale === 'en' ? '/work' : '/portafolio'}
              locale={locale}
              className="mt-22"
            >
              <Button text={cta} inverse parentComponent="LogosSection" />
            </Link>
          </Fade>
        </div>
      </OverlapLayout>
    </div>
  );
}
