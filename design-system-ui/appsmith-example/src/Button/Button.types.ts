// Button props

import { HTMLAttributes } from "react";

export type ButtonSize = "sm" | "md";

export type ButtonKind = "error" | "primary" | "secondary" | "tertiary";

export type ButtonType = "submit" | "reset" | "button";

export type ButtonRenderAs = "a" | "button";

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick: () => void;
  /**	The icon to display before the button text. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon. */
  startIcon?: string;
  /** The icon to display after the button text. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon. */
  endIcon?: string;
  /** The size of the button. */
  size?: ButtonSize;
  /** The visual style to apply to the button. */
  kind?: ButtonKind;
  type?: ButtonType;
  renderAs?: ButtonRenderAs;
  isLoading?: boolean;
  isDisabled?: boolean;
  isIconButton?: boolean;
  UNSAFE_height?: string;
  UNSAFE_width?: string;
  href?: string;
} & HTMLAttributes<HTMLButtonElement>;
