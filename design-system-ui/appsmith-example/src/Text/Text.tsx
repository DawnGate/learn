import React from "react";

import { TextProps } from "./Text.types";
import { StyledText } from "./Text.styles";

function Text({ children, ...rest }: TextProps) {
  return <StyledText {...rest}>{children}</StyledText>;
}

Text.displayName = "Text";

export { Text };
