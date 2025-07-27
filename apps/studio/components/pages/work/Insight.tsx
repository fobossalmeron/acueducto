import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { P } from "components/shared/Dangerously";

interface InsightProps {
  color?: string;
  number: number;
  insight: {
    title: string;
    p: string;
  };
  children?: React.ReactNode;
}

const Insight: React.FC<InsightProps> = ({ color, number, insight, children }) => (
  <InsightWrapper color={color}>
    <Limiter>
      <Fade triggerOnce>
        <h4>
          <span>0{number}</span>
          {insight.title}
        </h4>
        <P>{insight.p}</P>
      </Fade>
    </Limiter>
    {children}
  </InsightWrapper>
);

export default Insight;

const Limiter = styled.div`
  max-width: 670px;
  width: 100%;
`;

const InsightWrapper = styled.div<{ $color?: string }>`
  margin: 10% 0 4% 0;
  padding: 0 5%;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;

  h4 {
    font-weight: 300;
    margin-bottom: 10px;
    font-size: 3rem;
    position: relative;

    span {
      font-size: 1.5rem;
      color: ${({ $color }) => $color || "#008dc9"};
      display: block;
      position: absolute;
      bottom: 0;
      left: -40px;
      line-height: 190%;
    }
  }

  @media (max-width: 1000px) {
    h4 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 850px) {
    h4 {
      span {
        line-height: 100%;
        left: 0;
        position: relative;
        margin-right: 15px;
        font-size: 5rem;
      }

      &:after {
        content: "–";
        font-size: 3rem;
        display: block;
        width: 100%;
        min-height: 25px;
        line-height: 60%;
        color: ${({ $color }) => $color || "#019ee3"};
      }
    }
  }
`;
