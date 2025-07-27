import { jsx as _jsx } from "react/jsx-runtime";
export const Title = ({ as, children, className, dangerouslySetInnerHTML, ...props }) => {
    const Component = as || 'p';
    return (_jsx(Component, { className: `${className || ''} text-primary relative mb-[4%] text-[3.4rem] leading-[100%] font-bold tracking-[0] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]`, ...(dangerouslySetInnerHTML && { dangerouslySetInnerHTML }), ...props, children: children }));
};
