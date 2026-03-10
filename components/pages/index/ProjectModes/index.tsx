import { Fade } from 'react-awesome-reveal';
import { ModeBlock } from './ModeBlock';
import { Title } from 'components/ui';
import { OverlapLayout } from 'components/layout/layouts/OverlapLayout';

interface PillData {
  text: string;
  highlighted?: boolean;
}

type PillRow = PillData | PillData[];

interface Phase {
  label: string;
  name: string;
  duration?: string;
  pills: PillRow[];
}

interface Mode {
  name: string;
  title: string;
  phases: Phase[];
}

interface ProjectModesProps {
  title: string;
  subtitle: string;
  modes: Mode[];
}

export const ProjectModes = ({ title, subtitle, modes }: ProjectModesProps) => {
  return (
    <div className="bg-background">
      <OverlapLayout className="border-foreground-lowest mb-0 content-center overflow-hidden border-t">
        <OverlapLayout.Header>
          <Fade triggerOnce>
            <div className="flex flex-col md:items-center items-start md:gap-3 gap-1 md:text-center text-left">
              <Title as="h2" className="max-w-[14ch] md:!mb-3 !mb-1">
                {title}
              </Title>
              <p className="md:text-base text-sm text-over-black">
                {subtitle}
              </p>
            </div>
          </Fade>
        </OverlapLayout.Header>

        <div className="col-span-12 col-start-1 flex flex-col gap-10 sm:col-span-10 sm:col-start-2 lg:gap-34 md:pt-10 pt-6">
          {modes.map((mode, i) => (
            <ModeBlock key={mode.name} index={i} {...mode} />
          ))}
        </div>
      </OverlapLayout>
    </div>
  );
};
