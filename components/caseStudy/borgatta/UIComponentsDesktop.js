import styled from "styled-components";
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
import UIComponent18 from "public/assets/img/casestudies/borgatta/UIComponent18.png";
import UIComponent19 from "public/assets/img/casestudies/borgatta/UIComponent19.png";
import UIComponent20 from "public/assets/img/casestudies/borgatta/UIComponent20.png";
import UIComponent21 from "public/assets/img/casestudies/borgatta/UIComponent21.png";

const UIComponentsDesktop= () => {
  return (
    <>
      <FirstComponentsContainer>
        <FirstRow>
          <Slide delay={300} direction="up" triggerOnce>
            <Image
              src={UIComponent1}
              alt="Web B360"
              width={255}
              height={379}
            />
          </Slide>
          <Slide delay={400} direction="up" triggerOnce>
            <Image
              src={UIComponent2}
              alt="Web B360"
              width={240}
              height={348}
            />
          </Slide>
        </FirstRow>
        <SecondRow>
          <>
            <Slide delay={350} direction="up" triggerOnce>
              <Image
                src={UIComponent3}
                alt="Web B360"
                width={249}
                height={362}
              />
            </Slide>
          </>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: "flex-end", gap: "10px"}}>
            <Slide delay={450} direction="up" triggerOnce>
              <Image
                src={UIComponent4}
                alt="Web B360"
                width={283}
                height={259}
              />
            </Slide>
            <Slide delay={320} direction="up" triggerOnce>
              <Image
                src={UIComponent5}
                alt="Web B360"
                width={249}
                height={359}
              />
            </Slide>
          </div>
        </SecondRow>
      </FirstComponentsContainer>
      <SecondComponentsContainer>
        <div style={{display: 'flex', flexDirection: 'row', gap: "2%"}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: "24px"}}>
            <Image
              src={UIComponent6}
              alt="Web B360"
              width={319}
              height={202}
            />
            <Image
              src={UIComponent7}
              alt="Web B360"
              width={319}
              height={336}
            />
            <Image
              src={UIComponent8}
              alt="Web B360"
              width={319}
              height={252}
            />
          </div>
          <div style={{gap: "24px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
            <Image
              src={UIComponent9}
              alt="Web B360"
              width={296}
              height={47}
            />
            <div style={{display: 'flex', flexDirection: 'row', gap: "24px"}}>
              <Image
                src={UIComponent10}
                alt="Web B360"
                width={97}
                height={97}
              />
              <Image
                src={UIComponent11}
                alt="Web B360"
                width={97}
                height={104}
              />
              <Image
                src={UIComponent12}
                alt="Web B360"
                width={97}
                height={104}
              />
              <Image
                src={UIComponent13}
                alt="Web B360"
                width={97}
                height={104}
              />
            </div>
            <Image
              src={UIComponent14}
              alt="Web B360"
              width={381}
              height={348}
            />
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "row", gap: "24px"}}>
          <Image
            src={UIComponent15}
            alt="Web B360"
            width={129}
            height={83.5}
          />
          <Image
            src={UIComponent16}
            alt="Web B360"
            width={129}
            height={83.5}
            />
          <Image
            src={UIComponent17}
            alt="Web B360"
            width={129}
            height={83.5}
          />
          <Image
            src={UIComponent18}
            alt="Web B360"
            width={129}
            height={83.5}
          />
          <Image
            src={UIComponent19}
            alt="Web B360"
            width={129}
            height={83.5}
          />
        </div>
        <div style={{display: 'flex', justifyContent:"flex-end", alignItems: "flex-start", gap: "24px", width: "100%"}}>
          <Image
            src={UIComponent20}
            alt="Web B360"
            width={167}
            height={151}
          />
          <Image
            src={UIComponent21}
            alt="Web B360"
            width={185}
            height={203}
          />
        </div>
      </SecondComponentsContainer>
    </>
  );
};
  
export default UIComponentsDesktop;

const SecondRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 3.5%;
`;

const FirstRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 3.5%;
`;

const SecondComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  top: 20%;
`;

const FirstComponentsContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 1%;
`;