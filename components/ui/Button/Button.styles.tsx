import styled from 'styled-components';

export const Pin = styled.span<{
  $inverse: boolean;
  $size: 'default' | 'small';
}>`
  width: 30px;
  height: 30px;
  pointer-events: none;
  display: inline-block;
  background-color: ${(p) =>
    !p.$inverse ? p.theme.colors.background : p.theme.colors.accent};
  border-radius: 100%;
  margin-left: ${(p) => (p.$size === 'small' ? '5px' : '15px')};
  transition: 0.3s ease all;
  &::after {
    content: ' ';
    border: solid
      ${(p) =>
        !p.$inverse ? p.theme.colors.accent : p.theme.colors.background};
    border-width: 0 2.5px 2.5px 0;
    display: inline-block;
    padding: 6px;
    transform: rotate(-45deg) translateY(3px);
    margin-left: 3px;
    transition: 0.3s ease all;
  }
`;

export const ButtonElement = styled.div<{
  $inverse?: boolean;
  $marginTop?: boolean;
  $secondary?: boolean;
  $size?: 'default' | 'small';
}>`
  text-decoration: none;
  padding: ${(p) =>
    p.$size === 'small' ? '11px 12px 9px 22px' : '13px 17px 14px 25px'};
  font-size: ${(p) => (p.$size === 'small' ? '1.7rem' : '1.8rem')};
  border-radius: 50px;
  color: ${(p) => p.theme.colors.foreground};
  background-color: ${(p) =>
    !p.$inverse ? p.theme.colors.background : p.theme.colors.accent};
  position: relative;
  display: inline-block;
  align-self: flex-start;
  text-align: left;
  font-weight: 100;
  appearance: button-bevel; // Añadir esta línea para compatibilidad
  -webkit-appearance: button-bevel;
  margin-top: ${(p) => (p.$marginTop ? '10px' : '0px')};
  cursor: pointer;
  ${(p) =>
    p.$secondary &&
    `
    border: 2px solid ${p.theme.colors.accent};
  `}
  input {
    cursor: pointer;
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    opacity: 0;
    z-index: 2;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      &:after {
        border-color: ${(p) => p.theme.colors.foreground};
      }
      ${Pin} {
        background-color: ${(p) =>
          !p.$inverse ? p.theme.colors.accent : p.theme.colors.background};
        margin-left: ${(p) => (p.$size === 'small' ? '15px' : '25px')};
        &:after {
          border-color: ${(p) => p.theme.colors.foreground};
          transform: rotate(-45deg) translateY(3px) scale(0.8);
        }
      }
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 10px;
    padding-top: 15px;
    padding-bottom: 11px;
    ${Pin} {
      transform: translateY(-3px);
      &:after {
        margin-left: 0px;
        transform: rotate(-45deg) translateY(7px) scale(1);
      }
    }
    &:active {
      &:after {
        border-color: ${(p) => p.theme.colors.foreground};
      }
      ${Pin} {
        background-color: ${(p) =>
          !p.$inverse ? p.theme.colors.accent : p.theme.colors.background};
        margin-left: 25px;
        &:after {
          border-color: ${(p) => p.theme.colors.foreground};
          transform: rotate(-45deg) translateY(7px) scale(0.8);
        }
      }
    }
  }
`;
