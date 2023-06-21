import styled from "styled-components";
import CommonSection from "components/caseStudy/shared/CommonSection";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import UIComponent1 from "public/assets/img/casestudies/borgatta/UIComponent1.png";
import UIComponent2 from "public/assets/img/casestudies/borgatta/UIComponent2.png";
import UIComponent3 from "public/assets/img/casestudies/borgatta/UIComponent3.png";
import UIComponent4 from "public/assets/img/casestudies/borgatta/UIComponent4.png";
import UIComponent5 from "public/assets/img/casestudies/borgatta/UIComponent5.png";
import UIComponent6 from "public/assets/img/casestudies/borgatta/UIComponent6.png";
import UIComponent7 from "public/assets/img/casestudies/borgatta/UIComponent7.png";
import UIComponent8 from "public/assets/img/casestudies/borgatta/UIComponent8.png";
import UIComponent9 from "public/assets/img/casestudies/borgatta/UIComponent9.png";
import UIComponent10 from "public/assets/img/casestudies/borgatta/UIComponent10.png";
import UIComponent11 from "public/assets/img/casestudies/borgatta/UIComponent11.png";
import UIComponent12 from "public/assets/img/casestudies/borgatta/UIComponent12.png";
import UIComponent13 from "public/assets/img/casestudies/borgatta/UIComponent13.png";
import UIComponent14 from "public/assets/img/casestudies/borgatta/UIComponent14.png";
import UIComponent15 from "public/assets/img/casestudies/borgatta/UIComponent15.png";
import UIComponent16 from "public/assets/img/casestudies/borgatta/UIComponent16.png";
import UIComponent17 from "public/assets/img/casestudies/borgatta/UIComponent17.png";

const AnimatedUIComponents= () => {
  return (
    <LandSection>
      <MainContainer>
        <FirstComponentsContainer>
          <FirstRow>
            <Slide delay={700} direction="up" triggerOnce>
              <Image
                src={UIComponent1}
                alt="Web B360"
              />
            </Slide>
            <Slide delay={700} direction="up" triggerOnce>
              <Image
                src={UIComponent2}
                alt="Web B360"
              />
            </Slide>
          </FirstRow>
          <SecondRow>
            <>
              <Slide delay={700} direction="up" triggerOnce>
                <Image
                  src={UIComponent3}
                  alt="Web B360"
                />
              </Slide>
            </>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Slide delay={700} direction="up" triggerOnce>
                <Image
                  src={UIComponent4}
                  alt="Web B360"
                />
              </Slide>
              <Slide delay={700} direction="up" triggerOnce>
                <Image
                  src={UIComponent5}
                  alt="Web B360"
                />
              </Slide>
            </div>
          </SecondRow>
        </FirstComponentsContainer>
        <SecondComponentsContainer>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Image
                src={UIComponent6}
                alt="Web B360"
              />
              <Image
                src={UIComponent7}
                alt="Web B360"
              />
              <Image
                src={UIComponent8}
                alt="Web B360"
              />
            </div>
            <div>
              <Image
                src={UIComponent9}
                alt="Web B360"
              />
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  src={UIComponent10}
                  alt="Web B360"
                />
                <Image
                  src={UIComponent11}
                  alt="Web B360"
                />
                <Image
                  src={UIComponent12}
                  alt="Web B360"
                />
                <Image
                  src={UIComponent13}
                  alt="Web B360"
                />
              </div>
              <Image
                src={UIComponent14}
                alt="Web B360"
              />
            </div>
          </div>
          <Image
            src={UIComponent15}
            alt="Web B360"
          />
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Image
              src={UIComponent16}
              alt="Web B360"
            />
            <Image
              src={UIComponent17}
              alt="Web B360"
            />
          </div>
        </SecondComponentsContainer>
      </MainContainer>
    </LandSection>
  )
};
  
export default AnimatedUIComponents;

const SecondRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 3.5%;
`;

const FirstRow = styled.div`
  width: 100%;
  display: flex;
  gap: 3.5%;
`;

const SecondComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstComponentsContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 3.5%;
`;

const MainContainer = styled.span`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2%;
  min-height: 52vh;
`;

const LandSection = styled(CommonSection)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;