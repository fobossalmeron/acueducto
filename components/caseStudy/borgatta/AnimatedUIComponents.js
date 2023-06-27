import styled from "styled-components";
import CommonSection from "components/caseStudy/shared/CommonSection";
import { useState } from "react";
import { useEffect } from "react";
import UIComponentsDesktop from "./UIComponentsDesktop";
import UIComponentsMobile from "./UIComponentsMobile";

const AnimatedUIComponents= () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    window.addEventListener("resize", function(){
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

  }, [isMobile]);

  return (
    <MainContainer>
      {!isMobile 
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
  padding: 0 2% 25% 2%;
`;
