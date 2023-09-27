import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Picture from "components/caseStudy/shared/Picture";
import FirstCard from "../../../public/assets/img/casestudies/wellmee/FirstCard.png";
import SecondCard from "../../../public/assets/img/casestudies/wellmee/SecondCard.png";
import ThirdCard from "../../../public/assets/img/casestudies/wellmee/ThirdCard.png";
import FourthCard from "../../../public/assets/img/casestudies/wellmee/FourthCard.png";

const AnimatedDataCards = () => {
  return (
    <CasesContainer>
      <Fade delay={300} triggerOnce className="firstCard">
        <Picture
          src={FirstCard}
          alt="Hoja de dato"
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce className="secondCard">
        <Picture
          src={SecondCard}
          alt="Hoja de dato"
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce className="thirdCard">
        <Picture
          src={ThirdCard}
          alt="Hoja de dato"
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce className="fourthCard">
        <Picture
          src={FourthCard}
          alt="Hoja de dato"
          withWrapper
        />
      </Fade>
    </CasesContainer>
  );
};

export default AnimatedDataCards;

const CasesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // background-color: blue;
  width: 100%;
  height: 100%;
  min-height: 22%;

  .firstCard {
    position: absolute;
    top: 5%;
    j
  }
  .secondCard {
    position: absolute;
    left: 10%;
  }
  .thirdCard {
    position: absolute;
    left: -3%;
  }
  .fourthCard {
    position: absolute;
    top: -1%;
  }

  .image {
    width: 58%;
  }
`;