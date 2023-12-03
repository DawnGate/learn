// Text props
import React from "react";

export type TextKind =
  | "heading-xl"
  | "heading-l"
  | "heading-m"
  | "heading-s"
  | "heading-xs"
  | "body-m"
  | "body-s"
  | "action-l"
  | "action-m"
  | "action-s"
  | "code";

export type TextProps = {
  /** To change the rendering component */
  renderAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
  className?: string;
  children?: React.ReactNode;
  kind?: TextKind;
};
