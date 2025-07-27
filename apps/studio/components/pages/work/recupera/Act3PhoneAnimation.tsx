import { useEffect, useRef, useState, CSSProperties, useCallback, useMemo } from "react";
import styled from "styled-components";
import Image from "next/image";
import { InView } from "react-intersection-observer";

import MobileBackground from "public/assets/img/casestudies/recupera/mobile1.png";
import UIMobile1 from "public/assets/img/casestudies/recupera/UIMobile1.png";
import UIMobile2 from "public/assets/img/casestudies/recupera/UIMobile2.png";
import UIMobile3 from "public/assets/img/casestudies/recupera/UIMobile3.png";

export const Act3PhoneAnimation: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [animation, setAnimation] = useState<boolean>(true);

  const animationContainer = useRef<HTMLDivElement>(null);
  let scrollY = 0;

  const handleScroll = useCallback(() => {
    scrollY =
      (animationContainer.current?.getBoundingClientRect().top ?? 0) +
      (isMobile ? -300 : 0);
    setScrollPosition(scrollY);
  }, [isMobile]);

  useEffect(() => {
    if (animation) {
      const throttledHandleScroll = () => {
        let ticking = false;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", throttledHandleScroll);
      return () => {
        window.removeEventListener("scroll", throttledHandleScroll);
      };
    }
  }, [animation, handleScroll]);

  const limitEffect = (speed: number): number => {
    const effect = scrollPosition * speed;
    if (effect > 20) {
      return 20;
    } else if (effect < -20) {
      return -20;
    }
    return effect;
  };

  const getAnimationStyle = useMemo((): CSSProperties => {
    const translateY = limitEffect(0.9); // Movement speed
    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 4s ease",
      bottom: "0px",
    };
  }, [scrollPosition]);

  const getAnimationStyleMobile = useMemo((): CSSProperties => {
    const translateY = limitEffect(0.9); // Movement speed
    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 1.5s ease",
      bottom: "-20px",
    };
  }, [scrollPosition]);

  return (
    <InView
      as="div"
      onChange={(inView) => {
        setAnimation(inView);
      }}
    >
      <MobilePicture id="ScrollIphoneAnimation" ref={animationContainer}>
        <div className="mobileBackground">
          <Image
            src={MobileBackground}
            alt="Recupera App"
            width={649}
            height={638}
            priority
          />
        </div>
        <ContainerPictures
          style={!isMobile ? getAnimationStyle : getAnimationStyleMobile}
        >
          <div className="picture1">
            <Image
              src={UIMobile1}
              alt="Saldo a favor"
              width={280}
              height={268}
            />
          </div>
          <div className="picture2">
            <Image
              src={UIMobile2}
              alt="Factura deducible"
              width={320}
              height={327}
            />
          </div>
          <div className="picture3">
            <Image
              src={UIMobile3}
              alt="Requisitos para deducir"
              width={250}
              height={162}
            />
          </div>
        </ContainerPictures>
      </MobilePicture>
    </InView>
  );
};

const MobilePicture = styled.div`
  position: relative;

  .mobileBackground {
    max-width: 649px;
    position: relative;
    left: 25%;
    padding-top: 10%;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const ContainerPictures = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }

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
