import { useEffect } from "react";
import Picture from "components/caseStudy/shared/Picture";
import MobileBackground from "public/assets/img/casestudies/recupera/mobile1.png";
import styled from "styled-components";
import UIMobile1 from "public/assets/img/casestudies/recupera/UIMobile1.png";
import UIMobile2 from "public/assets/img/casestudies/recupera/UIMobile2.png";
import UIMobile3 from "public/assets/img/casestudies/recupera/UIMobile3.png";
import { useState } from "react";

const IPhoneAnimation = () => {
  const [scrollDirection, setScrollDirection] = useState(false);
    
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = document.querySelector("#ScrollIphoneAnimation")?.getBoundingClientRect().top;
      console.log(scrollY, 'scrollY')

      if (scrollY !== 0) {
        setScrollDirection(true);

        setTimeout(() => {
          setScrollDirection(false);
        }, 2000);
      }
    };
    
    document.querySelector("#Clipper").addEventListener("scroll", handleScroll);
    
    return () => {
      document.querySelector("#Clipper").removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <MobilePicture id="ScrollIphoneAnimation">
      <div className='mobileBackground'>
        <Picture
          src={MobileBackground}
          alt="Component"
          withWrapper
        />
      </div>
      <div className={`picture1 ${scrollDirection === true ? 'moveUpDown' : ' '}`}>
        <Picture
          src={UIMobile1}
          alt="Component"
          withWrapper
        />
      </div>
      <div className={`picture2 ${scrollDirection === true ? 'moveUpDown' : ' '}`}>
        <Picture
          src={UIMobile2}
          alt="Component"
          withWrapper
        />
      </div>
      <div className={`picture3 ${scrollDirection === true ? 'moveUpDown' : ' '}`}>
        <Picture
          src={UIMobile3}
          alt="Component"
          withWrapper
        />
      </div>
    </MobilePicture>
  );
};

export default IPhoneAnimation;

const MobilePicture = styled.div`
  width: 100%;
  // height: 100%;
  position: relative;

  .mobileBackground {
    max-width: 649px;
    position: relative;
    left: 25%;
  }
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
    transition: transform 0.1s ease;
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

  .moveUpDown {
    animation: moveUpDown 2s ease;
  }

  @keyframes moveUpDown {
    0%, 90% {
      transform: translateY(1%);
    }
    100% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-1%);
    }
  }
`;