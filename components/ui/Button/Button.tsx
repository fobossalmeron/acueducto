import React, { memo } from 'react';
import { Pin, ButtonElement } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = memo<ButtonProps & React.HTMLAttributes<HTMLDivElement>>(
  ({
    inverse = false,
    text,
    className,
    secondary = false,
    parentComponent = 'Desconocido',
    size = 'default',
    ...rest
  }) => {
    return (
      <ButtonElement
        className={className}
        $inverse={inverse}
        $secondary={secondary}
        $size={size}
        {...rest}
      >
        {text}
        <Pin $size={size} $inverse={inverse} />
      </ButtonElement>
    );
  },
);

Button.displayName = 'Button';
