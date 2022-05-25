import styled, { css } from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

type ButtonProps = {
  size?: 'small' | 'medium'
  accent?: 'normal' | 'primary' | 'destructive'
}

export const Button = styled.button<ButtonProps>`
  --backgrund-color: ${colors.background.dark};
  --backgrund-color-hover: ${colors.background.dark};

  ${StyleReset}
  ${typography.label.large}
  padding: 0.8em 5.4em;
  color: ${colors.text.inverted};
  border-radius: 4px;
  transition: background-color 0.3s;
  background-color: var(--backgrund-color);

  &:not(:disabled) {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    background-color: var(--backgrund-color-hover);
  }

  ${(props) =>
    props.accent === 'primary' &&
    css`
      --backgrund-color: ${colors.accent.primary};
      --backgrund-color-hover: ${colors.accent.primaryHover};
    `}

  ${(props) =>
    props.accent === 'destructive' &&
    css`
      --backgrund-color: ${colors.accent.destructive};
      --backgrund-color-hover: ${colors.accent.destructiveHover};
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      ${typography.label.medium}
      padding: 0.3em 2em 0.2em;
    `}
`
