import styled from "styled-components";

type WrapperProps = {
  className?: string;
  unPadded?: boolean;
  style?: any;
  children: React.ReactNode;
};

const PageWrapper = ({ children, className, unPadded, style }: WrapperProps) => (
  <Main id="Main" className={className} $unPadded={unPadded} style={style}>
    {children}
  </Main>
);

export default PageWrapper;

const Main = styled.main<{ $unPadded: boolean }>`
  position: relative;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    padding-top: ${(props) => (props.$unPadded ? "0" : "5%")};
  }
  @media (max-width: 700px) {
    padding-top: ${(props) => (props.$unPadded ? "0" : "10%")};
  }
  @media (max-width: 600px), (max-height: 450px) {
    padding-bottom: 20px;
  }
  @media (max-width: 500px) {
    padding-top: ${(props) => (props.$unPadded ? "0" : "15%")};
  }
  @media (max-width: 400px) {
    padding-top: ${(props) => (props.$unPadded ? "0" : "20%")};
  }
`;
