import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

const Functionalities = (props) => {

  return (
    <FunctionalitiesBackground>
      {!props.isMobile ? (
        <FunctionalitiesContainer>
          <FunctionalitiesRow>
            <Fade delay={300} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[0].p}</p>
              </Functionality>
            </Fade>
            <Fade delay={310} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[1].p}</p>
              </Functionality>
            </Fade>
          </FunctionalitiesRow>
          <FunctionalitiesRow>
            <Fade delay={320} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[2].p}</p>
              </Functionality>
            </Fade>
            <Fade delay={330} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[3].p}</p>
              </Functionality>
            </Fade>
          </FunctionalitiesRow>
          <FunctionalitiesRow>
            <Fade delay={340} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[4].p}</p>
              </Functionality>
            </Fade>
            <Fade delay={350} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[5].p}</p>
              </Functionality>
            </Fade>
          </FunctionalitiesRow>
          <FunctionalitiesRow>
            <Fade delay={360} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[6].p}</p>
              </Functionality>
            </Fade>
            <Fade delay={370} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[7].p}</p>
              </Functionality>
            </Fade>
          </FunctionalitiesRow>
          <FunctionalitiesRow>
            <Fade delay={380} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[8].p}</p>
              </Functionality>
            </Fade>
            <Fade delay={390} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[9].p}</p>
              </Functionality>
            </Fade>
          </FunctionalitiesRow>
        </FunctionalitiesContainer>
      ) : (
        <FunctionalitiesContainer>
          <Fade delay={300} triggerOnce>
            <Functionality>
              <p>{props.t.functionalities[0].p}</p>
            </Functionality>
          </Fade>
          <FunctionalitiesRow>
            <Fade delay={310} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[1].p}</p>
              </Functionality>
            </Fade>
            <Fade delay={320} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[2].p}</p>
              </Functionality>
            </Fade>
          </FunctionalitiesRow>
          <Fade delay={330} triggerOnce>
            <Functionality>
              <p>{props.t.functionalities[3].p}</p>
            </Functionality>
          </Fade>
          <Fade delay={340} triggerOnce>
            <Functionality>
              <p>{props.t.functionalities[4].p}</p>
            </Functionality>
          </Fade>
          <Fade delay={350} triggerOnce>
            <Functionality>
              <p>{props.t.functionalities[5].p}</p>
            </Functionality>
          </Fade>
          <FunctionalitiesRow>
            <Fade delay={360} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[6].p}</p>
              </Functionality>
            </Fade>
            <Fade delay={370} triggerOnce>
              <Functionality>
                <p>{props.t.functionalities[7].p}</p>
              </Functionality>
            </Fade>
          </FunctionalitiesRow>
          <Fade delay={380} triggerOnce>
            <Functionality>
              <p>{props.t.functionalities[8].p}</p>
            </Functionality>
          </Fade>
          <Fade delay={390} triggerOnce>
            <Functionality>
              <p>{props.t.functionalities[9].p}</p>
            </Functionality>
          </Fade>
        </FunctionalitiesContainer>
      )}
    </FunctionalitiesBackground>
    );
  };
  
  export default Functionalities;

  const FunctionalitiesBackground = styled.div`
  background-image: url("/assets/img/casestudies/recupera/backgroundFunctionality.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 6%;
`;

const FunctionalitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  color: #4F4F4F;
  font-size: 2.8rem;
  padding: 60px;    
  align-items: center;
  @media (max-width: 1110px) {
    gap: 28px;
    padding: 40px;  
  }
  @media (max-width: 600px) {
    gap: 10px;
    padding: 10px;  
  }
`;

const FunctionalitiesRow = styled.div`
  display: flex;
  flexDirection: row;
  gap: 35px;
  justify-content: center;
  @media (max-width: 1110px) {
    gap: 28px;
  }
  @media (max-width: 600px) {
    gap: 10px;
  }
`;

const Functionality = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  border-radius: 21.2px;
  background-color: #FFFFFF;
  padding: 21.17px;
  box-shadow: 0px 33.351463317871094px 50.027191162109375px 0px rgba(40, 3, 109, 0.12);
  text-align: center;

  @media (max-width: 1110px) {
    padding: 17px;
    font-size: 2.3rem;
  }
  @media (max-width: 940px) {
    border-radius: 17px;
    padding: 10px;
    font-size: 1.8rem;
  }
  @media (max-width: 680px) {
    padding: 6px;
    border-radius: 8px;
    p {
      font-size: 1.4rem;
    }
  }
`;