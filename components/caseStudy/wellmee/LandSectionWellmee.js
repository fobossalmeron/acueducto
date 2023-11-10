import styled from "styled-components";
import CommonSection from "components/caseStudy/shared/CommonSection";
import { useEffect } from "react";

const LandSectionWellmee = (props) => {

  useEffect(() => {
    //Configuración de carga circle-md
    const circle = props.isMobile ? document.querySelector('.progress-ring__circle-md-mobile') : document.querySelector('.progress-ring__circle-md');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference + (circumference * (props.isMobile ? 0.245 : 0.44)); // Carga

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    // Configuración de carga circle-xl
    const circleExtra = props.isMobile ? document.querySelector('.progress-ring__circle-xl-mobile') : document.querySelector('.progress-ring__circle-xl');
    const radiusExtra = circleExtra.r.baseVal.value;
    const circumferenceExtra = radiusExtra * 2 * Math.PI;
    const offsetExtra = circumferenceExtra + (circumferenceExtra * (props.isMobile ? 0.745 : 0.59)); // Carga

    circleExtra.style.strokeDasharray = `${circumferenceExtra}`;
    circleExtra.style.strokeDashoffset = `${circumferenceExtra}`;

    const animateCircles = () => {
      setTimeout(() => {
      //Animacion circle-md
      circle.style.transition = `stroke-dashoffset 1s linear 0s`;
      circle.style.strokeDashoffset = offset;

      // Animacion circle-tip-md
      const circleTipMd = props.isMobile ? document.querySelector('.circle-tip-md-mobile') : document.querySelector('.circle-tip-md');
      circleTipMd && (circleTipMd.style.animation = `${props.isMobile ? 'rotateMdMobile' : 'rotateMd'} 1s linear forwards 0s`);

      // Animacion circle-xl
      circleExtra.style.transition = `stroke-dashoffset 1s linear 0s`;
      circleExtra.style.strokeDashoffset = offsetExtra;

      // Animacion circle-tip-xl
      const circleTipXl = props.isMobile ? document.querySelector('.circle-tip-xl-mobile') : document.querySelector('.circle-tip-xl');
      circleTipXl && (circleTipXl.style.animation = `${props.isMobile ? 'rotateXlMobile' : 'rotateXl'} 1s linear forwards 0s`);
    }, 1000);
    }
    requestAnimationFrame(animateCircles);

    }, [props.isMobile]);

  return (
    <LandSection>
      <div className="circle-container">
        {!props.isMobile ?
          <svg width="1315" height="1280" viewBox="0 0 1295 1280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="progress-ring__circle-xl-base" stroke="#C8D5C8" strokeWidth="68px" cx="50%" cy="50%" r="606" fill="transparent" opacity="0.3" />
            <circle
              className="progress-ring__circle-xl"
              stroke="#00CEBA"
              strokeWidth="68px"
              cx="50%"
              cy="50%"
              r="606"
              fill="transparent"
              strokeLinecap="round"
            />
            <g className="circle-tip-xl">
              <path opacity="0" className="progress-ring__circle-xl-transparent" d="M0 639.798C-2.83045e-05 993.149 286.447 1279.6 639.798 1279.6C993.149 1279.6 1279.6 993.149 1279.6 639.799C1279.6 286.448 993.149 8.93396e-05 639.799 6.10352e-05C286.448 3.27307e-05 2.83045e-05 286.448 0 639.798ZM1212.13 639.799C1212.13 955.89 955.89 1212.13 639.798 1212.13C323.707 1212.13 67.4642 955.89 67.4642 639.798C67.4643 323.707 323.707 67.4643 639.799 67.4643C955.89 67.4643 1212.13 323.707 1212.13 639.799Z" fill="#C8D5C8"/>
              <path d="M1068.81 989.958C1111.88 989.958 1146.81 1024.88 1146.81 1067.96C1146.81 1111.04 1111.88 1145.96 1068.81 1145.96C1025.73 1145.96 990.806 1111.04 990.806 1067.96C990.806 1024.88 1025.73 989.958 1068.81 989.958Z" fill="#00CEBA"/>
              <path d="M1068.81 1017.91C1096.43 1017.91 1118.83 1040.3 1118.83 1067.93C1118.83 1095.56 1096.43 1117.95 1068.81 1117.95C1041.18 1117.95 1018.79 1095.56 1018.79 1067.93C1018.79 1040.3 1041.18 1017.91 1068.81 1017.91Z" fill="#F3F6F3"/>
            </g>
            <circle className="progress-ring__circle-md-base" stroke="#C8D5C8" strokeWidth="50px" cx="50%" cy="50%" r="430" fill="transparent" opacity="0.3" />
            <circle
              className="progress-ring__circle-md"
              stroke="#00CEBA"
              strokeWidth="50px"
              cx="50%"
              cy="50%"
              r="430"
              fill="transparent"
              strokeLinecap="round"
            />
            <g className="circle-tip-md">
              <path className="progress-ring__circle-md-transparent" d="M639.5 185C388.487 185 185 388.487 185 639.5C185 890.513 388.487 1094 639.5 1094C890.514 1094 1094 890.513 1094 639.5C1094 388.487 890.514 185 639.5 185ZM639.5 1046.07C414.955 1046.07 232.925 864.045 232.925 639.5C232.925 414.955 414.955 232.925 639.5 232.925C864.045 232.925 1046.07 414.955 1046.07 639.5C1046.07 864.045 864.045 1046.07 639.5 1046.07Z" fill="#C8D5C8" opacity="0"/>
              <path d="M819.131 975.203C849.732 975.203 874.54 1000.01 874.54 1030.61C874.54 1061.21 849.732 1086.02 819.131 1086.02C788.529 1086.02 763.721 1061.21 763.721 1030.61C763.721 1000.01 788.529 975.203 819.131 975.203Z" fill="#00CEBA"/>
              <path d="M819.137 995.061C838.761 995.061 854.67 1010.97 854.67 1030.59C854.67 1050.22 838.761 1066.13 819.137 1066.13C799.512 1066.13 783.604 1050.22 783.604 1030.59C783.604 1010.97 799.512 995.061 819.137 995.061Z" fill="#F3F6F3"/>
            </g>
          </svg>
          :
            <>
              <svg width="684" height="684" viewBox="0 0 684 684" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle stroke="#C8D5C8" strokeWidth="31px" cx="50%" cy="50%" r="303" fill="transparent" opacity="0.3" />
                <circle
                  className="progress-ring__circle-xl-mobile"
                  stroke="#00CEBA"
                  strokeWidth="31px"
                  cx="50%"
                  cy="50%"
                  r="303"
                  fill="transparent"
                  strokeLinecap="round"
                />
                <g className="circle-tip-xl-mobile">
                  <path d="M78.1496 342.126C78.1496 363.665 60.6887 381.126 39.1495 381.126C17.6104 381.126 0.149417 363.665 0.149414 342.126C0.149411 320.586 17.6103 303.126 39.1495 303.126C60.6886 303.126 78.1496 320.586 78.1496 342.126Z" fill="#00CEBA"/>
                  <path d="M64.1701 342.136C64.1701 355.948 52.9728 367.146 39.1601 367.146C25.3474 367.146 14.15 355.948 14.15 342.136C14.15 328.323 25.3474 317.126 39.1601 317.126C52.9727 317.126 64.1701 328.323 64.1701 342.136Z" fill="#F3F6F3"/>
                </g>
                <circle
                  stroke="#C8D5C8"
                  strokeWidth="22px"
                  cx="50%"
                  cy="50%"
                  r="215"
                  fill="transparent"
                  opacity="0.3"
                />
                <circle
                  className="progress-ring__circle-md-mobile"
                  stroke="#00CEBA"
                  strokeWidth="22px"
                  cx="50%"
                  cy="50%"
                  r="215"
                  fill="transparent"
                  strokeLinecap="round"
                />
                <g className="circle-tip-md-mobile">
                  <path d="M153.26 342.354C153.26 357.655 140.856 370.059 125.555 370.059C110.254 370.059 97.8506 357.655 97.8506 342.354C97.8506 327.053 110.254 314.649 125.555 314.649C140.856 314.649 153.26 327.053 153.26 342.354Z" fill="#00CEBA"/>
                  <path d="M143.329 342.36C143.329 352.172 135.375 360.126 125.563 360.126C115.751 360.126 107.796 352.172 107.796 342.36C107.796 332.548 115.751 324.593 125.563 324.593C135.375 324.593 143.329 332.548 143.329 342.36Z" fill="#F3F6F3"/>
                </g>
              </svg>
            </>
        }
        <span>
          <img
            src="/assets/img/casestudies/wellmee/brandWellmee.svg"
            alt="Logo"
            className="logo"
          />
          <img
            src="/assets/img/casestudies/wellmee/logoWellmee.svg"
            alt="Logo"
            className="marca"
          />
        </span>
      </div>
    </LandSection>
  );
};

