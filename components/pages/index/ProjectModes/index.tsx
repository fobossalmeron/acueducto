import { Fade } from 'react-awesome-reveal';
import { ModeBlock } from './ModeBlock';
import { Title } from 'components/ui';

interface PillData {
  text: string;
  highlighted?: boolean;
}

interface Phase {
  label: string;
  name: string;
  duration?: string;
  pills: PillData[];
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
    <section className="relative overflow-hidden bg-background px-5 py-24 sm:px-10 lg:px-[180px] lg:py-[142px]">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        <div className="absolute -left-[200px] top-[600px] h-[800px] w-[815px] rotate-60 opacity-[0.07]">
          <div className="h-full w-full rounded-full bg-primary blur-[200px]" />
        </div>
        <div className="absolute -right-[100px] top-[1200px] h-[680px] w-[680px] rotate-60 opacity-[0.07]">
          <div className="h-full w-full rounded-full bg-primary blur-[200px]" />
        </div>
        <div className="absolute left-[10%] top-[200px] h-[480px] w-[480px] rotate-60 opacity-[0.07]">
          <div className="h-full w-full rounded-full bg-primary blur-[200px]" />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1080px] flex-col items-center gap-[86px]">
        {/* Header */}
        <Fade triggerOnce>
          <div className="flex flex-col items-center gap-3 text-center">
            <Title as="h2" className="max-w-[14ch]">
              {title}
            </Title>
            <p className="text-[16.5px] leading-[1.31] text-over-black">
              {subtitle}
            </p>
          </div>
        </Fade>

        {/* Modes */}
        <div className="flex w-full flex-col gap-20 lg:gap-[86px]">
          {modes.map((mode) => (
            <ModeBlock key={mode.name} {...mode} />
          ))}
        </div>
      </div>
    </section>
  );
};
