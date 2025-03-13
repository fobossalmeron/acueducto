import { useRouter } from 'next/router';
// Componente para renderizar cada etapa del proceso
interface StageCardProps {
  stage: { title: string; p: string; badge: string };
  stageNumber: string;
  badge: string;
  className?: string;
}

export const StageCard: React.FC<StageCardProps> = ({
  stage,
  stageNumber,
  badge,
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

      {/* Badge en la esquina inferior derecha */}
      <div className="absolute right-6 bottom-6 -rotate-5 rounded-full">
        <div className="flex h-[100px] w-[100px] flex-col items-center justify-center gap-1 rounded-full border-1 border-[#666666] bg-[#2F333C] px-4 py-2 text-center text-xs shadow-2xl">
          <span className="text-yellow-400">✦</span>
          <span className="font-medium text-white">{badge}</span>
        </div>
      </div>
    </div>
  );
};
