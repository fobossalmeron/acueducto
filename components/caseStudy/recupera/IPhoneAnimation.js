import { useEffect } from "react";
import Picture from "components/caseStudy/shared/Picture";
import MobileBackground from "public/assets/img/casestudies/recupera/mobile1.png";
import styled from "styled-components";
import UIMobile1 from "public/assets/img/casestudies/recupera/UIMobile1.png";
import UIMobile2 from "public/assets/img/casestudies/recupera/UIMobile2.png";
import UIMobile3 from "public/assets/img/casestudies/recupera/UIMobile3.png";
import { useState } from "react";

const IPhoneAnimation = ({isMobile}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [animationInProgress, setAnimationInProgress] = useState(false);
    
  useEffect(() => {
    const handleScroll = () => {
      let scrollY = 0; 
      //const scrollY = document.querySelector("#ScrollIphoneAnimation")?.getBoundingClientRect().top;
      if (isMobile){
        scrollY = window.scrollY;
      } else {
        scrollY = document.querySelector('#ScrollIphoneAnimation')?.getBoundingClientRect().top;
      };
      console.log(scrollY, 'scrollY')

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

    console.log(isMobile, 'pasa por aca')
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelector("#Clipper").removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const getAnimationStyle = () => {
    const translateY = scrollPosition * 0.05; // Ajustar para la velocidad del movimiento
    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 4s ease"
    };
  };

  const getAnimationStyleMobile = () => {
    // const translateY = scrollPosition * 0.08; // Ajustar para la velocidad del movimiento
    const translateY = isMobile ? -scrollPosition * 0.08 : scrollPosition * 0.08;
    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 4s ease"
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
      <div className={`containerPictures`} style={!isMobile ? getAnimationStyle() : getAnimationStyleMobile()} isMobile>
        <div className={`picture1`}>
          <Picture
            src={UIMobile1}
            alt="Component"
            withWrapper
          />
        </div>
        <div className={`picture2`}>
          <Picture
            src={UIMobile2}
            alt="Component"
            withWrapper
          />
        </div>
        <div className={`picture3`}>
          <Picture
            src={UIMobile3}
            alt="Component"
            withWrapper
          />
        </div>
      </div>
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

  .containerPictures {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: ${(props) => (props.isMobile ? "0px" : "-345px")};

    .picture1 {
      max-width: 280px;
      top: 8%;
      left: 8%;
      width: 42%;
    }
    .picture2 {
      top: 25%;
      right: 2%;
      max-width: 320px;
      width: 47.8%;
    }
    .picture3 {
      max-width: 250px;
      bottom: 12.5%;
      left: 2%;
      width: 37.4%;
    }
  
    .picture1, .picture2 , .picture3 {
      position: absolute;
    }
  }
  @media (max-width: 630px) {
    .containerPictures {
      top: auto;
      .picture3 {
        bottom: 24%;
      }
    }
  }
`;