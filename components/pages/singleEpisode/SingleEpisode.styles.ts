import styled from "styled-components";
import BorderLink from "components/shared/BorderedLink";

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const VideoContainer = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  margin-top: 8%;
  @media (max-width: 620px) {
    margin-top: 10%;
  }
`;

export const Video = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 30px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const NextEp = styled.div`
  margin-top: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.foreground_low};
  p {
    text-align: center;
  }
  @media (max-width: 620px) {
    margin-top: 20%;
  }
`;

export const THoverable = styled.b`
  font-weight: 300;
  ${BorderLink({ showLink: false })}
`;

export const CenteredDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const ContentType = styled.span<{ $insights?: boolean }>`
  font-weight: 300;
  font-weight: ${(p) => (p.$insights ? 600 : 300)};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 6px;
  color: ${(p) => (p.$insights ? "#4DA465" : p.theme.colors.background)};
  margin-bottom: 2rem;
  font-size: 1.5rem;
  width: 100%;
  display: block;
  transform: translateY(-100%);
  @media (max-width: 900px) {
    margin-top: 10px;
  }
  @media (max-width: 650px) {
    margin-top: 30px;
    margin-bottom: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 1.3rem;
    margin-top: 40px;
  }
`;

export const RouterSpace = styled.div`
  padding-top: 20%;
  margin-top: 20px;
  text-align: center;
  max-width: 450px;
  color: ${(props) => props.theme.colors.foreground_low};
  @media (max-width: 800px) {
    max-width: 400px;
    padding-top: 10%;
  }
  @media (max-width: 500px) {
    padding-top: 6%;
  }
`;

export const EpisodeNumberStyled = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 0px;
  @media (max-width: 1000px) {
    transform: scale(0.9);
  }
  @media (max-width: 800px) {
    transform: scale(0.8);
    margin-top: 10px;
  }
  @media (max-width: 650px) {
    margin-top: 0px;
  }
`;

export const AllEpisodesHoverable = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 6%;
  font-weight: 100;
  cursor: pointer;
  text-decoration: none;
  p {
    ${BorderLink({ showLink: true })}
  }
`;

export const IntroLogo = styled.p`
  line-height: 100%;
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 3px;
  color: ${(props) => props.theme.colors.foreground};
  text-align: center;
  margin-bottom: 5%;
  text-decoration: none;
  padding-top: 120px;
  a {
    text-decoration: none;
  }
  span {
    display: block;
    font-size: 2rem;
    font-weight: 100;
    color: ${(props) => props.theme.colors.accent};
    svg {
      max-width: 110px;
      * {
        fill: ${(props) => props.theme.colors.accent};
      }
    }
  }
  @media (max-width: 1300px) {
    padding-top: 50px;
  }
  @media (max-width: 1250px) {
    font-size: 3rem;
  }
  @media (max-width: 950px) {
    font-size: 2.5rem;
    span {
      margin-top: 5px;
      font-size: 1.5rem;
      svg {
        max-width: 90px;
      }
    }
  }
  @media (max-width: 800px) {
    font-size: 2rem;
    padding-top: 35px;
    span {
      margin-top: 0px;
      font-size: 1.3rem;
      svg {
        max-width: 70px;
      }
    }
  }
`;
