import { useContext } from "react";
import styled from "styled-components";
import { useRef } from "react";
import { P } from "components/shared/Dangerously";
import BorderLink from "components/shared/BorderedLink";
import Fade from "react-reveal/Fade";
import Arrow from "static/assets/img/layout/arrow.svg";
import Link from "next/link";
import LangContext from "utils/LangContext";

const SingleCase = props => {
  const video = useRef(null);
  return (
    <Case>
      <Link
        href={
          props.lang === "en"
            ? "/en/work/" + props.link
            : "/portafolio/" + props.link
        }
        passHref
      >
        <a>
          <Fade>
            <VidContainer>
              {props.lang === "en" ? "go to project" : "visitar proyecto"}
              <Logo
                src={`/static/assets/img/casestudies/${props.link}/portfolio_logo.svg`}
                alt={`logo_${props.link}`}
              />
              {props.noPlay ? (
                <video
                  ref={video}
                  playsInline
                  muted
                  loop
                  poster={`/static/assets/img/casestudies/${props.link}/portfolio_poster.svg`}
                >
                  <source
                    src={`/static/assets/video/casestudies/${props.link}/portfolio.mp4`}
                  />
                </video>
              ) : (
                <video
                  ref={video}
                  playsInline
                  autoPlay
                  muted
                  loop
                  poster={`/static/assets/img/casestudies/${props.link}/portfolio_poster.svg`}
                >
                  <source
                    src={`/static/assets/video/casestudies/${props.link}/portfolio.mp4`}
                  />
                </video>
              )}
            </VidContainer>
          </Fade>
        </a>
      </Link>
      <Info>
        <Fade>
          <Link
            href={
              props.lang === "en"
                ? "/en/work/" + props.link
                : "/portafolio/" + props.link
            }
            passHref
          >
            <a>
              <Hoverable>{props.title}</Hoverable>
            </a>
          </Link>
        </Fade>
        <Flexed>
          <P>{props.tags}</P>
          <Link
            href={
              props.lang === "en"
                ? "/en/work/" + props.link
                : "/portafolio/" + props.link
            }
            passHref
          >
            <a>
              {props.lang === "en" ? "go to project" : "visitar proyecto"}
              <Arrow />
            </a>
          </Link>
        </Flexed>
      </Info>
    </Case>
  );
};

const CaseList = ({ limit, noPlay }) => {
  const context = useContext(LangContext);
  let cases = Object.entries(context.casestudies.studies).map(function(
    study,
    index
  ) {
    study = study[1];
    if (limit !== undefined && index + 1 > limit) {
      return;
    } else {
      return (
        <SingleCase
          key={"case" + index}
          title={study.title}
          tags={study.tags}
          link={study.link}
          video={study.video}
          logo={study.logo}
          noPlay={noPlay}
          lang={context.lang}
        />
      );
    }
  });
  return <CaseStudiesWrapper>{cases}</CaseStudiesWrapper>;
};

export default React.memo(CaseList);

const Hoverable = styled.h4`
  ${BorderLink({ showLink: false })}
`;

const Logo = styled.img`
  width: 70%;
  transform: translateZ(1px) translateX(-50%) translateY(-50%);
  align-self: center;
  justify-self: center;
  display: flex;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform-origin: 50% 50%;
`;

const Flexed = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  a {
    justify-content: flex-end;
    display: flex;
    font-size: 0;
  }
  p {
    margin-top: 4%;
  }
`;

const Info = styled.div`
  padding: 10% 10% 10% 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  h4 {
    font-size: 4.5rem;
    font-weight: 200;
    line-height: 115%;
    max-width: 500px;
    cursor: pointer;
    background-position: 0 5.8rem;
  }
  p {
    color: ${props => props.theme.colors.foreground_low};
  }
  a {
    &:hover {
      svg {
        stroke: ${props => props.theme.colors.accent};
      }
    }
  }
  svg {
    align-self: flex-end;
    width: 50px;
    height: 40px;
    fill: none;
    stroke: ${props => props.theme.colors.foreground};
    stroke-width: ${props => props.theme.stroke};
    transition: stroke 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  @media (max-width: 1160px) {
    h4 {
      font-size: 4rem;
      background-position: 0 5.1rem;
    }
  }
  @media (max-width: 950px) {
    h4 {
      font-size: 3.5rem;
      background-position: 0 4.4rem;
    }
  }
  @media (max-width: 780px) {
    h4 {
      font-size: 3rem;
      background-position: 0 3.8rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 600px) {
    svg {
      border: 2px solid ${props => props.theme.colors.foreground_low};
      padding: 10px;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      bottom: -10px;
    }
  }
  @media (max-width: 500px), (max-height: 450px) {
    h4 {
      font-size: 2.4rem;
      background-position: 0 3.1rem;
    }
  }
`;

const VidContainer = styled.div`
  margin: 10%;
  width: 80%;
  height: 0;
  padding-bottom: 80%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 0;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      video {
        transform: scale(0.98);
        opacity: 0.92;
      }
      img {
        transform: translateZ(1px) translateY(-50%) translateX(-50%) scale(1.02);
      }
    }
    img {
      transition: transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      will-change: transform;
    }
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    will-change: transform, opacity;
    transition: transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955),
      opacity 0.5s ease;
  }
`;

const Case = styled.div`
  display: grid;
  border-top: ${props =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  grid-template-columns: repeat(2, 1fr);
  a {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    ${VidContainer} {
      margin: 5% 5% 10px 5%;
      width: 90%;
      padding-bottom: 45%;
      video {
        top: -50%;
      }
    }
    ${Info} {
      padding: 0 5% 5% 5%;
      div:nth-of-type(2) {
        margin-top: 5px;
      }
      h4 {
        margin-bottom: 20px;
      }
    }
  }
`;

const CaseStudiesWrapper = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;