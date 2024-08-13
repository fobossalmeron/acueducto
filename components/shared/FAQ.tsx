import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";

interface Question {
  title: string;
  p: string;
}

const QuestionWrapper: React.FC<{ q: Question; i: number }> = React.memo(({ q, i }) => {
  const [toggled, setToggled] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const calculateHeight = () => {
      if (ref.current) {
        const style = getComputedStyle(ref.current);
        const marginTop = parseInt(style.marginTop);
        const marginBottom = parseInt(style.marginBottom);
        const extraMargin = window.innerWidth < 760 ? 20 : 0;
        setHeight(ref.current.offsetHeight + marginTop + marginBottom + extraMargin);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  const handleToggle = useCallback(() => {
    setToggled(prev => !prev);
  }, []);

  return (
    <Question hide={!toggled} height={height} onClick={handleToggle}>
      <Fade triggerOnce>
        <div>
          <div>
            <span>0{i + 1}</span>
            <p>{q.title}</p>
          </div>
          <Cross open={toggled} />
        </div>
        <div>
          <p ref={ref}>{q.p}</p>
        </div>
      </Fade>
    </Question>
  );
});

const FAQ: React.FC<{ t: { title: string; questions: Question[] } }> = React.memo(({ t }) => {
  return (
    <FAQSection
      as={PinnedSection}
      title={t.title}
      notSticky
      borderTop
      disableFade
      heading={2}
    >
      <ol>
        {t.questions.map((q, i) => (
          <QuestionWrapper key={`question${i}`} q={q} i={i} />
        ))}
      </ol>
    </FAQSection>
  );
});

export default FAQ;

const Cross = styled.div<{ open: boolean }>`
  transition: 250ms ease all;
  transform-origin: center;
  width: 25px;
  height: 25px;
  position: relative;
  &::after,
  &::before {
    content: " ";
    display: block;
    position: absolute;
    width: 2px;
    height: 25px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.accent};
    transition: 250ms ease-out all;
    left: 12.5px;
  }
  &::before {
    transform: rotate(90deg);
  }
  &::after {
    opacity: ${(p) => (p.open ? 0 : 1)};
  }
`;

const Question = styled.li<{ hide: boolean; height: number }>`
  border-bottom: 0.18rem solid
    ${(props) => props.theme.colors.foreground_lowest};
  margin-bottom: 3rem;
  padding-bottom: 0rem;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${Cross} {
        transform: ${(p) => (p.hide ? "rotate(-90deg)" : "rotate(0deg)")};
      }
    }
  }
  &:focus,
  &:active {
    ${Cross} {
      transform: ${(p) => (p.hide ? "rotate(-90deg)" : "rotate(0deg)")};
    }
  }
  ::marker {
    content: "";
  }
  span {
    color: ${(props) => props.theme.colors.accent};
  }
  & > :nth-child(1) {
    font-size: 1.5rem;
    margin-bottom: 3rem;

    p {
      color: ${(props) => props.theme.colors.foreground};
      line-height: 120%;
    }
    span {
      font-size: 1.6rem;
      letter-spacing: 0.05rem;
      margin-top: 0.5rem;
    }
    div {
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      font-size: 2.2rem;
      gap: 2.4rem;
      p {
        margin: 0;
      }
    }
  }
  & > :nth-last-child(1) {
    div {
      transition: height 250ms ease-out;
      height: ${(p) => (p.hide ? "0px" : `${p.height}px`)};
      overflow: hidden;
    }
    p {
      color: ${(p) => p.theme.colors.foreground_low};
      cursor: auto;
      transition: opacity 250ms ease;
      opacity: ${(p) => (p.hide ? 0 : 1)};
      height: auto;
      margin: 0 0 5% 4.5rem;
    }
  }
  @media (max-width: 1250px) {
    & > :nth-child(1) {
      span {
        font-size: 1.4rem;
        margin-top: 0.2rem;
      }
      div {
        font-size: 2rem;
      }
    }
    & > :nth-last-child(1) {
      p {
        margin-left: 4rem;
      }
    }
  }
  @media (max-width: 600px) {
    & > :nth-child(1) {
      div div {
        flex-direction: column;
        gap: 0rem;
      }
    }
    & > :nth-last-child(1) {
      p {
        margin-left: 0rem;
      }
    }
    ${Cross} {
      margin-top: 22px;
      margin-right: 10px;
    }
  }
`;

const FAQSection = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: 600px) {
    grid-gap: 4rem 1rem;
  }
`;