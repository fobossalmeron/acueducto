import React from 'react';
type ParagraphProps<C extends React.ElementType> = {
    as?: C;
    children?: React.ReactNode;
    className?: string;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
} & React.ComponentPropsWithoutRef<C>;
export declare const Paragraph: <C extends React.ElementType = "p">({ as, children, className, dangerouslySetInnerHTML, ...props }: ParagraphProps<C>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Paragraph.d.ts.map