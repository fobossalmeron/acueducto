import { useState, useCallback } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { memo } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div>Cargando...</div>
});

const MemoizedSpline = memo(Spline);

const HomeSpline = () => {
  const [show, setShow] = useState(false);

  const onLoad = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <SketchContainer $show={show}>
      <MemoizedSpline
        scene="https://prod.spline.design/TkssLUvOfGBXarJ7/scene.splinecode"
        onLoad={onLoad}
      />
    </SketchContainer>
  );
};

export default HomeSpline;

const SketchContainer = styled.div<{ $show: boolean }>`
  width: 100%;
  height: 120vh;
  position: fixed;
  inset: 0;
  max-width: 1500px;
  margin: 0 auto;
  
  > div {
    transition: opacity 5s ease;
    opacity: ${({ $show }) => ($show ? 1 : 0)};
  }
`;
