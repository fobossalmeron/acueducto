import styled from "styled-components";
import TitleSectionGrid from "components/shared/TitleSectionGrid";

export const Parallax = styled.div`
  .parallax-effect-img {
    transform-style: preserve-3d;
    background-image: url("/assets/img/layout/podcast_cover_sq.png");
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    .inner-element {
      transform: translateZ(70px);
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 1200px) {
    .inner-element {
      transform: translateZ(50px);
    }
  }
  @media (max-width: 800px) {
    .inner-element {
      transform: translateZ(40px);
    }
  }
  @media (max-width: 600px) {
    .inner-element {
      transform: translateZ(10px);
    }
  }
`;

export const Limiter = styled.div`
  max-width: 350px;
  p {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
    font-weight: 500;
  }
`;

export const HostsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8%;
  & > :first-child {
    padding-top: 4%;
    padding-bottom: 4%;
  }
  img {
    grid-column: 2 / span 10;
    border-radius: 40px;
    max-width: 100%;
    height: auto;
  }
  @media (min-width: 1250px) {
    p:first-of-type {
      margin-top: 2.5rem;
    }
  }
  @media (max-width: 800px) {
    img {
      grid-column: 3 / span 8;
    }
  }
  @media (max-width: 600px) {
    img {
      grid-column: 1 / span 12;
    }
  }
`;

export const EpisodesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :first-child {
    padding-bottom: 4%;
  }
  & > :last-child {
    align-self: center;
    margin-bottom: 8%;
    margin-top: 2%;
  }
`;

export const FullSection = styled.section`
  background-color: ${(p) => p.theme.colors.accent};
  padding: 8% 4% 8% 12%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  & > div:first-of-type {
    padding-left: 10%;
  }
  & > div > div:last-of-type {
    margin-top: 5%;
  }
  h2 {
    font-weight: 400;
    font-size: 4.5rem;
    line-height: 118%;
    margin-bottom: 24px;
    max-width: 650px;
  }
  p {
    color: ${(p) => p.theme.colors.foreground_low};
    max-width: 610px;
  }
  @media (max-width: 1400px) {
    h2 {
      font-size: 4rem;
    }
  }
  @media (max-width: 1250px) {
    h2 {
      font-size: 3.8rem;
      max-width: 500px;
    }
  }
  @media (max-width: 1100px) {
    padding: 8% 4%;
    flex-direction: column;
    text-align: center;
    align-items: center;
    .lastEpisodeText {
      display: none;
    }
    & > div:first-of-type {
      padding-left: 0;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    & > div > div:last-of-type {
      margin-top: 28px;
      margin-bottom: 5%;
    }
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 3.4rem;
      margin-bottom: 18px;
    }
  }
  @media (max-width: 600px) {
    padding: 10% 4%;
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 450px) {
    h2 {
      font-size: 2.6rem;
    }
  }
`;

export const FullLastSection = styled.section`
  text-align: center;
  padding: 0 4% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    max-width: 1100px;
    font-weight: 400;
    font-size: 6.5rem;
    line-height: 110%;
    margin-bottom: 28px;
    margin-top: 0px;
    max-width: 850px;
    color: ${(p) => p.theme.colors.accent};
    & > span {
      text-transform: uppercase;
      font-size: 1.4rem;
      letter-spacing: 4px;
      color: ${(p) => p.theme.colors.foreground_low};
      display: block;
      text-align: center;
      line-height: 30px;
    }
  }
  & > p {
    color: ${(p) => p.theme.colors.foreground_low};
    max-width: 610px;
  }
  & > div {
    min-width: 455px;
  }
  @media (max-width: 960px) {
    h4 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    text-align: left;
    align-items: flex-start;
    padding: 0 20% 14%;
    & > div {
      min-width: unset;
    }
    p {
      width: 100%;
    }
    h4 {
      font-size: 4rem;
      max-width: unset;
      span {
        text-align: left;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 0 4% 14%;
    form {
      margin-top: 10%;
    }
    h4 {
      font-size: 3.4rem;
      margin-bottom: 16px;
    }
  }
`;

