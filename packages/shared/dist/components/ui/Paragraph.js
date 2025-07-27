import { jsx as _jsx } from "react/jsx-runtime";
export const Paragraph = ({ as, children, className, dangerouslySetInnerHTML, ...props }) => {
    const Component = as || 'p';
    return (_jsx(Component, { className: `text-over-black relative max-w-[445px] pb-10 text-sm leading-[150%] font-normal md:text-base ${className || ''}`, ...props, dangerouslySetInnerHTML: dangerouslySetInnerHTML, children: children }));
};
