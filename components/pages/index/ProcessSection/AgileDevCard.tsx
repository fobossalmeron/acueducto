import { Button } from 'components/ui/Button/Button';
import ArrowDesktop from 'public/assets/img/layout/home/arrow-desktop.svg';
import ArrowMobile from 'public/assets/img/layout/home/arrow-mobile.svg';

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
    <div className="col-span-12 col-start-1 mt-0 sm:col-span-10 sm:col-start-2 md:mt-20 lg:col-span-8 lg:col-start-3 lg:mx-auto lg:max-w-[605px]">
      <div className="primary-card relative flex overflow-hidden rounded-4xl border bg-[#091A4E]">
        <div className="flex flex-col items-end sm:flex-row">
          <div className="flex h-[150px] w-full sm:hidden">
            <ArrowMobile className="h-full w-auto" />
          </div>
          <div className="w-full items-center space-y-4 p-6 text-center sm:w-2/3 sm:items-start sm:pr-2 sm:text-left md:p-10">
            <p className="text-accent-light mb-1 text-sm">{auxiliary}</p>
            <h2 className="mb-2 text-[2.0rem] leading-tight font-medium text-white md:text-xl">
              {title}
            </h2>
            <p className="text-over-black text-sm md:text-base">{p}</p>
            <Button text={button} />
          </div>
          <div className="relative hidden max-h-[270px] w-1/3 sm:flex">
            <ArrowDesktop className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
