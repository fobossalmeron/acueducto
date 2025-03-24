import { StaticImageData } from 'next/image';
import { OverlapLayout } from 'components/layout/layouts/OverlapLayout';
import { Title } from 'components/ui/Title';
import { PortfolioImage } from './PortfolioImage';

import p_cover_borgatta from 'public/assets/img/casestudies/borgatta/p_cover.jpg';
import p_cover_recupera from 'public/assets/img/casestudies/recupera/p_cover.jpg';
import np_cover_wellmee from 'public/assets/img/casestudies/wellmee/np_cover.jpg';
import p_cover_ladanzadelasfieras from 'public/assets/img/casestudies/ladanzadelasfieras/p_cover.jpg';
import p_cover_blockstem from 'public/assets/img/casestudies/blockstem/p_cover.jpg';
import p_cover_rahid from 'public/assets/img/casestudies/rahid/p_cover.jpg';

const caseStudies: { case: string; cover: StaticImageData; color: string }[] = [
  { case: 'borgatta', cover: p_cover_borgatta, color: '#FF6B00' },
  { case: 'recupera', cover: p_cover_recupera, color: '#6F65EF' },
  { case: 'rahid', cover: p_cover_rahid, color: '#C9D2FF' },
  { case: 'blockstem', cover: p_cover_blockstem, color: '#62AC97' },
  {
    case: 'ladanzadelasfieras',
    cover: p_cover_ladanzadelasfieras,
    color: '#B92E1D',
  },
  { case: 'wellmee', cover: np_cover_wellmee, color: '#57DBC5' },
];

export const PortfolioSection = ({ title }: { title: string }) => {
  return (
    <div className="bg-background">
      <OverlapLayout className="border-foreground-lowest mb-0 content-center overflow-hidden border-t">
        <OverlapLayout.Header>
          <Title as="h2" className="max-w-[18ch]">
            {title}
          </Title>
        </OverlapLayout.Header>
        <div className="col-span-12 col-start-1 grid grid-cols-1 gap-5 sm:col-span-10 sm:col-start-2 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-5">
            {caseStudies.slice(0, -1).map((caseStudy, index) => (
              <PortfolioImage
                key={caseStudy.case}
                caseStudy={caseStudy}
                className={
                  index === 0
                    ? 'col-span-2 aspect-[10/7]'
                    : 'col-span-1 aspect-square'
                }
              />
            ))}
          </div>

          <PortfolioImage
            caseStudy={caseStudies[5]}
            className="aspect-[10/7] md:aspect-[5/9]"
            imageSizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </OverlapLayout>
    </div>
  );
};
