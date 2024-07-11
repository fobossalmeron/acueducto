import React, { useEffect, useState, useCallback } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import LanguageToggler from "./LanguageToggler";
import NavTrigger from "./NavTrigger";
import Border from "./Border";
import { useRouter } from "next/router";
import CookieMessage from "./CookieMessage";
import ScrollIncentive from "./ScrollIncentive";
import ReactPixel from "react-facebook-pixel";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import NewsletterPopup from "components/NewsletterPopup";
import LinkedInTag from "react-linkedin-insight";

interface LayoutProps {
  t: (key: string) => string;
  hasLoaded: boolean;
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ t, hasLoaded, children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [showSketch, setShowSketch] = useState<boolean>(true);
  const [headerTitle, setTitle] = useState<string>("");
  const [showArrow, setShowArrow] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const router = useRouter();

  const initializePixels = useCallback((): void => {
    const fbOptions = {
      autoConfig: true,
      debug: false,
    };
    ReactPixel.init("506854653278097", null, fbOptions);
    ReactPixel.pageView();
    LinkedInTag.init("1943114", "dc", false);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      initializePixels();
    }
  }, [hasLoaded, initializePixels]);

  useEffect(() => {
    const isHomePage = router.route === "/";
    const isPodcastPage = router.route === "/podcast";

    setShowSketch(isHomePage);
    setShowArrow(isHomePage);
    setShowPopup(isPodcastPage);

    if (!isHomePage && !isPodcastPage) {
      setShowSketch(false);
      setShowArrow(false);
      setShowPopup(false);
    }

    if (hasLoaded) {
      ReactPixel.pageView();
    }
  }, [router.route, hasLoaded]);

  useEffect(() => {
    const targetElement = document.querySelector("#Nav");
    if (targetElement) {
      isOpen
        ? disableBodyScroll(targetElement)
        : enableBodyScroll(targetElement);
    }
  }, [isOpen]);

  const toggleNav = useCallback((): void => setOpen((prev) => !prev), []);
  const closeNav = useCallback((): void => setOpen(false), []);

  return (
    <LayoutWrapper id="LayoutWrapper">
      <Border />
      <NavTrigger
        toggleNav={toggleNav}
        isOpen={isOpen}
        hasLoaded={hasLoaded}
        route={router.route}
      />
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
        t={t}
        toggleNav={toggleNav}
        closeNav={closeNav}
        isOpen={isOpen}
      />
      {React.cloneElement(children, {
        setTitle,
        hasLoaded,
        showSketch,
        locale: router.locale,
      })}
      <LanguageToggler locale={router.locale} hasLoaded={hasLoaded} />
      {hasLoaded && showArrow && <ScrollIncentive />}
      <CookieMessage t={t} hasLoaded={hasLoaded} />
      <BodyOverflow hasLoaded={hasLoaded} />
      {showPopup && <NewsletterPopup />}
      <GoogleAnalytics gaId="G-VEB3KBDN1C" />
    </LayoutWrapper>
  );
};

export default Layout;

const BodyOverflow = createGlobalStyle<{ hasLoaded: boolean }>`
  .TopBar div {
     box-shadow: 1px 1px 4px ${(props) => props.theme.colors.accent} !important;
  }
  body {
    overflow-y: ${(props) => (props.hasLoaded ? "auto" : "hidden")};
  }  
  @media (max-width: 600px), (max-height:450px) {
    #LayoutWrapper {
      overflow: ${(props) => (props.hasLoaded ? "unset" : "hidden")};
      height: ${(props) => (props.hasLoaded ? "unset" : "100%")};
    }
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
