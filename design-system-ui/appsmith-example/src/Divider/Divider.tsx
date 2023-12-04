import React from "react";

import { DividerProps } from "./Divider.types";
import { StyledDivider } from "./Divider.styles";

function Divider({ ...rest }: DividerProps) {
  return <StyledDivider {...rest} />;
}

Divider.displayName = "Divider";

Divider.defaultProps = {
  orientation: "horizontal",
};

export { Divider };
