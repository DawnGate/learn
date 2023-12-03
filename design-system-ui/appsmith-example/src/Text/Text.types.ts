/* eslint-disable no-unused-vars */
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

// using react-docgen as default, see https://react-docgen.dev/ for more information
export type TextProps = {
  /** To change the rendering component */
  renderAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
  /** (Try not to) pass addition class here */
  className?: string;
  /** the words that you want to display */
  children?: React.ReactNode;
  /** color for text, accept any valid css string for color*/
  color?: string;
  /** style the text based on it's function */
  kind?: TextKind;
  /** whether the text is editable or not */
  isEditable?: boolean;
  /** whether the text is bold or not */
  isBold?: boolean;
  /** onChange event for editable text */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** inputProps when text isEditable */
  inputProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
  >;
} & React.HTMLAttributes<HTMLSpanElement> &
  React.HTMLAttributes<HTMLHeadingElement> &
  React.HTMLAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLSpanElement> &
  React.LabelHTMLAttributes<HTMLLabelElement>;
