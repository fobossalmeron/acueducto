import React, { memo } from 'react';
import { ButtonProps } from './Button.types';
import { cn } from '../../../utils/cn';
import { baseStyles, variantStyles, sizeStyles } from './Button.styles';

export const Button = memo<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ variant = 'primary', text, className, size = 'default', ...rest }) => {
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...rest}
    >
      <span className="whitespace-[inherit]">{text}</span>
    </button>
  );
});

Button.displayName = 'Button';
