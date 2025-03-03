import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { GoogleAnalytics } from '@next/third-parties/google';

import styled, { createGlobalStyle } from 'styled-components';
import Header from 'components/ui/Header';
import Nav from './Nav/Nav';
import LanguageToggler from './LanguageToggler';
import Hamburger from 'components/ui/Hamburger';
import Border from 'components/ui/Border';
import CookieMessage from './CookieMessage';
import ScrollIncentive from 'components/ui/ScrollIncentive';
import NewsletterPopup from './NewsletterPopup';

import ReactPixel from 'react-facebook-pixel';
import LinkedInTag from 'react-linkedin-insight';
import { useLenis } from 'utils/LenisContext';

interface LayoutProps {
  t: any;
  hasLoaded: boolean;
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ t, hasLoaded, children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [headerTitle, setTitle] = useState<string>('');
  const [showArrow, setShowArrow] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const router = useRouter();
  const { stopScroll, startScroll } = useLenis();

  const initializePixels = useCallback((): void => {
    const fbOptions = {
      autoConfig: true,
      debug: false,
    };
    ReactPixel.init('506854653278097', null, fbOptions);
    ReactPixel.pageView();
    LinkedInTag.init('1943114', 'dc', false);
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
      ReactPixel.pageView();
    }
  }, [router.route, hasLoaded]);

  useEffect(() => {
    if (isOpen) {
      stopScroll();
    } else {
      startScroll();
    }
  }, [isOpen, stopScroll, startScroll]);

  const toggleNav = useCallback((): void => {
    setOpen((prev) => !prev);
  }, []);
  const closeNav = useCallback((): void => setOpen(false), []);

  const MemoizedChild = useMemo(
    () =>
      React.cloneElement(children, {
        setTitle,
        hasLoaded,
        locale: router.locale,
      }),
    [children, setTitle, hasLoaded, router.locale],
  );

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
      {MemoizedChild}
      <LanguageToggler locale={router.locale} hasLoaded={hasLoaded} />
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
  #LayoutWrapper  {
    /* overflow-y: ${(props) => (props.$hasLoaded ? 'auto' : 'hidden')};
    overflow-x: hidden; */
    /* height: ${(props) => (props.$hasLoaded ? 'auto' : '100vh')}; */
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
