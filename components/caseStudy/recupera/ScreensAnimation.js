import styled from "styled-components";
import Screen1 from "public/assets/img/casestudies/recupera/screen1.png";
import Screen2 from "public/assets/img/casestudies/recupera/screen2.png";
import Screen3 from "public/assets/img/casestudies/recupera/screen3.png";
import Lottie from "lottie-react";
import animationData from "public/assets/img/casestudies/recupera/lottie-recupera.json";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const ScreenAnimation = () => {
  return (
    <DesktopAnimation>
      <Fade delay={300} direction="up" triggerOnce className="screen1">
        <Image
          src={Screen1}
          alt="Recupera"
        />
      </Fade>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <Fade delay={400} direction="right" triggerOnce className="screen2">
          <>
            <Image
              src={Screen2}
              alt="Recupera"
            />
            <div className="lottie">
              <Lottie
                animationData={animationData}
                loop={true}
              />
            </div>
          </>
        </Fade>
        <Fade delay={420} direction="up" triggerOnce className="screen3">
          <Image
            src={Screen3}
            alt="Recupera"
          />
        </Fade>
      </div>
    </DesktopAnimation>
  )
};

export default ScreenAnimation;

const DesktopAnimation = styled.div`
  display: flex;
  gap: 48px;
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

  .lottie {
    width: 24%;
    position: absolute;
    top: 30%;
    left: 15%;
  }

  .screen3 {
    width: 30%;
    border-radius: 16px;
    box-shadow: 0px 20px 60px 0px rgba(40, 3, 109, 0.12), 0px 40px 60px 0px rgba(40, 3, 109, 0.06);
  }

  @media (max-width: 900px) {
    left: 7%;
    gap: 29px;
  }
  @media (max-width: 600px) {
    gap: 12px;
  }
`;