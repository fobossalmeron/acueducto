import { StackSection } from 'components/pages/index/StackSection';
import index from 'public/locales/es/home.json';
import PageWrapper from 'components/layout/PageWrapper';

const Tester = () => {
  return (
    <PageWrapper>
      <StackSection
        title={index.stack.title}
        p={index.stack.p}
        ends={index.stack.ends}
        sticker={index.stack.sticker}
        lastP={index.stack.lastP}
      />
    </PageWrapper>
  );
};

export default Tester;
