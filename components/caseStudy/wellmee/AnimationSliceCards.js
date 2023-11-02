import { Fade } from "react-awesome-reveal";
import Picture from "components/caseStudy/shared/Picture";
import styled from "styled-components";
import { useState } from "react";
import { useSpring, animated } from '@react-spring/web';

const AnimatedSliceCards = (props) => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const cardWidth = props.isMobile ? 300 : 700;
  const numCards = props.t.solutions.length;
  const gap = props.isMobile ? 22 : 32;

  const handleScroll = (direction) => {
    const maxScrollPosition = (numCards - 1) * (cardWidth + gap);
    const newPosition = direction === 'right'
      ? Math.min(scrollPosition + cardWidth + gap, maxScrollPosition)
      : Math.max(scrollPosition - cardWidth - gap, 0);

    setScrollPosition(newPosition);
    console.log(scrollPosition, 'scroll')
  };

  let animation = useSpring({
    width: numCards * (cardWidth + gap),
    transform: `translateX(-${scrollPosition}px)`,
    config: { mass: 1, tension: 280, friction: 30 },
  });

  return (
    <Fade delay={300} triggerOnce>
      <SliceContainer className="slider">
        <i id="right" onClick={() => handleScroll('right')}>
          <Pin />
        </i>
        <PicturesContainer className="carrousel">
          <animated.div style={animation}>
            {props?.t.solutions.map((solution, i) => (
              <SlideCards key={`solution${i}`}>
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
              </SlideCards>
            ))}
          </animated.div>
        </PicturesContainer>
        <i id="left" onClick={() => handleScroll('left')}>
          <Pin />
        </i>
      </SliceContainer>
    </Fade>
  );
};

export default AnimatedSliceCards;

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

const SliceContainer = styled.div`
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
    background-color: #FCFDFC;
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

  @media (max-width: 830px) {
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
    font-weight: 500;
    font-size: 22px;
  }
  p {
    font-size: 16.5px;
    width: 280px;
    padding-top: 24px;
    color: rgba(255, 255, 255, 0.80);
  }

  @media (max-width: 830px) {
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
    }
  }
`;