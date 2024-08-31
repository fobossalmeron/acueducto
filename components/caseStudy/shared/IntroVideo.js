import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export const IntroVideo = (props) => (
  <VideoWrapper $desktopLayout>
    <Fade triggerOnce>
      <Video
        autoPlay
        playsInline
        muted
        loop
        poster={`/assets/img/casestudies/${props.link}/intro_poster.jpg`}
      >
        <source src={`/assets/video/casestudies/${props.link}/intro.mp4`} />
      </Video>
    </Fade>
  </VideoWrapper>
);

export const IntroVideoPadded = ({ backgroundColor, link }) => (
  <EditVideo $backgroundColor={backgroundColor}>
    <IntroVideo link={link} />
  </EditVideo>
);

const VideoWrapper = styled.div`
  max-width: ${(p) => (p.desktopLayout ? "863px" : "1150px")};
  padding: 0 5%;
`;

const Video = styled.video`
  width: 100%;
`;

export const EditVideo = styled.div`
  padding: 3%;
  border-radius: 40px;
  background-color: ${(p) =>
    p.$backgroundColor ? p.$backgroundColor : "#ffffff"};
  & > div {
    padding: 0px;
  }
  @media (max-width: 1300px) {
    margin: 0 30px;
  }
  @media (max-width: 700px) {
    padding: 10px;
    border-radius: 20px;
    margin: 0 20px;
  }
  @media (max-width: 500px) {
    border-radius: 17px;
  }
`;
