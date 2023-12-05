import React from "react";

import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

function Button({ children, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.displayName = "Button";

export { Button };
