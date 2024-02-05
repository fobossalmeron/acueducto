import { useRef, useEffect } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";

const HomeSketch = ({ hide, mouse, outerRef }) => {
  const splineRef = useRef(null);
  const camera = useRef(null);

  function onLoad(spline) {
    // splineRef.current = spline.canvas;
    console.log(splineRef);

    const camerab = spline.findObjectById(
      "ad104382-25cf-4345-8be0-7ac277f0fdbb"
    );
    camera.current = camerab;
    console.log(camera.current)

    splineRef.current.addEventListener("mouseover", (event) =>{
      console.log("ESTAMOS DENTRO");
    })

    outerRef.current.addEventListener("mousemove", (event) => {
      // camera.current.position.x = 266.975 + event.clientX / 120;
      // camera.current.position.y = 483.55833333333334 + event.clientY / 120;
      // camera.current.position.z = 477.68 + event.clientX / 50 + event.clientY / 50;

      const mouseEvent = new MouseEvent("mouseover", event);
      console.log(mouseEvent);
      splineRef.current.dispatchEvent(mouseEvent);
    });
  }

  return (
    <SketchContainer>
      {hide ? (
        <Background />
      ) : (
        <Spline
          ref={splineRef}
          scene="https://prod.spline.design/2Y15wHRqmU79kFlR/scene.splinecode"
          onLoad={onLoad}
        />
      )}
    </SketchContainer>
  );
};

export default HomeSketch;

const SketchContainer = styled.div`
  width: 100%;
  height: 120vh;
  position: fixed;
  z-index: 0;
  /* pointer-events: none; */
  &:before {
    content: " ";
    height: 100vh;
    width: 18px;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.background};
    position: fixed;
    z-index: 100;
    opacity: 0;
  }
  &:after {
    content: " ";
    height: 100vh;
    width: 18px;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.background};
    position: fixed;
    z-index: 100;
    opacity: 0;
  }
  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -20px;
    bottom: -30px;
    /* pointer-events: none; */
    overflow: hidden;
  }
  @media (max-width: 600px) {
    overflow: hidden;
    &:before,
    &:after {
      opacity: 1;
    }
  }
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  background-image: url("/assets/img/layout/fond.jpg");
  background-size: cover;
`;
