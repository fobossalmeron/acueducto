import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `EpisodePreview`.
 */
export type EpisodePreviewProps =
  SliceComponentProps<Content.EpisodePreviewSlice>;

/**
 * Component for "EpisodePreview" Slices.
 */
const EpisodePreview = ({ slice }: EpisodePreviewProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for episode_preview (variation: {slice.variation})
      Slices
    </section>
  );
};

export default EpisodePreview;
