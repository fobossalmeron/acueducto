import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Screen1 from "public/assets/img/casestudies/recupera/screen1.png";
import Transparency from "public/assets/img/casestudies/recupera/transparency.svg";
import Transparency1 from "public/assets/img/casestudies/recupera/trasparency1.png";
import Screen2 from "public/assets/img/casestudies/recupera/screen2.png";
import Screen3 from "public/assets/img/casestudies/recupera/screen3.png";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const ScreenAnimation = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    };
    window.addEventListener("resize", function(){
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, [isMobile]);

  return (
    <>
      {!isMobile 
        ? <DesktopAnimation>
            <>
              <Fade delay={300} direction="up" triggerOnce className="screen1">
                <Image
                  src={Screen1}
                  alt="Recupera"
                />
              </Fade>
            </>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <Fade delay={400} direction="right" triggerOnce className="screen2">
                <Image
                  src={Screen2}
                  alt="Recupera"
                />
              </Fade>
              <Fade delay={420} direction="up" triggerOnce className="screen3">
                <Image
                  src={Screen3}
                  alt="Recupera"
                />
              </Fade>
            </div>
          </DesktopAnimation>
        : <>holi</>
      }
    </>
  )
};

export default ScreenAnimation;

const DesktopAnimation = styled.div`
  display: flex;
  gap: 48px;
  paddingLeft: 5%;
  position: relative;
  left: 5%;

  .screen1
    span {
      border-radius: 24px;
      box-shadow: 0px 20px 60px 0px rgba(40, 3, 109, 0.12), 0px 40px 60px 0px rgba(40, 3, 109, 0.06);
    }
  }

  .screen2 span {
    border-radius: 28px;
    box-shadow: 0px 20px 60px 0px rgba(40, 3, 109, 0.12), 0px 40px 60px 0px rgba(40, 3, 109, 0.06);
  }

  .screen3 {
    width: 30%;
    border-radius: 16px;
    box-shadow: 0px 20px 60px 0px rgba(40, 3, 109, 0.12), 0px 40px 60px 0px rgba(40, 3, 109, 0.06);
  }
`;