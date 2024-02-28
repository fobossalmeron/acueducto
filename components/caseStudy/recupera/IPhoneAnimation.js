import { useEffect, useRef } from "react";
import Picture from "components/caseStudy/shared/Picture";
import MobileBackground from "public/assets/img/casestudies/recupera/mobile1.png";
import styled from "styled-components";
import UIMobile1 from "public/assets/img/casestudies/recupera/UIMobile1.png";
import UIMobile2 from "public/assets/img/casestudies/recupera/UIMobile2.png";
import UIMobile3 from "public/assets/img/casestudies/recupera/UIMobile3.png";
import { useState } from "react";
import Image from "next/legacy/image";
import { InView } from "react-intersection-observer";

const IPhoneAnimation = ({ isMobile }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animation, setAnimation] = useState(true);

  const animationContainer = useRef();
  let scrollY = 0;

  const handleScroll = () => {
    scrollY =
      animationContainer.current?.getBoundingClientRect().top +
      (isMobile ? +-300 : 0);
    setScrollPosition(scrollY);
  };

  useEffect(() => {
    if (animation) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [animation]);

  const limitEffect = (speed) => {
    if (scrollPosition * speed > 20) {
      return 20;
    } else if (scrollPosition * speed < -20) {
      return -20;
    }
  };

  const getAnimationStyle = () => {
    const translateY = limitEffect(0.9); // Movement speed
    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 4s ease",
      bottom: "0px",
    };
  };

  const getAnimationStyleMobile = () => {
    const translateY = limitEffect(0.9); // Movement speed
    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 1.5s ease",
      bottom: "-20px",
    };
  };
  return (
    <InView
      as="div"
      onChange={(inView) => {
        setAnimation(inView);
      }}
    >
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
    </InView>
  );
};

export default IPhoneAnimation;

const MobilePicture = styled.div`
  position: relative;

  .mobileBackground {
    max-width: 649px;
    position: relative;
    left: 25%;
    padding-top: 10%;
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
