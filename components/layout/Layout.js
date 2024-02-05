import React, { useEffect, useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import LanguageToggler from "./LanguageToggler";
import NavTrigger from "./NavTrigger";
import { useRouter } from "next/router";
import CookieMessage from "./CookieMessage";
import ScrollIncentive from "./ScrollIncentive";
import ReactPixel from "react-facebook-pixel";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import NewsletterPopup from "components/NewsletterPopup";
import TagManager from "react-gtm-module";
import LinkedInTag from "react-linkedin-insight";

const Layout = ({ t, hasLoaded, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [showSketch, setShowSketch] = useState(true);
  const [headerTitle, setTitle] = useState("");
  const [showArrow, setShowArrow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const initializePixels = () => {
    TagManager.initialize({
      gtmId: "GTM-NQHHFWF",
    });
    const fbPptions = {
      autoConfig: true,
      debug: false,
    };
    ReactPixel.init("506854653278097", null, fbPptions);
    ReactPixel.pageView();
    LinkedInTag.init("1943114", "dc", false);
  };

  useEffect(() => {
    hasLoaded && initializePixels();
  }, [hasLoaded]);

  useEffect(() => {
    if (router.route === "/") {
      setShowSketch(true);
      setShowArrow(true);
      setShowPopup(false);
    } else if (router.route === "/podcast") {
      setShowSketch(false);
      setShowArrow(false);
      setShowPopup(true);
    } else {
      setShowSketch(false);
      setShowArrow(false);
      setShowPopup(false);
    }
    hasLoaded && ReactPixel.pageView();
  }, [router.route]);

  useEffect(() => {
    if (showArrow) {
      document.body.onscroll = function () {
        checkScroll();
      };
      // let clipper = document.querySelector("#Clipper");
      // clipper.onscroll = function () {
      //   checkScroll();
      // };
      // Se lo quitamos ahora que no hay PageClipper
    }
  }, [showArrow]);

  const checkScroll = () => {
    //Cambiamos también acá decía Clipper
    if (
      document.getElementById("Wrapper").scrollTop > 100 ||
      window.scrollY > 100
    ) {
      document.body.onscroll = null;

      let clipper = document.querySelector("#Wrapper");
      clipper.onscroll = null;
      setShowArrow(false);
    }
  };

  useEffect(() => {
    let targetElement = document.querySelector("#Nav");
    if (isOpen) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
  }, [isOpen]);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const closeNav = () => {
    setOpen(false);
  };
  return (
    <>
      <PageWrapper id="Wrapper">
        <Border />
        <BlackBorder />
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
          setTitle: setTitle,
          hasLoaded: hasLoaded,
          showSketch: showSketch,
          locale: router.locale,
        })}
        <LanguageToggler locale={router.locale} hasLoaded={hasLoaded} />
        <ScrollIncentive hasLoaded={hasLoaded} showArrow={showArrow} />
        <CookieMessage t={t} hasLoaded={hasLoaded} />
        <BodyOverflow hasLoaded={hasLoaded} />
        {showPopup && <NewsletterPopup />}
      </PageWrapper>
    </>
  );
};

export default Layout;

const BodyOverflow = createGlobalStyle`
  .TopBar div{
     box-shadow: 1px 1px 4px ${(props) => props.theme.colors.accent} !important;
  }
  @media (max-width: 600px), (max-height:450px) {
    #Wrapper{
      overflow: ${(props) => (props.hasLoaded ? "unset" : "hidden")};
      height:${(props) => (props.hasLoaded ? "unset" : "100%")};
    }
    body {
    overflow-y: ${(props) => (props.hasLoaded ? "auto" : "hidden")};
    }  
  }
`;

const PageWrapper = styled.div`
  /* top: -3px; */
  position: relative;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.foreground};
  /* background-color: ${(props) => props.theme.colors.background}; */
`;

const BlackBorder = styled.div`
  opacity: 1;
  pointer-events: none;
  z-index: 99;
  width: calc(100% - 36px);
  height: calc(100% - 36px);
  background-color: none;
  position: fixed;
  &:after {
    content: " ";
    position: absolute;
    top: 18px;
    right: -18px;
    left: 18px;
    bottom: -18px;
    border-radius: 40px;
    outline: ${(p) => `45px solid ${p.theme.colors.background}`};
  }
`;

const Border = styled.div`
  opacity: 1;
  pointer-events: none;
  z-index: 99;
  width: calc(100% - 36px);
  height: calc(100% - 36px);
  background-color: none;
  position: fixed;
  left: 18px;
  top: 18px;
  right: 18px;
  bottom: 18px;
  margin: 0 auto;
  max-width: 1504px;
  mix-blend-mode: exclusion;
  transition:
    opacity 0.3s ease-in,
    border 0.3s ease-in;
  border: ${(props) =>
    `${props.theme.stroke} solid ${props.theme.colors.foreground}`};
  border-radius: 60px;

  @media (max-width: 1530px) {
    border-radius: 40px;
  }
  @media (max-width: 600px), (max-height: 450px) {
    border-radius: 30px;
    mix-blend-mode: normal;
    &:after {
      content: " ";
      position: absolute;
      top: -42px;
      right: -42px;
      left: -42px;
      bottom: -42px;
      border-radius: 70px;
      border: ${(p) => `40px solid ${p.theme.colors.background}`};
    }
  }
`;
