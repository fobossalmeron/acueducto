export function ScheduleItem({
  title,
  description,
  time,
  image,
}: {
  title: string;
  description: string;
  time: string;
  image: React.ReactNode;
}) {
  return (
    <div className="bg-background-light flex max-w-[445px] flex-col gap-2 rounded-4xl p-8">
      {image}
      <div className="flex flex-col gap-0">
        <p className="text-foreground pt-4 text-xl font-medium">{title}</p>
        <span className="text-primary text-base font-normal">{time}</span>
      </div>
      <p className="text-foreground-low">{description}</p>
    </div>
  );
}
