import { Fade } from 'react-awesome-reveal';
import Marquee from 'react-fast-marquee';

const MarqueeSection = ({ tags }: { tags: string[] }) => {
  return (
    <div className="my-[10%] w-full overflow-hidden uppercase">
      <Fade triggerOnce>
        <Marquee direction="right" delay={0}>
          {tags.map((tag, index) => (
            <span
              key={`tag-${index}`}
              className="mr-14 inline-block text-[1rem] font-light tracking-[4px] whitespace-nowrap sm:mr-20 sm:text-[1.4rem]"
            >
              {tag}
            </span>
          ))}
        </Marquee>
      </Fade>
    </div>
  );
};

export default MarqueeSection;
