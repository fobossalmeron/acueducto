import React, { memo } from "react";
import { Pin, ButtonElement } from "./Button.styles";
import { ButtonProps } from "./Button.types";

//Estabas exportando Pin desde este archivo

export const Button = memo<ButtonProps & React.HTMLAttributes<HTMLDivElement>>(({
  inverse = false,
  text,
  className,
  secondary = false,
  parentComponent = "Desconocido",
  ...rest
}) => {
  console.log(
    `Button renderizado con inverse: ${inverse}, componente padre: ${parentComponent} y es ${secondary}`
  );

  return (
    <ButtonElement
      className={className}
      $inverse={inverse}
      $secondary={secondary}
      {...rest}
    >
      {text}
      <Pin $inverse={inverse} />
    </ButtonElement>
  );
});

Button.displayName = "Button";