export const PodcastGrid = styled(TitleSectionGrid)`
  background-color: ${(p) => p.theme.colors.background};
  background-repeat: no-repeat;
  background-image: url("/assets/img/layout/backOld.svg");
  background-size: cover;
  background-position: 100% -10%;
  background-attachment: fixed;
  width: 100%;
  padding: 10% 4%;
  position: relative;
  margin-bottom: -1px;
  align-items: center;
  min-height: 85vh;
  & > div:nth-of-type(2) {
    grid-column: 8 / span 4;
    padding-left: 5%;
  }
  & > div:nth-of-type(1) {
    grid-column: 2 / span 6;
  }
  h1:not(.h1) {
    display: block;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-weight: 200;
    max-width: 490px;
    font-weight: 500;
    span {
      color: ${(props) => props.theme.colors.foreground_lower};
    }
  }
  .h1 {
    color: ${(props) => props.theme.colors.foreground};
    max-width: 650px;
    i {
      color: ${(props) => props.theme.colors.accent};
      font-style: italic;
      font-weight: 600;
      text-shadow: 1px 1px 20px rgba(13, 17, 17, 0.2);
    }
  }
  h2 {
    letter-spacing: 0;
    line-height: 105%;
    font-size: 7rem;
    margin-bottom: 3px;
    max-width: 810px;
    color: ${(props) => props.theme.colors.foreground};
  }
  p {
    padding-top: 1.5rem;
    color: ${(props) => props.theme.colors.foreground_low};
    position: relative;
    max-width: 510px;
  }
  /*      height      */
  @media (max-height: 800px), (max-width: 1100px) {
    min-height: unset;
  }

  /*      width      */
  @media (max-width: 1480px) {
    h2 {
      font-size: 6rem;
    }
  }
  @media (max-width: 1280px) {
    h2 {
      font-size: 5rem;
    }
  }
  @media (max-width: 1100px) {
    & > div:nth-of-type(1) {
      grid-column: 2 / span 12;
      padding-left: 0;
      form {
        margin-top: 4%;
      }
    }
    & > div:nth-of-type(2) {
      grid-column: 2 / span 12;
      padding: 5% 5% 5% 1%;
      display: flex;
      & > div {
        width: 100%;
        max-width: 400px;
      }
    }
  }
  @media (max-width: 800px) {
    padding-top: 15%;
    & > div:nth-of-type(2),
    & > div:nth-of-type(1) {
      grid-column: 3 / span 8;
    }
    h2 {
      margin-bottom: 5%;
      font-size: 4rem;
      font-weight: 200;
      line-height: 110%;
    }
    & > div:nth-of-type(2) {
      justify-content: center;
      padding-top: 10%;
      & > div {
        max-width: 300px;
      }
    }
  }
  @media (max-width: 600px) {
    background-position: right center;
    background-attachment: scroll;
    & > div {
      grid-column: 1 / span 12;
    }
    & > div:nth-of-type(2),
    & > div:nth-of-type(1) {
      grid-column: 1 / span 12;
    }
    & > div:nth-of-type(2) > div {
      max-width: 250px;
    }
    p {
      padding-top: 10px;
    }
    h2 {
      font-size: 3.4rem;
      line-height: 110%;
    }
    h1:not(.h1) {
      max-width: 195px;
    }
  }
`;

export const FeatureList = styled(TitleSectionGrid)`
  padding-top: 0;
  padding-bottom: 2%;
  & > div {
    grid-column: 2 span 9;
    display: flex;
    gap: ${(props) => (props.narrow ? "1rem" : "3.5rem")};
    flex-wrap: wrap;
    justify-content: space-between;
  }
  article {
    width: ${(props) =>
        props.narrow ? "calc(33% - 1rem)" : "calc(33% - 2.5rem)"};
  }
  & > div > div {
    width: ${(props) =>
        props.narrow ? "calc(33% - 1rem)" : "calc(33% - 2.5rem)"};
  }
  @media (max-width: 1360px) {
    & > div {
      gap: ${(props) => (props.narrow ? "1rem" : "4rem")};
      & > div,
      article {
        width: ${(props) =>
        props.narrow ? "calc(50% - 1rem)" : "calc(50% - 2rem)"};
        a {
          max-width: unset;
        }
      }
    }
  }
  @media (max-width: 950px) {
    margin: 20px 0;
    & > div {
      gap: 2rem;
      & > div,
      article {
        width: 100%;
      }
    }
  }
`;
