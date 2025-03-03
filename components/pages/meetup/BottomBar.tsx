import { Button } from 'components/ui/Button';
import Location from 'public/assets/img/layout/meetup/location.svg';
import { SmoothAnchor } from './SmoothAnchor';

interface BottomBarProps {
  date: string;
  location: string;
}

export const BottomBar = ({ date, location }: BottomBarProps) => {
  return (
    <div className="sm:bg-background/10 border-border fixed right-0 bottom-0 left-0 z-8 mb-4.5 bg-transparent sm:border-2 sm:backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1220px] flex-row-reverse items-center justify-end px-9 py-2 sm:flex-row sm:justify-between sm:px-14">
        <div className="flex items-center">
          <p className="text-foreground m-0 hidden flex-row items-center gap-4 text-base sm:flex">
            <span className="text-over-black">Próximo evento</span>
            <span className="mx-2 hidden h-[20px] w-px bg-gray-400 sm:block"></span>
            <span className="font-medium">
              {date}, {new Date().getFullYear()}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-14">
          <div className="hidden items-center gap-5 lg:flex">
            {date}
            <div className="flex items-center gap-3">
              <Location />
              <span className="text-foreground">{location}</span>
            </div>
          </div>
          <SmoothAnchor targetId="registro">
            <Button secondary text="regístrate" size="small" />
          </SmoothAnchor>
        </div>
      </div>
    </div>
  );
};
