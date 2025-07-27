import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../../utils/cn';
import { baseStyles, variantStyles, sizeStyles } from './Button.styles';
export const ButtonSubmit = React.forwardRef(({ variant = 'primary', text, className, size = 'default', ...rest }, ref) => {
    return (_jsxs("div", { className: cn(baseStyles, variantStyles[variant], sizeStyles[size], 'relative', className), children: [_jsx("input", { type: "submit", value: text, ref: ref, className: "absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0", ...rest }), _jsx("span", { children: text })] }));
});
ButtonSubmit.displayName = 'ButtonSubmit';
