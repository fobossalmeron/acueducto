import styled from "styled-components";
import CommonSection from "components/caseStudy/shared/CommonSection";
import { useEffect } from "react";

const LandSectionWellmee = (props) => {

  useEffect(() => {
    // Configuración para el círculo md
    const circle = document.querySelector('.progress-ring__circle-md');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference + (circumference * (props.isMobile ? 0.245 : 0.44)); // Carga

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    // Configuración para el círculo xl
    const circleExtra = document.querySelector('.progress-ring__circle-xl');
    const radiusExtra = circleExtra.r.baseVal.value;
    const circumferenceExtra = radiusExtra * 2 * Math.PI;
    const offsetExtra = circumferenceExtra + (circumferenceExtra * (props.isMobile ? 0.745 : 0.59)); // Carga

    circleExtra.style.strokeDasharray = `${circumferenceExtra}`;
    circleExtra.style.strokeDashoffset = `${circumferenceExtra}`;

    setTimeout(() => {
      //Animar círculo md
      circle.style.transition = 'stroke-dashoffset 1s linear';
      circle.style.strokeDashoffset = offset;

      // Animar círculo xl
      circleExtra.style.transition = 'stroke-dashoffset 1s linear';
      circleExtra.style.strokeDashoffset = offsetExtra;

      // Animar círculo pequeño/md
      const circleTipMd = document.querySelector('.circle-tip-md');
      circleTipMd.style.animation = 'rotateMd 1s linear forwards';

      // // Animar el círculo grande/xl
      const circleTipXl = document.querySelector('.circle-tip-xl');
      circleTipXl.style.animation = `rotateXl 1s linear forwards`;

    }, 1000);

    }, [props.isMobile]);

  return (
    <LandSection>
      <div className="circle-container">
        <svg width="1315" height="1280" viewBox="0 0 1295 1280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            className="progress-ring__circle-xl-base"
            stroke="#C8D5C8"
            strokeWidth="68px"
            cx="50%"
            cy="50%"
            r="606"
            fill="transparent"
            opacity="0.3"
          />
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
            <path className="progress-ring__circle-xl-transparent" d="M0 639.798C-2.83045e-05 993.149 286.447 1279.6 639.798 1279.6C993.149 1279.6 1279.6 993.149 1279.6 639.799C1279.6 286.448 993.149 8.93396e-05 639.799 6.10352e-05C286.448 3.27307e-05 2.83045e-05 286.448 0 639.798ZM1212.13 639.799C1212.13 955.89 955.89 1212.13 639.798 1212.13C323.707 1212.13 67.4642 955.89 67.4642 639.798C67.4643 323.707 323.707 67.4643 639.799 67.4643C955.89 67.4643 1212.13 323.707 1212.13 639.799Z" fill="#C8D5C8" opacity="0"/>
            <path d="M1068.81 989.958C1111.88 989.958 1146.81 1024.88 1146.81 1067.96C1146.81 1111.04 1111.88 1145.96 1068.81 1145.96C1025.73 1145.96 990.806 1111.04 990.806 1067.96C990.806 1024.88 1025.73 989.958 1068.81 989.958Z" fill="#00CEBA"/>
            <path d="M1068.81 1017.91C1096.43 1017.91 1118.83 1040.3 1118.83 1067.93C1118.83 1095.56 1096.43 1117.95 1068.81 1117.95C1041.18 1117.95 1018.79 1095.56 1018.79 1067.93C1018.79 1040.3 1041.18 1017.91 1068.81 1017.91Z" fill="#F3F6F3"/>
          </g>
          <circle
            className="progress-ring__circle-md-base"
            stroke="#C8D5C8"
            strokeWidth="50px"
            cx="50%"
            cy="50%"
            r="430"
            fill="transparent"
            opacity="0.3"
          />
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

    .progress-ring__circle-xl {
      transform-origin: center;
      transform: rotate(180deg);
    }
  
    .progress-ring__circle-md {
      transform-origin: center;
      transform: rotate(180deg);
    }

    .circle-tip-md {
      transform-origin: center;
      transform: rotate(115deg);
    }

    .circle-tip-xl {
      transform-origin: center;
      transform: rotate(135deg);
    }

    @keyframes rotateMd {
      from {
        transform-origin: center;
        transform: rotate(115deg);
      }
      to {
        transform-origin: center;
        transform: rotate(24.5deg);
      }
    }
  
    @keyframes rotateXl {
      from {
        transform-origin: center;
        transform: rotate(145deg);
      }
      to {
        transform-origin: center;
        transform: rotate(-134.9deg);
      }
    }
  }
`;