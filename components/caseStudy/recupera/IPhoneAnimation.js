import { useEffect, useRef } from "react";
import Picture from "components/caseStudy/shared/Picture";
import MobileBackground from "public/assets/img/casestudies/recupera/mobile1.png";
import styled from "styled-components";
import UIMobile1 from "public/assets/img/casestudies/recupera/UIMobile1.png";
import UIMobile2 from "public/assets/img/casestudies/recupera/UIMobile2.png";
import UIMobile3 from "public/assets/img/casestudies/recupera/UIMobile3.png";
import { useState } from "react";
import Image from "next/legacy/image";

const IPhoneAnimation = ({ isMobile }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  // Rocío: getElementById o el querySelector funcionan por fuera de React, a veces fallarán porque
  // react actualiza el DOM y no hay control. Hay que usar el hook de useRef que está debajo (a menos
  // que esté en otro componente lejísimos, como que quisieramos cambiarle el color al logo, ahí pues
  // si es considerablemente menos pedo hacerlo con js pelón). 
  const animationContainer = useRef();
  let scrollY = 0;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    scrollY =
      animationContainer.current?.getBoundingClientRect().top +
      (isMobile ? +-300 : 0);
    //Rocío. Te dejé comentado el console.log pero préndelo para que veas la cantidad de calls que hace esta función
    //aún cuando no estamos viendo la animación. La explicación en el texto de abajo.
    //console.log(scrollY);

    if (!animationInProgress) {
      setScrollPosition(scrollY);
      setAnimationInProgress(true);

      //Rocío: El animation in progress de arriba no está haciendo nada y estamos observando el scroll 
      //durante toda la página. Esto puede traer problemas de performance. Hay que usar algo 
      //como el Intersection Observer para que solo se active el EventListener cuando esté en el viewport
      //este elemento. Está bien quitarlo al desmontar el componente pero igual está activo toda la página
      //Me parece que ya importamos un par de librerías para usar el Intersection Observer fácilmente

      //Rocío: Me di cuenta que también estás añadiendo más EventListeners en el componente de 
      //ScrollCardAnimation.js, esto añade al problema. Con mi solución no habría problema de que lo hagas
      //en dos componentes separados si solo se activa cuando pasas por ahí. 

      setTimeout(() => {
        setAnimationInProgress(false);
      }, 2000);
    }
  };

  const limitEffect = (speed) => {
    if (scrollPosition * speed > 20) {
      return 20;
    } else if (scrollPosition * speed < -20) {
      return -20;
    }
  };

  const getAnimationStyle = () => {
    const translateY = limitEffect(0.9); // Ajustar para la velocidad del movimiento
    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 4s ease",
      bottom: "0px",
    };
  };

  const getAnimationStyleMobile = () => {
    const translateY = limitEffect(0.9); // Ajustar para la velocidad del movimiento
    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 1.5s ease",
      bottom: "-20px",
    };
  };
 //Rocio: Igual acá abajo puse alt's para todas las imágenes. Siempre hay que poner cosas contextuales
 //porque nos ayuda en SEO y para lectores de pantalla. Poner "Imagen 1" no es útil. 
  return (
    <MobilePicture id="ScrollIphoneAnimation" ref={animationContainer}>
      <div className="mobileBackground">
        <Picture src={MobileBackground} alt="Recupera App" withWrapper />
      </div>
      <ContainerPictures
        style={!isMobile ? getAnimationStyle() : getAnimationStyleMobile()}
      >
        <div className={`picture1`}>
          <Image src={UIMobile1} alt="Saldo a favor" withWrapper />
          
        </div>
        <div className={`picture2`}>
          <Image src={UIMobile2} alt="Factura deducible" withWrapper />
        </div>
        <div className={`picture3`}>
          <Image src={UIMobile3} alt="Requisitos para deducir" withWrapper />
        </div>
      </ContainerPictures>
    </MobilePicture>
  );
};

export default IPhoneAnimation;

const MobilePicture = styled.div`
  width: 100%;
  position: relative;

  .mobileBackground {
    max-width: 649px;
    position: relative;
    left: 25%;
  }
`;

const ContainerPictures = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  .picture1 {
    max-width: 280px;
    top: 16%;
    left: 8%;
    width: 42%;
  }
  .picture2 {
    top: 32%;
    right: 2%;
    max-width: 320px;
    width: 47.8%;
  }
  .picture3 {
    max-width: 250px;
    bottom: 14%;
    left: 2%;
    width: 37.4%;
  }

  .picture1,
  .picture2,
  .picture3 {
    position: absolute;
  }

  @media (max-width: 630px) {
    top: auto;

    .picture1 {
      left: 10%;
    }
    .picture2 {
      right: -2%;
    }
    .picture3 {
      left: 4%;
    }
  }
`;
