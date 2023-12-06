import React, { forwardRef } from "react";

import { ButtonProps } from "./Button.types";
import { StyledButton, ButtonContent } from "./Button.styles";

import {
  ButtonClassName,
  ButtonContentClassName,
  ButtonContentElementChildClassName,
  ButtonContentStartIconClassName,
  ButtonContentEndIconClassName,
  ButtonLoadingClassName,
  ButtonLoadingIconClassName,
} from "./Button.constants";

import { useDOMRef } from "__hooks__/useDomRef";
import clsx from "clsx";

// import { Icon } from "Icon";
// import { Spinner } from "Spinner";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    endIcon,
    startIcon,
    isIconButton,
    isLoading,
    isDisabled,
    kind,
    renderAs,
    size,
    UNSAFE_height,
    UNSAFE_width,
    ...rest
  } = props;

  rest.onClick =
    props.isLoading || props.isDisabled ? undefined : props.onClick;

  const buttonRef = useDOMRef(ref);

  return (
    <StyledButton
      {...rest}
      as={renderAs}
      className={clsx(ButtonClassName, className)}
      kind={kind}
      size={size}
      disabled={isDisabled}
      data-loading={isLoading}
      data-disabled={isDisabled || false}
      isIconButton={isIconButton}
      UNSAFE_height={UNSAFE_height}
      UNSAFE_width={UNSAFE_width}
      ref={buttonRef}
    >
      {/* Using Spinner replace */}
      {isLoading && (
        <span className={ButtonLoadingClassName}>
          <label className={ButtonLoadingIconClassName}>Loading</label>
        </span>
      )}
      <ButtonContent
        className={ButtonContentClassName}
        size={size}
        isIconButton={isIconButton}
      >
        {startIcon && (
          <span className={ButtonContentStartIconClassName}>{startIcon}</span>
        )}
        <span className={ButtonContentElementChildClassName}>{children}</span>
        {endIcon && (
          <span className={ButtonContentEndIconClassName}>{endIcon}</span>
        )}
      </ButtonContent>
    </StyledButton>
  );
});

Button.displayName = "Button";

Button.defaultProps = {
  size: "sm",
  kind: "primary",
  type: "button",
  renderAs: "button",
  isLoading: false,
  isDisabled: false,
};

export { Button };
