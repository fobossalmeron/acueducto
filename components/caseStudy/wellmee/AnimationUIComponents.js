import Image from "next/legacy/image";
import { Fade } from "react-awesome-reveal";
import UIComponent1a from "public/assets/img/casestudies/wellmee/UIComponent1a.png";
import UIComponent2a from "public/assets/img/casestudies/wellmee/UIComponent2a.png";
import UIComponent3a from "public/assets/img/casestudies/wellmee/UIComponent3a.png";
import styled from "styled-components";

const UIComponentsAnimation = (props) => {
  return (
    <>
      <Desktop>
        <Column style={{ alignItems: 'end' }}>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent1">
            <Image
              src={UIComponent1a}
              alt="Wellmee"
            />
          </Fade>
        </Column>
        <Column style={{ alignItems: 'end' }}>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent4">
            <Image
              src={UIComponent2a}
              alt="Wellmee"
            />
          </Fade>
        </Column>
        <Column>
          <Fade delay={400} direction="up" triggerOnce className="UIComponent8">
            <Image
              src={UIComponent3a}
              alt="Wellmee"
            />
          </Fade>
        </Column>
      </Desktop>
    </>
  )
};

export default UIComponentsAnimation;

const Desktop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1%;
  padding: 6% 6%;
  padding-bottom: 25%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1%;
`;