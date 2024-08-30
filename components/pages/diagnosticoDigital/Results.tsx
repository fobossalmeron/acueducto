import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { P } from "components/shared/Dangerously";
import LinkWithArrow from "components/shared/LinkWithArrow";

const SHARE_URL = "https://acueducto.studio/diagnostico";

interface ResultsProps {
  results: [number, number, number, string];
  results_section: {
    greeting: {
      p1: string;
      span: string;
    };
    answers: {
      strategy: {
        title: string;
        bad: string;
        neutral: string;
        good: string;
      };
      culture: {
        title: string;
        bad: string;
        neutral: string;
        good: string;
      };
      competition: {
        title: string;
        bad: string;
        neutral: string;
        good: string;
      };
    };
    last_message: {
      p1: string;
      title1: string;
      p2: string;
      link: string;
      linktext: string;
    };
  };
}

const Results: React.FC<ResultsProps> = ({ results, results_section }) => {
  const { greeting, answers, last_message } = results_section;
  const [strategy, culture, competition, name] = results;

  const getResultMessage = (
    score: number,
    answerType: keyof typeof answers
  ) => {
    if (score < 5) return answers[answerType].bad;
    if (score < 8) return answers[answerType].neutral;
    return answers[answerType].good;
  };

  const averageScore = ((strategy + culture + competition) / 3).toFixed(1);

  const resultItems = [
    {
      score: strategy,
      title: answers.strategy.title,
      type: "strategy" as const,
    },
    { score: culture, title: answers.culture.title, type: "culture" as const },
    {
      score: competition,
      title: answers.competition.title,
      type: "competition" as const,
    },
  ];

  return (
    <ResultsGrid>
      <Fade triggerOnce>
        <MainResult>
          <p>
            {greeting.p1}, {name}.
            <br />
            <span>
              {greeting.span} <b>↓</b>
            </span>
          </p>
          <h4>
            {averageScore}
            <span>/10</span>
          </h4>
        </MainResult>

        {resultItems.map(({ score, title, type }) => (
          <ResultItem key={type}>
            <ResultNumber $result={+score.toFixed(1)} />
            <div>
              <h3>{title}</h3>
              <P>{getResultMessage(score, type)}</P>
            </div>
          </ResultItem>
        ))}
      </Fade>

      <LastMessage>
        <Fade triggerOnce>
          <div>
            <p>{last_message.p1}</p>
            <h3>{last_message.title1}</h3>
            <TwitterShareButton url={SHARE_URL}>
              <TwitterIcon size={55} bgStyle={{ fill: "#0D1111" }} />
            </TwitterShareButton>
            <FacebookShareButton url={SHARE_URL}>
              <FacebookIcon size={55} bgStyle={{ fill: "#0D1111" }} />
            </FacebookShareButton>
            <WhatsappShareButton url={SHARE_URL}>
              <WhatsappIcon size={55} bgStyle={{ fill: "#0D1111" }} />
            </WhatsappShareButton>
            <LinkedinShareButton url={SHARE_URL}>
              <LinkedinIcon size={55} bgStyle={{ fill: "#0D1111" }} />
            </LinkedinShareButton>
            <p>
              {last_message.p2}
              <br />
              <br />
            </p>
            <LinkWithArrow
              link={last_message.link}
              linktext={last_message.linktext}
            />
          </div>
        </Fade>
      </LastMessage>
    </ResultsGrid>
  );
};

export default Results;

const ResultNumber = styled.span<{ $result: number }>`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid
    ${(p) =>
      p.$result >= 5 && p.$result < 8
        ? p.theme.colors.warning
        : p.$result >= 8
          ? p.theme.colors.success
          : p.theme.colors.error};
  &::before {
    content: ${(p) => `'${p.$result}.0'`};
    font-size: 3.5rem;
    display: flex;
    text-align: center;
    color: ${(p) =>
      p.$result >= 5 && p.$result < 8
        ? p.theme.colors.warning
        : p.$result >= 8
          ? p.theme.colors.success
          : p.theme.colors.error};
  }
`;

