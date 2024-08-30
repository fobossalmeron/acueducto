import { useState, useEffect, useRef, useCallback, useMemo } from "react";
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

  // Usar el hook useLocalizedContent
  const localizedContent = useLocalizedContent({
    locale: router.locale,
    fileName: "common",
    initialContent: router.locale === "en" ? en : es,
  });

  // Memoizar el resultado de useLocalizedContent
  const sharedT = useMemo(() => localizedContent as SharedTProps, [localizedContent]);

  // Memoizar los manejadores de eventos del router
  const handleRouteComplete = useCallback((url: string) => {
    setTimeout(() => {
      LoadingBarRef.current?.complete();
    }, 300);
  }, []);

  const handleRouteStart = useCallback((url: string) => {
    LoadingBarRef.current?.continuousStart();
  }, []);

  const handleRouteError = useCallback((err: Error, url: string) => {
    setTimeout(() => {
      if ("cancelled" in err && err.cancelled) {
        // console.log(`${err} on route to ${url}`);
      }
      LoadingBarRef.current?.complete();
    }, 300);
  }, []);

  useEffect(() => {
    // Deshabilitar el scroll
    const targetElement = document.querySelector("#dum"); //dummy
    disableBodyScroll(targetElement);

    // Animación de carga
    delayForLoading(800).then(() => {
      const bordered = document.getElementById("bordered");
      const logo = document.getElementById("logo");
      const revealer = document.getElementById("revealer");
      if (bordered) {
        // Transición de salida
        bordered.classList.add("hidden");
        logo.style.opacity = "0";

        setTimeout(() => {
          revealer.style.pointerEvents = "none";
          revealer.style.opacity = "0";
          setHasLoaded(true);
        }, 400);

        setTimeout(() => {
          // Eliminar elementos de transición del DOM
          bordered.remove();
          revealer.remove();
          logo.remove();
        }, 1000);
      }
    });

    // Agregar event listeners para la barra de carga
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    // Limpieza: remover event listeners
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, [handleRouteStart, handleRouteComplete, handleRouteError]);

  // Habilitar el scroll cuando la página ha cargado
  useEffect(() => {
    const targetElement = document.querySelector("#dum");
    if (hasLoaded) {
      console.log("Page hasLoaded");
      enableBodyScroll(targetElement);
    }
  }, [hasLoaded]);

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
