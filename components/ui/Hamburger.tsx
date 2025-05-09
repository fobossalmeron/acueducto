import React from 'react';
import HamburgerIcon from 'public/assets/img/layout/hamburger.svg';
import { cn } from '../../utils/cn';

interface HamburgerProps {
  hasLoaded: boolean;
  toggleNav: () => void;
  isOpen: boolean;
}

const Hamburger = ({ hasLoaded, toggleNav, isOpen }: HamburgerProps) => {
  const containerClasses = cn(
    'pointer-events-none fixed top-0 right-0 left-0 z-12 mx-auto flex w-full max-w-[1500px] justify-end p-[55px_50px] mix-blend-exclusion transition-opacity delay-[350ms] duration-300',
    'opacity-0',
    hasLoaded && 'opacity-100',
    'max-[1530px]:pt-[55px] max-[1530px]:pr-[60px]',
    'mobile-or-landscape:top-auto mobile-or-landscape:bottom-0 mobile-or-landscape:pr-[38px] mobile-or-landscape:pb-10 mobile-or-landscape:mix-blend-normal',
  );

  const buttonClasses = cn(
    'pointer-events-auto relative w-[30px] cursor-pointer justify-self-end',
    'mobile-or-landscape:h-[60px] mobile-or-landscape:w-[60px] mobile-or-landscape:scale-100 mobile-or-landscape:transform mobile-or-landscape:rounded-full mobile-or-landscape:shadow-[0px_3px_7px_rgba(0,0,0,0.3)] mobile-or-landscape:transition-all mobile-or-landscape:duration-200 mobile-or-landscape:ease-in mobile-or-landscape:focus:scale-90',
    'mobile-or-landscape:active:shadow-[0_0_18px_rgba(77,117,234,0.6)] mobile-or-landscape:active:before:opacity-100 mobile-or-landscape:active:before:scale-100 mobile-or-landscape:before:absolute mobile-or-landscape:before:inset-[-6px] mobile-or-landscape:before:rounded-full mobile-or-landscape:before:transition-all mobile-or-landscape:before:duration-300 mobile-or-landscape:before:opacity-0 mobile-or-landscape:before:border mobile-or-landscape:before:border-[#4D75EA] mobile-or-landscape:before:scale-95',
    'mobile-or-landscape:bg-accent',
  );

  const iconWrapperClasses = cn(
    'h-auto w-full max-w-[30px] pt-[7px]',
    'mobile-or-landscape:mt-[19px] mobile-or-landscape:ml-[14px] mobile-or-landscape:p-0',
  );

  const iconClasses = cn(
    '[&_line]:stroke-round [&_line]:ease [&_line]:stroke-white [&_line]:stroke-[1.3] [&_line]:transition-transform [&_line]:duration-300',
    '[&_#bot]:ease [&_#bot]:transition-transform [&_#bot]:delay-150 [&_#bot]:duration-300',
    isOpen && '[&_#bot]:translate-x-[13px] [&_#top]:translate-x-[-28px]',
  );

  return (
    <div className={containerClasses}>
      <div onClick={toggleNav} className={buttonClasses}>
        <div className={iconWrapperClasses}>
          <HamburgerIcon className={iconClasses} />
        </div>
      </div>
    </div>
  );
};

Hamburger.displayName = 'Hamburger';

export default React.memo(Hamburger);
