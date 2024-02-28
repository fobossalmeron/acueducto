import React, { useEffect, useState } from "react";
import Picture from "components/caseStudy/shared/Picture";
import Screenshot1 from "public/assets/img/casestudies/recupera/screenshot1.png";
import Screenshot2 from "public/assets/img/casestudies/recupera/screenshot2.png";
import Screenshot3 from "public/assets/img/casestudies/recupera/screenshot3.png";
import Screenshot4 from "public/assets/img/casestudies/recupera/screenshot4.png";
import Screenshot5 from "public/assets/img/casestudies/recupera/screenshot5.png";
import Screenshot6 from "public/assets/img/casestudies/recupera/screenshot6.png";
import Screenshot7 from "public/assets/img/casestudies/recupera/screenshot7.png";
import Screenshot8 from "public/assets/img/casestudies/recupera/screenshot8.png";
import Screenshot9 from "public/assets/img/casestudies/recupera/screenshot9.png";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";
import { useSpring, animated } from "@react-spring/web";
import { InView } from "react-intersection-observer";

const ScrollCardAnimation = ({ isMobile }) => {
  const [moveAmount, setMoveAmount] = useState(0);
  const [animation, setAnimation] = useState(true);
  let scrollY = 0;

  const handleScrollAnimation = () => {
    if (isMobile) {
      scrollY = window.scrollY;
    } else {
      scrollY = -window.scrollY;
    }

    const progress = scrollY / window.innerHeight || 0;
    setMoveAmount(progress * 7); // Ajustar este multiplicador según la velocidad de la animación mobile
  };

  let card1Animation = useSpring({
    transform: `translateX(${moveAmount}em)`,
    config: { mass: 1, tension: 280, friction: 30 },
  });

  let card2Animation = useSpring({
    transform: `translateX(${-moveAmount}em)`,
    config: { mass: 1, tension: 280, friction: 30 },
  });

  useEffect(() => {
    if (animation) {
      window.addEventListener("scroll", handleScrollAnimation);
      return () => {
        window.removeEventListener("scroll", handleScrollAnimation);
      };
    }
  }, [isMobile, animation]);

  return (
    <Fade delay={300} triggerOnce>
      <InView as="div" onChange={() => setAnimation(!animation)}>
        {!isMobile ? (
          <PicturesContainerDesktop>
            <Element className="scroll-element">
              <animated.div style={card1Animation}>
                <RowDesktop>
                  <Picture src={Screenshot1} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot4} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot2} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot3} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot5} alt="Screenshots" withWrapper />
                </RowDesktop>
              </animated.div>
            </Element>
            <Element className="scroll-element">
              <animated.div style={card2Animation}>
                <RowDesktop>
                  <Picture src={Screenshot6} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot7} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot8} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot9} alt="Screenshots" withWrapper />
                </RowDesktop>
              </animated.div>
            </Element>
          </PicturesContainerDesktop>
        ) : (
          <PicturesContainerMobile>
            <Element className="scroll-element">
              <animated.div style={card1Animation}>
                <FirstRowMobile>
                  <Picture src={Screenshot1} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot2} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot3} alt="Screenshots" withWrapper />
                </FirstRowMobile>
              </animated.div>
            </Element>
            <Element className="scroll-element">
              <animated.div style={card2Animation}>
                <SecondRowMobile>
                  <Picture src={Screenshot3} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot7} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot8} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot1} alt="Screenshots" withWrapper />
                </SecondRowMobile>
              </animated.div>
            </Element>
            <Element className="scroll-element">
              <animated.div style={card1Animation}>
                <FirstRowMobile>
                  <Picture src={Screenshot6} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot9} alt="Screenshots" withWrapper />
                  <Picture src={Screenshot5} alt="Screenshots" withWrapper />
                </FirstRowMobile>
              </animated.div>
            </Element>
          </PicturesContainerMobile>
        )}
      </InView>
    </Fade>
  );
};

export default ScrollCardAnimation;

const PicturesContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14.9px;
  margin: 8% 0 3%;

  .image {
    width: 367px;
    img {
      border-radius: 7.4px;
    }
  }
  @media (max-width: 890px) {
    .image {
      width: 222px;
    }
  }
`;

const RowDesktop = styled.div`
  display: flex;
  gap: 14.9px;
`;

const PicturesContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9.5px;
  margin-top: 2%;
  padding: 7% 0%;

  .image {
    span {
      border-radius: 7.4px;
      flex: 1 0 auto;
    }
  }
`;

const FirstRowMobile = styled.div`
  display: flex;
  gap: 9.5px;
  width: 120%;
  position: relative;
  right: 70%;
`;

const SecondRowMobile = styled.div`
  display: flex;
  gap: 9.5px;
  width: 161%;
`;
