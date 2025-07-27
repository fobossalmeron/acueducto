import { StaticImageData } from 'next/image';
interface PortfolioImageProps {
    caseStudy: {
        case: string;
        cover: StaticImageData;
        color: string;
    };
    className?: string;
    imageSizes?: string;
}
export declare const PortfolioImage: ({ caseStudy, className, imageSizes, }: PortfolioImageProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=PortfolioImage.d.ts.map