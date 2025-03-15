import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  ReactNode,
} from 'react';
import Lenis from 'lenis';
import { useRouter } from 'next/router';

interface LenisContextType {
  lenis: Lenis | null;
  stopScroll: () => void;
  startScroll: () => void;
}

const LenisContext = createContext<LenisContextType | undefined>(undefined);

export const useLenis = (): LenisContextType => {
  const context = useContext(LenisContext);
  if (context === undefined) {
    throw new Error('useLenis must be used within a LenisProvider');
  }
  return context;
};

interface LenisProviderProps {
  children: ReactNode;
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const router = useRouter();

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(4, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      lenisRef.current?.scrollTo(0, { immediate: true });
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  const stopScroll = () => {
    lenisRef.current?.stop();
  };

  const startScroll = () => {
    lenisRef.current?.start();
  };

  return (
    <LenisContext.Provider
      value={{ lenis: lenisRef.current, stopScroll, startScroll }}
    >
      {children}
    </LenisContext.Provider>
  );
};
