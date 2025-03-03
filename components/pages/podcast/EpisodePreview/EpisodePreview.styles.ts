import styled, { css } from "styled-components";
import BorderLink from "components/shared/BorderedLink";

export const sharedStyles = css`
  font-size: 2.5rem;
  font-weight: 200;
  line-height: 115%;
  margin-top: 0;
  margin-bottom: 12px;

  @media (max-width: 970px) {
    font-size: 2.2rem;
  }
  @media (max-width: 620px) {
    font-size: 2rem;
  }
`;

export const ToBeReleased = styled.div`
  border: 2px solid orange;
  border-radius: 100px;
  padding: 10px 20px 14px 20px;
  display: inline-block;
  margin-top: 15px;
  color: 2px solid ${(p) => p.theme.colors.foreground_low};
`;

export const ButtonSpace = styled.div`
  min-width: 270px;
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  .leftFix {
    box-shadow: 0px 3px 10px rgb(0 0 0 / 15%);
  }
  @media (max-width: 600px) {
    min-width: 241px;
  }
`;

export const HoverableContainer = styled.div`
  margin-bottom: 8px;
`;

export const TitleHoverable = styled.p`
  ${sharedStyles}
  ${BorderLink({ showLink: false })}
`;

export const PictureContainer = styled.div<{ $hoverable?: boolean, $hideImageMobile?: boolean }>`
  min-width: 180px;
  margin-right: 5%;
  img {
    border-radius: 20px;
    transition: all 0.25s ease-out;
    opacity: ${(p) => (p.$hoverable ? 0.9 : 1)};
    background-color: black;
    transform: scale(1);
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      img {
        opacity: 1;
        transform: ${(p) => (p.$hoverable ? "scale(0.99)" : "scale(1)")};
      }
    }
  }
  &:active {
    img {
      opacity: 1;
      transform: scale(0.99);
    }
  }
  @media (max-width: 900px) {
    display: ${(p) => (p.$hideImageMobile ? "none" : "inherit")};
  }
`;

export const Guest = styled.div`
  ${sharedStyles}
  padding-top: 4px;
  display: flex;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      div {
        transform: scale(0.97);
      }
    }
  }
  &:active {
    div {
      transform: scale(0.95);
    }
  }
  a {
    display: flex;
  }
  div {
    margin-right: 15px;
    transition: transform 0.3s ease;
  }
`;

export const DateCat = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.foreground};
  margin-top: 10px;
  margin-bottom: 0px;
  address {
    display: inline-block;
    font-style: normal;
  }
  time {
    margin-right: 10px;
  }
  span {
    border: 2px solid ${(p) => p.theme.colors.accent};
    border-radius: 50px;
    padding: 4px 13px 8px 14px;
    text-transform: capitalize;
    color: ${(p) => p.theme.colors.foreground_low};
    font-size: 1.5rem;
    mix-blend-mode: exclusion;
    background-color: ${(p) => p.theme.colors.background};
  }
`;

export const NewPod = styled.article<{ $simplest?: boolean }>`
  display: flex;
  max-width: 800px;
  margin-top: ${(p) => (p.$simplest ? "3.5rem" : "3.5rem")};
  width: ${(p) => (p.$simplest ? "100%" : "inherit")};
  justify-content: ${(p) => (p.$simplest ? "center" : "inherit")};
  a {
    text-decoration: none;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 200;
    line-height: 125%;
    margin-top: 0;
    margin-bottom: 12px;
    transition: 0.3s ease all;
  }
  .guest {
    font-size: 2.2rem;
    color: ${(p) => p.theme.colors.foreground};
    margin-top: -2px;
    text-align: left;
    padding-top: 0;
    line-height: 120%;
    span {
      display: block;
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      font-weight: 200;
      color: ${(p) => p.theme.colors.foreground_low};
    }
    strong {
      font-size: 1.8rem;
      display: block;
    }
  }
  div p {
    color: ${(p) => p.theme.colors.foreground_low};
    padding-top: 1.3rem;
    line-height: 145%;
    &:empty {
      display: none;
    }
  }
  @media (max-width: 970px) {
    h2 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: ${(p) => (p.$simplest ? "center" : "inherit")};
    ${PictureContainer} {
      min-width: unset;
      max-width: 150px;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 620px) {
    ${DateCat} {
      span {
        font-size: 1.3rem;
      }
    }
    margin-top: ${(p) => (p.$simplest ? "3.5rem" : "20%")}};
    p {
      padding-top: 9px;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
`;
