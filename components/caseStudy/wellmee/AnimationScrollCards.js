import { Fade } from "react-awesome-reveal";
import Picture from "components/caseStudy/shared/Picture";
import styled from "styled-components";
import Cards from "public/assets/img/casestudies/wellmee/Point3.png";

const AnimatedScrollCards = () => {
  return (
    <PicturesContainer>
      <Picture
        src={Cards}
        alt="Cards"
      />
    </PicturesContainer>
  );
};

export default AnimatedScrollCards;

const PicturesContainer = styled.div`
  display: flex;
  margin-bottom: 6%;
`;