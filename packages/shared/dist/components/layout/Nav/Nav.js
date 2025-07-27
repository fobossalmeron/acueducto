import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useMemo, useEffect } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import { NavWrapper, NavList, NavLink, BottomNav, Registered, Social, Hoverable } from "./Nav.styles";
const Nav = ({ nav, isOpen, closeNav, locale }) => {
    const router = useRouter();
    useEffect(() => {
        if (isOpen) {
            nav.forEach((item) => {
                router.prefetch(item.link);
            });
        }
    }, [isOpen, router]);
    useEffect(() => {
        const handleRouteChangeComplete = () => {
            closeNav();
        };
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, [router, closeNav]);
    // Usar useMemo para yearRoman
    const yearRoman = useMemo(() => {
        const year = new Date().getFullYear();
        const romanNumerals = [
            { value: 1000, symbol: 'M' },
            { value: 900, symbol: 'CM' },
            { value: 500, symbol: 'D' },
            { value: 400, symbol: 'CD' },
            { value: 100, symbol: 'C' },
            { value: 90, symbol: 'XC' },
            { value: 50, symbol: 'L' },
            { value: 40, symbol: 'XL' },
            { value: 10, symbol: 'X' },
            { value: 9, symbol: 'IX' },
            { value: 5, symbol: 'V' },
            { value: 4, symbol: 'IV' },
            { value: 1, symbol: 'I' }
        ];
        let result = '';
        let remaining = year;
        for (let i = 0; i < romanNumerals.length; i++) {
            while (remaining >= romanNumerals[i].value) {
                result += romanNumerals[i].symbol;
                remaining -= romanNumerals[i].value;
            }
        }
        return result;
    }, []); // Se recalcula solo cuando el componente se monta
    // Optimizar el renderizado condicional
    if (!isOpen)
        return _jsx(NavWrapper, { open: isOpen, id: "Nav" });
    return (_jsxs(NavWrapper, { open: isOpen, id: "Nav", children: [_jsx(NavList, { children: _jsx("ul", { children: nav.map((item, index) => (_jsx("li", { children: _jsxs(Fade, { delay: 200 + index * 50, children: [_jsxs("span", { children: ["0", index + 1] }), _jsx(Link, { href: item.link, as: item.as ? item.as : item.link, locale: locale, children: _jsx(NavLink, { "$active": router.pathname === item.link, children: item.title }) })] }) }, `item${index}`))) }) }), _jsxs(BottomNav, { children: [_jsxs(Registered, { children: ["\u00A9 ", yearRoman, " "] }), _jsxs(Social, { children: [_jsxs(Hoverable, { target: "_blank", rel: "noopener noreferrer", href: "https://www.linkedin.com/company/acueductostudio/", children: ["linkedin", _jsx("span", { children: "linkedin" })] }), _jsxs(Hoverable, { target: "_blank", rel: "noopener noreferrer", href: "https://www.youtube.com/channel/UCuFV_fKt_ELREPwoAb5lprg", children: ["youtube", _jsx("span", { children: "youtube" })] })] })] })] }));
};
export default React.memo(Nav);
