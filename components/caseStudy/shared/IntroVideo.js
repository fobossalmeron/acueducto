import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const IntroVideo = (props) => (
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

export default IntroVideo;

const VideoWrapper = styled.div`
  max-width: ${(p) => (p.desktopLayout ? "863px" : "1150px")};
  padding: 0 5%;
`;

const Video = styled.video`
  width: 100%;
`;
