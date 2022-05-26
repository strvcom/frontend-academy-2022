import styled, { css } from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'

export const ListItem = styled.li<{ isActive: boolean }>`
  display: inline-block;
  list-style: none;
  margin-left: 0.8rem;
  color: ${(props) =>
    props.isActive ? colors.text.base : colors.background.inactive};

  button {
    ${StyleReset}
    font-size: 2.4rem;

    ${(props) =>
      !props.isActive &&
      css`
        cursor: pointer;
      `}
  }
`
