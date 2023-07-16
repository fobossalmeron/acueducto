import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Picture from "components/caseStudy/shared/Picture";

const CaseTable = () => {
  return (
    <CasesContainer>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case1.png"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case2.png"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case3.png"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case4.gif"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case5.png"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case6.png"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case7.png"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case8.png"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case9.gif"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case10.png"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case11.png"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
      <Fade delay={300} triggerOnce>
        <Picture
          src="/assets/img/casestudies/borgatta/case12.png"
          alt="Page"
          width={163}
          height={163}
          withWrapper
        />
      </Fade>
    </CasesContainer>
  );
};

export default CaseTable;

const CasesContainer = styled.div`
  display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 2%;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 4% 0% 2% 0%;
  img {
    border-radius: 24.3px;
  }
  @media (max-width: 1000px) {
    padding: 9% 5% 6% 5%;
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