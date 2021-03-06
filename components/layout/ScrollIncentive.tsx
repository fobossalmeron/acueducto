import styled, { keyframes } from "styled-components";
import Arrow from "components/shared/Arrow";

const scrollToNext = (e) => {
  e.preventDefault();
  document.getElementById("removeArrow").scrollIntoView({ behavior: "smooth" });
};

const ScrollIncentive = ({ hasLoaded, showArrow }) => (
  <Container reveal={hasLoaded} showArrow={showArrow}>
    <Jumper onClick={scrollToNext} showArrow={showArrow}>
      <Arrow />
    </Jumper>
  </Container>
);

export default ScrollIncentive;

const jumping = keyframes`
  0%{
    transform: translateY(0)rotate(90deg);
    opacity:1;
  }
  20%{
    transform: translateY(0)rotate(90deg);
  }
  40%{
    transform: translateY(-10px)rotate(90deg);
  }
  50%{
    transform: translateY(0)rotate(90deg);
  }
  60%{
    transform: translateY(-5px)rotate(90deg);
  }
  80%{
    transform: translateY(0)rotate(90deg);
  }
  100%{
    transform: translateY(0)rotate(90deg);
    opacity:1;
  }
`;
const Jumper = styled.div<{reveal?:boolean, showArrow:boolean}>`
  animation-name: ${p=>p.reveal ? jumping : "none"};
  transform: translateY(0) rotate(90deg);
  opacity: 0;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-delay: 5s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  pointer-events: ${(props) =>
    props.reveal && props.showArrow ? "auto" : "none"};
  cursor: pointer;
`;

const Container = styled.div<{reveal?:boolean, showArrow:boolean}>`
  bottom: 50%;
  display: flex;
  z-index: 7;
  height: 100%;
  mix-blend-mode: exclusion;
  pointer-events: none;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding-right: 45px;
  padding-bottom: 65px;
  margin: 0px auto;
  max-width: 1500px;
  opacity: ${(props) => (props.reveal && props.showArrow ? 1 : 0)};
  transition: opacity 0.3s ease 1s;
  @media (max-width: 600px) {
    padding-left: 25px;
    justify-content: flex-start;
    padding-bottom: 40px;
  }
`;
