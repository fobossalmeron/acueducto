import React from 'react';
type AuxiliaryTitleProps<C extends React.ElementType> = {
    as?: C;
    children: React.ReactNode;
    className?: string;
} & React.ComponentPropsWithoutRef<C>;
export declare const AuxiliaryTitle: <C extends React.ElementType = "span">({ as, children, className, ...props }: AuxiliaryTitleProps<C>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AuxiliaryTitle.d.ts.map