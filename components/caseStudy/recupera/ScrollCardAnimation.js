import { useState, useEffect } from 'react';
import Picture from "components/caseStudy/shared/Picture";
import Screenshot1 from "public/assets/img/casestudies/recupera/screenshot1.png";
import Screenshot2 from "public/assets/img/casestudies/recupera/screenshot2.png";
import Screenshot3 from "public/assets/img/casestudies/recupera/screenshot3.png";
import Screenshot4 from "public/assets/img/casestudies/recupera/screenshot4.png";
import Screenshot5 from "public/assets/img/casestudies/recupera/screenshot5.png";
import Screenshot6 from "public/assets/img/casestudies/recupera/screenshot6.png";
import Screenshot7 from "public/assets/img/casestudies/recupera/screenshot7.png";
import Screenshot8 from "public/assets/img/casestudies/recupera/screenshot8.png";
import Screenshot9 from "public/assets/img/casestudies/recupera/screenshot9.png";
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const ScrollCardAnimation = (props) => {
  const [isMobile, setIsMobile] = useState();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", function(){
      if (window.innerWidth <= 650) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCardMove = (isLeft) => {
    const direction = isLeft ? -1 : 1;
    const offsetX = (scrollY/10) * (!isMobile ? 0.15 : 0.10) * direction;
    return {
      transform: `translateX(${offsetX}px)`,
    };
  };
  
  return (
    <Fade delay={300} triggerOnce>
      {
        !isMobile ? 
          <PicturesContainer>
            <FirstRow
              style={handleCardMove(true)}
            >
              <Picture
                src={Screenshot1}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot2}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot3}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot4}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot5}
                alt="Screenshots"
                withWrapper
              />
            </FirstRow>
            <SecondRow
              style={handleCardMove(false)}
            >
              <Picture
                src={Screenshot6}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot7}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot8}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot9}
                alt="Screenshots"
                withWrapper
              />
            </SecondRow>
          </PicturesContainer> 
        : 
          <PicturesContainerMobile>
            <FirstRowMobile style={handleCardMove(true)}>
              <Picture
                src={Screenshot1}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot2}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot3}
                alt="Screenshots"
                withWrapper
              />
            </FirstRowMobile>
            <SecondRowMobile style={handleCardMove(false)}>
              <Picture
                src={Screenshot3}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot7}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot8}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot1}
                alt="Screenshots"
                withWrapper
              />
            </SecondRowMobile>
            <ThirdRowMobile style={handleCardMove(true)}>
              <Picture
                src={Screenshot6}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot9}
                alt="Screenshots"
                withWrapper
              />
              <Picture
                src={Screenshot5}
                alt="Screenshots"
                withWrapper
              />
            </ThirdRowMobile>
          </PicturesContainerMobile>
      }
    </Fade>
  );
};

export default ScrollCardAnimation;

const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14.9px;
  margin-top: 5%;

  .image {
    span {
      border-radius: 7.4px;
    }
  }
`;

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14.9px;
  width: 132%;
  align-self: center;
`;

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14.9px;
  width: 106%;
  align-self: center;
`;

const PicturesContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9.5px;
  margin-top: 2%;
  padding: 7% 0%;

  .image {
    span {
      border-radius: 7.4px;
      flex: 1 0 auto;
    }
  }
`;

const FirstRowMobile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9.5px;
  width: 120%;
  align-self: center;
  transition: transform 0.1s ease;
`;

const SecondRowMobile = styled.div`
  display: flex;
  gap: 9.5px;
  flex-direction: row;
  width: 161%;
  align-self: center;
  transition: transform 0.1s ease;
`;

const ThirdRowMobile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9.5px;
  width: 123%;
  align-self: center;
  transition: transform 0.1s ease;
`;