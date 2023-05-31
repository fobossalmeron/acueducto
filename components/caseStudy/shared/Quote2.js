import styled from "styled-components";
import { Blockquote } from "components/shared/Dangerously";
import Mark from "public/assets/img/layout/quoteMark2.svg";
import { Fade } from "react-awesome-reveal";

const Quote = ({
  color,
  authorColor,
  noMargin,
  specialMarginBottom,
  quote,
}) => (
  <QuoteWrapper
    passedColor={color}
    passedAuthorColor={authorColor}
    noMargin={noMargin}
    specialMarginBottom={specialMarginBottom}
  >
    <Fade triggerOnce>
      <QuoteLimiter>
        <QuoteMark passedColor={color}>
          <Mark />
        </QuoteMark>
        <Blockquote>{quote.quote}</Blockquote>
        <Author passedAuthorColor={authorColor}>– {quote.name}</Author>
        {quote.label ? <Label>{quote.label}</Label> : null}
      </QuoteLimiter>
    </Fade>
  </QuoteWrapper>
);

export default Quote;

const Author = styled.p`
  opacity: 0.7;
  font-size: 34px;
  line-height: 120%;
  margin-top: 41px;
  opacity: 1.4;
  font-weight: 400;
  color: ${(props) => props.passedAuthorColor ? props.passedAuthorColor : props.theme.colors.foreground};
`;
const Label = styled.p`
  font-size: 1.1rem;
  letter-spacing: 0.17em;
  margin: 5px 0 0 35px;
  text-transform: uppercase;
  font-weight: 400;
`;

const QuoteMark = styled.div`
  left: -55px;
  top: -15px;
  opacity: 0.07;
  width: 125px;
  height: 115px;
  font-size: 10rem;
  position: absolute;
  svg {
    width: 100%;
    * {
      fill: ${(props) =>
        props.passedColor ? props.passedColor : props.theme.colors.foreground};
    }
  }
`;

const QuoteLimiter = styled.div`
  max-width: 670px;
  position: relative;
`;

const QuoteWrapper = styled.div`
  width: 100%;
  font-size: 3.4rem;
  margin: ${(props) => (props.noMargin ? "0" : "6% 0 4% 0")};
  ${(props) => (props.specialMarginBottom ? "margin-bottom: -10%;" : "")}
  padding: 0 5%;
  position: relative;
  display: flex;
  justify-content: center;
  color: ${(props) =>
    props.passedColor ? props.passedColor : props.theme.colors.foreground};
  blockquote {
    margin: 0;
    position: relative;
    font-size: 34px;
    line-height: 120%;
  }
  @media (max-width: 1000px) {
    font-size: 2.5rem;
    blockquote {
      margin: 0;
      position: relative;
      font-size: 28px;
      line-height: 120%;
    }
    ${Author} {
      font-size: 28px;
    }
    ${Label} {
      margin-left: 20px;
    }
  }
  @media (max-width: 700px) {
    padding: 0% 6%;
    blockquote {
      font-size: 22px;
    }
    ${Author} {
      font-size: 18px;
    }
    ${Label} {
      margin-left: 17px;
      font-size: 10px;
    }
  }
`;
