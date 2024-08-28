import { useState, useEffect, useRef } from "react";
import { useLocalizedContent } from "utils/useLocalizedContent";
import { ThemeProvider } from "styled-components";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import Layout from "components/layout/Layout";
import theme from "styles/theme";
import delayForLoading from "utils/delayForLoading";
import en from "public/locales/en/common.json";
import es from "public/locales/es/common.json";
import { LangProvider } from "utils/LangContext";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { LenisProvider } from "utils/LenisContext";
import { AppProps } from "next/app";
import { NextRouter } from "next/router";
import { SharedTProps } from "../utils/LangContext";

interface CustomAppProps extends Omit<AppProps, 'router'> {
  router: NextRouter;
}

function App({ Component, pageProps, router }: CustomAppProps) {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const LoadingBarRef = useRef<LoadingBarRef>(null);

  const sharedT = useLocalizedContent({
    locale: router.locale,
    fileName: "common",
    initialContent: router.locale === "en" ? en : es,
  }) as SharedTProps;

  useEffect(() => {
    // Disable scroll
    const targetElement = document.querySelector("#dum"); //dummy
    disableBodyScroll(targetElement);

    // Load Animation
    delayForLoading(800).then(() => {
      // console.log("start animation");
      const bordered = document.getElementById("bordered");
      const logo = document.getElementById("logo");
      const revealer = document.getElementById("revealer");
      if (bordered) {
        // Transition out
        bordered.classList.add("hidden");
        logo.style.opacity = "0";

        setTimeout(() => {
          revealer.style.pointerEvents = "none";
          revealer.style.opacity = "0";
          setHasLoaded(true);
        }, 400);

        setTimeout(() => {
          // Remove transition items from DOM
          bordered.remove();
          revealer.remove();
          logo.remove();
        }, 1000);
      }
    });
    // router event listeners for loadingBar
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      // remove loadingBar event listeners
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, []);

  useEffect(() => {
    const targetElement = document.querySelector("#dum"); //dummy
    hasLoaded &&
      (console.log("Page hasLoaded"), enableBodyScroll(targetElement));
  }),
    [hasLoaded]; 

  const handleRouteComplete = (url: string) => {
    setTimeout(function () {
      LoadingBarRef.current?.complete();
    }, 300);
  };

  const handleRouteStart = (url: string) => {
    LoadingBarRef.current?.continuousStart();
  };

  const handleRouteError = (err: Error, url: string) => {
    setTimeout(function () {
      if ("cancelled" in err && err.cancelled) {
        // console.log(`${err} on route to ${url}`);
      }
      LoadingBarRef.current?.complete();
    }, 300);
  };

  return (
    <ThemeProvider theme={theme}>
      <LangProvider value={sharedT}>
        <LenisProvider>
          <LoadingBar
            ref={LoadingBarRef}
            height={3}
            color={theme.colors.accent}
            className="TopBar"
          />
          <PrismicPreview repositoryName={repositoryName}>
            <Layout t={sharedT} hasLoaded={hasLoaded}>
              <Component {...pageProps} lang={router.locale} />
            </Layout>
          </PrismicPreview>
        </LenisProvider>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
