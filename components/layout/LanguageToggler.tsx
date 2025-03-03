import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Arrows from 'public/assets/img/layout/language2.svg';
import { useRouter } from 'next/router';

const ONE_LANG_PAGES = [
  'user-feedback-masterclass',
  'meetup',
  'consultoria',
  'podcast',
  'mvs',
  'diagnostico',
  'linkenbio',
  'blog',
];

const ROUTE_MAPPINGS = {
  en: {
    '/work/wellmee': '/portafolio/wellmee',
    '/work/recupera': '/portafolio/recupera',
    '/work/borgatta': '/portafolio/borgatta',
    '/work/blockstem': '/portafolio/blockstem',
    '/work/rahid': '/portafolio/rahid',
    '/work/ladanzadelasfieras': '/portafolio/ladanzadelasfieras',
    '/work/salvajenada': '/portafolio/salvajenada',
    '/work': '/portafolio',
    '/about': '/nosotros',
    '/contact': '/contacto',
    '/pitch': '/pitch',
    '/cookies': '/cookies',
    '/privacy': '/privacidad',
    '/': '/',
  },
  es: {
    '/portafolio/wellmee': '/work/wellmee',
    '/portafolio/recupera': '/work/recupera',
    '/portafolio/borgatta': '/work/borgatta',
    '/portafolio/blockstem': '/work/blockstem',
    '/portafolio/rahid': '/work/rahid',
    '/portafolio/ladanzadelasfieras': '/work/ladanzadelasfieras',
    '/portafolio/salvajenada': '/work/salvajenada',
    '/portafolio': '/work',
    '/nosotros': '/about',
    '/contacto': '/contact',
    '/pitch': '/pitch',
    '/cookies': '/cookies',
    '/privacidad': '/privacy',
    '/': '/',
  },
};

function LanguageToggler({
  hasLoaded,
  locale,
}: {
  hasLoaded: boolean;
  locale: string;
}) {
  const router = useRouter();
  const [showToggler, setShowToggler] = useState(false);

  useEffect(() => {
    setShowToggler(!ONE_LANG_PAGES.some((v) => router.asPath.includes(v)));
  }, [router.asPath]);

  const handleLink = () => {
    const targetLocale = locale === 'en' ? 'es' : 'en';
    const currentPath = router.asPath;

    const getTargetPath = () => {
      // Manejo de rutas de trabajo/portafolio
      if (
        currentPath.startsWith('/work/') ||
        currentPath.startsWith('/portafolio/')
      ) {
        const basePath = locale === 'en' ? '/work/' : '/portafolio/';
        const targetBasePath = locale === 'en' ? '/portafolio/' : '/work/';
        return currentPath.replace(basePath, targetBasePath);
      }

      // Manejo de otras rutas mapeadas
      const mappings = ROUTE_MAPPINGS[locale as keyof typeof ROUTE_MAPPINGS];
      return mappings[currentPath as keyof typeof mappings] || currentPath;
    };

    const targetPath = getTargetPath();
    router.push(targetPath, targetPath, { locale: targetLocale });
  };

  return (
    <A onClick={handleLink} $reveal={hasLoaded} $available={showToggler}>
      <IconWrapper>
        <Arrows />
      </IconWrapper>
      <RevealWrapper>
        <Reveal>
          <span>{locale === 'es' ? 'switch language' : 'cambiar idioma'}</span>
          {locale === 'es' ? 'english' : 'español'}
        </Reveal>
      </RevealWrapper>
    </A>
  );
}

export default React.memo(LanguageToggler);

const RevealWrapper = styled.div`
  cursor: pointer;
  bottom: 50%;
  display: flex;
  z-index: 10;
  height: 100%;
  pointer-events: none;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding-right: 35px;
  margin: 0px auto;
  max-width: 1500px;
  opacity: 0;
  transition: opacity 0.25s ease-in;
  @media (max-width: 600px) {
    align-items: flex-start;
    padding-top: 40px;
    padding-right: calc(22px + 1%);
  }
  @media (max-width: 450px) {
    padding-top: 20px;
    padding-right: 23px;
  }
  @media (max-height: 450px) {
    align-items: flex-start;
    padding-top: 24px;
    padding-right: 25px;
  }
  @media (max-height: 450px) and (max-width: 600px) {
    align-items: flex-start;
    padding-top: 20px;
  }
`;

const A = styled.a<{ $available: boolean; $reveal: boolean }>`
  opacity: ${(props) => (props.$available && props.$reveal ? 1 : 0)};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${RevealWrapper} {
        opacity: 1;
      }
    }
  }
  @media (max-width: 600px) {
    &:hover {
      ${RevealWrapper} {
        opacity: 0;
      }
    }
  }
`;

const Reveal = styled.div`
  background-color: ${(props) => props.theme.colors.accent};
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
  padding: 9px 10px 10px 23px;
  position: absolute;
  border-radius: 30px;
  width: 138px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-weight: 100;
  text-align: left;
  opacity: 1;
  font-size: 1.5rem;
  transform: translateX(-50%);
  pointer-events: none;
  span {
    font-size: 1.1rem;
    line-height: 1;
    width: 100%;
    color: ${(props) => props.theme.colors.background};
    font-weight: 300;
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  bottom: 50%;
  display: flex;
  z-index: 10;
  height: 100%;
  mix-blend-mode: exclusion;
  pointer-events: none;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding-right: 35px;
  margin: 0px auto;
  max-width: 1500px;
  opacity: 1;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg {
        transform: scale(0.95);
      }
    }
  }
  svg {
    width: 30px;
    pointer-events: auto;
    padding: 15px;
    box-sizing: content-box;
    transition: 0.2s ease-in transform;
  }
  &:active {
    svg {
      transform: scale(0.95);
    }
  }
  @media (max-width: 600px) {
    align-items: flex-start;
    padding-top: 40px;
    padding-right: calc(22px + 1%);
  }
  @media (max-width: 450px) {
    padding-top: 20px;
    padding-right: 23px;
  }
  @media (max-height: 450px) {
    align-items: flex-start;
    padding-top: 24px;
    padding-right: 25px;
  }
  @media (max-height: 450px) and (max-width: 600px) {
    align-items: flex-start;
    padding-top: 20px;
  }
`;
