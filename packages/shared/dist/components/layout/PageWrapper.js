import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
const PageWrapper = memo(({ children, className, unPadded, style }) => (_jsx(Main, { id: "Main", className: className, "$unPadded": unPadded, style: style, children: children })));
PageWrapper.displayName = 'PageWrapper';
export default PageWrapper;
const Main = styled.main `
  position: relative;
  width: calc(100% - 38px);
  height: calc(100% - 38px);
  max-width: 1502px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    padding-top: ${(props) => (props.$unPadded ? '0' : '5%')};
  }
  @media (max-width: 700px) {
    padding-top: ${(props) => (props.$unPadded ? '0' : '10%')};
  }
  @media (max-width: 600px), (max-height: 450px) {
    padding-bottom: 20px;
  }
  @media (max-width: 500px) {
    padding-top: ${(props) => (props.$unPadded ? '0' : '15%')};
  }
  @media (max-width: 400px) {
    padding-top: ${(props) => (props.$unPadded ? '0' : '20%')};
  }
`;
