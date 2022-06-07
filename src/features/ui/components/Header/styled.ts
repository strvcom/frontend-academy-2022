import styled, { css } from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'

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

  ${mq.medium} {
    padding: 4rem;
  }

  ${(props) =>
    props.isAbsolute &&
    css`
      ${mq.medium} {
        position: absolute;
        top: 0;
        left: 0;

        ${StyledLogo} {
          color: ${colors.text.inverted};
        }
      }
    `}
`
