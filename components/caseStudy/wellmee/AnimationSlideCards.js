import { Fade } from "react-awesome-reveal";
import Picture from "components/caseStudy/shared/Picture";
import styled from "styled-components";
import { useState } from "react";
import { useSpring, animated } from '@react-spring/web';
import { useEffect } from "react";

const AnimatedSlideCards = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [centeredCardIndex, setCenteredCardIndex] = useState(0);
  const [isTablet, setIsTablet] = useState();
  const [maxScroll, setMaxScroll] = useState(0);

  const cardWidth = isTablet ? 550 : props.isMobile ? 300 : 700;
  const numCards = props.t.solutions.length;
  const gap = props.isMobile ? 22 : 32;

  const handleScroll = (direction) => {
    const maxScrollPosition = (numCards - 1) * (cardWidth + gap);
    setMaxScroll(maxScrollPosition);
    const newPosition = direction === 'right'
      ? Math.min(scrollPosition + cardWidth + gap, maxScrollPosition)
      : Math.max(scrollPosition - cardWidth - gap, 0);

    setScrollPosition(newPosition);
    console.log(newPosition, 'posicion')
  };

  let animation = useSpring({
    width: numCards * (cardWidth + gap),
    transform: `translateX(-${scrollPosition}px)`,
    config: { mass: 1, tension: 280, friction: 30 },
  });

  useEffect(() => {
    const centeredIndex = Math.round(scrollPosition / (cardWidth + gap));
    setCenteredCardIndex(centeredIndex);

  }, [scrollPosition, cardWidth, gap]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTablet(window.innerWidth <= 830 && window.innerWidth >= 650);
    }

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsTablet(window.innerWidth <= 830 && window.innerWidth >= 650);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isTablet, props.isMobile]);

  return (
    <Fade delay={300} triggerOnce>
      <SlideContainer className="slider">
        <i 
          id="right" 
          onClick={() => handleScroll('right')}
          style={{
            cursor: (scrollPosition !== 0 && scrollPosition === maxScroll) && "auto",
            backgroundColor: (scrollPosition !== 0 && scrollPosition === maxScroll) ? "#7273A2" : "#FCFDFC",
          }}
        >
          <Pin />
        </i>
        <PicturesContainer className="carrousel">
          <animated.div style={animation}>
            {props?.t.solutions.map((solution, i) => (
              <SlideCards key={`solution${i}`} i={i} centeredCardIndex={centeredCardIndex}>
                <span>
                  <h4>{solution.title}</h4>
                  <p>{solution.p}</p>
                </span>
                <Picture
                  src={`/assets/img/casestudies/wellmee/CardMobile${i + 1}.png`}
                  alt="Combinator"
                  width={161}
                  height= {349}
                />
                <span className="mobileNavigationIndicators">
                  {props.t.solutions.map((solution, i) => (
                    <div
                      key={`guia${i}`}
                      style={{
                        backgroundColor: centeredCardIndex === i ? "#FFFFFF" : "#7273A2",
                      }}
                    >
                    </div>
                  ))}
                </span>
              </SlideCards>
            ))}
          </animated.div>
          <div className="desktopNavigationIndicators">
            {props.t.solutions.map((solution, i) => (
              <div
                key={`guia${i}`}
                style={{
                  backgroundColor: centeredCardIndex === i ? "#FFFFFF" : "#7273A2",
                }}
              >
              </div>
            ))}
          </div>
        </PicturesContainer>
        <i 
          id="left" 
          onClick={() => scrollPosition !== 0 && handleScroll('left')}
          style={{
            cursor: scrollPosition === 0 && "auto",
            backgroundColor: scrollPosition === 0 ? "#7273A2" : "#FCFDFC",
          }}
        >
          <Pin />
        </i>
      </SlideContainer>
    </Fade>
  );
};

export default AnimatedSlideCards;

