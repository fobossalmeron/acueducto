import { ProcessSection } from 'components/pages/index/ProcessSection';
import index from 'public/locales/es/home.json';
import PageWrapper from 'components/layout/PageWrapper';

const Tester = () => {
  return (
    <PageWrapper>
      <ProcessSection
        title={index.process.title}
        labelFirst={index.process.labelFirst}
        labelSecond={index.process.labelSecond}
        stages={index.process.stages}
        agileCard={index.process.agileCard}
      />
    </PageWrapper>
  );
};

export default Tester;