const ResultsGrid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  display: grid;
  padding: 0 4% 10% 4%;
  position: relative;
  min-height: 20vh;
  > div {
    width: 100%;
    grid-column: 3 / span 8;
    display: flex;
    margin-bottom: 5%;
    > div {
      margin-left: 5%;
      width: calc(100% - 85px - 5%);
      p {
        color: ${(p) => p.theme.colors.foreground_low};
        b {
          color: ${(p) => p.theme.colors.foreground};
          font-weight: 100;
        }
      }
      h3 {
        color: ${(p) => p.theme.colors.foreground};
        font-weight: 200;
        padding-left: 0;
        padding-bottom: 15px;
        margin-top: 0;
        text-align: left;
        font-size: 3rem;
      }
    }
  }
  @media (max-width: 900px) {
    > div {
      grid-column: 2 / span 10;
    }
  }
  @media (max-width: 600px) {
    > div {
      grid-column: 1 / span 12;
      flex-direction: column;
      > div {
        margin-left: 0;
        margin-top: 10px;
        margin-bottom: 15px;
        width: 100%;
        h3 {
          padding-bottom: 10px;
        }
      }
    }
  }
`;

const LastMessage = styled.div`
  color: ${(p) => p.theme.colors.foreground_low};
  border-top: 2px solid ${(p) => p.theme.colors.accent};
  padding: 10% 5% 0 5%;
  width: 100% !important;
  margin: 5% auto 0 auto !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0 !important;
  & > div {
    max-width: 410px;
    margin-bottom: 0 !important;
  }
  h3 {
    padding-bottom: 5px !important;
    line-height: 110% !important;
  }
  button {
    svg * {
      transition: 0.4s ease all;
    }
    &:nth-of-type(3) svg {
      height: 49px;
      margin-bottom: 1px;
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        svg * {
          fill: ${(props) => props.theme.colors.accent};
        }
      }
    }
  }
  p {
    &:nth-of-type(2) {
      margin-top: 5%;
    }
  }
  @media (min-width: 600px) {
    span {
      height: 26px;
    }
  }
  @media (max-width: 600px) {
    margin: 0px !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
    & > div {
      max-width: unset;
    }
    p {
      max-width: unset;
    }
  }
`;

const MainResult = styled.div`
  color: ${(p) => p.theme.colors.accent};
  align-items: flex-end;
  margin-left: 0 !important;
  width: 100% !important;
  p {
    font-weight: 100;
    margin-bottom: 5%;
    span {
      color: ${(p) => p.theme.colors.accent};
      font-size: 6rem;
      margin-top: 15px;
      font-weight: 300;
      display: block;
      b {
        font-size: 3.5rem;
        font-weight: 800;
      }
    }
  }
  h4 {
    font-weight: 300;
    font-size: 6rem;
    border: 4px solid ${(p) => p.theme.colors.accent};
    border-radius: 50%;
    height: 170px;
    padding-top: 32px;
    text-align: center;
    width: 170px;
    margin: 10% auto 30px auto;
    span {
      font-size: 2rem;
    }
  }
  @media (max-width: 950px) {
    p span {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    p span {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    p span {
      font-size: 3.3rem;
      b {
        font-size: 2rem;
      }
    }
    h4 {
      margin-bottom: 0;
    }
  }
`;

const ResultItem = styled.div`
  width: 100%;
  grid-column: 3 / span 8;
  display: flex;
  margin-bottom: 5%;
  > div {
    margin-left: 5%;
    width: calc(100% - 85px - 5%);
    p {
      color: ${(p) => p.theme.colors.foreground_low};
      b {
        color: ${(p) => p.theme.colors.foreground};
        font-weight: 100;
      }
    }
    h3 {
      color: ${(p) => p.theme.colors.foreground};
      font-weight: 200;
      padding-left: 0;
      padding-bottom: 15px;
      margin-top: 0;
      text-align: left;
      font-size: 3rem;
    }
  }
  @media (max-width: 900px) {
    grid-column: 2 / span 10;
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 12;
    flex-direction: column;
    > div {
      margin-left: 0;
      margin-top: 10px;
      margin-bottom: 15px;
      width: 100%;
      h3 {
        padding-bottom: 10px;
      }
    }
  }
`;
