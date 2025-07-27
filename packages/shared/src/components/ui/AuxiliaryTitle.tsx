import React from 'react';

type AuxiliaryTitleProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

export const AuxiliaryTitle = <C extends React.ElementType = 'span'>({
  as,
  children,
  className,
  ...props
}: AuxiliaryTitleProps<C>) => {
  const Component = as || 'span';
  return (
    <Component
      className={`text-foreground-low mt-[5%] text-[1.3rem] leading-[140%] font-thin tracking-[4px] uppercase ${className || ''}`}
      {...props}
    >
      {children}
    </Component>
  );
};
