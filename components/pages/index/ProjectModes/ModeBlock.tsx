import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { GrayBlob } from './GrayBlob';
import { PhaseCard } from './PhaseCard';
import { Pill } from './Pill';

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

interface ModeBlockProps {
  name: string;
  title: string;
  phases: Phase[];
  index: number;
}

export const ModeBlock = ({ name, title, phases, index }: ModeBlockProps) => {
  return (
    <Fade triggerOnce>
      <div className="relative flex flex-col gap-4">
        <GrayBlob index={index} />

        {/* Content — z-10, above blob */}
        <div className="relative z-10 flex flex-col gap-4">
        {/* Mode header */}
        <div className="flex flex-col gap-2 mb-6">
          <span className="w-fit rounded-full bg-gradient-to-r from-[#3f3f3f] to-foreground-lower p-px">
            <span className="block rounded-full bg-background px-3 py-1 text-foreground-lower text-xs font-medium tracking-widest uppercase">
              {name}
            </span>
          </span>
          <h3 className="bg-gradient-to-r from-[#e0e0e0] via-[#e0e0e0] via-[62%] to-[#b2b1b1] bg-clip-text text-[clamp(2.6rem,1rem+3vw,4rem)] leading-[108%] font-medium tracking-tight whitespace-pre-line text-transparent py-[0.15em] -my-[0.15em]">
            {title}
          </h3>
        </div>

        {/* Phase columns: each has card + pills */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {phases.map((phase, phaseIdx) => (
            <div key={phase.label} className="flex flex-col gap-3 mb-8 lg:mb-0" style={{ zIndex: 30 - phaseIdx * 10 }}>
              {/* Phase card */}
              <PhaseCard
                label={phase.label}
                name={phase.name}
                duration={phase.duration}
                imageIndex={index * 3 + phaseIdx + 1}
              />

              {/* Pills area with lines background */}
              <div className="relative">
                <div className="pointer-events-none absolute -inset-y-[10%] inset-x-0 opacity-50 block">
                  <Image
                    src="/assets/img/layout/home/modes/lines_small.png"
                    alt=""
                    fill
                    style={{ objectFit: 'fill', objectPosition: 'center' }}
                  />
                </div>
                <div className="relative grid grid-cols-8 gap-y-2 md:pt-2 pt-0">
                  {phase.pills.map((pillOrGroup, idx) => {
                    const colStart = idx + 1;
                    const style = { gridColumn: `${colStart} / -1` };
                    return Array.isArray(pillOrGroup) ? (
                      <div key={idx} className="flex flex-nowrap gap-2" style={style}>
                        {pillOrGroup.map((pill) => (
                          <Pill key={pill.text} {...pill} />
                        ))}
                      </div>
                    ) : (
                      <div key={pillOrGroup.text} style={style}>
                        <Pill {...pillOrGroup} />
                      </div>
                    );
                  })}
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
