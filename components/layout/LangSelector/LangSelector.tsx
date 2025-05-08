import WWW from 'public/assets/img/layout/www.svg';
import { useLanguageToggler } from './useLangSelector';
import type { Dispatch, SetStateAction } from 'react';

interface LangSelectorProps {
  isContentVisible: boolean;
  setIsContentVisible: Dispatch<SetStateAction<boolean>>;
}

function LangSelector({
  isContentVisible,
  setIsContentVisible,
}: LangSelectorProps) {
  const { changeToLanguage, currentLanguage, showLangSelector } =
    useLanguageToggler();

  const toggleContent = () => {
    setIsContentVisible((prev) => !prev);
  };

  return (
    <>
      <div
        id="LangSelector"
        onClick={toggleContent}
        className={`xs:top-10 xs:right-[7%] fixed top-6 right-6 z-20 flex h-13 w-13 transform content-center items-center justify-center rounded-full mix-blend-exclusion transition-all duration-300 sm:top-10 sm:right-10 md:top-1/2 md:-translate-y-1/2 ${
          !isContentVisible
            ? 'border-1 border-transparent hover:border-[#4D75EA] hover:shadow-[0_0_18px_rgba(77,117,234,0.6)]'
            : 'border-1 border-transparent'
        } ${
          !showLangSelector
            ? 'pointer-events-none opacity-0'
            : 'cursor-pointer opacity-100'
        }`}
      >
        <WWW />
      </div>
      <div
        id="LangSelectorContent"
        className={`xs:top-10 xs:right-[7%] pointer-events-none fixed top-6 right-6 z-10 h-13 w-13 transform p-4 transition-opacity duration-300 sm:top-10 sm:right-10 md:top-1/2 md:-translate-y-1/2 ${!showLangSelector || !isContentVisible ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="card text-over-black absolute top-0 right-0 flex flex-col items-start gap-1 rounded-4xl p-2 pr-13 pl-2 text-base">
          <span
            onClick={() => {
              changeToLanguage('es');
              setIsContentVisible(false);
            }}
            className={`pointer-events-auto w-22 rounded-2xl p-2 text-center transition-all duration-300 ${currentLanguage === 'es' ? 'bg-accent/15 text-accent-light hover:bg-accent/15' : 'cursor-pointer hover:bg-white/10'}`}
          >
            Español
          </span>
          <span
            onClick={() => {
              changeToLanguage('en');
              setIsContentVisible(false);
            }}
            className={`pointer-events-auto w-22 rounded-2xl p-2 text-center transition-all duration-300 ${currentLanguage === 'en' ? 'bg-accent/15 text-accent-light' : 'cursor-pointer hover:bg-white/10'}`}
          >
            English
          </span>
        </div>
      </div>
    </>
  );
}

export default LangSelector;
