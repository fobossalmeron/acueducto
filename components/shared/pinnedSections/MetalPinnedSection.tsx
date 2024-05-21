import React from "react";
import styled from "styled-components";
import { H1, H2, P } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";

type PinnedProps = {
  title: string;
  className?: string;
  unPadded?: boolean;
  notSticky?: boolean;
  borderTop?: boolean;
  id?: string;
  children: React.ReactNode;
  disableFade?: boolean;
  heading?: number;
  seo_h1?: string;
};

const MetalPinnedSection = ({
  title,
  children,
  className,
  borderTop,
  id,
  disableFade,
  notSticky,
  heading,
  seo_h1,
}: PinnedProps) => (
  <Pinned
    className={className}
    borderTop={borderTop}
    id={id}
    notSticky={notSticky}
  >
    {
      // Si viene un h1 de SEO, renderearlo junto con el título
      seo_h1 && (
        <Fade triggerOnce>
          <div>
            <H1>{seo_h1}</H1>
            <P className="h1">{title}</P>
          </div>
        </Fade>
      )
    }
    {heading === 1 && (
      <Fade triggerOnce>
        <H1 className="h1">{title}</H1>
      </Fade>
    )}
    {heading === 2 && (
      <Fade triggerOnce>
        <H2 className="h1">{title}</H2>
      </Fade>
    )}
    {
      // Si no hay heading el default es usar un P, revisamos que tampoco exista un título de SEO
      !heading && !seo_h1 && (
        <Fade triggerOnce>
          <P className="h1">{title}</P>
        </Fade>
      )
    }
    <ScrollDown>
      {disableFade ? children : <Fade triggerOnce>{children}</Fade>}
    </ScrollDown>
  </Pinned>
);
export default React.memo(MetalPinnedSection);

const ScrollDown = styled.div`
  grid-column: 7 / span 5;
  display: flex;
  flex-direction: column;
  position: relative;
  ol {
    list-style: none;
  }
`;

const Pinned = styled.div<{ borderTop: boolean; notSticky: boolean }>`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 150px 4% calc(70px + 5%) 4%;
  border-top: ${(props) =>
    props.borderTop
      ? `${props.theme.stroke} solid ${props.theme.colors.foreground}`
      : "none"};

  div:first-of-type {
    grid-column: 2 / span 5;
    z-index: 1;
  }
  h1:not(.h1) {
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 4px;
    line-height: 140%;
    font-weight: 100;
    position: ${(p) => (p.notSticky ? "relative" : "sticky")};
  }
  .h1 {
    position: ${(p) => (p.notSticky ? "relative" : "sticky")};
    max-height: 300px;
    top: ${(p) => (p.notSticky ? "0px" : "150px")};
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
    .h1 {
      top: ${(p) => (p.notSticky ? "unset" : "100px")};
    }
    ${ScrollDown} {
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
    .h1 {
      position: relative;
      top: 0;
      margin-bottom: 5%;
      max-width: 670px;
    }
    div:first-of-type {
      grid-column: 2 / span 10;
    }
    ${ScrollDown} {
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
    ${ScrollDown} {
      grid-column: 3 / span 8;
    }
    h1:not(.h1) {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 5%;
    div:first-of-type,
    ${ScrollDown} {
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
