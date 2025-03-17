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
    <div className="primary-card flex max-w-[445px] flex-col gap-2 rounded-4xl p-6 md:p-8">
      {image}
      <div className="flex flex-col gap-0">
        <p className="text-foreground pt-4 text-lg font-medium md:text-xl">
          {title}
        </p>
        <span className="text-primary text-sm font-normal md:text-base">
          {time}
        </span>
      </div>
      <p className="text-foreground-low text-sm">{description}</p>
    </div>
  );
}
