import styled, { css } from 'styled-components'

import * as theme from '../../theme'
import { StyleReset } from '../StyleReset'

type ButtonProps = {
  size?: 'small' | 'medium'
  accent?: 'normal' | 'primary' | 'destructive'
}

export const Button = styled.button<ButtonProps>`
  /*
    Using CSS variables across multiple files is usually a bad idea,
    because unlike with JS variables we don't get typescript's help.

    However, within a single file like here CSS variables can save us
    a few lines of typing and make the code easier to read.
  */
  --text-color: ${theme.colors.text.inverted};
  --background-color: ${theme.colors.background.dark};
  --background-color-hover: ${theme.colors.background.dark};

  ${StyleReset}
  ${theme.typography.label.large}
  padding: 0.8em 5.4em;
  color: var(--text-color);
  border-radius: 4px;
  transition: background-color 0.3s;
  background-color: var(--background-color);

  &:disabled {
    --text-color: ${theme.colors.text.inactive};
    --background-color: ${theme.colors.background.inactive};
  }

  &:not(:disabled) {
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: var(--background-color-hover);
    }
  }

  ${(props) =>
    props.accent === 'primary' &&
    css`
      --background-color: ${theme.colors.accent.primary};
      --background-color-hover: ${theme.colors.accent.primaryHover};
    `}

  ${(props) =>
    props.accent === 'destructive' &&
    css`
      --background-color: ${theme.colors.accent.destructive};
      --background-color-hover: ${theme.colors.accent.destructiveHover};
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      ${theme.typography.label.medium}
      padding: 0.3em 2em 0.2em;
    `}
`
