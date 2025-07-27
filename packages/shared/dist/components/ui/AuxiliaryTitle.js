import { jsx as _jsx } from "react/jsx-runtime";
export const AuxiliaryTitle = ({ as, children, className, ...props }) => {
    const Component = as || 'span';
    return (_jsx(Component, { className: `text-foreground-low mt-[5%] text-[1.3rem] leading-[140%] font-thin tracking-[4px] uppercase ${className || ''}`, ...props, children: children }));
};
