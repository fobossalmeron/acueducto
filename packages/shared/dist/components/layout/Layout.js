import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useCallback, cloneElement } from 'react';
import { useRouter } from 'next/router';
import { GoogleAnalytics } from '@next/third-parties/google';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../ui/Header';
import Nav from './Nav/Nav';
import Hamburger from '../ui/Hamburger';
import Border from '../ui/Border';
import CookieMessage from './CookieMessage';
import ScrollIncentive from '../ui/ScrollIncentive';
import NewsletterPopup from './NewsletterPopup';
import LangSelector from './LangSelector/LangSelector';
import * as FacebookPixel from '../../utils/facebookPixel';
import * as LinkedInPixel from '../../utils/linkedInPixel';
import { useLenis } from '../../utils/LenisContext';
import PageLoader from './PageLoader';
const Layout = ({ t, hasLoaded, children }) => {
    const [isOpen, setOpen] = useState(false);
    const [headerTitle, setTitle] = useState('');
    const [showArrow, setShowArrow] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [isLangSelectorVisible, setLangSelectorVisible] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const router = useRouter();
    const { stopScroll, startScroll } = useLenis();
    const initializePixels = useCallback(() => {
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
        }
        else {
            startScroll();
        }
    }, [isOpen, stopScroll, startScroll]);
    // Mostrar loader al iniciar cambio de idioma
    const handleLanguageChangeStart = () => {
        setShowLoader(true);
        // Guarda el tiempo de inicio
        window.__loaderStart = Date.now();
    };
    // Ocultar loader cuando termine el cambio de ruta
    useEffect(() => {
        const handleRouteChangeComplete = () => {
            const minDuration = 800;
            const start = window.__loaderStart || Date.now();
            const elapsed = Date.now() - start;
            if (elapsed < minDuration) {
                setTimeout(() => setShowLoader(false), minDuration - elapsed);
            }
            else {
                setShowLoader(false);
            }
        };
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, [router.events]);
    // Bloquear scroll con Lenis cuando el loader esté activo
    useEffect(() => {
        if (showLoader) {
            stopScroll();
        }
        else {
            startScroll();
        }
    }, [showLoader, stopScroll, startScroll]);
    const toggleNav = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);
    const closeNav = useCallback(() => setOpen(false), []);
    return (_jsxs(LayoutWrapper, { id: "LayoutWrapper", children: [_jsx(PageLoader, { visible: showLoader }), _jsx(Border, {}), _jsx(Hamburger, { toggleNav: toggleNav, isOpen: isOpen, hasLoaded: hasLoaded }), _jsx(Header, { isOpen: isOpen, headerTitle: headerTitle, hasLoaded: hasLoaded, closeNav: closeNav, locale: router.locale, route: router.route }), _jsx(Nav, { locale: router.locale, nav: t.nav, closeNav: closeNav, isOpen: isOpen }), cloneElement(children, {
                setTitle,
                hasLoaded,
                locale: router.locale,
            }), _jsx(LangSelector, { isContentVisible: isLangSelectorVisible, setIsContentVisible: setLangSelectorVisible, onLanguageChangeStart: handleLanguageChangeStart }), hasLoaded && showArrow && _jsx(ScrollIncentive, {}), _jsx(CookieMessage, { t: t, hasLoaded: hasLoaded }), _jsx(BodyOverflow, { "$hasLoaded": hasLoaded }), showPopup && _jsx(NewsletterPopup, {}), _jsx(GoogleAnalytics, { gaId: "G-VEB3KBDN1C" })] }));
};
export default Layout;
const BodyOverflow = createGlobalStyle `
  .TopBar div {
     box-shadow: 1px 1px 4px ${(props) => props.theme.colors.accent} !important;
  }
  body  {
    overflow-y: ${(props) => (props.$hasLoaded ? 'auto' : 'hidden')};
    overflow-x: hidden;
  }  
`;
const LayoutWrapper = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
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
