import React from 'react';

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
      className={`${className || ''} text-primary relative mb-[4%] text-[3.4rem] leading-[100%] font-bold tracking-[0] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]`}
      {...(dangerouslySetInnerHTML && { dangerouslySetInnerHTML })}
      {...props}
    >
      {children}
    </Component>
  );
};
