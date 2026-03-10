const blobStyle: Record<number, string> = {
  0: 'left-[22%] -top-[30%] scale-x-[1.3] scale-y-[0.8] rotate-[20deg]',
  1: '-left-[25%] -top-[15%] ',
  2: '-right-[25%] -top-[15%] scale-x-[1.2] scale-y-[0.8] rotate-[15deg]',
};

export const GrayBlob = ({ index }: { index: number }) => {
  const position = blobStyle[index] || '';
  return (
    <>
      <div
        className={`pointer-events-none absolute hidden h-[700px] opacity-30 w-[700px] bg-[radial-gradient(circle,#282B2B_0%,#1B1B1B_40%,transparent_70%)] lg:block ${position}`}
      />
      <div
        className={`pointer-events-none absolute hidden h-[700px] w-[700px] lg:block ${position}`}
        style={{
          maskImage: 'radial-gradient(circle, black 0%, black 40%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle, black 0%, black 40%, transparent 70%)',
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id={`blob-noise-${index}`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter={`url(#blob-noise-${index})`}
            opacity="0.10"
          />
        </svg>
      </div>
    </>
  );
};
