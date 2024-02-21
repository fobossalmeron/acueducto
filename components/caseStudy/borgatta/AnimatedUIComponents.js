import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import UIComponentsDesktop from "./UIComponentsDesktop";
import UIComponentsMobile from "./UIComponentsMobile";

const AnimatedUIComponents= (props) => {
  return (
    <MainContainer>
      {!props.isMobile 
        ? <UIComponentsDesktop />
        : <UIComponentsMobile />
      }
    </MainContainer>
  )
};
  
export default AnimatedUIComponents;

const MainContainer = styled.div`
  display: flex;
  gap: 1.3%;
  padding: 5% 2% 10% 2%;
  width: 100%;
  justify-content: center;
`;
