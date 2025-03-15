import React, { memo } from 'react';
import { ButtonProps } from './Button.types';
import { cn } from '../../../utils/cn'; // Utilidad para combinar clases de Tailwind
import { baseStyles, variantStyles, sizeStyles } from './Button.styles';

export const Button = memo<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  ({
    variant = 'primary',
    text,
    className,
    parentComponent = 'Desconocido',
    size = 'default',
    ...rest
  }) => {
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
        <span>{text}</span>
      </button>
    );
  },
);

Button.displayName = 'Button';
