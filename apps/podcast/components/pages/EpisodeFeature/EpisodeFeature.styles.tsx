import styled from 'styled-components';
import BorderLink from '@acueducto/shared/components/shared/BorderedLink';

export const HoverableContainer = styled.div`
  margin-bottom: 8px;
`;

export const H2overable = styled.h3`
  ${BorderLink({ showLink: false })}
  &:first-letter {
    text-transform: lowercase;
  }
`;

export const PictureContainer = styled.div<{
  $hoverable: boolean;
  $portrait: boolean;
}>`
  margin-bottom: 7%;
  height: 145px;
  position: relative;
  max-width: ${(p) => (p.$portrait ? '142px' : 'unset')};
  & > div:not(.logos) {
    border-radius: 25px;
    overflow: hidden;
    height: 100%;
  }
  img:not(.logoMini) {
    transition: all 0.25s ease-out;
    background-color: #131516;
    width: 100%;
    height: auto;
    border-radius: 25px;
  }
  .logos {
    position: absolute;
    bottom: -5px;
    left: 120px;
    display: flex;
    gap: 0.7rem;
    align-items: flex-end;
  }
  .logoMini {
    position: relative;
  }
`;

export const Guest = styled.div<{ $blue?: boolean }>`
  display: flex;
  margin-bottom: 10px;
  text-shadow: ${(p) =>
    p.$blue
      ? '-1px -1px 0 #305EE3,  1px -1px 0 #305EE3,-1px 1px 0 #305EE3,1px 1px 0 #305EE3;'
      : '-1px -1px 0 #131516,  1px -1px 0 #131516,-1px 1px 0 #131516,1px 1px 0 #131516;'};
  a {
    display: flex;
  }
  div {
    margin-right: 15px;
    transition: transform 0.3s ease;
  }
`;

export const NewPod = styled.a<{ $blue?: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 800px;
  text-decoration: none;
  width: 100%;
  background-image: ${(p) =>
    p.$blue
      ? 'url("/assets/img/backCardWhite.svg")'
      : 'url("/assets/img/backCard.svg")'};
  background-size: cover;
  background-position: bottom;
  background-color: ${(p) => (p.$blue ? '#305EE3' : '#181a1b')};
  border-radius: 50px;
  padding: 3.5rem 3.5rem 2.5rem 3.5rem;
  text-decoration: none;
  transition: 0.3s ease-out all;
  a {
    text-decoration: none;
  }
  h3 {
    font-size: 2.1rem;
    font-weight: 100;
    line-height: 120%;
    margin-top: 0;
    margin-bottom: 12px;
    transition: 0.3s ease all;
  }
  h3 {
    font-size: 2rem;
    color: ${(p) => p.theme.colors.foreground};
    margin-top: -4px;
    text-align: left;
    span {
      display: block;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      font-weight: 200;
      color: #c8c8c8;
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

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(p) => (p.$blue ? '#3A65E4' : '#1e2224')};
    }
  }
  &:active {
    background-color: ${(p) => (p.$blue ? '#3A65E4' : '#1e2224')};
  }

  @media (max-width: 970px) {
    h2 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 3rem 3rem 2rem 3rem;
    border-radius: 40px;
  }
  @media (max-width: 620px) {
    padding: 2.5rem 2.5rem 1.5rem 2.5rem;
    border-radius: 30px;
    p {
      padding-top: 9px;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
  }
`;
