import styled, { css } from "styled-components";

const Variables = css`
  --divider-thickness: 1px;
  --divider-length: 100%;
  display: inline-block;
`;

const Orientation = {
  horizontal: css`
    border-top: var(--divider-thickness) solid
      var(--ads-v2-colors-content-surface-default-border);
    width: var(--divider-length);
  `,

  vertical: css`
    border-left: var(--divider-thickness) solid
      var(--ads-v2-colors-content-surface-default-border);
    height: var(--divider-length);
  `,
};

export const StyledDivider = styled.span<{
  orientation?: "horizontal" | "vertical";
}>`
  ${Variables}

  /* Orientation */
  ${({ orientation }) => orientation && Orientation[orientation]}
`;
