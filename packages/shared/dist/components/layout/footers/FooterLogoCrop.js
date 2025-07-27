import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Logo from "public/shared/images/layout/logo.svg";
const FooterLogoCrop = ({ color }) => (_jsx(LogoCrop, { color: color, children: _jsx(Fade, { triggerOnce: true, children: _jsx(Logo, {}) }) }));
export default FooterLogoCrop;
const LogoCrop = styled.div `
  width: 100%;
  grid-column: unset !important;
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  bottom: 0;
  height: 175px;
  pointer-events: none;
  svg {
    width: 110%;
    height: auto;
    transform: translateY(13%);
    opacity: 0.3;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(35%);
    * {
      fill: ${(p) => (p.color ? p.color : "rgba(0, 0, 0, 0.5)")};
    }
  }
`;
