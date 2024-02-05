import { useRef } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";

const HomeSketch = () => {
  function onLoad(spline){
    //acá deberíamos mostrar el Canvas
  }
  return (
    <SketchContainer>
      <Spline
        scene="https://prod.spline.design/2Y15wHRqmU79kFlR/scene.splinecode"
        onLoad={onLoad}
      />
    </SketchContainer>
  );
};

export default HomeSketch;

const SketchContainer = styled.div`
  width: 100%;
  height: 120vh;
  position: fixed;
`;