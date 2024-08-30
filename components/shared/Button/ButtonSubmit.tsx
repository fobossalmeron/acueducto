import React from "react";
import { ButtonElement, Pin } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export type ButtonSubmitRef = any;

export const ButtonSubmit = React.forwardRef<ButtonSubmitRef, ButtonProps>(
  (props, ref) => {
    console.log(
      `ButtonSubmit renderizado con inverse: ${props.inverse}, componente padre: ${props.parentComponent || "Desconocido"}`
    );

    return (
      <ButtonElement $inverse={props.inverse} $marginTop>
        <input type="submit" value={props.text} />
        {props.text}
        <Pin $inverse={props.inverse} />
      </ButtonElement>
    );
  }
);

ButtonSubmit.displayName = "ButtonSubmit";

export default ButtonSubmit;
