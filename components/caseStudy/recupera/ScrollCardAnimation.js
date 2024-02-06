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

/* 
Rocío: refactoricé unas cosillas porque cambió el layout pero este componente está muy sucio.
Tenemos que ser más cuidadosos, hay una imagen que no se está importando.
No se utiliza el componente de imágenes de next que se encarga de optimizarlas a distintos
tamaños de imagen, hay estilos duplicados, variables que no se usan, cosas comentadas, etc. 
*/

const ScrollCardAnimation = ({ isMobile }) => {
  const [moveAmount, setMoveAmount] = useState(0);
  let scrollY = 0;

  const handleScrollAnimation = () => {

    if (isMobile) {
      scrollY = window.scrollY;
    } else {
      scrollY = -window.scrollY;
    }

    const progress = (scrollY - 0) / (window.innerHeight - 0) || 0;
    const amount = setMoveAmount(progress * 7); // Ajustar este multiplicador según la velocidad de la animación mobile

    const card1 = document.getElementById("card1");
    if (card1) {
      card1.style.transform = `translateX(${moveAmount}em)`;
    }

    const card2 = document.getElementById("card2");
    if (card2) {
      card2.style.transform = `translateX(${-moveAmount}em)`;
    }

    const card3 = document.getElementById("card3");
    if (card3) {
      card3.style.transform = `translateX(${moveAmount}em)`;
    }
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
    window.addEventListener("scroll", handleScrollAnimation);
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, [isMobile]);

  return (
    <Fade delay={300} triggerOnce>
      {!isMobile ? (
        <PicturesContainer>
          <Element name="card1" className="scroll-element">
            <animated.div style={card1Animation}>
              <FirstRow id="card1">
                <img
                  src="/assets/img/casestudies/recupera/screenshot1.png"
                  alt="Screenshots"
                />
                <img
                  src="/assets/img/casestudies/recupera/screenshot4.png"
                  alt="Screenshots"
                />
                <img
                  src="/assets/img/casestudies/recupera/screenshot2.png"
                  alt="Screenshots"
                />
                <img
                  src="/assets/img/casestudies/recupera/screenshot3.png"
                  alt="Screenshots"
                />
                <img
                  src="/assets/img/casestudies/recupera/screenshot5.png"
                  alt="Screenshots"
                />
              </FirstRow>
            </animated.div>
          </Element>
          <Element name="card2" className="scroll-element">
            <animated.div style={card2Animation}>
              <SecondRow id="card2">
                <img
                  src="/assets/img/casestudies/recupera/screenshot6.png"
                  alt="Screenshots"
                />
                <img
                  src="/assets/img/casestudies/recupera/screenshot7.png"
                  alt="Screenshots"
                />
                <img
                  src="/assets/img/casestudies/recupera/screenshot8.png"
                  alt="Screenshots"
                />
                <img
                  src="/assets/img/casestudies/recupera/screenshot9.png"
                  alt="Screenshots"
                />
              </SecondRow>
            </animated.div>
          </Element>
        </PicturesContainer>
      ) : (
        <PicturesContainerMobile>
          <Element name="card1" className="scroll-element">
            <animated.div style={card1Animation}>
              <FirstRowMobile id="card1">
                <Picture src={Screenshot1} alt="Screenshots" withWrapper/>
                <Picture src={Screenshot2} alt="Screenshots" withWrapper/>
                <Picture src={Screenshot3} alt="Screenshots" withWrapper/>
              </FirstRowMobile>
            </animated.div>
          </Element>
          <Element name="card1" className="scroll-element">
            <animated.div style={card2Animation}>
              <SecondRowMobile id="card2">
                <Picture src={Screenshot3} alt="Screenshots" withWrapper />
                <Picture src={Screenshot7} alt="Screenshots" withWrapper />
                <Picture src={Screenshot8} alt="Screenshots" withWrapper />
                <Picture src={Screenshot1} alt="Screenshots" withWrapper />
              </SecondRowMobile>
            </animated.div>
          </Element>
          <Element name="card3" className="scroll-element">
            <animated.div style={card1Animation}>
              <ThirdRowMobile id="card3">
                <Picture src={Screenshot6} alt="Screenshots" withWrapper />
                <Picture src={Screenshot9} alt="Screenshots" withWrapper />
                <Picture src={Screenshot5} alt="Screenshots" withWrapper />
              </ThirdRowMobile>
            </animated.div>
          </Element>
        </PicturesContainerMobile>
      )}
    </Fade>
  );
};

export default ScrollCardAnimation;

const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14.9px;
  margin: 8% 0 3%;

  img {
    border-radius: 7.4px;
    width: 25%;
  }
`;

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14.9px;
  // width: 132%;
  align-self: center;
  position: relative;
  right: 18%;
`;

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14.9px;
  // width: 116%;
  align-self: center;
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
  flex-direction: row;
  gap: 9.5px;
  width: 120%;
  position: relative;
  right: 80%;
`;

const SecondRowMobile = styled.div`
  display: flex;
  gap: 9.5px;
  flex-direction: row;
  width: 161%;
  align-self: center;
`;

const ThirdRowMobile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9.5px;
  width: 123%;
  position: relative;
  right: 80%;
`;
