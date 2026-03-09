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
}

export const ModeBlock = ({ name, title, phases }: ModeBlockProps) => {
  return (
    <Fade triggerOnce>
      <div className="flex flex-col gap-4">
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
    </Fade>
  );
};
