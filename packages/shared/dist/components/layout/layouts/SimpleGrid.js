import { jsx as _jsx } from "react/jsx-runtime";
export const SimpleGrid = ({ children, className, ...props }) => (_jsx("div", { className: `relative grid w-full grid-cols-12 gap-[2.2rem] px-[4%] py-[10%] ${className || ''}`, ...props, children: children }));
