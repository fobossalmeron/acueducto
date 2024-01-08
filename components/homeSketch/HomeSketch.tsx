/* eslint-disable react/display-name */
import styled from "styled-components";
import React, { useRef } from "react";
import {
  Canvas,
  useThree,
  useFrame,
  extend,
  ReactThreeFiber,
} from "@react-three/fiber";
import ShapeShiftShader from "./ShapeShiftShader";
import { EffectComposer, ShaderPass } from "three/examples/jsm/Addons";

extend({ EffectComposer, ShaderPass });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      effectComposer: ReactThreeFiber.Object3DNode<
        EffectComposer,
        typeof EffectComposer
      >;
      shaderPass: ReactThreeFiber.Object3DNode<ShaderPass, typeof ShaderPass>;
    }
  }
}

const Effects = React.memo(
  ({ mouse }: { mouse: React.MutableRefObject<number[]> }) => {
    const { gl, size } = useThree();
    const composer = useRef<EffectComposer>();
    const shader = useRef<ShaderPass>();
    const easing = 0.05;
    const actualMouse = useRef([0, 0]);

    useFrame(() => {
      if (composer && composer.current && shader && shader.current) {
        composer.current.clock.start();
        composer.current.render();
      }

      if (shader && shader.current) {
        shader.current.uniforms.iTime.value += 0.01;
        shader.current.uniforms.iMouse.value = roundValues(
          mouse.current[0],
          mouse.current[1]
        );
      }
    }, 1);

    const roundValues = (targetX: number, targetY: number) => {
      var dx = targetX - actualMouse.current[0];
      var dy = targetY - actualMouse.current[1];
      actualMouse.current[0] += dx * easing;
      actualMouse.current[1] += dy * easing;
      return [actualMouse.current[0], actualMouse.current[1]];
    };

    let resolutionValue = window.innerWidth > 1690 ? 1.1 : 2;

    return (
      <effectComposer ref={composer} args={[gl]}>
        <shaderPass
          attach="passes"
          args={[ShapeShiftShader]}
          ref={shader}
          uniforms-iResolution-value={[
            size.width / resolutionValue,
            size.height / resolutionValue,
          ]}
          uniforms-noctaves-value={window.innerWidth > 600 ? 5.4 : 4}
        />
      </effectComposer>
    );
  }
);

const HomeSketch = ({ mouse }: { mouse: React.MutableRefObject<number[]> }) => {
  return (
    <SketchContainer>
      <Background />
      <Canvas>
        <Effects mouse={mouse} />
      </Canvas>
    </SketchContainer>
  );
};

export default HomeSketch;

const SketchContainer = styled.div`
  width: 100%;
  height: 120vh;
  position: fixed;
  z-index: 0;
  pointer-events: none;
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
    pointer-events: none;
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
