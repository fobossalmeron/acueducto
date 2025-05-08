import React, { useMemo } from 'react';
import WWW from 'public/assets/img/layout/www.svg';

function LanguageToggler({ locale }: { locale: string }) {
  // Valores memorizados para evitar recálculos innecesarios
  const togglerText = useMemo(
    () => ({
      label: locale === 'es' ? 'switch language' : 'cambiar idioma',
      value: locale === 'es' ? 'english' : 'español',
    }),
    [locale],
  );

  return (
    <a id="LanguageToggler" className="opacity-100">
      {/* Contenedor del botón con mix-blend-exclusion */}
      <div
        id="toggler-button"
        className="smallest:pt-[26px] smallest:pr-[27px] mobile-or-landscape:items-start mobile-or-landscape:pt-11 mobile-or-landscape:pr-[6%] pointer-events-none fixed inset-x-0 top-0 bottom-1/2 z-10 mx-auto flex h-full w-full max-w-[1500px] items-start justify-end pt-10 opacity-100 mix-blend-exclusion sm:items-center md:pr-[54px]"
      >
        <div className="relative">
          <div className="pointer-events-auto relative z-20 box-content flex h-11 w-11 cursor-pointer items-center justify-center transition-transform duration-200 ease-in">
            <WWW className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Contenedor del menú separado para evitar heredar mix-blend-exclusion */}
      <div className="pointer-events-none fixed inset-x-0 top-0 bottom-1/2 z-10 mx-auto flex h-full w-full max-w-[1500px] items-start justify-end sm:items-center">
        <div className="smallest:pt-[26px] smallest:pr-[27px] mobile-or-landscape:pt-11 mobile-or-landscape:pr-[6%] relative pt-10 md:pr-[54px]">
          <div
            id="toggler-menu"
            className="absolute top-0 right-0 z-10 opacity-100"
          >
            <div className="bg-accent flex w-[138px] translate-x-[calc(100%-44px)] translate-y-[-85%] transform flex-col items-start justify-center rounded-[30px] p-[9px_10px_10px_23px] text-left text-[1.5rem] font-thin shadow-[0px_3px_7px_rgba(0,0,0,0.2)]">
              <span className="text-background w-full text-[1.1rem] leading-[1] font-light">
                {togglerText.label}
              </span>
              {togglerText.value}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default React.memo(LanguageToggler);
