import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { P, H1, H2 } from './Dangerously';
import Grid, { Container } from './TitleSectionGrid';
import LinkWithArrow from './LinkWithArrow';
import { Fade } from 'react-awesome-reveal';
const TitleSection = ({ title, p, link, linktext, as, borderTop, children, ul, heading, seo_h1, className, }) => {
    return (_jsxs(Grid, { "$borderTop": borderTop, children: [
            // Si viene un h1 de SEO, renderearlo junto con el título
            seo_h1 && (_jsx(Fade, { triggerOnce: true, children: _jsxs("div", { className: className, children: [_jsx(H1, { children: seo_h1 }), _jsx(P, { className: "h1", children: title })] }) })), heading === 1 && (_jsx(Fade, { triggerOnce: true, children: _jsx(H1, { className: "h1", children: title }) })), heading === 2 && (_jsx(Fade, { triggerOnce: true, children: _jsx(H2, { className: "h1", children: title }) })), 
            // Si no hay heading el default es usar un P, revisamos que tampoco exista un título de SEO
            !heading && !seo_h1 && (_jsx(Fade, { triggerOnce: true, children: _jsx(P, { className: "h1", children: title }) })), p && (_jsx(Fade, { triggerOnce: true, children: _jsx(P, { children: p }) })), ul && (_jsx(Container, { children: _jsx(Fade, { triggerOnce: true, children: _jsx("ul", { children: ul.map((t, index) => (_jsx("li", { children: t }, 'li' + index))) }) }) })), link && (_jsx(Container, { children: _jsx(Fade, { triggerOnce: true, children: _jsx(LinkWithArrow, { link: link, linktext: linktext, as: as }) }) })), children && (_jsx(Container, { children: _jsx(Fade, { triggerOnce: true, children: children }) }))] }));
};
export default React.memo(TitleSection);
