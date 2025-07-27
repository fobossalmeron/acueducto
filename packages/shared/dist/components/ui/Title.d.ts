import React from 'react';
type TitleProps<C extends React.ElementType> = {
    as?: C;
    className?: string;
} & ({
    children: React.ReactNode;
    dangerouslySetInnerHTML?: never;
} | {
    children?: never;
    dangerouslySetInnerHTML: {
        __html: string;
    };
}) & React.ComponentPropsWithoutRef<C>;
export declare const Title: <C extends React.ElementType = "p">({ as, children, className, dangerouslySetInnerHTML, ...props }: TitleProps<C>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Title.d.ts.map