import Image from 'next/image';

interface PhaseCardProps {
  label: string;
  name: string;
  duration?: string;
  imageIndex: number;
}

export const PhaseCard = ({ label, name, duration, imageIndex }: PhaseCardProps) => {
  return (
    <div className="w-[81%] lg:w-[90%] xl:w-[81%] rounded-3xl bg-gradient-to-r from-card-border to-background p-px">
      <div className="relative flex items-start rounded-3xl p-4 md:p-6 bg-gradient-to-r from-card-background to-background">
        <div className="flex flex-col gap-1 md:gap-2.5">
          <div className="flex items-center md:gap-3 gap-2 text-sm text-foreground-lower">
            <span className="text-xs md:text-sm font-medium tracking-wider uppercase">
              {label}
            </span>
            {duration && (
              <>
                <span className="text-xs md:text-sm leading-[1.31]">-</span>
                <span className="text-xs md:text-sm leading-[1.31]">{duration}</span>
              </>
            )}
          </div>
          <h4
            className="text-foreground text-lg md:text-xl font-medium"
          >
            {name}
          </h4>
        </div>
        <Image
          src={`/assets/img/layout/home/modes/modes-${imageIndex}.png`}
          alt=""
          width={168}
          height={150}
          className="absolute -top-5 -right-18 h-[120px] lg:-right-14 lg:top-1/2 lg:-translate-y-1/2 lg:h-[clamp(50px,9vw,150px)] xl:-top-5 xl:-right-18 xl:translate-y-0 xl:h-[150px] w-auto"
        />
      </div>
    </div>
  );
};
