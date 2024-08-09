import { FC } from "react";
import { Fade } from "react-awesome-reveal";
import Image, { StaticImageData } from "next/legacy/image";

interface PictureProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  fraction?: number;
  withWrapper?: boolean;
}

const Picture: FC<PictureProps> = ({
  src,
  alt,
  width,
  height,
  fraction = 0.1,
  withWrapper = false,
}) => {
  const imageFaded = (
    <Fade fraction={fraction} triggerOnce delay={100}>
      <Image width={width} height={height} src={src} alt={alt} />
    </Fade>
  );

  return withWrapper ? <div className="image">{imageFaded}</div> : imageFaded;
};

export default Picture;
