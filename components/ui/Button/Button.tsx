import React, { memo } from 'react';
import { Pin, ButtonElement } from './Button.styles';
import { ButtonProps } from './Button.types';

//Estabas exportando Pin desde este archivo

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
    // Solo mostramos el log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `Button renderizado con inverse: ${inverse}, componente padre: ${parentComponent} y es ${secondary}`,
      );
    }

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
