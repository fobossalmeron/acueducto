import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Span } from "./Dangerously";
import Arrow from "./Arrow";
import { useRouter } from "next/router";
function LinkWithArrow({ link, linktext, as, }) {
    let router = useRouter();
    return (_jsx(Link, { href: link[0], as: as, passHref: true, locale: router.locale, legacyBehavior: true, children: _jsxs(LinkContainer, { children: [_jsx(Fade, { triggerOnce: true, children: _jsxs("p", { children: [_jsx(Span, { children: linktext }), " ", _jsx("b", { children: link[1] })] }) }), _jsx(Arrow, {})] }) }));
}
export default LinkWithArrow;
const LinkContainer = styled.a `
  text-decoration: none;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  p {
    padding-right: 15px;
  }
  b {
    color: ${(props) => props.theme.colors.foreground};
    font-weight: 100;
    border-bottom: ${(props) => props.theme.stroke + " solid " + props.theme.colors.accent};
  }
  a span {
    align-self: flex-end;
    position: absolute;
    right: 0%;
  }
  &:hover {
    svg * {
      stroke: ${(props) => props.theme.colors.accent};
    }
  }
  @media (max-width: 600px) {
    svg {
      border: 2px solid ${(props) => props.theme.colors.foreground_low};
      padding: 10px;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      bottom: -5px;
    }
  }
`;
