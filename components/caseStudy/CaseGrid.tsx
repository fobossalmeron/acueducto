import React, { ReactNode } from "react";
import styled from "styled-components";

const CaseGrid = ({
  children,
  reverse,
  early,
  style,
}: {
  children: ReactNode;
  reverse?: boolean;
  early?: number;
  style: object;
}) => {
  return (
    <Case reverse={reverse} early={early} style={style}>
      <div className="img">{children[0]}</div>
      <div className="info">{children[1]}</div>
      <div className="video">{children[2]}</div>
    </Case>
  );
};

export default CaseGrid;

export const Info = styled.div`
  padding: 10% 10% 10% 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  grid-row: 1 / span 1;
`;

export const Case = styled.div<{ reverse: boolean; early: number }>`
  position: relative;
  display: grid;
  border-top: ${(props) =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  grid-template-columns: repeat(2, 1fr);
  transition: 0.3s ease background-color;
  a {
    cursor: pointer;
  }
  .video {
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
  }
  .info {
    grid-column-start: ${(p) => (p.reverse ? 1 : 2)};
    padding: 10% 10% 10% 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    grid-row: 1 / span 1;
  }
  .img {
    grid-column-start: ${(p) => (p.reverse ? 2 : 1)};
    grid-row: 1 / span 1;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: ${(p) => (p.early ? p.early : 700)}px) {
    display: flex;
    flex-direction: column;
    .info {
      padding: 0 5% 5% 5%;
    }
  }
`;
