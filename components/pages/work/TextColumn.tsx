import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import React from 'react';

const TextColumn = ({
  children,
  padding = 0,
}: {
  children: React.ReactNode;
  padding?: number | string;
}) => (
  <Column $passedPadding={padding}>
    <Fade triggerOnce>{children}</Fade>
  </Column>
);

const Column = styled.div<{ $passedPadding?: number | string }>`
  padding: ${(props) => (props.$passedPadding ? props.$passedPadding : '0 5%')};
  h2,
  .h2 {
    font-size: 5.8rem;
    padding: 15% 0 5% 0;
    font-weight: 300;
    max-width: 670px;
    line-height: 110%;
    &.topUnPadded {
      padding: 1px 0 5% 0;
    }
    b {
      font-size: 4rem;
    }
  }
  h3,
  .h3 {
    font-size: 4.5rem;
    max-width: 670px;
    font-weight: 300;
    padding: 18% 0 5% 0;
    line-height: 132%;
  }
  p {
    max-width: 670px;
    &.bigger {
      font-size: 3.4rem;
      text-align: center;
      margin-top: 10%;
    }
  }
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1000px) {
    h2,
    .h2 {
      font-size: 4.8rem;
      b {
        font-size: 3rem;
      }
    }
    h3,
    .h3 {
      font-size: 3.5rem;
      margin-bottom: 0;
    }
  }
  @media (max-width: 700px) {
    h2,
    .h2 {
      font-size: 4rem;
      b {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 600px) {
    h3,
    .h3 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 450px) {
    h2,
    .h2 {
      font-size: 3.3rem;
    }
  }
`;

export default TextColumn;
