import { Fade } from 'react-awesome-reveal';
import { ModeBlock } from './ModeBlock';
import { Title } from 'components/ui';

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
    <section className="border-foreground-lowest border-t relative overflow-hidden bg-background px-5 py-24 sm:px-10 lg:px-[180px] lg:py-[142px]">
      <div className="relative mx-auto flex max-w-[1080px] flex-col items-center gap-14 md:gap-[86px]">
        {/* Header */}
        <Fade triggerOnce>
          <div className="flex flex-col md:items-center items-start md:gap-3 gap-1 md:text-center text-left">
            <Title as="h2" className="max-w-[14ch]">
              {title}
            </Title>
            <p className="md:text-base text-sm text-over-black">
              {subtitle}
            </p>
          </div>
        </Fade>

        {/* Modes */}
        <div className="flex w-full flex-col gap-20 lg:gap-34">
          {modes.map((mode, i) => (
            <ModeBlock key={mode.name} index={i} {...mode} />
          ))}
        </div>
      </div>
    </section>
  );
};
