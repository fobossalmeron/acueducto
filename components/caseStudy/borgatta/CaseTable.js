import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Picture from "components/caseStudy/shared/Picture";
import Case1 from "public/assets/img/casestudies/borgatta/case1.gif";
import Case2 from "public/assets/img/casestudies/borgatta/case2.png";
import Case3 from "public/assets/img/casestudies/borgatta/case3.png";
import Case4 from "public/assets/img/casestudies/borgatta/case4.png";
import Case5 from "public/assets/img/casestudies/borgatta/case5.png";
import Case6 from "public/assets/img/casestudies/borgatta/case6.gif";

const CaseTable = () => {
  return (
    <CasesContainer>
      <Fade delay={300} triggerOnce className="case_one">
        <Picture src={Case1} alt="Page" withWrapper />
      </Fade>
      <Fade delay={300} triggerOnce className="case_two">
        <Picture src={Case2} alt="Page" withWrapper />
      </Fade>
      <Fade delay={300} triggerOnce className="case_three">
        <Picture src={Case3} alt="Page" withWrapper />
      </Fade>
      <Fade delay={300} triggerOnce className="case_four">
        <Picture src={Case4} alt="Page" withWrapper />
      </Fade>
      <Fade delay={300} triggerOnce className="case_five">
        <Picture src={Case5} alt="Page" withWrapper />
      </Fade>
      <Fade delay={300} triggerOnce className="case_six">
        <Picture src={Case6} alt="Page" withWrapper />
      </Fade>
    </CasesContainer>
  );
};

export default CaseTable;

const CasesContainer = styled.div`
  display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 2%;
  grid-template-columns: repeat(4, 1fr);
  padding: 4% 0% 2% 0%;
  grid-auto-rows: auto auto;
  max-width: 681px;
  height: auto;

  img {
    border-radius: 24.3px;
  }

  .case_one {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    max-width: 163px;
  }
  .case_two {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    max-width: 163px;
  }
  .case_three {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    max-width: 163px;
  }
  .case_four {
    grid-column: 4 / 4;
    grid-row: 1 / 2;
    max-width: 163px;
  }
  .case_five {
    grid-column: 1 / 4;
    grid-row: 2 / 2;
  }
  .case_six {
    grid-column: 4 / 4;
    grid-row: 2 / 2;
    max-width: 163px;
  }

  @media (max-width: 1000px) {
    padding: 9% 5% 2% 5%;

    .case_one {
      max-width: 31.5%;
    }
    .case_two {
      max-width: 48%;
    }
  }
  @media (max-width: 630px) {
    padding: 7% 5%;
    grid-column-gap: 1%;
    grid-row-gap: 1%;
    img {
      border-radius: 10.4px;
    }
  }
`;
