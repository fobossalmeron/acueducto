import Image from 'next/image';

interface PhaseCardProps {
  label: string;
  name: string;
  duration?: string;
  imageIndex: number;
}

export const PhaseCard = ({ label, name, duration, imageIndex }: PhaseCardProps) => {
  return (
    <div className="w-[81%] rounded-3xl bg-gradient-to-r from-card-border to-background p-px">
      <div className="relative flex items-start rounded-3xl p-6 bg-gradient-to-r from-card-background to-background">
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
        <Image
          src={`/assets/img/layout/home/modes/modes-${imageIndex}.png`}
          alt=""
          width={168}
          height={150}
          className="absolute -top-5 -right-18 h-[150px] w-auto"
        />
      </div>
    </div>
  );
};
