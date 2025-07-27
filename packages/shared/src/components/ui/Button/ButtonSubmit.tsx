import React from 'react';
import { ButtonProps } from './Button.types';
import { cn } from '../../../utils/cn';
import { baseStyles, variantStyles, sizeStyles } from './Button.styles';

export type ButtonSubmitRef = HTMLInputElement;

export const ButtonSubmit = React.forwardRef<
  ButtonSubmitRef,
  ButtonProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    { variant = 'primary', text, className, size = 'default', ...rest },
    ref,
  ) => {
    return (
      <div
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          'relative',
          className,
        )}
      >
        <input
          type="submit"
          value={text}
          ref={ref}
          className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
          {...rest}
        />
        <span>{text}</span>
      </div>
    );
  },
);

ButtonSubmit.displayName = 'ButtonSubmit';