const Pin = styled.span`
  width: 30px;
  height: 30px;
  pointer-events: none;
  display: inline-block;
  border-radius: 100%;
  transition: 0.3s ease all;
  &::after {
    content: " ";
    border: solid #383955;
    border-width: 0 2.5px 2.5px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(-45deg) translateY(2px);
    margin-left: 4px;
    transition: 0.3s ease all;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  padding: 48px 20px 0px 20px;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0.9028px 0.9028px 9.93084px 0px rgba(64, 64, 64, 0.05), 0.9028px 0.9028px 9.93084px 0px rgba(64, 64, 64, 0.05), 0.9028px 0.9028px 9.93084px 0px rgba(64, 64, 64, 0.05);
  }
  
  i:first-child {
    right: 39.5%;
    z-index: 1;
  }

  i:last-child {
    left: 40.28%;
    span {
      text-align: center;
      &::after {
        margin-left: 6px;
        margin-top: 10px;
        transform: rotate(135deg) translateY(2px);
      }
    }
  }

  @media (max-width: 830px) {
    padding: 0px 20px;

    i:first-child {
      right: -1%;
    }
  
    i:last-child {
      left: -1%;
    }
  }

  @media (max-width: 650px) {
    padding: 0px 20px;

    i{
      top: 41%;
    }

    i:first-child {
      right: 0%;
      span {
        &::after {
          margin-left: 5px;
          margin-top: 7px;
        }
      }
    }
  
    i:last-child {
      left: 0%;
    }
  }
`;

const PicturesContainer = styled.div`
  div {
    display: flex;
    overflow: visible;
    gap: 32px;
  }

  .desktopNavigationIndicators {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    bottom: 5%;
    left: 49%;
    height: 12px;
    gap: 11px;
    position: absolute;
    z-index: 1;

    div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }

  @media (max-width: 830px) {
    max-width: 550px;
    padding: 20px 0px 0px 0px;

    .desktopNavigationIndicators {
      bottom: 6%;
      left: 42%;
    }
  }

  @media (max-width: 650px) {
    max-width: 290px;
    padding: 20px 0px 0px 0px;
    div {
      div:nth-child(1) {
        height: 587px;
      }
      div:nth-child(2) {
        height: 609px;
      }
      div:nth-child(3) {
        height: 647px;
      }
      div:nth-child(4) {
        height: 709px;
      }
      div:nth-child(5) {
        height: 609px;
      }
    }
    .desktopNavigationIndicators {
      opacity: 0;
    }
  }
`;

const SlideCards = styled.div`
  background-color: #686A97;
  width: 700px;
  border-radius: 24px;
  display: flex;
  padding: 75px 97px 75px 97px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 34px;
  position: relative;
  left: 40.8%;

  h4 {
    font-weight: 550;
    font-size: 22px;
  }
  p {
    font-size: 16.5px;
    width: 280px;
    padding-top: 24px;
    padding-bottom: 31px;
    color: rgba(255, 255, 255, 0.80);
  }

  div span {
    border-radius: 12px;
    min-width: 161px;
  }

  .mobileNavigationIndicators {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    bottom: 5%;
    left: 49%;
    height: 12px;
    gap: 11px;
    position: absolute;
    z-index: 1;
    opacity: 0;

    div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }

  @media (max-width: 830px) {
    width: 550px;
    height: auto;
    padding: 28px 40px 72px 40px;
    gap: 0px;
    left: 0%;

    p {
      width: 240px;
    }
    div span {
      border-radius: 12px;
      min-width: 151px;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    width: 290px;
    height: auto;
    padding: 28px 24px 72px 24px;
    gap: 0px;
    left: 0%;

    h4 {
      font-size: 1.9rem;
    }
    p {
      font-size: 1.5rem;
      width: 251px;
      padding-top: 12px;
      padding-bottom: 0px;
    }

    .mobileNavigationIndicators {
      position: absolute;
      left: 32%;
      height: 12px;
      opacity: ${(g) => g.centeredCardIndex === g.i ? "1" : "0"};
      div {
        max-height: 12px !important;
      }
    }
  }
`;