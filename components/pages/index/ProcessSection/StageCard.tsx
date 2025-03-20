import { useRouter } from 'next/router';

interface StageCardProps {
  stage: { title: string; p: string; badge: string };
  stageNumber: string;
  className?: string;
  maxCharMobile?: boolean;
}

export const StageCard: React.FC<StageCardProps> = ({
  stage,
  stageNumber,
  className,
  maxCharMobile,
}) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div
      className={`bg-card-background border-card-border relative flex flex-col rounded-3xl border p-6 lg:mx-3 ${className}`}
    >
      <span className="text-primary text-[1rem] font-semibold tracking-[0.3rem] uppercase">
        {locale === 'en' ? 'Stage' : 'Etapa'} {stageNumber}
      </span>
      <h3
        className={`mb-2 text-[2.0rem] leading-tight font-medium md:mb-4 md:text-xl ${maxCharMobile ? 'mobile-max-char' : ''}`}
      >
        {stage.title}
      </h3>
      <p className="text-over-black max-w-[33ch] text-sm sm:max-w-[40ch]">
        {stage.p}
      </p>
    </div>
  );
};
