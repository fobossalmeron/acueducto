import { SimpleGrid } from './SimpleGrid';

export const SplitLayout = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SimpleGrid
      className={className || ''}
      data-component="split-layout"
      {...props}
    >
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
