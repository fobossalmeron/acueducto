import { Fade } from "react-awesome-reveal";
import Picture from "components/caseStudy/shared/Picture";
import styled from "styled-components";

const AnimatedSliceCards = (props) => {
  return (
    <PicturesContainer>
      {props?.t.solutions.map((solution, i) => (
        <Fade delay={300} triggerOnce key={`solution${i}`}>
          <SlideCards>
            <span>
              <h4>{solution.title}</h4>
              <p>{solution.p}</p>
            </span>
            <Picture
              src={`/assets/img/casestudies/wellmee/CardMobile${i + 1}.png`}
              alt="Combinator"
              width={161}
              height= {349}
            />
          </SlideCards>
        </Fade>
      ))}
    </PicturesContainer>
  );
};

export default AnimatedSliceCards;

const PicturesContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 48px 20px 0px 20px;
  position: relative;
  max-width: 700px;
  overflow: visible;
  gap: 32px;

  @media (max-width: 830px) {
    max-width: 300px;
    padding: 20px 0px 0px 0px;
  }
`;

const SlideCards = styled.div`
  background-color: #686A97;
  width: 700px;
  height: 499px;
  border-radius: 24px;
  display: flex;
  padding: 75px 97px 75px 97px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 34px;

  h4 {
    font-weight: 500;
    font-size: 22px;
  }
  p {
    font-size: 16.5px;
    width: 280px;
    padding-top: 24px;
    color: rgba(255, 255, 255, 0.80);
  }

  @media (max-width: 830px) {
    flex-direction: column;
    width: 300px;
    height: 597px;
    padding: 28px 24px 72px 24px;
    gap: 0px;

    h4 {
      font-size: 1.8rem;
    }
    p {
      width: 251px;
    }
    span {
      padding-bottom: 32px;
    }
  }
`;