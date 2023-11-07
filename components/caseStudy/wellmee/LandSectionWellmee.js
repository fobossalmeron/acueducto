import styled from "styled-components";
import CommonSection from "components/caseStudy/shared/CommonSection";
import { useEffect } from "react";
import { useState } from "react";

const LandSectionWellmee = (props) => {
  const [radius, setRadius] = useState(0);
  const [radiusExtra, setRadiusExtra] = useState(0);

  useEffect(() => {
    // Configuración para el círculo interior
    const circle = document.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    setRadius(radius);
    const circumference = radius * 2 * Math.PI;
    const offset = circumference + (circumference * (props.isMobile ? 0.65 : 0.5)); // 50% de carga
    
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    // Configuración para el círculo exterior
    const circleExtra = document.querySelector('.progress-ring__circle-extra');
    const radiusExtra = circleExtra.r.baseVal.value;
    setRadiusExtra(radiusExtra);
    const circumferenceExtra = radiusExtra * 2 * Math.PI;
    const offsetExtra = circumferenceExtra + (circumferenceExtra * 0.7); // 70% de carga

    circleExtra.style.strokeDasharray = `${circumferenceExtra}`;
    circleExtra.style.strokeDashoffset = `${circumferenceExtra}`;

    setTimeout(() => {
      // Animar el círculo interior
      circle.style.transition = 'stroke-dashoffset 1s ease-out';
      circle.style.strokeDashoffset = offset;

      // Animar el círculo exterior
      circleExtra.style.transition = 'stroke-dashoffset 1s ease-out';
      circleExtra.style.strokeDashoffset = offsetExtra;

      // Animar el círculo pequeño que acompaña al interior
      const circleTipBg = document.querySelector('.circle-tip-bg');
      const angleBg = props.isMobile ? (0.384 * 360) : (0.457 * 360); // 50% de carga
      circleTipBg.style.transform = props.isMobile ? `translate(-50%, -50%) rotate(-${angleBg - 90}deg) translateX(${radius}px)`: `translate(-50%, 0%) rotate(-${angleBg - 90}deg) translateX(${radius}px)`;
 
      // Animar el círculo grande que acompaña al exterior
      const circleTipEx = document.querySelector('.circle-tip-ex');
      const angleEx = props.isMobile ? (0.50 * 360) : (0.67 * 360); // 70% de carga
      circleTipEx.style.transform = props.isMobile ? `translate(-50%, 0%) rotate(-${angleEx - 90}deg) translateX(${radiusExtra}px)` : `translate(0%, -30%) rotate(-${angleEx - 90}deg) translateX(${radiusExtra}px)`;

    }, 1000);

    }, [props.isMobile]);

  return (
    <LandSection radius={radius} radiusExtra={radiusExtra}>
      <div className="circle-container">
        <svg className="progress-ring" width="100%" height="100vh">
          <circle className="progress-ring__circle-bg" stroke="#C8D5C8" strokeOpacity="0.3" strokeWidth="4%" fill="transparent" r="36.8%" cx={props.isMobile ? "50%" : "60%"} cy="50%"/>
          <circle className="progress-ring__circle" stroke="#00CEBA" strokeWidth="4%" fill="transparent" r="36.8%" cx={props.isMobile ? "50%" : "60%"} cy="50%" strokeLinecap="round"/>
          <circle className="progress-ring__circle-ex" stroke="#C8D5C8" strokeOpacity="0.3" strokeWidth="5.6%" fill="transparent" r="53.2%" cx={props.isMobile ? "50%" : "60%"} cy="50%"/>
          <circle className="progress-ring__circle-extra" stroke="#00CEBA" strokeWidth="5.6%" fill="transparent" r="53.2%" cx={props.isMobile ? "50%" : "60%"} cy="50%" strokeLinecap="round"/>
        </svg>
        <div className="circle-tip-bg"></div>
        <div className="circle-tip-ex"></div>
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
    overflow: hidden;
  }
  
  .progress-ring__circle-bg,
  .progress-ring__circle {
    transition: stroke-dashoffset 1s ease-out;
    transform-origin: center;
    transform: rotate(90deg);
  }
  
  .progress-ring__circle {
    transform: rotate(90deg);
    transform-origin: center;
  }

  .progress-ring__circle-ex,
  .progress-ring__circle-extra {
    transition: stroke-dashoffset 1s ease-out;
    transform: rotate(90deg);
    transform-origin: center;
  }

  .progress-ring__circle-extra {
    transform: rotate(90deg);
    transform-origin: center;
  }
  
  .circle-tip-bg {
    width: 6em;
    height: 6em;
    border-radius: 50%;
    background-color: #F3F6F3;
    border: 18px solid #00CEBA;
    position: absolute;
    bottom: 31%;
    transition: transform 1s ease-out;
    transform: translate(0%, -50%) rotate(90deg) translateX(${props => props.radius + 50}px);
    transform-origin: bottom center;
  }

  .circle-tip-ex {
    border-radius: 50%;
    width: 8.8em;
    height: 8.8em;
    background-color: #F3F6F3;
    border: 28px solid #00CEBA;
    position: absolute;
    bottom: 22%;
    transition: transform 1s ease-out;
    transform: translate(-50%, -50%) rotate(90deg) translateX(${props => props.radiusExtra + 50}px);
    transform-origin: bottom center;
  }

  @media (max-width: 1050px) {
    .logo {
      max-width: 90px;
    }
    .marca {
      max-width: 250px;
    }
    .circle-tip-bg {
      width: 52px;
      height: 52px;
      border: 9px solid #00CEBA;
      bottom: 25%;
      transform: translate(-50%, -50%) rotate(90deg) translateX(${props => props.radius}px);
    }

    .circle-tip-ex {
      width: 80px;
      height: 80px;
      border: 15px solid #00CEBA;
      bottom: 25%;
      transform: translate(-50%, -50%) rotate(90deg) translateX(${props => props.radiusExtra}px);
    }
  }

  @media (max-width: 895px) {
    .circle-tip-bg {
      width: 52px;
      height: 52px;
      border: 9px solid #00CEBA;
      bottom: 35%;
      left: 46%;
      transform: translate(0%, -50%) rotate(90deg) translateX(${props => props.radius + 30}px);
    }

    .circle-tip-ex {
      width: 80px;
      height: 80px;
      border: 15px solid #00CEBA;
      bottom: 28%;
      transform: translate(0%, -50%) rotate(90deg) translateX(${props => props.radiusExtra }px);
    }
  }

  @media (max-width: 650px) {
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0px;
    }
    .logo {
      max-width: 89px;
      padding: 0px 8px 30px 8px;
    }

    .marca {
      max-width: 217px;
    }
    
    .circle-tip-bg {
      width: 62px;
      height: 62px;
      border: 11px solid #00CEBA;
      bottom: 49%;
      left: 40%;
      transition: transform 1s ease-out;
      transform: translate(0%,-50%) rotate(170deg) translateX(${props => props.radius + 30}px);
    }

    .circle-tip-ex {
      width: 90px;
      height: 90px;
      border: 18px solid #00CEBA;
      bottom: 49%;
      transition: transform 1s ease-out;
      transform: translate(50%, -50%) rotate(180deg) translateX(calc(${props => props.radiusExtra + 50}px));
    }

    .progress-ring__circle-bg,
    .progress-ring__circle {
      transform: rotate(170deg);
    }
  
    .progress-ring__circle {
      transform: rotate(170deg);
    }

    .progress-ring__circle-ex,
    .progress-ring__circle-extra {
      transform: rotate(150deg);
    }

    .progress-ring__circle-extra {
      transform: rotate(150deg);
    }
  }
`;