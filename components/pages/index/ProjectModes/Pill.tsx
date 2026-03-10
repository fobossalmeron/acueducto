interface PillProps {
  text: string;
  highlighted?: boolean;
}

export const Pill = ({ text, highlighted }: PillProps) => {
  return (
    <div
      className={`relative w-fit whitespace-nowrap rounded-full px-3.5 py-2.5 text-xs md:text-sm backdrop-blur-sm ${
        highlighted
          ? 'primary-card text-over-black'
          : 'card text-over-black'
      }`}
    >
      {text}
    </div>
  );
};
