import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useRef, useEffect, } from 'react';
import Lenis from 'lenis';
import { useRouter } from 'next/router';
const LenisContext = createContext(undefined);
export const useLenis = () => {
    const context = useContext(LenisContext);
    if (context === undefined) {
        throw new Error('useLenis must be used within a LenisProvider');
    }
    return context;
};
export const LenisProvider = ({ children }) => {
    const lenisRef = useRef(null);
    const router = useRouter();
    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(4, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });
        function raf(time) {
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
    return (_jsx(LenisContext.Provider, { value: { lenis: lenisRef.current, stopScroll, startScroll }, children: children }));
};
