import { SimpleGrid } from './SimpleGrid';

export const OverlapLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SimpleGrid data-component="overlap-layout" className={className || ''}>
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