export default LandSectionWellmee;

const LandSection = styled(CommonSection)`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    display: flex;
    justify-content: center;
    position: absolute;
    padding: 0 30px;
    gap: 5%;
    padding-top: 9%;
    img {
      width: 100%;
    }
  }

  .logo {
    max-width: 140px;
    width: 100%;
  }
  .marca {
    max-width: 388px;
  }

  .circle-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: auto;
    padding: 0 2%;

    svg {
      margin-top: 17%;
    }
  }

  .progress-ring__circle-xl {
    transform-origin: center;
    transform: rotate(50deg);
  }

  .progress-ring__circle-md {
    transform-origin: center;
    transform: rotate(70deg);
  }

  .circle-tip-xl {
    transform-origin: center;
  }

  .circle-tip-md {
    transform-origin: center;
  }

  .progress-ring__circle-md,
  .progress-ring__circle-xl,
  .circle-tip-md,
  .circle-tip-xl {
    will-change: transform;
  }

  @keyframes rotateMd {
    from {
      transform-origin: center;
      transform: rotate(0deg);
    }
    to {
      transform-origin: center;
      transform: rotate(-155deg);
    }
  }

  @keyframes rotateXl {
    from {
      transform-origin: center;
      transform: rotate(0deg);
    }
    to {
      transform-origin: center;
      transform: rotate(-205deg);
    }
  }

  @media (max-width: 1050px) {
    .logo {
      max-width: 90px;
    }
    .marca {
      max-width: 250px;
    }

    span {
      padding: 0px;
    }

    .circle-container {
      overflow-x: hidden;
      svg {
        margin-top: 0%;
        min-width: 700px;
      }
    }
  }

  @media (max-width: 650px) {
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .logo {
      max-width: 89px;
      padding: 0px 8px 30px 8px;
    }

    .marca {
      max-width: 217px;
    }

    .progress-ring__circle-md-mobile {
      transform-origin: center;
      transform: rotate(180deg);
    }
    .progress-ring__circle-md-mobile1 {
      transform-origin: center;
      transform: rotate(180deg);
    }

    .circle-tip-md-mobile {
      transform-origin: center;
    }

    .progress-ring__circle-xl-mobile {
      transform-origin: center;
      transform: rotate(180deg);
    }

    .circle-tip-xl-mobile {
      transform-origin: center;
    }

    @keyframes rotateMdMobile {
      from {
        transform-origin: center center;
        transform: rotate(0deg);
      }
      to {
        transform-origin: center;
        transform: rotate(-90deg);
      }
    }

    @keyframes rotateXlMobile {
      from {
        transform-origin: center;
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-270deg);
      }
    }
  }
`;