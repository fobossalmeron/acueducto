import styled from "styled-components";
import Link from "next/link";

// Styled components
export const PodcastGrid = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  background-image: url("/assets/img/layout/back.svg");
  background-size: 130%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  display: grid;
  padding: 10% 2%;
  position: relative;
  margin-bottom: -1px;
  & > div {
    grid-column: 2 / span 10;
  }
  h1 {
    letter-spacing: 0;
    line-height: 100%;
    font-size: 7rem;
    margin-bottom: 3px;
    max-width: 810px;
    color: ${(props) => props.theme.colors.foreground};
  }
  span {
    &.blue {
      color: ${(props) => props.theme.colors.accent};
    }
    svg {
      max-width: 110px;
      * {
        fill: ${(props) => props.theme.colors.accent};
      }
    }
  }
  p {
    padding-top: 1.5rem;
    color: ${(props) => props.theme.colors.foreground_low};
    position: relative;
    max-width: 600px;
  }
  @media (max-width: 1250px) {
    background-size: 170%;
    h1 {
      font-size: 6rem;
    }
  }
  @media (max-width: 950px) {
    background-size: 230%;
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    background-size: 270%;
    background-position: 65% 20%;
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    background-position: 65% -50%;
    margin-bottom: 15%;
    & > div {
      grid-column: 1 / span 12;
    }
    p {
      padding-top: 10px;
    }
    h1 {
      line-height: 0.9;
      padding-top: 5%;
      padding-bottom: 3%;
      grid-column-end: 12;
    }
  }
  @media (max-width: 400px) {
    background-position: 65% 300px;
  }
`;

export const PodcastList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  max-width: 800px;
`;

export const CatFilter = styled.div`
  margin-top: 10px;
`;

export const CatList = styled.div`
  display: block;
  margin-top: 10px;
  width: 100%;
  & > :last-child {
    border-color: ${(p) => p.theme.colors.foreground_low};
  }
`;

export const Category = styled.div`
  border: 2px solid ${(p) => p.theme.colors.accent};
  border-radius: 50px;
  padding: 4px 13px 8px 14px;
  color: ${(p) => p.theme.colors.foreground_low};
  font-size: 1.5rem;
  background-color: ${(p) => p.theme.colors.background};
  cursor: pointer;
  transition: 0.3s ease;
  display: inline-block;
  margin: 0 1rem 1rem 0;
  text-transform: capitalize;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(0.97);
    }
  }
  &:focus,
  &:active {
    transform: scale(0.97);
    border-color: ${(p) => p.theme.colors.foreground_low};
  }
  &.active{
      background-color:  ${(p) => p.theme.colors.accent};
    }
  @media (max-width: 620px) {
    font-size: 1.3rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  gap: 1rem;
  position: relative;
  @media (max-width: 520px) {
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 4rem;
    /* max-width: 300px; */
    width:100%;
    padding:0 2%;
  }
`;

export const PageLink = styled(Link)`
  border: 2px solid ${(p) => p.theme.colors.accent};
  border-radius: 50px;
  padding: 8px 16px 12px 16px;
  color: ${(p) => p.theme.colors.foreground_low};
  font-size: 1.5rem;
  background-color: ${(p) => p.theme.colors.background};
  cursor: pointer;
  transition: 0.3s ease;
  text-decoration: none;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(0.97);
      background-color: ${(p) => p.theme.colors.accent};
      color: ${(p) => p.theme.colors.background};
      & > div::after {
      border-color: ${(p) => p.theme.colors.background};
    }
    }
  }

  &:focus,
  &:active {
    transform: scale(0.97);
    background-color: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.background};
    & > div::after {
      border-color: ${(p) => p.theme.colors.background};
    }
  }

  @media (max-width: 620px) {
    font-size: 1.3rem;
  }
`;

export const PageNumbers = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${(p) => p.theme.colors.accent};
  border-radius: 50px;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.background};

  @media (max-width: 520px) {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const PageNumber = styled(Link) <{ $active?: boolean }>`
  color: ${(p) =>
    p.$active ? p.theme.colors.background : p.theme.colors.foreground_low};
  font-size: 1.5rem;
  background-color: ${(p) =>
    p.$active ? p.theme.colors.accent : p.theme.colors.background};
  cursor: pointer;
  transition: 0.3s ease;
  text-decoration: none;
  padding: 6px 16px 10px 16px;
  ;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(p) => p.theme.colors.accent};
      color: ${(p) => p.theme.colors.background};
    }
  }

  &:focus,
  &:active {
    background-color: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.background};
  }

  @media (max-width: 620px) {
    font-size: 1.3rem;
    &:hover {
    }
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 40px;
  opacity: 0;
  background-color: ${(p) => p.theme.colors.accent};
`;

export const TextToIcon = styled.div<{ $reverse?: boolean }>`
  width: 30px;
  height: 30px;
  pointer-events: none;
  display: inline-block;
  border-radius: 100%;
  transition: 0.3s ease all;
  ${(p) => (p.reverse ? "margin-bottom: 10px;" : "margin-top: 12px;")}
  font-size: 0;

  &::after {
    content: " ";
    border: solid ${(p) => p.theme.colors.accent};
    border-width: 0 2.5px 2.5px 0;
    display: inline-block;
    padding: 6px;
    transform: rotate(-45deg) translateY(3px);
    margin-left: 3px;
    transition: 0.3s ease all;
  }
  transform: ${(p) => (p.reverse ? "rotate(180deg)" : "rotate(0deg)")};
`;
