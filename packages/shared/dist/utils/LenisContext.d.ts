import React, { ReactNode } from 'react';
import Lenis from 'lenis';
interface LenisContextType {
    lenis: Lenis | null;
    stopScroll: () => void;
    startScroll: () => void;
}
export declare const useLenis: () => LenisContextType;
interface LenisProviderProps {
    children: ReactNode;
}
export declare const LenisProvider: React.FC<LenisProviderProps>;
export {};
//# sourceMappingURL=LenisContext.d.ts.map