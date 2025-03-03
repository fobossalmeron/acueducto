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
