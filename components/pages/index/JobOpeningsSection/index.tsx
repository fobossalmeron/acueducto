import { OverlapLayout } from 'components/layout/layouts/OverlapLayout';
import { Title } from 'components/ui/Title';
import { Paragraph } from 'components/ui/Paragraph';
import { Button } from 'components/ui/Button/Button';
import Link from 'next/link';
import JobOpenings from 'public/assets/img/layout/home/jobpostings.png';
import Image from 'next/image';
import React from 'react';

export const JobOpeningsSection = ({
  title,
  p,
  cta,
}: {
  title: string;
  p: string;
  cta: string;
}) => {
  return (
    <OverlapLayout className="bg-background border-foreground-lowest overflow-hidden border-t pb-0 lg:pb-[10%]">
      <OverlapLayout.Header>
        <Title as="h2" dangerouslySetInnerHTML={{ __html: title }} />
      </OverlapLayout.Header>
      <OverlapLayout.Content>
        <Paragraph className="!max-w-[30ch]">{p}</Paragraph>
        <Link href="https://acueducto.notion.site/Vacantes-223b939ba9a14051bca07f8546e8ad26">
          <Button text={cta} />
        </Link>
      </OverlapLayout.Content>
      <Image
        src={JobOpenings}
        alt="Job Openings"
        className="relative bottom-0 col-span-12 col-start-1 mt-5 h-[150px] w-auto sm:col-span-10 sm:col-start-2 sm:h-[200px] md:col-span-7 md:col-start-5 md:mt-10 lg:absolute lg:col-span-5 lg:col-start-2 lg:h-[40%]"
      />
    </OverlapLayout>
  );
};
