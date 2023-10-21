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
  width: 100%;
  height: 100%;
  min-height: 12%;
  margin-top: 6%;
  gap: 5%;

  .firstCard, .secondCard, .thirdCard, .fourthCard {
    display: flex;
    justify-content: center;
  }

  .firstCard {
    position: absolute;
    top: 0%;
  }
  .secondCard {
    position: absolute;
    left: 25%;
  }
  .thirdCard {
    position: absolute;
    right: 25%;
    top: 23%;
  }
  .fourthCard {
    position: absolute;
    bottom: 0%;
  }

  .image {
    width: 100%;
    max-width: 340px;
    .img {
      box-shadow: 1px 1px 11px 0px rgba(64, 64, 64, 0.05), 0px 0px 32px 0px rgba(95, 95, 131, 0.05);
      border-radius: 10px;
    }
  }
`;