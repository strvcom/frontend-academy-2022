import styled, { css } from 'styled-components'

import * as theme from '../../theme'

import { Logo } from './parts/Logo'

export const StyledLogo = styled(Logo)``

export const StyledHeader = styled.header<{ isAbsolute?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2.4rem;
  z-index: 100;

  ${theme.mq.medium} {
    padding: 4rem;
  }

  ${(props) =>
    props.isAbsolute &&
    css`
      ${theme.mq.medium} {
        position: absolute;
        top: 0;
        left: 0;

        ${StyledLogo} {
          color: ${theme.colors.text.inverted};
        }
      }
    `}
`
