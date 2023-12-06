import styled, { css } from "styled-components";
import { ButtonKind, ButtonSize } from "./Button.types";
import {
  ButtonContentElementChildClassName,
  ButtonContentEndIconClassName,
  ButtonContentStartIconClassName,
  ButtonLoadingClassName,
} from "./Button.constants";

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

export const ButtonContent = styled.div<{
  isIconButton?: boolean;
  size?: ButtonSize;
}>`
  /* Size style */

  ${({ isIconButton, size }) => size && getSizes(size, isIconButton)}

  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: inherit;

  background-color: var(--button-color-bg);
  border: 1px solid var(--button-color-border);
  gap: var(--button-gap);
  padding: var(--button-padding);

  & > .${ButtonContentElementChildClassName} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &
    > .${ButtonContentElementChildClassName},
    &
    > .${ButtonContentElementChildClassName}
    > * {
    color: var(--button-color-fg);
    font-family: var(--ads-v2-font-family);
    font-weight: var(--button-font-weight);
    font-size: var(--button-font-size);
  }

  & > .${ButtonContentStartIconClassName} > svg,
  & > .${ButtonContentEndIconClassName} > svg {
    color: var(--button-color-fg);
  }
`;

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

  /* Button heights */

  ${({ isIconButton, size }) => size && getHeights(size, isIconButton)}

  /* && => create individual components => make sure other button will not have problem with inherit property */
  && {
    /* Base style */
    position: relative;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: var(--button-color-fg);
    text-decoration: none;

    padding: 0px;
    box-sizing: border-box;
    overflow: hidden;

    border-radius: var(--ads-v2-border-radius) !important;

    ${({ UNSAFE_height }) =>
      UNSAFE_height
        ? `height: ${UNSAFE_height};`
        : "height: var(--button-height)"}
    ${({ UNSAFE_width }) => UNSAFE_width && `width: ${UNSAFE_width};`}
    min-width: ${({ isIconButton }) =>
      isIconButton ? "unset" : "fit-content"};

    /*  button disable style */
    &[data-disabled="true"] {
      cursor: not-allowed;
      opacity: var(--ads-v2-opacity-disabled);
    }

    /* Loader style */
    & > .${ButtonLoadingClassName} {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      color: var(--button-color-fg);
    }

    /* Loading styles */
    &[data-loading="true"] {
      cursor: not-allowed;

      & > .${ButtonContent} {
        opacity: var(--ads-v2-opacity-disabled);
      }

      & > ${ButtonContent} > * {
        visibility: hidden;
      }
    }
  }
`;
