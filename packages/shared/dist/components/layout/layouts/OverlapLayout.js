import { jsx as _jsx } from "react/jsx-runtime";
import { SimpleGrid } from './SimpleGrid';
export const OverlapLayout = ({ children, className, ...props }) => {
    return (_jsx(SimpleGrid, { "data-component": "overlap-layout", className: className || '', ...props, children: children }));
};
OverlapLayout.Header = ({ children, className, }) => (_jsx("div", { "data-element": "overlap-layout-header", className: `relative col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 ${className || ''}`, children: children }));
OverlapLayout.Content = ({ children, className, }) => (_jsx("div", { "data-element": "overlap-layout-content", className: `relative col-span-12 col-start-1 sm:col-span-10 sm:col-start-2 md:col-span-7 md:col-start-5 lg:col-span-5 lg:col-start-7 ${className || ''}`, children: children }));
