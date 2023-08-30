import styled from "styled-components";
import { useState } from "react";
import UIComponent1 from "public/assets/img/casestudies/recupera/UIComponent1.png";
import UIComponent2 from "public/assets/img/casestudies/recupera/UIComponent2.png";
import UIComponent3 from "public/assets/img/casestudies/recupera/UIComponent3.png";
import UIComponent4 from "public/assets/img/casestudies/recupera/UIComponent4.png";
import UIComponent5 from "public/assets/img/casestudies/recupera/UIComponent5.png";
import UIComponent6 from "public/assets/img/casestudies/recupera/UIComponent6.png";
import UIComponent7 from "public/assets/img/casestudies/recupera/UIComponent7.png";
import UIComponent8 from "public/assets/img/casestudies/recupera/UIComponent8.png";
import UIComponent9 from "public/assets/img/casestudies/recupera/UIComponent9.png";
import UIComponent10 from "public/assets/img/casestudies/recupera/UIComponent10.png";
import UIComponent11 from "public/assets/img/casestudies/recupera/UIComponent11.png";
import UIComponent12 from "public/assets/img/casestudies/recupera/UIComponent12.png";
import UIComponent13 from "public/assets/img/casestudies/recupera/UIComponent13.png";
import UIComponent14 from "public/assets/img/casestudies/recupera/UIComponent14.png";
import UIComponent15 from "public/assets/img/casestudies/recupera/UIComponent15.png";
import UIComponent16 from "public/assets/img/casestudies/recupera/UIComponent16.png";
import UIComponent17 from "public/assets/img/casestudies/recupera/UIComponent17.png";
import UIComponent18 from "public/assets/img/casestudies/recupera/UIComponent18.png";
import { Fade } from "react-awesome-reveal";
import Image from "next/legacy/image";

const UIComponentsAnimation = (props) => {

  return (
    <>
    {!props.isMobile ?
      <Desktop>
        <Row style={{ alignItems: 'end' }}>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent1">
            <Image
              src={UIComponent1}
              alt="Recupera"
            />
          </Fade>
          <Fade delay={420} direction="up" triggerOnce className="UIComponent2">
            <Image
              src={UIComponent2}
              alt="Recupera"
            />
          </Fade>
          <Fade delay={420} direction="up" triggerOnce className="UIComponent3">
            <Image
              src={UIComponent3}
              alt="Recupera"
            />
          </Fade>
        </Row>
        <Row style={{ alignItems: 'end' }}>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent4">
            <Image
              src={UIComponent4}
              alt="Recupera"
            />
          </Fade>
          <Column style={{ gap: '2%', justifyContent: 'space-around', height: '100%' }}>
            <Fade delay={400} direction="up" triggerOnce className="UIComponent5">
              <Image
                src={UIComponent5}
                alt="Recupera"
              />
            </Fade>
            <Fade delay={400} direction="up" triggerOnce className="UIComponent6">
              <Image
                src={UIComponent6}
                alt="Recupera"
              />
            </Fade>
          </Column>
          <Fade delay={420} direction="up" triggerOnce className="UIComponent7">
            <Image
              src={UIComponent7}
              alt="Recupera"
            />
          </Fade>
        </Row>
        <Row>
          <Column style={{ gap: '1.2rem', alignItems: 'end' }}>
            <Fade delay={400} direction="up" triggerOnce className="UIComponent8">
              <Image
                src={UIComponent8}
                alt="Recupera"
              />
            </Fade>
            <Fade delay={420} direction="up" triggerOnce className="UIComponent9">
              <Image
                src={UIComponent9}
                alt="Recupera"
              />
            </Fade>
            <Fade delay={420} direction="up" triggerOnce className="UIComponent10">
              <Image
                src={UIComponent10}
                alt="Recupera"
              />
            </Fade>
            <Fade delay={400} direction="up" triggerOnce className="UIComponent11">
              <Image
                src={UIComponent11}
                alt="Recupera"
              />
            </Fade>
          </Column>
          <Column style={{ gap: '2%' }}>
            <Fade delay={400} direction="up" triggerOnce className="UIComponent12">
              <Image
                src={UIComponent12}
                alt="Recupera"
              />
            </Fade>
            <Fade delay={400} direction="up" triggerOnce className="UIComponent13">
              <Image
                src={UIComponent13}
                alt="Recupera"
              />
            </Fade>
          </Column>
          <Column style={{ gap: '2%' }}>
            <Fade delay={420} direction="up" triggerOnce className="UIComponent14">
              <Image
                src={UIComponent14}
                alt="Recupera"
              />
            </Fade>
            <Fade delay={400} direction="up" triggerOnce className="UIComponent15">
              <Image
                src={UIComponent15}
                alt="Recupera"
              />
            </Fade>
          </Column>
        </Row>
      </Desktop>
    : 
      <Mobile>  
        <Row style={{ alignItems: 'end' }}>
          <Fade delay={420} direction="up" triggerOnce className="UIComponent2">
            <Image
              src={UIComponent2}
              alt="Recupera"
            />
          </Fade>
          <Column style={{ gap: '2%', alignItems: 'start', justifyContent: 'end' }}>
            <Fade delay={420} direction="up" triggerOnce className="UIComponent15">
              <Image
                src={UIComponent15}
                alt="Recupera"
              />
            </Fade>
            <Fade delay={420} direction="up" triggerOnce className="UIComponent1">
              <Image
                src={UIComponent1}
                alt="Recupera"
              />
            </Fade>
          </Column>
        </Row>
        <Row style={{ alignItems: 'end' }}>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent3">
            <Image
              src={UIComponent3}
              alt="Recupera"
            />
          </Fade>
          <Fade delay={420} direction="up" triggerOnce className="UIComponent14">
            <Image
              src={UIComponent14}
              alt="Recupera"
            />
          </Fade>
        </Row>
        <Row>
          <Fade delay={420} direction="up" triggerOnce className="UIComponent11">
            <Image
              src={UIComponent11}
              alt="Recupera"
            />
          </Fade>
          <Fade delay={420} direction="up" triggerOnce className="UIComponent12">
            <Image
              src={UIComponent12}
              alt="Recupera"
            />
          </Fade>
        </Row>
        <Row>
          <Fade delay={420} direction="up" triggerOnce className="UIComponent7">
            <Image
              src={UIComponent7}
              alt="Recupera"
            />
          </Fade>
          <Column style={{ gap: '2%', justifyContent: 'center'}}>
            <Fade delay={420} direction="up" triggerOnce className="UIComponent16">
              <Image
                src={UIComponent16}
                alt="Recupera"
              />
            </Fade>
            <Fade delay={420} direction="up" triggerOnce className="UIComponent17">
              <Image
                src={UIComponent17}
                alt="Recupera"
              />
            </Fade>
            <Fade delay={420} direction="up" triggerOnce className="UIComponent18">
              <Image
                src={UIComponent18}
                alt="Recupera"
              />
            </Fade>
          </Column>
          <Fade delay={420} direction="up" triggerOnce className="UIComponent4">
            <Image
              src={UIComponent4}
              alt="Recupera"
            />
          </Fade>
        </Row>
      </Mobile>
    }
    </>
  )
};

