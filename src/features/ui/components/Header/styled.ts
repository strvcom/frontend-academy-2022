import styled, { css } from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'

import { Logo } from './parts/Logo'

export const StyledLogo = styled(Logo)`
  font-size: 2.8rem;
  line-height: 1;
`

export const StyledHeader = styled.header<{ isAbsolute?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2.4rem;

  ${mq.medium} {
    padding: 4rem;
  }

  ${(props) =>
    props.isAbsolute &&
    css`
      position: absolute;
      top: 0;
      left: 0;

      ${StyledLogo} {
        color: ${colors.text.inverted};
      }
    `}
`
