import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocaleContext } from '../../../utils/LangContext';
import Link from 'next/link';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import BorderLink from '../../shared/BorderedLink';
const socialNav = [
    // { title: "facebook", link: "https://www.facebook.com/acueducto.studio/" },
    // { title: "tiktok", link: "https://www.tiktok.com/@acueducto.studio" },
    { title: 'Instagram', link: 'https://www.instagram.com/acueducto.studio/' },
    {
        title: 'YouTube',
        link: 'https://www.youtube.com/channel/UCuFV_fKt_ELREPwoAb5lprg',
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/company/acueductostudio/',
    },
];
export default function FooterNav() {
    const context = useLocaleContext();
    let { main, policies, navTitles, mailto, resources } = context.contact_footer.footer_nav;
    let year = new Date().getFullYear();
    return (_jsxs(Footer, { children: [_jsxs(Navs, { children: [_jsxs(NavList, { children: [_jsx(Fade, { triggerOnce: true, children: _jsx("span", { children: navTitles.main }) }), _jsx("ul", { children: main.map((item, index) => (_jsx(Fade, { triggerOnce: true, delay: 200 + index * 50, children: _jsx("li", { children: _jsx(Link, { href: item.link, as: item.as ? item.as : item.link, locale: context.lang, children: item.title }) }) }, 'itemMain' + index))) })] }), context.lang === 'es' && (_jsxs(NavList, { children: [_jsx(Fade, { triggerOnce: true, children: _jsx("span", { children: navTitles.resources }) }), _jsx("ul", { children: resources.map((item, index) => (_jsx(Fade, { triggerOnce: true, delay: 200 + index * 50, children: _jsx("li", { children: _jsx(Link, { href: item.link, as: item.as ? item.as : item.link, locale: context.lang, children: item.title }) }) }, 'itemResource' + index))) })] })), _jsxs(NavList, { id: "community", children: [_jsx(Fade, { triggerOnce: true, children: _jsx("span", { children: navTitles.community }) }), _jsx("ul", { children: socialNav.map((item, index) => (_jsx(Fade, { triggerOnce: true, delay: 200 + index * 50, children: _jsx("li", { children: _jsx(Link, { href: item.link, children: item.title }) }) }, 'itemSocial' + index))) })] }), _jsxs(NavList, { "$accentColor": true, children: [_jsx(Fade, { triggerOnce: true, children: _jsx("span", { children: navTitles.policies }) }), _jsx("ul", { children: policies.map((item, index) => (_jsx(Fade, { triggerOnce: true, delay: 200 + index * 50, children: _jsx("li", { children: _jsx(Link, { href: item.link, as: item.as ? item.as : item.link, locale: context.lang, children: item.title }) }) }, 'itemPolicy' + index))) })] })] }), _jsx(Colophon, { children: _jsxs(Fade, { triggerOnce: true, children: [_jsxs("p", { children: ["\u00A9 ", year, ", Acueducto"] }), _jsx("a", { href: `mailto:hola@acueducto.studio?subject=${mailto.subject}&body=${mailto.body}`, children: "hola@acueducto.studio" })] }) })] }));
}
const Footer = styled.div `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  width: 100%;
  padding: 5% 4%;
  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: 600px) {
    padding-bottom: 13%;
  }
`;
const Navs = styled.div `
  grid-column: 2 / span 11;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 800px) {
    grid-column: 1 / span 12;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
  }
`;
const NavList = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    background-image: none !important;
  }
  ul {
    list-style: none;
    font-size: 1.6rem;
    color: ${(p) => p.$accentColor
    ? p.theme.colors.foreground_lowest
    : p.theme.colors.foreground_lower};
    li:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
  span {
    font-size: 2.1rem;
    font-weight: 200;
    margin: 0 0 30px;
    display: block;
    color: ${(p) => p.$accentColor ? p.theme.colors.accent : p.theme.colors.foreground_low};
  }
  @media (max-width: 950px) {
    span {
      font-size: 2rem;
    }
  }
  @media (max-width: 800px) {
    grid-column-end: span 1;
    &#community {
      grid-column-start: 2;
      grid-row-start: 1;
    }
    span {
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }
  @media (max-width: 600px) {
    ul {
      font-size: 1.6rem;
    }
  }
  a {
    ${BorderLink({ showLink: false })}
  }
`;
const Colophon = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 2 / span 11;
  margin-top: 10%;
  font-size: 1.6rem;

  p {
    color: ${(p) => p.theme.colors.accent};
  }
  > div:nth-of-type(3) a {
    position: relative;
    padding-left: 33px;
  }
  img {
    pointer-events: none;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    background-color: ${(p) => p.theme.colors.background};
    padding-right: 8px;
    padding-bottom: 5px;
    left: 0;
  }
  &:hover {
    background-color: ${(p) => p.theme.colors.background};
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column: 2 / span 10;
    > div:nth-of-type(3) {
      justify-content: flex-end;
      display: flex;
    }
    > div:nth-of-type(2) {
      text-align: center;
    }
  }
  @media (max-width: 950px) {
    font-size: 1.6rem;
    img {
      width: 25px;
      height: 30px;
      padding-right: 5px;
    }
    > div:nth-of-type(3) a {
      padding-left: 25px;
    }
  }
  @media (max-width: 800px) {
    grid-column: 1 / span 12;
    flex-direction: column-reverse;
    display: flex;
    margin-top: 50px;
    > div {
      &:nth-of-type(3) {
        justify-content: flex-start;
        margin-bottom: 15px;
      }
      &:nth-of-type(2) {
        text-align: left;
        margin-bottom: 20px;
      }
    }
  }
  div {
    a {
      justify-self: start;
      ${BorderLink({ showLink: true })}
    }
    background-image: none;
  }
`;
