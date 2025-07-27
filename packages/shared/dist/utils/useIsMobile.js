import { useState, useCallback, useEffect } from 'react';
export const useIsMobile = (breakpoint = 650) => {
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth <= breakpoint);
    }, [breakpoint]);
    useEffect(() => {
        if (typeof window !== "undefined") {
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [handleResize]);
    return isMobile;
};
