import React from "react";
import { ButtonElement, Pin } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export type ButtonSubmitRef = HTMLInputElement;

export const ButtonSubmit = React.forwardRef<ButtonSubmitRef, ButtonProps>(
  ({ inverse = false, text, parentComponent = "Desconocido", ...rest }, ref) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `ButtonSubmit renderizado con inverse: ${inverse}, componente padre: ${parentComponent}`
      );
    }

    return (
      <ButtonElement $inverse={inverse} $marginTop>
        <input type="submit" value={text} ref={ref} {...rest} />
        {text}
        <Pin $inverse={inverse} />
      </ButtonElement>
    );
  }
);

ButtonSubmit.displayName = "ButtonSubmit";