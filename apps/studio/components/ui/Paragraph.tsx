type ParagraphProps<C extends React.ElementType> = {
  as?: C;
  children?: React.ReactNode;
  className?: string;
  dangerouslySetInnerHTML?: { __html: string };
} & React.ComponentPropsWithoutRef<C>;

export const Paragraph = <C extends React.ElementType = 'p'>({
  as,
  children,
  className,
  dangerouslySetInnerHTML,
  ...props
}: ParagraphProps<C>) => {
  const Component = as || 'p';
  return (
    <Component
      className={`text-over-black relative max-w-[445px] pb-10 text-sm leading-[150%] font-normal md:text-base ${className || ''}`}
      {...props}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </Component>
  );
};
