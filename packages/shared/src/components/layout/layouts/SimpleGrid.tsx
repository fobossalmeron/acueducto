import React from 'react';

export const SimpleGrid = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  'data-component'?: string;
}) => (
  <div
    className={`relative grid w-full grid-cols-12 gap-[2.2rem] px-[4%] py-[10%] ${className || ''}`}
    {...props}
  >
    {children}
  </div>
);
