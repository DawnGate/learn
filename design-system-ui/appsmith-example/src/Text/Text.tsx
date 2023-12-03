import React from "react";
import clsx from "clsx";

import { TextProps } from "./Text.types";
import { StyledEditableInput, StyledText } from "./Text.styles";
import { TextClassName } from "./Text.constants";

function Text({
  children,
  renderAs,
  color,
  className,
  kind,
  isEditable,
  isBold,
  onChange,
  inputProps,
  ...rest
}: TextProps) {
  return (
    <StyledText
      as={renderAs}
      color={color}
      className={clsx(TextClassName, className)}
      data-bold={isBold}
      data-value={isEditable && typeof children === "string" ? children : null}
      isEditable={isEditable && typeof children === "string"}
      kind={kind}
      {...rest}
    >
      {isEditable && typeof children === "string" ? (
        <StyledEditableInput
          onChange={onChange}
          value={children}
          {...inputProps}
        />
      ) : (
        children
      )}
    </StyledText>
  );
}

Text.displayName = "Text";

Text.defaultProps = {
  renderAs: "span",
  kind: "span",
};

export { Text };
