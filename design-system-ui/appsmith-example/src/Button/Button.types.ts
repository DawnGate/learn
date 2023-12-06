/* eslint-disable no-unused-vars */
// Button props

import { ChangeEvent, HTMLAttributes } from "react";

export type ButtonSize = "sm" | "md";

export type ButtonKind = "error" | "primary" | "secondary" | "tertiary";

export type ButtonType = "submit" | "reset" | "button";

export type ButtonRenderAs = "a" | "button";

export type ButtonProps = {
  children?: React.ReactNode;
  /** The class name to apply to the button component. */
  className?: string;
  onClick?: (event: ChangeEvent<HTMLButtonElement>) => void;
  /**	The icon to display before the button text. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon. */
  startIcon?: string;
  /** The icon to display after the button text. Pass name of the icon from remix-icon library(eg: home-2-line) or an svg icon. */
  endIcon?: string;
  /** The size of the button. */
  size?: ButtonSize;
  /** The visual style to apply to the button. */
  kind?: ButtonKind;
  /** The type of the button. This defaults to button type. */
  type?: ButtonType;
  /** The HTML element to render the button as. */
  renderAs?: ButtonRenderAs;
  /** Whether the button should display a loading spinner. */
  isLoading?: boolean;
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** Whether the button contains only an icon or not. If true, only pass the icon value to startIcon. */
  isIconButton?: boolean;
  /** The height of the button. Accepts all css units. */
  UNSAFE_height?: string;
  /** The width of the button. Accepts all css units. */
  UNSAFE_width?: string;
  /** The href attribute to apply to the button if it renders as an anchor. */
  href?: string;
} & HTMLAttributes<HTMLButtonElement>;
