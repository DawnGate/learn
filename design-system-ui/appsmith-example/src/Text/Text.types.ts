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
  className?: string;
  children?: React.ReactNode;
  kind?: TextKind;
};
