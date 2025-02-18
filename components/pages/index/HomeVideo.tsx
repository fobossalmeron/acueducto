import { useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";

const HomeSpline = () => {
  const [show, setShow] = useState(false);

  const onLoad = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <SketchContainer>
      <Video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={onLoad}
        $show={show}
        preload="auto"
      >
        <source src="/assets/video/acompressed.mp4" type="video/mp4" />
        <source src="/assets/video/video.webm" type="video/webm" />
        Tu navegador no soporta videos en HTML5.
      </Video>
      <Overlay $show={show} />
      <NoiseOverlay $show={show} />
    </SketchContainer>
  );
};

export default HomeSpline;

const SketchContainer = styled.div`
  width: 100%;
  height: 120vh;
  position: fixed;
  inset: 0;
  max-width: 1500px;
  margin: 0 auto;
`;

const Video = styled.video<{ $show: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  backdrop-filter: blur(5px);
  transition: opacity 3s ease;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  will-change: opacity;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Overlay = styled.div<{ $show: boolean }>`
  animation: ${rotate} 400ms infinite steps(4);
  position: fixed;
  left: -100%;
  right: -100%;
  top: -100%;
  bottom: -100%;
  image-rendering: pixelated;
  background-image: url("/assets/img/layout/basketball.webp");
  background-repeat: repeat;
  backdrop-filter: blur(10px);
  mix-blend-mode: darken;
  will-change: transform;
  transition: opacity 2s ease 1s;
  opacity: ${({ $show }) => ($show ? 0.5 : 0)};
`;

const NoiseOverlay = styled.div<{ $show: boolean }>`
  animation: ${rotate} 200ms infinite steps(4);
  position: fixed;
  left: -100%;
  right: -100%;
  top: -100%;
  bottom: -100%;
  image-rendering: pixelated;
  background-image: url("/assets/img/layout/noise.webp");
  background-repeat: repeat;
  mix-blend-mode: multiply;
  will-change: transform;
  transition: opacity 2s ease 1s;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
`;
