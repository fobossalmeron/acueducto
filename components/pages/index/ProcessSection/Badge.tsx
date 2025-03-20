import Star from 'public/assets/img/layout/home/star.svg';
interface BadgeProps {
  badge: string;
  className?: string;
}

export const Badge = ({ badge, className }: BadgeProps) => {
  return (
    <div
      className={`flex h-[100px] w-[100px] -rotate-5 flex-col items-center justify-center gap-1 rounded-full border-1 border-[#666666] bg-[#2F333C] px-4 py-2 text-center text-xs shadow-2xl shadow-gray-950/20 ${className || ''}`}
    >
      <Star />
      <span className="font-medium text-white">{badge}</span>
    </div>
  );
};
