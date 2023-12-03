import styled, { css } from "styled-components";
import { TextKind } from "./Text.types";

// css util only need if this is a function for handling css style
// const Typography = css``
// style with css variable and have a tokenize settings
const Typography = `
  --ads-v2-h1-font-size: var(--ads-v2-font-size-10);
  --ads-v2-h1-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h1-line-height: var(--ads-v2-line-height-8);
  --ads-v2-h1-letter-spacing: var(--ads-v2-letter-spacing-2);

  --ads-v2-h2-font-size: var(--ads-v2-font-size-8);
  --ads-v2-h2-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h2-line-height: var(--ads-v2-line-height-7);
  --ads-v2-h2-letter-spacing: var(--ads-v2-letter-spacing-2);

  --ads-v2-h3-font-size: var(--ads-v2-font-size-7);
  --ads-v2-h3-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h3-line-height: var(--ads-v2-line-height-6);
  --ads-v2-h3-letter-spacing: var(--ads-v2-letter-spacing-2);

  --ads-v2-h4-font-size: var(--ads-v2-font-size-6);
  --ads-v2-h4-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h4-line-height: var(--ads-v2-line-height-3);
  --ads-v2-h4-letter-spacing: var(--ads-v2-letter-spacing-0);

  --ads-v2-h5-font-size: var(--ads-v2-font-size-4);
  --ads-v2-h5-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h5-line-height: var(--ads-v2-line-height-3);
  --ads-v2-h5-letter-spacing: var(--ads-v2-letter-spacing-0);

  --ads-v2-h6-font-size: var(--ads-v2-font-size-2);
  --ads-v2-h6-font-weight: var(--ads-v2-font-weight-bold);
  --ads-v2-h6-line-height: var(--ads-v2-line-height-1);
  --ads-v2-h6-letter-spacing: var(--ads-v2-letter-spacing-3);

  --ads-v2-p-font-size: var(--ads-v2-font-size-4);
  --ads-v2-p-font-weight: var(--ads-v2-font-weight-normal);
  --ads-v2-p-line-height: var(--ads-v2-line-height-3);
  --ads-v2-p-letter-spacing: var(--ads-v2-letter-spacing-0);
`;

const Variables = `
  --font-family: var(--ads-v2-font-family);
  --color: var(--ads-v2-colors-content-label-default-fg);

  --font-size: var(--ads-v2-p-font-size);
  --font-weight: var(--ads-v2-p-font-weight);
  --line-height: var(--ads-v2-p-line-height);
  --letter-spacing: var(--ads-v2-p-letter-spacing);
`;

// Kind style definitions
const Kind = {
  // The default, span, uses the same values as p for now.
  span: css`
    --font-size: var(--ads-v2-p-font-size);
    --font-weight: var(--ads-v2-p-font-weight);
    --line-height: var(--ads-v2-p-line-height);
    --letter-spacing: var(--ads-v2-p-letter-spacing);
  `,
  code: css`
    --font-family: var(--ads-v2-font-family-code);
    --font-size: var(--ads-v2-font-size-4);
  `,
};

export const StyledText = styled.span<{
  // Props that affect styles are passed through here.
  kind?: TextKind;
  color?: string;
  isEditable?: boolean;
}>`
  ${Typography}
  ${Variables}

  /* Kind styles */
  ${({ kind }) => kind && Kind[kind]}

  /* Base style */
  font-family: var(--font-family);
  color: ${({ color }) => (color ? color : "var(--color)")};

  font-size: var(--font-size);
  font-weight: var(--font-weight);
  /* line-height: var(--line-height); */
  letter-spacing: var(--letter-spacing);
  margin: 0;
  position: relative;

  /* Bold style */
  &[data-bold="true"] {
    font-weight: var(--ads-v2-font-weight-bold);
  }

  /* Editable */
  ${({ isEditable }) =>
    isEditable &&
    `
      &:after{}
    `}
`;

export const StyledEditableInput = styled.input`
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  text-decoration: inherit;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: var(--ads-v2-border-radius);
  outline: none;
  padding: 0;
  margin: 0;
  position: absolute;
  left: -3px;
  top: -3px;
  width: 100%;
  padding: var(--ads-v2-spaces-1);

  &:hover {
    border-color: var(--ads-v2-colors-control-field-hover-border);
  }

  &:focus,
  &:active {
    border-color: var(--ads-v2-colors-control-field-default-border);
  }
`;
