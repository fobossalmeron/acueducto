import styled from "styled-components";
import { Div } from "components/shared/Dangerously";

export const Content = styled.div``;

export const Insights = styled.div``;

export const Transcript = styled(Div)``;

const CenteredSection = styled.div<{ $customBackground?: string }>`
  background-color: ${(p) => p.theme.colors.background};
  background-image: ${(p) =>
    p.$customBackground ? `url(${p.$customBackground})` : "none"};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top right;
  padding: 30px 4% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1,
  .h1 {
    color: ${(p) => p.theme.colors.foreground};
    font-weight: 200;
    margin-bottom: 0;
    max-width: 900px;
    text-align: center;
    font-size: 7rem;
    letter-spacing: 0;
    line-height: 100%;
  }
  .seo_h1 {
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 4px;
    font-weight:100;
    line-height: 130%;
    margin-top: 5%;
  }
  //Article h2
  h2 {
    font-size: 2.5rem;
    grid-column: 1 / span 5;
    text-align: center;
    font-weight: 200;
    max-width: 690px;
    color: ${(p) => p.theme.colors.accent};
    line-height: 130%;
  }
  ${Content} {
    background-color: ${(props) => props.theme.colors.foreground};
    padding: 10%;
    border-radius: 70px;
    margin-top: 8%;
    max-width: 900px;
    a {
      color: ${(props) => props.theme.colors.background};
      text-decoration-color: ${(props) => props.theme.colors.accent};
      text-decoration-thickness: 2px;
      text-underline-offset: 0.25rem;
      transition: 0.3s ease all;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: ${(props) => props.theme.colors.accent};
        }
      }
      &:focus,
      &:active {
        color: ${(props) => props.theme.colors.accent};
      }
    }
    img {
      width: 100%;
      max-width: 600px;
      height: auto;
      margin: 2rem 0;
    }
    h1,
    h2 {
      font-size: 3rem;
      margin-bottom: 1.1rem;
      margin-top: 4rem;
      font-weight: 200;
      color: #182024;
      line-height: 120%;
      text-align: left;
    }
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      margin-top: 3rem;
      line-height: 120%;
      font-weight: 200;
      color: #182024;
    }
    h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
      line-height: 120%;
      font-weight: 200;
      color: #182024;
    }
    p,
    ol li,
    ul li {
      color: ${(p) => p.theme.colors.foreground_lowest};
      max-width: calc(680px + 10%);
      letter-spacing: -0.002em;
      line-height: 150%;
      font-size: 1.95rem;
      margin-bottom: 1rem;
      word-break: break-word;
      overflow-wrap: break-word;
      strong,
      b {
        font-weight: 200;
        color: #182024;
      }
    }
    p {
      margin-bottom: 2rem;
    }
    ul,
    ol {
      color: ${(p) => p.theme.colors.foreground_lowest};
      margin-bottom: 2rem;
      max-width: 680px;
      letter-spacing: -0.003em;
      line-height: 29px;
      font-size: 1.85rem;
      list-style: none;
      counter-reset: my-awesome-counter;
      margin-left: 12px;
      margin-top: 18px;
      li {
        counter-increment: my-awesome-counter;
      }
    }
    ul li {
      &:before {
        content: "–";
        font-weight: 300;
        font-size: 2rem;
        color: #182024;
        margin-right: 10px;
      }
    }
    ol li {
      &:before {
        content: counter(my-awesome-counter) ". ";
        margin-right: 6px;
      }
    }
  }
  ${Insights} {
    background-color: #f9fcfb;
    border: 2.5px solid #4da465;
    ul {
      color: ${(p) => p.theme.colors.foreground_lowest};
      list-style: none;
      li {
        &::before {
          content: " ";
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50px;
          background-color: #4da465;
          margin-bottom: 2px;
        }
      }
    }
  }
  @media (max-width: 1250px) {
    .h1,
    h1 {
      font-size: 6rem;
      line-height: 110%;
    }
    .h2,
    h2 {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 1000px) {
    .h2,
    h2 {
      font-size: 2rem;
    }
    .seo_h1 {
      font-size: 1.2rem;
    }
    ${Content} {
      border-radius: 40px;
      p,
      ul,
      ul li,
      ol {
        font-size: 1.7rem;
        line-height: 25px;
      }
      .h2,
      h2 {
        font-size: 2.6rem;
        font-weight: 300;
      }
      .h3,
      h3 {
        font-size: 2.1rem;
        font-weight: 300;
      }
      .h4,
      h4 {
        font-size: 1.7rem;
        font-weight: 300;
      }
    }
  }
  @media (max-width: 950px) {
    .h1,
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    padding-top: 8%;
    .h1,
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 650px) {
    padding-top: 30px;
    .h1,
    h1 {
      font-size: 3.4rem;
    }
    .seo_h1 {
      font-size: 1.1rem;
    }
    .h2,
    h2 {
      font-size: 1.85rem;
      line-height: 120%;
    }
    ${Content} {
      padding: 8%;
      border-radius: 30px;
      .h2,
      h2 {
        font-size: 2.4rem;
      }
      .h3,
      h3 {
        font-size: 1.9rem;
      }
      .h4,
      h4 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 400px) {
    ${Content} {
      padding: 5%;
      border-radius: 20px;
      .h2,
      h2 {
        font-size: 2.1rem;
      }
      p,
      ul,
      ol {
        font-weight: 200;
        strong,
        b {
          font-weight: 300;
        }
      }
    }
    .h1,
    h1 {
      font-size: 3.2rem;
    }
  }
`;

export default CenteredSection;
