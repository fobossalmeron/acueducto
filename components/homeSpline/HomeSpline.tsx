import { useState } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";

const HomeSpline = () => {
  const [show, setShow] = useState(false);

  function onLoad() {
    setShow(true);
  }
  return (
    <SketchContainer show={show}>
      <Spline
        scene="https://prod.spline.design/TkssLUvOfGBXarJ7/scene.splinecode"
        onLoad={onLoad}
      />
    </SketchContainer>
  );
};

export default HomeSpline;

const SketchContainer = styled.div<{ show: boolean }>`
  width: 100%;
  height: 120vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 1500px;
  margin: 0 auto;
  div {
    transition: 1000ms ease all;
    opacity: ${(p) => (p.show ? 1 : 0)};
  }
`;
  