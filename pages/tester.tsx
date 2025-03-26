import index from 'public/locales/es/home.json';
import PageWrapper from 'components/layout/PageWrapper';
import { SocialProofSection } from 'components/pages/index/SocialProofSection';

const Tester = () => {
  return (
    <PageWrapper>
      <div className="h-[100vh] w-full bg-red-500"></div>
      <SocialProofSection {...index.clients} />
    </PageWrapper>
  );
};

export default Tester;
