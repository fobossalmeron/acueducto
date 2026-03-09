interface PillProps {
  text: string;
  highlighted?: boolean;
}

export const Pill = ({ text, highlighted }: PillProps) => {
  return (
    <div
      className={`relative w-fit rounded-full px-3.5 py-2.5 text-sm backdrop-blur-sm ${
        highlighted
          ? 'primary-card text-over-black'
          : 'card text-over-black'
      }`}
    >
      {highlighted && (
        <div className="pointer-events-none absolute -top-5 right-5 h-[167px] w-[202px] bg-[linear-gradient(252deg,#0540ed_30%,rgba(0,49,222,0)_103%)] blur-[108px]" />
      )}
      <span className="relative">{text}</span>
    </div>
  );
};
