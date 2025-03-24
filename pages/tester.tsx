import index from 'public/locales/es/home.json';
import PageWrapper from 'components/layout/PageWrapper';
import { FAQSection } from 'components/pages/index/FAQSection';

const Tester = () => {
  return (
    <PageWrapper>
      <FAQSection t={index.faq} />
    </PageWrapper>
  );
};

export default Tester;
