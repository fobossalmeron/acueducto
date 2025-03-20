import { ProblemSection } from 'components/pages/index/ProblemSection';
import TitleSection from 'components/shared/TitleSection';
import index from 'public/locales/es/home.json';
import PageWrapper from 'components/layout/PageWrapper';

const Tester = () => {
  return (
    <PageWrapper>
      <ProblemSection
        title={index.problem.title}
        p={index.problem.p}
        scenes={index.problem.scenes}
      />
    </PageWrapper>
  );
};

export default Tester;
