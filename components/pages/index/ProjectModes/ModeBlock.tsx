import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { PhaseCard } from './PhaseCard';
import { Pill } from './Pill';

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

interface ModeBlockProps {
  name: string;
  title: string;
  phases: Phase[];
  index: number;
}

const blobPosition: Record<number, string> = {
  0: 'left-[18%] -top-[20%]',   // behind 2nd column
  1: '-left-[25%] -top-[15%]',  // behind 1st column
  2: '-right-[25%] -top-[15%]', // behind 3rd column
};

export const ModeBlock = ({ name, title, phases, index }: ModeBlockProps) => {
  return (
    <Fade triggerOnce>
      <div className="relative flex flex-col gap-4">
        {/* Gray blob — z-0, behind content */}
        <div
          className={`pointer-events-none absolute hidden h-[700px] w-[700px] bg-[radial-gradient(circle,#282B2B_0%,#1B1B1B_40%,transparent_70%)] lg:block ${blobPosition[index] || ''}`}
        />

        {/* Content — z-10, above blob */}
        <div className="relative z-10 flex flex-col gap-4">
        {/* Mode header */}
        <div className="flex flex-col gap-3 mb-6">
          <span className="text-foreground-low text-xs font-medium tracking-widest uppercase">
            {name}
          </span>
          <h3 className="bg-gradient-to-r from-[#e0e0e0] via-[#e0e0e0] via-[62%] to-[#b2b1b1] bg-clip-text text-[clamp(2rem,1rem+3vw,4rem)] leading-[108%] font-medium tracking-tight whitespace-pre-line text-transparent">
            {title}
          </h3>
        </div>

        {/* Phase columns: each has card + pills */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase) => (
            <div key={phase.label} className="flex flex-col gap-3">
              {/* Phase card */}
              <PhaseCard
                label={phase.label}
                name={phase.name}
                duration={phase.duration}
              />

              {/* Pills area with lines background */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-0 hidden opacity-50 lg:block">
                  <Image
                    src="/assets/img/layout/home/lines.svg"
                    alt=""
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div className="relative flex flex-col gap-2 py-2">
                  {phase.pills.map((pill) => (
                    <Pill key={pill.text} {...pill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </Fade>
  );
};
