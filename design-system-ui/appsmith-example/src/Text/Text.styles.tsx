import styled, { css } from "styled-components";
import { TextKind } from "./Text.types";

const Variables = css`
  // Variables that are controlled, changed, or toggled entirely within this component
  // are defined here and used in the component's styles.
`;

// Kind style definitions
const Kind = css`
  // Styles for the kinds defined in your type
`;

export const StyledText = styled.span<{
  // Props that affect styles are passed through here.
  kind?: TextKind;
}>`
  ${Variables}

  /* Kind styles */
  ${({ kind }) => kind && Kind[kind]}
`;
