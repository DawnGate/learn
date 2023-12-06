import styled, { css } from "styled-components";
import { ButtonKind, ButtonSize } from "./Button.types";

const Variables = css`
  // Variables that are controlled, changed, or toggled entirely within this component
  // are defined here and used in the component's styles.
  --button-font-weight: 600;
  --button-font-size: 14px;
  --button-padding: var(--ads-v2-spaces-3) var(--ads-v2-spaces-4);
  --button-gap: var(--ads-v2-spaces-2);
  --button-color-bg: var(--ads-v2-colors-action-primary-surface-default-bg);
  --button-color-fg: var(--ads-v2-colors-action-primary-label-default-fg);
  --button-color-border: var(
    --ads-v2-colors-action-primary-surface-default-border
  );
  --button-height: 24px;
`;

const getSizes = (size: ButtonSize, isIconButton?: boolean) => {
  const Sizes = {
    sm: css`
      --button-font-weight: 500;
      --button-font-size: 12px;
      --button-padding: ${isIconButton
        ? "var(--ads-v2-spaces-2)"
        : "var(--ads-v2-spaces-2) var(--ads-v2-spaces-3)"};
      --button-gap: var(--ads-v2-spaces-2);
    `,
    md: css`
      --button-font-weight: 600;
      --button-font-size: 14px;
      --button-padding: ${isIconButton
        ? "var(--ads-v2-spaces-3)"
        : "var(--ads-v2-spaces-3) var(--ads-v2-spaces-4)"};
      --button-gap: var(--ads-v2-spaces-3);
    `,
  };

  return Sizes[size];
};

const getHeights = (size: ButtonSize, isIconButton?: boolean) => {
  const Heights = {
    sm: css`
      --button-height: 24px;
      ${isIconButton && `width: 24px`}
    `,
    md: css`
      --button-height: 36px;
      ${isIconButton && `width: 36px`}
    `,
  };

  return Heights[size];
};

// Kind style definitions
const Kind = {
  // Styles for the kinds defined in your type
  primary: css`
    --button-color-bg: var(--ads-v2-colors-action-primary-surface-default-bg);
    --button-color-fg: var(--ads-v2-colors-action-primary-label-default-fg);
    --button-color-border: var(
      --ads-v2-colors-action-primary-surface-default-border
    );

    &:hover:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-colors-action-primary-surface-hover-bg);
      --button-color-fg: var(--ads-v2-colors-action-primary-label-default-fg);
      --button-color-border: var(
        --ads-v2-colors-action-primary-surface-hover-border
      );
    }

    &:active:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-colors-action-primary-surface-active-bg);
      --button-color-fg: var(--ads-v2-colors-action-primary-label-default-fg);
      --button-color-border: var(
        --ads-v2-colors-action-primary-surface-active-border
      );
    }
  `,
  secondary: css`
    --button-color-bg: var(--ads-v2-colors-action-secondary-surface-default-bg);
    --button-color-fg: var(--ads-v2-colors-action-secondary-label-default-fg);
    --button-color-border: var(
      --ads-v2-colors-action-secondary-surface-default-border
    );

    &:hover:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-colors-action-secondary-surface-hover-bg);
      --button-color-fg: var(--ads-v2-colors-action-secondary-label-default-fg);
      --button-color-border: var(
        --ads-v2-colors-action-secondary-surface-hover-border
      );
    }

    &:active:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(
        --ads-v2-colors-action-secondary-surface-active-bg
      );
      --button-color-fg: var(--ads-v2-colors-action-secondary-label-default-fg);
      --button-color-border: var(
        --ads-v2-colors-action-secondary-surface-active-border
      );
    }
  `,
  tertiary: css`
    --button-color-bg: var(--ads-v2-colors-action-tertiary-surface-default-bg);
    --button-color-fg: var(--ads-v2-colors-action-tertiary-label-default-fg);
    --button-color-border: var(
      --ads-v2-colors-action-tertiary-surface-default-border
    );

    mix-blend-mode: multiply;

    &:hover:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-colors-action-tertiary-surface-hover-bg);
      --button-color-fg: var(--ads-v2-colors-action-tertiary-label-default-fg);
    }

    &:active:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-colors-action-tertiary-surface-active-bg);
      --button-color-fg: var(--ads-v2-colors-action-tertiary-label-default-fg);
    }

    &:disabled {
      --button-color-bg: var(
        --ads-v2-colors-action-tertiary-surface-default-bg
      );
    }
  `,
  error: css`
    --button-color-bg: var(--ads-v2-colors-action-error-surface-default-bg);
    --button-color-fg: var(--ads-v2-colors-action-error-label-default-fg);
    --button-color-border: var(
      --ads-v2-colors-action-error-surface-default-border
    );

    &:hover:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-colors-action-error-surface-hover-bg);
      --button-color-fg: var(--ads-v2-colors-action-error-label-default-fg);
    }

    &:active:not([data-disabled="true"]):not([data-loading="true"]) {
      --button-color-bg: var(--ads-v2-colors-action-primary-surface-active-bg);
      --button-color-fg: var(--ads-v2-colors-action-primary-label-default-fg);
    }
  `,
};

export const StyledButton = styled.button<{
  kind?: ButtonKind;
  UNSAFE_height?: string;
  UNSAFE_width?: string;
  disabled?: boolean;
  isIconButton?: boolean;
  size?: ButtonSize;
}>`
  ${Variables}

  /* Kind styles */
  ${({ kind }) => kind && Kind[kind]}

  /* Base style */
  position: relative;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--button-color-fg);
  text-decoration: none;
  height: var(--button-height);
  padding: 0px;
  box-sizing: border-box;
  overflow: hidden;
  min-width: fit-content;
  border-radius: var(--ads-v2-border-radius) !important;
`;

export const ButtonContent = styled.div<{
  isIconButton?: boolean;
  size?: ButtonSize;
}>``;
