import styled from 'styled-components';

function Border() {
  return (
    <div id="PageBorders">
      <GlassTopHider />
      <DefaultBorder />
      <BlackBorder />
      <GlassBottomHider />
    </div>
  );
}
export default Border;

const GlassBottomHider = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: -85px;
  left: 0;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 99;
`;

const GlassTopHider = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: -85px;
  left: 0;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 99;
`;
   
const DefaultBorder = styled.div`
  opacity: 1;
  pointer-events: none;
  z-index: 99;
  width: calc(100% - 36px);
  height: calc(100% - 36px);
  background-color: none;
  position: fixed;
  left: 18px;
  top: 18px;
  right: 18px;
  bottom: 18px;
  margin: 0 auto;
  max-width: 1504px;
  transition:
    opacity 0.3s ease-in,
    border 0.3s ease-in;
  mix-blend-mode: 1s ease-in-out;
  border: ${(props) =>
    `${props.theme.stroke} solid ${props.theme.colors.foreground_lowest}`};
  border-radius: 30px;

  @media (max-width: 600px), (max-height: 450px) {
    border-radius: 25px;
  }
`;

const BlackBorder = styled(DefaultBorder)`
  outline: ${(p) => `1000px solid ${p.theme.colors.background}`};
  border: none;
  transition:
    opacity 0.3s ease-in,
    outline 0.3s ease-in;
  border-radius: 30px;
  mix-blend-mode: normal;

  @media (max-width: 600px), (max-height: 450px) {
    border-radius: 25px;
  }
`;
