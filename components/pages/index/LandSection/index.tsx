import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { Button } from 'components/ui/Button/Button';

interface LandSectionProps {
  heading: string;
  pill: string;
  tagline: string;
  ctaContact: string;
  ctaWork: string;
  locale: string;
}

export const LandSection = ({
  heading,
  pill,
  tagline,
  ctaContact,
  ctaWork,
  locale,
}: LandSectionProps) => {
  return (
    <section
      id="land"
      className="relative grid min-h-screen w-full grid-cols-12 items-center gap-[2.2rem] px-[4%]"
    >
      <div className="xs:col-span-11 col-span-12 col-start-1 flex flex-col sm:col-span-12 sm:col-start-1 sm:items-center sm:text-center">
        <Fade cascade delay={0.4}>
          <h1
            className={`text-foreground text-[clamp(2.4rem,0.5rem+7vw,7rem)] leading-[100%] font-medium ${locale === 'en' ? 'max-w-[13ch] lg:max-w-[20ch]' : 'max-w-[15ch] lg:max-w-[20ch]'}`}
          >
            {heading}
          </h1>
          <span className="border-foreground-low text-foreground mt-1 inline-block w-fit -rotate-[1.65deg] rounded-full border-1 bg-[#1A3270]/60 px-5 pt-[0rem] pb-[0.6rem] text-[clamp(2.18rem,0.91rem+4.875vw,4.55rem)] font-medium">
            {pill}
          </span>
          <p className="text-[#e6e6e6] mt-4 mb-5 max-w-[55ch] text-[clamp(1.7rem,0.16rem+2.19vw,2.19rem)]">
            {tagline}
          </p>
          <div className="border-card-border bg-background xs:max-w-none xs:gap-4 flex w-max max-w-[222px] flex-wrap gap-2 rounded-[36px] border p-2 md:rounded-full">
            <Link
              href="https://calendly.com/acueducto/discovery-call-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4"
            >
              <Button text={ctaContact} className="whitespace-nowrap" />
            </Link>
            <Link
              href={locale === 'en' ? '/work' : '/portafolio'}
              locale={locale}
            >
              <Button
                text={ctaWork}
                variant="outline"
                className="whitespace-nowrap"
              />
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};
