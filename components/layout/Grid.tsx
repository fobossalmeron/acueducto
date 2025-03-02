import React from 'react';
// Renombramos el Grid original a SimpleGrid
export const SimpleGrid = ({
  children,
  className,
  dataComponent,
}: {
  children: React.ReactNode;
  className?: string;
  dataComponent?: string;
}) => (
  <div
    data-component={dataComponent}
    className={`relative grid w-full grid-cols-12 gap-[2.2rem] px-[4%] py-[10%] ${className || ''}`}
  >
    {children}
  </div>
);

// --- OVERLAP LAYOUT ---
export const OverlapLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SimpleGrid dataComponent="overlap-layout" className={className || ''}>
      {children}
    </SimpleGrid>
  );
};
OverlapLayout.Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    data-element="overlap-layout-header"
    className={`relative col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 ${className || ''}`}
  >
    {children}
  </div>
);
OverlapLayout.Content = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    data-element="overlap-layout-content"
    className={`relative col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 md:col-span-7 md:col-start-5 lg:col-span-5 lg:col-start-7 ${className || ''}`}
  >
    {children}
  </div>
);
// --- SPLIT LAYOUT ---
export const SplitLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SimpleGrid className={className || ''} dataComponent="split-layout">
      {children}
    </SimpleGrid>
  );
};
SplitLayout.Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    data-element="split-layout-header"
    className={`relative col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 lg:sticky lg:top-[150px] lg:col-span-5 lg:col-start-2 ${className || ''}`}
  >
    {children}
  </div>
);
SplitLayout.Content = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    data-element="split-layout-content"
    className={`${className || ''} relative col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 md:col-span-7 md:col-start-5 lg:col-span-5 lg:col-start-7`}
  >
    {children}
  </div>
);

// Mantener los componentes de estilo como están
type TitleProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

export const Title = <C extends React.ElementType = 'p'>({
  as,
  children,
  className,
  ...props
}: TitleProps<C>) => {
  const Component = as || 'p';
  return (
    <Component
      className={`${className || ''} text-primary relative mb-[4%] text-[3.4rem] leading-[100%] font-bold tracking-[0] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]`}
      {...props}
    >
      {children}
    </Component>
  );
};

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

type ParagraphProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

export const Paragraph = <C extends React.ElementType = 'p'>({
  as,
  children,
  className,
  ...props
}: ParagraphProps<C>) => {
  const Component = as || 'p';
  return (
    <Component
      className={`text-foreground-low relative max-w-[445px] pb-10 text-sm leading-[160%] font-normal md:text-base ${className || ''}`}
      {...props}
    >
      {children}
    </Component>
  );
};
