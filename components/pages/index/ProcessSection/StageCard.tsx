import { useRouter } from 'next/router';
interface StageCardProps {
  stage: { title: string; p: string; badge: string };
  stageNumber: string;
  className?: string;
}

export const StageCard: React.FC<StageCardProps> = ({
  stage,
  stageNumber,
  className,
}) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div
      className={`bg-card-background border-card-border relative m-3 flex flex-col rounded-3xl border p-6 ${className}`}
    >
      <span className="text-primary text-[1rem] font-semibold tracking-[0.3rem] uppercase">
        {locale === 'en' ? 'Stage' : 'Etapa'} {stageNumber}
      </span>
      <h3 className="mb-4 text-xl font-medium">{stage.title}</h3>
      <p className="text-over-black max-w-[40ch] text-sm">{stage.p}</p>
    </div>
  );
};
