import React, { useEffect, useState, useCallback, cloneElement } from 'react';
import { useRouter } from 'next/router';
import { GoogleAnalytics } from '@next/third-parties/google';

import styled, { createGlobalStyle } from 'styled-components';
import Header from 'components/ui/Header';
import Nav from './Nav/Nav';
import Hamburger from 'components/ui/Hamburger';
import Border from 'components/ui/Border';
import CookieMessage from './CookieMessage';
import ScrollIncentive from 'components/ui/ScrollIncentive';
import NewsletterPopup from './NewsletterPopup';
import LangSelector from './LangSelector/LangSelector';
import * as FacebookPixel from 'utils/facebookPixel';
import * as LinkedInPixel from 'utils/linkedInPixel';
import { useLenis } from 'utils/LenisContext';

interface LayoutProps {
  t: any;
  hasLoaded: boolean;
  children: React.ReactElement;
}

interface ChildProps {
  setTitle: (title: string) => void;
  hasLoaded: boolean;
  locale: string;
}

const Layout: React.FC<LayoutProps> = ({ t, hasLoaded, children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [headerTitle, setTitle] = useState<string>('');
  const [showArrow, setShowArrow] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isLangSelectorVisible, setLangSelectorVisible] = useState(false);
  const router = useRouter();
  const { stopScroll, startScroll } = useLenis();

  const initializePixels = useCallback((): void => {
    FacebookPixel.initFacebookPixel();
    FacebookPixel.trackPageView();
    LinkedInPixel.initLinkedinPixel();
    LinkedInPixel.trackPageView();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      initializePixels();
    }
  }, [hasLoaded, initializePixels]);

  useEffect(() => {
    const isHomePage = router.route === '/';
    const isPodcastPage = router.route === '/podcast';

    setShowArrow(isHomePage);
    setShowPopup(isPodcastPage);

    if (hasLoaded) {
      FacebookPixel.trackPageView();
    }
  }, [router.route, hasLoaded]);

  useEffect(() => {
    if (isOpen) {
      stopScroll();
      setLangSelectorVisible(false);
    } else {
      startScroll();
    }
  }, [isOpen, stopScroll, startScroll]);

  const toggleNav = useCallback((): void => {
    setOpen((prev) => !prev);
  }, []);
  const closeNav = useCallback((): void => setOpen(false), []);

  return (
    <LayoutWrapper id="LayoutWrapper">
      <Border />
      <Hamburger toggleNav={toggleNav} isOpen={isOpen} hasLoaded={hasLoaded} />
      <Header
        isOpen={isOpen}
        headerTitle={headerTitle}
        hasLoaded={hasLoaded}
        closeNav={closeNav}
        locale={router.locale}
        route={router.route}
      />
      <Nav
        locale={router.locale}
        nav={t.nav}
        closeNav={closeNav}
        isOpen={isOpen}
      />
      {cloneElement(children as React.ReactElement<ChildProps>, {
        setTitle,
        hasLoaded,
        locale: router.locale,
      })}
      <LangSelector
        isContentVisible={isLangSelectorVisible}
        setIsContentVisible={setLangSelectorVisible}
      />
      {hasLoaded && showArrow && <ScrollIncentive />}
      <CookieMessage t={t} hasLoaded={hasLoaded} />
      <BodyOverflow $hasLoaded={hasLoaded} />
      {showPopup && <NewsletterPopup />}
      <GoogleAnalytics gaId="G-VEB3KBDN1C" />
    </LayoutWrapper>
  );
};

export default Layout;

const BodyOverflow = createGlobalStyle<{ $hasLoaded: boolean }>`
  .TopBar div {
     box-shadow: 1px 1px 4px ${(props) => props.theme.colors.accent} !important;
  }
  body  {
    overflow-y: ${(props) => (props.$hasLoaded ? 'auto' : 'hidden')};
    overflow-x: hidden;
  }  
`;

const LayoutWrapper = styled.div`
  position: relative;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    margin: 50px 0;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1744c9;
    border-radius: 50px;
  }
  /* Hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #1744c9;
  }
`;
