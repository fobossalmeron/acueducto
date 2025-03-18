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
    <div className="bg-background">
      <OverlapLayout className="border-card-border mb-0 content-center overflow-hidden border-t">
        <OverlapLayout.Header>
          <Title as="h2" dangerouslySetInnerHTML={{ __html: title }} />
        </OverlapLayout.Header>
        <OverlapLayout.Content>
          <Paragraph className="!max-w-[30ch]">{p}</Paragraph>
          <Link href="/jobs">
            <Button text={cta} />
          </Link>
        </OverlapLayout.Content>
        <Image
          src={JobOpenings}
          alt="Job Openings"
          className="absolute bottom-0 left-[15%] h-[300px] w-auto"
        />
      </OverlapLayout>
    </div>
  );
};
