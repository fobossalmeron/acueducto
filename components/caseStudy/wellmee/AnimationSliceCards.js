import { Fade } from "react-awesome-reveal";
import Picture from "components/caseStudy/shared/Picture";
import styled from "styled-components";
import { useEffect } from "react";

const AnimatedSliceCards = (props) => {

  useEffect(() => {
    const slider = document.querySelector(".carrousel")
    const arrowIcons = document.querySelectorAll(".slider i");
    const firstImg = slider.querySelectorAll("div")[0];

    const firstImgWidth = firstImg.clientWidth + 14;

    arrowIcons.forEach(icon => {
      icon.addEventListener("click", () => {
        slider.scrollLeft += ( icon.id == "left" ? -firstImgWidth : firstImgWidth );
        console.log( firstImgWidth ,'que pasa')
        console.log( firstImg ,'que pasa 2')
        console.log( slider.scrollLeft ,'que pasa 3')
      })
    });
  }, []);

  return (
    <SliceContainer className="slider">
      <i id="left">
        <Pin />
      </i>
      <PicturesContainer className="carrousel">
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
      <i id="right">
        <Pin />
      </i>
    </SliceContainer>
  );
};

export default AnimatedSliceCards;

const Pin = styled.span`
  width: 30px;
  height: 30px;
  pointer-events: none;
  display: inline-block;
  border-radius: 100%;
  transition: 0.3s ease all;
  &::after {
    content: " ";
    border: solid #383955;
    border-width: 0 2.5px 2.5px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(-45deg) translateY(2px);
    margin-left: 4px;
    transition: 0.3s ease all;
  }
`;

const SliceContainer = styled.div`
  position: relative;
  padding: 48px 20px 0px 20px;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    width: 48px;
    height: 48px;
    background-color: #FCFDFC;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0.9028px 0.9028px 9.93084px 0px rgba(64, 64, 64, 0.05), 0.9028px 0.9028px 9.93084px 0px rgba(64, 64, 64, 0.05), 0.9028px 0.9028px 9.93084px 0px rgba(64, 64, 64, 0.05);
  }
  
  i:first-child {
    right: -0.5%;
    z-index: 1;
  }

  i:last-child {
    left: -0.5%;
    span {
      text-align: center;
      &::after {
        margin-left: 6px;
        margin-top: 10px;
        transform: rotate(135deg) translateY(2px);
      }
    }
  }
  @media (max-width: 630px) {
    padding: 0px 20px;
  }
`;

const PicturesContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
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
      font-size: 1.9rem;
    }
    p {
      font-size: 1.5rem;
      width: 251px;
      padding-top: 12px;
    }
    span {
      padding-bottom: 32px;
    }
  }
`;