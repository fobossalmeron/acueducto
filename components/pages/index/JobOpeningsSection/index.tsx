import { OverlapLayout } from 'components/layout/layouts/OverlapLayout';
import { Title } from 'components/ui/Title';
import { Paragraph } from 'components/ui/Paragraph';
import { Button } from 'components/ui/Button/Button';
import Link from 'next/link';

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
          <Title as="h2" className="max-w-[14ch]">
            {title}
          </Title>
        </OverlapLayout.Header>
        <OverlapLayout.Content>
          <Paragraph>{p}</Paragraph>
          <Link href="/jobs">
            <Button text={cta} inverse parentComponent="LogosSection" />
          </Link>
        </OverlapLayout.Content>
      </OverlapLayout>
    </div>
  );
};
