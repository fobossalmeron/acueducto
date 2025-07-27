import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import WWW from '../../../assets/images/layout/www.svg';
import { useLanguageToggler } from './useLangSelector';
import { useRef, useEffect } from 'react';
function LangSelector({ isContentVisible, setIsContentVisible, onLanguageChangeStart, }) {
    const { changeToLanguage, currentLanguage, showLangSelector } = useLanguageToggler(onLanguageChangeStart);
    const refButton = useRef(null);
    const refContent = useRef(null);
    useEffect(() => {
        if (!isContentVisible)
            return;
        function handleClickOutside(event) {
            if (refButton.current &&
                !refButton.current.contains(event.target) &&
                refContent.current &&
                !refContent.current.contains(event.target)) {
                setIsContentVisible(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isContentVisible, setIsContentVisible]);
    const toggleContent = () => {
        setIsContentVisible((prev) => !prev);
    };
    return (_jsxs("div", { className: "pointer-events-none fixed top-0 right-0 left-0 z-12 mx-auto w-full h-full max-w-[1500px]", children: [_jsx("div", { id: "LangSelector", ref: refButton, onClick: toggleContent, className: `xs:top-10 xs:right-[7%] height-landscape:top-6 height-landscape:translate-0 height-landscape:right-6 absolute top-6 right-6 z-20 flex h-13 w-13 transform content-center items-center justify-center rounded-full mix-blend-exclusion transition-all duration-300 sm:top-10 sm:right-10 md:top-1/2 md:-translate-y-1/2 ${!isContentVisible
                    ? 'border-1 border-transparent hover:border-[#4D75EA] hover:shadow-[0_0_18px_rgba(77,117,234,0.6)] active:border-[#4D75EA] active:shadow-[0_0_18px_rgba(77,117,234,0.6)]'
                    : 'border-1 border-transparent'} ${!showLangSelector
                    ? 'pointer-events-none opacity-0'
                    : 'cursor-pointer opacity-100 pointer-events-auto'}`, children: _jsx(WWW, {}) }), _jsx("div", { id: "LangSelectorContent", ref: refContent, className: `xs:top-10 xs:right-[7%] pointer-events-none absolute top-6 right-6 z-10 h-13 w-13 transform p-4 transition-opacity duration-300 sm:top-10 sm:right-10 md:top-1/2 md:-translate-y-1/2 ${!showLangSelector || !isContentVisible ? 'opacity-0' : 'opacity-100'}`, children: _jsxs("div", { className: "card text-over-black absolute top-0 right-0 flex flex-col items-start gap-1 rounded-4xl p-2 pr-13 pl-2 text-base", children: [_jsx("span", { onClick: () => {
                                changeToLanguage('es');
                                setIsContentVisible(false);
                            }, className: `pointer-events-auto w-22 rounded-2xl p-2 text-center transition-all duration-300 ${currentLanguage === 'es' ? 'bg-accent/15 text-accent-light hover:bg-accent/15 active:bg-accent/15' : 'cursor-pointer hover:bg-white/10 active:bg-white/10'}`, children: "Espa\u00F1ol" }), _jsx("span", { onClick: () => {
                                changeToLanguage('en');
                                setIsContentVisible(false);
                            }, className: `pointer-events-auto w-22 rounded-2xl p-2 text-center transition-all duration-300 ${currentLanguage === 'en' ? 'bg-accent/15 text-accent-light hover:bg-accent/15 active:bg-accent/15' : 'cursor-pointer hover:bg-white/10 active:bg-white/10'}`, children: "English" })] }) })] }));
}
export default LangSelector;
