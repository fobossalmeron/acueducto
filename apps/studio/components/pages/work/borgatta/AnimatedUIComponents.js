import styled from "styled-components";
import UIComponentsDesktop from "./UIComponentsDesktop";
import UIComponentsMobile from "./UIComponentsMobile";

const AnimatedUIComponents = (props) => {
  return (
    <MainContainer>
      {!props.isMobile ? <UIComponentsDesktop /> : <UIComponentsMobile />}
    </MainContainer>
  );
};

export default AnimatedUIComponents;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1.3%;
  padding: 5% 2% 10%;
`;
