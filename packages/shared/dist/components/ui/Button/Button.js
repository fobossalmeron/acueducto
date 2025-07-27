import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../../utils/cn';
import { baseStyles, variantStyles, sizeStyles } from './Button.styles';
export const Button = memo(({ variant = 'primary', text, className, size = 'default', ...rest }) => {
    return (_jsx("button", { className: cn(baseStyles, variantStyles[variant], sizeStyles[size], className), ...rest, children: _jsx("span", { className: "whitespace-[inherit]", children: text }) }));
});
Button.displayName = 'Button';
