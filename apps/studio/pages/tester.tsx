import index from 'public/locales/es/home.json';
import PageWrapper from '@acueducto/shared/components/layout/PageWrapper';
import { SocialProofSection } from '@acueducto/shared/components/pages/index/SocialProofSection';

const Tester = () => {
  return (
    <PageWrapper>
      <div className="h-[100vh] w-full bg-red-500"></div>
      <SocialProofSection {...index.clients} />
    </PageWrapper>
  );
};

export default Tester;
