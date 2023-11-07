import Picture from "components/caseStudy/shared/Picture";
import styled from "styled-components";
import CardsDesktop from "public/assets/img/casestudies/wellmee/Point3-Desktop.png";
import CardsMobile from "public/assets/img/casestudies/wellmee/Point3-Mobile.png";

const AnimationScrollCards = (props) => {
  return (
    <PicturesContainer>
      {props.isMobile ?
        <Picture
          src={CardsMobile}
          alt="Cards"
        />
        : <Picture
            src={CardsDesktop}
            alt="Cards"
          />
      }
    </PicturesContainer>
  );
};

export default AnimationScrollCards;

const PicturesContainer = styled.div`
  display: flex;
  margin-bottom: 6%;
`;