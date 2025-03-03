import Image from 'next/image';

interface TalkProps {
  title: string;
  guest: string;
  role: string;
  image: string;
}

export const TalkCard: React.FC<TalkProps> = ({
  title,
  guest,
  role,
  image,
}) => {
  return (
    <div
      key={guest}
      className="border-foreground flex max-w-[340px] flex-col gap-4 rounded-4xl border-1 px-4 py-4"
    >
      <div className="flex items-center gap-4">
        <Image
          src={`/assets/img/layout/meetup/${image}`}
          alt={guest}
          width={37}
          height={37}
        />
        <div className="flex flex-col gap-0">
          <p className="m-0! text-base">{guest}</p>
          <span className="text-primary text-sm">{role}</span>
        </div>
      </div>
    </div>
  );
};
