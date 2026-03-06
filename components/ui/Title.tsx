type TitleProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
} & (
  | { children: React.ReactNode; dangerouslySetInnerHTML?: never }
  | { children?: never; dangerouslySetInnerHTML: { __html: string } }
) &
  React.ComponentPropsWithoutRef<C>;

export const Title = <C extends React.ElementType = 'p'>({
  as,
  children,
  className,
  dangerouslySetInnerHTML,
  ...props
}: TitleProps<C>) => {
  const Component = as || 'p';
  return (
    <Component
      className={`${className || ''} bg-gradient-to-r from-[#416FF7] to-[#0D35AB] bg-clip-text text-transparent relative mb-[4%] text-[3.4rem] leading-[100%] py-[0.15em] -my-[0.15em] font-bold tracking-[0] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]`}
      {...(dangerouslySetInnerHTML && { dangerouslySetInnerHTML })}
      {...props}
    >
      {children}
    </Component>
  );
};