export default UIComponentsAnimation;

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
  padding: 8% 6%;

  .UIComponent1 {
    width: 25.2%;
    max-width: 252px;
  }
  .UIComponent2 {
    width: 25.4%;
    max-width: 255px;
  }
  .UIComponent3 {
    width: 24.4%;
    max-width: 242px;
  }
  .UIComponent4 {
    width: 26.7%;
    max-width: 264px;
  }
  .UIComponent5, .UIComponent6 {
    width: 100%;
    max-width: 350px;
  }
  .UIComponent7 {
    width: 21.8%;
    max-width: 216px;
  }
  .UIComponent8, .UIComponent9, .UIComponent10 {
    width: 100%;
    max-width: 343px;
  }
  .UIComponent11 {
    width: 90.5%;
    max-width: 298px;
  }
  .UIComponent12 {
    width: 100%;
    max-width: 330px;
  }
  .UIComponent13 {
    width: 93.5%;
    max-width: 296px;
  }
  .UIComponent14 {
    width: 100%;
    max-width: 319px;
  }
  .UIComponent15 {
    width: 67.3%;
    max-width: 206px;
  }

  @media (max-width: 1000px) {
    .UIComponent1 {
      max-width: 183px;
    }
    .UIComponent2 {
      width: 80%;
      max-width: 184px;
    }
    .UIComponent3 {
      max-width: 175px;
    }
    .UIComponent4 {
      max-width: 191px;
    }
    .UIComponent5, .UIComponent6 {
      max-width: 254px;
    }
    .UIComponent7 {
      max-width: 157px;
    }
    .UIComponent8, .UIComponent9, .UIComponent10 {
      max-width: 248px;
    }
    .UIComponent11 {
      max-width: 215px;
    }
    .UIComponent12 {
      max-width: 239px;
    }
    .UIComponent13 {
      max-width: 214px;
    }
    .UIComponent14 {
      max-width: 231px;
    }
    .UIComponent15 {
      max-width: 149px;
    }
  }
`;

const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2%;
  padding: 8% 6%;

  .UIComponent1 {
    max-width: 115px;
  }
  .UIComponent2 {
    max-width: 126px;
  }
  .UIComponent3 {
    max-width: 112px;
  }
  .UIComponent4 {
    max-width: 86px;
  }
  .UIComponent7 {
    max-width: 84px;
  }
  .UIComponent11 {
    max-width: 144px;
  }
  .UIComponent12 {
    max-width: 124px;
  }
  .UIComponent14 {
    max-width: 163px;
  }
  .UIComponent15 {
    max-width: 78px;
  }
  .UIComponent16, .UIComponent17, .UIComponent18 {
    max-width: 87px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;