import styled from 'styled-components';
import { Blockquote } from 'components/shared/Dangerously';
import Mark from 'public/assets/img/layout/quoteMark.svg';
import { Fade } from 'react-awesome-reveal';
import React from 'react';

// Definimos la interfaz para las props de Quote
interface QuoteProps {
  color?: string;
  noMargin?: boolean;
  specialMarginBottom?: boolean;
  quote: {
    quote: string;
    name: string;
    label?: string;
  };
  mark?: string;
}

// Usamos function component con tipado explícito en lugar de React.FC
const Quote = ({
  color,
  noMargin = false,
  specialMarginBottom = false,
  quote,
  mark = '',
}: QuoteProps): React.ReactElement => (
  <QuoteWrapper
    $color={color}
    $noMargin={noMargin}
    $specialMarginBottom={specialMarginBottom}
  >
    <Fade triggerOnce>
      <QuoteLimiter>
        <QuoteMark $color={color} $mark={mark}>
          <Mark />
        </QuoteMark>
        <Blockquote>{quote?.quote || ''}</Blockquote>
        <Author>– {quote?.name || ''}</Author>
        {quote?.label ? <Label>{quote.label}</Label> : null}
      </QuoteLimiter>
    </Fade>
  </QuoteWrapper>
);

export default Quote;

const Author = styled.p`
  opacity: 0.7;
  font-size: 2.5rem;
  margin-top: 25px;
  opacity: 1.4;
  font-weight: 200;
`;

const Label = styled.p`
  font-size: 1.1rem;
  opacity: 0.6;
  letter-spacing: 1.7px;
  margin: 5px 0 0 25px;
  text-transform: uppercase;
`;

const QuoteMark = styled.div<{ $color?: string; $mark?: string }>`
  left: -55px;
  top: -15px;
  opacity: ${(props) => (props.$mark ? '0.2' : '0.07')};
  width: 125px;
  height: 115px;
  font-size: 10rem;
  position: absolute;
  svg {
    width: 100%;
    * {
      fill: ${(props) =>
        props.$mark
          ? props.$mark
          : props.$color
            ? props.$color
            : props.theme.colors.foreground};
    }
  }
`;

const QuoteLimiter = styled.div`
  max-width: 670px;
  position: relative;
`;

const QuoteWrapper = styled.div<{
  $color?: string;
  $noMargin?: boolean;
  $specialMarginBottom?: boolean;
}>`
  width: 100%;
  font-size: 3.4rem;
  margin: ${(props) => (props.$noMargin ? '0' : '6% 0 4% 0')};
  ${(props) => (props.$specialMarginBottom ? 'margin-bottom: -10%;' : '')}
  padding: 0 5%;
  position: relative;
  display: flex;
  justify-content: center;
  color: ${(props) =>
    props.$color ? props.$color : props.theme.colors.foreground};
  blockquote {
    margin: 0;
    position: relative;
    line-height: 123%;
  }
  @media (max-width: 1000px) {
    font-size: 2.5rem;
    ${Author} {
      font-size: 2rem;
    }
    ${Label} {
      margin-left: 20px;
    }
  }
  @media (max-width: 700px) {
    font-size: 2.2rem;
    ${Author} {
      font-size: 1.8rem;
    }
    ${Label} {
      margin-left: 17px;
      font-size: 1rem;
    }
  }
`;
