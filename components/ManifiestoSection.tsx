import React from "react";
import styled from "styled-components";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";
import { P } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";

const ManifiestoSection = ({ t }) => {
  let { intro, beliefs } = t;

  return (
    <PinnedSectionPadded title={intro.title} borderTop heading={2}>
      <P>{intro.p}</P>
      <ol>
        {beliefs.map(function (belief, index) {
          return (
            <Belief key={"belief" + index}>
              <Fade triggerOnce>
                <span>
                  {index < 9 ? "0" : ""}
                  {index + 1}
                </span>
                <h3>{belief.title}</h3>
                <p>{belief.p}</p>
              </Fade>
            </Belief>
          );
        })}
      </ol>
    </PinnedSectionPadded>
  );
};

export default React.memo(ManifiestoSection);

const Belief = styled.li`
  list-style: none;
  position: relative;
  margin-top: 5%;
  margin-bottom: 20%;
  span {
    color: ${(props) => props.theme.colors.accent};
    font-weight: 100;
    left: -3px;
    font-size: 5rem;
    position: relative;
  }
  h3 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 300;
  }
  p {
    margin-bottom: 0px;
  }
  @media (max-width: 1250px) {
    h3 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 1100px) {
    margin-bottom: 15%;
  }
  @media (max-width: 600px) {
    margin-bottom: 12%;
    span {
      font-size: 4rem;
    }
    h3 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 400px), (max-height: 450px) {
    span {
      font-size: 3.7rem;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 5px;
    }
    p:first-of-type {
      margin-top: 0;
    }
  }
`;

const PinnedSectionPadded = styled(PinnedSection)`
  @media (min-width: 600px) {
    ol div:last-child li {
      margin-bottom: 0px;
    }
  }
`;
