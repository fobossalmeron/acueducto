import React, { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "react-hook-inview";
import styled from "styled-components";
import useInterval from "../utils/useInterval";
import Holed from "public/assets/img/layout/holed.svg";
import Picture from "components/caseStudy/shared/Picture";

const Carousel: React.FC<{ items: string[] }> = ({ items }) => {
  const [activeIndex, setIndex] = useState<number>(0);
  const [ref, isVisible] = useInView({
    threshold: 0.2,
    unobserveOnEnter: true,
  });
  const [start, setStart] = useState<boolean>(false);
  const [manualMode, setManualMode] = useState<boolean>(false);
  const manualModeRef = useRef<boolean>(manualMode);

  const nextIndex = useCallback((): void => {
    setIndex((prevIndex) => (prevIndex + 1) % 3);
  }, []);

  useInterval(nextIndex, 2000, start);

  useEffect(() => {
    if (isVisible) setStart(true);

  }, [isVisible]);

  useEffect(() => {
    if (manualMode) {
      setStart(false);
      manualModeRef.current = true;
      const timer = setTimeout(() => {
        if (manualModeRef.current) {
          setStart(true);
          setManualMode(false);
          manualModeRef.current = false;
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [manualMode]);

  const handleManualChange = useCallback((direction: 'next' | 'prev'): void => {
    setIndex((prevIndex) => {
      if (direction === 'next') return (prevIndex + 1) % 3;
      return prevIndex > 0 ? prevIndex - 1 : 2;
    });
    setManualMode(true);
  }, []);

  const heights: number[] = [123, 113, 126];

  return (
    <>
      <HalfContainer>
        <LeftSection />
        <HoledSection ref={ref}>
          <Holed />
          <CarouselContainer>
            {items.map((word, index) => (
              <Word
                key={`word${index}`}
                show={index === activeIndex}
              >
                <Picture
                  src={`/assets/img/layout/home_draw/${index + 5}.png`}
                  width={165}
                  height={heights[index]}
                  alt={word}
                />
                {word}
              </Word>
            ))}
          </CarouselContainer>
          <ButtonLeft onClick={() => handleManualChange('prev')} />
          <ButtonRight onClick={() => handleManualChange('next')} />
        </HoledSection>
        <RightSection />
      </HalfContainer>
      <FakePadding />
    </>
  );
};

export default React.memo(Carousel);

const HalfContainer = styled.div`
  width: 100%;
  display: flex;
`;

const LeftSection = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  width: 53%;
  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 800px) {
    width: 35%;
  }
  @media (max-width: 600px) {
    width: 4%;
  }
`;

const RightSection = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  width: 15%;
  @media (max-width: 1100px) {
    width: calc(30% + 1px);
    margin-left: -1px;
  }
  @media (max-width: 800px) {
    width: calc(30% + 1px);
  }
  @media (max-width: 600px) {
    width: calc(4% + 1px);
  }
`;

const FakePadding = styled.div`
  width: 100%;
  padding-bottom: 12%;
  background-color: ${(p) => p.theme.colors.background};
`;

const HoledSection = styled.div`
  width: 35%;
  align-self: end;
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
  @media (max-width: 1100px) {
    width: 45%;
  }
  @media (max-width: 800px) {
    width: 65%;
  }
  @media (max-width: 600px) {
    width: 92%;
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

const Word = styled.div<{ show: boolean }>`
  position: absolute;
  text-align: center;
  opacity: ${(p) => (p.show ? 1 : 0)};
  font-size: 3.2rem;
  padding: 4%;
  color: ${(p) => p.theme.colors.foreground_low};
  transition: opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  @media (max-width: 1300px) {
    font-size: 2.5rem;
    img {
      max-width: 150px !important;
    }
  }
  @media (max-width: 900px) {
    font-size: 2.2rem;
    img {
      max-width: 130px !important;
    }
  }
  @media (max-width: 450px) {
    font-size: 1.9rem;
    img {
      max-width: 110px !important;
    }
  }
`;
