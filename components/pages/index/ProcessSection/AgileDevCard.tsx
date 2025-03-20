import { Button } from 'components/ui/Button/Button';
import ArrowDesktop from 'public/assets/img/layout/home/arrow-desktop.svg';

export function AgileDevCard({
  auxiliary,
  title,
  p,
  button,
}: {
  auxiliary: string;
  title: string;
  p: string;
  button: string;
}) {
  return (
    <div className="mx-auto max-w-[705px] px-4 pb-20">
      <div className="primary-card relative flex overflow-hidden rounded-4xl border bg-[#091A4E]">
        <div className="flex items-end">
          <div className="w-2/3 space-y-4 p-10 pr-2">
            <p className="text-accent-light mb-1 text-sm">{auxiliary}</p>
            <h2 className="mb-2 text-xl font-medium text-white">{title}</h2>
            <p className="text-over-black text-base">{p}</p>
            <Button text={button} />
          </div>
          <div className="relative max-h-[270px] w-1/3">
            <ArrowDesktop className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
