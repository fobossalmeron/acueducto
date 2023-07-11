import styled from "styled-components";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import UIComponent1 from "public/assets/img/casestudies/borgatta/UIComponent1.png";
import UIComponent2 from "public/assets/img/casestudies/borgatta/UIComponent2.png";
import UIComponent3 from "public/assets/img/casestudies/borgatta/UIComponent3.png";
import UIComponent4 from "public/assets/img/casestudies/borgatta/UIComponent4.png";
import UIComponent6 from "public/assets/img/casestudies/borgatta/UIComponent6.png";
import UIComponent8 from "public/assets/img/casestudies/borgatta/UIComponent8.png";
import UIComponent9 from "public/assets/img/casestudies/borgatta/UIComponent9.png";
import UIComponent10 from "public/assets/img/casestudies/borgatta/UIComponent10.png";
import UIComponent11 from "public/assets/img/casestudies/borgatta/UIComponent11.png";
import UIComponent12 from "public/assets/img/casestudies/borgatta/UIComponent12.png";
import UIComponent14 from "public/assets/img/casestudies/borgatta/UIComponent14.png";
import UIComponent16 from "public/assets/img/casestudies/borgatta/UIComponent16.png";
import UIComponent17 from "public/assets/img/casestudies/borgatta/UIComponent17.png";
import UIComponent18 from "public/assets/img/casestudies/borgatta/UIComponent18.png";
import UIComponent20 from "public/assets/img/casestudies/borgatta/UIComponent20.png";
import UIComponent21 from "public/assets/img/casestudies/borgatta/UIComponent21.png";

const UIComponentsMobile= () => {
    return (
      <ColumnMobile gap='4px' style={{ paddingTop: '16%' }}>
        <FirstComponentsContainerMobile>
          <FirstRowMobile>
            <ColumnMobile gap='4px'>
              <Fade delay={210} direction="up" triggerOnce>
                <Image
                  src={UIComponent1}
                  alt="Web B360"
                  width={133}
                  height={203}
                />
              </Fade>
              <Fade delay={210} direction="up" triggerOnce>
                <Image
                  src={UIComponent2}
                  alt="Web B360"
                  width={130}
                  height={187}
                />
              </Fade>
            </ColumnMobile>
            <ColumnMobile gap='5px' style={{alignItems: "flex-start", justifyContent: "flex-end" }}>
              <Fade delay={210} direction="up" triggerOnce>
                <Image
                  src={UIComponent10}
                  alt="Web B360"
                  width={53}
                  height={55}
                />
              </Fade>
              <RowMobile gap='10px'>
                <Fade delay={210} direction="up" triggerOnce>
                  <Image
                    src={UIComponent11}
                    alt="Web B360"
                    width={53}
                    height={53}
                  />
                </Fade>
                <Fade delay={210} direction="up" triggerOnce>
                  <Image
                    src={UIComponent12}
                    alt="Web B360"
                    width={53}
                    height={55}
                  />
                </Fade>
              </RowMobile>
              <Fade delay={210} direction="up" triggerOnce>
                <Image
                  src={UIComponent9}
                  alt="Web B360"
                  width={161}
                  height={26}
                />
              </Fade>
              <Fade delay={210} direction="up" triggerOnce>
                <Image
                  src={UIComponent14}
                  alt="Web B360"
                  width={194}
                  height={184}
                />
              </Fade>
            </ColumnMobile>
          </FirstRowMobile>
        </FirstComponentsContainerMobile>
        <SecondComponentsContainerMobile>
          <RowMobile gap='8px' style={{ alignItems: "flex-start", justifyContent: "flex-end" }}>
            <Fade delay={210} direction="up" triggerOnce>
              <Image
                src={UIComponent4}
                alt="Web B360"
                width={150}
                height={151}
              />
            </Fade>
            <ColumnMobile gap='3px'>
              <Fade delay={210} direction="up" triggerOnce>
                <Image
                  src={UIComponent6}
                  alt="Web B360"
                  width={174}
                  height={110}
                />
              </Fade>
              <Fade delay={210} direction="up" triggerOnce>
                <Image
                  src={UIComponent8}
                  alt="Web B360"
                  width={174}
                  height={137}
                />
              </Fade>
            </ColumnMobile>
          </RowMobile>
          <RowMobile gap='5px' style={{ alignItems: "flex-start", justifyContent: "space-around" }}>
            <ColumnMobile style={{ marginTop: '-33%' }}>
              <Fade delay={210} direction="up" triggerOnce>
                <Image
                  src={UIComponent3}
                  alt="Web B360"
                  width={136}
                  height={197}
                />
              </Fade>
            </ColumnMobile>
            <RowMobile gap='5px' style={{marginTop:'-5px'}}>
              <ColumnMobile style={{ justifyContent: "flex-start", marginTop:'-3px' }}>
                <Fade delay={210} direction="up" triggerOnce>
                  <Image
                    src={UIComponent16}
                    alt="Web B360"
                    width={77}
                    height={50}
                  />
                </Fade>
                <Fade delay={210} direction="up" triggerOnce>
                  <Image
                    src={UIComponent17}
                    alt="Web B360"
                    width={77}
                    height={50}
                  />
                </Fade>
                <Fade delay={210} direction="up" triggerOnce>
                  <Image
                    src={UIComponent18}
                    alt="Web B360"
                    width={77}
                    height={50}
                  />
                </Fade>
              </ColumnMobile>
              <ColumnMobile gap='5px'>
                <Fade delay={210} direction="up" triggerOnce>
                  <Image
                    src={UIComponent21}
                    alt="Web B360"
                    width={100}
                    height={122}
                  />
                </Fade>
                <Fade delay={210} direction="up" triggerOnce>
                  <Image
                    src={UIComponent20}
                    alt="Web B360"
                    width={96}
                    height={87}
                  />
                </Fade>
              </ColumnMobile>
            </RowMobile>
          </RowMobile>
        </SecondComponentsContainerMobile>
      </ColumnMobile>
    );
};

export default UIComponentsMobile;

const RowMobile = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${(props) => props.gap ? props.gap : '0px'};
`;

const ColumnMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap ? props.gap : '0px'};
`;

const SecondComponentsContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FirstRowMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 3.5%;
`;

const FirstComponentsContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
`;