import Image from 'next/image';

interface PhaseCardProps {
  label: string;
  name: string;
  duration?: string;
}

export const PhaseCard = ({ label, name, duration }: PhaseCardProps) => {
  return (
    <div className="relative flex items-start card rounded-3xl p-6">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-3 text-sm text-foreground-lower">
          <span className="text-sm font-medium tracking-wider uppercase">
            {label}
          </span>
          {duration && (
            <>
              <span className="leading-[1.31]">-</span>
              <span className="leading-[1.31]">{duration}</span>
            </>
          )}
        </div>
        <h4
          className="text-foreground text-xl font-medium"
        >
          {name}
        </h4>
      </div>
      <div className="absolute -top-4 right-0 h-[140px] w-[140px] lg:right-2">
        <Image
          src="/assets/img/layout/home/estrategia.png"
          alt=""
          fill
          className="object-contain object-center"
        />
      </div>
    </div>
  );
};
