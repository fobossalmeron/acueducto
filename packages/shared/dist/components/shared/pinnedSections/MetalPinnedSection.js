import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import styled from 'styled-components';
import { H1, H2, P } from '../Dangerously';
import { Fade } from 'react-awesome-reveal';
const MetalPinnedSection = ({ title, children, className, borderTop, id, disableFade, notSticky, heading, seo_h1, absoluteElement, }) => (_jsxs(Pinned, { className: className, "$borderTop": borderTop, id: id, "$notSticky": notSticky, children: [_jsxs("div", { className: "sticky", children: [
                // Si viene un h1 de SEO, renderearlo junto con el título
                seo_h1 && (_jsx(Fade, { triggerOnce: true, children: _jsxs("div", { children: [_jsx(H1, { children: seo_h1 }), _jsx(P, { className: "h1", children: title })] }) })), heading === 1 && (_jsx(Fade, { triggerOnce: true, children: _jsx(H1, { className: "h1", children: title }) })), heading === 2 && (_jsx(Fade, { triggerOnce: true, children: _jsx(H2, { className: "h1", children: title }) })), 
                // Si no hay heading el default es usar un P, revisamos que tampoco exista un título de SEO
                !heading && !seo_h1 && (_jsx(Fade, { triggerOnce: true, children: _jsx(P, { className: "h1", children: title }) }))] }), _jsx("div", { className: "scroll-down", children: disableFade ? children : _jsx(Fade, { triggerOnce: true, children: children }) }), absoluteElement && absoluteElement] }));
export default React.memo(MetalPinnedSection);
export const ScrollDown = styled.div `
  grid-column: 7 / span 5;
  display: flex;
  flex-direction: column;
  position: relative;
  ol {
    list-style: none;
  }
`;
const Pinned = styled.div `
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 150px 4% calc(70px + 5%) 4%;
  border-top: ${(props) => props.$borderTop
    ? `${props.theme.stroke} solid ${props.theme.colors.foreground_lowest}`
    : 'none'};

  .sticky {
    grid-column: 2 / span 5;
    z-index: 1;
    position: ${(p) => (p.$notSticky ? 'relative' : 'sticky')};
    top: ${(p) => (p.$notSticky ? '0px' : '150px')};
    max-height: 300px;
  }
  .scroll-down {
    grid-column: 7 / span 5;
    display: flex;
    flex-direction: column;
    position: relative;
    ol {
      list-style: none;
    }
  }
  h1:not(.h1) {
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 4px;
    line-height: 140%;
    font-weight: 100;
    position: relative;
  }
  .h1 {
    position: relative;
    max-height: 300px;
    letter-spacing: 0px;
    line-height: 100%;
    font-size: 7rem;
    color: ${(props) => props.theme.colors.accent};
    font-weight: 500;
  }
  a {
    text-decoration: none;
  }
  &:hover {
    background-image: none !important;
  }
  @media (max-width: 1300px) {
    padding-top: 100px;
    .sticky {
      top: ${(p) => (p.$notSticky ? 'unset' : '100px')};
    }
    .scroll-down {
      grid-column: 7 / span 5;
    }
  }
  @media (max-width: 1250px) {
    .h1 {
      font-size: 6rem;
    }
  }
  @media (max-width: 1100px) {
    h1:not(.h1) {
      font-size: 1.3rem;
    }
    .sticky {
      position: relative;
      top: 0;
    }
    .h1 {
      margin-bottom: 5%;
      max-width: 670px;
    }
    div:first-of-type {
      grid-column: 2 / span 10;
    }
    .scroll-down {
      grid-column: 5 / span 7;
    }
  }
  @media (max-width: 950px) {
    .h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    padding-top: 15%;
    div:first-of-type,
    .scroll-down {
      grid-column: 3 / span 8;
    }
    h1:not(.h1) {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 5%;
    div:first-of-type,
    .scroll-down {
      grid-column: 1 / span 12;
    }
    h1:not(.h1) {
      font-size: 1.1rem;
    }
    .h1 {
      margin-bottom: 0;
      font-size: 3.4rem;
    }
  }
`;
