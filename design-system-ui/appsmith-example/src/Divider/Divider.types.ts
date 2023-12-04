// Divider props

import { HTMLAttributes } from "react";

export type DividerProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** control the direction of the divider */
  orientation?: "horizontal" | "vertical";
} & HTMLAttributes<HTMLSpanElement>;
