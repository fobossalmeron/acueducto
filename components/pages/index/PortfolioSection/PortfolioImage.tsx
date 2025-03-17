import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PortfolioImageProps {
  caseStudy: {
    case: string;
    cover: StaticImageData;
    color: string;
  };
  className?: string;
  imageSizes?: string;
}

export const PortfolioImage = ({
  caseStudy,
  className = '',
  imageSizes = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
}: PortfolioImageProps) => {
  const { locale } = useRouter();

  const href =
    locale === 'en'
      ? `/en/work/${caseStudy.case}`
      : `/portafolio/${caseStudy.case}`;

  return (
    <Link
      href={href}
      style={{
        borderColor: caseStudy.color,
      }}
      className={`group relative min-h-full max-w-full overflow-hidden rounded-4xl border transition-transform duration-300 ease-out hover:scale-[0.98] ${className}`}
    >
      <div className="relative h-full w-full transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src={caseStudy.cover}
          alt={caseStudy.case}
          fill
          sizes={imageSizes}
          className="object-cover"
          placeholder="blur"
        />
      </div>
    </Link>
  );
};
