import { Button } from 'components/shared/Button/Button';
import Location from 'public/assets/img/layout/meetup/location.svg';

interface BottomBarProps {
  date: string;
  location: string;
}

export const BottomBar = ({ date, location }: BottomBarProps) => {
  return (
    <div className="bg-background/10 border-border fixed right-0 bottom-0 left-0 z-8 mb-7 border-2 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1170px] items-center justify-between px-14 py-4">
        <div className="flex items-center">
          <p className="text-foreground m-0 flex items-center gap-4">
            <span className="text-over-black">Próximo evento</span>
            <span className="mx-2 h-[20px] w-px bg-gray-400"></span>
            <span className="font-medium">
              {date}, {new Date().getFullYear()}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-14">
          <div className="hidden items-center gap-10 md:flex">
            {date}
            <div className="flex items-center gap-3">
              <Location />
              <span className="text-foreground">{location}</span>
            </div>
          </div>
          <Button secondary text="regístrate" />
        </div>
      </div>
    </div>
  );
};
