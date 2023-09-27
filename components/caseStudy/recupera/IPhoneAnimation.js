import { useEffect } from "react";
import Picture from "components/caseStudy/shared/Picture";
import MobileBackground from "public/assets/img/casestudies/recupera/mobile1.png";
import styled from "styled-components";
import UIMobile1 from "public/assets/img/casestudies/recupera/UIMobile1.png";
import UIMobile2 from "public/assets/img/casestudies/recupera/UIMobile2.png";
import UIMobile3 from "public/assets/img/casestudies/recupera/UIMobile3.png";
import { useState } from "react";
import Image from "next/legacy/image";

const IPhoneAnimation = ({isMobile}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animationInProgress, setAnimationInProgress] = useState(false);
    
  useEffect(() => {
    const handleScroll = () => {
      let scrollY = 0;

      if (isMobile){
        scrollY = window.scrollY / 5;
      } else {
        scrollY = document.querySelector('#ScrollIphoneAnimation')?.getBoundingClientRect().top;
      };

      if (!animationInProgress) {
        setScrollPosition(scrollY);
        setAnimationInProgress(true);

        setTimeout(() => {
          setAnimationInProgress(false);
        }, 2000);
      }
    };
    
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
    } else {
      document.querySelector("#Clipper").addEventListener("scroll", handleScroll);
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelector("#Clipper").removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const getAnimationStyle = () => {
    const translateY = scrollPosition * 0.05; // Ajustar para la velocidad del movimiento
    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 4s ease",
      bottom: "0px",
    };
  };

  const getAnimationStyleMobile = () => {
    const translateY = isMobile ? -scrollPosition * 0.08 : scrollPosition * 0.08; // Ajustar para la velocidad del movimiento

    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 1s ease",
      bottom: "-60px",
    };
  };
  
  return (
    <MobilePicture id="ScrollIphoneAnimation">
      <div className='mobileBackground'>
        <Picture
          src={MobileBackground}
          alt="Component"
          withWrapper
        />
      </div>
      <ContainerPictures style={!isMobile ? getAnimationStyle() : getAnimationStyleMobile()}>
        <div className={`picture1`}>
          <Image
            src={UIMobile1}
            alt="Component"
            withWrapper
          />
        </div>
        <div className={`picture2`}>
          <Image
            src={UIMobile2}
            alt="Component"
            withWrapper
          />
        </div>
        <div className={`picture3`}>
          <Image
            src={UIMobile3}
            alt="Component"
            withWrapper
          />
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
  
  .picture1, .picture2 , .picture3 {
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