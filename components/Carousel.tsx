import { useState, useEffect, useRef } from "react";
import { useInView } from "react-hook-inview";
import styled from "styled-components";
import useInterval from "utils/useInterval";
import Holed from "public/assets/img/layout/holed.svg";

const Carousel = ({ items }) => {
  const [activeIndex, setIndex] = useState(0);
  const [ref, isVisible] = useInView({
    threshold: 0.2,
    unobserveOnEnter: true,
  });
  const [start, startTick] = useState(false);
  const [manualMode, setManualMode] = useState(false);
  const manualModeRef = useRef(manualMode);
  manualModeRef.current = manualMode;

  useInterval(
    () => {
      nextIndex();
    },
    2000,
    start
  );

  useEffect(() => {
    if (isVisible) {
      startTick(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (manualMode) {
      startTick(false);
    }
    const timer = setTimeout(() => {
      if (manualModeRef.current) {
        startTick(true);
        setManualMode(false);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [manualMode]);

  const nextIndex = () => {
    if (activeIndex + 1 > 2) {
      setIndex(0);
    } else {
      setIndex(activeIndex + 1);
    }
  };

  const nextManualIndex = () => {
    nextIndex();
    setManualMode(true);
  };

  const prevManualIndex = () => {
    if (activeIndex - 1 > -1) {
      setIndex(activeIndex - 1);
    } else {
      setIndex(2);
    }
    setManualMode(true);
  };

  return (
    <>
      <HoledSection ref={ref}>
        <Holed />
        <CarouselContainer>
          {items.map((word, index) => (
            <Word
              key={"word" + index}
              show={index === activeIndex ? true : false}
            >
              {word}
            </Word>
          ))}
        </CarouselContainer>
        <ButtonLeft onClick={prevManualIndex} />
        <ButtonRight onClick={nextManualIndex} />
      </HoledSection>
      <FakePadding />
    </>
  );
};

export default Carousel;

const FakePadding = styled.div`
  width: 100%;
  padding-bottom: 12%;
  background-color: ${(p) => p.theme.colors.background};
`;

const HoledSection = styled.div`
  width: 100%;
  display: flex;
  flex: 0 0 auto;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: -1px 0;
  svg {
    width: 100%;
  }
`;

const CarouselContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonLeft = styled.div`
  width: 50%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  cursor: w-resize;
`;

const ButtonRight = styled(ButtonLeft)`
  left: unset;
  right: 0;
  cursor: e-resize;
`;

const Word = styled.p<{ show: boolean }>`
  position: absolute;
  text-align: center;
  opacity: ${(p) => (p.show ? 1 : 0)};
  font-size: 6rem;
  font-weight: 300;
  padding: 4%;
  color: ${(p) => p.theme.colors.foreground_low};
  transition: opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  @media (max-width: 1300px) {
    font-size: 5rem;
  }
  @media (max-width: 1100px) {
    font-size: 4rem;
  }
  @media (max-width: 900px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 2rem;
    padding: 8%;
    line-height: 1.1;
  }
  @media (max-width: 330px) {
    font-size: 1.7rem;
  }
`;
